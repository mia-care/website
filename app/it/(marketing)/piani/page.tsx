import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/common/CtaBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { PillTag } from "@/components/common/PillTag";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Piani P4SaMD" },
  alternates: { canonical: "/it/piani", languages: localeAlternates("/it/piani") },
  description:
    "Scegli come adottare P4SaMD: Standard, Professional o Unlimited, piani flessibili per ogni fase del tuo percorso SaMD.",
};

const TIERS = [
  {
    name: "Standard",
    target: "Piccoli team che iniziano",
    description:
      "Le fondamenta di cui hai bisogno per costruire il tuo primo SaMD con la compliance fin dal primo giorno.",
    features: [
      "1 azienda · 3 prodotti · 5 utenti",
      "SDLC Workflow Orchestrator",
      "Requirements & Risk Management",
      "Basic Verification & Validation framework",
      "Documentation Engine (template standard)",
      "BOM & Change Management",
      "AI/ML Compliance Pack limitato",
      "Supporto on-demand",
    ],
    cta: "Richiedi una Demo",
    highlight: false,
  },
  {
    name: "Professional",
    target: "Team in crescita che scalano la compliance",
    description:
      "Insight personalizzati, compliance AI/ML automatizzata e validazione degli strumenti per team che vogliono muoversi rapidamente.",
    features: [
      "1 azienda · 5 prodotti · 10 utenti",
      "Tutto quanto incluso in Standard",
      "Smart Insight & AI Assistant personalizzato",
      "Sistema di templating documentale",
      "AI/ML Compliance Pack completo",
      "Valutazione dei sistemi legacy",
      "Pacchetto di pre-validazione",
      "Integrazioni & MCP Server",
      "Supporto via ticketing",
    ],
    cta: "Richiedi una Demo",
    highlight: true,
  },
  {
    name: "Unlimited",
    target: "Enterprise e organizzazioni multi-prodotto",
    description:
      "Scala illimitata, integrazione eQMS e supporto dedicato per gli ambienti regolamentati più complessi.",
    features: [
      "Aziende, prodotti e utenti illimitati",
      "Tutto quanto incluso in Professional",
      "Remediation legacy assistita dall'AI",
      "Integrazione eQMS",
      "Supporto per l'audit readiness",
      "Ticketing 24/7 con Lead dedicato & AI assistant",
    ],
    cta: "Richiedi una Demo",
    highlight: false,
  },
];

type CellValue = string | boolean;

const COMPARISON: { label: string; values: [CellValue, CellValue, CellValue] }[] = [
  { label: "Aziende", values: ["1", "1", "Illimitate"] },
  { label: "Prodotti", values: ["3", "5", "Illimitati"] },
  { label: "Utenti", values: ["5", "10", "Illimitati"] },
  {
    label: "Supporto Legacy",
    values: [
      "Valutazione base",
      "Valutazione completa e piano di remediation",
      "Remediation assistita dall'AI",
    ],
  },
  { label: "Smart Insight", values: ["Default", "Personalizzato", "Personalizzato avanzato"] },
  {
    label: "Documentazione",
    values: ["Technical File standard", "Templating personalizzato", "Integrazione eQMS"],
  },
  {
    label: "AI/ML Compliance Pack",
    values: ["Limitato", "Completo", "Completo"],
  },
  {
    label: "Validazione Strumenti",
    values: ["—", "Pacchetto di pre-validazione", "Supporto per l'audit readiness"],
  },
  {
    label: "Supporto",
    values: ["On-demand", "Ticketing", "Ticketing 24/7 con Lead dedicato & AI assistant"],
  },
];

const DISTRIBUTION = [
  {
    model: "SaaS",
    badge: "Consigliato",
    tagline: "Il percorso più rapido verso la compliance",
    description:
      "Deployment cloud completamente gestito. Provisioning istantaneo, aggiornamenti automatici e zero overhead infrastrutturale. Disponibile su tutti i piani.",
    points: [
      "Provisioning istantaneo, pronto in pochi minuti",
      "Aggiornamenti automatici della piattaforma e patch di sicurezza",
      "Infrastruttura cloud condivisa gestita da Mia-Care",
    ],
  },
  {
    model: "Self-Hosted",
    badge: "Controllo totale",
    tagline: "Controllo completo sul tuo ambiente",
    description:
      "Distribuisci P4SaMD sulla tua infrastruttura, in cloud privato o on-premise. Pensato per organizzazioni con requisiti stringenti di data residency, sovereign cloud o isolamento di rete.",
    points: [
      "I dati non lasciano mai il tuo ambiente",
      "Deployment su cloud privato o on-premise",
      "Configurazioni di sicurezza e compliance personalizzate",
    ],
  },
];

