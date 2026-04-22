import Link from "next/link";
import { HelixSvg } from "@/components/blocks/shared/HelixSvg";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-bg-base py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,240,150,0.10) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <HelixSvg className="absolute -left-8 bottom-0 h-full w-40 opacity-[0.06]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-2xl border border-bg-border-strong bg-bg-surface p-px">
          <div
            className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-brand-gradient"
            aria-hidden="true"
          />
          <div className="rounded-2xl bg-bg-surface px-8 py-14">
            <h2 className="font-display mb-4 text-3xl font-bold text-text-primary md:text-4xl">
              Ready to ship compliant software faster?
            </h2>
            <p className="mb-8 text-base text-text-secondary">
              Join the teams building the next generation of regulated medical software.
            </p>
            <Link
              href="/request-demo"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-gradient px-8 py-3.5 text-sm font-semibold text-bg-base transition-opacity hover:opacity-90"
            >
              Request a Demo →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
