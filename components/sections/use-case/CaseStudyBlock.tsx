import { PillTag } from "@/components/common/PillTag";
import type { UseCase } from "@/data/use-cases";

export function CaseStudyBlock({ uc }: { uc: UseCase }) {
  const { caseStudy } = uc;

  return (
    <section
      className="py-20"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-8">Case Study</PillTag>

        {/* Quote */}
        <div
          className="rounded-card p-8 mb-10"
          style={{
            background: "var(--bg-raised)",
            border: "1px solid var(--bg-border-strong)",
            position: "relative",
          }}
        >
          <span
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: "var(--brand-gradient)" }}
            aria-hidden="true"
          />
          <p className="label-caps mb-4">{caseStudy.label}</p>
          <blockquote
            className="text-base italic"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            "{caseStudy.quote}"
          </blockquote>
        </div>

        {/* Scope */}
        <div className="mb-12">
          <h3
            className="font-display font-semibold text-xl mb-5"
            style={{ color: "var(--text-primary)" }}
          >
            Scope
          </h3>
          <ul className="space-y-3">
            {caseStudy.scope.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs"
                  style={{ background: "rgba(0,240,150,0.1)", color: "var(--brand-green)" }}
                >
                  ✓
                </span>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div>
          <h3
            className="font-display font-semibold text-xl mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Measured outcomes from the field.
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudy.results.map((r) => (
              <div
                key={r.label}
                className="rounded-card p-5"
                style={{
                  background: "rgba(0,240,150,0.04)",
                  border: "1px solid rgba(0,240,150,0.12)",
                }}
              >
                <div
                  className="font-display font-bold text-2xl text-brand-gradient mb-2"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {r.metric}
                </div>
                <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
