import type { UseCase } from "@/data/use-cases";

export function CaseStudyBlock({ uc }: { uc: UseCase }) {
  const { caseStudy } = uc;

  return (
    <section className="bg-bg-base py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-bg-border-strong bg-bg-surface p-px">
          <div
            className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-brand-gradient"
            aria-hidden="true"
          />
          <div className="rounded-2xl bg-bg-surface p-10 lg:p-14">
            <p className="label-caps mb-6 text-text-muted">Case Study</p>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="label-caps mb-3 text-text-muted">{caseStudy.label}</p>
                <p className="mb-6 text-base italic leading-relaxed text-text-secondary">
                  &ldquo;{caseStudy.quote}&rdquo;
                </p>
                <h3 className="font-display mb-4 text-lg font-semibold text-text-primary">Scope</h3>
                <ul className="space-y-2">
                  {caseStudy.scope.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-text-secondary"
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-green"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display mb-6 text-lg font-semibold text-text-primary">
                  Measured outcomes from the field.
                </h3>
                <div className="flex flex-col gap-5">
                  {caseStudy.results.map((result) => (
                    <div
                      key={result.metric}
                      className="flex items-start gap-4 rounded-xl border border-bg-border bg-bg-raised p-5"
                    >
                      <span className="font-display text-brand-gradient text-2xl font-bold shrink-0">
                        {result.metric}
                      </span>
                      <span className="text-sm leading-relaxed text-text-secondary">
                        {result.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
