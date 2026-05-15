"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

const ROWS = [
  {
    id: "SR-R01",
    priority: "Critical",
    title: "User Authentication",
    status: "Verified",
    changes: ["CR-001"],
    risks: ["RISK-012", "RISK-015"],
  },
  {
    id: "SR-R02",
    priority: "Critical",
    title: "Real-time Data Acquisition",
    status: "Verified",
    changes: ["CR-002"],
    risks: ["RISK-003"],
  },
  {
    id: "SR-R03",
    priority: "Critical",
    title: "Alarm Notification",
    status: "Verified",
    changes: ["CR-003"],
    risks: ["RISK-001", "RISK-002"],
  },
  {
    id: "SR-R04",
    priority: "High",
    title: "Data Encryption at Rest",
    status: "Verified",
    changes: ["CR-004"],
    risks: ["RISK-018"],
  },
  {
    id: "SR-R05",
    priority: "High",
    title: "Audit Trail",
    status: "Verified",
    changes: [],
    risks: ["RISK-022"],
  },
  {
    id: "SR-R06",
    priority: "Medium",
    title: "System Performance Monitoring",
    status: "In Progress",
    changes: ["CR-005"],
    risks: ["RISK-025"],
  },
];

const PRIORITY_STYLE = {
  Critical: { bg: "#FFF2F0", color: "#CF1322", border: "#FFA39E" },
  High: { bg: "#FFF7E6", color: "#D46B08", border: "#FFD591" },
  Medium: { bg: "#F0F5FF", color: "#2F54EB", border: "#ADC6FF" },
};

const SDLC_NAV = [
  { label: "Workflow Guide", icon: NAV_ICONS.workflowGuide },
  { label: "Requirements", icon: NAV_ICONS.requirements },
  { label: "Software System", icon: NAV_ICONS.softwareSystem },
  { label: "Verification", icon: NAV_ICONS.verification },
  { label: "Risk Analysis", icon: NAV_ICONS.riskAnalysis },
  { label: "Traceability Matrix", icon: NAV_ICONS.coverageMonitor, active: true },
];

const CONFIG_NAV = [
  { label: "Product Metadata", icon: NAV_ICONS.productMetadata },
  { label: "Regulatory Framework", icon: NAV_ICONS.guardrails },
  { label: "AI Agents", icon: NAV_ICONS.aiProjects },
  { label: "Users", icon: NAV_ICONS.roleView },
  { label: "Settings", icon: NAV_ICONS.settings },
];

const STATS = [
  { label: "Req. Coverage", value: 6, total: 6, color: "#1677FF" },
  { label: "Req. Verified", value: 5, total: 6, color: "#009966" },
  { label: "Tests Passed", value: 10, total: 13, color: "#009966" },
];

const ROW_REVEAL_MS = 480;
const HOLD_MS = 2000;
const COUNT_UP_MS = 1200;

function useCountUp(target: number, running: boolean) {
  const [v, setV] = useState(0);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (!running) {
      setV(0);
      return;
    }
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / (COUNT_UP_MS / 30)));
    ref.current = setInterval(() => {
      cur = Math.min(cur + step, target);
      setV(cur);
      if (cur >= target && ref.current) clearInterval(ref.current);
    }, 30);
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [running, target]);
  return v;
}

