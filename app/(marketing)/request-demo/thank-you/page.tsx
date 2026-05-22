import type { Metadata } from "next";
import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";

export const metadata: Metadata = {
  title: "Demo Request Received — Mia-Care",
  robots: { index: false, follow: false },
};

const NEXT_STEPS = [
  {
    step: "1",
    title: "We review your context",
    body: "Before the call we look at your regulatory environment and toolchain so we don't waste your time on a generic demo.",
  },
  {
    step: "2",
    title: "You get a calendar invite",
    body: "One email with a confirmed time slot. No back-and-forth scheduling.",
  },
  {
    step: "3",
    title: "Live session — no scripts",
    body: "A 1h call scoped to your situation. Bring your real questions.",
  },
];

export default function RequestDemoThankYouPage() {
  return (
    <section
      className="py-20 flex items-center"
      style={{ background: "var(--bg-base)", minHeight: "70vh" }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="mx-auto mb-8 flex items-center justify-center w-16 h-16 rounded-full"
          style={{
            background: "rgba(0,240,150,0.1)",
            border: "1px solid rgba(0,240,150,0.25)",
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "var(--brand-green)" }}
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <PillTag className="mb-6">Request received</PillTag>

        <h1
          className="font-display font-bold mb-4 leading-tight"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.035em" }}
        >
          You're on our radar.
        </h1>

        <p
          className="text-base mb-10 max-w-lg mx-auto"
          style={{ color: "var(--text-primary)", lineHeight: 1.75, opacity: 0.8 }}
        >
          Our team will reach out to confirm a time that works for you and to tailor the session to
          your regulatory context.
        </p>

        <div
          className="rounded-card p-8 mb-10 text-left"
          style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
        >
          <h2
            className="font-display font-semibold text-base mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            What happens next
          </h2>
          <ol className="space-y-6">
            {NEXT_STEPS.map(({ step, title, body }) => (
              <li key={step} className="flex gap-4">
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{
                    background: "rgba(0,240,150,0.1)",
                    color: "var(--brand-green)",
                    border: "1px solid rgba(0,240,150,0.2)",
                  }}
                >
                  {step}
                </span>
                <div>
                  <p
                    className="font-semibold text-sm mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {title}
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/product"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:-translate-y-px"
            style={{
              background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
              color: "#0b0c10",
            }}
          >
            Explore the platform
          </Link>
          <Link
            href="/resources"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-colors"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--bg-border)",
              color: "var(--text-primary)",
            }}
          >
            Browse resources
          </Link>
        </div>
      </div>
    </section>
  );
}
