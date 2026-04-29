"use client";

import { useEffect, useRef } from "react";

const ROT_SPEED = 0.8;
const RADIUS = 78;
const TWIST = 3;
const DENSITY = 112;
const DRIFT = 0.6;
const BANDS = 8;

export function ValueFlowAnimation({ style }: { style?: React.CSSProperties }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    svg.innerHTML = `
      <defs>
        <radialGradient id="vf-ntG" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="#7CFFCB" stop-opacity="1"/>
          <stop offset="60%"  stop-color="#00F096" stop-opacity="1"/>
          <stop offset="100%" stop-color="#00F096" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="vf-ntC" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="#A8FFFF" stop-opacity="1"/>
          <stop offset="60%"  stop-color="#00F0F0" stop-opacity="1"/>
          <stop offset="100%" stop-color="#00F0F0" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="vf-rung" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%"   stop-color="#00F096"/>
          <stop offset="100%" stop-color="#00F0F0"/>
        </linearGradient>
        <linearGradient id="vf-edge" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%"   stop-color="#fff" stop-opacity="0"/>
          <stop offset="8%"   stop-color="#fff" stop-opacity="1"/>
          <stop offset="92%"  stop-color="#fff" stop-opacity="1"/>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </linearGradient>
        <mask id="vf-fade">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#vf-edge)"/>
        </mask>
      </defs>
      <g id="vf-helix" mask="url(#vf-fade)"></g>
    `;
    const helixGroup = svg.querySelector("#vf-helix") as SVGGElement;

    let W = 0,
      H = 0;
    const sizeSvg = () => {
      const r = svg.getBoundingClientRect();
      W = r.width || 800;
      H = r.height || 500;
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    };

    let driftOffset = 0;
    let rotOffset = 0;
    let pulseProgress = 0;
    let lastT = performance.now();

    function drawHelix() {
      const cy = H * 0.4;
      const R = RADIUS;
      const N = Math.max(20, Math.round(DENSITY));
      const BP_EVERY = Math.max(2, Math.round(N / (TWIST * 6)));
      const margin = 80;

      const xs: number[] = Array.from(
        { length: N },
        (_, i) => -margin + (i / (N - 1)) * (W + margin * 2),
      );

      const phaseAt = (i: number) =>
        ((xs[i] + margin) / (W + margin * 2)) * TWIST * Math.PI * 2 + rotOffset + driftOffset;

      type Pt = { x: number; y: number; z: number };
      const A: Pt[] = [];
      const B: Pt[] = [];
      for (let i = 0; i < N; i++) {
        const ph = phaseAt(i);
        A.push({ x: xs[i], y: cy + Math.sin(ph) * R, z: Math.cos(ph) * R });
        B.push({ x: xs[i], y: cy + Math.sin(ph + Math.PI) * R, z: Math.cos(ph + Math.PI) * R });
      }

      const items: Array<{ z: number; svg: string }> = [];

      const pushStrand = (pts: Pt[], color: string) => {
        let curBand = -1,
          curPath = "",
          curZ = 0,
          curCount = 0;
        const flush = () => {
          if (!curPath) return;
          const op = (0.55 + 0.45 * (curZ / R)).toFixed(2);
          const sw = (1.6 + 1.6 * (curZ / R)).toFixed(2);
          items.push({
            z: curZ,
            svg: `<path d="${curPath}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" opacity="${op}"/>`,
          });
          curPath = "";
          curZ = 0;
          curCount = 0;
        };
        for (let i = 0; i < pts.length - 1; i++) {
          const p1 = pts[i],
            p2 = pts[i + 1];
          const avgZ = (p1.z + p2.z) / 2;
          const bandIdx = Math.floor(((avgZ + R) / (2 * R)) * BANDS);
          if (bandIdx !== curBand) {
            flush();
            curBand = bandIdx;
            curPath = `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} L ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
          } else curPath += ` L ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
          curZ = (curZ * curCount + avgZ) / (curCount + 1);
          curCount++;
        }
        flush();
      };
      pushStrand(A, "#00F096");
      pushStrand(B, "#00F0F0");

      // Base-pair rungs
      for (let i = 0; i < N; i += BP_EVERY) {
        const a = A[i],
          b = B[i];
        const avgZ = (a.z + b.z) / 2;
        const op = (0.25 + 0.55 * ((avgZ + R) / (2 * R))).toFixed(2);
        items.push({
          z: avgZ - 1,
          svg: `<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}" stroke="url(#vf-rung)" stroke-width="1.4" stroke-linecap="round" opacity="${op}"/>`,
        });
      }

      // Nucleotides with light-pulse boost
      const NT_EVERY = Math.max(1, Math.round(BP_EVERY / 1.5));
      const pulseSpan = W * 0.14;
      const pulseXs = [
        -margin + (pulseProgress % 1) * (W + margin * 2),
        -margin + ((pulseProgress + 0.5) % 1) * (W + margin * 2),
      ];
      const pulseBoost = (x: number) => {
        let best = 0;
        for (const px of pulseXs) {
          const d = Math.abs(x - px);
          if (d < pulseSpan) {
            const t = 1 - d / pulseSpan;
            best = Math.max(best, t * t * (3 - 2 * t));
          }
        }
        return best * 0.8;
      };
      const pushNt = (p: Pt, fill: string) => {
        const df = (p.z + R) / (2 * R);
        const boost = pulseBoost(p.x);
        const r = (1.8 + 4.0 * df + boost * 4.5).toFixed(2);
        const op = Math.min(1, 0.45 + 0.55 * df + boost * 0.45).toFixed(2);
        const glow =
          boost > 0.04
            ? `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${(parseFloat(r) * 0.55).toFixed(2)}" fill="#fff" opacity="${(boost * 0.85).toFixed(2)}"/>`
            : "";
        items.push({
          z: p.z + (boost > 0 ? 0.5 : 0),
          svg: `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${r}" fill="${fill}" opacity="${op}"/>${glow}`,
        });
      };
      for (let i = 0; i < N; i += NT_EVERY) {
        pushNt(A[i], "url(#vf-ntG)");
        pushNt(B[i], "url(#vf-ntC)");
      }

      items.sort((a, b) => a.z - b.z);
      helixGroup.innerHTML = items.map((it) => it.svg).join("");
    }

    let rafId: number;
    const frame = (now: number) => {
      const dt = Math.min(50, now - lastT);
      lastT = now;
      rotOffset += ROT_SPEED * (dt / 1000);
      driftOffset -= DRIFT * (dt / 1000);
      pulseProgress = (pulseProgress + dt / 1000 / 6.5) % 1;
      drawHelix();
      rafId = requestAnimationFrame(frame);
    };

    sizeSvg();
    window.addEventListener("resize", sizeSvg);
    rafId = requestAnimationFrame((t) => {
      lastT = t;
      frame(t);
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", sizeSvg);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(300px, 36vw, 520px)",
        background: "#000",
        overflow: "hidden",
        isolation: "isolate",
        ...style,
      }}
    >
      {/* edge vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.7) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(55% 55% at 30% 60%, rgba(0,240,150,0.13), transparent 70%), radial-gradient(55% 55% at 70% 60%, rgba(0,240,240,0.13), transparent 70%)",
          filter: "blur(28px)",
          pointerEvents: "none",
        }}
      />

      {/* helix SVG */}
      <svg
        ref={svgRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      />
    </div>
  );
}
