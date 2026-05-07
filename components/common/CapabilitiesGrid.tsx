"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArttTraceabilitySvg } from "@/components/common/capability-svgs/ArttTraceabilitySvg";
import { BrownfieldRemediatorSvg } from "@/components/common/capability-svgs/BrownfieldRemediatorSvg";
import { CapabilityPlaceholder } from "@/components/common/capability-svgs/CapabilityPlaceholder";
import { DocumentationEngineSvg } from "@/components/common/capability-svgs/DocumentationEngineSvg";
import { GuidedWorkflowsSvg } from "@/components/common/capability-svgs/GuidedWorkflowsSvg";
import { MasterAiComplianceSvg } from "@/components/common/capability-svgs/MasterAiComplianceSvg";
import { SdlcOrchestratorSvg } from "@/components/common/capability-svgs/SdlcOrchestratorSvg";
import { SecureSoftwareSvg } from "@/components/common/capability-svgs/SecureSoftwareSvg";
import { SmartAssistantSvg } from "@/components/common/capability-svgs/SmartAssistantSvg";
import { PillTag } from "@/components/common/PillTag";
import { capabilities } from "@/data/capabilities";

const SVG_MAP: Record<string, React.ComponentType> = {
  "sdlc-orchestrator": SdlcOrchestratorSvg,
  "artt-traceability": ArttTraceabilitySvg,
  "documentation-engine": DocumentationEngineSvg,
  "smart-assistant": SmartAssistantSvg,
  "ai-compliance": MasterAiComplianceSvg,
  "brownfield-remediator": BrownfieldRemediatorSvg,
  "software-development": SecureSoftwareSvg,
  "guided-workflows": GuidedWorkflowsSvg,
};

const AUTOPLAY_MS = 20_000;

function PauseIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <rect x="1.5" y="1" width="2.5" height="8" rx="1" fill="currentColor" />
      <rect x="6" y="1" width="2.5" height="8" rx="1" fill="currentColor" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 1.5l7 3.5-7 3.5V1.5z" fill="currentColor" />
    </svg>
  );
}

