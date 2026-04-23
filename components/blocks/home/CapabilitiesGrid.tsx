import Link from "next/link";
import { PillTag } from "@/components/blocks/shared/PillTag";
import { capabilities } from "@/data/capabilities";

export function CapabilitiesGrid() {
  return (
    <section className="py-24" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <PillTag className="mb-6">The Platform</PillTag>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}
          >
            Eight capabilities. One platform.
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            P4SaMD orchestrates your entire SDLC — from requirements to release — with regulatory
            compliance enforced at every stage.
          </p>
        </div>

        {/* 4×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap) => (
            <Link
              key={cap.slug}
              href={`/capabilities/${cap.slug}`}
              className="group rounded-card p-6 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--bg-border)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* top gradient line */}
              <span
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--brand-green), transparent)",
                  opacity: 0,
                  transition: "opacity 0.2s",
                }}
                aria-hidden="true"
              />
              <span className="label-caps" style={{ color: "var(--brand-green)", opacity: 0.7 }}>
                {cap.code}
              </span>
              <h3
                className="font-display font-semibold text-base leading-snug"
                style={{ color: "var(--text-primary)" }}
              >
                {cap.name}
              </h3>
              <p
                className="text-sm flex-1"
                style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}
              >
                {cap.tagline}
              </p>
              <span
                className="mt-2 text-xs font-semibold flex items-center gap-1 transition-colors group-hover:text-brand-green"
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