const FAQ = [
  {
    q: "Offrite una prova gratuita?",
    a: "Offriamo valutazioni guidate calibrate sul tuo contesto regolatorio piuttosto che una prova generica. Richiedi una demo per iniziare con una sessione dedicata con il nostro team.",
  },
  {
    q: "Posso iniziare con una capability e aggiungerne altre in seguito?",
    a: "Sì. P4SaMD ha un'architettura modulare. Puoi iniziare con SDLC Orchestrator e Guided Workflows, per poi espandere all'intero set di capability man mano che le tue esigenze crescono.",
  },
  {
    q: "P4SaMD è validato per lo sviluppo di dispositivi medici?",
    a: "Sì. La piattaforma è costruita e mantenuta seguendo i principi GAMP 5, il che la rende adatta all'uso in ambienti controllati ISO 13485.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function PlansPageIt() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      {/* Hero */}
      <section className="pt-20 pb-16" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <PillTag className="mb-6">Piani</PillTag>
          <h1
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)", letterSpacing: "-0.035em" }}
          >
            Il piano giusto per ogni fase del tuo percorso SaMD.
          </h1>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Costruito per team regolamentati in ogni fase, dalla prima submission alla scala
            globale.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section
        className="py-16"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-card flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 ${tier.highlight ? "hover:shadow-[0_16px_48px_rgba(0,240,150,0.13)]" : "hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]"}`}
                style={{
                  background: tier.highlight ? "var(--bg-raised)" : "var(--bg-base)",
                  border: tier.highlight
                    ? "1px solid rgba(0,240,150,0.25)"
                    : "1px solid var(--bg-border)",
                  position: "relative",
                }}
              >
                {tier.highlight && (
                  <span
                    className="absolute inset-x-0 top-0 h-px"
                    style={{ background: "var(--brand-gradient)" }}
                    aria-hidden="true"
                  />
                )}
                <div className="p-8 flex flex-col flex-1 gap-6">
                  <div>
                    <h2
                      className="font-display font-bold text-2xl mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {tier.name}
                    </h2>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {tier.target}
                    </p>
                  </div>

                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
                  >
                    {tier.description}
                  </p>

                  <ul className="space-y-3 flex-1">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-sm">
                        <span style={{ color: "var(--text-muted)" }}>✓</span>
                        <span style={{ color: "var(--text-secondary)" }}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/it/richiedi-demo"
                    className={`mt-2 inline-flex items-center justify-center h-11 px-5 rounded-lg font-semibold text-sm transition-all ${tier.highlight ? "hover:opacity-90" : "hover:bg-white/5 hover:border-white/20"}`}
                    style={
                      tier.highlight
                        ? { background: "var(--brand-gradient)", color: "var(--bg-base)" }
                        : {
                            border: "1px solid rgba(255,255,255,0.28)",
                            color: "var(--text-primary)",
                          }
                    }
                  >
                    {tier.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section
        className="py-20"
        style={{ background: "var(--bg-base)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-bold mb-12 text-center"
            style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.025em" }}
          >
            Confronta i piani
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--bg-border)" }}>
                  <th
                    className="text-left py-4 pr-6 font-semibold w-1/4"
                    style={{ color: "var(--text-muted)" }}
                  />
                  {TIERS.map((tier) => (
                    <th
                      key={tier.name}
                      className="py-4 px-4 font-display font-bold text-base text-center"
                      style={{
                        color: "var(--text-primary)",
                      }}
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.label}
                    style={{
                      borderBottom: "1px solid var(--bg-border)",
                      background: i % 2 === 0 ? "transparent" : "var(--bg-surface)",
                    }}
                  >
                    <td
                      className="py-4 pr-6 font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {row.label}
                    </td>
                    {row.values.map((val, j) => (
                      <td
                        key={TIERS[j].name}
                        className="py-4 px-4 text-center"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Distribution Models */}
      <section
        className="py-20"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <PillTag className="mb-4">Deployment</PillTag>
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.025em" }}
            >
              Scegli come eseguirlo.
            </h2>
            <p className="mt-3 text-base" style={{ color: "var(--text-secondary)" }}>
              P4SaMD è disponibile in due modelli di deployment per adattarsi alla tua
              infrastruttura e ai tuoi requisiti di compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {DISTRIBUTION.map((d) => (
              <div
                key={d.model}
                className="rounded-card p-8"
                style={{
                  background: "var(--bg-base)",
                  border: "1px solid var(--bg-border)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3
                    className="font-display font-bold text-xl"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {d.model}
                  </h3>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--bg-border-strong)",
                    }}
                  >
                    {d.badge}
                  </span>
                </div>
                <p
                  className="text-sm font-semibold mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {d.tagline}
                </p>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
                >
                  {d.description}
                </p>
                <ul className="space-y-3">
                  {d.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm">
                      <span style={{ color: "var(--text-muted)", flexShrink: 0 }}>✓</span>
                      <span style={{ color: "var(--text-secondary)" }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-20"
        style={{ background: "var(--bg-base)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-bold mb-12"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", letterSpacing: "-0.025em" }}
          >
            Domande frequenti.
          </h2>
          <div className="space-y-8">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="pb-8 border-b"
                style={{ borderColor: "var(--bg-border)" }}
              >
                <h3
                  className="font-display font-semibold text-base mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.q}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner locale="it" />
    </>
  );
}
