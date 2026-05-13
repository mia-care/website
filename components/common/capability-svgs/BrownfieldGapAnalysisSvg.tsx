"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

const GAPS = [
  {
    severity: "CRITICAL",
    title: "Missing Software Requirements Specification",
    effort: "8d",
    ref: "IEC 62304 §5.2",
  },
  {
    severity: "HIGH",
    title: "No unit test evidence documented",
    effort: "5d",
    ref: "IEC 62304 §5.5",
  },
  {
    severity: "HIGH",
    title: "SOUP identification incomplete",
    effort: "3d",
    ref: "IEC 62304 §8.1",
  },
  {
    severity: "MEDIUM",
    title: "Version history not maintained",
    effort: "2d",
    ref: "ISO 13485 §4.2",
  },
  { severity: "LOW", title: "Architecture diagram missing", effort: "1d", ref: "IEC 62304 §5.3" },
];

const SEVERITY_STYLE = {
  CRITICAL: { bg: "#FEF2F2", color: "#DC2626", border: "#FCA5A5" },
  HIGH: { bg: "#FFF7ED", color: "#D97706", border: "#FCD34D" },
  MEDIUM: { bg: "#FFFBEB", color: "#B45309", border: "#FDE68A" },
  LOW: { bg: "#F0FDF4", color: "#059669", border: "#6EE7B7" },
};

const COMPLIANCE_TARGET = 43;

function useCountUp(target: number, running: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setValue(0);
      return;
    }
    let current = 0;
    const step = Math.max(1, Math.ceil(target / (duration / 30)));
    intervalRef.current = setInterval(() => {
      current = Math.min(current + step, target);
      setValue(current);
      if (current >= target && intervalRef.current) clearInterval(intervalRef.current);
    }, 30);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, target, duration]);

  return value;
}

export function BrownfieldGapAnalysisSvg() {
  const [visibleGaps, setVisibleGaps] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rowTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clearAll = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      rowTimers.current.forEach(clearTimeout);
      rowTimers.current = [];
    };

    const run = () => {
      setVisibleGaps(0);
      setShowSummary(false);

      timerRef.current = setTimeout(() => {
        GAPS.forEach((_, i) => {
          const t = setTimeout(() => setVisibleGaps(i + 1), i * 170);
          rowTimers.current.push(t);
        });
        const revealDone = GAPS.length * 170 + 500;
        timerRef.current = setTimeout(() => {
          setShowSummary(true);
          timerRef.current = setTimeout(() => {
            setShowSummary(false);
            timerRef.current = setTimeout(run, 600);
          }, 3200);
        }, revealDone);
      }, 400);
    };

    run();
    return clearAll;
  }, []);

  const compliance = useCountUp(COMPLIANCE_TARGET, showSummary, 1100);

  const BROWNFIELD_NAV = [
    { label: "Import", icon: NAV_ICONS.import },
    { label: "Gap Analysis", icon: NAV_ICONS.gapAnalysis, active: true },
    { label: "Remediation Plan", icon: NAV_ICONS.remediationPlan },
  ];

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "Gap Analysis"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard }}
      sections={[{ title: "Brownfield", items: BROWNFIELD_NAV }]}
    >
      <div
        style={{
          background: "#F8F8F8",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          fontSize: 12,
          color: "#0A0A0A",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "white",
            borderBottom: "1px solid #E5E5E5",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 14 }}>Gap Analysis</div>
          <div style={{ display: "flex", gap: 8 }}>
            {["IEC 62304 ▾", "ISO 13485 ▾"].map((label) => (
              <span
                key={label}
                style={{
                  padding: "3px 10px",
                  borderRadius: 6,
                  border: "1px solid #E5E5E5",
                  background: "white",
                  color: "#737373",
                  fontSize: 11,
                  cursor: "default",
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Column headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "84px 1fr 50px 110px",
            padding: "6px 20px",
            background: "#FAFAFA",
            borderBottom: "1px solid #E5E5E5",
            color: "#A3A3A3",
            fontSize: 10,
            fontWeight: 600,
            gap: 8,
            flexShrink: 0,
          }}
        >
          <span>Severity</span>
          <span>Description</span>
          <span style={{ textAlign: "center" }}>Effort</span>
          <span>Reference</span>
        </div>

        {/* Gap rows */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          {GAPS.map((gap, i) => {
            const visible = visibleGaps > i;
            const s = SEVERITY_STYLE[gap.severity as keyof typeof SEVERITY_STYLE];
            return (
              <div
                key={gap.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "84px 1fr 50px 110px",
                  padding: "8px 20px",
                  gap: 8,
                  alignItems: "center",
                  background: "white",
                  borderBottom: "1px solid #F0F0F0",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(5px)",
                  transition: "opacity 0.25s ease, transform 0.25s ease",
                }}
              >
                <span
                  style={{
                    background: s.bg,
                    color: s.color,
                    border: `1px solid ${s.border}`,
                    borderRadius: 4,
                    padding: "2px 5px",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  {gap.severity}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {gap.title}
                </span>
                <span style={{ fontSize: 10, color: "#737373", textAlign: "center" }}>
                  {gap.effort}
                </span>
                <span style={{ fontSize: 10, color: "#00AFB6", fontFamily: "monospace" }}>
                  {gap.ref}
                </span>
              </div>
            );
          })}
        </div>

        {/* Summary footer */}
        <div
          style={{
            padding: "8px 20px",
            background: "white",
            borderTop: "1px solid #E5E5E5",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            opacity: showSummary ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <div style={{ display: "flex", gap: 14, fontSize: 10 }}>
            <span style={{ color: "#DC2626", fontWeight: 600 }}>Critical: 4</span>
            <span style={{ color: "#D97706", fontWeight: 600 }}>High: 8</span>
            <span style={{ color: "#737373" }}>23 gaps total</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 10, color: "#737373" }}>Compliance</span>
            <div
              style={{
                width: 64,
                height: 6,
                background: "#E5E5E5",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${compliance}%`,
                  background: "#00AFB6",
                  borderRadius: 3,
                  transition: "width 0.03s linear",
                }}
              />
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#00AFB6", minWidth: 30 }}>
              {compliance}%
            </span>
          </div>
        </div>
      </div>
    </PlatformShell>
  );
}
