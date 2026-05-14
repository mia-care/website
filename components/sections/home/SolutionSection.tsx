"use client";

import { useEffect, useRef, useState } from "react";
import { PillTag } from "@/components/common/PillTag";

const FEATURES = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    title: "Connected Workflows Across Your Toolchain",
    body: "P4SaMD connects natively with Jira, GitHub, GitLab, and your ALM of choice. Tasks, code commits, test results, and change records flow into a single traceability layer automatically. No manual exports. No reconciliation at audit time.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "AI Copilot for Compliant Development",
    body: "An embedded AI copilot guides engineers through IEC 62304 requirements in real time, flagging gaps, suggesting risk mitigations, and keeping development artifacts aligned with your QMS as code is written.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Automated Regulatory Documentation",
    body: "P4SaMD auto-generates IEC 62304-compliant documentation directly from your development activity: software development plans, architecture descriptions, verification and validation records, and traceability matrices.",
  },
];

function FeatureItem({ feat, delay }: { feat: (typeof FEATURES)[number]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="flex gap-5 py-7 first:pt-0 last:pb-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      <div
        className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl mt-0.5"
        style={{
          background: "var(--bg-raised)",
          border: "1px solid var(--bg-border)",
          color: "var(--text-muted)",
        }}
      >
        {feat.icon}
      </div>
      <div>
        <h3
          className="font-display font-semibold text-base mb-2 leading-snug"
          style={{ color: "var(--text-primary)" }}
        >
          {feat.title}
        </h3>
        <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
          {feat.body}
        </p>
      </div>
    </div>
  );
}

export function SolutionSection() {
  return (
    <section
      className="py-14 md:py-24"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: framing */}
          <div className="lg:sticky lg:top-24">
            <PillTag className="mb-6">The Solution</PillTag>
            <h2 className="heading-section mb-5">
              One platform.{" "}
              <span style={{ color: "var(--text-secondary)" }}>
                Compliant by design, fast by default.
              </span>
            </h2>
            <p
              className="text-base mb-10"
              style={{ color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "46ch" }}
            >
              P4SaMD integrates your existing development tools into a single compliant workflow, so
              your team ships faster without adding compliance overhead.
            </p>

            {/* Outcome callout */}
            <div
              className="inline-flex items-center gap-4 rounded-2xl px-6 py-4"
              style={{
                background: "rgba(0,240,150,0.05)",
                border: "1px solid rgba(0,240,150,0.12)",
              }}
            >
              <span
                className="font-display font-bold shrink-0"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  color: "var(--brand-green)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                90%
              </span>
              <span className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                less manual documentation.
                <br />
                <span style={{ color: "var(--text-muted)" }}>Design freeze, faster.</span>
              </span>
            </div>
          </div>

          {/* Right: feature list */}
          <div className="flex flex-col divide-y" style={{ borderColor: "var(--bg-border)" }}>
            {FEATURES.map((feat, i) => (
              <FeatureItem key={feat.title} feat={feat} delay={i * 150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
