import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PillTag } from "@/components/common/PillTag";
import { localeAlternates } from "@/lib/seo";
import { BASE_PATH } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Chi Siamo | Mia-Care" },
  alternates: { canonical: "/it/chi-siamo", languages: localeAlternates("/it/chi-siamo") },
  description:
    "Mia Care è un'azienda health tech con sede a Milano, che costruisce la piattaforma di compliance AI-native per Software as a Medical Device.",
};

const LEADERSHIP = [
  {
    name: "Marzio Ghezzi",
    role: "COO & Co-fondatore",
    bio: "Executive Director con esperienza internazionale in Health Tech, Medical Device e Pharma. Ha guidato iniziative tecnologiche strategiche in Europa e negli Stati Uniti, tra cui soluzioni PaaS e SaaS per dispositivi connessi per la somministrazione di farmaci, digital therapeutics e clinical trial decentralizzati. Laureato in Ingegneria con un Executive MBA.",
    linkedin: "https://www.linkedin.com/in/marzio-ghezzi-7514645/",
    initials: "MG",
  },
  {
    name: "Giulio Roggero",
    role: "CTO & Co-fondatore",
    bio: "25 anni di esperienza nell'ingegneria del software. Serial entrepreneur, co-fondatore e CTO di Mia-Platform, nominata Gartner Cool Vendor for Software Engineering Technologies. Focus principale: cloud native, platform engineering, data fabric ed esperienza omnicanale.",
    linkedin: "https://www.linkedin.com/in/giulioroggero/",
    initials: "GR",
  },
  {
    name: "Francesco Soncini Sessa",
    role: "CFO & Head of Strategic Alliances",
    bio: "Imprenditore con solida esperienza in IT, supply chain e servizi. Profonda competenza nella trasformazione digitale della supply chain. Laurea in Informatica al Politecnico di Milano ed Executive MBA alla Bocconi SDA.",
    linkedin: "https://www.linkedin.com/in/soncinisessa/",
    initials: "FS",
  },
];

