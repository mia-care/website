import Link from "next/link";
import { PillTag } from "@/components/blocks/shared/PillTag";
import { capabilities } from "@/data/capabilities";
import type { UseCase } from "@/data/use-cases";

export function CapabilitiesInvolved({ uc }: { uc: UseCase }) {
  const involved = capabilities.filter((c) => uc.capabilities.includes(c.slug));

  return (
    <section className="py-20" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-8">Capabilities Involved</PillTag>
        <h2
          className="font-display font-bold mb-10"
          style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}
        >
          The P4SaMD capabilities that power this use case.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {involved.map((cap) => (
            <Link
              key={cap.slug}
              href={`/capabilities/${cap.slug}`}
              className="group rounded-card p-5 flex flex-col gap-2 transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--bg-border)",
              }}
            >
              <span className="label-caps" style={{ color: "var(--brand-green)", opacity: 0.7 }}>
                {cap.code}
              </span>
              <h3
                className="font-display font-semibold text-sm leading-snug group-hover:text-brand-green transition-colors"
                style={{ color: "var(--text-primary)" }}
              >
                {cap.name}
              </h3>
              <span
                className="text-xs font-semibold mt-auto transition-colors group-hover:text-brand-green"
                style={{ color: "var(--text-muted)" }}
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
