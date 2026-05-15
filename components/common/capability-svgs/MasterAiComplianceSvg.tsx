"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

type ScreenId = 0 | 1;

const SCREEN_MS = 4500;
const FADE_MS = 300;

const BREADCRUMBS: [string, string, string][] = [
  ["Mia-Care Dev", "AI Diagnostic Tool", "Software System"],
  ["AI Diagnostic Tool", "Software System", "Arrhythmia Classifier"],
];

const SDLC_NAV = [
  { label: "Workflow Guide", icon: NAV_ICONS.workflowGuide },
  { label: "Requirements", icon: NAV_ICONS.requirements },
  { label: "Software System", icon: NAV_ICONS.softwareSystem, active: true },
  { label: "Verification", icon: NAV_ICONS.verification },
  { label: "Risk Analysis", icon: NAV_ICONS.riskAnalysis },
  { label: "Security", icon: NAV_ICONS.guardrails },
  { label: "Documentation", icon: NAV_ICONS.documentCatalog },
];

const CONFIG_NAV = [
  { label: "Product Metadata", icon: NAV_ICONS.pccpTracker },
  { label: "Regulatory Framework", icon: NAV_ICONS.guardrails },
  { label: "AI Agents", icon: NAV_ICONS.aiProjects },
  { label: "Users", icon: NAV_ICONS.roleView },
];

const TREE_ITEMS = [
  { depth: 0, label: "Cardio-Monitor Core", badge: null },
  { depth: 1, label: "Signal Processing Engine", badge: null },
  { depth: 2, label: "ML Anomaly Detection", badge: "AI Agent" },
  { depth: 1, label: "Data Storage Layer", badge: null },
  { depth: 1, label: "Frontend Application", badge: null },
];

