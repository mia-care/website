import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/common/CtaBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { PillTag } from "@/components/common/PillTag";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Plans — P4SaMD" },
  alternates: { canonical: "/plans", languages: localeAlternates("/plans") },
  description:
    "Choose how you adopt P4SaMD. Entry, Standard, Professional, or Unlimited — flexible plans for every stage of your SaMD journey.",
};

type Tier = {
  name: string;
  target: string;
  limits: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
  badge?: string;
};

// Keep the Pricing section in public/llms.txt in sync if these tiers change — it's a plain-text mirror for AI agents.
const TIERS: Tier[] = [
  {
    name: "Entry",
    target: "Starting from scratch",
    limits: "1 company · 1 product · 3 users",
    description:
      "Everything you need to launch your first SaMD project with compliance built in from day one.",
    features: [
      "Greenfield only (no legacy remediation)",
      "SDLC Workflow Orchestrator",
      "Default AI/ML Compliance Pack",
      "Auto-generation of standard Technical Files",
      "Limited integrations",
      "No eQMS integration",
      "On-demand support",
    ],
    cta: "Request a Demo",
    highlight: false,
  },
  {
    name: "Standard",
    target: "Small teams getting started",
    limits: "1 company · 3 products · 5 users",
    description: "The foundation you need to build your first SaMD with compliance from day one.",
    features: [
      "Everything in Entry",
      "Requirements & Risk Management",
      "Basic Verification & Validation framework",
      "BOM & Change Management",
    ],
    cta: "Request a Demo",
    highlight: false,
  },
  {
    name: "Professional",
    target: "Growing teams scaling compliance",
    limits: "1 company · 5 products · 10 users",
    description:
      "Custom insights, automated AI/ML compliance, and tool validation for teams moving fast.",
    features: [
      "Everything in Standard",
      "Tailored Smart Insight & AI Assistant",
      "Custom document templating",
      "Full AI/ML Compliance Pack",
      "Legacy assessment & pre-validation package",
      "Integrations & MCP Server",
      "Ticketing support",
    ],
    cta: "Request a Demo",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Unlimited",
    target: "Enterprises & multi-product organizations",
    limits: "Unlimited companies, products & users",
    description:
      "Unlimited scale, eQMS integration, and dedicated support for the most complex regulated environments.",
    features: [
      "Everything in Professional",
      "AI-assisted legacy remediation",
      "eQMS integration",
      "Support for audit readiness",
      "24/7 ticketing with dedicated Lead & AI assistant",
    ],
    cta: "Request a Demo",
    highlight: false,
  },
];

type CellValue = string | boolean;

const COMPARISON: { label: string; values: [CellValue, CellValue, CellValue, CellValue] }[] = [
  { label: "Companies", values: ["1", "1", "1", "Unlimited"] },
  { label: "Products", values: ["1", "3", "5", "Unlimited"] },
  { label: "Users", values: ["3", "5", "10", "Unlimited"] },
  {
    label: "Legacy Support",
    values: [
      "No (greenfield only)",
      "Basic metadata import & gap identification",
      "Remediation plan (multi-region)",
      "AI-assisted legacy updates",
    ],
  },
  { label: "Smart Insight", values: ["Default", "Default", "Custom", "Custom"] },
  {
    label: "Documentation",
    values: [
      "Standard Technical Files",
      "Standard Technical Files",
      "Custom templating for diverse markets",
      "Full eQMS integration",
    ],
  },
  {
    label: "AI/ML Compliance Pack",
    values: ["Limited", "Limited", "Automated", "Automated"],
  },
  {
    label: "Tool Validation",
    values: ["—", "—", "Pre-validation package", "Support for audit readiness"],
  },
  {
    label: "Support",
    values: [
      "On-demand",
      "On-demand",
      "Ticketing",
      "24/7 ticketing with dedicated Lead & AI assistant",
    ],
  },
  { label: "Tokens / month", values: ["1M", "5M", "50M", "500M"] },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="mt-0.5"
      style={{ flexShrink: 0 }}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="rgba(0,240,150,0.12)"
        stroke="var(--brand-green)"
        strokeWidth="1.5"
      />
      <path
        d="M8 12.4l2.5 2.5L16 9.5"
        stroke="var(--brand-green)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
    ],
  },
  {
    model: "Self-Hosted",
    badge: "Full Control",
    tagline: "Full control over your environment",
    description:
      "Deploy P4SaMD on your own infrastructure — private cloud or on-premise. Designed for organizations with strict data residency, sovereign cloud, or network isolation requirements.",
    points: [
      "Data never leaves your environment",
      "Private cloud or on-premise deployment",
      "Custom security and compliance configurations",
    ],
  },
];

