"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

const SPRINT_1 = [
  { title: "Write Software Requirements Specification", sp: 8, ref: "IEC 62304 §5.2" },
  { title: "Define SOUP identification list", sp: 5, ref: "IEC 62304 §8.1" },
];

const SPRINT_2 = [
  { id: "unit-test", title: "Implement unit test evidence package", sp: 13, ref: "IEC 62304 §5.5" },
  { id: "risk-file", title: "Complete risk file documentation", sp: 8, ref: "ISO 14971" },
];

export function BrownfieldRemediationPlanSvg() {
  const [showSprint1, setShowSprint1] = useState(false);
  const [showSprint2, setShowSprint2] = useState(false);
  const [activeTask, setActiveTask] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const clear = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };

    const run = () => {
      setShowSprint1(false);
      setShowSprint2(false);
      setActiveTask(null);

      timerRef.current = setTimeout(() => {
        setShowSprint1(true);
        timerRef.current = setTimeout(() => {
          setShowSprint2(true);
          timerRef.current = setTimeout(() => {
            setActiveTask("unit-test");
            timerRef.current = setTimeout(() => {
              setActiveTask(null);
              timerRef.current = setTimeout(run, 600);
            }, 2800);
          }, 700);
        }, 700);
      }, 400);
    };

    run();
    return clear;
  }, []);

  const BROWNFIELD_NAV = [
    { label: "Import", icon: NAV_ICONS.import },
    { label: "Gap Analysis", icon: NAV_ICONS.gapAnalysis },
    { label: "Remediation Plan", icon: NAV_ICONS.remediationPlan, active: true },
  ];

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "Remediation Plan"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard }}
      sections={[{ title: "Brownfield", items: BROWNFIELD_NAV }]}
    >
      <div
        style={{
          background: "#F8F8F8",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          fontSize: 12,
          color: "#0A0A0A",
          overflow: "hidden",
        }}
      >
        <style>{`
        @keyframes bf-plan-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>

        {/* Header */}
        <div
          style={{
            background: "white",
            borderBottom: "1px solid #E5E5E5",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 14 }}>Remediation Backlog</div>
          <span
            style={{
              padding: "3px 10px",
              borderRadius: 6,
              border: "1px solid #00AFB6",
              color: "#00AFB6",
              fontSize: 11,
              cursor: "default",
              fontWeight: 600,
            }}
          >
            Export to Jira ↗
          </span>
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            padding: "14px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {/* Sprint 1 */}
          <div
            style={{
              opacity: showSprint1 ? 1 : 0,
              transform: showSprint1 ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#DC2626",
                marginBottom: 7,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Sprint 1 — Critical Priority
            </div>
            {SPRINT_1.map((task) => (
              <div
                key={task.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 12px",
                  background: "white",
                  border: "1px solid #E5E5E5",
                  borderRadius: 8,
                  marginBottom: 6,
                }}
              >
                <span style={{ color: "#059669", fontSize: 15, flexShrink: 0 }}>✓</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {task.title}
                  </div>
                  <div style={{ fontSize: 9, color: "#00AFB6", marginTop: 2 }}>{task.ref}</div>
                </div>
                <span style={{ fontSize: 10, color: "#737373", flexShrink: 0 }}>{task.sp} SP</span>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: "#059669",
                    background: "#DCFCE7",
                    border: "1px solid #6EE7B7",
                    borderRadius: 20,
                    padding: "1px 7px",
                    flexShrink: 0,
                  }}
                >
                  Done
                </span>
              </div>
            ))}
          </div>

          {/* Sprint 2 */}
          <div
            style={{
              opacity: showSprint2 ? 1 : 0,
              transform: showSprint2 ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#D97706",
                marginBottom: 7,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Sprint 2 — High Priority
            </div>
            {SPRINT_2.map((task) => {
              const isActive = activeTask === task.id;
              return (
                <div
                  key={task.title}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    background: isActive ? "#EFF6FF" : "white",
                    border: `1px solid ${isActive ? "#93C5FD" : "#E5E5E5"}`,
                    borderRadius: 8,
                    marginBottom: 6,
                    transition: "background 0.3s ease, border-color 0.3s ease",
                  }}
                >
                  <span
                    style={{ color: isActive ? "#2563EB" : "#D4D4D4", fontSize: 15, flexShrink: 0 }}
                  >
                    {isActive ? "◉" : "○"}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {task.title}
                    </div>
                    <div style={{ fontSize: 9, color: "#00AFB6", marginTop: 2 }}>{task.ref}</div>
                  </div>
                  <span style={{ fontSize: 10, color: "#737373", flexShrink: 0 }}>
                    {task.sp} SP
                  </span>
                  {isActive ? (
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        color: "#2563EB",
                        background: "#EFF6FF",
                        border: "1px solid #93C5FD",
                        borderRadius: 20,
                        padding: "1px 7px",
                        flexShrink: 0,
                        animation: "bf-plan-pulse 1.2s ease-in-out infinite",
                      }}
                    >
                      In Progress
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        color: "#737373",
                        background: "#F5F5F5",
                        borderRadius: 20,
                        padding: "1px 7px",
                        flexShrink: 0,
                      }}
                    >
                      Open
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "7px 20px",
            background: "white",
            borderTop: "1px solid #E5E5E5",
            display: "flex",
            justifyContent: "space-between",
            color: "#737373",
            fontSize: 10,
            flexShrink: 0,
          }}
        >
          <span>47 tasks total</span>
          <span style={{ color: "#00AFB6", fontWeight: 600 }}>Projected completion: 3 sprints</span>
        </div>
      </div>
    </PlatformShell>
  );
}
