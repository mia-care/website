import { GlobeHemisphereWest, Leaf, Scales } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import { CtaBanner } from "@/components/common/CtaBanner";
import { GenderEqualityCertification } from "@/components/common/GenderEqualityCertification";
import { PillTag } from "@/components/common/PillTag";

export const metadata: Metadata = {
  title: "Sustainability — Our Commitment to Responsible Technology | Mia-Care",
  description:
    "Discover Mia-Care's commitment to sustainable development across economic, environmental, and social pillars, aligned with the UN 2030 Agenda.",
};

const PILLARS = [
  {
    icon: <Scales size={24} weight="duotone" />,
    title: "Gender Equality & Inclusion",
    body: "The Mia Group, together with Mia-Care, is firmly committed to promoting and supporting an inclusive and equitable environment that values everyone's diversity. We are committed to gender equality, recognizing the significant gender gap in access to scientific fields such as information technology. Our internal policies framework for recruitment, compensation, promotion, and training ensures equal opportunities for all employees.",
  },
  {
    icon: <GlobeHemisphereWest size={24} weight="duotone" />,
    title: "UN 2030 Agenda",
    body: "The 2030 Agenda, adopted by the members of the United Nations to achieve 17 sustainability goals, is our first point of reference. We align our operations and strategic decisions with these global goals, ensuring that our growth as a company contributes positively to the broader mission of sustainable development.",
  },
  {
    icon: <Leaf size={24} weight="duotone" />,
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
                className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl"
                style={{
                  background: "rgba(0,240,150,0.07)",
                  border: "1px solid rgba(0,240,150,0.15)",
                  color: "var(--brand-green)",
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

      {/* Global Footprint */}
      <section className="py-20" style={{ borderTop: "1px solid var(--bg-border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-bold text-2xl mb-3"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}
          >
            A Responsible Global Presence
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: "60ch" }}
          >
            From our European roots to the US market, we carry the same standards of responsible
            development to every regulated environment we serve.
          </p>
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
                Italy
              </p>
              <p className="text-xs font-semibold mb-3" style={{ color: "var(--text-muted)" }}>
                Headquarters
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Via Leopardi, 8<br />
                20123 Milan
              </p>
            </div>

            {/* United States */}
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
                United States
              </p>
              <p className="text-xs font-semibold mb-3" style={{ color: "var(--text-muted)" }}>
                Representatives
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Austin, TX
              </p>
            </div>
          </div>
        </div>
      </section>

      <GenderEqualityCertification />

      <CtaBanner />
    </>
  );
}
