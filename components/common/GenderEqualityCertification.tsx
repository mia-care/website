import Image from "next/image";
import { BASE_PATH } from "@/lib/utils";

export function GenderEqualityCertification() {
  return (
    <section
      className="py-16"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
          style={{ background: "var(--bg-raised)", border: "1px solid var(--bg-border)" }}
        >
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden"
            style={{
              width: 96,
              height: 96,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid var(--bg-border-strong)",
              padding: "16px",
            }}
          >
            <Image
              src={`${BASE_PATH}/images/certifications/LogoPDR125.jpg`}
              alt="UNI/PdR 125:2022 Gender Equality Certification"
              width={72}
              height={72}
              style={{ objectFit: "contain", width: "100%", height: "100%", borderRadius: 8 }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="font-display font-bold text-lg mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              UNI/PdR 125:2022 — Gender Equality Certification
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Mia-Care has been certified for being in compliance with the standard requirements
              UNI/PdR 125:2022, which guarantee gender equality in the workplace. The assessment
              covers design, development, testing, marketing, production and maintenance of cloud
              software for the healthcare and life sciences sector.
            </p>
            <a
              href="/downloads/certifications/Certificato UNI PdR 125.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold"
              style={{ color: "var(--brand-green)" }}
            >
              View Certificate
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
              className="flex items-center gap-3 mt-4 pt-4"
              style={{ borderTop: "1px solid var(--bg-border)" }}
            >
              <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                Certified by
              </span>
              <Image
                src={`${BASE_PATH}/images/certifications/logo-dasa-raegister-inverted.png`}
                alt="Dasa-Rägister"
                width={70}
                height={70}
                style={{
                  objectFit: "contain",
                  height: 56,
                  width: "auto",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.85,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
