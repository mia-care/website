"use client";

import { useEffect, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

// 20 bars — value 0-1, anomaly flag
const BAR_DATA = [
  { id: 0, v: 0.3, a: false },
  { id: 1, v: 0.48, a: false },
  { id: 2, v: 0.42, a: false },
  { id: 3, v: 0.55, a: false },
  { id: 4, v: 0.38, a: false },
  { id: 5, v: 0.62, a: false },
  { id: 6, v: 0.35, a: false },
  { id: 7, v: 0.82, a: true },
  { id: 8, v: 0.4, a: false },
  { id: 9, v: 0.52, a: false },
  { id: 10, v: 0.44, a: false },
  { id: 11, v: 0.58, a: false },
  { id: 12, v: 0.36, a: false },
  { id: 13, v: 0.49, a: false },
  { id: 14, v: 0.88, a: true },
  { id: 15, v: 0.42, a: false },
  { id: 16, v: 0.53, a: false },
  { id: 17, v: 0.46, a: false },
  { id: 18, v: 0.51, a: false },
  { id: 19, v: 0.39, a: false },
];

const ANOMALY_COUNT = BAR_DATA.filter((b) => b.a).length;
const NORMAL_COUNT = BAR_DATA.length - ANOMALY_COUNT;

function useCountUp(target: number, delayMs = 400) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const steps = 36;
      let i = 0;
      const id = setInterval(() => {
        i++;
        setV(Math.round((target * i) / steps));
        if (i >= steps) clearInterval(id);
      }, 1000 / steps);
      return () => clearInterval(id);
    }, delayMs);
    return () => clearTimeout(t);
  }, [target, delayMs]);
  return v;
}

function MetricBar({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 9.5, color: "#64748B" }}>{label}</span>
        <span style={{ fontSize: 9.5, fontWeight: 700, color }}>{value}%</span>
      </div>
      <div style={{ height: 4, background: "#F1F5F9", borderRadius: 99, overflow: "hidden" }}>
        <div
          style={{
            width: `${(value / max) * 100}%`,
            height: "100%",
            background: color,
            borderRadius: 99,
            transition: "width 0.08s linear",
          }}
        />
      </div>
    </div>
  );
}

