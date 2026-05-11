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
  redBorder: "#FCA5A5",
  amber: "#E17100",
  amberFaint: "#FFF7ED",
  amberText: "#CA3500",
  teal: "#0892A5",
  tealFaint: "#ECFEFF",
};

const NAV_ITEMS = [
  { label: "Requirements", icon: "📄" },
  { label: "Software System", icon: "🗂" },
  { label: "Verification", icon: "✅" },
  { label: "Risk Analysis", icon: "⚠" },
  { label: "Change Requests", icon: "🔄" },
];

const CONFIG_ITEMS = ["Product Metadata", "Regulatory Framework", "AI Agents", "Users", "Settings"];

const TASKS = [
  {
    sev: "CRITICAL",
    extra: "BLOCKER",
    sevColor: D.red,
    sevBg: D.redFaint,
    extraColor: "#BE185D",
    extraBg: "#FFF1F2",
    title: "Define Risk Control Measures",
    area: "Requirements & Risk Analysis",
    days: "2–3 days",
  },
  {
    sev: "CRITICAL",
    extra: "BLOCKER",
    sevColor: D.red,
    sevBg: D.redFaint,
    extraColor: "#BE185D",
    extraBg: "#FFF1F2",
    title: "Document each module in detail (Class C only)",
    area: "Architecture & Detailed Design",
    days: "7–10 days",
  },
  {
    sev: "HIGH",
    extra: null,
    sevColor: D.amberText,
    sevBg: D.amberFaint,
    extraColor: "",
    extraBg: "",
    title: "List all third-party libraries, assess safety impact",
    area: "Architecture & Detailed Design",
    days: "2–3 days",
  },
];

const PHASES = [
  { name: "Problem Resolution Process", status: "done" },
  { name: "Requirements Analysis", status: "done" },
  { name: "Architecture & Detailed Design", status: "active" },
  { name: "Unit Implementation & Tests", status: "pending" },
  { name: "Integration & Testing", status: "pending" },
  { name: "Software Release", status: "pending" },
];

const CIRCUMFERENCE = 2 * Math.PI * 36;

