"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

const TURNS = [
  {
    id: "q1",
    role: "user" as const,
    text: "What artifacts does IEC 62304 §5.5 require from me?",
  },
  {
    id: "a1",
    role: "ai" as const,
    intro: "For §5.5 Unit Implementation you need to produce:",
    items: [
      { label: "Software Item design document", icon: "📄" },
      { label: "Source code with documented standards compliance", icon: "💻" },
      { label: "Unit test plan & recorded results", icon: "🧪" },
      { label: "Traceability to SRS requirements", icon: "🔗" },
    ],
    tags: ["IEC 62304 §5.5", "Class B · mandatory"],
  },
  {
    id: "q2",
    role: "user" as const,
    text: "Which of these are missing for 'auth-module'?",
  },
  {
    id: "a2",
    role: "ai" as const,
    intro: "For auth-module, current status:",
    issues: [
      { status: "ok", label: "Software Item design document — complete" },
      { status: "ok", label: "Coding standards documented" },
      { status: "warn", label: "Unit test results not yet uploaded" },
      { status: "warn", label: "Traceability to REQ-AUTH-003 missing" },
    ],
    tags: ["2 actions required"],
  },
];

const BLUE = "#2563EB";
const PURPLE = "#7C3AED";

export function GuidedChatSvg() {
  const [visibleTurns, setVisibleTurns] = useState(0);
  const [thinking, setThinking] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const turnTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clearAll = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      turnTimers.current.forEach(clearTimeout);
      turnTimers.current = [];
    };

    const run = () => {
      setVisibleTurns(0);
      setThinking(false);

      timerRef.current = setTimeout(() => {
        setThinking(true);
        TURNS.forEach((_turn, i) => {
          const delay = 400 + i * 1100;
          const t1 = setTimeout(() => {
            setThinking(false);
            setVisibleTurns(i + 1);
          }, delay);
          const t2 = setTimeout(() => {
            if (i < TURNS.length - 1) setThinking(true);
          }, delay + 200);
          turnTimers.current.push(t1, t2);
        });
        const total = 400 + TURNS.length * 1100 + 2500;
        timerRef.current = setTimeout(() => {
          clearAll();
          timerRef.current = setTimeout(run, 400);
        }, total);
      }, 300);
    };

    run();
    return clearAll;
  }, []);

  const GUIDED_NAV = [
    { label: "Role View", icon: NAV_ICONS.roleView },
    { label: "AI Guidance", icon: NAV_ICONS.aiGuidance, active: true },
    { label: "Onboarding", icon: NAV_ICONS.onboarding },
  ];

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "AI Guidance"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard }}
      sections={[{ title: "Guided Workflows", items: GUIDED_NAV }]}
    >
      <div
        style={{
          background: "white",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          fontSize: 12,
          color: "#0A0A0A",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <style>{`
        @keyframes gc-slide {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gc-dot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40%           { transform: scale(1);   opacity: 1;   }
        }
      `}</style>

        {/* Header */}
        <div
          style={{
            padding: "11px 14px 9px",
            borderBottom: "1px solid #E5E5E5",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ fontSize: 14 }}>✨</span>
            <span
              style={{
                fontWeight: 700,
                fontSize: 13,
                background: `linear-gradient(90deg, ${PURPLE}, ${BLUE})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI Compliance Guide
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                background: "#F0FDF4",
                color: "#166534",
                border: "1px solid #BBF7D0",
                borderRadius: 4,
                padding: "1px 7px",
                fontSize: 8.5,
                fontWeight: 600,
              }}
            >
              ● IEC 62304
            </span>
            <span style={{ fontSize: 9, color: "#9CA3AF" }}>auth-module</span>
          </div>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: "hidden",
            padding: "12px 14px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {TURNS.slice(0, visibleTurns).map((turn) => (
            <div
              key={turn.id}
              style={{
                animation: "gc-slide 0.3s ease",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {turn.role === "user" ? (
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div
                    style={{
                      background: BLUE,
                      color: "white",
                      borderRadius: "12px 12px 4px 12px",
                      padding: "8px 12px",
                      fontSize: 10.5,
                      maxWidth: "76%",
                      lineHeight: 1.45,
                    }}
                  >
                    {turn.text}
                  </div>
                </div>
              ) : (
                <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${PURPLE}, ${BLUE})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    ✨
                  </div>
                  <div
                    style={{
                      background: "#F9FAFB",
                      border: "1px solid #E5E7EB",
                      borderRadius: "4px 12px 12px 12px",
                      padding: "9px 12px",
                      flex: 1,
                      fontSize: 10.5,
                      lineHeight: 1.5,
                    }}
                  >
                    {"intro" in turn && (
                      <div style={{ color: "#374151", marginBottom: 7, fontWeight: 500 }}>
                        {turn.intro}
                      </div>
                    )}
                    {"items" in turn && turn.items && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 4,
                          marginBottom: 7,
                        }}
                      >
                        {turn.items.map((item) => (
                          <div
                            key={item.label}
                            style={{ display: "flex", alignItems: "center", gap: 6 }}
                          >
                            <span style={{ fontSize: 10 }}>{item.icon}</span>
                            <span style={{ fontSize: 10, color: "#374151" }}>{item.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {"issues" in turn && turn.issues && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 4,
                          marginBottom: 7,
                        }}
                      >
                        {turn.issues.map((issue) => (
                          <div
                            key={issue.label}
                            style={{ display: "flex", alignItems: "center", gap: 6 }}
                          >
                            <span
                              style={{
                                fontSize: 10,
                                color: issue.status === "ok" ? "#16A34A" : "#DC2626",
                              }}
                            >
                              {issue.status === "ok" ? "✓" : "⚠"}
                            </span>
                            <span
                              style={{
                                fontSize: 10,
                                color: issue.status === "ok" ? "#374151" : "#DC2626",
                              }}
                            >
                              {issue.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {"tags" in turn && turn.tags && (
                      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                        {turn.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              background: "#EFF6FF",
                              border: "1px solid #BFDBFE",
                              color: BLUE,
                              borderRadius: 4,
                              padding: "1px 6px",
                              fontSize: 8.5,
                              fontFamily: "ui-monospace, monospace",
                              fontWeight: 600,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Typing dots */}
          {thinking && (
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${PURPLE}, ${BLUE})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  flexShrink: 0,
                }}
              >
                ✨
              </div>
              <div
                style={{
                  background: "#F9FAFB",
                  border: "1px solid #E5E7EB",
                  borderRadius: "4px 12px 12px 12px",
                  padding: "10px 14px",
                  display: "flex",
                  gap: 4,
                  alignItems: "center",
                }}
              >
                {[0, 1, 2].map((j) => (
                  <div
                    key={j}
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#a78bfa",
                      animation: `gc-dot 1.2s ease-in-out ${j * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div style={{ padding: "8px 12px", borderTop: "1px solid #E5E5E5", flexShrink: 0 }}>
          <div
            style={{
              background: "#F9FAFB",
              border: "1px solid #E5E5E5",
              borderRadius: 8,
              padding: "7px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 9.5, color: "#9CA3AF" }}>Ask a compliance question…</span>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                background: BLUE,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </PlatformShell>
  );
}
