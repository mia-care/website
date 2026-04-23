import { PillTag } from "@/components/blocks/shared/PillTag";
import { COMPLIANCE_STANDARDS } from "@/data/nav";

export function ComplianceStrip() {
  return (
    <section
      className="py-16"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="label-caps mb-8">Compliant with</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {COMPLIANCE_STANDARDS.map((std) => (
            <PillTag key={std}>{std}</PillTag>
          ))}
        </div>
      </div>
    </section>
  );
}
