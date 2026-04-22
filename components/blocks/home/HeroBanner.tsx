import Link from "next/link";
import { HelixSvg } from "@/components/blocks/shared/HelixSvg";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-bg-base pt-32 pb-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,240,150,0.12) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <HelixSvg className="absolute -right-8 top-0 h-full w-48 opacity-[0.06]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-pill border border-brand-green/18 bg-brand-green/8 px-4 py-1.5">
            <span
              className="size-1.5 rounded-full bg-brand-green animate-pulse-dot"
              aria-hidden="true"
            />
            <span className="label-caps text-brand-green">AI-Native SaMD Platform</span>
          </span>
        </div>

        <h1 className="font-display mb-6 text-4xl font-bold text-text-primary md:text-5xl lg:text-7xl">
          The compliance <span className="text-brand-gradient">bottleneck</span> ends here.
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
          Organizations developing Software as a Medical Device spend approx 6–12 months in
          regulatory validation for every software release. Mia-Care P4SaMD eliminates that
          bottleneck by embedding compliance directly into your development workflow, making
          audit-readiness the default, not the deadline.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/request-demo"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-gradient px-6 py-3 text-sm font-semibold text-bg-base transition-opacity hover:opacity-90"
          >
            Request a Demo →
          </Link>
          <Link
            href="/product"
            className="inline-flex items-center gap-2 rounded-lg border border-bg-border-strong px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-bg-raised"
          >
            Explore the Platform →
          </Link>
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-5xl px-6">
        <div className="relative rounded-2xl border border-bg-border-strong bg-bg-surface p-px">
          <div
            className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-brand-gradient"
            aria-hidden="true"
          />
          <div className="flex h-64 items-center justify-center rounded-2xl bg-bg-surface">
            <p className="label-caps text-text-muted">Product UI mockup</p>
          </div>
        </div>
      </div>
    </section>
  );
}
