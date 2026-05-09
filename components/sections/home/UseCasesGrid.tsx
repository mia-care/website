import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";
import { useCases } from "@/data/use-cases";

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

        <style>{`
          .uc-card { transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease; }
          .uc-card:hover { border-color: var(--bg-border-strong); box-shadow: 0 8px 28px rgba(0,0,0,0.18); transform: translateY(-2px); }
          .uc-card:hover .uc-card-cta { color: var(--brand-green); }
          .uc-card-cta::after { content: ''; position: absolute; inset: 0; z-index: 1; border-radius: inherit; }
          .uc-card-cta:focus-visible { outline: 2px solid var(--brand-green); outline-offset: 3px; border-radius: 4px; }
        `}</style>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((uc) => {
            const result = uc.caseStudy.results[0];
            return (
              <div
                key={uc.slug}
                className="uc-card rounded-card flex flex-col overflow-hidden"
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
                  {result && (
                    <div
                      className="flex items-baseline gap-2 mt-2 pt-4 border-t"
                      style={{ borderColor: "var(--bg-border)" }}
                    >
                      <span
                        className="font-display font-bold text-2xl shrink-0"
                        style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
                      >
                        {result.metric}
                      </span>
                      <span className="text-sm line-clamp-1" style={{ color: "var(--text-muted)" }}>
                        {result.label}
                      </span>
                    </div>
                  )}
                  <Link
                    href={`/use-cases/${uc.slug}`}
                    className="uc-card-cta mt-2 text-sm font-semibold transition-colors"
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
