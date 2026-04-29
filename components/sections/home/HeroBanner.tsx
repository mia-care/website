import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";
import { HelixCanvas } from "./HelixCanvas";

export function HeroBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "clamp(500px, 65vh, 720px)",
        backgroundColor: "#000",
        background:
          "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(0,240,150,0.09) 0%, transparent 50%)",
      }}
    >
      {/* ── Animation fills the entire hero ────────────────────────────── */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <HelixCanvas style={{ height: "100%" }} />
      </div>

      {/* ── Scrim — darkens the copy zone so all text stays legible ─────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Copy — overlaid, fully legible on clean dark space above helix  */}
      <div
        className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          zIndex: 2,
          paddingTop: "clamp(3.5rem, 8vw, 6rem)",
          paddingBottom: "clamp(2rem, 4vw, 3rem)",
        }}
      >
        {/* Eyebrow badge */}
        <div className="flex justify-center mb-7 animate-fade-in-up">
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
          className="font-display font-bold leading-tight mb-6 animate-fade-in-up"
          style={{
            fontSize: "clamp(34px, 5vw, 64px)",
            letterSpacing: "-0.03em",
            animationDelay: "80ms",
          }}
        >
          The compliance bottleneck <span className="text-brand-gradient">ends here.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base mb-10 mx-auto animate-fade-in-up"
          style={{
            color: "var(--text-primary)",
            lineHeight: 1.75,
            fontSize: "clamp(14px, 1.1vw, 17px)",
            maxWidth: "540px",
            animationDelay: "160ms",
          }}
        >
          Organizations developing <strong>Software as a Medical Device</strong> spend 6–12 months
          in regulatory validation for every release. P4SaMD embeds compliance directly into your
          workflow; making audit-readiness the default, not the deadline.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "240ms" }}
        >
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
