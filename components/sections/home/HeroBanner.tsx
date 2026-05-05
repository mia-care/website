"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { PillTag } from "@/components/common/PillTag";
import { HelixCanvas } from "./HelixCanvas";
import { HeroProductFloating } from "./HeroProductFloating";

const REPULSE_RADIUS = 130;
const REPULSE_FORCE = 22;

// Words in the H1: ["The", "compliance", "bottleneck", "ends", "here."]
// "ends here." gets text-brand-gradient, rest plain

export function HeroBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [offsets, setOffsets] = useState<{ x: number; y: number }[]>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const cx = e.clientX;
    const cy = e.clientY;
    setOffsets(
      wordRefs.current.map((el) => {
        if (!el) return { x: 0, y: 0 };
        const r = el.getBoundingClientRect();
        const wx = r.left + r.width / 2;
        const wy = r.top + r.height / 2;
        const dx = cx - wx;
        const dy = cy - wy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > REPULSE_RADIUS || dist === 0) return { x: 0, y: 0 };
        const strength = (1 - dist / REPULSE_RADIUS) * REPULSE_FORCE;
        return {
          x: -(dx / dist) * strength,
          y: -(dy / dist) * strength,
        };
      }),
    );
  }, []);

  const onMouseLeave = useCallback(() => {
    setOffsets([
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ]);
  }, []);

  function wordSpan(index: number, text: string, extraStyle?: React.CSSProperties) {
    const { x, y } = offsets[index];
    const moving = x !== 0 || y !== 0;
    return (
      <span
        ref={(el) => {
          wordRefs.current[index] = el;
        }}
        style={{
          display: "inline-block",
          transform: `translate(${x}px, ${y}px)`,
          transition: moving
            ? "transform 0.08s ease-out"
            : "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
          ...extraStyle,
        }}
      >
        {text}
      </span>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        minHeight: "clamp(500px, 65vh, 720px)",
        backgroundColor: "#000",
        background:
          "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(0,240,150,0.09) 0%, transparent 50%)",
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* ── Animation fills the entire hero ────────────────────────────── */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <HelixCanvas style={{ height: "100%" }} />
      </div>

      {/* ── Scrim — darkens the copy zone so all text stays legible ─────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Copy + product panel ────────────────────────────────────────── */}
      <div
        className="relative w-full max-w-7xl mx-auto px-6 lg:px-12"
        style={{
          zIndex: 2,
          paddingTop: "clamp(3.5rem, 8vw, 6rem)",
          paddingBottom: "clamp(2rem, 4vw, 3rem)",
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Left: copy */}
          <div className="flex-1 min-w-0 text-center lg:text-left">
            {/* Eyebrow badge */}
            <div className="flex justify-center lg:justify-start mb-7 animate-fade-in-up">
              <PillTag>
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full animate-pulse-dot"
                  style={{ background: "var(--brand-green)" }}
                />
                AI-Native SaMD Platform
              </PillTag>
            </div>

            {/* H1 — each word is independently repulsable */}
            <h1
              className="font-display font-bold leading-tight mb-6 animate-fade-in-up"
              style={{
                fontSize: "clamp(34px, 5vw, 64px)",
                letterSpacing: "-0.03em",
                animationDelay: "80ms",
              }}
            >
              {wordSpan(0, "The")} {wordSpan(1, "compliance")} {wordSpan(2, "bottleneck")}{" "}
              {wordSpan(3, "ends", {
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundImage: "var(--brand-gradient, linear-gradient(90deg,#00f096,#00f0f0))",
              })}{" "}
              {wordSpan(4, "here.", {
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundImage: "var(--brand-gradient, linear-gradient(90deg,#00f096,#00f0f0))",
              })}
            </h1>

            {/* Subtitle */}
            <p
              className="text-base mb-10 mx-auto lg:mx-0 animate-fade-in-up"
              style={{
                color: "var(--text-primary)",
                lineHeight: 1.75,
                fontSize: "clamp(14px, 1.1vw, 17px)",
                maxWidth: "540px",
                animationDelay: "160ms",
              }}
            >
              Organizations developing <strong>Software as a Medical Device</strong> spend 6–12
              months in regulatory validation for every release. P4SaMD embeds compliance directly
              into your workflow; making audit-readiness the default, not the deadline.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                href="/request-demo"
                className="inline-flex items-center h-12 px-8 rounded-lg font-semibold text-sm bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
              >
                Request a Demo →
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center h-12 px-8 rounded-lg font-semibold text-sm border transition-colors hover:bg-white/5"
                style={{
                  borderColor: "var(--bg-border-strong)",
                  color: "var(--text-primary)",
                }}
              >
                Explore the Platform →
              </Link>
            </div>
          </div>

          {/* Right: floating product cards — desktop only */}
          <div className="hidden lg:block w-[480px] flex-shrink-0">
            <HeroProductFloating />
          </div>
        </div>
      </div>
    </section>
  );
}
