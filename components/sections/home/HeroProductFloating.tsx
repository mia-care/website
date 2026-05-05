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
        height: 430,
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
    </div>
  );
}
