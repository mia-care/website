import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PillTag } from "@/components/common/PillTag";

export const metadata: Metadata = {
  title: "Plans — P4SaMD",
  description:
    "Choose how you adopt P4SaMD. Standard, Professional, or Unlimited — flexible plans for every stage of your SaMD journey.",
};

const TIERS = [
  {
    name: "Standard",
    target: "Small teams getting started",
    description: "The foundation you need to build your first SaMD with compliance from day one.",
    features: [
      "1 company · 3 projects · 5 users",
      "SDLC Workflow Orchestrator",
      "Requirements & Risk Management",
      "Documentation Engine (standard templates)",
      "BOM & Change Management",
      "On-demand support",
      "5M tokens / month",
    ],
    cta: "See it in action",
    highlight: false,
  },
  {
    name: "Professional",
    target: "Growing teams scaling compliance",
    description:
      "Custom insights, automated AI/ML compliance, and tool validation for teams moving fast.",
    features: [
      "1 company · 5 projects · 10 users",
      "Everything in Standard",
      "Custom Smart Insight",
      "Custom documentation templating",
      "AI/ML Compliance Pack (automated)",
      "Pre-validation package",
      "Whisper — AI Assistant",
      "Integrations & MCP Server",
      "Ticketing support",
      "50M tokens / month",
    ],
    cta: "Book a guided session",
    highlight: true,
  },
  {
    name: "Unlimited",
    target: "Enterprises & multi-product organizations",
    description:
      "Unlimited scale, eQMS integration, and dedicated support for the most complex regulated environments.",
    features: [
      "Unlimited companies, projects & users",
      "Everything in Professional",
      "AI-assisted legacy updates",
      "Full eQMS integration",
      "Support for audit readiness",
      "24/7 AI + Dedicated Lead",
      "500M tokens / month",
    ],
    cta: "Let's talk",
    highlight: false,
  },
];

type CellValue = string | boolean;

const COMPARISON: { label: string; values: [CellValue, CellValue, CellValue] }[] = [
  { label: "Companies", values: ["1", "1", "Unlimited"] },
  { label: "Projects", values: ["3", "5", "Unlimited"] },
  { label: "Users", values: ["5", "10", "Unlimited"] },
  {
    label: "Legacy Support",
    values: [
      "Basic metadata import & gap identification",
      "Remediation plan",
      "AI-assisted legacy updates",
    ],
  },
  { label: "Smart Insight", values: ["Default", "Custom", "Custom"] },
  {
    label: "Documentation",
    values: [
      "Standard Technical Files",
      "Custom templating for diverse market regions",
      "Full integration with eQMS",
    ],
  },
  {
    label: "AI/ML Compliance Pack",
    values: ["Limited", "Automated", "Automated"],
  },
  {
    label: "Tool Validation",
    values: ["—", "Pre-validation package", "Support for audit readiness"],
  },
  {
    label: "Support",
    values: ["On-demand", "Ticketing", "24/7 AI + Dedicated Lead"],
  },
  { label: "Token / Month", values: ["5 M", "50 M", "500 M"] },
];

const DISTRIBUTION = [
  {
    model: "SaaS",
    badge: "Recommended",
    tagline: "Fastest path to compliance",
    description:
      "Fully managed cloud deployment. Instant provisioning, automatic updates, and zero infrastructure overhead. Available on all plans.",
    points: [
      "Instant provisioning — ready in minutes",
      "Automatic platform updates and security patches",
      "Shared cloud infrastructure managed by Mia-Care",
      "SOC 2-aligned environment",
    ],
  },
  {
    model: "Self-Hosted",
    badge: "Unlimited plan",
    tagline: "Full control over your environment",
    description:
      "Deploy P4SaMD on your own infrastructure — private cloud or on-premise. Designed for organizations with strict data residency, sovereign cloud, or network isolation requirements.",
    points: [
      "Data never leaves your environment",
      "Private cloud or on-premise deployment",
      "Supports air-gapped and hospital networks",
      "Custom security and compliance configurations",
    ],
  },
];

const FAQ = [
  {
    q: "Do you offer a free trial?",
    a: "We offer guided evaluations tailored to your regulatory context rather than a generic trial. Request a demo to start with a scoped session with our team.",
  },
  {
    q: "Can I start with one capability and add others later?",
    a: "Yes. P4SaMD is modular by design. You can begin with the SDLC Orchestrator and Guided Workflows, then expand to the full capability set as your needs evolve.",
  },
  {
    q: "Is P4SaMD validated under GAMP 5?",
    a: "Yes. The platform is built and maintained following GAMP 5 principles, making it suitable for use in ISO 13485-controlled environments.",
  },
  {
    q: "How does pricing work for the Unlimited plan?",
    a: "Unlimited pricing is tailored to your organization's size, number of projects, integration requirements, and support needs. Contact our team for a custom quote.",
  },
];

