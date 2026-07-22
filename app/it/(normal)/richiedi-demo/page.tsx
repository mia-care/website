import type { Metadata } from "next";
import { HubSpotForm } from "@/components/common/HubSpotForm";
import { PillTag } from "@/components/common/PillTag";
import { COMPLIANCE_STANDARDS } from "@/data/nav";

const FEATURED_STANDARDS = [
  "EU MDR 2017/745",
  "IVDR 2017/746",
  "FDA",
  "ISO 13485",
  "IEC 62304",
  "EU AI Act",
];
const REMAINING_STANDARDS_COUNT = COMPLIANCE_STANDARDS.length - FEATURED_STANDARDS.length;

export const metadata: Metadata = {
  title: "Richiedi una Demo — Compliance by Design nel Tuo Contesto",
  description:
    "Prenota una sessione live su P4SaMD calibrata sul tuo contesto regolatorio. Nessuna demo pre-registrata. Risposte concrete su EU MDR, FDA, ISO 13485, IEC 62304 ed EU AI Act.",
  alternates: { canonical: "/it/richiedi-demo" },
};

const VALUE_PROPS = [
  "Una sessione live di 1 ora con un solution architect P4SaMD — nessuna demo pre-registrata",
  "Demo della piattaforma calibrata sul tuo contesto regolatorio specifico: EU MDR, FDA, EU AI Act…",
  "Una panoramica su come P4SaMD si integra con il tuo stack di strumenti esistente senza richiedere migrazioni",
  "Risposte concrete sulla conformità del tuo stack tecnologico",
  "Un percorso di implementazione proposto su misura per le dimensioni e i tempi del tuo team",
];

const PROOF_METRICS = [
  { metric: "3×", label: "Time-to-market più rapido" },
  { metric: "90%", label: "Documentazione manuale in meno" },
  { metric: "60%", label: "Riduzione dello sforzo di remediation" },
];

export default function RequestDemoPageIt() {
  return (
    <section className="py-20" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left col: value props — first on mobile and desktop */}
          <div>
            <PillTag className="mb-6">Richiedi una Demo</PillTag>
            <h1
              className="font-display font-bold mb-4 leading-tight"
              style={{ fontSize: "clamp(36px, 4vw, 52px)", letterSpacing: "-0.035em" }}
            >
              Compliance by design <span className="text-brand-gradient">nel tuo contesto.</span>
            </h1>
            <p
              className="text-base mb-10"
              style={{ color: "var(--text-primary)", lineHeight: 1.75, opacity: 0.8 }}
            >
              Ti mostreremo come P4SaMD si adatta alla tua situazione regolatoria specifica: i tuoi
              strumenti, i tuoi standard, la struttura del tuo team.
            </p>

            {/* What to expect */}
            <div className="mb-10">
              <h2
                className="font-display font-semibold text-lg mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                Cosa aspettarti
              </h2>
              <ul className="space-y-3">
                {VALUE_PROPS.map((prop) => (
                  <li key={prop} className="flex items-start gap-3 text-sm">
                    <span
                      className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(0,240,150,0.1)",
                        color: "var(--brand-green)",
                        fontSize: 10,
                      }}
                    >
                      ✓
                    </span>
                    <span style={{ color: "var(--text-primary)", opacity: 0.8 }}>{prop}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Standards */}
            <div className="mb-10">
              <h2
                className="font-display font-semibold text-base mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Standard trattati nella demo
              </h2>
              <div className="flex flex-wrap gap-2">
                {FEATURED_STANDARDS.map((std) => (
                  <PillTag key={std}>{std}</PillTag>
                ))}
                <PillTag>+{REMAINING_STANDARDS_COUNT} altri</PillTag>
              </div>
            </div>

            {/* Proof metrics */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {PROOF_METRICS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-card p-2 sm:p-4 text-center"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--bg-border)",
                  }}
                >
                  <div
                    className="font-display font-bold text-xl sm:text-2xl text-brand-gradient"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {m.metric}
                  </div>
                  <div
                    className="text-[10px] sm:text-xs mt-1 leading-tight"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right col — HubSpot form: second on mobile and desktop */}
          <div
            className="rounded-card p-8"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--bg-border)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: "var(--brand-gradient)" }}
              aria-hidden="true"
            />
            <h2
              className="font-display font-semibold text-xl mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Prenota la tua demo
            </h2>
            {/* TODO: embeds the English-language HubSpot form (no Italian form exists yet in
                HubSpot) — pass portalId/formId/region props here once one is created. */}
            <HubSpotForm />
          </div>
        </div>
      </div>
    </section>
  );
}
