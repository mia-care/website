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
    "Scegli come adottare P4SaMD: Entry, Standard, Professional o Unlimited, piani flessibili per ogni fase del tuo percorso SaMD.",
};

type Tier = {
  name: string;
  target: string;
  limits: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
  badge?: string;
};

// Tenere sincronizzata la sezione Pricing dell'inglese in public/llms.txt se questi tier cambiano.
const TIERS: Tier[] = [
  {
    name: "Entry",
    target: "Si parte da zero",
    limits: "1 azienda · 1 prodotto · 3 utenti",
    description:
      "Tutto ciò che ti serve per avviare il tuo primo progetto SaMD con la compliance integrata fin dal primo giorno.",
    features: [
      "Solo greenfield (nessuna remediation legacy)",
      "SDLC Workflow Orchestrator",
      "AI/ML Compliance Pack di base",
      "Generazione automatica dei Technical File standard",
      "Integrazioni limitate",
      "Nessuna integrazione eQMS",
      "Supporto on-demand",
    ],
    cta: "Richiedi una Demo",
    highlight: false,
  },
  {
    name: "Standard",
    target: "Piccoli team che iniziano",
    limits: "1 azienda · 3 prodotti · 5 utenti",
    description:
      "Le fondamenta di cui hai bisogno per costruire il tuo primo SaMD con la compliance fin dal primo giorno.",
    features: [
      "Tutto quanto incluso in Entry",
      "Requirements & Risk Management",
      "Basic Verification & Validation framework",
      "BOM & Change Management",
    ],
    cta: "Richiedi una Demo",
    highlight: false,
  },
  {
    name: "Professional",
    target: "Team in crescita che scalano la compliance",
    limits: "1 azienda · 5 prodotti · 10 utenti",
    description:
      "Insight personalizzati, compliance AI/ML automatizzata e validazione degli strumenti per team che vogliono muoversi rapidamente.",
    features: [
      "Tutto quanto incluso in Standard",
      "Smart Insight & AI Assistant personalizzato",
      "Templating documentale personalizzato",
      "AI/ML Compliance Pack completo",
      "Valutazione legacy e pacchetto di pre-validazione",
      "Integrazioni & MCP Server",
      "Supporto via ticketing",
    ],
    cta: "Richiedi una Demo",
    highlight: true,
    badge: "Più popolare",
  },
  {
    name: "Unlimited",
    target: "Enterprise e organizzazioni multi-prodotto",
    limits: "Aziende, prodotti e utenti illimitati",
    description:
      "Scala illimitata, integrazione eQMS e supporto dedicato per gli ambienti regolamentati più complessi.",
    features: [
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

const COMPARISON: { label: string; values: [CellValue, CellValue, CellValue, CellValue] }[] = [
  { label: "Aziende", values: ["1", "1", "1", "Illimitate"] },
  { label: "Prodotti", values: ["1", "3", "5", "Illimitati"] },
  { label: "Utenti", values: ["3", "5", "10", "Illimitati"] },
  {
    label: "Supporto Legacy",
    values: [
      "No (solo greenfield)",
      "Import base dei metadati e identificazione dei gap",
      "Piano di remediation (multi-regione)",
      "Aggiornamenti legacy assistiti dall'AI",
    ],
  },
  { label: "Smart Insight", values: ["Default", "Default", "Personalizzato", "Personalizzato"] },
  {
    label: "Documentazione",
    values: [
      "Technical File standard",
      "Technical File standard",
      "Templating personalizzato per mercati diversi",
      "Integrazione eQMS completa",
    ],
  },
  {
    label: "AI/ML Compliance Pack",
    values: ["Limitato", "Limitato", "Automatizzato", "Automatizzato"],
  },
  {
    label: "Validazione Strumenti",
    values: ["—", "—", "Pacchetto di pre-validazione", "Supporto per l'audit readiness"],
  },
  {
    label: "Supporto",
    values: [
      "On-demand",
      "On-demand",
      "Ticketing",
      "Ticketing 24/7 con Lead dedicato & AI assistant",
    ],
  },
  { label: "Token / mese", values: ["1M", "5M", "50M", "500M"] },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="mt-0.5"
      style={{ flexShrink: 0 }}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="rgba(0,240,150,0.12)"
        stroke="var(--brand-green)"
        strokeWidth="1.5"
      />
      <path
        d="M8 12.4l2.5 2.5L16 9.5"
        stroke="var(--brand-green)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-card flex flex-col transition-all duration-200 hover:-translate-y-1 ${tier.highlight ? "hover:shadow-[0_20px_60px_rgba(0,240,150,0.2)]" : "hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]"}`}
                style={{
                  background: tier.highlight ? "var(--bg-raised)" : "var(--bg-base)",
                  border: tier.highlight
                    ? "1px solid rgba(0,240,150,0.35)"
                    : "1px solid var(--bg-border)",
                  boxShadow: tier.highlight ? "0 0 56px rgba(0,240,150,0.16)" : undefined,
                  position: "relative",
                }}
              >
                {tier.highlight && tier.badge && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase px-3 py-1 rounded-full whitespace-nowrap"
                    style={{
                      background: "var(--brand-gradient)",
                      color: "var(--bg-base)",
                      letterSpacing: "0.08em",
                      boxShadow: "0 4px 16px rgba(0,240,150,0.35)",
                    }}
                  >
                    {tier.badge}
                  </span>
                )}
                <div className="p-8 flex flex-col flex-1 gap-5">
                  <div style={{ minHeight: 104 }}>
                    <h2
                      className="font-display font-bold text-2xl mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {tier.name}
                    </h2>
                    <span
                      className="inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-semibold"
                      style={{
                        background: "rgba(0,240,150,0.06)",
                        borderColor: "rgba(0,240,150,0.25)",
                        color: "var(--brand-green)",
                      }}
                    >
                      {tier.target}
                    </span>
                  </div>

                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)", lineHeight: 1.7, minHeight: 120 }}
                  >
                    {tier.description}
                  </p>

                  <div
                    className="flex items-center justify-center text-sm font-semibold px-4 py-2.5 rounded-lg text-center"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--bg-border-strong)",
                      color: "var(--text-primary)",
                      minHeight: 60,
                    }}
                  >
                    {tier.limits}
                  </div>

                  <ul className="space-y-3 flex-1">
                    {tier.features.map((feat) => {
                      const isInherited = feat.startsWith("Tutto quanto incluso in");
                      return (
                        <li key={feat} className="flex items-start gap-3 text-sm">
                          <CheckIcon />
                          <span
                            className={isInherited ? "font-semibold" : ""}
                            style={{
                              color: isInherited ? "var(--text-primary)" : "var(--text-secondary)",
                            }}
                          >
                            {feat}
                          </span>
                        </li>
                      );
                    })}
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
