import { GlobeHemisphereWest, Leaf, Scales } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { CtaBanner } from "@/components/common/CtaBanner";
import { GenderEqualityCertification } from "@/components/common/GenderEqualityCertification";
import { PillTag } from "@/components/common/PillTag";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Sostenibilità: tecnologia responsabile | Mia-Care",
  },
  alternates: { canonical: "/it/sostenibilita", languages: localeAlternates("/it/sostenibilita") },
  description:
    "Scopri l'impegno di Mia-Care per lo sviluppo sostenibile sui pilastri economico, ambientale e sociale, in linea con l'Agenda 2030 dell'ONU.",
};

const PILLARS = [
  {
    icon: <Scales size={24} weight="duotone" />,
    title: "Parità di genere e inclusione",
    body: "Il Gruppo Mia e Mia-Care promuovono un ambiente di lavoro inclusivo ed equo. Lavoriamo per la parità di genere, consapevoli del significativo gender gap nell'accesso a settori scientifici come l'informatica. Le nostre politiche interne su assunzioni, retribuzione, promozioni e formazione danno le stesse opportunità a tutti i dipendenti.",
  },
  {
    icon: <GlobeHemisphereWest size={24} weight="duotone" />,
    title: "Agenda 2030 dell'ONU",
    body: "L'Agenda 2030, adottata dai membri delle Nazioni Unite per raggiungere 17 obiettivi di sostenibilità, è il nostro primo punto di riferimento. Allineiamo le nostre operazioni e decisioni strategiche a questi obiettivi globali, perché la crescita di un'azienda deve contribuire allo sviluppo sostenibile nel suo complesso.",
  },
  {
    icon: <Leaf size={24} weight="duotone" />,
    title: "Azienda Sostenibile",
    body: "Integriamo la sostenibilità nelle decisioni di ogni giorno, dalle scelte tecnologiche alla gestione delle risorse interne. Monitoriamo l'impatto delle nostre attività sui tre pilastri e aggiorniamo di conseguenza le nostre pratiche, per crescere in modo responsabile nel tempo.",
  },
];

export default function SustainabilityPageIt() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-20 pb-16"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,240,150,0.07) 0%, transparent 55%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-6">Sostenibilità</PillTag>
          <h1
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: "clamp(36px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
          >
            L'impegno di Mia-Care per la sostenibilità
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            Scopri come Mia-Care integra la sostenibilità nelle proprie decisioni quotidiane.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section
        className="py-16"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-lg"
            style={{ color: "var(--text-secondary)", lineHeight: 1.85, maxWidth: "70ch" }}
          >
            La tecnologia che scriviamo oggi può avere un impatto sulle generazioni future, così
            come tutte le decisioni che prendiamo come individui e come azienda. La nostra crescita
            si basa sullo sviluppo sostenibile: la ricerca continua di un equilibrio tra i pilastri
            economico, ambientale e sociale.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20" style={{ borderTop: "1px solid var(--bg-border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex gap-6 rounded-2xl p-8"
              style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl"
                style={{
                  background: "rgba(0,240,150,0.07)",
                  border: "1px solid rgba(0,240,150,0.15)",
                  color: "var(--brand-green)",
                }}
              >
                {pillar.icon}
              </div>
              <div>
                <h2
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {pillar.title}
                </h2>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Footprint */}
      <section className="py-20" style={{ borderTop: "1px solid var(--bg-border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-bold text-2xl mb-3"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}
          >
            Una presenza globale responsabile
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: "60ch" }}
          >
            Dalle nostre radici europee al mercato statunitense, portiamo gli stessi standard di
            sviluppo responsabile in ogni ambiente regolamentato in cui operiamo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Italy */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "var(--bg-raised)", border: "1px solid var(--bg-border)" }}
            >
              <div
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl mb-4"
                style={{
                  background: "rgba(0,240,150,0.08)",
                  border: "1px solid rgba(0,240,150,0.15)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--brand-green)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <p
                className="font-display font-bold text-base mb-0.5"
                style={{ color: "var(--text-primary)" }}
              >
                Italia
              </p>
              <p className="text-xs font-semibold mb-3" style={{ color: "var(--text-muted)" }}>
                Sede Centrale
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Via Imbonati, 18 - MAC7
                <br />
                20159 Milano
              </p>
            </div>

            {/* United States */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "var(--bg-raised)", border: "1px solid var(--bg-border)" }}
            >
              <div
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl mb-4"
                style={{
                  background: "rgba(0,240,150,0.08)",
                  border: "1px solid rgba(0,240,150,0.15)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--brand-green)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <p
                className="font-display font-bold text-base mb-0.5"
                style={{ color: "var(--text-primary)" }}
              >
                Stati Uniti
              </p>
              <p className="text-xs font-semibold mb-3" style={{ color: "var(--text-muted)" }}>
                Rappresentanza
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Austin, TX
              </p>
            </div>
          </div>
        </div>
      </section>

      <GenderEqualityCertification locale="it" />

      <CtaBanner locale="it" />
    </>
  );
}
