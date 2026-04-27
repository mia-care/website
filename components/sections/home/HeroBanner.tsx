import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";
import { ChaosToOrderAnimation } from "./ChaosToOrderAnimation";
import { HomepageMockup } from "./HomepageMockup";

export function HeroBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,240,150,0.09) 0%, transparent 60%)",
        paddingTop: "clamp(2.5rem, 6vw, 4.5rem)",
      }}
    >
      {/* ── Hero text row ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        {/* Eyebrow badge */}
        <div className="flex items-center gap-3 mb-7 animate-fade-in-up">
          <PillTag>
            <span
              className="inline-block w-1.5 h-1.5 rounded-full animate-pulse-dot"
              style={{ background: "var(--brand-green)" }}
            />
            AI-Native SaMD Platform
          </PillTag>
        </div>

        {/* H1 (left) + subtitle (right) — two-column row */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-14">
          <h1
            className="font-display font-bold leading-tight animate-fade-in-up lg:w-[52%]"
            style={{
              fontSize: "clamp(30px, 3.8vw, 54px)",
              letterSpacing: "-0.03em",
              animationDelay: "80ms",
            }}
          >
            The compliance bottleneck <span className="text-brand-gradient">ends here.</span>
          </h1>

          <p
            className="text-base animate-fade-in-up lg:w-[48%]"
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              animationDelay: "160ms",
              fontSize: "clamp(14px, 1.1vw, 17px)",
            }}
          >
            Organizations developing <strong>Software as a Medical Device</strong> spend 6–12 months
            in regulatory validation for every release. Mia-Care P4SaMD eliminates that bottleneck
            by embedding compliance directly into your development workflow — making audit-readiness
            the default, not the deadline.
          </p>
        </div>
      </div>

      {/* ── Full-width animation canvas ───────────────────────── */}
      <div className="w-full animate-fade-in-up" style={{ animationDelay: "220ms" }}>
        <ChaosToOrderAnimation />
      </div>

      {/* ── Product showcase ──────────────────────────────────── */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 animate-fade-in-up"
        style={{ animationDelay: "300ms" }}
      >
        <HomepageMockup />
      </div>

      {/* ── CTA buttons ───────────────────────────────────────── */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-[clamp(4rem,8vw,7rem)] animate-fade-in-up"
        style={{ animationDelay: "380ms" }}
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/request-demo"
            className="inline-flex items-center h-12 px-8 rounded-lg font-semibold text-sm bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
          >
            Request a Demo →
          </Link>
          <Link
            href="/product"
            className="inline-flex items-center h-12 px-8 rounded-lg font-semibold text-sm border transition-colors hover:bg-white/5"
            style={{
              borderColor: "var(--bg-border-strong)",
              color: "var(--text-primary)",
            }}
          >
            Explore the Platform →
          </Link>
        </div>
      </div>
    </section>
  );
}
