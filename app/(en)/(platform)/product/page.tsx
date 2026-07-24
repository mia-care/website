import type { Metadata } from "next";
import Link from "next/link";
import { CapabilitiesGrid } from "@/components/common/CapabilitiesGrid";
import { CtaBanner } from "@/components/common/CtaBanner";
import { LogoMarquee } from "@/components/common/LogoCarousel";
import { PillTag } from "@/components/common/PillTag";
import { PlansBanner } from "@/components/common/PlansBanner";
import { HeroCompliancePipeline } from "@/components/sections/product/HeroCompliancePipeline";
import { OneSolutionInteractive } from "@/components/sections/product/OneSolutionInteractive";
import { localeAlternates } from "@/lib/seo";

const HERO_STANDARDS = [
  "EU MDR 2017/745",
  "ISO 13485",
  "IEC 62304",
  "FDA",
  "ISO 14971",
  "EU AI Act",
];

export const metadata: Metadata = {
  title: { absolute: "Platform Overview | The AI-native Platform for SaMD | Mia-Care" },
  description:
    "Mia-Care P4SaMD unifies eQMS, ALM, and DevOps into a single platform, embedding regulatory compliance directly into your SDLC.",
  alternates: { canonical: "/product", languages: localeAlternates("/product") },
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
    body: "The system automatically collects, compiles, and traces all necessary data points to generate a complete, audit-ready Design History File (DHF) and Technical File, without any manual effort.",
  },
  {
    label: "Automation",
    title: "SDLC automation from testing to release notes",
    body: "P4SaMD automates repetitive manual tasks throughout the development lifecycle (from automated test execution to documentation updates) drastically increasing engineering velocity while maintaining strict compliance.",
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
        className="relative overflow-hidden pt-20 pb-24"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,240,150,0.08) 0%, transparent 55%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <div>
              <PillTag className="mb-6">The Platform</PillTag>
              <h1
                className="font-display font-bold mb-6 leading-tight"
                style={{ fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-0.035em" }}
              >
                The AI-native Platform
                <br />
                <span className="text-brand-gradient">for Software as a Medical Device.</span>
              </h1>
              <p
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: "34rem" }}
              >
                Mia-Care P4SaMD unifies eQMS, ALM, and DevOps in one platform, embedding compliance
                directly into your SDLC. Ship faster. Stay audit-ready.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Link
                  href="/request-demo"
                  className="inline-flex items-center h-12 px-7 rounded-lg font-semibold text-sm bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
                >
                  Request a Demo →
                </Link>
                <Link
                  href="/resources/mia-care-product-demo"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-lg font-semibold text-sm transition-colors hover:opacity-80"
                  style={{
                    border: "1px solid var(--bg-border-strong)",
                    color: "var(--text-primary)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="6.5" stroke="currentColor" />
                    <path d="M5.5 4.5l5 2.5-5 2.5V4.5z" fill="currentColor" />
                  </svg>
                  Watch Demo
                </Link>
              </div>

              {/* Trust signals */}
              <div>
                <p className="label-caps mb-3" style={{ color: "var(--text-secondary)" }}>
                  Compliant with
                </p>
                <div className="flex flex-wrap gap-2">
                  {HERO_STANDARDS.map((std) => (
                    <PillTag key={std}>{std}</PillTag>
                  ))}
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "var(--bg-raised)",
                      border: "1px solid var(--bg-border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    15+
                  </span>
                </div>
              </div>
            </div>

            {/* Right column – compliance pipeline */}
            <div className="hidden lg:block">
              <HeroCompliancePipeline />
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      <OneSolutionInteractive />

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

      <CapabilitiesGrid />

      {/* Why section */}
      <section
        className="py-20"
        style={{ background: "var(--bg-base)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-8">Why Mia-Care</PillTag>
          <h2
            className="font-display font-bold mb-10"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.025em" }}
          >
            Why we are different.
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {WHY.map((w) => (
              <div key={w.title}>
                <h3 className="heading-card mb-3" style={{ color: "var(--brand-green)" }}>
                  {w.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  {w.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row sm:items-center gap-3 pt-10"
            style={{ borderTop: "1px solid var(--bg-border)" }}
          >
            <Link
              href="/request-demo"
              className="inline-flex items-center justify-center h-11 px-6 rounded-lg font-semibold text-sm bg-brand-gradient text-bg-base transition-opacity hover:opacity-90 w-full sm:w-auto"
            >
              Request a Demo →
            </Link>
            <Link
              href="https://docs.mia-care.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-11 px-4 text-sm font-semibold transition-colors hover:opacity-80 w-full sm:w-auto"
              style={{ color: "var(--text-muted)" }}
            >
              Learn how we built it →
            </Link>
          </div>
        </div>
      </section>

      <PlansBanner />
      <CtaBanner />
    </>
  );
}
