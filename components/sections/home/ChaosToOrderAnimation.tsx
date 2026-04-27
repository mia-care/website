"use client";

import { useEffect, useRef, useState } from "react";

const N = 14; // rungs per strand
const AMP = 100;
const HELIX_H = 340;
const ROT_SPEED = 0.007;
const TRANSITION_DUR = 130; // frames ≈ 2.2 s at 60 fps

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
];

function ease(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function helixPt(rung: number, strand: number, angle: number, W: number, H: number) {
  const t = (rung / (N - 1)) * Math.PI * 2 + angle;
  const off = strand === 1 ? Math.PI : 0;
  return {
    x: W / 2 + AMP * Math.cos(t + off),
    y: H / 2 - HELIX_H / 2 + (rung / (N - 1)) * HELIX_H,
    z: Math.cos(t + off), // depth –1 (back) → +1 (front)
  };
}

interface Nd {
  cx: number;
  cy: number;
  vx: number;
  vy: number;
  sx: number;
  sy: number; // snapshot at activation
  strand: number;
  rung: number;
  lbl: number;
}

export function ChaosToOrderAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activated, setActivated] = useState(false);

  const stRef = useRef<{
    phase: "chaos" | "transitioning" | "ordered";
    frame: number;
    angle: number;
    nodes: Nd[];
  }>({ phase: "chaos", frame: 0, angle: 0, nodes: [] });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    const init = (W: number, H: number) => {
      const m = 70;
      stRef.current.nodes = Array.from({ length: N * 2 }, (_, i) => ({
        cx: m + Math.random() * (W - m * 2),
        cy: m + Math.random() * (H - m * 2),
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        sx: 0,
        sy: 0,
        strand: i < N ? 0 : 1,
        rung: i % N,
        lbl: i < LABELS.length ? i : -1,
      }));
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

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const s = stRef.current;
      ctx.clearRect(0, 0, W, H);

      /* ── CHAOS ─────────────────────────────────────────────── */
      if (s.phase === "chaos") {
        const m = 55;
        for (const n of s.nodes) {
          n.cx += n.vx;
          n.cy += n.vy;
          if (n.cx < m || n.cx > W - m) n.vx *= -1;
          if (n.cy < m || n.cy > H - m) n.vy *= -1;
        }

        // faint connections between close nodes
        for (let i = 0; i < s.nodes.length; i++) {
          for (let j = i + 1; j < s.nodes.length; j++) {
            const a = s.nodes[i],
              b = s.nodes[j];
            const d = Math.hypot(a.cx - b.cx, a.cy - b.cy);
            if (d < 115) {
              ctx.beginPath();
              ctx.moveTo(a.cx, a.cy);
              ctx.lineTo(b.cx, b.cy);
              ctx.strokeStyle = `rgba(0,240,150,${0.14 * (1 - d / 115)})`;
              ctx.lineWidth = 0.7;
              ctx.stroke();
            }
          }
        }

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

        /* ── TRANSITIONING ─────────────────────────────────────── */
      } else if (s.phase === "transitioning") {
        s.frame++;
        const prog = Math.min(s.frame / TRANSITION_DUR, 1);
        const e = ease(prog);
        if (prog >= 1) s.phase = "ordered";

        const pts = s.nodes.map((n) => {
          const tg = helixPt(n.rung, n.strand, s.angle, W, H);
          return {
            x: n.sx + (tg.x - n.sx) * e,
            y: n.sy + (tg.y - n.sy) * e,
            z: tg.z * e,
            strand: n.strand,
            rung: n.rung,
          };
        });

        // backbones
        for (let st = 0; st < 2; st++) {
          const sn = pts.filter((p) => p.strand === st).sort((a, b) => a.rung - b.rung);
          ctx.beginPath();
          sn.forEach((p, i) => {
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
          });
          ctx.strokeStyle =
            st === 0 ? `rgba(0,240,150,${0.25 + 0.45 * e})` : `rgba(0,210,240,${0.25 + 0.45 * e})`;
          ctx.lineWidth = 1.6;
          ctx.stroke();
        }
        // rungs
        for (let r = 0; r < N; r++) {
          const pA = pts[r],
            pB = pts[N + r];
          ctx.beginPath();
          ctx.moveTo(pA.x, pA.y);
          ctx.lineTo(pB.x, pB.y);
          ctx.strokeStyle = `rgba(0,240,180,${0.15 + 0.3 * e})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
        // nodes
        for (const p of pts) {
          const d = (p.z + 1) / 2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3 + 2.5 * e, 0, Math.PI * 2);
          ctx.fillStyle =
            p.strand === 0
              ? `rgba(0,240,150,${0.35 + 0.55 * e * d})`
              : `rgba(0,210,240,${0.35 + 0.55 * e * d})`;
          ctx.fill();
        }

        /* ── ORDERED ───────────────────────────────────────────── */
      } else {
        s.angle += ROT_SPEED;

        const pts = s.nodes.map((n) => ({
          ...helixPt(n.rung, n.strand, s.angle, W, H),
          strand: n.strand,
          rung: n.rung,
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

        // nodes back→front
        [...pts]
          .sort((a, b) => a.z - b.z)
          .forEach((p) => {
            const d = (p.z + 1) / 2;
            const r = 2 + 3.5 * d;
            // glow halo
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

  const activate = () => {
    const s = stRef.current;
    if (s.phase !== "chaos") return;
    for (const n of s.nodes) {
      n.sx = n.cx;
      n.sy = n.cy;
    }
    s.frame = 0;
    s.phase = "transitioning";
    setActivated(true);
  };

  return (
    <div className="relative w-full" style={{ height: 500 }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Central P4SAMD core */}
      <button
        type="button"
        onClick={activate}
        aria-label="Activate P4SAMD order"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          padding: "14px 30px",
          background: activated ? "rgba(0,240,150,0.12)" : "rgba(5,18,15,0.75)",
          border: `1.5px solid rgba(0,240,150,${activated ? 0.8 : 0.45})`,
          borderRadius: "14px",
          color: "#00F096",
          fontWeight: 700,
          fontSize: "15px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "0.1em",
          cursor: activated ? "default" : "pointer",
          backdropFilter: "blur(10px)",
          boxShadow: activated
            ? "0 0 40px rgba(0,240,150,0.4), 0 0 12px rgba(0,240,150,0.2)"
            : "0 0 24px rgba(0,240,150,0.2), 0 0 6px rgba(0,240,150,0.1)",
          transition: "box-shadow 0.4s ease, background 0.4s ease, border-color 0.4s ease",
          zIndex: 10,
          userSelect: "none",
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
