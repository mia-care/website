import Link from "next/link";

const COPY = {
  en: {
    heading: (
      <>
        Ready to ship <br />
        compliant software faster?
      </>
    ),
    body: "See how P4SaMD fits into your development workflow.",
    cta: "Request a Demo →",
    ctaHref: "/request-demo",
  },
  it: {
    heading: (
      <>
        Pronto a rilasciare <br />
        software conforme più velocemente?
      </>
    ),
    body: "Scopri come P4SaMD si integra nel tuo workflow di sviluppo.",
    cta: "Richiedi una Demo →",
    ctaHref: "/it/richiedi-demo",
  },
};

export function CtaBanner({ locale = "en" }: { locale?: "en" | "it" }) {
  const t = COPY[locale];
  return (
    <section
      className="relative overflow-hidden py-14 md:py-24"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--bg-border)",
      }}
    >
      {/* Gradient top border */}
      <span
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--brand-gradient)" }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,240,150,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="heading-section mb-4">{t.heading}</h2>
        <p className="text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
          {t.body}
        </p>
        <Link
          href={t.ctaHref}
          className="inline-flex items-center h-13 px-8 rounded-lg font-semibold text-base bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
          style={{ height: 52 }}
        >
          {t.cta}
        </Link>
      </div>
    </section>
  );
}
