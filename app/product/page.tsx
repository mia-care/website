import type { Metadata } from "next";
import Link from "next/link";
import { ComplianceStrip } from "@/components/blocks/home/ComplianceStrip";
import { CtaBanner } from "@/components/blocks/home/CtaBanner";
import { PillTag } from "@/components/blocks/shared/PillTag";

export const metadata: Metadata = {
  title: "Product Overview — The AI-native Platform for SaMD",
  description:
    "P4SaMD unifies eQMS, ALM, and DevOps into a single platform, embedding regulatory compliance directly into your SDLC.",
};

const benefits = [
  {
    label: "Integration",
    title: "Full integration of eQMS, ALM, and DevOps",
    description:
      "P4SaMD breaks down silos by unifying Quality Management, Application Lifecycle Management, and your Internal Developer Platform into a single cohesive execution environment. No more PDF merging. No more manual reconciliation between ALMs and your Quality System.",
  },
  {
    label: "Quality by Design",
    title: "Compliance enforced throughout the SDLC",
    description:
      "Instead of treating compliance as a final-stage check, P4SaMD embeds quality controls and regulatory guardrails directly into every stage of development.",
  },
  {
    label: "Evidence Generation",
    title: "All regulatory evidence, generated automatically",
    description:
      "The system automatically collects, compiles, and traces all necessary data points to generate a complete, audit-ready Design History File (DHF) and Technical File — without any manual effort from your engineering or quality teams.",
  },
  {
    label: "Automation",
    title: "SDLC automation from testing to release notes",
    description:
      "P4SaMD automates repetitive manual tasks throughout the development lifecycle — from automated test execution to documentation updates — drastically increasing engineering velocity while maintaining strict compliance at every increment.",
  },
];

const whyDifferent = [
  {
    title: "Continuous Compliance",
    description:
      "An audit-ready, fully validated platform, built on GAMP5 principles. Your development environment meets the quality standards required by global healthcare authorities from day one.",
  },
  {
    title: "Flexibility & Modularity",
    description:
      "P4SaMD adapts to your operational needs. It integrates into your engineering team's existing workflow, making compliance a natural part of how developers already work.",
  },
  {
    title: "Adaptive Regulatory Reliability",
    description:
      "The regulatory landscape never stops moving. P4SaMD evolves with it automatically, so your team can focus entirely on building what matters.",
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bg-base pt-32 pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0,240,150,0.10) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-4 flex justify-center">
            <PillTag>The Platform</PillTag>
          </div>
          <h1 className="font-display mb-5 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl">
            The AI-native Platform for{" "}
            <span className="text-brand-gradient">Software as a Medical Device.</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-text-secondary">
            Mia-Care P4SaMD unifies eQMS, ALM, and DevOps into a single platform, embedding
            regulatory compliance directly into your Software Development Life Cycle (SDLC). Your
            team ships faster, stays audit-ready, and chooses both engineering velocity and
            regulatory confidence.
          </p>
        </div>
      </section>

      <section className="bg-bg-surface py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display mb-6 text-2xl font-bold text-text-primary md:text-3xl">
            One Solution. End-to-end.
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              Most organizations treat compliance as a layer on top of engineering. A painful
              translation step between how code is written and how regulations are satisfied. P4SaMD
              dissolves this boundary. It connects to your existing tools, orchestrates your
              workflows, and enforces quality controls as a natural part of your SDLC.
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

      <section className="bg-bg-base py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
              Our promise to our customers.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="relative rounded-xl border border-bg-border bg-bg-surface p-7"
              >
                <div
                  className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-brand-gradient"
                  aria-hidden="true"
                />
                <p className="label-caps mb-3 text-brand-green">{b.label}</p>
                <h3 className="font-display mb-3 text-lg font-semibold text-text-primary">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">{b.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/capabilities/sdlc-orchestrator"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-green transition-opacity hover:opacity-80"
            >
              See All the Capabilities →
            </Link>
          </div>
        </div>
      </section>

      <ComplianceStrip />

      <section className="bg-bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
              Why we are different.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {whyDifferent.map((item) => (
              <div
                key={item.title}
                className="relative rounded-xl border border-bg-border bg-bg-base p-7"
              >
                <div
                  className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-brand-gradient"
                  aria-hidden="true"
                />
                <h3 className="font-display mb-3 text-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
