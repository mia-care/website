import Link from "next/link";
import type { Capability } from "@/data/capabilities";
import { useCases } from "@/data/use-cases";

export function RelatedUseCases({ cap }: { cap: Capability }) {
  const related = cap.relatedUseCases
    .map((slug) => useCases.find((u) => u.slug === slug))
    .filter(Boolean);

  if (related.length === 0) return null;

  return (
    <section className="bg-bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display mb-10 text-2xl font-bold text-text-primary md:text-3xl">
          See it in action.
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {related.map((uc) => (
            <Link
              key={uc!.slug}
              href={`/use-cases/${uc!.slug}`}
              className="group relative flex flex-col gap-3 rounded-xl border border-bg-border bg-bg-base p-6 transition-colors hover:border-bg-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
            >
              <div
                className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-brand-gradient opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="label-caps text-text-muted">{uc!.segment}</span>
              <h3 className="font-display text-lg font-bold text-text-primary">{uc!.name}</h3>
              <span className="mt-auto pt-2 text-sm font-medium text-brand-green">
                Read Use Case →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
