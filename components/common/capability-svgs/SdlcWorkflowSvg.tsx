"use client";

import { useEffect, useRef, useState } from "react";
import { D, NAV_ICONS, PlatformShell } from "./PlatformShell";

const STATS = [
  { label: "Requirements", value: 68, sub: "42 Verified · 26 In Progress", color: D.blue },
  { label: "Test Cases", value: 202, sub: "77% Pass Rate", color: D.green },
  { label: "Risks Identified", value: 28, sub: "23 Mitigated · 5 Open", color: D.amber },
  { label: "Software Items", value: 34, sub: "12 SOUP · 22 Custom", color: D.purple },
];

function useCountUp(target: number, active: boolean, duration = 900) {
  const [val, setVal] = useState(0);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (!active) {
      setVal(0);
      return;
    }
    let current = 0;
    const steps = 30;
    const increment = target / steps;
    const interval = duration / steps;
    ref.current = setInterval(() => {
      current += increment;
      if (current >= target) {
        setVal(target);
        if (ref.current) clearInterval(ref.current);
      } else setVal(Math.round(current));
    }, interval);
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [active, target, duration]);
  return val;
}

function StatCard({ stat, active }: { stat: (typeof STATS)[0]; active: boolean }) {
  const val = useCountUp(stat.value, active);
  return (
    <div style={{ padding: "10px 14px", borderRight: `1px solid ${D.border}`, flex: 1 }}>
      <div style={{ fontSize: 9, color: D.faint, marginBottom: 4 }}>{stat.label}</div>
      <div style={{ fontSize: 20, fontWeight: 800, color: stat.color, marginBottom: 2 }}>{val}</div>
      <div style={{ fontSize: 9, color: D.muted }}>{stat.sub}</div>
    </div>
  );
}

export function SdlcWorkflowSvg() {
  const [phase, setPhase] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const clearAll = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    const run = () => {
      setPhase(0);
      timerRef.current = setTimeout(() => setPhase(1), 300);
      timerRef.current = setTimeout(() => setPhase(2), 700);
      timerRef.current = setTimeout(() => setPhase(3), 1000);
      timerRef.current = setTimeout(() => {
        clearAll();
        timerRef.current = setTimeout(run, 600);
      }, 5500);
    };
    run();
    return clearAll;
  }, []);

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "Dashboard"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard, active: true }}
      sections={[
        {
          title: "SDLC",
          items: [
            { label: "Workflow Guide", icon: NAV_ICONS.workflowGuide },
            { label: "Requirements", icon: NAV_ICONS.requirements },
            { label: "Software System", icon: NAV_ICONS.softwareSystem },
            { label: "Verification", icon: NAV_ICONS.verification },
            { label: "Risk Analysis", icon: NAV_ICONS.riskAnalysis },
          ],
        },
        {
          title: "Configuration",
          items: [
            { label: "Tool Integrations", icon: NAV_ICONS.toolIntegrations },
            { label: "Audit Log", icon: NAV_ICONS.auditLog },
          ],
        },
      ]}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background: D.bg,
        }}
      >
        {/* Purple gradient banner */}
        <div
          style={{
            margin: "12px 18px 0",
            borderRadius: 10,
            padding: "14px 18px",
            background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #A855F7 100%)",
            color: "white",
            flexShrink: 0,
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 15, fontWeight: 800 }}>App Cardio-Monitor</span>
                <span
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: 4,
                    padding: "1px 7px",
                    fontSize: 9,
                    fontWeight: 600,
                  }}
                >
                  Development
                </span>
              </div>
              <div style={{ fontSize: 10, opacity: 0.8, marginBottom: 8 }}>
                Real-time cardiac monitoring application
              </div>
              <div style={{ display: "flex", gap: 12, fontSize: 9, opacity: 0.85 }}>
                <span>📋 Class IIb</span>
                <span>🇪🇺 EU MDR</span>
                <span>🏷 v2.1</span>
                <span>⏳ 78% Complete</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <span
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: 6,
                  padding: "4px 10px",
                  fontSize: 10,
                  cursor: "default",
                }}
              >
                Edit
              </span>
              <span
                style={{
                  background: "white",
                  color: D.purple,
                  borderRadius: 6,
                  padding: "4px 10px",
                  fontSize: 10,
                  fontWeight: 700,
                  cursor: "default",
                }}
              >
                New Release
              </span>
            </div>
          </div>
        </div>

        {/* Tasks attention */}
        <div
          style={{
            margin: "8px 18px 0",
            background: D.amberFaint,
            border: `1px solid ${D.amber}30`,
            borderRadius: 8,
            padding: "8px 14px",
            flexShrink: 0,
            opacity: phase >= 2 ? 1 : 0,
            transition: "opacity 0.35s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
            <span style={{ fontSize: 11 }}>⚠</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: D.body }}>
              3 Tasks Require Attention
            </span>
            <span
              style={{
                background: D.amberFaint,
                border: `1px solid ${D.amber}60`,
                color: D.amberText,
                borderRadius: 4,
                padding: "1px 7px",
                fontSize: 9,
                fontWeight: 700,
              }}
            >
              Priority
            </span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                flex: 1,
                background: D.surface,
                borderRadius: 6,
                padding: "7px 10px",
                border: `1px solid ${D.border}`,
              }}
            >
              <div style={{ display: "flex", gap: 5, marginBottom: 4 }}>
                <span
                  style={{
                    background: D.redFaint,
                    color: D.red,
                    border: `1px solid ${D.red}30`,
                    borderRadius: 3,
                    padding: "1px 5px",
                    fontSize: 8,
                    fontWeight: 700,
                  }}
                >
                  CRITICAL
                </span>
                <span
                  style={{
                    background: "#FFF1F2",
                    color: "#BE185D",
                    border: "1px solid #FBCFE830",
                    borderRadius: 3,
                    padding: "1px 5px",
                    fontSize: 8,
                    fontWeight: 700,
                  }}
                >
                  BLOCKER
                </span>
              </div>
              <div style={{ fontSize: 10, color: D.body }}>Document each module in detail</div>
              <div style={{ fontSize: 9, color: D.muted, marginTop: 2 }}>⏱ 7–10 days</div>
            </div>
            <div
              style={{
                flex: 1,
                background: D.surface,
                borderRadius: 6,
                padding: "7px 10px",
                border: `1px solid ${D.border}`,
              }}
            >
              <div style={{ marginBottom: 4 }}>
                <span
                  style={{
                    background: D.amberFaint,
                    color: D.amberText,
                    border: `1px solid ${D.amber}30`,
                    borderRadius: 3,
                    padding: "1px 5px",
                    fontSize: 8,
                    fontWeight: 700,
                  }}
                >
                  HIGH
                </span>
              </div>
              <div style={{ fontSize: 10, color: D.body }}>Document SOUP items</div>
              <div style={{ fontSize: 9, color: D.muted, marginTop: 2 }}>⏱ 2–3 days</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            margin: "8px 18px 0",
            background: D.surface,
            borderRadius: 8,
            border: `1px solid ${D.border}`,
            display: "flex",
            flexShrink: 0,
            overflow: "hidden",
            opacity: phase >= 3 ? 1 : 0,
            transition: "opacity 0.35s ease",
          }}
        >
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} active={phase >= 3} />
          ))}
        </div>
      </div>
    </PlatformShell>
  );
}
