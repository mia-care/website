"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArttCoverageMonitorSvg } from "@/components/common/capability-svgs/ArttCoverageMonitorSvg";
import { ArttRequirementsListSvg } from "@/components/common/capability-svgs/ArttRequirementsListSvg";
import { ArttTraceabilitySvg } from "@/components/common/capability-svgs/ArttTraceabilitySvg";
import { PillTag } from "@/components/common/PillTag";

const TABS = [
  {
    label: "Requirements",
    caption:
      "Requirements list — every item shows live traceability counts across tests, risks, and implementation artifacts. Auto-linking triggers the moment a requirement is created or modified.",
    Component: ArttRequirementsListSvg,
    wrapStyle: {} as React.CSSProperties,
  },
  {
    label: "Requirement Detail",
    caption:
      "Requirement detail panel — quality, type, status, and a live traceability summary across software items, risks, and tasks. Updated in real time every time something in the chain changes.",
    Component: ArttTraceabilitySvg,
    wrapStyle: {
      background: "#F0F2F5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px 48px",
    } as React.CSSProperties,
  },
  {
    label: "Coverage Monitor",
    caption:
      "Traceability monitor — real-time coverage across requirements, tests, risk controls, and implementation. Gaps surface as alerts before they become audit findings.",
    Component: ArttCoverageMonitorSvg,
    wrapStyle: {} as React.CSSProperties,
  },
];

const AUTO_ROTATE_MS = 8500;

export function ArttInActionSection() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startRotation = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % TABS.length);
    }, AUTO_ROTATE_MS);
  }, []);

  useEffect(() => {
    startRotation();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startRotation]);

  const handleTabClick = (i: number) => {
    setActive(i);
    startRotation();
  };

  const { caption, Component, wrapStyle } = TABS[active];

  return (
    <section
      className="py-20"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-8">In Action</PillTag>

        {/* Tab strip */}
        <div className="mb-8">
          <div
            className="inline-flex gap-1 flex-wrap"
            style={{
              background: "var(--bg-raised)",
              border: "1px solid var(--bg-border)",
              borderRadius: 12,
              padding: 4,
            }}
          >
            {TABS.map((t, i) => (
              <button
                key={t.label}
                type="button"
                onClick={() => handleTabClick(i)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: active === i ? "var(--bg-surface)" : "transparent",
                  color: active === i ? "var(--text-primary)" : "var(--text-muted)",
                  boxShadow: active === i ? "0 1px 3px rgba(0,0,0,0.12)" : "none",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Browser chrome frame */}
        <div
          className="rounded-card overflow-hidden animate-fade-in-up"
          style={{
            border: "1px solid var(--bg-border)",
            background: "var(--bg-raised)",
          }}
        >
          {/* Browser top bar */}
          <div
            style={{
              padding: "10px 14px",
              borderBottom: "1px solid var(--bg-border)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            {(["#EF4444", "#F59E0B", "#22C55E"] as const).map((c) => (
              <span
                key={c}
                style={{ width: 10, height: 10, borderRadius: "50%", background: c, flexShrink: 0 }}
              />
            ))}
            <span
              className="text-xs"
              style={{
                marginLeft: 8,
                color: "var(--text-muted)",
                background: "var(--bg-base)",
                border: "1px solid var(--bg-border)",
                borderRadius: 6,
                padding: "2px 12px",
              }}
            >
              app.mia-care.io / artt
            </span>
          </div>

          {/* Animated component */}
          <div key={active} style={wrapStyle} className="h-[260px] sm:h-[320px] md:h-[380px] animate-fade-in-up">
            <Component />
          </div>
        </div>

        {/* Caption */}
        <p className="mt-4 text-sm text-center" style={{ color: "var(--text-muted)" }}>
          {caption}
        </p>
      </div>
    </section>
  );
}
