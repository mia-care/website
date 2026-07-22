import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";
import { COMPLIANCE_STANDARDS } from "@/data/nav";

const COPY = {
  en: {
    heading: "Compliant with EU and US Regulations",
    cta: { label: "View full compliance coverage →", href: "/product" },
  },
  it: {
    heading: "Conforme alle Normative UE e USA",
    cta: { label: "Vedi la copertura completa della compliance →", href: "/it/prodotto" },
  },
};

export function ComplianceStrip({ locale = "en" }: { locale?: "en" | "it" }) {
  const t = COPY[locale];
  return (
    <section
      className="py-16"
      style={{ background: "var(--bg-base)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="label-caps mb-8">{t.heading}</h2>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {COMPLIANCE_STANDARDS.map((std) => (
            <PillTag key={std}>{std}</PillTag>
          ))}
        </div>
        <Link
          href={t.cta.href}
          className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:text-brand-green"
          style={{ color: "var(--text-primary)" }}
        >
          {t.cta.label}
        </Link>
      </div>
    </section>
  );
}
