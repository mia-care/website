"use client";

import { useEffect, useRef, useState } from "react";

const BLUE = "#2563EB";
const PURPLE = "#7C3AED";
const _TEAL = "#0D9488";
const GREEN = "#16A34A";

const PHASES = [
  {
    name: "IEC 62304 Foundations",
    days: "5 days",
    status: "done" as const,
    tasks: 8,
    completedTasks: 8,
    color: GREEN,
    bg: "#F0FDF4",
    border: "#BBF7D0",
  },
  {
    name: "Risk Management Basics",
    days: "3 days",
    status: "done" as const,
    tasks: 6,
    completedTasks: 6,
    color: GREEN,
    bg: "#F0FDF4",
    border: "#BBF7D0",
  },
  {
    name: "Software Architecture",
    days: "4 days",
    status: "active" as const,
    tasks: 5,
    completedTasks: 2,
    color: BLUE,
    bg: "#EFF6FF",
    border: "#BFDBFE",
    milestones: [
      { label: "Read §5.3 Architecture requirements", done: true },
      { label: "Create Software Design Spec template", done: true },
      { label: "Map architectural components to requirements", done: false, current: true },
      { label: "Document software units and interfaces", done: false },
      { label: "Review with Regulatory Affairs team", done: false },
    ],
  },
  {
    name: "Verification & Release",
    days: "4 days",
    status: "pending" as const,
    tasks: 7,
    completedTasks: 0,
    color: "#9CA3AF",
    bg: "#F9FAFB",
    border: "#E5E7EB",
  },
];

