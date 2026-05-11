import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";

export function ProblemSection() {
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
          <div>
            <PillTag className="mb-6">The Problem</PillTag>
            <h2 className="heading-section">
              The gap between engineering and compliance is costing you.
            </h2>
          </div>

          {/* Right: description */}
          <div
            className="space-y-4 text-base lg:pt-2"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            <p>
              Most organizations still rely on a fragmented "tool soup": Jira or any ALMs for tasks,
              Word for documentation, Excel for traceability, GitHub for code. Every handoff between
              these disconnected systems is a manual, error-prone process that costs days and
              gradually increases audit risk.
            </p>
            <p>
              The result: compliance becomes a last-minute effort rather than an ongoing discipline,
              and product launches slip by months. The hidden cost goes beyond time — it shows up as
              developer burnout, unexpected regulatory rejections, and audit findings that only
              emerge after inconsistency has been building for months.
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