export function SdlcWorkflowGuideSvg() {
  const [visibleTasks, setVisibleTasks] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showPhases, setShowPhases] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const taskTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const clearAll = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      taskTimers.current.forEach(clearTimeout);
      taskTimers.current = [];
      if (progressInterval.current) clearInterval(progressInterval.current);
    };

    const run = () => {
      setVisibleTasks(0);
      setProgress(0);
      setShowPhases(false);

      timerRef.current = setTimeout(() => {
        // reveal tasks one by one
        TASKS.forEach((_, i) => {
          const t = setTimeout(() => setVisibleTasks(i + 1), i * 300);
          taskTimers.current.push(t);
        });

        // after tasks done, animate progress ring
        const afterTasks = TASKS.length * 300 + 400;
        timerRef.current = setTimeout(() => {
          let p = 0;
          progressInterval.current = setInterval(() => {
            p += 1;
            setProgress(p);
            if (p >= 28) {
              if (progressInterval.current) clearInterval(progressInterval.current);
              setShowPhases(true);
            }
          }, 28);
        }, afterTasks);

        // reset after hold
        timerRef.current = setTimeout(
          () => {
            clearAll();
            timerRef.current = setTimeout(run, 600);
          },
          afterTasks + 1500 + 3000,
        );
      }, 400);
    };

    run();
    return clearAll;
  }, []);

  const dashOffset = CIRCUMFERENCE * (1 - progress / 100);

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
        {/* Logo */}
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

        {/* Nav */}
        <div style={{ padding: "6px 0", flex: 1, overflow: "hidden" }}>
          <div style={{ padding: "4px 14px 2px", fontSize: 9, color: D.blue, fontWeight: 600 }}>
            ‹ Back to Projects
          </div>
          <div style={{ padding: "3px 14px 6px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: D.body }}>App Cardio-Monitor</div>
            <div style={{ fontSize: 9, color: D.blue }}>dev</div>
          </div>
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
          {/* Workflow Guide — active */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "5px 14px",
              background: D.blueFaint,
              borderLeft: `2px solid ${D.blue}`,
              marginBottom: 1,
            }}
          >
            <span style={{ fontSize: 10, color: D.blue }}>📋</span>
            <span style={{ fontSize: 10, fontWeight: 600, color: D.blue }}>Workflow Guide</span>
          </div>
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "4px 14px",
              }}
            >
              <span style={{ fontSize: 9, color: D.faint }}>{item.icon}</span>
              <span style={{ fontSize: 9.5, color: D.muted }}>{item.label}</span>
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
          {CONFIG_ITEMS.map((item) => (
            <div
              key={item}
              style={{ display: "flex", alignItems: "center", gap: 7, padding: "4px 14px" }}
            >
              <span style={{ fontSize: 9, color: D.faint }}>○</span>
              <span style={{ fontSize: 9.5, color: D.muted }}>{item}</span>
            </div>
          ))}
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

        <div
          style={{
            flex: 1,
            overflow: "hidden",
            padding: "12px 18px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {/* Page heading */}
          <div style={{ flexShrink: 0 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: D.body, marginBottom: 2 }}>
              SDLC Workflow Guide
            </div>
            <div style={{ fontSize: 10, color: D.muted }}>
              Step-by-step guidance for IEC 62304 compliant software development
            </div>
          </div>

          {/* Action Required box */}
          <div
            style={{
              background: "#FFF5F5",
              border: `1px solid ${D.redBorder}`,
              borderRadius: 10,
              padding: "10px 14px",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 8,
                  background: D.red,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  flexShrink: 0,
                }}
              >
                ⚡
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: D.body }}>Action Required</span>
              <span
                style={{
                  background: D.red,
                  color: "white",
                  borderRadius: 4,
                  padding: "1px 7px",
                  fontSize: 9,
                  fontWeight: 700,
                }}
              >
                3 Priority Tasks
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {TASKS.map((task, i) => (
                <div
                  key={task.title}
                  style={{
                    background: D.surface,
                    border: `1px solid ${D.redBorder}`,
                    borderRadius: 7,
                    padding: "6px 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    opacity: visibleTasks > i ? 1 : 0,
                    transform: visibleTasks > i ? "translateX(0)" : "translateX(-6px)",
                    transition: "opacity 0.25s ease, transform 0.25s ease",
                  }}
                >
                  <div style={{ display: "flex", gap: 4, flexShrink: 0 }}>
                    <span
                      style={{
                        background: task.sevBg,
                        color: task.sevColor,
                        border: `1px solid ${task.sevColor}30`,
                        borderRadius: 3,
                        padding: "1px 5px",
                        fontSize: 8,
                        fontWeight: 700,
                      }}
                    >
                      ⚡ {task.sev}
                    </span>
                    {task.extra && (
                      <span
                        style={{
                          background: task.extraBg,
                          color: task.extraColor,
                          border: `1px solid ${task.extraColor}30`,
                          borderRadius: 3,
                          padding: "1px 5px",
                          fontSize: 8,
                          fontWeight: 700,
                        }}
                      >
                        {task.extra}
                      </span>
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: D.body,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {task.title}
                    </div>
                    <div style={{ fontSize: 8.5, color: D.muted }}>
                      ⊙ {task.area} &nbsp;·&nbsp; ⏱ {task.days}
                    </div>
                  </div>
                  <span style={{ color: D.faint, fontSize: 12, flexShrink: 0 }}>›</span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress + phases row */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexShrink: 0,
              opacity: showPhases ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            {/* Progress ring */}
            <div
              style={{
                background: D.surface,
                border: `1px solid ${D.border}`,
                borderRadius: 10,
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: 14,
                flexShrink: 0,
              }}
            >
              <svg width="82" height="82" viewBox="0 0 82 82" aria-hidden="true">
                <circle cx="41" cy="41" r="36" fill="none" stroke={D.border} strokeWidth="6" />
                <circle
                  cx="41"
                  cy="41"
                  r="36"
                  fill="none"
                  stroke={D.blue}
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={dashOffset}
                  transform="rotate(-90 41 41)"
                  style={{ transition: "stroke-dashoffset 0.05s linear" }}
                />
                <text
                  x="41"
                  y="45"
                  textAnchor="middle"
                  fontSize="15"
                  fontWeight="800"
                  fill={D.body}
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                >
                  {progress}%
                </text>
              </svg>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: D.body, marginBottom: 3 }}>
                  App Cardio-Monitor
                </div>
                <div style={{ fontSize: 10, color: D.muted, marginBottom: 6 }}>
                  Phase 3 of 6 · 8 of 29 tasks completed
                </div>
                <span
                  style={{
                    background: D.amberFaint,
                    color: D.amberText,
                    border: `1px solid ${D.amber}30`,
                    borderRadius: 4,
                    padding: "2px 8px",
                    fontSize: 9,
                    fontWeight: 700,
                  }}
                >
                  In Development
                </span>
              </div>
            </div>

            {/* Current phase */}
            <div
              style={{
                flex: 1,
                background: D.surface,
                border: `1px solid ${D.teal}60`,
                borderRadius: 10,
                padding: "10px 14px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: 8.5,
                  fontWeight: 700,
                  color: D.teal,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <span
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    border: `2px solid ${D.teal}`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 8,
                    color: D.teal,
                  }}
                >
                  ▶
                </span>
                Phase 3 of 6
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: D.body, marginBottom: 6 }}>
                Architecture &amp; Detailed Design
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {PHASES.slice(0, 4).map((ph) => (
                  <div key={ph.name} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {ph.status === "done" ? (
                      <span style={{ color: D.greenText, fontSize: 10 }}>✓</span>
                    ) : ph.status === "active" ? (
                      <span style={{ color: D.teal, fontSize: 10 }}>▶</span>
                    ) : (
                      <span style={{ color: D.faint, fontSize: 10 }}>○</span>
                    )}
                    <span
                      style={{
                        fontSize: 9.5,
                        color:
                          ph.status === "active"
                            ? D.body
                            : ph.status === "done"
                              ? D.muted
                              : D.faint,
                        fontWeight: ph.status === "active" ? 600 : 400,
                      }}
                    >
                      {ph.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