export function GuidedOnboardingSvg() {
  const [visiblePhases, setVisiblePhases] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const phaseTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clearAll = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      phaseTimers.current.forEach(clearTimeout);
      phaseTimers.current = [];
    };

    const run = () => {
      setVisiblePhases(0);
      setExpanded(false);

      timerRef.current = setTimeout(() => {
        PHASES.forEach((_, i) => {
          const t = setTimeout(() => setVisiblePhases(i + 1), i * 280);
          phaseTimers.current.push(t);
        });
        const afterPhases = PHASES.length * 280 + 400;
        timerRef.current = setTimeout(() => {
          setExpanded(true);
          timerRef.current = setTimeout(() => {
            clearAll();
            timerRef.current = setTimeout(run, 600);
          }, 4000);
        }, afterPhases);
      }, 400);
    };

    run();
    return clearAll;
  }, []);

  const totalTasks = PHASES.reduce((s, p) => s + p.tasks, 0);
  const doneTasks = PHASES.reduce((s, p) => s + p.completedTasks, 0);
  const overallPct = Math.round((doneTasks / totalTasks) * 100);
  const donePhases = PHASES.filter((p) => p.status === "done").length;

  return (
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
        @keyframes go-slide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes go-expand {
          from { opacity: 0; max-height: 0; }
          to   { opacity: 1; max-height: 200px; }
        }
        @keyframes go-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,99,235,0); }
          50%       { box-shadow: 0 0 0 3px rgba(37,99,235,0.18); }
        }
      `}</style>

      {/* Header */}
      <div
        style={{
          padding: "11px 14px 10px",
          borderBottom: "1px solid #E5E5E5",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 6,
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: 13 }}>SaMD Onboarding Path</div>
            <div style={{ fontSize: 9, color: "#9CA3AF", marginTop: 1 }}>
              Team: App Cardio-Monitor · 3 members
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: BLUE }}>{overallPct}%</div>
            <div style={{ fontSize: 8.5, color: "#9CA3AF" }}>
              {donePhases} of {PHASES.length} phases
            </div>
          </div>
        </div>
        {/* Overall progress bar */}
        <div style={{ height: 5, background: "#F3F4F6", borderRadius: 99, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${overallPct}%`,
              background: `linear-gradient(90deg, ${GREEN}, ${BLUE})`,
              borderRadius: 99,
              transition: "width 0.8s ease",
            }}
          />
        </div>
      </div>

      {/* Phases list */}
      <div
        style={{
          flex: 1,
          overflowY: "hidden",
          padding: "10px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {PHASES.map((phase, i) => {
          const visible = visiblePhases > i;
          const isActive = phase.status === "active";
          const isExpanded = isActive && expanded;

          return (
            <div
              key={phase.name}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              {/* Phase row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "8px 10px",
                  background: phase.bg,
                  border: `1px solid ${phase.border}`,
                  borderRadius: isExpanded ? "8px 8px 0 0" : 8,
                  transition: "border-radius 0.2s",
                  animation: visible ? "go-slide 0.3s ease" : "none",
                  ...(isActive && { animation: "go-pulse 2.5s ease-in-out infinite" }),
                }}
              >
                {/* Status icon */}
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background:
                      phase.status === "done"
                        ? GREEN
                        : phase.status === "active"
                          ? BLUE
                          : "#E5E7EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: 9,
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  {phase.status === "done" ? "✓" : phase.status === "active" ? "▶" : `${i + 1}`}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 10.5,
                      fontWeight: isActive ? 700 : 500,
                      color: phase.status === "pending" ? "#9CA3AF" : "#0A0A0A",
                    }}
                  >
                    {phase.name}
                  </div>
                  <div style={{ fontSize: 8.5, color: "#9CA3AF", marginTop: 1 }}>
                    {phase.days} · {phase.completedTasks}/{phase.tasks} tasks
                  </div>
                </div>

                {/* Phase progress bar */}
                <div
                  style={{
                    width: 60,
                    height: 4,
                    background: "#F3F4F6",
                    borderRadius: 99,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${(phase.completedTasks / phase.tasks) * 100}%`,
                      background: phase.color,
                      borderRadius: 99,
                      transition: "width 0.6s ease",
                    }}
                  />
                </div>

                <span
                  style={{
                    fontSize: 8,
                    fontWeight: 700,
                    color: phase.color,
                    flexShrink: 0,
                    width: 28,
                    textAlign: "right",
                  }}
                >
                  {Math.round((phase.completedTasks / phase.tasks) * 100)}%
                </span>
              </div>

              {/* Expanded milestones for active phase */}
              {isExpanded && phase.milestones && (
                <div
                  style={{
                    background: "#F8FAFF",
                    border: `1px solid ${phase.border}`,
                    borderTop: "none",
                    borderRadius: "0 0 8px 8px",
                    padding: "8px 10px 8px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    animation: "go-expand 0.35s ease",
                    overflow: "hidden",
                  }}
                >
                  {phase.milestones.map((m) => (
                    <div
                      key={m.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        padding: "3px 6px",
                        borderRadius: 5,
                        background: m.current ? "#DBEAFE" : "transparent",
                        border: m.current ? `1px solid ${BLUE}40` : "1px solid transparent",
                      }}
                    >
                      <div
                        style={{
                          width: 13,
                          height: 13,
                          borderRadius: 3,
                          border: `1.5px solid ${m.done ? BLUE : m.current ? BLUE : "#D1D5DB"}`,
                          background: m.done ? BLUE : "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          fontSize: 7,
                          color: "white",
                        }}
                      >
                        {m.done ? "✓" : ""}
                      </div>
                      <span
                        style={{
                          fontSize: 9.5,
                          color: m.done ? "#374151" : m.current ? BLUE : "#9CA3AF",
                          fontWeight: m.current ? 600 : 400,
                        }}
                      >
                        {m.label}
                      </span>
                      {m.current && (
                        <span
                          style={{
                            marginLeft: "auto",
                            background: "#DBEAFE",
                            color: BLUE,
                            border: `1px solid ${BLUE}40`,
                            borderRadius: 4,
                            padding: "0px 5px",
                            fontSize: 7.5,
                            fontWeight: 700,
                            flexShrink: 0,
                          }}
                        >
                          In progress
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "8px 14px",
          borderTop: "1px solid #E5E5E5",
          display: "flex",
          alignItems: "center",
          gap: 7,
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 9, color: "#9CA3AF" }}>Guided by</span>
        <span
          style={{
            background: "#EFF6FF",
            color: BLUE,
            border: "1px solid #BFDBFE",
            borderRadius: 4,
            padding: "1px 6px",
            fontSize: 8.5,
            fontFamily: "ui-monospace, monospace",
            fontWeight: 600,
          }}
        >
          IEC 62304
        </span>
        <span
          style={{
            background: "#F5F3FF",
            color: PURPLE,
            border: "1px solid #C4B5FD",
            borderRadius: 4,
            padding: "1px 6px",
            fontSize: 8.5,
            fontFamily: "ui-monospace, monospace",
            fontWeight: 600,
          }}
        >
          ISO 13485
        </span>
        <span style={{ marginLeft: "auto", fontSize: 8.5, color: "#9CA3AF" }}>
          {PHASES.filter((p) => p.status === "pending").length} phases remaining
        </span>
      </div>
    </div>
  );
}
