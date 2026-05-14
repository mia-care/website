"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

type PhaseStatus = "completed" | "in-progress" | "current" | "locked";

interface Phase {
  id: number;
  name: string;
  status: PhaseStatus;
  tasks: number;
  total: number;
}

const BASE_PHASES: Phase[] = [
  { id: 1, name: "Planning & Quality Governance", status: "completed", tasks: 4, total: 4 },
  { id: 2, name: "Requirements & Risk Analysis", status: "in-progress", tasks: 3, total: 4 },
  { id: 3, name: "Architecture & Detailed Design", status: "current", tasks: 1, total: 5 },
  { id: 4, name: "Implementation & Continuous Verification", status: "locked", tasks: 0, total: 6 },
  { id: 5, name: "System Testing & Final Validation", status: "locked", tasks: 0, total: 6 },
  { id: 6, name: "Release & Post-Market Maintenance", status: "locked", tasks: 0, total: 4 },
];

// Total: 4+4+5+6+6+4 = 29; initial done: 4+3+1 = 8; 8/29 ≈ 28%
const TOTAL_TASKS = BASE_PHASES.reduce((s, p) => s + p.total, 0);

const TASK_MS = 1300;
const HOLD_MS = 1800;

function DonutProgress({ pct }: { pct: number }) {
  const R = 18;
  const C = 2 * Math.PI * R;
  const filled = (pct / 100) * C;
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      aria-label={`${pct}% complete`}
      style={{ flexShrink: 0 }}
    >
      <circle cx="26" cy="26" r={R} fill="none" stroke="#E5E7EB" strokeWidth="4" />
      <circle
        cx="26"
        cy="26"
        r={R}
        fill="none"
        stroke="#2563EB"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={`${filled} ${C - filled}`}
        transform="rotate(-90 26 26)"
        style={{ transition: "stroke-dasharray 0.6s ease" }}
      />
      <text
        x="26"
        y="30"
        textAnchor="middle"
        fontSize="11"
        fontWeight="800"
        fill="#0A0A0A"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {pct}%
      </text>
    </svg>
  );
}

function PhaseIcon({ status }: { status: PhaseStatus }) {
  if (status === "completed") {
    return (
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: "#059669",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M3 8l3.5 3.5L13 5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  if (status === "in-progress") {
    return (
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          border: "2px solid #2563EB",
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2563EB" }} />
      </div>
    );
  }
  if (status === "current") {
    return (
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          border: "2px solid #0891B2",
          background: "#E0F2FE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#0891B2" }} />
      </div>
    );
  }
  return (
    <div
      style={{
        width: 22,
        height: 22,
        borderRadius: "50%",
        border: "1.5px solid #D1D5DB",
        background: "white",
        flexShrink: 0,
      }}
    />
  );
}

const STATUS_LABEL: Record<PhaseStatus, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  current: "Current Stage",
  locked: "Locked",
};

const STATUS_COLOR: Record<PhaseStatus, string> = {
  completed: "#059669",
  "in-progress": "#2563EB",
  current: "#0891B2",
  locked: "#9CA3AF",
};

const GUIDED_NAV = [
  { label: "SDLC Phases", icon: NAV_ICONS.workflowGuide, active: true },
  { label: "AI Guidance", icon: NAV_ICONS.aiGuidance },
  { label: "Role View", icon: NAV_ICONS.roleView },
];

export function GuidedWorkflowsSvg() {
  const [phase3Tasks, setPhase3Tasks] = useState(1);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clear = () => timers.current.forEach(clearTimeout);
    const later = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timers.current.push(t);
    };

    const run = () => {
      clear();
      timers.current = [];
      setPhase3Tasks(1);
      [2, 3, 4, 5].forEach((n, i) => {
        later(() => setPhase3Tasks(n), (i + 1) * TASK_MS);
      });
      later(run, 4 * TASK_MS + HOLD_MS);
    };

    run();
    return clear;
  }, []);

  const doneTasks = 4 + 3 + phase3Tasks;
  const pct = Math.round((doneTasks / TOTAL_TASKS) * 100);
  const phase3Done = phase3Tasks >= BASE_PHASES[2].total;

  const phases: Phase[] = BASE_PHASES.map((p) =>
    p.id === 3 ? { ...p, tasks: phase3Tasks, status: phase3Done ? "completed" : "current" } : p,
  );

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "AI Diagnostic Tool", "SDLC Phases"]}
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
          padding: "14px 16px 12px",
          gap: 10,
        }}
      >
        <style>{`
          @keyframes gw-fade {
            from { opacity: 0; transform: translateY(3px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        {/* ── Project header ── */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <DonutProgress pct={pct} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#0A0A0A" }}>
              AI Diagnostic Tool
            </div>
            <div style={{ fontSize: 9, color: "#6B7280", marginTop: 2, lineHeight: 1.4 }}>
              Phase {phase3Done ? "4" : "3"} of 6 &middot; {doneTasks} of {TOTAL_TASKS} tasks
              completed
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginTop: 6,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  background: "#EFF6FF",
                  color: "#2563EB",
                  border: "1px solid #BFDBFE",
                  borderRadius: 20,
                  padding: "2px 8px",
                  fontSize: 8.5,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                In Development
              </span>
              <span
                style={{
                  color: "#6B7280",
                  fontSize: 8.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  whiteSpace: "nowrap",
                }}
              >
                IEC 62304 Glossary
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path
                    d="M2 8L8 2M8 2H4M8 2v4"
                    stroke="#6B7280"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* ── Section label ── */}
        <div
          style={{
            fontSize: 8.5,
            fontWeight: 700,
            color: "#9CA3AF",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          SDLC Phases
        </div>

        {/* ── Phase list ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            overflowY: "hidden",
          }}
        >
          {phases.map((phase) => {
            const isLocked = phase.status === "locked";
            const isCurrent = phase.status === "current";
            const isCompleted = phase.status === "completed";
            const color = STATUS_COLOR[phase.status];

            return (
              <div
                key={phase.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "7px 9px",
                  borderRadius: 8,
                  background: isCurrent ? "#E0F9FF" : isCompleted ? "#F0FDF4" : "transparent",
                  border: isCurrent
                    ? "1px solid #BAE6FD"
                    : isCompleted
                      ? "1px solid #BBF7D0"
                      : "1px solid transparent",
                  opacity: isLocked ? 0.55 : 1,
                  transition: "background 0.4s, border-color 0.4s, opacity 0.4s",
                  animation: isCurrent ? "gw-fade 0.35s ease" : "none",
                }}
              >
                <PhaseIcon status={phase.status} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: isLocked ? 400 : 600,
                      color: isLocked ? "#9CA3AF" : "#0A0A0A",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {phase.name}
                  </div>
                  <div style={{ fontSize: 8.5, color, marginTop: 1 }}>
                    {STATUS_LABEL[phase.status]} &middot; {phase.tasks}/{phase.total} tasks
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PlatformShell>
  );
}
