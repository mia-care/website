"use client";

import { useEffect, useRef, useState } from "react";

// ── Drag hook ─────────────────────────────────────────────────────────
function useDrag() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const origin = useRef<{ mx: number; my: number; ox: number; oy: number } | null>(null);

  function onPointerDown(e: React.PointerEvent) {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    origin.current = { mx: e.clientX, my: e.clientY, ox: pos.x, oy: pos.y };
    setDragging(true);
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!origin.current) return;
    setPos({
      x: origin.current.ox + e.clientX - origin.current.mx,
      y: origin.current.oy + e.clientY - origin.current.my,
    });
  }
  function onPointerUp() {
    origin.current = null;
    setDragging(false);
  }

  return { pos, dragging, handlers: { onPointerDown, onPointerMove, onPointerUp } };
}

// ── KPI Stat Bar ──────────────────────────────────────────────────────
function StatBar() {
  const stats = [
    { label: "Total Req", value: "18", sub: "Across all types", vc: "#0A0A0A", sc: "#737373" },
    { label: "Draft", value: "5", sub: "Pending review", vc: "#D97706", sc: "#D97706" },
    { label: "Closed", value: "6", sub: "Approved & verified", vc: "#059669", sc: "#059669" },
    { label: "In Progress", value: "7", sub: "Under development", vc: "#2563EB", sc: "#2563EB" },
  ];
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #E5E5E5",
        borderRadius: 12,
        padding: "4px 0",
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.13),0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          style={{ padding: "10px 16px", borderLeft: i > 0 ? "1px solid #E5E5E5" : "none" }}
        >
          <div style={{ fontSize: 10.5, color: "#525252", marginBottom: 5, fontWeight: 500 }}>
            {s.label}
          </div>
          <div
            style={{ fontSize: 24, fontWeight: 800, color: s.vc, lineHeight: 1, marginBottom: 4 }}
          >
            {s.value}
          </div>
          <div style={{ fontSize: 9.5, color: s.sc, opacity: 0.85 }}>{s.sub}</div>
        </div>
      ))}
    </div>
  );
}

// ── Risk Row ──────────────────────────────────────────────────────────
function RiskRow() {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #E5E5E5",
        borderRadius: 10,
        padding: "11px 14px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.10),0 1px 4px rgba(0,0,0,0.05)",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      {/* Left: title + meta */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#0A0A0A",
            lineHeight: 1.35,
            marginBottom: 5,
          }}
        >
          Incorrect arrhythmia classification
          <br />
          leading to missed diagnosis
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span
            style={{
              background: "#EDE9FE",
              color: "#7C3AED",
              borderRadius: 20,
              padding: "1px 7px",
              fontSize: 9,
              fontWeight: 700,
            }}
          >
            v2.1.0
          </span>
          <span style={{ fontSize: 9, color: "#9CA3AF", fontFamily: "ui-monospace,monospace" }}>
            MCRISK-001
          </span>
          {/* activity icon */}
          <svg width="9" height="9" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <polyline
              points="1,8 4,4 7,10 10,6 13,8 15,5"
              stroke="#F87171"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <span style={{ fontSize: 9, color: "#EF4444", fontWeight: 600 }}>Patient</span>
        </div>
      </div>
      {/* Right: status badges + counter */}
      <div style={{ display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
        <span
          style={{
            background: "#FEF3C7",
            color: "#D97706",
            borderRadius: 20,
            padding: "2px 8px",
            fontSize: 9,
            fontWeight: 700,
          }}
        >
          ALARP
        </span>
        <span
          style={{
            background: "#DCFCE7",
            color: "#059669",
            borderRadius: 20,
            padding: "2px 8px",
            fontSize: 9,
            fontWeight: 700,
          }}
        >
          Acceptable
        </span>
        {/* counter: 3 total, 2 green 1 red */}
        <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#0A0A0A", lineHeight: 1 }}>3</span>
          <span style={{ display: "flex", gap: 3 }}>
            <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
              <circle cx="4" cy="4" r="3.5" stroke="#059669" strokeWidth="1" fill="none" />
            </svg>
            <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
              <circle cx="4" cy="4" r="3.5" stroke="#059669" strokeWidth="1" fill="none" />
            </svg>
            <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
              <circle cx="4" cy="4" r="3.5" stroke="#DC2626" strokeWidth="1" fill="none" />
            </svg>
          </span>
        </span>
        <span
          style={{
            background: "#EDE9FE",
            color: "#7C3AED",
            borderRadius: 20,
            padding: "2px 8px",
            fontSize: 9,
            fontWeight: 700,
          }}
        >
          Controlled
        </span>
      </div>
    </div>
  );
}

