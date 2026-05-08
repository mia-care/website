"use client";

import { useEffect, useState } from "react";

const STEPS = [
  { label: "Requirements traceability", meta: "24 / 24 linked", type: "done" as const },
  { label: "Risk management", meta: "12 / 12 mitigated", type: "done" as const },
  { label: "Unit testing", meta: "98.7% pass rate", type: "done" as const },
  { label: "Integration testing", meta: "", type: "running" as const },
  { label: "DHF compilation", meta: "queued", type: "pending" as const },
  { label: "Technical File", meta: "queued", type: "pending" as const },
];

function DoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <circle cx="7.5" cy="7.5" r="7" fill="#16a34a" />
      <path
        d="M4.5 7.5l2 2 4-4"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PendingIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <circle cx="7.5" cy="7.5" r="6.5" stroke="#333" strokeWidth="1" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
      style={{ animation: "spin 1.2s linear infinite" }}
    >
      <circle cx="7.5" cy="7.5" r="6.5" stroke="#333" strokeWidth="1" />
      <path
        d="M7.5 1A6.5 6.5 0 0 1 14 7.5"
        stroke="#00f096"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeroCompliancePipeline() {
  const [revealed, setRevealed] = useState(0);
  const [testProgress, setTestProgress] = useState(0);
  const [confidence, setConfidence] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    STEPS.forEach((_, i) => {
      timers.push(setTimeout(() => setRevealed(i + 1), i * 380 + 400));
    });
    timers.push(setTimeout(() => setTestProgress(89), 1600));
    timers.push(setTimeout(() => setConfidence(72), 700));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      style={{
        fontFamily: "var(--font-inter, 'Inter', ui-sans-serif, system-ui, sans-serif)",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.07)",
        background: "#0A0A0A",
        boxShadow: "0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04) inset",
      }}
    >
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      {/* Browser chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "10px 14px",
          background: "#111",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {(["chrome-0", "chrome-1", "chrome-2"] as const).map((id) => (
          <span
            key={id}
            style={{ width: 10, height: 10, borderRadius: "50%", background: "#3a3a3a" }}
          />
        ))}
        <span
          style={{
            marginLeft: 10,
            padding: "2px 14px",
            borderRadius: 5,
            background: "#1A1A1A",
            color: "#4a4a4a",
            fontSize: 11,
            fontFamily: "ui-monospace, monospace",
          }}
        >
          app.p4samd.com/pipeline
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "20px 20px 22px" }}>
        {/* Project header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#E5E5E5", marginBottom: 5 }}>
              Cardio-Monitor v2.3.1
            </p>
            <div style={{ display: "flex", gap: 5 }}>
              {["Class IIb", "EU MDR"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 9.5,
                    fontWeight: 600,
                    padding: "1px 8px",
                    borderRadius: 99,
                    background: "rgba(0,240,150,0.08)",
                    color: "#00f096",
                    border: "1px solid rgba(0,240,150,0.18)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span
            style={{
              fontSize: 9,
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: 99,
              background: "#0f1f0f",
              color: "#4ade80",
              border: "1px solid rgba(74,222,128,0.18)",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#4ade80",
              }}
            />
            Live
          </span>
        </div>

        {/* Pipeline steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 20 }}>
          {STEPS.map((step, i) => {
            const visible = i < revealed;
            const isRunning = step.type === "running";
            const isDone = step.type === "done";

            return (
              <div
                key={step.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateX(-6px)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  {isDone ? <DoneIcon /> : isRunning ? <SpinnerIcon /> : <PendingIcon />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: 11.5,
                      fontWeight: 500,
                      color: isDone ? "#D4D4D4" : isRunning ? "#A3A3A3" : "#3f3f3f",
                      lineHeight: 1,
                      marginBottom: isRunning ? 5 : 0,
                    }}
                  >
                    {step.label}
                  </p>
                  {isRunning && (
                    <div
                      style={{
                        height: 3,
                        background: "#1e1e1e",
                        borderRadius: 99,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${testProgress}%`,
                          background: "linear-gradient(90deg, #00f096, #00c8d4)",
                          borderRadius: 99,
                          transition: "width 2.2s cubic-bezier(0.4,0,0.2,1)",
                        }}
                      />
                    </div>
                  )}
                </div>
                <span
                  style={{
                    fontSize: 10,
                    color: isDone ? "#555" : isRunning ? "#00f096" : "#2a2a2a",
                    flexShrink: 0,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {isRunning ? `${testProgress}%` : step.meta}
                </span>
              </div>
            );
          })}
        </div>

        {/* Compliance confidence */}
        <div
          style={{
            padding: "12px 14px",
            borderRadius: 10,
            background: "#111",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 10, color: "#555", fontWeight: 500 }}>
              Compliance confidence
            </span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#00f096" }}>
              {confidence}%
              <span style={{ fontSize: 9, color: "#444", marginLeft: 5 }}>→ 100% on release</span>
            </span>
          </div>
          <div style={{ height: 4, background: "#1a1a1a", borderRadius: 99, overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: `${confidence}%`,
                background: "linear-gradient(90deg, #00f096, #00c8d4)",
                borderRadius: 99,
                transition: "width 2.8s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
