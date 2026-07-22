"use client";

import { ArttTraceabilityMatrixSvg } from "@/components/common/capability-svgs/ArttTraceabilityMatrixSvg";
import { PillTag } from "@/components/common/PillTag";

const COPY = {
  en: {
    pill: "In Action",
    caption:
      "Traceability matrix: live coverage across requirements, changes, and risks mitigated. Every link is maintained automatically as the project evolves.",
  },
  it: {
    pill: "In Azione",
    caption:
      "Matrice di tracciabilità: copertura live su requisiti, modifiche e rischi mitigati. Ogni collegamento è mantenuto automaticamente man mano che il progetto evolve.",
  },
};

export function ArttInActionSection({ locale = "en" }: { locale?: "en" | "it" }) {
  const t = COPY[locale];
  return (
    <section
      className="py-20"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-8">{t.pill}</PillTag>

        {/* SVG frame */}
        <div
          className="rounded-card overflow-hidden"
          style={{ border: "1px solid var(--bg-border)", background: "var(--bg-raised)" }}
        >
          <div className="h-[380px] sm:h-[420px] md:h-[480px]">
            <ArttTraceabilityMatrixSvg />
          </div>
        </div>

        {/* Caption */}
        <p className="mt-4 text-sm text-center" style={{ color: "var(--text-muted)" }}>
          {t.caption}
        </p>
      </div>
    </section>
  );
}
