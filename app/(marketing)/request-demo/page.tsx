import type { Metadata } from "next";
import { HubSpotForm } from "@/components/common/HubSpotForm";
import { PillTag } from "@/components/common/PillTag";
import { COMPLIANCE_STANDARDS } from "@/data/nav";

export const metadata: Metadata = {
  title: "Request a Demo — See Compliance by Design in Your Context",
  description:
    "Get a live P4SaMD session scoped to your regulatory context. No pre-recorded walk-through. Real answers for EU MDR, FDA, ISO 13485, IEC 62304, and EU AI Act.",
};

const VALUE_PROPS = [
  "A 1h live session with a P4SaMD solution architect — no pre-recorded walk-through",
  "Platform demo scoped to your specific regulatory context: EU MDR, FDA, EU AI Act…",
  "A walk-through of how P4SaMD integrates with your existing tool stack without requiring migration",
  "Concrete answers to your compliance adherence over your tech stack",
  "A proposed implementation path tailored to your team size and timeline",
];

const PROOF_METRICS = [
  { metric: "3×", label: "Faster time-to-market" },
  { metric: "90%", label: "Less manual documentation" },
  { metric: "60%", label: "Remediation effort reduction" },
];

export default function RequestDemoPage() {
  return (
    <section className="py-20" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left col */}
          <div>
            <PillTag className="mb-6">Request a Demo</PillTag>
            <h1
              className="font-display font-bold mb-4 leading-tight"
              style={{ fontSize: "clamp(36px, 4vw, 52px)", letterSpacing: "-0.035em" }}
            >
              See compliance by design <span className="text-brand-gradient">in your context.</span>
            </h1>
            <p
              className="text-base mb-10"
              style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
            >
              We'll walk through how P4SaMD maps to your specific regulatory situation: your tools,
              your standards, your team structure.
            </p>

            {/* What to expect */}
            <div className="mb-10">
              <h2
                className="font-display font-semibold text-lg mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                What to expect
              </h2>
              <ul className="space-y-3">
                {VALUE_PROPS.map((prop) => (
                  <li key={prop} className="flex items-start gap-3 text-sm">
                    <span
                      className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(0,240,150,0.1)",
                        color: "var(--brand-green)",
                        fontSize: 10,
                      }}
                    >
                      ✓
                    </span>
                    <span style={{ color: "var(--text-secondary)" }}>{prop}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Standards */}
            <div className="mb-10">
              <h2
                className="font-display font-semibold text-base mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Standards covered in the demo
              </h2>
              <div className="flex flex-wrap gap-2">
                {COMPLIANCE_STANDARDS.map((std) => (
                  <PillTag key={std}>{std}</PillTag>
                ))}
              </div>
            </div>

            {/* Proof metrics */}
            <div className="grid grid-cols-3 gap-4">
              {PROOF_METRICS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-card p-4 text-center"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--bg-border)",
                  }}
                >
                  <div
                    className="font-display font-bold text-2xl text-brand-gradient"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {m.metric}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <blockquote
              className="mt-8 rounded-card p-5 italic text-sm"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--bg-border)",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
              }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. P4SaMD transformed our
              approach to regulatory compliance, cutting our time-to-market significantly."
              <footer className="mt-3 not-italic label-caps">
                — Customer, Global MedTech Enterprise
              </footer>
            </blockquote>
          </div>

          {/* Right col — HubSpot form */}
          <div
            className="rounded-card p-8"
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
            <h2
              className="font-display font-semibold text-xl mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Book your demo
            </h2>
            <HubSpotForm />
          </div>
        </div>
      </div>
    </section>
  );
}
