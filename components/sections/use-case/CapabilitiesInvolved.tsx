import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";
import { capabilities as capabilitiesEn } from "@/data/capabilities";
import { capabilities as capabilitiesIt } from "@/data/capabilities.it";
import type { UseCase } from "@/data/use-cases";

const COPY = {
  en: {
    pill: "Capabilities Involved",
    heading: "The P4SaMD capabilities that power this use case.",
    explore: "Explore →",
    hrefPrefix: "/capabilities",
  },
  it: {
    pill: "Capability Coinvolte",
    heading: "Le capability P4SaMD che alimentano questo caso d'uso.",
    explore: "Esplora →",
    hrefPrefix: "/it/capabilities",
  },
};

export function CapabilitiesInvolved({ uc, locale = "en" }: { uc: UseCase; locale?: "en" | "it" }) {
  const t = COPY[locale];
  const capabilities = locale === "it" ? capabilitiesIt : capabilitiesEn;
  const involved = capabilities.filter((c) => uc.capabilities.includes(c.slug));

  return (
    <section className="py-20" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-8">{t.pill}</PillTag>
        <h2
          className="font-display font-bold mb-10"
          style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}
        >
          {t.heading}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {involved.map((cap) => (
            <Link
              key={cap.slug}
              href={`${t.hrefPrefix}/${cap.slug}`}
              className="group rounded-card p-5 flex flex-col gap-2 transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--bg-border)",
              }}
            >
              <span className="label-caps" style={{ color: "var(--brand-green)", opacity: 0.7 }}>
                {cap.code}
              </span>
              <h3
                className="font-display font-semibold text-sm leading-snug group-hover:text-brand-green transition-colors"
                style={{ color: "var(--text-primary)" }}
              >
                {cap.name}
              </h3>
              <span
                className="text-xs font-semibold mt-auto transition-colors group-hover:text-brand-green"
                style={{ color: "var(--text-muted)" }}
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
