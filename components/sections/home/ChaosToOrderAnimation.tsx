"use client";

import { useEffect, useRef, useState } from "react";

// ── constants ────────────────────────────────────────────────────────────────
const N = 14;
const AMP = 100;
const HELIX_H = 340;
const ROT_SPEED = 0.007;
const TRANSITION_DUR = 140; // frames ≈ 2.3 s at 60 fps

// N-body chaos tuning
const ATTRACT_DIST = 160; // start attracting below this
const REPEL_DIST = 55; // hard repel below this
const ATTRACT_F = 0.0006;
const REPEL_F = 0.018;
const DAMPING = 0.97;

// Stagger: max extra delay frames for farthest node
const STAGGER_MAX = 50;

const LABELS = [
  "EU MDR",
  "IEC 62304",
  "AI Act",
  "GAMP 5",
  "ISO 14971",
  "SRS",
  "PEMS",
  "SOC 2",
  "FDA 21 CFR",
  "UDI",
  "SOP",
  "SOUP",
  "ISO 13485",
  "21 CFR 11",
];

// ── helpers ───────────────────────────────────────────────────────────────────
function ease(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function helixPt(rung: number, strand: number, angle: number, W: number, H: number) {
  const t = (rung / (N - 1)) * Math.PI * 2 + angle;
  const off = strand === 1 ? Math.PI : 0;
  return {
    x: W / 2 + AMP * Math.cos(t + off),
    y: H / 2 - HELIX_H / 2 + (rung / (N - 1)) * HELIX_H,
    z: Math.cos(t + off),
  };
}

// ── types ─────────────────────────────────────────────────────────────────────
interface Nd {
  cx: number;
  cy: number;
  vx: number;
  vy: number;
  sx: number;
  sy: number; // snapshot at activation
  delay: number; // stagger delay in frames
  strand: number;
  rung: number;
  lbl: number;
}

interface PulseRing {
  r: number;
  alpha: number;
}

// ── component ─────────────────────────────────────────────────────────────────
export function ChaosToOrderAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activated, setActivated] = useState(false);

  const stRef = useRef<{
    phase: "chaos" | "transitioning" | "ordered";
    frame: number;
    angle: number;
    nodes: Nd[];
    rings: PulseRing[]; // shockwave rings during transition
  }>({ phase: "chaos", frame: 0, angle: 0, nodes: [], rings: [] });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    // ── prefers-reduced-motion: skip directly to static ordered state ─────────
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const init = (W: number, H: number) => {
      const m = 70;
      stRef.current.nodes = Array.from({ length: N * 2 }, (_, i) => ({
        cx: m + Math.random() * (W - m * 2),
        cy: m + Math.random() * (H - m * 2),
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        sx: 0,
        sy: 0,
        delay: 0,
        strand: i < N ? 0 : 1,
        rung: i % N,
        lbl: i % (N * 2) < LABELS.length ? i % (N * 2) : -1,
      }));

      if (reducedMotion) {
        // immediately place nodes on helix, skip animation
        stRef.current.phase = "ordered";
        stRef.current.angle = 0;
        for (const n of stRef.current.nodes) {
          const pos = helixPt(n.rung, n.strand, 0, W, H);
          n.cx = pos.x;
          n.cy = pos.y;
        }
      }
    };

    const resize = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
      if (stRef.current.nodes.length === 0) init(W, H);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    // ── draw ──────────────────────────────────────────────────────────────────
    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const s = stRef.current;
      ctx.clearRect(0, 0, W, H);

      /* ── CHAOS: N-body cluster simulation ─────────────────────────────── */
      if (s.phase === "chaos") {
        const m = 55;
        for (let i = 0; i < s.nodes.length; i++) {
          const a = s.nodes[i];
          let fx = 0,
            fy = 0;

          for (let j = 0; j < s.nodes.length; j++) {
            if (i === j) continue;
            const b = s.nodes[j];
            const dx = b.cx - a.cx;
            const dy = b.cy - a.cy;
            const d = Math.hypot(dx, dy) || 0.01;
            const nx = dx / d;
            const ny = dy / d;

            if (d < REPEL_DIST) {
              // hard repulsion
              fx -= nx * REPEL_F * (REPEL_DIST / d);
              fy -= ny * REPEL_F * (REPEL_DIST / d);
            } else if (d < ATTRACT_DIST) {
              // soft attraction (same-strand affinity)
              const affinity = a.strand === b.strand ? 1.6 : 0.7;
              fx += nx * ATTRACT_F * affinity * (d / ATTRACT_DIST);
              fy += ny * ATTRACT_F * affinity * (d / ATTRACT_DIST);
            }
          }

          a.vx = (a.vx + fx) * DAMPING;
          a.vy = (a.vy + fy) * DAMPING;

          // clamp speed
          const spd = Math.hypot(a.vx, a.vy);
          if (spd > 1.4) {
            a.vx = (a.vx / spd) * 1.4;
            a.vy = (a.vy / spd) * 1.4;
          }

          a.cx += a.vx;
          a.cy += a.vy;

          // wall bounce
          if (a.cx < m) {
            a.cx = m;
            a.vx = Math.abs(a.vx);
          }
          if (a.cx > W - m) {
            a.cx = W - m;
            a.vx = -Math.abs(a.vx);
          }
          if (a.cy < m) {
            a.cy = m;
            a.vy = Math.abs(a.vy);
          }
          if (a.cy > H - m) {
            a.cy = H - m;
            a.vy = -Math.abs(a.vy);
          }
        }

        // draw connections between nearby nodes
        for (let i = 0; i < s.nodes.length; i++) {
          for (let j = i + 1; j < s.nodes.length; j++) {
            const a = s.nodes[i],
              b = s.nodes[j];
            const d = Math.hypot(a.cx - b.cx, a.cy - b.cy);
            if (d < 115) {
              ctx.beginPath();
              ctx.moveTo(a.cx, a.cy);
              ctx.lineTo(b.cx, b.cy);
              ctx.strokeStyle = `rgba(0,240,150,${0.13 * (1 - d / 115)})`;
              ctx.lineWidth = 0.7;
              ctx.stroke();
            }
          }
        }

        // draw nodes + floating labels
        for (const n of s.nodes) {
          ctx.beginPath();
          ctx.arc(n.cx, n.cy, 4, 0, Math.PI * 2);
          ctx.fillStyle = n.strand === 0 ? "rgba(0,240,150,0.6)" : "rgba(0,210,240,0.6)";
          ctx.fill();
          if (n.lbl >= 0) {
            ctx.font = "9px system-ui, sans-serif";
            ctx.fillStyle = "rgba(105,118,130,0.5)";
            ctx.fillText(LABELS[n.lbl], n.cx + 7, n.cy + 3);
          }
        }

        /* ── TRANSITIONING ─────────────────────────────────────────────── */
      } else if (s.phase === "transitioning") {
        s.frame++;
        const W2 = W / 2;
        const H2 = H / 2;

        // ── pulse rings ──────────────────────────────────────────────────
        s.rings = s.rings
          .map((ring) => ({ r: ring.r + 3.5, alpha: ring.alpha * 0.93 }))
          .filter((ring) => ring.alpha > 0.01);

        for (const ring of s.rings) {
          ctx.beginPath();
          ctx.arc(W2, H2, ring.r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0,240,150,${ring.alpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // ── move nodes with per-node stagger ─────────────────────────────
        const pts: {
          x: number;
          y: number;
          z: number;
          strand: number;
          rung: number;
          lbl: number;
        }[] = [];

        for (const n of s.nodes) {
          const localFrame = s.frame - n.delay;
          if (localFrame <= 0) {
            // not started yet — keep chaos drifting
            n.cx += n.vx * 0.3;
            n.cy += n.vy * 0.3;
            pts.push({ x: n.cx, y: n.cy, z: 0, strand: n.strand, rung: n.rung, lbl: n.lbl });
            continue;
          }
          const prog = Math.min(localFrame / TRANSITION_DUR, 1);
          const e = ease(prog);
          const tg = helixPt(n.rung, n.strand, s.angle, W, H);
          pts.push({
            x: n.sx + (tg.x - n.sx) * e,
            y: n.sy + (tg.y - n.sy) * e,
            z: tg.z * e,
            strand: n.strand,
            rung: n.rung,
            lbl: n.lbl,
          });
        }

        // check if all nodes are done
        const maxDelay = Math.max(...s.nodes.map((n) => n.delay));
        if (s.frame >= maxDelay + TRANSITION_DUR) {
          s.phase = "ordered";
        }

        // draw backbones
        for (let st = 0; st < 2; st++) {
          const sn = pts.filter((p) => p.strand === st).sort((a, b) => a.rung - b.rung);
          const prog = Math.min(s.frame / (maxDelay + TRANSITION_DUR), 1);
          ctx.beginPath();
          sn.forEach((p, i) => {
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
          });
          ctx.strokeStyle =
            st === 0
              ? `rgba(0,240,150,${0.2 + 0.5 * prog})`
              : `rgba(0,210,240,${0.2 + 0.5 * prog})`;
          ctx.lineWidth = 1.6;
          ctx.stroke();
        }

        // draw rungs
        for (let r = 0; r < N; r++) {
          const pA = pts[r],
            pB = pts[N + r];
          ctx.beginPath();
          ctx.moveTo(pA.x, pA.y);
          ctx.lineTo(pB.x, pB.y);
          ctx.strokeStyle = `rgba(0,240,180,${0.12 + 0.28 * ease(Math.min(s.frame / (maxDelay + TRANSITION_DUR), 1))})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // draw nodes
        for (const p of pts) {
          const d = (p.z + 1) / 2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3 + 2.5 * d, 0, Math.PI * 2);
          ctx.fillStyle =
            p.strand === 0
              ? `rgba(0,240,150,${0.35 + 0.55 * d})`
              : `rgba(0,210,240,${0.35 + 0.55 * d})`;
          ctx.fill();
        }

        /* ── ORDERED: rotating helix + labels ──────────────────────────── */
      } else {
        s.angle += ROT_SPEED;

        const pts = s.nodes.map((n) => ({
          ...helixPt(n.rung, n.strand, s.angle, W, H),
          strand: n.strand,
          rung: n.rung,
          lbl: n.lbl,
        }));

        // rungs back→front
        Array.from({ length: N }, (_, r) => ({
          pA: pts[r],
          pB: pts[N + r],
          z: (pts[r].z + pts[N + r].z) / 2,
        }))
          .sort((a, b) => a.z - b.z)
          .forEach(({ pA, pB, z }) => {
            const d = (z + 1) / 2;
            ctx.beginPath();
            ctx.moveTo(pA.x, pA.y);
            ctx.lineTo(pB.x, pB.y);
            ctx.strokeStyle = `rgba(0,240,150,${0.12 + 0.3 * d})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          });

        // backbones
        for (let st = 0; st < 2; st++) {
          const sn = pts.filter((p) => p.strand === st).sort((a, b) => a.rung - b.rung);
          ctx.beginPath();
          sn.forEach((p, i) => {
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
          });
          ctx.strokeStyle = st === 0 ? "rgba(0,240,150,0.72)" : "rgba(0,210,240,0.72)";
          ctx.lineWidth = 1.9;
          ctx.stroke();
        }

        // nodes + labels back→front
        [...pts]
          .sort((a, b) => a.z - b.z)
          .forEach((p) => {
            const d = (p.z + 1) / 2;
            const r = 2 + 3.5 * d;

            // glow halo on front nodes
            if (d > 0.55) {
              ctx.beginPath();
              ctx.arc(p.x, p.y, r + 5, 0, Math.PI * 2);
              ctx.fillStyle =
                p.strand === 0 ? `rgba(0,240,150,${0.07 * d})` : `rgba(0,210,240,${0.07 * d})`;
              ctx.fill();
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
            ctx.fillStyle =
              p.strand === 0
                ? `rgba(0,240,150,${0.2 + 0.8 * d})`
                : `rgba(0,210,240,${0.2 + 0.8 * d})`;
            ctx.fill();

            // label on front-facing nodes only (z > 0)
            if (p.lbl >= 0 && p.z > 0.1) {
              const labelAlpha = Math.min(1, (p.z - 0.1) / 0.4) * 0.85;
              ctx.font = `${Math.round(8 + 3 * d)}px system-ui, sans-serif`;
              ctx.fillStyle = `rgba(${p.strand === 0 ? "0,240,150" : "0,210,240"},${labelAlpha})`;
              ctx.fillText(LABELS[p.lbl], p.x + r + 4, p.y + 4);
            }
          });
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  // ── activate: compute stagger delays, spawn rings ─────────────────────────
  const activate = () => {
    const s = stRef.current;
    if (s.phase !== "chaos") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const W2 = canvas.width / 2;
    const H2 = canvas.height / 2;

    // compute max distance from center for normalisation
    let maxDist = 0;
    for (const n of s.nodes) {
      const d = Math.hypot(n.cx - W2, n.cy - H2);
      if (d > maxDist) maxDist = d;
    }

    for (const n of s.nodes) {
      n.sx = n.cx;
      n.sy = n.cy;
      const dist = Math.hypot(n.cx - W2, n.cy - H2);
      n.delay = Math.round((dist / (maxDist || 1)) * STAGGER_MAX);
    }

    // spawn 3 pulse rings
    s.rings = [
      { r: 8, alpha: 0.75 },
      { r: 4, alpha: 0.5 },
      { r: 0, alpha: 0.35 },
    ];

    s.frame = 0;
    s.phase = "transitioning";
    setActivated(true);
  };

  // ── button: morphs from rect → circle after activation ───────────────────
  const btnStyle: React.CSSProperties = activated
    ? {
        width: 72,
        height: 72,
        padding: 0,
        borderRadius: "50%",
        fontSize: "11px",
        letterSpacing: "0.06em",
        background: "rgba(0,240,150,0.12)",
        border: "1.5px solid rgba(0,240,150,0.85)",
        boxShadow: "0 0 32px rgba(0,240,150,0.45), 0 0 10px rgba(0,240,150,0.2)",
        animation: "p4samd-pulse 2.4s ease-in-out infinite",
      }
    : {
        padding: "14px 30px",
        borderRadius: "14px",
        fontSize: "15px",
        letterSpacing: "0.1em",
        background: "rgba(5,18,15,0.75)",
        border: "1.5px solid rgba(0,240,150,0.45)",
        boxShadow: "0 0 24px rgba(0,240,150,0.2), 0 0 6px rgba(0,240,150,0.1)",
      };

  return (
    <div className="relative w-full" style={{ height: 500 }}>
      <style>{`
        @keyframes p4samd-pulse {
          0%, 100% { box-shadow: 0 0 32px rgba(0,240,150,0.45), 0 0 10px rgba(0,240,150,0.2); }
          50%       { box-shadow: 0 0 52px rgba(0,240,150,0.7), 0 0 20px rgba(0,240,150,0.35); }
        }
      `}</style>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <button
        type="button"
        onClick={activate}
        aria-label="Activate P4SAMD order"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          color: "#00F096",
          fontWeight: 700,
          fontFamily: "system-ui, -apple-system, sans-serif",
          cursor: activated ? "default" : "pointer",
          backdropFilter: "blur(10px)",
          transition:
            "width 0.5s cubic-bezier(0.34,1.56,0.64,1), height 0.5s cubic-bezier(0.34,1.56,0.64,1), border-radius 0.5s ease, padding 0.4s ease, font-size 0.3s ease, box-shadow 0.4s ease",
          zIndex: 10,
          userSelect: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...btnStyle,
        }}
      >
        P4SAMD
        {!activated && (
          <span
            style={{
              display: "block",
              fontSize: "9px",
              letterSpacing: "0.05em",
              marginTop: 4,
              color: "rgba(0,240,150,0.55)",
              fontWeight: 400,
            }}
          >
            click to order
          </span>
        )}
      </button>
    </div>
  );
}