export default function AboutUsPageIt() {
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
          <PillTag className="mb-6">Azienda</PillTag>
          <h1
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: "clamp(36px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
          >
            Crediamo che lo sviluppo di software regolamentato non debba essere un collo di
            bottiglia.
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            Mia Care è un'azienda health tech con sede a Milano. Costruiamo P4SaMD, la piattaforma
            AI-native che integra la compliance regolatoria direttamente nel ciclo di vita dello
            sviluppo software per i produttori di dispositivi medici di tutto il mondo.
          </p>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-20" style={{ background: "var(--bg-surface)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2
              className="font-display font-bold text-2xl mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Perché Mia-Care
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Mia-Care nasce per migliorare la cura dei pazienti, offrendo l'esperienza di cura più
              efficace a ogni paziente e medico. Costruiamo un'architettura moderna che rende i
              servizi digitali sanitari più sicuri, interconnessi e intelligenti.
            </p>
          </div>

          <div>
            <h2
              className="font-display font-bold text-2xl mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              La nostra missione
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Crediamo che il divario tra eccellenza ingegneristica e compliance regolatoria sia
              artificiale, il prodotto di decenni di strumenti disconnessi e processi manuali. La
              nostra missione è eliminare del tutto questo divario, rendendo la compliance il
              risultato predefinito di un ottimo sviluppo software, non una fase separata e dolorosa
              che lo segue.
            </p>
          </div>

          <div>
            <h2
              className="font-display font-bold text-2xl mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Il nostro approccio
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              P4SaMD è costruito da un team con profonda competenza sia nello sviluppo software
              regolamentato che nell'AI engineering. Abbiamo visto il problema dall'interno, come
              sviluppatori e professionisti regulatory affairs, e abbiamo costruito la piattaforma
              che avremmo sempre voluto avere.
            </p>
          </div>

          <div>
            <h2
              className="font-display font-bold text-2xl mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Le nostre sedi
            </h2>
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

              {/* USA */}
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
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20" style={{ borderTop: "1px solid var(--bg-border)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-6">Leadership Team</PillTag>
          <h2
            className="font-display font-bold mb-12"
            style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.03em" }}
          >
            Le persone dietro Mia-Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP.map((person) => (
              <div
                key={person.name}
                className="flex flex-col p-6 rounded-2xl"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full mb-4 font-display font-bold text-sm"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid var(--bg-border-strong)",
                    color: "var(--text-primary)",
                  }}
                >
                  {person.initials}
                </div>
                <p
                  className="font-display font-bold text-base mb-0.5"
                  style={{ color: "var(--text-primary)" }}
                >
                  {person.name}
                </p>
                <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
                  {person.role}
                </p>
                <p
                  className="text-sm flex-1"
                  style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
                >
                  {person.bio}
                </p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:text-brand-green"
                  style={{ color: "var(--text-muted)" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mia-Platform */}
      <section className="py-20" style={{ borderTop: "1px solid var(--bg-border)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-6">Parte del Gruppo</PillTag>
          <a
            href="https://mia-platform.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-8 p-8 rounded-2xl transition-colors"
            style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
          >
            <div
              className="shrink-0 flex items-center justify-center rounded-2xl p-5"
              style={{
                background: "var(--bg-raised)",
                border: "1px solid var(--bg-border-strong)",
              }}
            >
              <Image
                src={`${BASE_PATH}/images/logo/Horizontal_Lockup_Full Color.svg`}
                alt="Mia-Platform"
                width={130}
                height={46}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <div className="flex-1">
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
              >
                Mia-Care è un'azienda del gruppo Mia-Platform. Mia-Platform è una AI-Native
                Developer Platform per grandi enterprise di tutto il mondo, usata per costruire ed
                eseguire a scala prodotti cloud-native governati dall'AI: è riconosciuta da una
                società di ricerca e consulenza IT globale e citata in oltre 40 report IT
                indipendenti.
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors group-hover:text-brand-green"
                style={{ color: "var(--text-muted)" }}
              >
                Visita mia-platform.eu
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Explore */}
      <section className="py-20" style={{ borderTop: "1px solid var(--bg-border)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-bold mb-10"
            style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.03em" }}
          >
            Esplora Mia-Care
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Careers */}
            <Link
              href="/it/lavora-con-noi"
              className="group flex flex-col p-6 rounded-2xl transition-colors"
              style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
            >
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5"
                style={{
                  background: "rgba(0,240,150,0.08)",
                  border: "1px solid rgba(0,240,150,0.15)",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--brand-green)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <p
                className="font-display font-bold text-base mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Lavora con Noi
              </p>
              <p
                className="text-sm flex-1"
                style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
              >
                Entra in un team che costruisce lo strato di compliance per la prossima generazione
                di software medicale.
              </p>
              <span
                className="mt-5 inline-flex items-center gap-1 text-xs font-semibold transition-colors group-hover:text-brand-green"
                style={{ color: "var(--text-muted)" }}
              >
                Posizioni aperte
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Sustainability */}
            <Link
              href="/it/sostenibilita"
              className="group flex flex-col p-6 rounded-2xl transition-colors"
              style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
            >
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5"
                style={{
                  background: "rgba(0,240,150,0.08)",
                  border: "1px solid rgba(0,240,150,0.15)",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--brand-green)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 12C2 6.48 6.48 2 12 2c4.42 0 8.17 2.84 9.5 6.83" />
                  <path d="M21.54 12.5C21.18 17.84 16.97 22 12 22 6.48 22 2 17.52 2 12" />
                  <path d="M12 6v6l4 2" />
                  <path d="M16 2s-2 2-4 4-4 2-4 2" />
                </svg>
              </div>
              <p
                className="font-display font-bold text-base mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Sostenibilità
              </p>
              <p
                className="text-sm flex-1"
                style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
              >
                Come costruiamo in modo responsabile: i nostri impegni verso le persone, il pianeta
                e l'impatto a lungo termine.
              </p>
              <span
                className="mt-5 inline-flex items-center gap-1 text-xs font-semibold transition-colors group-hover:text-brand-green"
                style={{ color: "var(--text-muted)" }}
              >
                I nostri impegni
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Certifications */}
            <Link
              href="/it/certificazioni"
              className="group flex flex-col p-6 rounded-2xl transition-colors"
              style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
            >
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5"
                style={{
                  background: "rgba(0,240,150,0.08)",
                  border: "1px solid rgba(0,240,150,0.15)",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--brand-green)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <p
                className="font-display font-bold text-base mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Certificazioni
              </p>
              <p
                className="text-sm flex-1"
                style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
              >
                ISO 13485, IEC 62304 e altro: gli standard su cui si fonda tutto ciò che
                distribuiamo.
              </p>
              <span
                className="mt-5 inline-flex items-center gap-1 text-xs font-semibold transition-colors group-hover:text-brand-green"
                style={{ color: "var(--text-muted)" }}
              >
                Vedi le certificazioni
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner locale="it" />
    </>
  );
}
