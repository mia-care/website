import { PillTag } from "@/components/common/PillTag";
import type { Capability } from "@/data/capabilities";

export function FeatureCards({ cap }: { cap: Capability }) {
  return (
    <section className="py-20" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-8">Key Features</PillTag>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cap.features.map((feat) => (
            <div
              key={feat.title}
              className="rounded-card p-6 flex flex-col gap-3"
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
              <span className="label-caps" style={{ color: "var(--brand-green)", opacity: 0.7 }}>
                {feat.label}
              </span>
              <h3
                className="font-display font-semibold text-base leading-snug"
                style={{ color: "var(--text-primary)" }}
              >
                {feat.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
