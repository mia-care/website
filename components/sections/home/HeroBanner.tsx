"use client";

import Link from "next/link";
import { HelixCanvas } from "./HelixCanvas";
import { HeroVideo } from "./HeroVideo";

// The helix keeps the height band of the previous hero, so it sits behind the copy as before
const HELIX_BAND = "clamp(500px, 65vh, 720px)";

// Words in the H1, one span each. EN: "ends here." gets the brand gradient.
// IT: "La compliance non frena più i tuoi rilasci.", the gradient is on "non frena più".
const GRADIENT_WORD: React.CSSProperties = {
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  backgroundImage: "var(--brand-gradient, linear-gradient(90deg,#00f096,#00f0f0))",
};

const COPY = {
  en: {
    subtitle: (
      <>
        Organizations developing <strong>Software as a Medical Device</strong> spend 6–12 months in
        regulatory validation for every release. P4SaMD embeds compliance directly into your
        workflow; making audit-readiness the default, not the deadline.
      </>
    ),
    ctaDemo: { label: "Request a Demo →", href: "/request-demo" },
    ctaExplore: { label: "Explore the Platform →", href: "/product" },
  },
  it: {
    subtitle: (
      <>
        Le organizzazioni che sviluppano <strong>Software as a Medical Device</strong> passano 6-12
        mesi in validazione regolatoria per ogni rilascio. P4SaMD porta la compliance dentro il tuo
        workflow, così sei pronto per l'audit ogni giorno, non solo quando arriva la scadenza.
      </>
    ),
    ctaDemo: { label: "Richiedi una Demo →", href: "/it/richiedi-demo" },
    ctaExplore: { label: "Esplora la Piattaforma →", href: "/it/prodotto" },
  },
};

export function HeroBanner({ locale = "en" }: { locale?: "en" | "it" }) {
  const t = COPY[locale];
  function wordSpan(_index: number, text: string, extraStyle?: React.CSSProperties) {
    return <span style={{ display: "inline-block", ...extraStyle }}>{text}</span>;
  }

  return (
    <section className="relative overflow-hidden" style={{ background: "#000" }}>
      {/* ── Helix animation, faded out at the bottom of its band ───────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: HELIX_BAND,
          zIndex: 0,
          maskImage: "linear-gradient(to bottom, #000 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000 70%, transparent 100%)",
        }}
      >
        <HelixCanvas style={{ height: "100%" }} />
      </div>

      {/* ── Scrim — darkens the copy zone so all text stays legible ─────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: HELIX_BAND,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 60%, transparent 88%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Centered copy, then the video frame resting on the logo marquee ── */}
      <div
        className="relative w-full max-w-7xl mx-auto px-6 lg:px-12"
        style={{
          zIndex: 2,
          // Spacing follows viewport height too, so the video frame peeks above the fold on laptops
          paddingTop: "clamp(2rem, 6vh, 4rem)",
        }}
      >
        <div className="flex flex-col items-center">
          <div className="w-full text-center">
            {/* H1 — each word is independently repulsable */}
            <h1
              className="font-display font-bold leading-tight mb-6 mx-auto text-balance animate-fade-in-up"
              style={{
                fontSize: "clamp(34px, min(5vw, 8vh), 64px)",
                // In em, so it scales with the font: always two lines on desktop, also on short
                // laptop screens where the smaller font would fit the whole title on one line.
                // Must stay wider than the longest line ("non frena più i tuoi rilasci." ≈ 13.3em).
                maxWidth: "15em",
                letterSpacing: "-0.03em",
                animationDelay: "80ms",
              }}
            >
              {locale === "it" ? (
                <>
                  {/* "non frena più" is one span: it wraps as a unit and the gradient runs across it */}
                  {wordSpan(0, "La")} {wordSpan(1, "compliance")}{" "}
                  {wordSpan(2, "non frena più", GRADIENT_WORD)} {wordSpan(3, "i")}{" "}
                  {wordSpan(4, "tuoi")} {wordSpan(5, "rilasci.")}
                </>
              ) : (
                <>
                  {wordSpan(0, "The")} {wordSpan(1, "compliance")} {wordSpan(2, "bottleneck")}{" "}
                  {wordSpan(3, "ends", GRADIENT_WORD)} {wordSpan(4, "here.", GRADIENT_WORD)}
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p
              className="text-base mb-10 mx-auto animate-fade-in-up"
              style={{
                color: "var(--text-primary)",
                lineHeight: 1.75,
                fontSize: "clamp(14px, 1.1vw, 17px)",
                maxWidth: "620px",
                animationDelay: "160ms",
              }}
            >
              {t.subtitle}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                href={t.ctaDemo.href}
                className="inline-flex items-center h-12 px-8 rounded-lg font-semibold text-sm bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
              >
                {t.ctaDemo.label}
              </Link>
              <Link
                href={t.ctaExplore.href}
                className="inline-flex items-center h-12 px-8 rounded-lg font-semibold text-sm border transition-colors hover:bg-white/5"
                style={{
                  borderColor: "rgba(255,255,255,0.28)",
                  color: "var(--text-primary)",
                }}
              >
                {t.ctaExplore.label}
              </Link>
            </div>
          </div>

          {/* Video in a glass browser frame, cut at 3/4 so it rests on the logo marquee */}
          <div
            className="w-full flex justify-center animate-fade-in-up"
            style={{ marginTop: "clamp(2rem, 5vh, 3.5rem)", animationDelay: "320ms" }}
          >
            <HeroVideo locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
