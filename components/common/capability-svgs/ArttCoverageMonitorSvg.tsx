"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

const METRICS = [
  { label: "Requirements → Tests", pct: 94, color: "#2563EB", bg: "#EFF6FF" },
  { label: "Requirements → Risk Controls", pct: 100, color: "#059669", bg: "#DCFCE7" },
  { label: "Requirements → Implementation", pct: 87, color: "#7C3AED", bg: "#F5F3FF" },
];

const ALERTS = [
  { type: "warn" as const, text: "REQ-003, REQ-007, REQ-012 missing test coverage" },
  { type: "ok" as const, text: "Audit package ready — 47 of 50 items traced" },
];

const BAR_DURATION_MS = 1400;
const HOLD_MS = 2800;

export function ArttCoverageMonitorSvg() {
  const [running, setRunning] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const run = () => {
      setRunning(false);
      setShowAlerts(false);
      timerRef.current = setTimeout(() => {
        setRunning(true);
        timerRef.current = setTimeout(() => {
          setShowAlerts(true);
          timerRef.current = setTimeout(() => {
            setRunning(false);
            setShowAlerts(false);
            timerRef.current = setTimeout(run, 600);
          }, HOLD_MS);
        }, BAR_DURATION_MS + 400);
      }, 500);
    };
    run();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "Coverage Monitor"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard }}
      sections={[
        {
          title: "ARTT",
          items: [
            { label: "Requirements", icon: NAV_ICONS.requirements },
            { label: "Requirement Detail", icon: NAV_ICONS.requirementDetail },
            { label: "Coverage Monitor", icon: NAV_ICONS.coverageMonitor, active: true },
          ],
        },
      ]}
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
        @keyframes artt-cov-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>

        {/* Header */}
        <div
          style={{
            padding: "12px 20px",
            borderBottom: "1px solid #E5E5E5",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 14 }}>Traceability Monitor</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              color: running ? "#059669" : "#A3A3A3",
              transition: "color 0.4s ease",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: running ? "#059669" : "#D4D4D4",
                display: "inline-block",
                transition: "background 0.4s ease",
                animation: running ? "artt-cov-pulse 1.5s ease-in-out infinite" : "none",
              }}
            />
            {running ? "Live" : "Idle"}
          </div>
        </div>

        {/* Metrics */}
        <div style={{ padding: "18px 20px 10px", flex: 1 }}>
          {METRICS.map((m, i) => (
            <CoverageBar
              key={m.label}
              label={m.label}
              pct={m.pct}
              color={m.color}
              running={running}
              delay={i * 200}
              duration={BAR_DURATION_MS}
            />
          ))}

          {/* Divider */}
          <div style={{ height: 1, background: "#F0F0F0", margin: "4px 0 12px" }} />

          {/* Alerts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {ALERTS.map((alert, i) => (
              <div
                key={alert.text}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  padding: "8px 12px",
                  borderRadius: 8,
                  background: alert.type === "warn" ? "#FFFBEB" : "#F0FDF4",
                  border: `1px solid ${alert.type === "warn" ? "#FDE68A" : "#BBF7D0"}`,
                  opacity: showAlerts ? 1 : 0,
                  transform: showAlerts ? "translateY(0)" : "translateY(4px)",
                  transition: `opacity 0.35s ease ${i * 120}ms, transform 0.35s ease ${i * 120}ms`,
                }}
              >
                <span style={{ fontSize: 13, lineHeight: 1.2, flexShrink: 0 }}>
                  {alert.type === "warn" ? "⚠" : "✓"}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    lineHeight: 1.4,
                    color: alert.type === "warn" ? "#92400E" : "#166534",
                  }}
                >
                  {alert.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PlatformShell>
  );
}

function CoverageBar({
  label,
  pct,
  color,
  running,
  delay,
  duration,
}: {
  label: string;
  pct: number;
  color: string;
  running: boolean;
  delay: number;
  duration: number;
}) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const delayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const clearAll = () => {
      if (delayRef.current) clearTimeout(delayRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    if (!running) {
      clearAll();
      setCurrent(0);
      return;
    }

    delayRef.current = setTimeout(() => {
      let val = 0;
      const step = Math.max(1, Math.ceil(pct / (duration / 25)));
      intervalRef.current = setInterval(() => {
        val = Math.min(val + step, pct);
        setCurrent(val);
        if (val >= pct) {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      }, 25);
    }, delay);

    return clearAll;
  }, [running, pct, delay, duration]);

  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
        <span style={{ fontSize: 11, color: "#525252" }}>{label}</span>
        <span style={{ fontSize: 12, fontWeight: 700, color, minWidth: 36, textAlign: "right" }}>
          {current}%
        </span>
      </div>
      <div
        style={{
          height: 7,
          background: "#F0F0F0",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${current}%`,
            background: color,
            borderRadius: 4,
            transition: "width 0.025s linear",
          }}
        />
      </div>
    </div>
  );
}
