import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";

const TIERS = [
  { name: "Standard", target: "Small teams" },
  { name: "Professional", target: "Growing teams", highlight: true },
  { name: "Unlimited", target: "Enterprise" },
];

export function PlansBanner() {
  return (
    <section
      className="py-16"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <PillTag className="mb-4">Pricing</PillTag>
        <h2 className="heading-sub mb-3">Find the right plan for your team.</h2>
        <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
          From your first SaMD to enterprise-scale multi-product compliance — P4SaMD grows with you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col items-center px-6 py-4 rounded-xl w-full sm:w-auto sm:min-w-[140px]"
              style={{
                background: tier.highlight ? "rgba(255,255,255,0.06)" : "var(--bg-raised)",
                border: `1px solid ${tier.highlight ? "var(--bg-border-strong)" : "var(--bg-border)"}`,
              }}
            >
              <span
                className="text-sm font-semibold mb-0.5"
                style={{ color: "var(--text-primary)" }}
              >
                {tier.name}
              </span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                {tier.target}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/plans"
          className="inline-flex items-center h-10 px-6 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
            color: "var(--bg-base)",
          }}
        >
          View all plans →
        </Link>
      </div>
    </section>
  );
}
