import type { Metadata } from "next";
import Link from "next/link";
import { CapabilitiesGrid } from "@/components/common/CapabilitiesGrid";
import { CtaBanner } from "@/components/common/CtaBanner";
import { LogoMarquee } from "@/components/common/LogoCarousel";
import { PillTag } from "@/components/common/PillTag";
import { PlansBanner } from "@/components/common/PlansBanner";
import { HeroCompliancePipeline } from "@/components/sections/product/HeroCompliancePipeline";
import { OneSolutionInteractive } from "@/components/sections/product/OneSolutionInteractive";

const HERO_STANDARDS = [
  "EU MDR 2017/745",
  "ISO 13485",
  "IEC 62304",
  "FDA",
  "ISO 14971",
  "EU AI Act",
];

export const metadata: Metadata = {
  title: "Panoramica della Piattaforma | La Piattaforma AI-native per SaMD",
  description:
    "Mia-Care P4SaMD unifica eQMS, ALM e DevOps in un'unica piattaforma, integrando la compliance regolatoria direttamente nel tuo SDLC.",
  alternates: { canonical: "/it/prodotto" },
};

const BENEFITS = [
  {
    label: "Integrazione",
    title: "Integrazione completa di eQMS, ALM e DevOps",
    body: "P4SaMD abbatte i silo unificando Quality Management, Application Lifecycle Management e la tua Internal Developer Platform in un unico ambiente di esecuzione coeso. Niente più unione di PDF. Niente più riconciliazione manuale tra ALM e il tuo Quality System.",
  },
  {
    label: "Quality by Design",
    title: "Compliance applicata durante tutto l'SDLC",
    body: "Invece di trattare la compliance come un controllo di fase finale, P4SaMD integra controlli di qualità e guardrail regolatori direttamente in ogni fase dello sviluppo.",
  },
  {
    label: "Generazione di Evidenza",
    title: "Tutta l'evidenza regolatoria, generata automaticamente",
    body: "Il sistema raccoglie, compila e traccia automaticamente tutti i data point necessari per generare un Design History File (DHF) e un Technical File completi e pronti per l'audit, senza alcuno sforzo manuale.",
  },
  {
    label: "Automazione",
    title: "Automazione dell'SDLC dal testing alle release notes",
    body: "P4SaMD automatizza i task manuali ripetitivi lungo tutto il ciclo di vita dello sviluppo (dall'esecuzione automatica dei test agli aggiornamenti della documentazione), aumentando drasticamente la velocità di engineering mantenendo una compliance rigorosa.",
  },
];

const WHY = [
  {
    title: "Compliance Continua",
    body: "Una piattaforma pronta per l'audit e completamente validata, costruita sui principi GAMP5. Il tuo ambiente di sviluppo soddisfa dal primo giorno gli standard di qualità richiesti dalle autorità sanitarie globali.",
  },
  {
    title: "Flessibilità & Modularità",
    body: "P4SaMD si adatta alle tue esigenze operative. Si integra nel workflow esistente del tuo team di engineering, rendendo la compliance una parte naturale del modo in cui gli sviluppatori già lavorano.",
  },
  {
    title: "Affidabilità Regolatoria Adattiva",
    body: "Il panorama regolatorio non si ferma mai. P4SaMD evolve automaticamente insieme a esso, così il tuo team può concentrarsi interamente su ciò che conta costruire.",
  },
];

