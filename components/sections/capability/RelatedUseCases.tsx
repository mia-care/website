import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";
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
              className="group rounded-card p-8 flex flex-col gap-4 transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--bg-border)",
              }}
            >
              <PillTag variant="tag">{uc.segment}</PillTag>
              <h3
                className="font-display font-bold text-lg leading-snug transition-colors group-hover:text-brand-green"
                style={{ color: "var(--text-primary)" }}
              >
                {uc.name}
              </h3>
              <p
                className="text-sm flex-1"
                style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
              >
                {uc.tagline}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold mt-2 transition-colors text-[var(--brand-green)] group-hover:gap-2.5">
                Read Use Case
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
