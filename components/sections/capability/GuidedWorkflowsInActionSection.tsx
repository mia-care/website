"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GuidedChatSvg } from "@/components/common/capability-svgs/GuidedChatSvg";
import { GuidedOnboardingSvg } from "@/components/common/capability-svgs/GuidedOnboardingSvg";
import { GuidedWorkflowsSvg } from "@/components/common/capability-svgs/GuidedWorkflowsSvg";
import { PillTag } from "@/components/common/PillTag";

const TABS = [
  {
    label: "Role View",
    caption:
      "Role-based checklists — developer, QA, and regulatory affairs each see the exact scope they own. Tasks check off in real time as work is completed, with IEC 62304 section references and a contextual compliance hint after every phase.",
    Component: GuidedWorkflowsSvg,
    wrapStyle: {} as React.CSSProperties,
  },
  {
    label: "AI Guidance",
    caption:
      "Conversational compliance assistant — developers ask questions in plain English and get structured, regulation-referenced answers. No need to know IEC 62304 section numbers; the system maps every answer back to the standard automatically.",
    Component: GuidedChatSvg,
    wrapStyle: {} as React.CSSProperties,
  },
  {
    label: "Onboarding",
    caption:
      "Structured onboarding path — teams new to SaMD development follow a phase-by-phase learning track tied to IEC 62304 and ISO 13485. Milestones expand inline as each phase becomes active, compressing ramp-up from months to days.",
    Component: GuidedOnboardingSvg,
    wrapStyle: {} as React.CSSProperties,
  },
];

const AUTO_ROTATE_MS = 9000;

export function GuidedWorkflowsInActionSection() {
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

  const { caption, Component } = TABS[active];

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
              app.mia-care.io / guided-workflows
            </span>
          </div>

          {/* Animated component */}
          <div key={active} className="h-[300px] sm:h-[380px] md:h-[460px] animate-fade-in-up">
            {active === 0 ? (
              <div
                style={{
                  height: "100%",
                  background: "#F8FAFC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px 40px",
                }}
              >
                <div style={{ width: "100%", maxWidth: 520, height: "100%" }}>
                  <Component />
                </div>
              </div>
            ) : (
              <Component />
            )}
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
