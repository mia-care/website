"use client";

import { useEffect, useRef, useState } from "react";

const D = {
  bg: "#F8FAFC",
  surface: "#FFFFFF",
  border: "#E2E8F0",
  muted: "#62748E",
  faint: "#90A1B9",
  body: "#0F172B",
  blue: "#155DFC",
  blueFaint: "#EFF6FF",
  green: "#009966",
  greenFaint: "#ECFDF5",
  greenText: "#008236",
  red: "#C10007",
  redFaint: "#FEF2F2",
  amber: "#E17100",
  amberFaint: "#FFF7ED",
  purple: "#7C3AED",
};

const NAV_ITEMS = [
  { label: "Workflow Guide", icon: "📋" },
  { label: "Requirements", icon: "📄" },
  { label: "Software System", icon: "🗂" },
  { label: "Verification", icon: "✅" },
  { label: "Risk Analysis", icon: "⚠" },
];

const INTEGRATIONS = [
  {
    group: "ALM",
    icon: "J",
    iconBg: "#155DFC",
    items: [
      {
        name: "Jira Software",
        status: "Connected",
        desc: "Application Lifecycle Management — issue tracking, sprint planning",
        tag: "CARDIO",
        sync: "2026-03-06 09:32",
      },
    ],
  },
  {
    group: "Dev Tools",
    icon: "GH",
    iconBg: "#1A1A1A",
    items: [
      {
        name: "GitHub",
        status: "Connected",
        desc: "Source code management, CI/CD pipelines, pull request reviews",
        tag: "mia-care/cardio-ai",
        sync: "2026-03-06 10:15",
      },
      {
        name: "Mia-Platform Console",
        status: "Connected",
        desc: "Internal Developer Platform — microservice orchestration",
        tag: "cardio-ai-prod",
        sync: "2026-03-06 08:50",
        iconBg: "#0052CC",
        iconLabel: "MP",
      },
    ],
  },
];

