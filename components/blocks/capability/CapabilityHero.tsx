import { PillTag } from "@/components/blocks/shared/PillTag";
import type { Capability } from "@/data/capabilities";

export function CapabilityHero({ cap }: { cap: Capability }) {
  return (
    <section className="relative overflow-hidden bg-bg-base pt-32 pb-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0,240,150,0.10) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mb-4 flex justify-center">
          <PillTag>{cap.code}</PillTag>
        </div>
        <h1 className="font-display mb-5 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl">
          {cap.name}
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-lg font-medium text-text-secondary">
          {cap.tagline}
        </p>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-text-secondary">
          {cap.description}
        </p>
      </div>
    </section>
  );
}
