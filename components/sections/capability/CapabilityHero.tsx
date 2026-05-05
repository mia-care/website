import { PillTag } from "@/components/common/PillTag";
import type { Capability } from "@/data/capabilities";

export function CapabilityHero({ cap }: { cap: Capability }) {
  return (
    <section
      className="relative overflow-hidden pt-20 pb-16"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 60% 0%, rgba(0,240,150,0.07) 0%, transparent 55%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-6">{cap.code}</PillTag>
        <h1
          className="font-display font-bold mb-4 leading-tight"
          style={{ fontSize: "clamp(36px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
        >
          {cap.name}
        </h1>
        <p className="text-xl mb-4 font-medium" style={{ color: "var(--text-secondary)" }}>
          {cap.tagline}
        </p>
        <p
          className="max-w-2xl text-base"
          style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
        >
          {cap.description}
        </p>
      </div>
    </section>
  );
}
