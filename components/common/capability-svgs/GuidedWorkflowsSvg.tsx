"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

const TASKS = [
  {
    id: 1,
    severity: "CRITICAL",
    blocker: true,
    title: "Define Risk Control Measures",
    context: "Requirements & Risk Analysis",
    timing: "Overdue · 2 days",
  },
  {
    id: 2,
    severity: "CRITICAL",
    blocker: true,
    title: "Document each module in detail",
    context: "Architecture & Detailed Design",
    timing: "Due today",
  },
  {
    id: 3,
    severity: "HIGH",
    blocker: false,
    title: "List all third-party libraries and assess their safety",
    context: "Architecture & Detailed Design",
    timing: "2–3 days",
  },
];

const SDLC_NAV = [
  { label: "Workflow Guide", icon: NAV_ICONS.workflowGuide, active: true },
  { label: "Requirements", icon: NAV_ICONS.requirements },
  { label: "Software System", icon: NAV_ICONS.softwareSystem },
  { label: "Verification", icon: NAV_ICONS.verification },
  { label: "Risk Analysis", icon: NAV_ICONS.riskAnalysis },
];

const CONFIG_NAV = [
  { label: "Product Metadata", icon: NAV_ICONS.productMetadata },
  { label: "Regulatory Framework", icon: NAV_ICONS.guardrails },
  { label: "AI Agents", icon: NAV_ICONS.aiProjects },
  { label: "Users", icon: NAV_ICONS.roleView },
  { label: "Settings", icon: NAV_ICONS.settings },
];

const RESOLVE_DELAY_MS = 1700;
const HOLD_MS = 2000;

function DonutProgress({ pct }: { pct: number }) {
  const R = 18;
  const C = 2 * Math.PI * R;
  const filled = (pct / 100) * C;
  return (
    <svg width="48" height="48" viewBox="0 0 52 52" aria-hidden="true" style={{ flexShrink: 0 }}>
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

export function GuidedWorkflowsSvg() {
  const [resolved, setResolved] = useState(0);
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
      setResolved(0);
      TASKS.forEach((_, i) => {
        later(() => setResolved(i + 1), 1400 + i * RESOLVE_DELAY_MS);
      });
      later(run, 1400 + TASKS.length * RESOLVE_DELAY_MS + HOLD_MS);
    };

    run();
    return clear;
  }, []);

  const pct = Math.round(28 + (resolved / TASKS.length) * 6);
  const remaining = TASKS.length - resolved;

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "AI Diagnostic Tool", "Workflow Guide"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard }}
      sections={[
        { title: "SDLC", items: SDLC_NAV },
        { title: "Configuration", items: CONFIG_NAV },
      ]}
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
        {/* Title */}
        <div style={{ flexShrink: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#0A0A0A" }}>SDLC Workflow Guide</div>
          <div style={{ fontSize: 9, color: "#6B7280", marginTop: 2, lineHeight: 1.4 }}>
            Step-by-step guidance for IEC 62304 compliant software development
          </div>
        </div>

        {/* Action Required card */}
        <div
          style={{
            background: "#FFF8F8",
            border: "1px solid #FCA5A5",
            borderRadius: 8,
            padding: "10px 12px",
            display: "flex",
            flexDirection: "column",
            gap: 7,
            flexShrink: 0,
          }}
        >
          {/* Card header */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                background: "#DC2626",
                color: "white",
                borderRadius: 4,
                padding: "2px 7px",
                fontSize: 8,
                fontWeight: 700,
              }}
            >
              ⚠ Action Required
            </span>
            <span
              style={{
                background: remaining === 0 ? "#F0FDF4" : "#FEF3C7",
                color: remaining === 0 ? "#059669" : "#92400E",
                border: `1px solid ${remaining === 0 ? "#BBF7D0" : "#FDE68A"}`,
                borderRadius: 4,
                padding: "2px 7px",
                fontSize: 8,
                fontWeight: 600,
                transition: "all 0.4s",
              }}
            >
              {remaining === 0
                ? "All Resolved ✓"
                : `${remaining} Priority Task${remaining === 1 ? "" : "s"}`}
            </span>
          </div>

          <div style={{ fontSize: 8.5, color: "#6B7280", lineHeight: 1.4 }}>
            The following tasks require immediate attention to keep the project on track.
          </div>

          {/* Task rows */}
          {TASKS.map((task, i) => {
            const isResolved = i < resolved;
            return (
              <div
                key={task.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  padding: "6px 8px",
                  background: isResolved ? "#F0FDF4" : "white",
                  border: `1px solid ${isResolved ? "#BBF7D0" : "#E5E7EB"}`,
                  borderRadius: 6,
                  transition: "background 0.5s, border-color 0.5s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 5, flexWrap: "wrap" }}>
                  {isResolved ? (
                    <span
                      style={{
                        background: "#059669",
                        color: "white",
                        borderRadius: 4,
                        padding: "1px 6px",
                        fontSize: 7.5,
                        fontWeight: 700,
                      }}
                    >
                      ✓ Resolved
                    </span>
                  ) : (
                    <>
                      <span
                        style={{
                          background: "#FEE2E2",
                          color: "#DC2626",
                          border: "1px solid #FCA5A5",
                          borderRadius: 4,
                          padding: "1px 6px",
                          fontSize: 7.5,
                          fontWeight: 700,
                        }}
                      >
                        {task.severity}
                      </span>
                      {task.blocker && (
                        <span
                          style={{
                            background: "#DC2626",
                            color: "white",
                            borderRadius: 4,
                            padding: "1px 6px",
                            fontSize: 7.5,
                            fontWeight: 700,
                          }}
                        >
                          BLOCKER
                        </span>
                      )}
                    </>
                  )}
                  <span
                    style={{
                      fontSize: 9.5,
                      fontWeight: 600,
                      color: isResolved ? "#6B7280" : "#0A0A0A",
                      textDecoration: isResolved ? "line-through" : "none",
                      transition: "color 0.4s",
                    }}
                  >
                    {task.title}
                  </span>
                </div>
                <div style={{ fontSize: 8, color: "#9CA3AF" }}>
                  {task.context} · {task.timing}
                </div>
              </div>
            );
          })}
        </div>

        {/* Project summary */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 10px",
            background: "#F9FAFB",
            border: "1px solid #E5E7EB",
            borderRadius: 8,
            flexShrink: 0,
          }}
        >
          <DonutProgress pct={pct} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 11, color: "#0A0A0A" }}>
              AI Diagnostic Tool
            </div>
            <div style={{ fontSize: 8.5, color: "#6B7280", marginTop: 2 }}>
              Phase 3 of 6 · 8 of 29 tasks completed
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginTop: 5,
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
                  fontSize: 8,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                In Development
              </span>
              <span
                style={{
                  color: "#6B7280",
                  fontSize: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  whiteSpace: "nowrap",
                }}
              >
                IEC 62304 Glossary
                <svg width="7" height="7" viewBox="0 0 10 10" fill="none" aria-hidden="true">
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

        {/* SDLC Phases label */}
        <div
          style={{
            fontSize: 8.5,
            fontWeight: 700,
            color: "#9CA3AF",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            flexShrink: 0,
          }}
        >
          SDLC Phases
        </div>
      </div>
    </PlatformShell>
  );
}
