"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

type ScreenId = 0 | 1 | 2;

const SCREEN_MS = 4500;
const FADE_MS = 300;

const BREADCRUMBS: [string, string, string][] = [
  ["Mia-Care Dev", "AI Diagnostic Tool", "Software System"],
  ["AI Diagnostic Tool", "Software System", "AI Inventory"],
  ["Software System", "AI Inventory", "Arrhythmia Classifier v2"],
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

const AI_MODELS = [
  {
    id: "arr",
    name: "Arrhythmia Classifier v2",
    version: "v2.3.1",
    desc: "Deep learning classifier for 12-lead ECG arrhythmia detection",
    thirdParty: false,
    color: "#6366F1",
    bg: "#EEF2FF",
  },
  {
    id: "ecg",
    name: "ECG Signal Denoiser",
    version: "v1.1.0",
    desc: "Signal denoising model based on WaveNet architecture",
    thirdParty: true,
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    id: "crd",
    name: "CardioData Clinical ECG v3",
    version: "v3.0.2",
    desc: "Proprietary clinical ECG data collected from 12 participants",
    thirdParty: false,
    color: "#0891B2",
    bg: "#E0F2FE",
  },
  {
    id: "mit",
    name: "MIT-BiH Gold Standard",
    version: "v1.0.0",
    desc: "MIT-BiH Arrhythmia Database — gold standard public dataset",
    thirdParty: false,
    color: "#059669",
    bg: "#F0FDF4",
  },
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

// ── Screen 1: AI Inventory ────────────────────────────────────────────────────
function AiInventoryScreen() {
  const [count, setCount] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clear = () => timers.current.forEach(clearTimeout);
    clear();
    timers.current = [];
    AI_MODELS.forEach((_, i) => {
      const t = setTimeout(() => setCount(i + 1), 300 + i * 420);
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
      <div
        style={{ fontSize: 8.5, color: "#9CA3AF", display: "flex", alignItems: "center", gap: 4 }}
      >
        <span>System Design</span>
        <span style={{ color: "#D1D5DB" }}>›</span>
        <span style={{ color: "#374151", fontWeight: 600 }}>AI Inventory</span>
      </div>

      <div>
        <div style={{ fontWeight: 700, fontSize: 14, color: "#0A0A0A", lineHeight: 1.2 }}>
          AI Inventory
        </div>
        <div style={{ fontSize: 9, color: "#6B7280", marginTop: 2 }}>
          Models and Datasets with dedicated lifecycle
        </div>
      </div>

      <div style={{ display: "flex", gap: 7, alignItems: "center" }}>
        <div
          style={{
            border: "1px solid #E5E7EB",
            borderRadius: 8,
            padding: "5px 10px",
            background: "white",
            display: "flex",
            alignItems: "baseline",
            gap: 5,
            flexShrink: 0,
          }}
        >
          <span style={{ fontWeight: 800, fontSize: 18, color: "#0A0A0A", lineHeight: 1 }}>4</span>
          <span style={{ fontSize: 8.5, color: "#6B7280" }}>Total AI Items</span>
        </div>
        <div
          style={{
            flex: 1,
            border: "1px solid #E5E7EB",
            borderRadius: 7,
            padding: "5px 9px",
            display: "flex",
            alignItems: "center",
            gap: 5,
            background: "white",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="5" stroke="#9CA3AF" strokeWidth="1.3" />
            <path d="M11 11l3 3" stroke="#9CA3AF" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 9, color: "#9CA3AF" }}>Search AI Items…</span>
        </div>
      </div>

      <div
        style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", gap: 5 }}
      >
        <div style={{ fontSize: 9.5, fontWeight: 600, color: "#0A0A0A" }}>All AI Items (4)</div>
        {AI_MODELS.map((model, i) => (
          <div
            key={model.id}
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: 7,
              padding: "6px 9px",
              background: "white",
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
              opacity: count > i ? 1 : 0,
              transform: count > i ? "translateY(0)" : "translateY(4px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                background: model.bg,
                border: `1px solid ${model.color}40`,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect
                  x="3"
                  y="3"
                  width="10"
                  height="10"
                  rx="2"
                  stroke={model.color}
                  strokeWidth="1.3"
                />
                <path
                  d="M6 8h4M8 6v4"
                  stroke={model.color}
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, flexWrap: "wrap" }}>
                <span style={{ fontSize: 9.5, fontWeight: 600, color: "#0A0A0A" }}>
                  {model.name}
                </span>
                <span
                  style={{ fontSize: 8, color: "#6B7280", fontFamily: "ui-monospace, monospace" }}
                >
                  {model.version}
                </span>
                {model.thirdParty && (
                  <span
                    style={{
                      background: "#FFFBEB",
                      color: "#D97706",
                      border: "1px solid #FDE68A",
                      borderRadius: 20,
                      padding: "1px 5px",
                      fontSize: 7.5,
                      fontWeight: 600,
                    }}
                  >
                    3rd party
                  </span>
                )}
              </div>
              <div
                style={{
                  fontSize: 8.5,
                  color: "#9CA3AF",
                  marginTop: 2,
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {model.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Screen 2: Arrhythmia Classifier v2 detail ────────────────────────────────
function ClassifierDetailScreen() {
  const [testState, setTestState] = useState<"idle" | "running" | "passed">("idle");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clear = () => timers.current.forEach(clearTimeout);
    clear();
    timers.current = [];
    const t1 = setTimeout(() => setTestState("running"), 500);
    const t2 = setTimeout(() => setTestState("passed"), 1700);
    timers.current = [t1, t2];
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
      <div
        style={{ fontSize: 8.5, color: "#9CA3AF", display: "flex", alignItems: "center", gap: 4 }}
      >
        <span>Software System</span>
        <span style={{ color: "#D1D5DB" }}>›</span>
        <span style={{ color: "#374151", fontWeight: 600 }}>Arrhythmia Classifier v2</span>
      </div>

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
            Arrhythmia Classifier v2
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

      <div
        style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", gap: 7 }}
      >
        <div>
          <div style={{ fontWeight: 700, fontSize: 11, color: "#0A0A0A" }}>
            Transparency &amp; xAI Robustness Auditing
          </div>
          <div style={{ fontSize: 8.5, color: "#9CA3AF", marginTop: 2 }}>
            Assessment of explainability services and transparency methods
          </div>
        </div>

        <div style={{ border: "1px solid #E5E7EB", borderRadius: 8, overflow: "hidden" }}>
          <div
            style={{
              background: "#F9FAFB",
              padding: "5px 10px",
              borderBottom: "1px solid #E5E7EB",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6" stroke="#6366F1" strokeWidth="1.3" />
              <path
                d="M5 8l2.5 2.5L11 6"
                stroke="#6366F1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{ fontWeight: 600, fontSize: 10, color: "#0A0A0A" }}>
              Faithfulness Tests
            </span>
          </div>

          <div
            style={{
              padding: "8px 10px",
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
              background: testState === "passed" ? "#F0FDF4" : "white",
              transition: "background 0.5s ease",
            }}
          >
            {testState === "running" ? (
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  border: "2px solid #FEF3C7",
                  borderTop: "2px solid #D97706",
                  flexShrink: 0,
                  animation: "mai-spin 0.7s linear infinite",
                }}
              />
            ) : testState === "passed" ? (
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "#059669",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  animation: "mai-pop 0.3s ease",
                }}
              >
                <svg width="9" height="9" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8l3.5 3.5L13 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : (
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  border: "1.5px solid #D1D5DB",
                  flexShrink: 0,
                }}
              />
            )}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#0A0A0A" }}>Stability Test</div>
              <div style={{ fontSize: 8.5, color: "#9CA3AF", marginTop: 2 }}>
                Do explanations remain stable under minor input perturbations?
              </div>
            </div>
            {testState === "passed" && (
              <span
                style={{
                  background: "#DCFCE7",
                  color: "#059669",
                  border: "1px solid #BBF7D0",
                  borderRadius: 20,
                  padding: "1px 6px",
                  fontSize: 8,
                  fontWeight: 600,
                  flexShrink: 0,
                  animation: "mai-fade 0.3s ease",
                }}
              >
                Passed
              </span>
            )}
          </div>
        </div>

        <div
          style={{
            background: "#FFFBEB",
            border: "1px solid #FDE68A",
            borderRadius: 7,
            padding: "7px 9px",
            fontSize: 8.5,
            color: "#374151",
            lineHeight: 1.5,
          }}
        >
          <span style={{ fontWeight: 700 }}>Note:</span> Explainable AI (xAI) is context-dependent,
          guiding whether chosen explainability methods are fit-for-purpose.
        </div>

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
          <span style={{ fontSize: 8.5, color: "#9CA3AF", marginLeft: 2 }}>
            Powered by: <span style={{ color: "#374151", fontWeight: 600 }}>Quantus</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export function MasterAiComplianceSvg() {
  const [screen, setScreen] = useState<ScreenId>(0);
  const [opacity, setOpacity] = useState(1);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clear = () => timers.current.forEach(clearTimeout);
    const later = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timers.current.push(t);
    };

    const cycle = () => {
      setOpacity(0);
      later(() => {
        setScreen((s) => ((s + 1) % 3) as ScreenId);
        setOpacity(1);
        later(cycle, SCREEN_MS);
      }, FADE_MS);
    };

    later(cycle, SCREEN_MS);
    return clear;
  }, []);

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
        {screen === 1 && <AiInventoryScreen />}
        {screen === 2 && <ClassifierDetailScreen />}
      </div>
    </PlatformShell>
  );
}
