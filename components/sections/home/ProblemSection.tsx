import { PillTag } from "@/components/common/PillTag";

export function ProblemSection() {
  return (
    <section className="py-24" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: label + headline */}
          <div>
            <PillTag className="mb-6">The Problem</PillTag>
            <h2
              className="font-display font-bold leading-tight"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}
            >
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
          </div>
        </div>
      </div>
    </section>
  );
}
