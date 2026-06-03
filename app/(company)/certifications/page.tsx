import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PillTag } from "@/components/common/PillTag";
import { BASE_PATH } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Certifications — Digital Products Made in Quality | Mia-Care",
  description:
    "Mia-Care holds ISO 13485, ISO 27001 and ISO 9001 certifications, demonstrating our commitment to quality, information security, and medical software compliance.",
};

const CERTS = [
  {
    id: "01",
    name: "ISO 13485:2016",
    image: `${BASE_PATH}/images/certifications/BVCER_withAccredia-ISO-13485.webp`,
    scope:
      "Design and development, production, installation, and maintenance of medical software and software for medical devices.",
    body: "ISO 13485 ensures the ability to develop and deliver medical devices and software by meeting customer requirements and applicable regulatory requirements from the MDR. The main purpose of this standard is to facilitate the certification of digital solutions that communicate with harmonized medical devices for quality management systems. Mia-Care is currently helping several companies achieve certification for Software as a Medical Device by building new digital MDR-ready products with a compliant-by-design software suite.",
    pdf: "/downloads/certifications/Certificate IT346833 - MIA CARE S.R.L - ISO13485.pdf",
  },
  {
    id: "02",
    name: "ISO 27001:2022",
    image: `${BASE_PATH}/images/certifications/27001-27017-27018-blu_tracciati.webp`,
    scope: "Deployment and delivery of IT solutions for building Cloud Native platforms.",
    body: "This certification represents the international standard that describes best practices for an Information Security Management System. Through this ISO, we demonstrate compliance concerning information security best practices and according to business objectives. The certification was integrated by the controls required by guidelines ISO/IEC 27017:2015 and ISO/IEC 27018:2019, which extend the scope by providing specific controls and guidelines to ensure that information security and personal data protection within cloud services are guaranteed.",
    pdf: "/downloads/certifications/Certificate IT329500 - MIA S.R.L - ISO27001.pdf",
  },
  {
    id: "03",
    name: "ISO 9001:2015",
    image: `${BASE_PATH}/images/certifications/BVCER_withAccredia-ISO-9001.webp`,
    scope:
      "Design and development, production, installation, and maintenance of medical software and software for medical devices.",
    body: "The ISO 9001 standard defines the minimum requirements an organization must meet to guarantee the claimed quality of the product and service provided. This certification is dedicated to the continuous and constant improvement of the company, optimizing the organizational structure and having the tools to make it more efficient over time, depending on the pace of growth.",
    pdf: "/downloads/certifications/Certificate IT346835 - MIA CARE S.R.L - ISO9001.pdf",
  },
];

export default function CertificationsPage() {
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
          <PillTag className="mb-6">Certifications</PillTag>
          <h1
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: "clamp(36px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
          >
            Digital Products Made in Quality
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            Mia-Care is deeply committed to providing the highest quality standards on activities
            involving partners and clients. The expertise gained through years of practice allowed
            our R&D team to match technical excellence with certified processes and best practices.
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gender Equality */}
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
              <h2
                className="font-display font-bold text-lg mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                UNI/PdR 125:2022 — Gender Equality Certification
              </h2>
              <p
                className="text-sm mb-4"
                style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
              >
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
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
