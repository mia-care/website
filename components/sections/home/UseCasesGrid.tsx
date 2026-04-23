import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";
import { useCases } from "@/data/use-cases";

const UC_METRICS: Record<string, { metric: string; label: string }> = {
  "greenfield-samd": { metric: "MVP in 1 month", label: "from zero to compliant" },
  "high-risk-ai-cdss": { metric: "50% faster", label: "compliance for AI releases" },
  "legacy-remediation": { metric: "60%", label: "remediation effort reduction" },
};

export function UseCasesGrid() {
  return (
    <section
      className="py-24"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--bg-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <PillTag className="mb-6">Use Cases</PillTag>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}
          >
            Built for every stage of the SaMD journey.
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Whether you're remediating legacy software, certifying an AI model, or building from
            scratch — P4SaMD has a proven path.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((uc) => {
            const metric = UC_METRICS[uc.slug];
            return (
              <div
                key={uc.slug}
                className="rounded-card flex flex-col overflow-hidden"
                style={{
                  background: "var(--bg-raised)",
                  border: "1px solid var(--bg-border)",
                  position: "relative",
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: "var(--brand-gradient)" }}
                  aria-hidden="true"
                />
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <PillTag>{uc.segment}</PillTag>
                  <h3
                    className="font-display font-bold text-xl leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {uc.name}
                  </h3>
                  <p
                    className="text-sm flex-1"
                    style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
                  >
                    {uc.tagline}
                  </p>
                  {metric && (
                    <div
                      className="flex items-baseline gap-2 mt-2 pt-4 border-t"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      <span
                        className="font-display font-bold text-2xl text-brand-gradient"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {metric.metric}
                      </span>
                      <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                        {metric.label}
                      </span>
                    </div>
                  )}
                  <Link
                    href={`/use-cases/${uc.slug}`}
                    className="mt-2 text-sm font-semibold transition-colors hover:text-brand-green"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Read Use Case →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