export function MasterAiComplianceSvg() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  const explainScore = useCountUp(87, 450);
  const shapScore = useCountUp(94, 600);
  const fairnessScore = useCountUp(91, 550);

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "AI Compliance"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard }}
      sections={[
        {
          title: "AI Compliance",
          items: [
            { label: "AI Projects", icon: NAV_ICONS.aiProjects },
            { label: "Model Logbook", icon: NAV_ICONS.modelLogbook },
            { label: "PCCP Tracker", icon: NAV_ICONS.pccpTracker, active: true },
          ],
        },
      ]}
    >
      <div
        style={{
          background: "#F8FAFC",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: 10,
          overflow: "hidden",
        }}
      >
        <style>{`
          @keyframes mai-anomaly {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.55; }
          }
          @keyframes mai-live {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.25; }
          }
          @media (max-width: 480px) {
            .mai-bottom { grid-template-columns: 1fr !important; }
          }
        `}</style>

        {/* ── ML Anomaly Detection ── */}
        <div
          style={{
            background: "white",
            borderRadius: 10,
            border: "1px solid #E2E8F0",
            padding: "10px 12px",
            display: "flex",
            flexDirection: "column",
            gap: 7,
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#0F172B" }}>
              ML Anomaly Detection
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22C55E",
                  display: "inline-block",
                  animation: "mai-live 1.4s ease-in-out infinite",
                }}
              />
              <span style={{ fontSize: 9, color: "#64748B", fontWeight: 500 }}>Live</span>
            </div>
          </div>

          {/* Bar chart */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 3,
              height: 60,
            }}
          >
            {BAR_DATA.map((bar) => (
              <div
                key={bar.id}
                style={{
                  flex: 1,
                  height: mounted ? `${bar.v * 100}%` : "5%",
                  borderRadius: "2px 2px 0 0",
                  background: bar.a ? "#EF4444" : "#0D9488",
                  transition: `height ${0.55 + bar.id * 0.018}s cubic-bezier(0.4,0,0.2,1)`,
                  animation: bar.a && mounted ? "mai-anomaly 1.8s ease-in-out infinite" : "none",
                  minHeight: 3,
                }}
              />
            ))}
          </div>

          {/* Stat pills */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                background: "#CCFBF1",
                color: "#0D9488",
                borderRadius: 20,
                padding: "2px 8px",
                fontSize: 9,
                fontWeight: 700,
              }}
            >
              {NORMAL_COUNT} Normal
            </span>
            <span
              style={{
                background: "#FEE2E2",
                color: "#EF4444",
                borderRadius: 20,
                padding: "2px 8px",
                fontSize: 9,
                fontWeight: 700,
              }}
            >
              {ANOMALY_COUNT} Anomalies
            </span>
            <span style={{ marginLeft: "auto", fontSize: 9, color: "#94A3B8" }}>2 min ago</span>
          </div>
        </div>

        {/* ── Bottom: Transparency & Robustness ── */}
        <div
          className="mai-bottom"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            flex: 1,
            minHeight: 0,
          }}
        >
          {/* Transparency & xAI */}
          <div
            style={{
              background: "white",
              borderRadius: 10,
              border: "1px solid #E2E8F0",
              padding: "10px 12px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              overflow: "hidden",
            }}
          >
            <span style={{ fontSize: 10, fontWeight: 700, color: "#0F172B" }}>
              Transparency &amp; xAI
            </span>

            <MetricBar label="Explainability" value={explainScore} max={100} color="#6366F1" />
            <MetricBar label="SHAP Coverage" value={shapScore} max={100} color="#8B5CF6" />

            <div style={{ display: "flex", gap: 5, marginTop: "auto", flexWrap: "wrap" }}>
              {["High", "GDPR"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#EEF2FF",
                    color: "#6366F1",
                    border: "1px solid #C7D2FE",
                    borderRadius: 20,
                    padding: "2px 7px",
                    fontSize: 9,
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Robustness Auditing */}
          <div
            style={{
              background: "white",
              borderRadius: 10,
              border: "1px solid #E2E8F0",
              padding: "10px 12px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              overflow: "hidden",
            }}
          >
            <span style={{ fontSize: 10, fontWeight: 700, color: "#0F172B" }}>
              Robustness Auditing
            </span>

            {/* Model Drift — fixed low value */}
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 9.5, color: "#64748B" }}>Model Drift</span>
                <span style={{ fontSize: 9.5, fontWeight: 700, color: "#22C55E" }}>2.3%</span>
              </div>
              <div
                style={{ height: 4, background: "#F1F5F9", borderRadius: 99, overflow: "hidden" }}
              >
                <div
                  style={{
                    width: mounted ? "23%" : "0%",
                    height: "100%",
                    background: "#22C55E",
                    borderRadius: 99,
                    transition: "width 1s cubic-bezier(0.4,0,0.2,1) 0.4s",
                  }}
                />
              </div>
            </div>

            <MetricBar label="Fairness Score" value={fairnessScore} max={100} color="#0D9488" />

            {/* Accuracy delta */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 9.5, color: "#64748B" }}>Accuracy Delta</span>
              <span
                style={{
                  background: "#F0FDF4",
                  color: "#16A34A",
                  border: "1px solid #86EFAC",
                  borderRadius: 20,
                  padding: "2px 7px",
                  fontSize: 9,
                  fontWeight: 700,
                }}
              >
                −0.8%
              </span>
            </div>

            <div style={{ display: "flex", gap: 5, marginTop: "auto", flexWrap: "wrap" }}>
              {["EU AI Act", "Passing"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#CCFBF1",
                    color: "#0D9488",
                    border: "1px solid #99F6E4",
                    borderRadius: 20,
                    padding: "2px 7px",
                    fontSize: 9,
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PlatformShell>
  );
}
