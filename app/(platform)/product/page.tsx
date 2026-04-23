import type { Metadata } from "next";
import Link from "next/link";
import { CapabilitiesGrid } from "@/components/common/CapabilitiesGrid";
import { ComplianceStrip } from "@/components/common/ComplianceStrip";
import { CtaBanner } from "@/components/common/CtaBanner";
import { HelixSvg } from "@/components/common/HelixSvg";
import { PillTag } from "@/components/common/PillTag";

export const metadata: Metadata = {
  title: "Platform Overview — The AI-native Platform for SaMD",
  description:
    "Mia-Care P4SaMD unifies eQMS, ALM, and DevOps into a single platform, embedding regulatory compliance directly into your SDLC.",
};

const BENEFITS = [
  {
    label: "Integration",
    title: "Full integration of eQMS, ALM, and DevOps",
    body: "P4SaMD breaks down silos by unifying Quality Management, Application Lifecycle Management, and your Internal Developer Platform into a single cohesive execution environment. No more PDF merging. No more manual reconciliation between ALMs and your Quality System.",
  },
  {
    label: "Quality by Design",
    title: "Compliance enforced throughout the SDLC",
    body: "Instead of treating compliance as a final-stage check, P4SaMD embeds quality controls and regulatory guardrails directly into every stage of development.",
  },
  {
    label: "Evidence Generation",
    title: "All regulatory evidence, generated automatically",
    body: "The system automatically collects, compiles, and traces all necessary data points to generate a complete, audit-ready Design History File (DHF) and Technical File — without any manual effort.",
  },
  {
    label: "Automation",
    title: "SDLC automation from testing to release notes",
    body: "P4SaMD automates repetitive manual tasks throughout the development lifecycle — from automated test execution to documentation updates — drastically increasing engineering velocity while maintaining strict compliance.",
  },
];

const WHY = [
  {
    title: "Continuous Compliance",
    body: "An audit-ready, fully validated platform, built on GAMP5 principles. Your development environment meets the quality standards required by global healthcare authorities from day one.",
  },
  {
    title: "Flexibility & Modularity",
    body: "P4SaMD adapts to your operational needs. It integrates into your engineering team's existing workflow, making compliance a natural part of how developers already work.",
  },
  {
    title: "Adaptive Regulatory Reliability",
    body: "The regulatory landscape never stops moving. P4SaMD evolves with it automatically, so your team can focus entirely on building what matters.",
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-20 pb-20"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,240,150,0.08) 0%, transparent 55%)",
        }}
      >
        <div className="absolute right-0 top-0 hidden lg:block pointer-events-none">
          <HelixSvg width={300} height={600} opacity={0.06} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-6">The Platform</PillTag>
          <h1
            className="font-display font-bold mb-6 leading-tight"
            style={{ fontSize: "clamp(40px, 5vw, 66px)", letterSpacing: "-0.035em" }}
          >
            The AI-native Platform for{" "}
            <span className="text-brand-gradient">Software as a Medical Device.</span>
          </h1>
          <p
            className="text-lg max-w-2xl mb-10"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            Mia-Care P4SaMD unifies eQMS, ALM, and DevOps into a single platform, embedding
            regulatory compliance directly into your SDLC. Your team ships faster, stays
            audit-ready, and achieves both engineering velocity and regulatory confidence.
          </p>
          <Link
            href="/request-demo"
            className="inline-flex items-center h-12 px-7 rounded-lg font-semibold text-sm bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
          >
            Request a Demo →
          </Link>
        </div>
      </section>

      {/* One Solution */}
      <section
        className="py-20"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-6">One Solution. End-to-end.</PillTag>
          <h2
            className="font-display font-bold mb-6"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
          >
            Most organizations treat compliance as a layer on top of engineering.
          </h2>
          <div
            className="space-y-4 text-base"
            style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
          >
            <p>
              A painful translation step between how code is written and how regulations are
              satisfied. P4SaMD dissolves this boundary. It connects to your existing tools,
              orchestrates your workflows, and enforces quality controls as a natural part of your
              SDLC.
            </p>
            <p>
              The platform integrates your Internal Developer Platform (IDP), your Catalog, and a
              Compliance Engine into a single cohesive execution environment, with P4SaMD as the
              regulatory intelligence layer that governs all of it.
            </p>
            <p>
              Every requirement tracked. Every risk mapped. Every release documented. Continuously,
              automatically, in real time.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-20" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-8">Key Benefits</PillTag>
          <h2
            className="font-display font-bold mb-10"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
          >
            Our promise to our customers.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-card p-7"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--bg-border)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: "var(--brand-gradient)" }}
                  aria-hidden="true"
                />
                <p className="label-caps mb-3" style={{ color: "var(--brand-green)" }}>
                  {b.label}
                </p>
                <h3
                  className="font-display font-semibold text-lg mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {b.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComplianceStrip />
      <CapabilitiesGrid />

      {/* Why section */}
      <section
        className="py-20"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-8">Why Mia-Care</PillTag>
          <h2
            className="font-display font-bold mb-10"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
          >
            Why we are different.
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {WHY.map((w) => (
              <div key={w.title}>
                <h3
                  className="font-display font-semibold text-base mb-3"
                  style={{ color: "var(--brand-green)" }}
                >
                  {w.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
