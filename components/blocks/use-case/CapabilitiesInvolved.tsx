import Link from "next/link";
import { capabilities } from "@/data/capabilities";
import type { UseCase } from "@/data/use-cases";

export function CapabilitiesInvolved({ uc }: { uc: UseCase }) {
  const involved = uc.capabilities
    .map((slug) => capabilities.find((c) => c.slug === slug))
    .filter(Boolean);

  return (
    <section className="bg-bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display mb-10 text-2xl font-bold text-text-primary md:text-3xl">
          The P4SaMD capabilities that power this use case.
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {involved.map((cap) => (
            <Link
              key={cap!.slug}
              href={`/capabilities/${cap!.slug}`}
              className="group relative flex flex-col gap-2 rounded-xl border border-bg-border bg-bg-base p-5 transition-colors hover:border-bg-border-strong hover:bg-bg-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
            >
              <div
                className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-brand-gradient opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="label-caps text-brand-green">{cap!.code}</span>
              <h3 className="font-display text-sm font-semibold text-text-primary">{cap!.name}</h3>
              <span className="mt-auto pt-2 text-xs font-medium text-brand-green">Explore →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
