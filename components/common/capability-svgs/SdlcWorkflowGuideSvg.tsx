"use client";

import { useEffect, useRef, useState } from "react";
import { D, NAV_ICONS, PlatformShell } from "./PlatformShell";

const teal = "#0892A5";
const _tealFaint = "#ECFEFF";
const redBorder = "#FCA5A5";

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
        TASKS.forEach((_, i) => {
          const t = setTimeout(() => setVisibleTasks(i + 1), i * 300);
          taskTimers.current.push(t);
        });

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
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "Workflow Guide"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard }}
      sections={[
        {
          title: "SDLC",
          items: [
            { label: "Workflow Guide", icon: NAV_ICONS.workflowGuide, active: true },
            { label: "Requirements", icon: NAV_ICONS.requirements },
            { label: "Software System", icon: NAV_ICONS.softwareSystem },
            { label: "Verification", icon: NAV_ICONS.verification },
            { label: "Risk Analysis", icon: NAV_ICONS.riskAnalysis },
          ],
        },
        {
          title: "Configuration",
          items: [
            { label: "Tool Integrations", icon: NAV_ICONS.toolIntegrations },
            { label: "Audit Log", icon: NAV_ICONS.auditLog },
          ],
        },
      ]}
    >
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
            border: `1px solid ${redBorder}`,
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
                  border: `1px solid ${redBorder}`,
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
              border: `1px solid ${teal}60`,
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
                color: teal,
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
                  border: `2px solid ${teal}`,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 8,
                  color: teal,
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
                    <span style={{ color: teal, fontSize: 10 }}>▶</span>
                  ) : (
                    <span style={{ color: D.faint, fontSize: 10 }}>○</span>
                  )}
                  <span
                    style={{
                      fontSize: 9.5,
                      color:
                        ph.status === "active" ? D.body : ph.status === "done" ? D.muted : D.faint,
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
    </PlatformShell>
  );
}
