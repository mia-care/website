import type { Metadata } from "next";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PillTag } from "@/components/common/PillTag";
import { ResourceGrid } from "@/components/competence-center/ResourceGrid";
import { getAllResources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Competence Center — Whitepaper e Video | Mia-Care",
  description:
    "Accedi alla libreria di whitepaper e video di approfondimento di Mia-Care su compliance SaMD, interoperabilità FHIR, piattaforme di telemedicina e sanità cloud-native.",
  alternates: {
    canonical: "/it/risorse",
  },
};

export default function ResourcesPageIt() {
  const resources = getAllResources("it");

  return (
    <>
      <section
        className="pt-20 pb-16"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,240,150,0.07) 0%, transparent 55%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-6">Risorse</PillTag>
          <h1
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: "clamp(36px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
          >
            Competence Center
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            Whitepaper, video demo e guide di esperti su compliance SaMD, piattaforme di sanità
            digitale e software medicale cloud-native. Accesso gratuito.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ borderTop: "1px solid var(--bg-border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResourceGrid resources={resources} locale="it" />
        </div>
      </section>

      <CtaBanner locale="it" />
    </>
  );
}