// ── Screen 0: System Design ──────────────────────────────────────────────────
function SystemDesignScreen() {
  const [count, setCount] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clear = () => timers.current.forEach(clearTimeout);
    clear();
    timers.current = [];
    TREE_ITEMS.forEach((_, i) => {
      const t = setTimeout(() => setCount(i + 1), 250 + i * 380);
      timers.current.push(t);
    });
    return clear;
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 9,
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div>
        <div style={{ fontWeight: 700, fontSize: 14, color: "#0A0A0A", lineHeight: 1.2 }}>
          System Design
        </div>
        <div style={{ fontSize: 9, color: "#6B7280", marginTop: 2 }}>
          Software architecture and component hierarchy
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #E5E7EB" }}>
        {["Software Items", "System Context"].map((tab) => {
          const active = tab === "Software Items";
          return (
            <div
              key={tab}
              style={{
                padding: "4px 10px",
                fontSize: 9.5,
                fontWeight: active ? 600 : 400,
                color: active ? "#2563EB" : "#9CA3AF",
                borderBottom: active ? "2px solid #2563EB" : "2px solid transparent",
                marginBottom: -1,
                whiteSpace: "nowrap",
              }}
            >
              {tab}
            </div>
          );
        })}
      </div>

      {/* Stat card */}
      <div
        style={{
          border: "1px solid #E5E7EB",
          borderRadius: 8,
          padding: "7px 10px",
          background: "white",
          display: "inline-flex",
          alignItems: "baseline",
          gap: 7,
        }}
      >
        <div style={{ fontWeight: 800, fontSize: 22, color: "#0A0A0A", lineHeight: 1 }}>10</div>
        <div style={{ fontSize: 9, color: "#6B7280" }}>Total Components</div>
      </div>

      {/* Tree */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <div
          style={{
            fontSize: 8.5,
            fontWeight: 700,
            color: "#9CA3AF",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: 5,
          }}
        >
          Software Items (Design)
        </div>
        {TREE_ITEMS.map((item, i) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              paddingLeft: 8 + item.depth * 14,
              paddingTop: 4,
              paddingBottom: 4,
              paddingRight: 8,
              borderRadius: 5,
              opacity: count > i ? 1 : 0,
              transform: count > i ? "translateY(0)" : "translateY(4px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            {item.depth > 0 && <span style={{ color: "#D1D5DB", fontSize: 9 }}>›</span>}
            <span
              style={{ fontSize: 8.5, color: "#94A3B8", fontFamily: "ui-monospace, monospace" }}
            >
              {"</>"}
            </span>
            <span
              style={{
                fontSize: 10,
                fontWeight: item.depth === 0 ? 600 : 400,
                color: item.depth === 0 ? "#0A0A0A" : "#374151",
                flex: 1,
              }}
            >
              {item.label}
            </span>
            {item.badge && (
              <span
                style={{
                  background: "#EDE9FE",
                  color: "#7C3AED",
                  border: "1px solid #C4B5FD",
                  borderRadius: 20,
                  padding: "1px 6px",
                  fontSize: 8,
                  fontWeight: 600,
                  animation: "mai-pulse 2s ease-in-out infinite",
                }}
              >
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* AI Inventory callout */}
      <div
        style={{
          background: "#F5F3FF",
          border: "1px solid #DDD6FE",
          borderRadius: 8,
          padding: "7px 10px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexShrink: 0,
          opacity: count >= 5 ? 1 : 0,
          transform: count >= 5 ? "translateY(0)" : "translateY(4px)",
          transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
        }}
      >
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: 7,
            background: "#EDE9FE",
            border: "1px solid #C4B5FD",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="12" height="12" rx="2.5" stroke="#7C3AED" strokeWidth="1.3" />
            <path d="M8 5v6M5 8h6" stroke="#7C3AED" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 10, color: "#0A0A0A" }}>AI Inventory</div>
          <div style={{ fontSize: 8.5, color: "#9CA3AF" }}>Manage AI Models and Datasets</div>
        </div>
        <span
          style={{
            background: "#EDE9FE",
            color: "#7C3AED",
            borderRadius: 20,
            padding: "2px 7px",
            fontSize: 8,
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          Sub-section
        </span>
      </div>
    </div>
  );
}

// ── Screen 1: Arrhythmia Classifier detail ────────────────────────────────────
const FAITHFULNESS_CARDS = [
  {
    id: "stability",
    title: "Stability Test",
    desc: "Do explanations remain stable under minor input perturbations?",
    status: "passed" as const,
  },
  {
    id: "faithfulness",
    title: "Faithfulness Test",
    desc: "Do saliency maps/SHAP values reflect actual model decision boundaries?",
    status: "passed" as const,
  },
  {
    id: "consistency",
    title: "Consistency Test",
    desc: "Are explanations consistent across similar inputs?",
    status: "warning" as const,
  },
];

function ClassifierDetailScreen() {
  const [revealed, setRevealed] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clear = () => timers.current.forEach(clearTimeout);
    clear();
    timers.current = [];
    FAITHFULNESS_CARDS.forEach((_, i) => {
      const t = setTimeout(() => setRevealed(i + 1), 300 + i * 500);
      timers.current.push(t);
    });
    return clear;
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Breadcrumb */}
      <div
        style={{ fontSize: 8.5, color: "#9CA3AF", display: "flex", alignItems: "center", gap: 4 }}
      >
        <span>Software System</span>
        <span style={{ color: "#D1D5DB" }}>›</span>
        <span style={{ color: "#374151", fontWeight: 600 }}>Arrhythmia Classifier</span>
      </div>

      {/* Title row */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "#EEF2FF",
            border: "1px solid #C7D2FE",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="12" height="12" rx="2.5" stroke="#6366F1" strokeWidth="1.3" />
            <path
              d="M4 8h1.5l1-2 2 5 1-3H12"
              stroke="#6366F1"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 12.5, color: "#0A0A0A", lineHeight: 1.2 }}>
            Arrhythmia Classifier
          </div>
          <div style={{ fontSize: 8.5, color: "#6B7280", marginTop: 2 }}>
            Deep learning classifier for 12-lead ECG clinical dataset.
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 3, alignItems: "center" }}>
            <span style={{ fontSize: 8, color: "#9CA3AF", fontFamily: "ui-monospace, monospace" }}>
              Version 2.3.1
            </span>
            <span style={{ color: "#E5E7EB" }}>|</span>
            <span style={{ fontSize: 8, color: "#9CA3AF" }}>Owner: Marco Bianchi</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #E5E7EB" }}>
        {["Overview", "Datasets", "Performance"].map((tab) => {
          const active = tab === "Overview";
          return (
            <div
              key={tab}
              style={{
                padding: "4px 10px",
                fontSize: 9.5,
                fontWeight: active ? 600 : 400,
                color: active ? "#0A0A0A" : "#9CA3AF",
                borderBottom: active ? "2px solid #0A0A0A" : "2px solid transparent",
                marginBottom: -1,
              }}
            >
              {tab}
            </div>
          );
        })}
      </div>

      {/* Faithfulness section */}
      <div
        style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", gap: 7 }}
      >
        {/* Section header with Run Audit button */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {/* Eye icon */}
            <svg width="13" height="13" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M1 10s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7z"
                stroke="#6366F1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="10" r="2.5" stroke="#6366F1" strokeWidth="1.5" />
            </svg>
            <span style={{ fontWeight: 700, fontSize: 11, color: "#0A0A0A" }}>
              Faithfulness Tests
            </span>
          </div>
          {/* Run Audit button */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              background: "#4F46E5",
              borderRadius: 6,
              padding: "4px 9px",
              cursor: "default",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.4" />
              <path
                d="M6 8l2-2 2 2"
                stroke="white"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{ fontSize: 9, fontWeight: 600, color: "white", whiteSpace: "nowrap" }}>
              Run Audit
            </span>
          </div>
        </div>

        {/* 3 cards */}
        <div style={{ display: "flex", gap: 7 }}>
          {FAITHFULNESS_CARDS.map((card, i) => {
            const isWarning = card.status === "warning";
            const visible = revealed > i;
            return (
              <div
                key={card.id}
                style={{
                  flex: 1,
                  border: `1.5px solid ${isWarning ? "#FDE68A" : "#6EE7B7"}`,
                  borderRadius: 10,
                  padding: "10px 11px",
                  background: isWarning ? "#FFFBEB" : "#F0FDF4",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  minWidth: 0,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 0.35s ease, transform 0.35s ease",
                }}
              >
                {/* Icon + title */}
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  {isWarning ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      style={{ flexShrink: 0 }}
                    >
                      <path
                        d="M8 2L14.5 14H1.5L8 2z"
                        fill="#FEF3C7"
                        stroke="#D97706"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <path d="M8 6.5v3" stroke="#D97706" strokeWidth="1.3" strokeLinecap="round" />
                      <circle cx="8" cy="12" r="0.7" fill="#D97706" />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      style={{ flexShrink: 0 }}
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="6.5"
                        fill="#D1FAE5"
                        stroke="#059669"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M5 8l2.2 2.2 3.8-4"
                        stroke="#059669"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <span
                    style={{ fontSize: 10, fontWeight: 700, color: "#111827", lineHeight: 1.2 }}
                  >
                    {card.title}
                  </span>
                </div>
                {/* Description */}
                <div style={{ fontSize: 9, color: "#4B5563", lineHeight: 1.5 }}>{card.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Ref tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, alignItems: "center" }}>
          <span style={{ fontSize: 8.5, color: "#9CA3AF" }}>Ref:</span>
          {["EU AI Act Art. 13", "MDR Annex I"].map((ref) => (
            <span
              key={ref}
              style={{
                background: "#EFF6FF",
                color: "#2563EB",
                border: "1px solid #BFDBFE",
                borderRadius: 20,
                padding: "1px 6px",
                fontSize: 8,
                fontWeight: 600,
              }}
            >
              {ref}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
interface MasterAiComplianceSvgProps {
  lockedScreen?: ScreenId;
}

export function MasterAiComplianceSvg({ lockedScreen }: MasterAiComplianceSvgProps = {}) {
  const [screen, setScreen] = useState<ScreenId>(lockedScreen ?? 0);
  const [opacity, setOpacity] = useState(1);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (lockedScreen !== undefined) return;
    const clear = () => timers.current.forEach(clearTimeout);
    const later = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timers.current.push(t);
    };

    const cycle = () => {
      setOpacity(0);
      later(() => {
        setScreen((s) => ((s + 1) % 2) as ScreenId);
        setOpacity(1);
        later(cycle, SCREEN_MS);
      }, FADE_MS);
    };

    later(cycle, SCREEN_MS);
    return clear;
  }, [lockedScreen]);

  return (
    <PlatformShell
      breadcrumb={BREADCRUMBS[screen]}
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
          overflow: "hidden",
          padding: "14px 16px 12px",
          opacity,
          transition: `opacity ${FADE_MS}ms ease`,
        }}
      >
        <style>{`
          @keyframes mai-pulse {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.55; }
          }
          @keyframes mai-fade {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          @keyframes mai-pop {
            from { transform: scale(0.5); opacity: 0; }
            to   { transform: scale(1);   opacity: 1; }
          }
          @keyframes mai-spin {
            to { transform: rotate(360deg); }
          }
        `}</style>

        {screen === 0 && <SystemDesignScreen />}
        {screen === 1 && <ClassifierDetailScreen />}
      </div>
    </PlatformShell>
  );
}
