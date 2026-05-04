"use client";

import { useEffect, useRef, useState } from "react";

const TOOLS = [
  {
    key: "Git",
    label: "Git",
    subtitle: "Source Control",
    bg: "#A7F3D0",
    text: "#059669",
    border: "#6EE7B7",
    dot: "#059669",
  },
  {
    key: "ALM",
    label: "ALM",
    subtitle: "Work Items",
    bg: "#BFDBFE",
    text: "#2563EB",
    border: "#93C5FD",
    dot: "#2563EB",
  },
  {
    key: "eQMS",
    label: "eQMS",
    subtitle: "Quality Records",
    bg: "#EDE9FE",
    text: "#9333EA",
    border: "#C4B5FD",
    dot: "#9333EA",
  },
  {
    key: "IDP",
    label: "IDP",
    subtitle: "Dev Platform",
    bg: "#A5F3FC",
    text: "#0891B2",
    border: "#67E8F9",
    dot: "#0891B2",
  },
];

const PHASES = [
  { id: "1", name: "Requirements Analysis", section: "§5.2", tools: ["Git", "ALM", "eQMS"] },
  { id: "2", name: "Architecture & Design", section: "§5.3", tools: ["ALM", "eQMS"] },
  { id: "3", name: "Detailed Design", section: "§5.4", tools: ["Git", "ALM", "eQMS"] },
  { id: "4", name: "Implementation", section: "§5.5", tools: ["Git", "ALM", "IDP"] },
  { id: "5", name: "Unit Testing", section: "§5.5", tools: ["Git", "IDP"] },
  { id: "6", name: "Integration Testing", section: "§5.6", tools: ["Git", "ALM"] },
  { id: "7", name: "System Testing", section: "§5.7", tools: ["Git", "ALM", "eQMS"] },
];

const ROW_DURATION_MS = 1100;

export function SdlcOrchestratorSvg() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [loopRow, setLoopRow] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(
      () => setLoopRow((r) => (r + 1) % PHASES.length),
      ROW_DURATION_MS,
    );
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const activeRow = hoveredRow ?? loopRow;
  const activeTools = new Set(PHASES[activeRow].tools);

  return (
    <div
      style={{
        background: "#FAFAFA",
        borderRadius: 10,
        padding: 12,
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        minWidth: 0,
      }}
    >
      {/* ── Tool cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6 }}>
        {TOOLS.map((tool) => {
          const active = activeTools.has(tool.key);
          return (
            <div
              key={tool.key}
              style={{
                background: "white",
                border: `1.5px solid ${active ? tool.border : "#E5E5E5"}`,
                borderRadius: 8,
                padding: "7px 8px",
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxShadow: active ? `0 0 0 3px ${tool.bg}` : "0 1px 3px rgba(0,0,0,0.07)",
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: tool.dot,
                  marginBottom: 4,
                  transition: "transform 0.2s",
                  transform: active ? "scale(1.3)" : "scale(1)",
                }}
              />
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 11,
                  color: "#0A0A0A",
                  fontFamily: "ui-monospace, monospace",
                }}
              >
                {tool.label}
              </div>
              <div style={{ fontSize: 9.5, color: "#737373", marginTop: 1 }}>{tool.subtitle}</div>
            </div>
          );
        })}
      </div>

      {/* ── Table ── */}
      <div
        style={{
          border: "1px solid #E5E5E5",
          borderRadius: 8,
          overflow: "hidden",
          flex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 18px 54px 1fr 76px 22px",
            background: "#E5E5E5",
            padding: "5px 10px",
            gap: 8,
            alignItems: "center",
          }}
        >
          {["Activity", "#", "Class", "Tool Integrations", "Compliance", "last"].map((h, i) => (
            <div
              key={h}
              style={{
                color: "#525252",
                fontWeight: 600,
                fontSize: 10,
                letterSpacing: "0.02em",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {h}
            </div>
          ))}
        </div>

        {/* Rows */}
        {PHASES.map((phase, i) => {
          const active = activeRow === i;
          return (
            <div
              key={phase.id}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 18px 54px 1fr 76px 22px",
                padding: "6px 10px",
                gap: 8,
                borderTop: "1px solid #E5E5E5",
                background: active ? "#F0FDF4" : "white",
                cursor: "default",
                transition: "background 0.25s",
                alignItems: "center",
              }}
            >
              {/* Activity */}
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: 11,
                    color: "#0A0A0A",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {phase.name}
                </div>
                <div style={{ fontSize: 9, color: "#9CA3AF", marginTop: 1 }}>{phase.section}</div>
              </div>

              {/* ID */}
              <div style={{ color: "#737373", fontSize: 10 }}>{phase.id}</div>

              {/* Class */}
              <div>
                <span
                  style={{
                    background: "#DCFCE7",
                    color: "#16A34A",
                    borderRadius: 20,
                    padding: "2px 6px",
                    fontSize: 9.5,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  Class B
                </span>
              </div>

              {/* Tool pills */}
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap", minWidth: 0 }}>
                {phase.tools.map((toolKey) => {
                  const t = TOOLS.find((x) => x.key === toolKey)!;
                  return (
                    <span
                      key={toolKey}
                      style={{
                        background: t.bg,
                        color: t.text,
                        borderRadius: 20,
                        padding: "2px 7px",
                        fontSize: 9.5,
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {toolKey}
                    </span>
                  );
                })}
              </div>

              {/* Compliance */}
              <div>
                <span
                  style={{
                    background: "#F0FDF4",
                    color: "#059669",
                    border: "1px solid #A7F3D0",
                    borderRadius: 20,
                    padding: "2px 6px",
                    fontSize: 9.5,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  IEC 62304
                </span>
              </div>

              {/* Lock */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <rect
                    x="3"
                    y="7"
                    width="10"
                    height="8"
                    rx="1.5"
                    fill="#E5E5E5"
                    stroke="#D1D5DB"
                    strokeWidth="1"
                  />
                  <path
                    d="M5.5 7V5.5a2.5 2.5 0 015 0V7"
                    stroke="#9CA3AF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="8" cy="11" r="1" fill="#9CA3AF" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
