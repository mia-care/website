import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/common/CtaBanner";
import { GenderEqualityCertification } from "@/components/common/GenderEqualityCertification";
import { PillTag } from "@/components/common/PillTag";
import { localeAlternates } from "@/lib/seo";
import { BASE_PATH } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Certificazioni | Qualità dei prodotti digitali | Mia-Care" },
  alternates: {
    canonical: "/it/certificazioni",
    languages: localeAlternates("/it/certificazioni"),
  },
  description:
    "Mia-Care possiede le certificazioni ISO 13485, ISO 27001 e ISO 9001: qualità, sicurezza delle informazioni e conformità del software medicale.",
};

const CERTS = [
  {
    id: "01",
    name: "ISO 13485:2016",
    image: `${BASE_PATH}/images/certifications/BVCER_withAccredia-ISO-13485.webp`,
    scope:
      "Progettazione e sviluppo, produzione, installazione e manutenzione di software medicale e software per dispositivi medici.",
    body: "ISO 13485 attesta la capacità di sviluppare e distribuire dispositivi medici e software rispettando i requisiti del cliente e i requisiti regolatori applicabili derivanti dall'MDR. Lo scopo principale di questo standard è facilitare la certificazione di soluzioni digitali che comunicano con dispositivi medici armonizzati per i sistemi di gestione della qualità. Mia-Care sta attualmente aiutando diverse aziende a ottenere la certificazione per Software as a Medical Device e costruisce nuovi prodotti digitali pronti per l'MDR con una suite software compliant-by-design.",
    pdf: "/downloads/certifications/Certificate IT346833 - MIA CARE S.R.L - ISO13485.pdf",
  },
  {
    id: "02",
    name: "ISO 27001:2022",
    image: `${BASE_PATH}/images/certifications/27001-27017-27018-blu_tracciati.webp`,
    scope:
      "Implementazione ed erogazione di soluzioni IT per la costruzione di piattaforme Cloud Native.",
    body: "Questa certificazione è lo standard internazionale che descrive le best practice per un Sistema di Gestione della Sicurezza delle Informazioni. Attraverso questa ISO dimostriamo la conformità alle best practice di sicurezza delle informazioni in linea con gli obiettivi aziendali. La certificazione è stata integrata con i controlli richiesti dalle linee guida ISO/IEC 27017:2015 e ISO/IEC 27018:2019, che estendono l'ambito con controlli e linee guida specifici per la sicurezza delle informazioni e la protezione dei dati personali all'interno dei servizi cloud.",
    pdf: "/downloads/certifications/Certificate IT329500 - MIA S.R.L - ISO27001.pdf",
  },
  {
    id: "03",
    name: "ISO 9001:2015",
    image: `${BASE_PATH}/images/certifications/BVCER_withAccredia-ISO-9001.webp`,
    scope:
      "Progettazione e sviluppo, produzione, installazione e manutenzione di software medicale e software per dispositivi medici.",
    body: "Lo standard ISO 9001 definisce i requisiti minimi che un'organizzazione deve soddisfare per garantire la qualità dichiarata del prodotto e del servizio offerto. Questa certificazione è dedicata al miglioramento continuo dell'azienda. Aiuta a ottimizzare la struttura organizzativa e a dotarla degli strumenti per crescere in modo più efficiente, in base al ritmo di crescita.",
    pdf: "/downloads/certifications/Certificate IT346835 - MIA CARE S.R.L - ISO9001.pdf",
  },
];

export default function CertificationsPageIt() {
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
          <PillTag className="mb-6">Certificazioni</PillTag>
          <h1
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: "clamp(36px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
          >
            Qualità nei nostri prodotti digitali
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            Mia-Care segue standard di qualità rigorosi in tutte le attività con partner e clienti.
            In anni di attività, il nostro team R&D ha unito competenza tecnica e processi
            certificati alle pratiche più consolidate del settore.
          </p>
        </div>
      </section>

      {/* Cert badges */}
      <section
        style={{
          borderTop: "1px solid var(--bg-border)",
          borderBottom: "1px solid var(--bg-border)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {CERTS.map((cert, i) => (
              <div
                key={cert.id}
                className={[
                  "py-8 px-6 flex flex-col items-center gap-3 text-center",
                  i < CERTS.length - 1
                    ? "border-b border-[var(--bg-border)] sm:border-b-0 sm:border-r sm:border-r-[var(--bg-border)]"
                    : "",
                ].join(" ")}
              >
                <div className="flex items-center justify-center" style={{ height: 80 }}>
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={180}
                    height={72}
                    style={{ objectFit: "contain", width: 180, height: 72 }}
                  />
                </div>
                <span
                  className="font-display font-bold text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cert details */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {CERTS.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl p-8"
              style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-xl w-full sm:w-[200px]"
                  style={{
                    height: 120,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--bg-border)",
                    padding: "16px",
                  }}
                >
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={168}
                    height={88}
                    style={{ objectFit: "contain", width: "100%", height: "100%", borderRadius: 8 }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2
                    className="font-display font-bold text-xl mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cert.name}
                  </h2>
                  <p className="text-sm font-medium mb-4" style={{ color: "var(--text-muted)" }}>
                    {cert.scope}
                  </p>
                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
                  >
                    {cert.body}
                  </p>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold"
                    style={{ color: "var(--brand-green)" }}
                  >
                    Visualizza certificato
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
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <GenderEqualityCertification locale="it" />

      <CtaBanner locale="it" />
    </>
  );
}
