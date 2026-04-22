import Link from "next/link";
import { useCases } from "@/data/use-cases";

const useCaseMetrics: Record<string, string> = {
  "greenfield-samd": "MVP in 1 month",
  "high-risk-ai-cdss": "50% faster compliance",
  "legacy-remediation": "60% effort reduction",
};

export function UseCasesGrid() {
  return (
    <section className="bg-bg-base py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="font-display mb-4 text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
            Built for every stage of the SaMD journey.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-secondary">
            Whether you're remediating legacy software, certifying an AI model, or building from
            scratch, P4SaMD has a proven path.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {useCases.map((uc) => (
            <Link
              key={uc.slug}
              href={`/use-cases/${uc.slug}`}
              className="group relative flex flex-col gap-4 rounded-xl border border-bg-border bg-bg-surface p-8 transition-colors hover:border-bg-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
            >
              <div
                className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-brand-gradient opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="label-caps text-text-muted">{uc.segment}</span>
              <h3 className="font-display text-xl font-bold text-text-primary">{uc.name}</h3>
              <p className="text-sm leading-relaxed text-text-secondary line-clamp-3">
                {uc.tagline}
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-bg-border pt-4">
                <span className="text-sm font-semibold text-brand-green">
                  {useCaseMetrics[uc.slug]}
                </span>
                <span className="text-sm font-medium text-text-secondary transition-colors group-hover:text-text-primary">
                  Read Use Case →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
