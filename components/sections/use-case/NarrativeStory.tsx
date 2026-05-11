"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PillTag } from "@/components/common/PillTag";
import type { UseCase } from "@/data/use-cases";

const STEPS = [
  { key: "problem" as const, label: "The Problem", short: "Problem", bg: "var(--bg-surface)" },
  { key: "need" as const, label: "The Need", short: "Need", bg: "var(--bg-base)" },
  { key: "solution" as const, label: "The Solution", short: "Solution", bg: "var(--bg-surface)" },
] as const;

export function NarrativeStory({ uc }: { uc: UseCase }) {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([null, null, null]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(i);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => {
      for (const o of observers) o.disconnect();
    };
  }, []);

  return (
    <div>
      {/* Sticky step indicator — full labels on sm+, numbers on mobile */}
      <div
        className="sticky z-30"
        style={{
          top: "calc(var(--banner-h, 0px) + 4rem)",
          background: "rgba(10,11,16,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--bg-border)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-10">
            {STEPS.map((step, i) => (
              <button
                key={step.key}
                type="button"
                onClick={() =>
                  sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })
                }
                className="relative h-full px-3 sm:px-4 text-xs font-semibold tracking-wide transition-colors"
                style={{ color: activeStep === i ? "var(--text-primary)" : "var(--text-muted)" }}
              >
                <span className="hidden sm:inline">{step.label}</span>
                <span className="sm:hidden">{step.short}</span>
                {activeStep === i && (
                  <span
                    className="absolute bottom-0 inset-x-0 h-px"
                    style={{
                      background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
                    }}
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sections with timeline */}
      {STEPS.map((step, i) => (
        <section
          key={step.key}
          ref={(el) => {
            sectionRefs.current[i] = el;
          }}
          className="py-20"
          style={{
            background: step.bg,
            borderTop: "1px solid var(--bg-border)",
            scrollMarginTop: "calc(var(--banner-h, 0px) + 6.5rem)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-[2rem_1fr] lg:gap-8 items-start">
              {/* Timeline column — desktop only */}
              <div className="hidden lg:flex flex-col items-center self-stretch" aria-hidden="true">
                <div
                  className="flex-1 w-px"
                  style={{ background: i === 0 ? "transparent" : "rgba(255,255,255,0.1)" }}
                />
                <div
                  className="shrink-0 rounded-full border-2 my-1 transition-all duration-500"
                  style={{
                    width: 10,
                    height: 10,
                    borderColor: activeStep === i ? "var(--brand-green)" : "rgba(255,255,255,0.2)",
                    background: activeStep === i ? "var(--brand-green)" : "transparent",
                    boxShadow: activeStep === i ? "0 0 10px rgba(0,240,150,0.5)" : "none",
                  }}
                />
                <div
                  className="flex-1 w-px"
                  style={{ background: i === 2 ? "transparent" : "rgba(255,255,255,0.1)" }}
                />
              </div>

              {/* Content */}
              <div>
                <PillTag className="mb-6">{step.label}</PillTag>
                <h2
                  className="font-display font-bold mb-6"
                  style={{ fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-0.025em" }}
                >
                  {uc[step.key].heading}
                </h2>
                <div
                  className="space-y-4 text-base"
                  style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
                >
                  {uc[step.key].body.split("\n\n").map((para) => (
                    <p key={para.slice(0, 40)}>{para}</p>
                  ))}
                </div>

                {step.key === "solution" && (
                  <div className="flex flex-wrap gap-3 mt-10">
                    <Link
                      href="/request-demo"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-transform hover:-translate-y-px active:translate-y-0"
                      style={{
                        background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
                        color: "var(--bg-base)",
                        boxShadow: "0 0 18px rgba(0,240,150,0.22), 0 2px 8px rgba(0,0,0,0.35)",
                      }}
                    >
                      Request a Demo →
                    </Link>
                    <Link
                      href="/resources/mia-care-product-demo"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors hover:text-brand-green"
                      style={{
                        color: "var(--text-secondary)",
                        border: "1px solid var(--bg-border-strong)",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M3 2l9 5-9 5V2z" />
                      </svg>
                      Watch Product Demo
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
