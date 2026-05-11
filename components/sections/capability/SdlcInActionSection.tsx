"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SdlcBlueprintSvg } from "@/components/common/capability-svgs/SdlcBlueprintSvg";
import { SdlcConfigLogSvg } from "@/components/common/capability-svgs/SdlcConfigLogSvg";
import { SdlcWorkflowGuideSvg } from "@/components/common/capability-svgs/SdlcWorkflowGuideSvg";
import { SdlcWorkflowSvg } from "@/components/common/capability-svgs/SdlcWorkflowSvg";
import { PillTag } from "@/components/common/PillTag";

const TABS = [
  {
    label: "Dashboard",
    caption:
      "Project dashboard — every active SDLC project summarised in one view. Tasks blocking the next phase are surfaced automatically with severity and effort estimates, so teams unblock themselves before auditors ask why.",
    Component: SdlcWorkflowSvg,
    wrapStyle: {} as React.CSSProperties,
  },
  {
    label: "Integrations",
    caption:
      "Tool integrations — Jira, GitHub, Mia-Platform Console and Kubernetes clusters connected in minutes. P4SaMD pulls work items, commits, and runtime signals into a single IEC 62304-aligned audit trail automatically.",
    Component: SdlcBlueprintSvg,
    wrapStyle: {} as React.CSSProperties,
  },
  {
    label: "Audit Log",
    caption:
      "Audit log — every requirement change, risk update, and approval decision recorded with actor, timestamp, and role. Exportable as CSV for notified-body submissions and internal QMS reviews.",
    Component: SdlcConfigLogSvg,
    wrapStyle: {} as React.CSSProperties,
  },
  {
    label: "Workflow Guide",
    caption:
      "Workflow guide — live task queue surfacing every IEC 62304 blocker by phase, severity, and effort estimate. The circular progress tracker shows exactly how far the project is through its safety-class lifecycle.",
    Component: SdlcWorkflowGuideSvg,
    wrapStyle: {} as React.CSSProperties,
  },
];

const AUTO_ROTATE_MS = 9000;

export function SdlcInActionSection() {
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
              app.mia-care.io / sdlc
            </span>
          </div>

          {/* Animated component */}
          <div
            key={active}
            style={wrapStyle}
            className="h-[300px] sm:h-[420px] md:h-[520px] animate-fade-in-up"
          >
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
