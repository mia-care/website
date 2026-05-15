"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArttTraceabilitySvg } from "@/components/common/capability-svgs/ArttTraceabilitySvg";
import { BrownfieldRemediatorSvg } from "@/components/common/capability-svgs/BrownfieldRemediatorSvg";
import { CapabilityPlaceholder } from "@/components/common/capability-svgs/CapabilityPlaceholder";
import { DocumentationEngineSvg } from "@/components/common/capability-svgs/DocumentationEngineSvg";
import { GuidedChatSvg } from "@/components/common/capability-svgs/GuidedChatSvg";
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
  "guided-workflows": GuidedChatSvg,
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
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mobileTabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mobileStripRef = useRef<HTMLDivElement>(null);

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

  // Mobile: scroll active tab within the strip — never touches page scroll
  useEffect(() => {
    const btn = mobileTabRefs.current[active];
    const strip = mobileStripRef.current;
    if (!btn || !strip) return;
    const btnCenter = btn.offsetLeft + btn.offsetWidth / 2;
    strip.scrollTo({ left: btnCenter - strip.offsetWidth / 2, behavior: "smooth" });
  }, [active]);

  const handleTabClick = (i: number) => {
    setActive(i);
    setIsPlaying(false);
  };

  const togglePlay = () => setIsPlaying((p) => !p);

  return (
    <section
      className="relative py-14 md:py-24 overflow-hidden"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,240,150,0.06) 0%, transparent 65%)",
        }}
      />
      <style>{`
        @keyframes cap-progress {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0); }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <PillTag className="mb-6">Platform Capabilities</PillTag>
          <h2 className="heading-section mb-4">The full E2E in one platform.</h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            P4SaMD orchestrates your entire SDLC — from requirements to release — with regulatory
            compliance enforced at every stage.
          </p>
        </div>

        {/* Explorer layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
          {/* Mobile: horizontal scrollable tab strip + play/pause */}
          <div className="lg:hidden w-full -mx-4 px-4 flex flex-col">
            {/* Tab strip + play/pause row */}
            <div className="flex items-center gap-2">
              <div
                ref={mobileStripRef}
                className="flex gap-2 overflow-x-auto pb-2 scrollbar-none flex-1 min-w-0"
                style={{
                  WebkitMaskImage: "linear-gradient(to right, black 80%, transparent 100%)",
                  maskImage: "linear-gradient(to right, black 80%, transparent 100%)",
                }}
              >
                {capabilities.map((c, i) => (
                  <button
                    key={c.slug}
                    ref={(el) => {
                      mobileTabRefs.current[i] = el;
                    }}
                    type="button"
                    onClick={() => handleTabClick(i)}
                    onMouseEnter={() => setHoveredTab(i)}
                    onMouseLeave={() => setHoveredTab(null)}
                    aria-pressed={active === i}
                    className="flex-none px-3 rounded-lg text-xs font-semibold whitespace-nowrap transition-all"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      minHeight: 44,
                      background:
                        active === i || hoveredTab === i ? "var(--bg-raised)" : "transparent",
                      color:
                        active === i
                          ? "var(--text-primary)"
                          : hoveredTab === i
                            ? "var(--text-primary)"
                            : "var(--text-secondary)",
                      border: `1px solid ${active === i ? "var(--bg-border-strong)" : hoveredTab === i ? "var(--bg-border)" : "transparent"}`,
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

              {/* Mobile play/pause — 44×44 touch target */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause autoplay" : "Resume autoplay"}
                className="shrink-0 flex items-center justify-center transition-colors"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: "var(--bg-raised)",
                  border: "1px solid var(--bg-border)",
                  color: "var(--text-muted)",
                }}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>
            </div>

            {/* Position dots — explicit scroll affordance */}
            <div className="flex justify-center gap-1.5 pt-2 pb-1" aria-hidden="true">
              {capabilities.map((_, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    width: active === i ? 14 : 4,
                    height: 4,
                    borderRadius: 2,
                    background: active === i ? "var(--brand-green)" : "var(--bg-border-strong)",
                    transition: "width 0.25s ease, background 0.25s ease",
                  }}
                />
              ))}
            </div>

            {/* Screen reader position announcement */}
            <span className="sr-only" aria-live="polite" aria-atomic="true">
              {cap.name}, {active + 1} of {capabilities.length}
            </span>
          </div>

          {/* Desktop: vertical tabs sidebar */}
          <nav className="hidden lg:flex flex-col w-52 shrink-0 gap-0.5" aria-label="Capabilities">
            {capabilities.map((c, i) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => handleTabClick(i)}
                onMouseEnter={() => setHoveredTab(i)}
                onMouseLeave={() => setHoveredTab(null)}
                aria-pressed={active === i}
                className="flex flex-col items-start px-4 py-3 rounded-lg text-left transition-all"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: active === i || hoveredTab === i ? "var(--bg-raised)" : "transparent",
                  borderLeft: `2px solid ${active === i ? "var(--brand-green)" : hoveredTab === i ? "var(--bg-border-strong)" : "transparent"}`,
                }}
              >
                <span
                  className="label-caps mb-0.5"
                  style={{
                    color:
                      active === i
                        ? "var(--brand-green)"
                        : hoveredTab === i
                          ? "var(--text-secondary)"
                          : "var(--text-muted)",
                  }}
                >
                  {c.code}
                </span>
                <span
                  className="text-sm font-semibold leading-snug"
                  style={{
                    color:
                      active === i || hoveredTab === i
                        ? "var(--text-primary)"
                        : "var(--text-secondary)",
                  }}
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
            className="flex-1 min-w-0 rounded-card p-6 lg:p-8 flex flex-col lg:flex-row gap-8 animate-fade-in-up h-[530px] lg:h-auto overflow-hidden lg:overflow-visible"
            style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
          >
            {/* Text column */}
            <div className="flex flex-col gap-5 lg:w-[42%] shrink-0 overflow-hidden lg:overflow-visible">
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
                      className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "var(--brand-green)", opacity: 0.6 }}
                    />
                    <span
                      className="text-sm font-semibold leading-snug"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {f.title}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/capabilities/${cap.slug}`}
                className="mt-auto text-sm font-semibold inline-flex items-center gap-1 transition-colors hover:text-brand-green"
                style={{ color: "var(--text-primary)" }}
              >
                Explore capability →
              </Link>
            </div>

            {/* SVG / screenshot column */}
            <div
              className="flex-1 rounded-lg overflow-hidden flex items-center justify-center h-[260px] md:h-[340px] lg:h-[450px]"
              style={{
                background: "var(--bg-raised)",
                border: "1px solid var(--bg-border)",
              }}
            >
              {ScreenshotSvg ? (
                <div className="w-full h-full hide-ps-sidebar">
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
