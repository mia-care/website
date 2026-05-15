"use client";

import { ArttTraceabilityMatrixSvg } from "@/components/common/capability-svgs/ArttTraceabilityMatrixSvg";
import { PillTag } from "@/components/common/PillTag";

export function ArttInActionSection() {
  return (
    <section
      className="py-20"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-8">In Action</PillTag>

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
          Traceability matrix — live coverage across requirements, changes, and risks mitigated.
          Every link is maintained automatically as the project evolves.
        </p>
      </div>
    </section>
  );
}
