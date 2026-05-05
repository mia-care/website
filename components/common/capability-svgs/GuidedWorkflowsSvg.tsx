"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = [
  {
    label: "Developer",
    phase: "Implementation",
    ref: "IEC 62304 §5.5",
    color: "#2563EB",
    bg: "#EFF6FF",
    border: "#BFDBFE",
    tasks: [
      "Create Software Item design document",
      "Implement unit tests for all functions",
      "Document coding standards compliance",
      "Mark software item as ready for review",
    ],
    hint: "Every software unit must have documented acceptance criteria before testing begins.",
  },
  {
    label: "QA",
    phase: "Verification",
    ref: "IEC 62304 §5.6–5.7",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "#C4B5FD",
    tasks: [
      "Define integration test plan",
      "Execute system test cases",
      "Document test results and evidence",
      "Verify traceability coverage ≥ 100%",
    ],
    hint: "System testing must cover all software requirements defined in the SRS.",
  },
  {
    label: "Reg. Affairs",
    phase: "Submission",
    ref: "EU MDR · ISO 13485",
    color: "#0D9488",
    bg: "#F0FDFA",
    border: "#99F6E4",
    tasks: [
      "Review Technical File completeness",
      "Confirm DHF is audit-ready",
      "Validate clinical evaluation report",
      "Sign off on submission package",
    ],
    hint: "Technical File must reference all applicable harmonised standards used.",
  },
];

const TASK_MS = 900;
const HOLD_MS = 1200;
const RESET_MS = 400;

export function GuidedWorkflowsSvg() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [checked, setChecked] = useState<number>(-1); // how many tasks are checked
  const [thinking, setThinking] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clear = () => timers.current.forEach(clearTimeout);
    const later = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timers.current.push(t);
    };

    const runRole = (idx: number) => {
      clear();
      timers.current = [];
      setRoleIdx(idx);
      setChecked(-1);
      setThinking(false);

      const role = ROLES[idx];

      // check tasks one by one
      role.tasks.forEach((_, i) => {
        later(() => setChecked(i), RESET_MS + i * TASK_MS);
      });

      // after all tasks done, show thinking hint, then switch role
      const allDoneAt = RESET_MS + role.tasks.length * TASK_MS;
      later(() => setThinking(true), allDoneAt + 200);
      later(() => runRole((idx + 1) % ROLES.length), allDoneAt + HOLD_MS);
    };

    runRole(0);
    return clear;
  }, []);

  const role = ROLES[roleIdx];

  return (
    <div
      style={{
        background: "white",
        borderRadius: 12,
        border: "1px solid #E5E5E5",
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
        @keyframes gw-slide {
          from { opacity: 0; transform: translateX(-6px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes gw-check {
          from { transform: scale(0); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }
        @keyframes gw-dot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40%           { transform: scale(1);   opacity: 1;   }
        }
        @keyframes gw-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      {/* ── Role tabs ── */}
      <div style={{ display: "flex", gap: 5 }}>
        {ROLES.map((r, i) => {
          const active = roleIdx === i;
          return (
            <div
              key={r.label}
              style={{
                padding: "4px 10px",
                borderRadius: 20,
                fontSize: 9.5,
                fontWeight: active ? 700 : 500,
                background: active ? r.bg : "transparent",
                color: active ? r.color : "#9CA3AF",
                border: `1px solid ${active ? r.border : "transparent"}`,
                transition: "all 0.3s",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              {active && (
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: r.color,
                    display: "inline-block",
                  }}
                />
              )}
              {r.label}
            </div>
          );
        })}
      </div>

      {/* ── Phase header ── */}
      <div key={roleIdx} style={{ animation: "gw-fade 0.35s ease" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#0A0A0A" }}>{role.phase}</div>
            <div style={{ fontSize: 9, color: role.color, fontWeight: 600, marginTop: 1 }}>
              {role.ref}
            </div>
          </div>
          {/* progress fraction */}
          <div style={{ fontSize: 9, color: "#9CA3AF" }}>
            <span style={{ fontWeight: 700, color: role.color }}>{Math.max(0, checked + 1)}</span>/
            {role.tasks.length} tasks
          </div>
        </div>

        {/* progress bar */}
        <div
          style={{
            marginTop: 7,
            height: 4,
            background: "#F3F4F6",
            borderRadius: 99,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${((checked + 1) / role.tasks.length) * 100}%`,
              background: role.color,
              borderRadius: 99,
              transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        </div>
      </div>

      {/* ── Checklist ── */}
      <div
        key={`tasks-${roleIdx}`}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          animation: "gw-fade 0.35s ease",
        }}
      >
        {role.tasks.map((task, i) => {
          const done = checked >= i;
          const current = checked === i - 1 || (checked === -1 && i === 0);
          return (
            <div
              key={task}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                padding: "7px 9px",
                borderRadius: 8,
                background: done ? role.bg : current ? "#FAFAFA" : "transparent",
                border: `1px solid ${done ? role.border : current ? "#E5E7EB" : "transparent"}`,
                transition: "background 0.3s, border-color 0.3s",
                animation: "gw-slide 0.3s ease",
              }}
            >
              {/* checkbox */}
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 4,
                  border: `1.5px solid ${done ? role.color : "#D1D5DB"}`,
                  background: done ? role.color : "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                {done && (
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    style={{ animation: "gw-check 0.2s ease" }}
                  >
                    <path
                      d="M3 8l3.5 3.5L13 5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              <span
                style={{
                  fontSize: 10,
                  fontWeight: done ? 500 : 400,
                  color: done ? "#374151" : "#9CA3AF",
                  textDecoration: done ? "none" : "none",
                  transition: "color 0.3s",
                  flex: 1,
                }}
              >
                {task}
              </span>

              {done && (
                <span style={{ fontSize: 8, color: role.color, fontWeight: 600, flexShrink: 0 }}>
                  ✓
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Compliance hint ── */}
      <div
        style={{
          padding: "8px 10px",
          background: role.bg,
          border: `1px solid ${role.border}`,
          borderRadius: 8,
          flexShrink: 0,
          minHeight: 42,
          display: "flex",
          alignItems: "flex-start",
          gap: 7,
        }}
      >
        {thinking ? (
          <>
            <span style={{ fontSize: 10, flexShrink: 0, marginTop: 1 }}>💡</span>
            <span
              style={{
                fontSize: 9,
                color: role.color,
                lineHeight: 1.5,
                animation: "gw-fade 0.4s ease",
              }}
            >
              {role.hint}
            </span>
          </>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: 9, color: role.color, opacity: 0.6 }}>Guidance loading</span>
            {[0, 1, 2].map((j) => (
              <div
                key={j}
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: role.color,
                  animation: `gw-dot 1.2s ease-in-out ${j * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
