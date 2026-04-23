import { PillTag } from "@/components/common/PillTag";
import type { Capability } from "@/data/capabilities";

export function RegulationsList({ cap }: { cap: Capability }) {
  return (
    <section
      className="py-16"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="label-caps mb-6">Standards Addressed</p>
        <h2
          className="font-display font-bold mb-8 max-w-xl"
          style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}
        >
          Built to satisfy the standards that matter most to your auditors.
        </h2>
        <div className="flex flex-wrap gap-3">
          {cap.regulations.map((reg) => (
            <PillTag key={reg}>{reg}</PillTag>
          ))}
        </div>
      </div>
    </section>
  );
}
