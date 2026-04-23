import Link from "next/link";
import { PillTag } from "@/components/blocks/shared/PillTag";
import type { Capability } from "@/data/capabilities";
import { useCases } from "@/data/use-cases";

export function RelatedUseCases({ cap }: { cap: Capability }) {
  const related = useCases.filter((uc) => cap.relatedUseCases.includes(uc.slug));

  return (
    <section className="py-20" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-8">Related Use Cases</PillTag>
        <h2
          className="font-display font-bold mb-10"
          style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}
        >
          See it in action.
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {related.map((uc) => (
            <Link
              key={uc.slug}
              href={`/use-cases/${uc.slug}`}
              className="group rounded-card p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--bg-border)",
              }}
            >
              <PillTag>{uc.segment}</PillTag>
              <h3
                className="font-display font-semibold text-base leading-snug group-hover:text-brand-green transition-colors"
                style={{ color: "var(--text-primary)" }}
              >
                {uc.name}
              </h3>
              <span
                className="mt-auto text-xs font-semibold transition-colors group-hover:text-brand-green"
                style={{ color: "var(--text-muted)" }}
              >
                Read Use Case →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
