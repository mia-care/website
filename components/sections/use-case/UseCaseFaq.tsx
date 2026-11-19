import { RichText } from "@/components/common/RichText";
import type { UseCase } from "@/data/use-cases";

export function UseCaseFaq({ uc }: { uc: UseCase }) {
  if (!uc.faq?.items.length) return null;

  return (
    <section
      className="py-20"
      style={{ background: "var(--bg-base)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-display font-bold mb-10"
          style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}
        >
          {uc.faq.heading}
        </h2>
        <div className="space-y-8">
          {uc.faq.items.map((item) => (
            <div key={item.q}>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {item.q}
              </h3>
              <p className="text-base" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                <RichText text={item.a} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
