import type { Metadata } from "next";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PillTag } from "@/components/common/PillTag";

export const metadata: Metadata = {
  title: "Sustainability — Our Commitment to Responsible Technology | Mia-Care",
  description:
    "Discover Mia-Care's commitment to sustainable development across economic, environmental, and social pillars, aligned with the UN 2030 Agenda.",
};

const PILLARS = [
  {
    icon: "⚖",
    title: "Gender Equality & Inclusion",
    body: "The Mia Group, together with Mia-Care, is firmly committed to promoting and supporting an inclusive and equitable environment that values everyone's diversity. We are committed to gender equality, recognizing the significant gender gap in access to scientific fields such as information technology. Our internal policies framework for recruitment, compensation, promotion, and training ensures equal opportunities for all employees.",
  },
  {
    icon: "🌍",
    title: "UN 2030 Agenda",
    body: "The 2030 Agenda, adopted by the members of the United Nations to achieve 17 sustainability goals, is our first point of reference. We align our operations and strategic decisions with these global goals, ensuring that our growth as a company contributes positively to the broader mission of sustainable development.",
  },
  {
    icon: "🏢",
    title: "Sustainable Company",
    body: "Our growth is based on sustainable development: the continuous search for a balance among the economic, environmental, and social pillars. The technology we write today can impact future generations, as well as all the decisions we make as individuals and as a company. We take this responsibility seriously.",
  },
];

export default function SustainabilityPage() {
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
          <PillTag className="mb-6">Sustainability</PillTag>
          <h1
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: "clamp(36px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
          >
            Sustainability Commitment in Mia-Care
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            Discover our vision and commitment to sustainable development and a sustainable company.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section
        className="py-16"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-lg"
            style={{ color: "var(--text-secondary)", lineHeight: 1.85, maxWidth: "70ch" }}
          >
            The technology we write today can impact future generations, as well as all the
            decisions we make as individuals and as a company. Our growth is based on sustainable
            development: the continuous search for a balance among the economic, environmental, and
            social pillars.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20" style={{ borderTop: "1px solid var(--bg-border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex gap-6 rounded-2xl p-8"
              style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl text-xl"
                style={{
                  background: "rgba(0,240,150,0.07)",
                  border: "1px solid rgba(0,240,150,0.15)",
                }}
              >
                {pillar.icon}
              </div>
              <div>
                <h2
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {pillar.title}
                </h2>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certification highlight */}
      <section
        className="py-16"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
            style={{
              background: "rgba(0,240,150,0.05)",
              border: "1px solid rgba(0,240,150,0.15)",
            }}
          >
            <div
              className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-xl font-display font-bold text-sm text-center leading-tight"
              style={{
                background: "rgba(0,240,150,0.12)",
                border: "1px solid rgba(0,240,150,0.25)",
                color: "var(--brand-green)",
              }}
            >
              UNI/PdR
              <br />
              125
            </div>
            <div>
              <h3
                className="font-display font-bold text-lg mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                UNI/PdR 125:2022 — Gender Equality Certification
              </h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Mia-Care has been certified for being in compliance with the standard requirements
                UNI/PdR 125:2022, which guarantee gender equality in the workplace. The assessment
                covers design, development, testing, marketing, production and maintenance of cloud
                software for the healthcare and life sciences sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
