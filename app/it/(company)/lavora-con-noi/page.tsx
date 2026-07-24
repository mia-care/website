import type { Metadata } from "next";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PillTag } from "@/components/common/PillTag";
import { JobAccordion } from "@/components/sections/careers/JobAccordion";
import { getAllJobs } from "@/lib/jobs";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Lavora con Noi — Unisciti alla Rivoluzione Healthcare | Mia-Care" },
  alternates: {
    canonical: "/it/lavora-con-noi",
    languages: localeAlternates("/it/lavora-con-noi"),
  },
  description:
    "Unisciti a Mia-Care e aiutaci a costruire la piattaforma di compliance AI-native per SaMD. Posizioni aperte a Milano tra engineering e prodotto.",
};

const VALUES = [
  {
    title: "Trasparenza e inclusione",
    body: "Un ambiente di lavoro inclusivo aiuta le persone a sentirsi apprezzate e incoraggia la creatività. Puntiamo anche a mantenere la massima apertura tra manager e team.",
  },
  {
    title: "Lavoro di squadra",
    body: "Le persone sono il vero valore dell'azienda. I team di Mia-Care lavorano in Agile e sono sempre desiderosi di crescere e migliorare attraverso il confronto continuo e la formazione.",
  },
  {
    title: "Passione per il codice e la cura",
    body: "Scrivere codice di alta qualità e migliorare continuamente sono i pilastri principali del nostro lavoro. Allo stesso tempo, teniamo sinceramente alla qualità delle cure per tutte le persone.",
  },
];

export default function CareersPageIt() {
  const jobs = getAllJobs("it");
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
          <PillTag className="mb-6">Carriera</PillTag>
          <h1
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: "clamp(36px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
          >
            Costruisci con noi il futuro della sanità digitale
          </h1>
          <p
            className="text-lg max-w-2xl mb-8"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            Lavora in un ambiente stimolante che rispetta i valori sociali e offre una cultura
            aziendale agile. Sii orgoglioso del tuo lavoro e condividi le tue aspirazioni con
            colleghi e manager con totale trasparenza.
          </p>
          <a
            href="#open-positions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:-translate-y-px"
            style={{
              background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
              color: "#0b0c10",
            }}
          >
            Vedi le posizioni aperte ↓
          </a>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-10">Cosa perseguiamo</PillTag>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl"
                style={{ background: "var(--bg-raised)", border: "1px solid var(--bg-border)" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold mb-4"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid var(--bg-border-strong)",
                    color: "var(--text-muted)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2
                  className="font-display font-bold text-base mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {v.title}
                </h2>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job positions */}
      <section
        id="open-positions"
        className="py-20"
        style={{ borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-2">Posizioni aperte</PillTag>
          <h2
            className="font-display font-bold mb-10"
            style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.03em" }}
          >
            Ruoli aperti
          </h2>

          <JobAccordion jobs={jobs} locale="it" />

          {/* Spontaneous application */}
          <div
            className="mt-10 p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{
              background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
            }}
          >
            <div>
              <h3 className="font-display font-bold text-lg mb-1" style={{ color: "#0b0c10" }}>
                Interessato a unirti a noi?
              </h3>
              <p className="text-sm" style={{ color: "rgba(0,0,0,0.6)" }}>
                Non trovi un ruolo che fa per te? Candidati comunque: siamo sempre alla ricerca di
                nuovi talenti.
              </p>
            </div>
            <a
              href="mailto:career@mia-care.io?subject=Candidatura Spontanea"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all hover:-translate-y-px"
              style={{
                background: "#ffffff",
                color: "#0b0c10",
              }}
            >
              Candidati ora →
            </a>
          </div>
        </div>
      </section>

      <CtaBanner locale="it" />
    </>
  );
}