function StatCard({ stat, running }: { stat: (typeof STATS)[number]; running: boolean }) {
  const v = useCountUp(stat.value, running);
  return (
    <div
      style={{
        flex: 1,
        background: "white",
        border: "1px solid #E5E7EB",
        borderRadius: 8,
        padding: "8px 12px",
        minWidth: 0,
      }}
    >
      <div style={{ fontWeight: 800, fontSize: 20, color: stat.color, lineHeight: 1.1 }}>
        {v}
        <span style={{ fontSize: 13, fontWeight: 600, color: "#9CA3AF" }}>/{stat.total}</span>
      </div>
      <div
        style={{
          height: 3,
          background: "#E5E7EB",
          borderRadius: 2,
          marginTop: 5,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${(v / stat.total) * 100}%`,
            background: stat.color,
            borderRadius: 2,
            transition: "width 0.03s linear",
          }}
        />
      </div>
      <div style={{ fontSize: 9, color: "#6B7280", marginTop: 4 }}>{stat.label}</div>
    </div>
  );
}

export function ArttTraceabilityMatrixSvg() {
  const [visibleRows, setVisibleRows] = useState(0);
  const [statsRunning, setStatsRunning] = useState(false);
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
      setVisibleRows(0);
      setStatsRunning(false);

      // Stats count up first
      later(() => setStatsRunning(true), 300);

      // Then rows appear
      ROWS.forEach((_, i) => {
        later(() => setVisibleRows(i + 1), 300 + COUNT_UP_MS * 0.6 + (i + 1) * ROW_REVEAL_MS);
      });

      const totalDuration = 300 + COUNT_UP_MS * 0.6 + ROWS.length * ROW_REVEAL_MS + HOLD_MS;
      later(run, totalDuration);
    };

    run();
    return clear;
  }, []);

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "AI Diagnostic Tool", "Traceability Matrix"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard }}
      sections={[
        { title: "SDLC", items: SDLC_NAV },
        { title: "Configuration", items: CONFIG_NAV },
      ]}
    >
      <div
        style={{
          background: "#F8FAFC",
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
            borderBottom: "1px solid #E5E7EB",
            padding: "8px 14px",
            flexShrink: 0,
          }}
        >
          <div style={{ fontSize: 9, color: "#9CA3AF", marginBottom: 1 }}>
            IEC 62304 §5.7 · Requirements ↔ SW Items ↔ Risks ↔ Tests ↔ Changes
          </div>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#0F172A" }}>Traceability Matrix</div>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 6, padding: "8px 12px 6px", flexShrink: 0 }}>
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} running={statsRunning} />
          ))}
        </div>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            gap: 10,
            padding: "0 14px 6px",
            flexShrink: 0,
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Change Request", color: "#722ED1", bg: "#F9F0FF" },
            { label: "Risk", color: "#CF1322", bg: "#FFF2F0" },
            { label: "Passed", color: "#009966", dot: true },
            { label: "In Progress", color: "#D46B08", dot: true },
          ].map(({ label, color, bg, dot }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 3 }}>
              {dot ? (
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: color }} />
              ) : (
                <span
                  style={{
                    background: bg,
                    color,
                    borderRadius: 4,
                    padding: "0 5px",
                    fontSize: 8,
                    fontWeight: 600,
                  }}
                >
                  {label.split(" ")[0]}
                </span>
              )}
              <span style={{ fontSize: 8.5, color: "#6B7280" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Column headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 90px 130px",
            padding: "4px 14px",
            background: "#F1F5F9",
            borderTop: "1px solid #E5E7EB",
            borderBottom: "1px solid #E5E7EB",
            color: "#6B7280",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            flexShrink: 0,
          }}
        >
          <span>Requirement</span>
          <span>Changes</span>
          <span>Risks Mitigated</span>
        </div>

        {/* Rows */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          {ROWS.map((row, i) => {
            const visible = visibleRows > i;
            const ps = PRIORITY_STYLE[row.priority as keyof typeof PRIORITY_STYLE];
            const verified = row.status === "Verified";

            return (
              <div
                key={row.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 90px 130px",
                  padding: "6px 14px",
                  alignItems: "center",
                  background: "white",
                  borderBottom: "1px solid #F1F5F9",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(5px)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  gap: 6,
                }}
              >
                {/* Requirement */}
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
                    <span style={{ fontSize: 8.5, color: "#9CA3AF", fontFamily: "monospace" }}>
                      {row.id}
                    </span>
                    <span
                      style={{
                        background: ps.bg,
                        color: ps.color,
                        border: `1px solid ${ps.border}`,
                        borderRadius: 10,
                        padding: "0 5px",
                        fontSize: 7.5,
                        fontWeight: 700,
                      }}
                    >
                      {row.priority}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 10.5,
                      fontWeight: 600,
                      color: "#0F172A",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {row.title}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 3, marginTop: 2 }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: verified ? "#009966" : "#D46B08",
                      }}
                    />
                    <span style={{ fontSize: 8.5, color: verified ? "#009966" : "#D46B08" }}>
                      {row.status}
                    </span>
                  </div>
                </div>

                {/* Changes */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                  {row.changes.length === 0 ? (
                    <span style={{ color: "#D1D5DB", fontSize: 11 }}>—</span>
                  ) : (
                    row.changes.map((c) => (
                      <span
                        key={c}
                        style={{
                          background: "#F9F0FF",
                          color: "#722ED1",
                          border: "1px solid #D3ADF7",
                          borderRadius: 4,
                          padding: "1px 5px",
                          fontSize: 8,
                          fontWeight: 600,
                        }}
                      >
                        {c}
                      </span>
                    ))
                  )}
                </div>

                {/* Risks */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                  {row.risks.map((r) => (
                    <span
                      key={r}
                      style={{
                        background: "#FFF2F0",
                        color: "#CF1322",
                        border: "1px solid #FFA39E",
                        borderRadius: 4,
                        padding: "1px 5px",
                        fontSize: 8,
                        fontWeight: 600,
                      }}
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PlatformShell>
  );
}