// ── Requirement Row ───────────────────────────────────────────────────
function RequirementRow() {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #E5E5E5",
        borderRadius: 10,
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        gap: 8,
        boxShadow: "0 6px 28px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.06)",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          background: "#EDE9FE",
          color: "#7C3AED",
          borderRadius: 20,
          padding: "2px 8px",
          fontSize: 9.5,
          fontWeight: 700,
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        v2.1.0
      </span>
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: "#0A0A0A",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          flex: 1,
          minWidth: 0,
        }}
      >
        ID to link patient &amp; ECGs
      </span>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontSize: 10,
          color: "#525252",
          flexShrink: 0,
        }}
      >
        <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="7" stroke="#2563EB" strokeWidth="1.2" />
          <path d="M5 8l2.5 2.5L11 5.5" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        High
      </span>
      {[
        { label: "USR", bg: "#CCFBF1", c: "#0D9488" },
        { label: "Data", bg: "#DBEAFE", c: "#2563EB" },
      ].map((t) => (
        <span
          key={t.label}
          style={{
            background: t.bg,
            color: t.c,
            borderRadius: 20,
            padding: "2px 7px",
            fontSize: 9.5,
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {t.label}
        </span>
      ))}
      <span
        style={{
          background: "#DCFCE7",
          color: "#059669",
          border: "1px solid #A7F3D0",
          borderRadius: 20,
          padding: "2px 8px",
          fontSize: 9.5,
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        Closed
      </span>
    </div>
  );
}

// ── Whisper AI Card ───────────────────────────────────────────────────
const WHISPER_ALERTS = [
  {
    icon: "⊗",
    borderColor: "#EF4444",
    bg: "rgba(239,68,68,0.07)",
    title: "Incomplete SRS traceability",
    tag: "IEC 62304 §5.2",
  },
  {
    icon: "⚠",
    borderColor: "#F97316",
    bg: "rgba(249,115,22,0.07)",
    title: "Missing integration tests",
    tag: "IEC 62304 §5.6",
  },
];

function WhisperCard() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [thinking, setThinking] = useState(true);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

    const run = () => {
      setVisibleCount(0);
      setThinking(true);
      // alert 1 appears
      later(() => {
        setVisibleCount(1);
      }, 1200);
      // alert 2 appears, thinking continues
      later(() => {
        setVisibleCount(2);
      }, 1200 + 950);
      // thinking stops
      later(
        () => {
          setThinking(false);
        },
        1200 + 950 + 200,
      );
      // reset
      later(
        () => {
          setThinking(true);
          later(run, 400);
        },
        1200 + 950 + 200 + 2600,
      );
    };

    run();
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      style={{
        background: "white",
        border: "1px solid #E5E5E5",
        borderRadius: 12,
        boxShadow: "0 8px 32px rgba(0,0,0,0.13),0 1px 4px rgba(0,0,0,0.06)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        @keyframes wh-card-in {
          from { opacity: 0; transform: translateY(5px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wh-dot-mini {
          0%, 80%, 100% { transform: scale(0.55); opacity: 0.35; }
          40%           { transform: scale(1);    opacity: 1; }
        }
      `}</style>

      {/* Header */}
      <div style={{ padding: "9px 11px 7px", borderBottom: "1px solid #F3F4F6" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: 12 }}>✨</span>
            <span
              style={{
                fontWeight: 700,
                fontSize: 11.5,
                background: "linear-gradient(90deg,#7C3AED,#2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Whisper AI
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#22C55E",
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: 8, color: "#9CA3AF" }}>Cardio-Monitor · dev</span>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div
        style={{ padding: "8px 10px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}
      >
        {WHISPER_ALERTS.slice(0, visibleCount).map((a) => (
          <div
            key={a.tag}
            style={{
              background: a.bg,
              border: `1px solid ${a.borderColor}33`,
              borderLeft: `3px solid ${a.borderColor}`,
              borderRadius: 7,
              padding: "6px 8px",
              animation: "wh-card-in 0.3s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
              <span style={{ fontSize: 11, flexShrink: 0, marginTop: 1 }}>{a.icon}</span>
              <div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "#0A0A0A",
                    lineHeight: 1.3,
                    marginBottom: 4,
                  }}
                >
                  {a.title}
                </div>
                <span
                  style={{
                    background: "#F3F4F6",
                    border: "1px solid #E5E5E5",
                    borderRadius: 4,
                    padding: "1px 5px",
                    fontSize: 8,
                    color: "#525252",
                    fontFamily: "ui-monospace,monospace",
                  }}
                >
                  {a.tag}
                </span>
              </div>
            </div>
          </div>
        ))}

        {thinking && (
          <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "2px 0" }}>
            <span style={{ fontSize: 10 }}>✨</span>
            <div style={{ display: "flex", gap: 3 }}>
              {[0, 1, 2].map((j) => (
                <div
                  key={j}
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#a78bfa",
                    animation: `wh-dot-mini 1.2s ease-in-out ${j * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{ padding: "7px 10px", borderTop: "1px solid #F3F4F6" }}>
        <div
          style={{
            background: "#F9FAFB",
            border: "1px solid #E5E5E5",
            borderRadius: 7,
            padding: "5px 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 6,
          }}
        >
          <span style={{ fontSize: 8.5, color: "#9CA3AF" }}>Ask Whisper…</span>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 5,
              background: "linear-gradient(135deg,#7C3AED,#2563EB)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="9" height="9" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── AI Compliance Card ────────────────────────────────────────────────
function ComplianceCard() {
  const [bar, setBar] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setBar(78), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      style={{
        background: "white",
        border: "1.5px solid #E5E5E5",
        borderRadius: 12,
        padding: "14px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.16),0 2px 8px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#0A0A0A",
            display: "flex",
            alignItems: "center",
            gap: 5,
            marginBottom: 3,
          }}
        >
          AI Diagnostic Tool
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10.5 2L11.8 6.7L16 8L11.8 9.3L10.5 14L9.2 9.3L5 8L9.2 6.7Z" fill="#7C3AED" />
            <path
              d="M3.5 2L4.2 3.8L6 4.5L4.2 5.2L3.5 7L2.8 5.2L1 4.5L2.8 3.8Z"
              fill="#7C3AED"
              fillOpacity="0.5"
            />
          </svg>
        </div>
        <div style={{ fontSize: 9.5, color: "#737373", lineHeight: 1.4 }}>
          AI-powered diagnostic assistance platform.
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 6,
          }}
        >
          <span style={{ fontSize: 10, color: "#0A0A0A", fontWeight: 500 }}>Compliance score</span>
          <span style={{ fontSize: 14, fontWeight: 800, color: "#F59E0B" }}>78%</span>
        </div>
        <div style={{ height: 6, background: "#E5E5E5", borderRadius: 99, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${bar}%`,
              background: "#F59E0B",
              borderRadius: 99,
              transition: "width 1.4s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {["Class A", "EU MDR"].map((tag) => (
          <span
            key={tag}
            style={{
              background: "#CCFBF1",
              color: "#0D9488",
              border: "1px solid #99F6E4",
              borderRadius: 20,
              padding: "2px 8px",
              fontSize: 9,
              fontWeight: 600,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          paddingTop: 4,
          borderTop: "1px solid #F3F4F6",
        }}
      >
        <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="6" stroke="#9CA3AF" strokeWidth="1.2" />
          <path d="M8 5v3.5l2 1.5" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: 9, color: "#9CA3AF" }}>Latest version v1.0.0</span>
      </div>
    </div>
  );
}

// ── Composition ───────────────────────────────────────────────────────
// Each card:
//   outer div  → drag offset via transform translate  (pointer events)
//   inner div  → heroFloat animation                  (no conflict: different elements)
//   opacity    → React entered state + CSS transition (no conflict: not animated by heroFloat)

export function HeroProductFloating() {
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80);
    return () => clearTimeout(t);
  }, []);

  const d1 = useDrag();
  const d2 = useDrag();
  const d3 = useDrag();
  const d4 = useDrag();
  const d5 = useDrag();

  function card(
    drag: ReturnType<typeof useDrag>,
    placement: React.CSSProperties,
    floatSpec: string,
    opacityDelay: string,
    children: React.ReactNode,
  ) {
    return (
      <div
        style={{
          position: "absolute",
          ...placement,
          transform: `translate(${drag.pos.x}px, ${drag.pos.y}px)`,
          cursor: drag.dragging ? "grabbing" : "grab",
          userSelect: "none",
          touchAction: "none",
          zIndex: drag.dragging ? 10 : 1,
        }}
        {...drag.handlers}
      >
        <div
          style={{
            animation: drag.dragging ? "none" : `heroFloat ${floatSpec}`,
            opacity: entered ? 1 : 0,
            transition: `opacity 0.6s ease-out ${opacityDelay}`,
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        height: 560,
        fontFamily: "var(--font-inter, 'Inter', ui-sans-serif, system-ui, sans-serif)",
      }}
    >
      {card(d1, { top: 0, left: 0, right: 0 }, "6s 0s ease-in-out infinite", "0.3s", <StatBar />)}
      {card(
        d2,
        { top: 105, left: 0, right: 0 },
        "5.5s 0.7s ease-in-out infinite",
        "0.5s",
        <RiskRow />,
      )}
      {card(
        d3,
        { top: 225, left: 24, right: 0 },
        "5s 1.4s ease-in-out infinite",
        "0.7s",
        <RequirementRow />,
      )}
      {card(
        d4,
        { bottom: 0, right: 0, width: 248 },
        "4.5s 2.1s ease-in-out infinite",
        "0.9s",
        <ComplianceCard />,
      )}
      {card(
        d5,
        { top: 285, left: 0, width: 215 },
        "5.2s 1.8s ease-in-out infinite",
        "1.1s",
        <WhisperCard />,
      )}
    </div>
  );
}
