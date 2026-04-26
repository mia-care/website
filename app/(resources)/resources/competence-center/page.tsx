import type { Metadata } from "next";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PillTag } from "@/components/common/PillTag";
import { ResourceGrid } from "@/components/competence-center/ResourceGrid";
import { RESOURCES } from "@/data/competence-center";

export const metadata: Metadata = {
  title: "Competence Center — Whitepapers & Videos | Mia-Care",
  description:
    "Access Mia-Care's library of whitepapers and expert videos on SaMD compliance, FHIR interoperability, telemedicine platforms, and cloud-native healthcare.",
};

export default function CompetenceCenterPage() {
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
          <PillTag className="mb-6">Resources</PillTag>
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
            Whitepapers, demo videos, and expert guides on SaMD compliance, digital health
            platforms, and cloud-native medical software. Free to access.
          </p>
        </div>
      </section>

      {/* Listing */}
      <section className="py-16" style={{ borderTop: "1px solid var(--bg-border)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResourceGrid resources={RESOURCES} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
