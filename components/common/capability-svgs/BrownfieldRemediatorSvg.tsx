"use client";

import { useEffect, useRef, useState } from "react";

const STEPPER_TABS = ["Overview", "Use case", "Target", "Technical Asset"];

const STEPS = [
  {
    icon: "□",
    title: "Use case definition",
    desc: "Identifying the problem and selecting classic use cases",
  },
  {
    icon: "◎",
    title: "Target Definition and Regulations",
    desc: "Indicate intended use, market region, regulatory frameworks, and classification",
  },
  {
    icon: "⊞",
    title: "Technical Assets",
    desc: "Upload Database, repository, source code, test results, architecture",
  },
  {
    icon: "≡",
    title: "Documentation",
    desc: "Upload PDF, link, wiki, technical and regulatory documentation",
  },
  {
    icon: "~",
    title: "Summary and analysis",
    desc: "Confirmation of the entered data and start of AI-powered analysis",
  },
];

const REVEAL_MS = 600;
const BETWEEN_MS = 750;
const HOLD_MS = 2200;
const RESET_MS = 500;

function StepIcon({
  icon,
  done,
  active,
  analysing,
}: {
  icon: string;
  done: boolean;
  active: boolean;
  analysing: boolean;
}) {
  const bg = done || active ? "#2563EB" : "#E5E7EB";
  const color = done || active ? "white" : "#9CA3AF";

  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "background 0.3s",
        position: "relative",
      }}
    >
      {analysing ? (
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          style={{ animation: "bf-spin 0.85s linear infinite" }}
        >
          <path
            d="M8 2a6 6 0 100 12A6 6 0 008 2z"
            stroke="white"
            strokeWidth="1.8"
            strokeDasharray="16 8"
          />
        </svg>
      ) : done ? (
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M3.5 8l3.5 3.5L13 5"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <span
          style={{ fontSize: 11, color, fontWeight: 700, fontFamily: "ui-monospace,monospace" }}
        >
          {icon}
        </span>
      )}
    </div>
  );
}

export function BrownfieldRemediatorSvg() {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false, false, false]);
  const [doneSteps, setDoneSteps] = useState<boolean[]>([false, false, false, false, false]);
  const [activeStep, setActiveStep] = useState(-1);
  const [activeTab, setActiveTab] = useState(0);
  const [analysing, setAnalysing] = useState(false);
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
      setVisibleSteps([false, false, false, false, false]);
      setDoneSteps([false, false, false, false, false]);
      setActiveStep(-1);
      setActiveTab(0);
      setAnalysing(false);

      STEPS.forEach((_, i) => {
        const revealAt = REVEAL_MS + i * BETWEEN_MS;

        // reveal step — stepper stays on Overview (tab 0) throughout
        later(() => {
          setVisibleSteps((v) => {
            const n = [...v];
            n[i] = true;
            return n;
          });
          setActiveStep(i);
        }, revealAt);

        // mark previous step as done
        if (i > 0) {
          later(() => {
            setDoneSteps((d) => {
              const n = [...d];
              n[i - 1] = true;
              return n;
            });
          }, revealAt);
        }
      });

      const allDoneAt = REVEAL_MS + STEPS.length * BETWEEN_MS;

      // mark last step done + start analysing
      later(() => {
        setDoneSteps([true, true, true, true, false]);
        setAnalysing(true);
        setActiveStep(4);
      }, allDoneAt);

      // finish analysis → stepper advances to next tab
      later(() => {
        setDoneSteps([true, true, true, true, true]);
        setAnalysing(false);
        setActiveStep(-1);
        setActiveTab(1);
      }, allDoneAt + 1400);

      // reset
      later(run, allDoneAt + 1400 + HOLD_MS + RESET_MS);
    };

    run();
    return clear;
  }, []);

  return (
    <div
      style={{
        background: "#F3F4F6",
        borderRadius: 12,
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        fontSize: 12,
        color: "#0A0A0A",
      }}
    >
      <style>{`
        @keyframes bf-slide {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bf-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* ── Stepper ── */}
      <div
        style={{
          background: "white",
          borderBottom: "1px solid #E5E7EB",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 4,
          flexShrink: 0,
        }}
      >
        {STEPPER_TABS.map((tab, i) => {
          const isCurrent = activeTab === i;
          const isPast = activeTab > i;
          return (
            <div key={tab} style={{ display: "flex", alignItems: "center", gap: 4, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: isCurrent ? "#2563EB" : isPast ? "#DCFCE7" : "#E5E7EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background 0.3s",
                  }}
                >
                  {isPast ? (
                    <svg width="9" height="9" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3 8l4 4 6-7"
                        stroke="#059669"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        color: isCurrent ? "white" : "#9CA3AF",
                      }}
                    >
                      {i + 1}
                    </span>
                  )}
                </div>
                <span
                  style={{
                    fontSize: 9.5,
                    fontWeight: isCurrent ? 700 : 500,
                    color: isCurrent ? "#2563EB" : isPast ? "#059669" : "#9CA3AF",
                    whiteSpace: "nowrap",
                    transition: "color 0.3s",
                  }}
                >
                  {tab}
                </span>
              </div>
              {i < STEPPER_TABS.length - 1 && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M5 3l6 5-6 5"
                    stroke={activeTab > i ? "#059669" : "#D1D5DB"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transition: "stroke 0.3s" }}
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Card ── */}
      <div
        style={{
          flex: 1,
          padding: "14px 14px 10px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          minHeight: 0,
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: 10,
            border: "1px solid #E5E7EB",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            padding: "14px 16px 12px",
            gap: 8,
          }}
        >
          {/* Title */}
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: "#0A0A0A", marginBottom: 3 }}>
              Import Project
            </div>
            <div style={{ fontSize: 10, color: "#6B7280" }}>
              Ready to dive in? Here&apos;s how to bring your project to life
            </div>
          </div>

          {/* Steps list */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              overflowY: "hidden",
            }}
          >
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: "8px 10px",
                  background: activeStep === i ? "#EFF6FF" : doneSteps[i] ? "#F0FDF4" : "#FAFAFA",
                  borderLeft: `3px solid ${activeStep === i ? "#2563EB" : doneSteps[i] ? "#22C55E" : "#E5E7EB"}`,
                  borderRadius: "0 7px 7px 0",
                  opacity: visibleSteps[i] ? 1 : 0,
                  transform: visibleSteps[i] ? "translateY(0)" : "translateY(6px)",
                  transition:
                    "opacity 0.3s ease, transform 0.3s ease, background 0.3s, border-color 0.3s",
                }}
              >
                <StepIcon
                  icon={step.icon}
                  done={doneSteps[i]}
                  active={activeStep === i}
                  analysing={analysing && i === 4}
                />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 11, color: "#0A0A0A", marginBottom: 2 }}>
                    {step.title}
                  </div>
                  <div
                    style={{
                      fontSize: 9.5,
                      color: "#6B7280",
                      lineHeight: 1.45,
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{ flexShrink: 0, paddingTop: 4, borderTop: "1px solid #F3F4F6" }}>
            <div
              style={{
                display: "inline-block",
                border: "1px solid #E5E7EB",
                borderRadius: 7,
                padding: "4px 12px",
                fontSize: 10,
                color: "#6B7280",
                background: "white",
              }}
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
