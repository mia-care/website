import Image from "next/image";
import { BASE_PATH } from "@/lib/utils";

const COPY = {
  en: {
    title: "UNI/PdR 125:2022 — Gender Equality Certification",
    body: "Mia-Care has been certified for being in compliance with the standard requirements UNI/PdR 125:2022, which guarantee gender equality in the workplace. The assessment covers design, development, testing, marketing, production and maintenance of cloud software for the healthcare and life sciences sector.",
    viewCertificate: "View Certificate",
  },
  it: {
    title: "UNI/PdR 125:2022 — Certificazione sulla Parità di Genere",
    body: "Mia-Care è certificata per la conformità ai requisiti dello standard UNI/PdR 125:2022, che garantisce la parità di genere sul luogo di lavoro. La valutazione copre progettazione, sviluppo, testing, marketing, produzione e manutenzione di software cloud per il settore sanitario e delle life science.",
    viewCertificate: "Visualizza Certificato",
  },
};

export function GenderEqualityCertification({ locale = "en" }: { locale?: "en" | "it" }) {
  const t = COPY[locale];
  return (
    <section
      className="py-16"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl p-8"
          style={{ background: "var(--bg-raised)", border: "1px solid var(--bg-border)" }}
        >
          <h3
            className="font-display font-bold text-lg mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            {t.title}
          </h3>
          <p
            className="text-sm mb-4 max-w-lg"
            style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
          >
            {t.body}
          </p>
          <a
            href="/downloads/certifications/Certificato UNI PdR 125.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold"
            style={{ color: "var(--brand-green)" }}
          >
            {t.viewCertificate}
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
          <div
            className="flex items-center gap-4 mt-8 pt-6"
            style={{ borderTop: "1px solid var(--bg-border)" }}
          >
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden"
              style={{
                width: 72,
                height: 72,
                background: "#fff",
                padding: 10,
                boxShadow: "0 1px 3px rgba(0,0,0,0.35)",
              }}
            >
              <Image
                src={`${BASE_PATH}/images/certifications/LogoPDR125.jpg`}
                alt="UNI/PdR 125:2022 Gender Equality Certification"
                width={52}
                height={52}
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden"
              style={{
                width: 72,
                height: 72,
                background: "#fff",
                padding: 10,
                boxShadow: "0 1px 3px rgba(0,0,0,0.35)",
              }}
            >
              <Image
                src={`${BASE_PATH}/images/certifications/CertLogo.png`}
                alt="Dasa-Rägister — UNI/PdR 125:2022 certifying body"
                width={52}
                height={52}
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
