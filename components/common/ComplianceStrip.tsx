import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";
import { COMPLIANCE_STANDARDS } from "@/data/nav";

export function ComplianceStrip() {
  return (
    <section
      className="py-16"
      style={{ background: "var(--bg-base)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="label-caps mb-8">Compliant with EU and US Regulations</h2>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {COMPLIANCE_STANDARDS.map((std) => (
            <PillTag key={std}>{std}</PillTag>
          ))}
        </div>
        <Link
          href="/product"
          className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:text-brand-green"
          style={{ color: "var(--text-primary)" }}
        >
          View full compliance coverage →
        </Link>
      </div>
    </section>
  );
}
