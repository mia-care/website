"use client";

import { useEffect, useRef, useState } from "react";
import type { CaseStudyResult } from "@/data/use-cases";

function parseMetric(raw: string): { prefix: string; value: number; suffix: string } | null {
  const match = raw.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  return { prefix: match[1], value: parseFloat(match[2]), suffix: match[3] };
}

function MetricCard({ result, index }: { result: CaseStudyResult; index: number }) {
  const isPulse = parseMetric(result.metric)?.value === 0;
  const [display, setDisplay] = useState(result.metric);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parsed = parseMetric(result.metric);
    const shouldCountUp = parsed !== null && parsed.value > 3;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          setVisible(true);
          if (shouldCountUp && parsed) {
            const DURATION = 1500;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / DURATION, 1);
              const eased = 1 - (1 - t) ** 3;
              setDisplay(`${parsed.prefix}${Math.round(parsed.value * eased)}${parsed.suffix}`);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [result.metric]);

  return (
    <div
      ref={ref}
      className="rounded-card p-5 transition-all duration-500"
      style={{
        background: "rgba(0,240,150,0.04)",
        border: "1px solid rgba(0,240,150,0.12)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div
        className={`font-display font-bold text-2xl text-brand-gradient mb-2${isPulse ? " animate-pulse" : ""}`}
        style={{ letterSpacing: "-0.02em" }}
      >
        {display}
      </div>
      <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
        {result.label}
      </div>
    </div>
  );
}

export function ResultsGrid({ results }: { results: CaseStudyResult[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {results.map((r, i) => (
        <MetricCard key={r.label} result={r} index={i} />
      ))}
    </div>
  );
}
