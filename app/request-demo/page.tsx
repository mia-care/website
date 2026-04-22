import type { Metadata } from "next";
import { HubSpotForm } from "@/components/blocks/shared/HubSpotForm";

export const metadata: Metadata = {
  title: "Request a Demo — See P4SaMD in Your Context",
  description:
    "Book a live session with a P4SaMD solution architect. Platform demo scoped to your specific regulatory context: EU MDR, FDA, EU AI Act.",
};

const standards = [
  "EU MDR 2017/745",
  "IVDR 2017/746",
  "FDA",
  "ISO 13485",
  "ISO 14971",
  "21 CFR Part 820",
  "IEC 62304",
  "IEC 82304-1",
  "IEC 62366-1",
  "IEC 81001-5-1",
  "EU AI Act",
  "GMLP",
  "PCCP",
  "GDPR",
  "HIPAA",
];

const expectations = [
  "A 1h live session with a P4SaMD solution architect: no pre-recorded walk-through",
  "Platform demo scoped to your specific regulatory context: EU MDR, FDA, EU AI Act…",
  "A walk-through of how P4SaMD integrates with your existing tool stack without requiring migration",
  "Concrete answers to your compliance adherence over your tech stack",
  "A proposed implementation path tailored to your team size and timeline",
];

const results = [
  { metric: "3×", label: "Faster time-to-market" },
  { metric: "90%", label: "Less manual documentation" },
  { metric: "60%", label: "Remediation effort reduction" },
];

export default function RequestDemoPage() {
  return (
    <section className="bg-bg-base pt-32 pb-24" aria-labelledby="demo-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h1
              id="demo-heading"
              className="font-display mb-4 text-4xl font-bold text-text-primary md:text-5xl"
            >
              See compliance by design <span className="text-brand-green">in your context.</span>
            </h1>
            <p className="mb-8 text-base leading-relaxed text-text-secondary">
              We&apos;ll walk through how P4SaMD maps to your specific regulatory situation: your
              tools, your standards, your team structure. Starting from a discussion, Deep Dive into
              your use case.
            </p>

            <h2 className="font-display mb-4 text-lg font-semibold text-text-primary">
              What to expect
            </h2>
            <ul className="mb-10 space-y-3">
              {expectations.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-green"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-display mb-4 text-lg font-semibold text-text-primary">
              Standards covered in the demo
            </h2>
            <ul className="mb-10 flex flex-wrap gap-2" aria-label="Covered standards">
              {standards.map((s) => (
                <li
                  key={s}
                  className="rounded-pill border border-bg-border bg-bg-surface px-3 py-1 text-xs font-medium text-text-secondary"
                >
                  {s}
                </li>
              ))}
            </ul>

            <h2 className="font-display mb-4 text-lg font-semibold text-text-primary">
              Results our customers see
            </h2>
            <dl className="grid grid-cols-3 gap-4">
              {results.map((r) => (
                <div key={r.metric} className="text-center">
                  <dt className="font-display text-3xl font-bold text-brand-green">{r.metric}</dt>
                  <dd className="mt-1 text-sm text-text-secondary">{r.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative rounded-2xl border border-bg-border-strong bg-bg-surface p-px">
            <div
              className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-brand-gradient"
              aria-hidden="true"
            />
            <div className="rounded-2xl bg-bg-surface p-8">
              <h2 className="font-display mb-6 text-xl font-bold text-text-primary">
                Book your demo
              </h2>
              <HubSpotForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
