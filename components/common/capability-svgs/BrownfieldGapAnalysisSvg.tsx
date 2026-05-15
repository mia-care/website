"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

const CATEGORIES = [
  {
    id: "design",
    label: "DESIGN",
    standard: "IEC 62304",
    color: "#1677FF",
    bg: "#E6F4FF",
    border: "#91CAFF",
    primary: 2,
    secondary: 1,
    gaps: [
      {
        ref: "§5.3.1",
        desc: "Module decomposition incomplete for OTA update subsystem",
        priority: "Primary",
      },
      {
        ref: "§5.3.2",
        desc: "Software items not fully identified in architectural design",
        priority: "Secondary",
      },
      {
        ref: "§5.3.4",
        desc: "No defined interface for ADC sampling configuration",
        priority: "Primary",
      },
    ],
  },
  {
    id: "requirements",
    label: "REQUIREMENTS",
    standard: "IEC 62304",
    color: "#FA8C16",
    bg: "#FFF7E6",
    border: "#FFD591",
    primary: 1,
    secondary: 1,
    gaps: [
      { ref: "§5.2.1", desc: "Missing software requirements specification", priority: "Primary" },
      { ref: "§5.2.6", desc: "Risk-related requirements not documented", priority: "Secondary" },
    ],
  },
  {
    id: "risk",
    label: "RISK MANAGEMENT",
    standard: "ISO 14971",
    color: "#FF4D4F",
    bg: "#FFF2F0",
    border: "#FFA39E",
    primary: 4,
    secondary: 1,
    gaps: [
      {
        ref: "§5.4",
        desc: "Missing hazard analysis for wireless communication module",
        priority: "Primary",
      },
      {
        ref: "§5.5",
        desc: "Incomplete severity classification for alarm subsystem failure",
        priority: "Primary",
      },
      {
        ref: "§7.1",
        desc: "No residual risk evaluation for software update pathway",
        priority: "Primary",
      },
    ],
  },
];

const ALL_GAPS = CATEGORIES.flatMap((c) => c.gaps.map((g) => ({ ...g, catId: c.id })));
const REVEAL_MS = 650;
const HOLD_MS = 2200;

const PRIORITY_STYLE = {
  Primary: { bg: "#FFF2F0", color: "#CF1322", border: "#FFA39E" },
  Secondary: { bg: "#FFF7E6", color: "#D46B08", border: "#FFD591" },
};

const BROWNFIELD_NAV = [
  { label: "Import", icon: NAV_ICONS.import },
  { label: "Gap Analysis", icon: NAV_ICONS.gapAnalysis, active: true },
  { label: "Remediation Plan", icon: NAV_ICONS.remediationPlan },
];

export function BrownfieldGapAnalysisSvg() {
  const [visibleCount, setVisibleCount] = useState(0);
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
      setVisibleCount(0);

      ALL_GAPS.forEach((_, i) => {
        later(() => setVisibleCount(i + 1), (i + 1) * REVEAL_MS);
      });

      later(run, ALL_GAPS.length * REVEAL_MS + HOLD_MS);
    };

    run();
    return clear;
  }, []);

  let gapIndex = 0;

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "Gap Analysis"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard }}
      sections={[{ title: "Brownfield", items: BROWNFIELD_NAV }]}
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
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#0F172A" }}>
              Clause Gap Breakdown
            </div>
            <div style={{ fontSize: 9, color: "#6B7280", marginTop: 1 }}>
              Gaps per category, grouped by priority level
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {[
              { label: "Primary", count: 7, color: "#CF1322", bg: "#FFF2F0" },
              { label: "Secondary", count: 2, color: "#D46B08", bg: "#FFF7E6" },
            ].map(({ label, count, color, bg }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span
                  style={{
                    background: bg,
                    color,
                    borderRadius: 20,
                    padding: "1px 7px",
                    fontSize: 9,
                    fontWeight: 600,
                  }}
                >
                  {label}
                </span>
                <span style={{ fontSize: 9, fontWeight: 700, color: "#374151" }}>{count}</span>
              </div>
            ))}
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                color: "#374151",
                background: "#F3F4F6",
                borderRadius: 20,
                padding: "2px 8px",
              }}
            >
              {ALL_GAPS.length} total gaps
            </span>
          </div>
        </div>

        {/* Category list */}
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            padding: "8px 12px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {CATEGORIES.map((cat) => {
            const catGaps = cat.gaps;
            const firstGapIdx = gapIndex;
            gapIndex += catGaps.length;
            const catVisible = visibleCount > firstGapIdx;

            return (
              <div key={cat.id}>
                {/* Category header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    marginBottom: 4,
                    opacity: catVisible ? 1 : 0.25,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: cat.color,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      color: cat.color,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {cat.label}
                  </span>
                  <span style={{ fontSize: 9, color: "#9CA3AF" }}>— {cat.standard}</span>
                  <div style={{ display: "flex", gap: 3, marginLeft: 2 }}>
                    <span
                      style={{
                        background: PRIORITY_STYLE.Primary.bg,
                        color: PRIORITY_STYLE.Primary.color,
                        border: `1px solid ${PRIORITY_STYLE.Primary.border}`,
                        borderRadius: 10,
                        padding: "0 5px",
                        fontSize: 8,
                        fontWeight: 700,
                      }}
                    >
                      {cat.primary}
                    </span>
                    <span
                      style={{
                        background: PRIORITY_STYLE.Secondary.bg,
                        color: PRIORITY_STYLE.Secondary.color,
                        border: `1px solid ${PRIORITY_STYLE.Secondary.border}`,
                        borderRadius: 10,
                        padding: "0 5px",
                        fontSize: 8,
                        fontWeight: 700,
                      }}
                    >
                      {cat.secondary}
                    </span>
                  </div>
                </div>

                {/* Gap rows */}
                <div
                  style={{
                    borderLeft: `2px solid ${cat.border}`,
                    marginLeft: 3,
                    paddingLeft: 8,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  {catGaps.map((gap, i) => {
                    const absIdx = firstGapIdx + i;
                    const visible = visibleCount > absIdx;
                    const ps = PRIORITY_STYLE[gap.priority as keyof typeof PRIORITY_STYLE];
                    return (
                      <div
                        key={gap.ref}
                        style={{
                          background: "white",
                          border: "1px solid #E5E7EB",
                          borderRadius: 6,
                          padding: "5px 8px",
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          opacity: visible ? 1 : 0,
                          transform: visible ? "translateY(0)" : "translateY(4px)",
                          transition: "opacity 0.3s ease, transform 0.3s ease",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: 700,
                            color: cat.color,
                            fontFamily: "ui-monospace, monospace",
                            flexShrink: 0,
                            minWidth: 42,
                          }}
                        >
                          {gap.ref}
                        </span>
                        <span
                          style={{
                            flex: 1,
                            fontSize: 9.5,
                            color: "#374151",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {gap.desc}
                        </span>
                        <span
                          style={{
                            background: ps.bg,
                            color: ps.color,
                            border: `1px solid ${ps.border}`,
                            borderRadius: 10,
                            padding: "1px 6px",
                            fontSize: 8,
                            fontWeight: 600,
                            flexShrink: 0,
                          }}
                        >
                          {gap.priority}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PlatformShell>
  );
}