export default function ProductPageIt() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-20 pb-24"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,240,150,0.08) 0%, transparent 55%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <div>
              <PillTag className="mb-6">La Piattaforma</PillTag>
              <h1
                className="font-display font-bold mb-6 leading-tight"
                style={{ fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-0.035em" }}
              >
                La Piattaforma AI-native
                <br />
                <span className="text-brand-gradient">per Software as a Medical Device.</span>
              </h1>
              <p
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: "34rem" }}
              >
                Mia-Care P4SaMD unifica eQMS, ALM e DevOps in un'unica piattaforma, integrando la
                compliance direttamente nel tuo SDLC. Distribuisci più velocemente. Resta sempre
                pronto per l'audit.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Link
                  href="/it/richiedi-demo"
                  className="inline-flex items-center h-12 px-7 rounded-lg font-semibold text-sm bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
                >
                  Richiedi una Demo →
                </Link>
                {/* TODO(Batch 4): point to the Italian resource slug once resources are translated */}
                <Link
                  href="/resources/mia-care-product-demo"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-lg font-semibold text-sm transition-colors hover:opacity-80"
                  style={{
                    border: "1px solid var(--bg-border-strong)",
                    color: "var(--text-primary)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="6.5" stroke="currentColor" />
                    <path d="M5.5 4.5l5 2.5-5 2.5V4.5z" fill="currentColor" />
                  </svg>
                  Guarda la Demo
                </Link>
              </div>

              {/* Trust signals */}
              <div>
                <p className="label-caps mb-3" style={{ color: "var(--text-secondary)" }}>
                  Conforme a
                </p>
                <div className="flex flex-wrap gap-2">
                  {HERO_STANDARDS.map((std) => (
                    <PillTag key={std}>{std}</PillTag>
                  ))}
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "var(--bg-raised)",
                      border: "1px solid var(--bg-border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    15+
                  </span>
                </div>
              </div>
            </div>

            {/* Right column – compliance pipeline */}
            <div className="hidden lg:block">
              <HeroCompliancePipeline locale="it" />
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee locale="it" />

      <OneSolutionInteractive locale="it" />

      {/* Benefits grid */}
      <section className="py-20" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-8">Vantaggi Principali</PillTag>
          <h2
            className="font-display font-bold mb-10"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
          >
            La nostra promessa ai nostri clienti.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-card p-7"
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
                <p className="label-caps mb-3" style={{ color: "var(--brand-green)" }}>
                  {b.label}
                </p>
                <h3
                  className="font-display font-semibold text-lg mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {b.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CapabilitiesGrid locale="it" />

      {/* Mid-page CTA — contextual follow-up after capabilities exploration */}
      <section
        className="py-16"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="heading-sub mb-3">Pronto a vedere P4SaMD in azione?</h2>
          <p className="mb-8 text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
            Prenota una demo live e scopri come P4SaMD si adatta al tuo stack in meno di 30 minuti.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/it/richiedi-demo"
              className="inline-flex items-center h-12 px-7 rounded-lg font-semibold text-sm bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
            >
              Richiedi una Demo →
            </Link>
            <Link
              href="/resources/mia-care-product-demo"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-lg font-semibold text-sm transition-colors hover:opacity-80"
              style={{ border: "1px solid rgba(255,255,255,0.28)", color: "var(--text-primary)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="6.5" stroke="currentColor" />
                <path d="M5.5 4.5l5 2.5-5 2.5V4.5z" fill="currentColor" />
              </svg>
              Guarda la Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Why section */}
      <section
        className="py-20"
        style={{ background: "var(--bg-base)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-8">Perché Mia-Care</PillTag>
          <h2
            className="font-display font-bold mb-10"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
          >
            Perché siamo diversi.
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {WHY.map((w) => (
              <div key={w.title}>
                <h3 className="heading-card mb-3" style={{ color: "var(--brand-green)" }}>
                  {w.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  {w.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row sm:items-center gap-3 pt-10"
            style={{ borderTop: "1px solid var(--bg-border)" }}
          >
            <Link
              href="/it/richiedi-demo"
              className="inline-flex items-center justify-center h-11 px-6 rounded-lg font-semibold text-sm bg-brand-gradient text-bg-base transition-opacity hover:opacity-90 w-full sm:w-auto"
            >
              Richiedi una Demo →
            </Link>
            <Link
              href="https://docs.mia-care.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-11 px-4 text-sm font-semibold transition-colors hover:opacity-80 w-full sm:w-auto"
              style={{ color: "var(--text-muted)" }}
            >
              Scopri come lo abbiamo costruito →
            </Link>
          </div>
        </div>
      </section>

      <PlansBanner locale="it" />
      <CtaBanner locale="it" />
    </>
  );
}
