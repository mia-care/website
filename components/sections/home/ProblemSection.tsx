"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PillTag } from "@/components/common/PillTag";

function useReveal(delay = 0) {
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

  return { ref, visible };
}

export function ProblemSection() {
  const left = useReveal(0);
  const right = useReveal(150);

  const revealStyle = (visible: boolean): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(14px)",
    transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
  });

  return (
    <section
      className="relative py-14 md:py-24 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 0% 50%, rgba(0,240,150,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: label + headline */}
          <div ref={left.ref} style={revealStyle(left.visible)}>
            <PillTag className="mb-6">The Problem</PillTag>
            <h2 className="heading-section">
              Compliance is slowing your team down.
              <br />
              It shouldn't.
            </h2>
          </div>

          {/* Right: description */}
          <div
            ref={right.ref}
            className="space-y-4 text-base lg:pt-2"
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              ...revealStyle(right.visible),
            }}
          >
            <p>
              Building software-as-a-medical-device means navigating regulations, design control,
              risk traceability, and audit documentation, all while shipping on time. Most teams
              manage this across disconnected tools: Jira for tasks, GitHub for code, Word for
              documentation, Excel for traceability matrices. Every handoff between these systems is
              manual, error-prone, and invisible to auditors until it's too late.
            </p>
            <p>
              The result is predictable. Compliance becomes a last-minute scramble, releases slip,
              and regulatory submissions arrive with gaps that take weeks to resolve. Speed and
              compliance feel like a tradeoff.
            </p>
            <Link
              href="/product"
              className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:text-brand-green"
              style={{ color: "var(--text-primary)" }}
            >
              See how P4SaMD fixes this →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
