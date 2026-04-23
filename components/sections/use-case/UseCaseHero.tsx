import { HelixSvg } from "@/components/common/HelixSvg";
import { PillTag } from "@/components/common/PillTag";
import type { UseCase } from "@/data/use-cases";

export function UseCaseHero({ uc }: { uc: UseCase }) {
  return (
    <section
      className="relative overflow-hidden pt-20 pb-16"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,240,150,0.07) 0%, transparent 55%)",
      }}
    >
      <div className="absolute right-0 top-0 hidden lg:block pointer-events-none">
        <HelixSvg width={280} height={500} opacity={0.06} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-6">{uc.segment}</PillTag>
        <h1
          className="font-display font-bold mb-4 leading-tight"
          style={{ fontSize: "clamp(36px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
        >
          {uc.name}
        </h1>
        <p
          className="max-w-2xl text-lg"
          style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
        >
          {uc.tagline}
        </p>
      </div>
    </section>
  );
}
