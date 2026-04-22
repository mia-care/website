import Link from "next/link";
import { capabilities } from "@/data/capabilities";

export function CapabilitiesGrid() {
  return (
    <section className="bg-bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="font-display mb-4 text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
            Eight capabilities. <span className="text-brand-gradient">One Platform.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-secondary">
            P4SaMD orchestrates your entire SDLC — from requirements to release — with regulatory
            compliance enforced at every stage.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <Link
              key={cap.slug}
              href={`/capabilities/${cap.slug}`}
              className="group relative flex flex-col gap-3 rounded-xl border border-bg-border bg-bg-base p-6 transition-colors hover:border-bg-border-strong hover:bg-bg-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-surface"
            >
              <div
                className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-brand-gradient opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="label-caps text-brand-green">{cap.code}</span>
              <h3 className="font-display text-base font-semibold text-text-primary">{cap.name}</h3>
              <p className="text-sm leading-relaxed text-text-secondary line-clamp-3">
                {cap.description}
              </p>
              <span className="mt-auto pt-2 text-sm font-medium text-brand-green transition-gap group-hover:gap-2">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
