import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/blocks/home/CtaBanner";
import { PillTag } from "@/components/blocks/shared/PillTag";

export const metadata: Metadata = {
  title: "Pricing — P4SaMD Plans & Packages",
  description:
    "Choose the P4SaMD plan that fits your team size and regulatory context. From pre-market startups to enterprise MedTech.",
};

const tiers = [
  {
    name: "Essentials",
    target: "Pre-market startups",
    price: "Contact us",
    inclusions: [
      "SDLC Workflow Orchestrator",
      "Automated Real-time Traceability",
      "Guided Workflows",
      "Up to 2 projects",
    ],
    cta: "Request a Demo",
    highlighted: false,
  },
  {
    name: "Professional",
    target: "Scaleups / Series B+",
    price: "Contact us",
    inclusions: [
      "All 8 P4SaMD capabilities",
      "Up to 10 projects",
      "Dedicated onboarding",
      "Priority support",
    ],
    cta: "Request a Demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    target: "MedTech / Life Sciences",
    price: "Custom",
    inclusions: [
      "Unlimited projects",
      "Custom integrations",
      "Enterprise SLA",
      "Dedicated Customer Success Manager",
    ],
    cta: "Talk to Sales",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Is there a self-serve sign-up?",
    answer:
      "P4SaMD is a compliance-critical platform for regulated medical software. We onboard every customer with a dedicated session to ensure proper configuration for your specific regulatory context. Contact us to schedule a demo and we'll set up your environment together.",
  },
  {
    question: "Can I start with one capability and expand later?",
    answer:
      "Yes. The Essentials tier covers the foundational capabilities for most greenfield teams. As your needs grow, you can upgrade to Professional to unlock all 8 capabilities and increase your project count.",
  },
  {
    question: "Does P4SaMD replace my existing ALM or eQMS?",
    answer:
      "No. P4SaMD is designed to work alongside your existing toolstack — GitHub, Jira, your eQMS — by connecting them through lightweight integrations. There is no forced migration or rip-and-replace.",
  },
  {
    question: "Which regulatory frameworks are covered?",
    answer:
      "P4SaMD covers EU MDR, IVDR, FDA, ISO 13485, ISO 14971, IEC 62304, IEC 82304-1, IEC 62366-1, IEC 81001-5-1, EU AI Act, GMLP, PCCP, GDPR, and HIPAA.",
  },
];

export default function PricingPage() {
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
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="mb-4 flex justify-center">
            <PillTag>Pricing</PillTag>
          </div>
          <h1 className="font-display mb-5 text-4xl font-bold text-text-primary md:text-5xl">
            The right plan for every stage of{" "}
            <span className="text-brand-gradient">your SaMD journey.</span>
          </h1>
          <p className="text-base text-text-secondary">
            All plans include dedicated onboarding. No self-serve — we start every engagement with a
            live session to map P4SaMD to your specific regulatory context.
          </p>
        </div>
      </section>

      <section className="bg-bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-brand-green/30 bg-bg-base"
                    : "border-bg-border bg-bg-base"
                }`}
              >
                {tier.highlighted && (
                  <div
                    className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-brand-gradient"
                    aria-hidden="true"
                  />
                )}
                {tier.highlighted && (
                  <div className="mb-4 flex justify-start">
                    <PillTag>Most Popular</PillTag>
                  </div>
                )}
                <h2 className="font-display mb-1 text-2xl font-bold text-text-primary">
                  {tier.name}
                </h2>
                <p className="mb-6 text-sm text-text-muted">{tier.target}</p>
                <p className="mb-8 text-3xl font-bold text-text-primary">{tier.price}</p>
                <ul className="mb-8 space-y-3">
                  {tier.inclusions.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-text-secondary">
                      <span
                        className="mt-1 size-1.5 shrink-0 rounded-full bg-brand-green"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link
                    href="/request-demo"
                    className={`inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-opacity ${
                      tier.highlighted
                        ? "bg-brand-gradient text-bg-base hover:opacity-90"
                        : "border border-bg-border-strong text-text-primary hover:bg-bg-raised"
                    }`}
                  >
                    {tier.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-base py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display mb-10 text-2xl font-bold text-text-primary md:text-3xl">
            Frequently asked questions.
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-bg-border pb-6">
                <h3 className="font-display mb-3 text-base font-semibold text-text-primary">
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
