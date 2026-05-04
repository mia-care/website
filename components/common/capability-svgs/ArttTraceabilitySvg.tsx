"use client";

import { useEffect, useRef, useState } from "react";

const SOFTWARE_TARGET = 47;
const RISK_TARGET = 94;
const TASKS_TOTAL = 18;
const LINK_DURATION_MS = 2800;
const HOLD_MS = 1800;
const RESET_DELAY_MS = 600;

function useCountUp(target: number, running: boolean, intervalMs = 40) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!running) {
      setValue(0);
      return;
    }
    let current = 0;
    const step = Math.max(1, Math.ceil(target / (LINK_DURATION_MS / intervalMs)));
    const id = setInterval(() => {
      current = Math.min(current + step, target);
      setValue(current);
      if (current >= target) clearInterval(id);
    }, intervalMs);
    return () => clearInterval(id);
  }, [running, target, intervalMs]);
  return value;
}

export function ArttTraceabilitySvg() {
  const [phase, setPhase] = useState<"idle" | "reveal" | "linking" | "hold">("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const linking = phase === "linking" || phase === "hold";
  const softwareCount = useCountUp(SOFTWARE_TARGET, linking);
  const riskPct = useCountUp(RISK_TARGET, linking, 35);
  const tasksDone = useCountUp(TASKS_TOTAL, linking, 60);

  useEffect(() => {
    const run = () => {
      setPhase("idle");
      timerRef.current = setTimeout(() => {
        setPhase("reveal");
        timerRef.current = setTimeout(() => {
          setPhase("linking");
          timerRef.current = setTimeout(() => {
            setPhase("hold");
            timerRef.current = setTimeout(() => {
              setPhase("idle");
              timerRef.current = setTimeout(run, RESET_DELAY_MS);
            }, HOLD_MS);
          }, LINK_DURATION_MS);
        }, 900);
      }, 300);
    };
    run();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const visible = phase !== "idle";

  const fade = (delay = 0): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(6px)",
    transition: `opacity 0.4s ease ${delay}ms, transform 0.4s ease ${delay}ms`,
  });

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
      }}
    >
      {/* ── Header ── */}
      <div style={{ padding: "14px 16px 0", ...fade(0) }}>
        <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 10 }}>Requirement details</div>
      </div>

      {/* ── Quality + Type ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4px 12px",
          padding: "0 16px 10px",
          ...fade(150),
        }}
      >
        <div>
          <div style={{ color: "#737373", fontSize: 10, marginBottom: 3 }}>Quality</div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="7" stroke="#2563EB" strokeWidth="1.2" />
              <path
                d="M5 8l2.5 2.5L11 5.5"
                stroke="#2563EB"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <span style={{ fontWeight: 600, fontSize: 12 }}>High</span>
          </div>
        </div>
        <div>
          <div style={{ color: "#737373", fontSize: 10, marginBottom: 3 }}>Type</div>
          <span
            style={{
              background: "#14B8A6",
              color: "white",
              borderRadius: 20,
              padding: "2px 9px",
              fontSize: 10,
              fontWeight: 700,
            }}
          >
            USR
          </span>
        </div>
        <div>
          <div style={{ color: "#737373", fontSize: 10, marginBottom: 3, marginTop: 4 }}>
            Status
          </div>
          <span
            style={{
              background: "#A7F3D0",
              color: "#059669",
              border: "1px solid #6EE7B7",
              borderRadius: 20,
              padding: "2px 9px",
              fontSize: 10,
              fontWeight: 700,
            }}
          >
            Closed
          </span>
        </div>
        <div>
          <div style={{ color: "#737373", fontSize: 10, marginBottom: 3, marginTop: 4 }}>
            Assignee
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              color: "#525252",
              fontSize: 11,
            }}
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="6" r="3" stroke="#525252" strokeWidth="1.2" />
              <path
                d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6"
                stroke="#525252"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            Alessandro Brondali
          </div>
        </div>
      </div>

      {/* ── Separator ── */}
      <div style={{ height: 1, background: "#E5E5E5", margin: "0 16px", ...fade(200) }} />

      {/* ── Timeline ── */}
      <div style={{ padding: "10px 16px", ...fade(250) }}>
        <div style={{ color: "#737373", fontSize: 10, fontWeight: 600, marginBottom: 6 }}>
          Timeline
        </div>
        <div
          style={{
            border: "1px solid #E5E5E5",
            borderRadius: 8,
            padding: "8px 10px",
            display: "flex",
            alignItems: "flex-start",
            gap: 8,
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            style={{ marginTop: 1, flexShrink: 0 }}
          >
            <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="#737373" strokeWidth="1.1" />
            <path
              d="M5 2v2M11 2v2M2 7h12"
              stroke="#737373"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </svg>
          <div>
            <div style={{ fontWeight: 600, fontSize: 11 }}>Latest Update</div>
            <div style={{ color: "#737373", fontSize: 10, marginTop: 1 }}>
              Nov 30, 2025 · 10:37 AM · Farozan Ansar
            </div>
          </div>
        </div>
      </div>

      {/* ── Separator ── */}
      <div style={{ height: 1, background: "#E5E5E5", margin: "0 16px", ...fade(300) }} />

      {/* ── Traceability ── */}
      <div style={{ padding: "10px 16px", flex: 1, ...fade(350) }}>
        <div
          style={{
            color: "#737373",
            fontSize: 10,
            fontWeight: 600,
            marginBottom: 8,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          Traceability
          {phase === "linking" && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                background: "#DCFCE7",
                color: "#059669",
                borderRadius: 20,
                padding: "1px 7px",
                fontSize: 9,
                fontWeight: 700,
                animation: "artt-pulse 1.2s ease-in-out infinite",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#059669",
                  display: "inline-block",
                }}
              />
              Linking…
            </span>
          )}
        </div>

        <style>{`
          @keyframes artt-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
          {/* Software items */}
          <div
            style={{
              background: "#EFF6FF",
              border: "1px solid #93C5FD",
              borderRadius: 8,
              padding: "8px 10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                color: "#2563EB",
                fontSize: 10,
                fontWeight: 600,
                marginBottom: 6,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M4 8h8M8 4l4 4-4 4"
                  stroke="#2563EB"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="3" cy="8" r="2" stroke="#2563EB" strokeWidth="1.1" />
              </svg>
              Software items
            </div>
            <div style={{ fontWeight: 800, fontSize: 22, color: "#2563EB", lineHeight: 1 }}>
              {softwareCount}
            </div>
            <div style={{ color: "#2563EB", fontSize: 9, marginTop: 3, opacity: 0.8 }}>
              Linked items
            </div>
          </div>

          {/* Risks */}
          <div
            style={{
              background: "#FEF2F2",
              border: "1px solid #FCA5A5",
              borderRadius: 8,
              padding: "8px 10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                color: "#EF4444",
                fontSize: 10,
                fontWeight: 600,
                marginBottom: 6,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 2L14 13H2L8 2Z"
                  stroke="#EF4444"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 6v4M8 11.5v.5"
                  stroke="#EF4444"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              Risks
            </div>
            <div style={{ fontWeight: 800, fontSize: 22, color: "#DC2626", lineHeight: 1 }}>
              {riskPct}%
            </div>
            <div style={{ color: "#EF4444", fontSize: 9, marginTop: 3, opacity: 0.8 }}>
              Risk coverage
            </div>
          </div>

          {/* Tasks */}
          <div
            style={{
              background: "#FAFAFA",
              border: "1px solid #D4D4D4",
              borderRadius: 8,
              padding: "8px 10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                color: "#737373",
                fontSize: 10,
                fontWeight: 600,
                marginBottom: 6,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6" stroke="#737373" strokeWidth="1.2" />
                <path
                  d="M5.5 8l2 2L11 6"
                  stroke="#737373"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              Tasks
            </div>
            <div style={{ fontWeight: 800, fontSize: 22, color: "#525252", lineHeight: 1 }}>
              {tasksDone}/{TASKS_TOTAL}
            </div>
            <div style={{ color: "#737373", fontSize: 9, marginTop: 3, opacity: 0.8 }}>
              Completed
            </div>
          </div>
        </div>
      </div>

      {/* ── Close button ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0 16px 12px",
          ...fade(400),
        }}
      >
        <button
          type="button"
          style={{
            border: "1px solid #D4D4D4",
            background: "rgba(255,255,255,0.1)",
            borderRadius: 8,
            padding: "5px 14px",
            fontSize: 11,
            color: "#525252",
            cursor: "default",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
