"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { BrownfieldGapAnalysisSvg } from "@/components/common/capability-svgs/BrownfieldGapAnalysisSvg";
import { BrownfieldRemediationPlanSvg } from "@/components/common/capability-svgs/BrownfieldRemediationPlanSvg";
import { BrownfieldRemediatorSvg } from "@/components/common/capability-svgs/BrownfieldRemediatorSvg";
import { PillTag } from "@/components/common/PillTag";

const TABS = [
  {
    label: "Import",
    caption:
      "Import wizard — ingest any codebase regardless of language or documentation maturity. Word SRS, Excel risk registers, Git repositories, and test exports all flow into P4SaMD's unified compliance model without manual migration.",
    Component: BrownfieldRemediatorSvg,
    wrapStyle: {} as React.CSSProperties,
  },
  {
    label: "Gap Analysis",
    caption:
      "Gap analysis — every deviation from IEC 62304 and ISO 13485 surfaced automatically, with severity classification, remediation effort estimate, and the exact regulatory clause it maps to.",
    Component: BrownfieldGapAnalysisSvg,
    wrapStyle: {} as React.CSSProperties,
  },
  {
    label: "Remediation Plan",
    caption:
      "Remediation backlog — sprint-ready tasks organized by regulatory priority and effort estimate. Export directly to Jira or any ALM tool and start executing the same day.",
    Component: BrownfieldRemediationPlanSvg,
    wrapStyle: {} as React.CSSProperties,
  },
];

const AUTO_ROTATE_MS = 9000;

export function BrownfieldInActionSection() {
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
              app.mia-care.io / brownfield
            </span>
          </div>

          {/* Animated component */}
          <div
            key={active}
            style={wrapStyle}
            className="h-[260px] sm:h-[320px] md:h-[380px] animate-fade-in-up"
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