export function SdlcBlueprintSvg() {
  const [visibleCards, setVisibleCards] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cardTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clearAll = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      cardTimers.current.forEach(clearTimeout);
      cardTimers.current = [];
    };

    const totalCards = INTEGRATIONS.flatMap((g) => g.items).length;

    const run = () => {
      setVisibleCards(0);
      timerRef.current = setTimeout(() => {
        for (let i = 0; i < totalCards; i++) {
          const t = setTimeout(() => setVisibleCards(i + 1), i * 300);
          cardTimers.current.push(t);
        }
        const allDone = totalCards * 300 + 1200;
        timerRef.current = setTimeout(() => {
          clearAll();
          timerRef.current = setTimeout(run, 600);
        }, allDone + 2000);
      }, 400);
    };

    run();
    return clearAll;
  }, []);

  let cardIndex = 0;

  return (
    <div
      style={{
        background: D.bg,
        height: "100%",
        display: "flex",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        fontSize: 12,
        color: D.body,
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: 170,
          background: D.surface,
          borderRight: `1px solid ${D.border}`,
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "10px 14px 8px", borderBottom: `1px solid ${D.border}` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: 6,
                background: D.blue,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 10,
                fontWeight: 800,
                fontFamily: "ui-monospace, monospace",
                flexShrink: 0,
              }}
            >
              {"</>"}
            </div>
            <div>
              <div style={{ fontSize: 8.5, color: D.faint }}>Organization</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: D.body }}>Mia-Care Dev</div>
            </div>
          </div>
        </div>
        <div style={{ padding: "6px 0", flex: 1, overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "5px 14px",
              marginBottom: 4,
            }}
          >
            <span style={{ fontSize: 10, color: D.muted }}>⊞</span>
            <span style={{ fontSize: 10, color: D.muted }}>Dashboard</span>
          </div>
          <div
            style={{
              padding: "4px 14px 3px",
              fontSize: 8.5,
              fontWeight: 700,
              color: D.faint,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
            }}
          >
            SDLC
          </div>
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "5px 14px",
                cursor: "default",
              }}
            >
              <span style={{ fontSize: 10, color: D.faint }}>{item.icon}</span>
              <span style={{ fontSize: 10, color: D.muted }}>{item.label}</span>
            </div>
          ))}
          <div
            style={{
              padding: "6px 14px 3px",
              fontSize: 8.5,
              fontWeight: 700,
              color: D.faint,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
            }}
          >
            CONFIGURATION
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "5px 14px",
              background: D.blueFaint,
              borderLeft: `2px solid ${D.blue}`,
            }}
          >
            <span style={{ fontSize: 10, color: D.blue }}>⚙</span>
            <span style={{ fontSize: 10, fontWeight: 600, color: D.blue }}>Tool Integrations</span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Breadcrumb */}
        <div
          style={{
            padding: "8px 18px",
            borderBottom: `1px solid ${D.border}`,
            background: D.surface,
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 10,
            color: D.muted,
            flexShrink: 0,
          }}
        >
          <span>Mia-Care Dev</span>
          <span style={{ color: D.faint }}>›</span>
          <span style={{ fontWeight: 600, color: D.body }}>App Cardio-Monitor</span>
          <span style={{ color: D.faint }}>›</span>
          <span>dev</span>
        </div>

        <div style={{ flex: 1, overflow: "hidden", padding: "14px 18px" }}>
          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 8,
              marginBottom: 14,
            }}
          >
            {[
              { label: "Total Tools", value: "6", icon: "⚙", color: D.body, bg: D.surface },
              { label: "Connected", value: "5", icon: "●", color: D.greenText, bg: D.greenFaint },
              { label: "Disconnected", value: "1", icon: "○", color: D.muted, bg: D.surface },
              { label: "Errors", value: "0", icon: "⊘", color: D.red, bg: D.redFaint },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: s.bg,
                  border: `1px solid ${D.border}`,
                  borderRadius: 8,
                  padding: "9px 12px",
                }}
              >
                <div style={{ fontSize: 9, color: D.muted, marginBottom: 3 }}>
                  <span style={{ color: s.color, marginRight: 4 }}>{s.icon}</span>
                  {s.label}
                </div>
                <div style={{ fontSize: 18, fontWeight: 800, color: s.color }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Filter chips */}
          <div style={{ display: "flex", gap: 6, marginBottom: 12, alignItems: "center" }}>
            <span style={{ fontSize: 10, color: D.muted }}>Filter:</span>
            {["All", "ALM", "Dev Tools", "Runtime"].map((f, i) => (
              <span
                key={f}
                style={{
                  background: i === 0 ? D.blue : D.surface,
                  color: i === 0 ? "white" : D.muted,
                  border: `1px solid ${i === 0 ? D.blue : D.border}`,
                  borderRadius: 20,
                  padding: "3px 10px",
                  fontSize: 10,
                  fontWeight: i === 0 ? 600 : 400,
                  cursor: "default",
                }}
              >
                {f}
              </span>
            ))}
            <span
              style={{
                marginLeft: "auto",
                background: D.blue,
                color: "white",
                borderRadius: 6,
                padding: "4px 10px",
                fontSize: 10,
                fontWeight: 600,
                cursor: "default",
              }}
            >
              + Add Integration
            </span>
          </div>

          {/* Integration groups */}
          {INTEGRATIONS.map((group) => (
            <div key={group.group} style={{ marginBottom: 10 }}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: D.muted,
                  marginBottom: 6,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span>{group.group}</span>
                <span
                  style={{
                    background: D.bg,
                    border: `1px solid ${D.border}`,
                    borderRadius: 10,
                    padding: "0px 6px",
                    fontSize: 9,
                  }}
                >
                  {group.items.length}
                </span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {group.items.map((item) => {
                  const idx = cardIndex++;
                  const visible = visibleCards > idx;
                  return (
                    <div
                      key={item.name}
                      style={{
                        flex: 1,
                        background: D.surface,
                        border: `1px solid ${D.border}`,
                        borderRadius: 8,
                        padding: "10px 12px",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(8px)",
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <div
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: 6,
                            background: (item as { iconBg?: string }).iconBg ?? group.iconBg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontSize: 10,
                            fontWeight: 800,
                            flexShrink: 0,
                          }}
                        >
                          {(item as { iconLabel?: string }).iconLabel ?? group.icon}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                              marginBottom: 2,
                            }}
                          >
                            <span style={{ fontSize: 11, fontWeight: 700, color: D.body }}>
                              {item.name}
                            </span>
                            <span
                              style={{
                                fontSize: 9,
                                color: D.greenText,
                                fontWeight: 600,
                              }}
                            >
                              ● {item.status}
                            </span>
                          </div>
                          <div
                            style={{
                              fontSize: 9,
                              color: D.muted,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              marginBottom: 5,
                            }}
                          >
                            {item.desc}
                          </div>
                          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                            <span
                              style={{
                                background: D.bg,
                                border: `1px solid ${D.border}`,
                                borderRadius: 4,
                                padding: "1px 5px",
                                fontSize: 8,
                                fontFamily: "ui-monospace, monospace",
                                color: D.muted,
                              }}
                            >
                              {item.tag}
                            </span>
                            <span style={{ fontSize: 8, color: D.faint }}>↻ {item.sync}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
