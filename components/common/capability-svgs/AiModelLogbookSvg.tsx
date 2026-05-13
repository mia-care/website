"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

const HISTORY = [
  { v: "v2.0.0", acc: "92.1%", date: "Nov 12, 2025" },
  { v: "v1.9.3", acc: "91.8%", date: "Sep 4, 2025" },
];

function SparkleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M10.5 2 L11.8 6.7 L16 8 L11.8 9.3 L10.5 14 L9.2 9.3 L5 8 L9.2 6.7 Z"
        fill="#A855F7"
      />
      <path
        d="M3.5 2 L4.2 3.8 L6 4.5 L4.2 5.2 L3.5 7 L2.8 5.2 L1 4.5 L2.8 3.8 Z"
        fill="#A855F7"
        fillOpacity="0.45"
      />
    </svg>
  );
}

function useCountTo(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!active) {
      setValue(0);
      if (ref.current) clearInterval(ref.current);
      return;
    }
    let v = 0;
    const step = target / (duration / 25);
    ref.current = setInterval(() => {
      v = Math.min(v + step, target);
      setValue(v);
      if (v >= target && ref.current) clearInterval(ref.current);
    }, 25);
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [active, target, duration]);

  return value;
}

type Phase = "idle" | "running" | "done" | "hold";

export function AiModelLogbookSvg() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [showHistory, setShowHistory] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const clear = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };

    const run = () => {
      setPhase("idle");
      setShowHistory(false);
      timerRef.current = setTimeout(() => {
        setPhase("running");
        timerRef.current = setTimeout(() => {
          setShowHistory(true);
          timerRef.current = setTimeout(() => {
            setPhase("done");
            timerRef.current = setTimeout(() => {
              setPhase("hold");
              timerRef.current = setTimeout(() => {
                setPhase("idle");
                timerRef.current = setTimeout(run, 600);
              }, 2800);
            }, 500);
          }, 700);
        }, 1400);
      }, 400);
    };

    run();
    return clear;
  }, []);

  const metricsActive = phase === "running" || phase === "done" || phase === "hold";
  const done = phase === "done" || phase === "hold";

  const samples = useCountTo(847293, metricsActive, 1200);
  const accuracy = useCountTo(94.2, metricsActive, 1200);
  const auc = useCountTo(97, metricsActive, 1100);

  const AI_COMPLIANCE_NAV = [
    { label: "AI Projects", icon: NAV_ICONS.aiProjects },
    { label: "Model Logbook", icon: NAV_ICONS.modelLogbook, active: true },
    { label: "PCCP Tracker", icon: NAV_ICONS.pccpTracker },
  ];

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "Model Logbook"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard }}
      sections={[{ title: "AI Compliance", items: AI_COMPLIANCE_NAV }]}
    >
      <div
        style={{
          background: "white",
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
        @keyframes mai-lb-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes mai-lb-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

        {/* Header */}
        <div
          style={{
            borderBottom: "1px solid #E5E5E5",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ fontWeight: 700, fontSize: 14 }}>Model Logbook</span>
            <SparkleIcon />
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {["EU AI Act", "GMLP"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "#CCFBF1",
                  color: "#0D9488",
                  border: "1px solid #99F6E4",
                  borderRadius: 20,
                  padding: "2px 8px",
                  fontSize: 9,
                  fontWeight: 600,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, overflow: "hidden", padding: "14px 20px" }}>
          {/* Project */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontWeight: 700, fontSize: 13 }}>AI Cardio-Monitor</div>
            <div style={{ fontSize: 10, color: "#737373", marginTop: 2 }}>
              Current version: v2.1.0
            </div>
          </div>

          {/* Latest version card */}
          <div
            style={{
              border: `1.5px solid ${metricsActive ? "#A855F7" : "#E5E5E5"}`,
              borderRadius: 8,
              padding: "10px 14px",
              marginBottom: 10,
              background: metricsActive ? "#FAF5FF" : "#FAFAFA",
              transition: "border-color 0.35s, background 0.35s",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 11 }}>v2.1.0</span>
              {done ? (
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: "#0D9488",
                    background: "#CCFBF1",
                    border: "1px solid #99F6E4",
                    borderRadius: 20,
                    padding: "1px 7px",
                  }}
                >
                  ✓ Validated
                </span>
              ) : metricsActive ? (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: 9,
                    fontWeight: 700,
                    color: "#A855F7",
                    animation: "mai-lb-pulse 1.3s ease-in-out infinite",
                  }}
                >
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    style={{ animation: "mai-lb-spin 0.9s linear infinite" }}
                  >
                    <path
                      d="M8 2a6 6 0 100 12A6 6 0 008 2z"
                      stroke="#A855F7"
                      strokeWidth="2"
                      strokeDasharray="16 8"
                    />
                  </svg>
                  Validating…
                </span>
              ) : null}
            </div>

            {/* Metrics grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              <div style={{ opacity: metricsActive ? 1 : 0, transition: "opacity 0.3s" }}>
                <div style={{ fontSize: 9, color: "#737373", marginBottom: 2 }}>
                  Training samples
                </div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#0D9488" }}>
                  {Math.round(samples).toLocaleString()}
                </div>
              </div>
              <div style={{ opacity: metricsActive ? 1 : 0, transition: "opacity 0.3s 0.1s" }}>
                <div style={{ fontSize: 9, color: "#737373", marginBottom: 2 }}>Accuracy</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#0D9488" }}>
                  {accuracy.toFixed(1)}%
                </div>
              </div>
              <div style={{ opacity: metricsActive ? 1 : 0, transition: "opacity 0.3s 0.2s" }}>
                <div style={{ fontSize: 9, color: "#737373", marginBottom: 2 }}>AUC-ROC</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#A855F7" }}>
                  {(auc / 100).toFixed(2)}
                </div>
              </div>
            </div>

            {done && (
              <div
                style={{
                  marginTop: 8,
                  fontSize: 10,
                  color: "#0D9488",
                  borderTop: "1px solid #CCFBF1",
                  paddingTop: 6,
                }}
              >
                ✓ Bias assessment passed · ✓ Data quality score 0.98
              </div>
            )}
          </div>

          {/* Version history */}
          {HISTORY.map((item, i) => (
            <div
              key={item.v}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "7px 14px",
                border: "1px solid #F0F0F0",
                borderRadius: 7,
                marginBottom: 5,
                background: "white",
                opacity: showHistory ? 1 : 0,
                transform: showHistory ? "translateY(0)" : "translateY(4px)",
                transition: `opacity 0.25s ease ${i * 110}ms, transform 0.25s ease ${i * 110}ms`,
              }}
            >
              <div>
                <span style={{ fontWeight: 600, fontSize: 11 }}>{item.v}</span>
                <span style={{ fontSize: 9, color: "#A3A3A3", marginLeft: 10 }}>{item.date}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 10, color: "#737373" }}>Acc {item.acc}</span>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: "#0D9488",
                    background: "#CCFBF1",
                    border: "1px solid #99F6E4",
                    borderRadius: 20,
                    padding: "1px 7px",
                  }}
                >
                  ✓ Validated
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PlatformShell>
  );
}
