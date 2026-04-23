import Link from "next/link";
import { HelixSvg } from "@/components/blocks/shared/HelixSvg";
import { PillTag } from "@/components/blocks/shared/PillTag";

export function HeroBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,240,150,0.09) 0%, transparent 60%)",
        paddingTop: "clamp(5rem, 12vw, 9rem)",
        paddingBottom: "clamp(4rem, 8vw, 7rem)",
      }}
    >
      {/* Decorative helix */}
      <div className="absolute right-0 top-0 hidden lg:block pointer-events-none select-none">
        <HelixSvg width={340} height={700} opacity={0.07} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
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
            className="text-lg max-w-2xl mb-10 animate-fade-in-up"
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              animationDelay: "160ms",
            }}
          >
            Organizations developing Software as a Medical Device spend 6–12 months in regulatory
            validation for every release. Mia-Care P4SaMD eliminates that bottleneck by embedding
            compliance directly into your development workflow — making audit-readiness the default,
            not the deadline.
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

        {/* Product mockup placeholder */}
        <div
          className="mt-16 lg:mt-20 rounded-card overflow-hidden"
          style={{
            border: "1px solid var(--bg-border-strong)",
            background: "var(--bg-surface)",
            maxWidth: 860,
          }}
        >
          {/* Mock UI header */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ borderColor: "var(--bg-border)", background: "var(--bg-raised)" }}
          >
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="mx-auto text-xs" style={{ color: "var(--text-muted)" }}>
              P4SaMD — SDLC Dashboard
            </span>
          </div>
          {/* Mock content */}
          <div className="p-6 grid grid-cols-3 gap-4">
            {[
              { label: "Requirements", value: "124", status: "traced", color: "#00F096" },
              { label: "Risks Mitigated", value: "47 / 47", status: "closed", color: "#00F0F0" },
              { label: "DHF Completeness", value: "100%", status: "ready", color: "#00F096" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg p-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--bg-border)",
                }}
              >
                <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>
                  {item.label}
                </div>
                <div
                  className="text-2xl font-bold font-display"
                  style={{
                    background: `linear-gradient(90deg, ${item.color}, #00F0F0)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.value}
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 pb-6 flex flex-col gap-2">
            {[
              "SRS v2.3 — Auto-generated from 124 linked requirements",
              "Risk Management File — All items traced to verification",
              "IEC 62304 Workflow — Class B lifecycle active",
            ].map((line) => (
              <div
                key={line}
                className="flex items-center gap-3 px-3 py-2 rounded"
                style={{
                  background: "rgba(0,240,150,0.04)",
                  border: "1px solid rgba(0,240,150,0.1)",
                }}
              >
                <span style={{ color: "var(--brand-green)" }}>✓</span>
                <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
