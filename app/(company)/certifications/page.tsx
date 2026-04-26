import type { Metadata } from "next";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PillTag } from "@/components/common/PillTag";

export const metadata: Metadata = {
  title: "Certifications — Digital Products Made in Quality | Mia-Care",
  description:
    "Mia-Care holds ISO 13485, ISO 27001 and ISO 9001 certifications, demonstrating our commitment to quality, information security, and medical software compliance.",
};

const CERTS = [
  {
    id: "01",
    name: "ISO 13485:2016",
    scope:
      "Design and development, production, installation, and maintenance of medical software and software for medical devices.",
    body: "ISO 13485 ensures the ability to develop and deliver medical devices and software by meeting customer requirements and applicable regulatory requirements from the MDR. The main purpose of this standard is to facilitate the certification of digital solutions that communicate with harmonized medical devices for quality management systems. Mia-Care is currently helping several companies achieve certification for Software as a Medical Device by building new digital MDR-ready products with a compliant-by-design software suite.",
  },
  {
    id: "02",
    name: "ISO 27001:2022",
    scope: "Deployment and delivery of IT solutions for building Cloud Native platforms.",
    body: "This certification represents the international standard that describes best practices for an Information Security Management System. Through this ISO, we demonstrate compliance concerning information security best practices and according to business objectives. The certification was integrated by the controls required by guidelines ISO/IEC 27017:2015 and ISO/IEC 27018:2019, which extend the scope by providing specific controls and guidelines to ensure that information security and personal data protection within cloud services are guaranteed.",
  },
  {
    id: "03",
    name: "ISO 9001:2015",
    scope:
      "Design and development, production, installation, and maintenance of medical software and software for medical devices.",
    body: "The ISO 9001 standard defines the minimum requirements an organization must meet to guarantee the claimed quality of the product and service provided. This certification is dedicated to the continuous and constant improvement of the company, optimizing the organizational structure and having the tools to make it more efficient over time, depending on the pace of growth.",
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
          <div className="grid grid-cols-3">
            {CERTS.map((cert, i) => (
              <div
                key={cert.id}
                className="py-8 px-6 flex flex-col items-center gap-2 text-center"
                style={{
                  borderRight: i < CERTS.length - 1 ? "1px solid var(--bg-border)" : undefined,
                }}
              >
                <span
                  className="font-display font-bold text-xs uppercase tracking-widest mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {cert.id}
                </span>
                <span
                  className="font-display font-bold text-xl"
                  style={{ color: "var(--brand-green)" }}
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
              <div className="flex items-start gap-6">
                <div
                  className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl font-display font-bold text-lg"
                  style={{
                    background: "rgba(0,240,150,0.08)",
                    border: "1px solid rgba(0,240,150,0.18)",
                    color: "var(--brand-green)",
                  }}
                >
                  {cert.id}
                </div>
                <div className="flex-1 min-w-0">
                  <h2
                    className="font-display font-bold text-xl mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cert.name}
                  </h2>
                  <p className="text-sm font-medium mb-4" style={{ color: "var(--brand-green)" }}>
                    {cert.scope}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
                  >
                    {cert.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