export function CapabilitiesGrid() {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mobileTabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const cap = capabilities[active];
  const ScreenshotSvg = SVG_MAP[cap.slug];

  // Auto-advance
  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
      return;
    }
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % capabilities.length);
    }, AUTOPLAY_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  // Mobile: scroll active tab into view
  useEffect(() => {
    mobileTabRefs.current[active]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [active]);

  const handleTabClick = (i: number) => {
    setActive(i);
    setIsPlaying(false);
  };

  const togglePlay = () => setIsPlaying((p) => !p);

  return (
    <section className="py-24" style={{ background: "var(--bg-base)" }}>
      <style>{`
        @keyframes cap-progress {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <PillTag className="mb-6">The Platform</PillTag>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}
          >
            Eight capabilities. One platform.
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            P4SaMD orchestrates your entire SDLC — from requirements to release — with regulatory
            compliance enforced at every stage.
          </p>
        </div>

        {/* Explorer layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Mobile: horizontal scrollable tab strip + play/pause */}
          <div className="lg:hidden w-full -mx-4 px-4 flex items-center gap-2">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none flex-1 min-w-0">
              {capabilities.map((c, i) => (
                <button
                  key={c.slug}
                  ref={(el) => {
                    mobileTabRefs.current[i] = el;
                  }}
                  type="button"
                  onClick={() => handleTabClick(i)}
                  aria-pressed={active === i}
                  className="flex-none px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    background: active === i ? "var(--bg-raised)" : "transparent",
                    color: active === i ? "var(--text-primary)" : "var(--text-secondary)",
                    border: `1px solid ${active === i ? "var(--bg-border-strong)" : "transparent"}`,
                  }}
                >
                  {c.name}
                  {active === i && isPlaying && (
                    <div
                      key={`mob-${active}`}
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: "var(--brand-green)",
                        transformOrigin: "left center",
                        animation: `cap-progress ${AUTOPLAY_MS}ms linear forwards`,
                        borderRadius: 1,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile play/pause */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause autoplay" : "Resume autoplay"}
              className="shrink-0 pb-2 flex items-center justify-center transition-colors"
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                background: "var(--bg-raised)",
                border: "1px solid var(--bg-border)",
                color: "var(--text-muted)",
              }}
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
          </div>

          {/* Desktop: vertical tabs sidebar */}
          <nav className="hidden lg:flex flex-col w-52 shrink-0 gap-0.5" aria-label="Capabilities">
            {capabilities.map((c, i) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => handleTabClick(i)}
                aria-pressed={active === i}
                className="flex flex-col items-start px-4 py-3 rounded-lg text-left transition-all"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: active === i ? "var(--bg-raised)" : "transparent",
                  borderLeft: `2px solid ${active === i ? "var(--brand-green)" : "transparent"}`,
                }}
              >
                <span
                  className="label-caps mb-0.5"
                  style={{ color: active === i ? "var(--brand-green)" : "var(--text-muted)" }}
                >
                  {c.code}
                </span>
                <span
                  className="text-sm font-semibold leading-snug"
                  style={{ color: active === i ? "var(--text-primary)" : "var(--text-secondary)" }}
                >
                  {c.name}
                </span>

                {/* Progress bar */}
                {active === i && isPlaying && (
                  <div
                    key={`desk-${active}`}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "var(--brand-green)",
                      transformOrigin: "left center",
                      animation: `cap-progress ${AUTOPLAY_MS}ms linear forwards`,
                      borderRadius: 1,
                      opacity: 0.6,
                    }}
                  />
                )}
              </button>
            ))}

            {/* Desktop play/pause toggle */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause autoplay" : "Resume autoplay"}
              className="mt-2 flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-left"
              style={{
                color: "var(--text-muted)",
                border: "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-raised)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--bg-border)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent";
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  background: "var(--bg-raised)",
                  border: "1px solid var(--bg-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                {isPlaying ? "Pause" : "Resume"}
              </span>
            </button>
          </nav>

          {/* Content panel */}
          <div
            key={active}
            className="flex-1 min-w-0 rounded-card p-6 lg:p-8 flex flex-col lg:flex-row gap-8 animate-fade-in-up"
            style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
          >
            {/* Text column */}
            <div className="flex flex-col gap-5 lg:w-[42%] shrink-0">
              <div>
                <span className="label-caps mb-2 block" style={{ color: "var(--text-muted)" }}>
                  {cap.code}
                </span>
                <h3
                  className="font-display font-bold mb-2"
                  style={{
                    fontSize: "clamp(18px, 2vw, 26px)",
                    color: "var(--text-primary)",
                    lineHeight: 1.25,
                  }}
                >
                  {cap.name}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  {cap.tagline}
                </p>
              </div>

              {/* Feature bullets */}
              <ul className="flex flex-col gap-3">
                {cap.features.slice(0, 3).map((f) => (
                  <li key={f.label} className="flex gap-3 items-start">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "var(--text-muted)" }}
                    />
                    <div>
                      <span
                        className="label-caps block mb-0.5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {f.label}
                      </span>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {f.title}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href={`/capabilities/${cap.slug}`}
                className="mt-auto text-sm font-semibold inline-flex items-center gap-1 transition-colors hover:text-brand-green"
                style={{ color: "var(--text-muted)" }}
              >
                Explore capability →
              </Link>
            </div>

            {/* SVG / screenshot column */}
            <div
              className="flex-1 rounded-lg overflow-hidden flex items-center justify-center"
              style={{
                background: "var(--bg-raised)",
                height: "450px",
                border: "1px solid var(--bg-border)",
              }}
            >
              {ScreenshotSvg ? (
                <div className="w-full h-full">
                  <ScreenshotSvg />
                </div>
              ) : (
                <CapabilityPlaceholder name={cap.name} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
