import { PillTag } from "@/components/common/PillTag";
import type { Capability } from "@/data/capabilities";

const COPY = {
  en: {
    label: "Standards Addressed",
    heading: "Built to satisfy the standards that matter most to your auditors.",
  },
  it: {
    label: "Standard Coperti",
    heading: "Costruito per soddisfare gli standard più importanti per i tuoi auditor.",
  },
};

export function RegulationsList({ cap, locale = "en" }: { cap: Capability; locale?: "en" | "it" }) {
  const t = COPY[locale];
  return (
    <section
      className="py-16"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="label-caps mb-6">{t.label}</p>
        <h2
          className="font-display font-bold mb-8 max-w-xl"
          style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}
        >
          {t.heading}
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
