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
  amberText: "#CA3500",
  purple: "#7C3AED",
  purpleFaint: "#FAF5FF",
};

const NAV_ITEMS = [
  { label: "Workflow Guide", icon: "📋" },
  { label: "Requirements", icon: "📄" },
  { label: "Software System", icon: "🗂" },
  { label: "Verification", icon: "✅" },
  { label: "Risk Analysis", icon: "⚠" },
];

const EVENTS = [
  {
    title: "Requirement Status Changed",
    tags: ["Requirements", "REQ-FUNC-007"],
    tagColors: [
      { bg: "#EFF6FF", color: "#1447E6" },
      { bg: D.bg, color: D.muted },
    ],
    desc: 'Changed REQ-FUNC-007 status from "In Review" to "Approved" after QA sign-off',
    time: "10:32",
    author: "Anna Conti",
    role: "Business",
    roleColor: "#CA3500",
    roleBg: "#FFF7ED",
    highlight: true,
  },
  {
    title: "Requirement Updated",
    tags: ["Requirements", "REQ-FUNC-007"],
    tagColors: [
      { bg: "#EFF6FF", color: "#1447E6" },
      { bg: D.bg, color: D.muted },
    ],
    desc: "Updated acceptance criteria for REQ-FUNC-007 — tightened latency threshold based on clinical feedback",
    time: "10:22",
    author: "Dr. Elena Rossi",
    role: "Admin",
    roleColor: D.red,
    roleBg: D.redFaint,
    highlight: false,
  },
  {
    title: "Risk Analysis Updated",
    tags: ["Risk Management"],
    tagColors: [{ bg: "#FFF7ED", color: "#CA3500" }],
    desc: "Hazard H-012 severity updated from Moderate to Critical following clinical review",
    time: "09:47",
    author: "Dr. Sara Verdi",
    role: "QA",
    roleColor: D.greenText,
    roleBg: D.greenFaint,
    highlight: false,
  },
];

export function SdlcConfigLogSvg() {
  const [visibleEvents, setVisibleEvents] = useState(0);
  const [firstHighlighted, setFirstHighlighted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const eventTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clearAll = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      eventTimers.current.forEach(clearTimeout);
      eventTimers.current = [];
    };

    const run = () => {
      setVisibleEvents(0);
      setFirstHighlighted(false);

      timerRef.current = setTimeout(() => {
        EVENTS.forEach((_, i) => {
          const t = setTimeout(() => setVisibleEvents(i + 1), i * 350);
          eventTimers.current.push(t);
        });

        const afterEvents = EVENTS.length * 350 + 400;
        timerRef.current = setTimeout(() => {
          setFirstHighlighted(true);
          timerRef.current = setTimeout(() => {
            clearAll();
            timerRef.current = setTimeout(run, 600);
          }, 3000);
        }, afterEvents);
      }, 400);
    };

    run();
    return clearAll;
  }, []);

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
            <span style={{ fontSize: 10, color: D.blue }}>⏱</span>
            <span style={{ fontSize: 10, fontWeight: 600, color: D.blue }}>Audit Logs</span>
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

        <div style={{ flex: 1, overflow: "hidden", padding: "12px 18px" }}>
          {/* Page title + tabs */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: D.body }}>⚙ Settings</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 2,
              background: D.bg,
              border: `1px solid ${D.border}`,
              borderRadius: 8,
              padding: 3,
              marginBottom: 12,
              flexShrink: 0,
              width: "fit-content",
            }}
          >
            {["Tool Integrations", "Document Templates", "Audit Logs"].map((tab) => (
              <span
                key={tab}
                style={{
                  padding: "4px 10px",
                  borderRadius: 6,
                  fontSize: 10,
                  fontWeight: tab === "Audit Logs" ? 600 : 400,
                  color: tab === "Audit Logs" ? D.body : D.muted,
                  background: tab === "Audit Logs" ? D.surface : "transparent",
                  boxShadow: tab === "Audit Logs" ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                  cursor: "default",
                }}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 8,
              marginBottom: 12,
            }}
          >
            {[
              { label: "Total Events", value: "50", color: D.body, bg: D.surface },
              { label: "Info", value: "38", color: D.blue, bg: D.blueFaint },
              { label: "Warnings", value: "7", color: D.amberText, bg: D.amberFaint },
              { label: "Critical", value: "5", color: D.red, bg: D.redFaint },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: s.bg,
                  border: `1px solid ${D.border}`,
                  borderRadius: 8,
                  padding: "8px 12px",
                }}
              >
                <div style={{ fontSize: 9, color: D.muted, marginBottom: 3 }}>{s.label}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: s.color }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Date group */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 8,
              fontSize: 10,
              color: D.muted,
            }}
          >
            <span style={{ fontWeight: 600 }}>⏱ Today — March 6, 2026</span>
            <span style={{ color: D.faint }}>12 events</span>
          </div>

          {/* Events */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {EVENTS.map((ev, i) => {
              const visible = visibleEvents > i;
              const highlighted = ev.highlight && firstHighlighted;
              return (
                <div
                  key={ev.title}
                  style={{
                    background: highlighted ? D.greenFaint : D.surface,
                    border: `1px solid ${highlighted ? `${D.green}50` : D.border}`,
                    borderLeft: highlighted ? `3px solid ${D.green}` : `3px solid transparent`,
                    borderRadius: 8,
                    padding: "8px 12px",
                    display: "flex",
                    gap: 10,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(6px)",
                    transition:
                      "opacity 0.3s ease, transform 0.3s ease, background 0.4s ease, border-color 0.4s ease",
                  }}
                >
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 6,
                      background: D.blueFaint,
                      border: `1px solid ${D.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 12,
                    }}
                  >
                    📄
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        marginBottom: 2,
                        flexWrap: "wrap",
                      }}
                    >
                      <span style={{ fontSize: 11, fontWeight: 700, color: D.body }}>
                        {ev.title}
                      </span>
                      {ev.tags.map((tag, ti) => (
                        <span
                          key={tag}
                          style={{
                            background: ev.tagColors[ti]?.bg ?? D.bg,
                            color: ev.tagColors[ti]?.color ?? D.muted,
                            border: `1px solid ${D.border}`,
                            borderRadius: 4,
                            padding: "1px 6px",
                            fontSize: 8.5,
                            fontWeight: 600,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div
                      style={{
                        fontSize: 9.5,
                        color: D.muted,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        marginBottom: 3,
                      }}
                    >
                      {ev.desc}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9 }}>
                      <span style={{ color: D.faint }}>{ev.time}</span>
                      <span style={{ color: D.muted }}>by {ev.author}</span>
                      <span
                        style={{
                          background: ev.roleBg,
                          color: ev.roleColor,
                          border: `1px solid ${ev.roleColor}30`,
                          borderRadius: 4,
                          padding: "0px 5px",
                          fontSize: 8,
                          fontWeight: 700,
                        }}
                      >
                        {ev.role}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
