import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";
import { useCases } from "@/data/use-cases";

export function OtherUseCases({ currentSlug }: { currentSlug: string }) {
  const others = useCases.filter((uc) => uc.slug !== currentSlug);

  return (
    <section
      className="py-20"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-8">More Use Cases</PillTag>
        <h2
          className="font-display font-bold mb-10"
          style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}
        >
          Explore other ways teams use P4SaMD.
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {others.map((uc) => (
            <Link
              key={uc.slug}
              href={`/use-cases/${uc.slug}`}
              className="group rounded-card p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--bg-raised)",
                border: "1px solid var(--bg-border-strong)",
              }}
            >
              <span className="label-caps" style={{ color: "var(--brand-green)", opacity: 0.7 }}>
                {uc.segment}
              </span>
              <h3
                className="heading-card leading-snug transition-colors group-hover:text-brand-green"
                style={{ color: "var(--text-primary)" }}
              >
                {uc.name}
              </h3>
              <p className="text-sm line-clamp-2" style={{ color: "var(--text-muted)" }}>
                {uc.tagline}
              </p>
              <span
                className="text-xs font-semibold mt-auto transition-colors group-hover:text-brand-green"
                style={{ color: "var(--text-secondary)" }}
              >
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
