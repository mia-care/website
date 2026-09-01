import type { Metadata } from "next";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PillTag } from "@/components/common/PillTag";
import { SuccessCaseCard } from "@/components/sections/success-cases/SuccessCaseCard";
import { localeAlternates } from "@/lib/seo";
import { getAllSuccessCases } from "@/lib/success-cases";

export const metadata: Metadata = {
  title: { absolute: "Casi di Successo | Mia-Care" },
  description:
    "Scopri come le organizzazioni sanitarie usano Mia-Care per costruire software medicale conforme e di alta qualità, più velocemente.",
  alternates: {
    canonical: "/it/risorse/success-cases",
    languages: localeAlternates("/it/risorse/success-cases"),
  },
};

export default function SuccessCasesPageIt() {
  const cases = getAllSuccessCases("it");

  return (
    <>
      <section
        className="pt-20 pb-16"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,240,150,0.07) 0%, transparent 55%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-6">Casi di Successo</PillTag>
          <h1
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: "clamp(36px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
          >
            Team reali. Software certificato. Risultati concreti.
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            Scopri come le organizzazioni sanitarie usano Mia-Care per rilasciare software medicale
            conforme più velocemente, con meno rischi e meno overhead.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ borderTop: "1px solid var(--bg-border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {cases.length === 0 ? (
            <p className="text-center py-24" style={{ color: "var(--text-secondary)" }}>
              Nessun caso di successo pubblicato al momento.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((item) => (
                <SuccessCaseCard key={item.slug} item={item} locale="it" />
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner locale="it" />
    </>
  );
}
