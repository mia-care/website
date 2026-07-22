import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";
import { useCases as useCasesEn } from "@/data/use-cases";
import { useCases as useCasesIt } from "@/data/use-cases.it";

const COPY = {
  en: {
    pill: "More Use Cases",
    heading: "Explore other ways teams use P4SaMD.",
    explore: "Explore →",
    hrefPrefix: "/use-cases",
  },
  it: {
    pill: "Altri Casi d'Uso",
    heading: "Scopri altri modi in cui i team usano P4SaMD.",
    explore: "Esplora →",
    hrefPrefix: "/it/use-cases",
  },
};

export function OtherUseCases({
  currentSlug,
  locale = "en",
}: {
  currentSlug: string;
  locale?: "en" | "it";
}) {
  const t = COPY[locale];
  const useCases = locale === "it" ? useCasesIt : useCasesEn;
  const others = useCases.filter((uc) => uc.slug !== currentSlug);

  return (
    <section
      className="py-20"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-8">{t.pill}</PillTag>
        <h2
          className="font-display font-bold mb-10"
          style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}
        >
          {t.heading}
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {others.map((uc) => (
            <Link
              key={uc.slug}
              href={`${t.hrefPrefix}/${uc.slug}`}
              className="group rounded-card p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--bg-raised)",
                border: "1px solid var(--bg-border-strong)",
              }}
            >
              <span className="label-caps" style={{ color: "var(--brand-green)", opacity: 0.7 }}>
                {uc.segment}
              </span>
              <h3
                className="heading-card leading-snug transition-colors group-hover:text-brand-green"
                style={{ color: "var(--text-primary)" }}
              >
                {uc.name}
              </h3>
              <p className="text-sm line-clamp-2" style={{ color: "var(--text-muted)" }}>
                {uc.tagline}
              </p>
              <span
                className="text-xs font-semibold mt-auto transition-colors group-hover:text-brand-green"
                style={{ color: "var(--text-secondary)" }}
              >
                {t.explore}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
