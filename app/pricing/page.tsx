import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/blocks/home/CtaBanner";
import { PillTag } from "@/components/blocks/shared/PillTag";

export const metadata: Metadata = {
  title: "Pricing — P4SaMD Plans",
  description:
    "Flexible pricing for every stage of your SaMD journey. From pre-market startups to global MedTech enterprises. All plans include direct access to our team.",
};

const TIERS = [
  {
    name: "Essentials",
    tag: "Starter",
    target: "Pre-market startups",
    price: "Contact us",
    description: "The foundation you need to build your first SaMD with compliance from day one.",
    features: [
      "SDLC Workflow Orchestrator",
      "Automated Real-time Traceability",
      "Guided Workflows",
      "Up to 2 active projects",
      "Email support",
      "Onboarding session",
    ],
    cta: "Get Started →",
    highlight: false,
  },
  {
    name: "Professional",
    tag: "Growth",
    target: "Scaleups / Series B+",
    price: "Contact us",
    description: "All eight capabilities. Built for teams scaling regulated software development.",
    features: [
      "All 8 capabilities",
      "Documentation Engine",
      "Smart Assistant (Whisper)",
      "Up to 10 active projects",
      "Dedicated onboarding",
      "Priority support & SLA",
    ],
    cta: "Request a Demo →",
    highlight: true,
  },
  {
    name: "Enterprise",
    tag: "Enterprise",
    target: "MedTech / Life Sciences",
    price: "Custom",
    description:
      "Unlimited scale, custom integrations, and dedicated support for the most complex regulated environments.",
    features: [
      "Everything in Professional",
      "Unlimited projects",
      "Custom integrations",
      "Dedicated Customer Success Manager",
      "Custom SLA",
      "On-premise / private cloud options",
    ],
    cta: "Talk to Sales →",
    highlight: false,
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
    q: "How does pricing work for the Enterprise tier?",
    a: "Enterprise pricing is tailored to your organization's size, number of projects, integration requirements, and support needs. Contact our team for a custom quote.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <PillTag className="mb-6">Pricing</PillTag>
          <h1
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)", letterSpacing: "-0.035em" }}
          >
            Simple plans for every stage of your SaMD journey.
          </h1>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            No hidden costs. All plans include direct access to our regulatory experts.
          </p>
        </div>
      </section>

      {/* Tiers */}
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
                    <PillTag className="mb-4">{tier.tag}</PillTag>
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

                  <div>
                    <span
                      className="font-display font-bold text-3xl text-brand-gradient"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {tier.price}
                    </span>
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
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "var(--bg-base)" }}>
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
