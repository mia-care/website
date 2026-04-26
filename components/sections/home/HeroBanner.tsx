import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";
import { HomepageMockup } from "./HomepageMockup";

export function HeroBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,240,150,0.09) 0%, transparent 60%)",
        paddingTop: "clamp(3rem, 8vw, 5rem)",
        paddingBottom: "clamp(4rem, 8vw, 7rem)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-10">
          {/* Left column — text + CTAs (45%) */}
          <div className="lg:w-[45%]">
            {/* Eyebrow badge */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
              <PillTag>
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full animate-pulse-dot"
                  style={{ background: "var(--brand-green)" }}
                />
                AI-Native SaMD Platform
              </PillTag>
            </div>

            {/* H1 */}
            <h1
              className="font-display font-bold mb-6 leading-tight animate-fade-in-up"
              style={{
                fontSize: "clamp(44px, 5.2vw, 72px)",
                letterSpacing: "-0.035em",
                animationDelay: "80ms",
              }}
            >
              The compliance bottleneck <span className="text-brand-gradient">ends here.</span>
            </h1>

            {/* Sub */}
            <p
              className="text-lg mb-10 animate-fade-in-up"
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                animationDelay: "160ms",
              }}
            >
              Organizations developing <strong>Software as a Medical Device</strong> spend 6–12
              months in regulatory validation for every release. Mia-Care P4SaMD eliminates that
              bottleneck by embedding compliance directly into your development workflow; making
              audit-readiness the default, not the deadline.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                href="/request-demo"
                className="inline-flex items-center h-12 px-7 rounded-lg font-semibold text-sm bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
              >
                Request a Demo →
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center h-12 px-7 rounded-lg font-semibold text-sm border transition-colors hover:bg-white/5"
                style={{
                  borderColor: "var(--bg-border-strong)",
                  color: "var(--text-primary)",
                }}
              >
                Explore the Platform →
              </Link>
            </div>
          </div>

          {/* Right column — animated mockup (55%) */}
          <div className="lg:w-[55%]">
            <HomepageMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
