import { PillTag } from "@/components/common/PillTag";
import { RichText } from "@/components/common/RichText";
import type { UseCase } from "@/data/use-cases";

const COPY = {
  en: { updated: "Last updated:", dateLocale: "en-GB" },
  it: { updated: "Ultimo aggiornamento:", dateLocale: "it-IT" },
};

export function UseCaseHero({ uc, locale = "en" }: { uc: UseCase; locale?: "en" | "it" }) {
  const t = COPY[locale];
  const updated = uc.lastUpdated
    ? new Date(`${uc.lastUpdated}T00:00:00Z`).toLocaleDateString(t.dateLocale, {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      })
    : null;

  return (
    <section
      className="relative overflow-hidden pt-20 pb-16"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,240,150,0.07) 0%, transparent 55%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-6">{uc.segment}</PillTag>
        <h1
          className="font-display font-bold mb-4 leading-tight"
          style={{ fontSize: "clamp(36px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
        >
          {uc.name}
        </h1>
        {updated && uc.lastUpdated && (
          <p className="mb-6 text-sm" style={{ color: "var(--text-muted)" }}>
            {t.updated} <time dateTime={uc.lastUpdated}>{updated}</time>
          </p>
        )}
        {uc.intro ? (
          <div className="max-w-3xl space-y-4 text-lg" style={{ lineHeight: 1.75 }}>
            {uc.intro.map((para, i) => (
              <p
                key={para.slice(0, 40)}
                style={{
                  color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)",
                  fontWeight: i === 0 ? 600 : 400,
                }}
              >
                <RichText text={para} />
              </p>
            ))}
          </div>
        ) : (
          <p
            className="max-w-2xl text-lg"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            {uc.tagline}
          </p>
        )}
      </div>
    </section>
  );
}