const FAQ = [
  {
    q: "Do you offer a trial?",
    a: "We offer guided evaluations tailored to your regulatory context rather than a generic trial. Request a demo to start with a scoped session with our team.",
  },
  {
    q: "Can I start with one capability and add others later?",
    a: "Yes. P4SaMD is modular by design. You can begin with the SDLC Orchestrator and Guided Workflows, then expand to the full capability set as your needs evolve.",
  },
  {
    q: "Is P4SaMD validated for Medical Device development?",
    a: "Yes. The platform is built and maintained following GAMP 5 principles, making it suitable for use in ISO 13485-controlled environments.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function PlansPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
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
            Built for regulated teams at every stage, from first submission to global scale.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section
        className="py-16"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-card flex flex-col transition-all duration-200 hover:-translate-y-1 ${tier.highlight ? "hover:shadow-[0_20px_60px_rgba(0,240,150,0.2)]" : "hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]"}`}
                style={{
                  background: tier.highlight ? "var(--bg-raised)" : "var(--bg-base)",
                  border: tier.highlight
                    ? "1px solid rgba(0,240,150,0.35)"
                    : "1px solid var(--bg-border)",
                  boxShadow: tier.highlight ? "0 0 56px rgba(0,240,150,0.16)" : undefined,
                  position: "relative",
                }}
              >
                {tier.highlight && tier.badge && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase px-3 py-1 rounded-full whitespace-nowrap"
                    style={{
                      background: "var(--brand-gradient)",
                      color: "var(--bg-base)",
                      letterSpacing: "0.08em",
                      boxShadow: "0 4px 16px rgba(0,240,150,0.35)",
                    }}
                  >
                    {tier.badge}
                  </span>
                )}
                <div className="p-8 flex flex-col flex-1 gap-5">
                  <div style={{ minHeight: 104 }}>
                    <h2
                      className="font-display font-bold text-2xl mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {tier.name}
                    </h2>
                    <span
                      className="inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-semibold"
                      style={{
                        background: "rgba(0,240,150,0.06)",
                        borderColor: "rgba(0,240,150,0.25)",
                        color: "var(--brand-green)",
                      }}
                    >
                      {tier.target}
                    </span>
                  </div>

                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)", lineHeight: 1.7, minHeight: 120 }}
                  >
                    {tier.description}
                  </p>

                  <div
                    className="flex items-center justify-center text-sm font-semibold px-4 py-2.5 rounded-lg text-center"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--bg-border-strong)",
                      color: "var(--text-primary)",
                      minHeight: 60,
                    }}
                  >
                    {tier.limits}
                  </div>

                  <ul className="space-y-3 flex-1">
                    {tier.features.map((feat) => {
                      const isInherited = feat.startsWith("Everything in");
                      return (
                        <li key={feat} className="flex items-start gap-3 text-sm">
                          <CheckIcon />
                          <span
                            className={isInherited ? "font-semibold" : ""}
                            style={{
                              color: isInherited ? "var(--text-primary)" : "var(--text-secondary)",
                            }}
                          >
                            {feat}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <Link
                    href="/request-demo"
                    className={`mt-2 inline-flex items-center justify-center h-11 px-5 rounded-lg font-semibold text-sm transition-all ${tier.highlight ? "hover:opacity-90" : "hover:bg-white/5 hover:border-white/20"}`}
                    style={
                      tier.highlight
                        ? { background: "var(--brand-gradient)", color: "var(--bg-base)" }
                        : {
                            border: "1px solid rgba(255,255,255,0.28)",
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
                        color: "var(--text-primary)",
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
                      background: "rgba(255,255,255,0.06)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--bg-border-strong)",
                    }}
                  >
                    {d.badge}
                  </span>
                </div>
                <p
                  className="text-sm font-semibold mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
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
                      <span style={{ color: "var(--text-muted)", flexShrink: 0 }}>✓</span>
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