export default function PlansPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <PillTag className="mb-6">Plans</PillTag>
          <h1
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)", letterSpacing: "-0.035em" }}
          >
            The right plan for every stage of your SaMD journey.
          </h1>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            No hidden costs. All plans include direct access to our regulatory experts.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section
        className="py-16"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="rounded-card flex flex-col overflow-hidden"
                style={{
                  background: tier.highlight ? "var(--bg-raised)" : "var(--bg-base)",
                  border: tier.highlight
                    ? "1px solid rgba(0,240,150,0.25)"
                    : "1px solid var(--bg-border)",
                  position: "relative",
                }}
              >
                {tier.highlight && (
                  <span
                    className="absolute inset-x-0 top-0 h-px"
                    style={{ background: "var(--brand-gradient)" }}
                    aria-hidden="true"
                  />
                )}
                <div className="p-8 flex flex-col flex-1 gap-6">
                  <div>
                    <h2
                      className="font-display font-bold text-2xl mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {tier.name}
                    </h2>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {tier.target}
                    </p>
                  </div>

                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
                  >
                    {tier.description}
                  </p>

                  <ul className="space-y-3 flex-1">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-sm">
                        <span style={{ color: "var(--brand-green)" }}>✓</span>
                        <span style={{ color: "var(--text-secondary)" }}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/request-demo"
                    className="mt-2 inline-flex items-center justify-center h-11 px-5 rounded-lg font-semibold text-sm transition-all"
                    style={
                      tier.highlight
                        ? { background: "var(--brand-gradient)", color: "var(--bg-base)" }
                        : {
                            border: "1px solid var(--bg-border-strong)",
                            color: "var(--text-primary)",
                          }
                    }
                  >
                    {tier.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section
        className="py-20"
        style={{ background: "var(--bg-base)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-bold mb-12 text-center"
            style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.025em" }}
          >
            Compare plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--bg-border)" }}>
                  <th
                    className="text-left py-4 pr-6 font-semibold w-1/4"
                    style={{ color: "var(--text-muted)" }}
                  />
                  {TIERS.map((tier) => (
                    <th
                      key={tier.name}
                      className="py-4 px-4 font-display font-bold text-base text-center"
                      style={{
                        color: tier.highlight ? "var(--brand-green)" : "var(--text-primary)",
                      }}
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.label}
                    style={{
                      borderBottom: "1px solid var(--bg-border)",
                      background: i % 2 === 0 ? "transparent" : "var(--bg-surface)",
                    }}
                  >
                    <td
                      className="py-4 pr-6 font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {row.label}
                    </td>
                    {row.values.map((val, j) => (
                      <td
                        key={TIERS[j].name}
                        className="py-4 px-4 text-center"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Distribution Models */}
      <section
        className="py-20"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <PillTag className="mb-4">Deployment</PillTag>
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.025em" }}
            >
              Choose how you run it.
            </h2>
            <p className="mt-3 text-base" style={{ color: "var(--text-secondary)" }}>
              P4SaMD is available in two deployment models to match your infrastructure and
              compliance requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {DISTRIBUTION.map((d) => (
              <div
                key={d.model}
                className="rounded-card p-8"
                style={{
                  background: "var(--bg-base)",
                  border: "1px solid var(--bg-border)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3
                    className="font-display font-bold text-xl"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {d.model}
                  </h3>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(0,240,150,0.1)",
                      color: "var(--brand-green)",
                      border: "1px solid rgba(0,240,150,0.2)",
                    }}
                  >
                    {d.badge}
                  </span>
                </div>
                <p className="text-sm font-semibold mb-2" style={{ color: "var(--brand-green)" }}>
                  {d.tagline}
                </p>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
                >
                  {d.description}
                </p>
                <ul className="space-y-3">
                  {d.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm">
                      <span style={{ color: "var(--brand-green)", flexShrink: 0 }}>✓</span>
                      <span style={{ color: "var(--text-secondary)" }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-20"
        style={{ background: "var(--bg-base)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-bold mb-12"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", letterSpacing: "-0.025em" }}
          >
            Frequently asked questions.
          </h2>
          <div className="space-y-8">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="pb-8 border-b"
                style={{ borderColor: "var(--bg-border)" }}
              >
                <h3
                  className="font-display font-semibold text-base mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.q}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
                  {item.a}
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
