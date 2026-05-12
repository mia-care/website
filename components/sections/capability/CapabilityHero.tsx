import Link from "next/link";
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
          className="max-w-2xl text-base mb-8"
          style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
        >
          {cap.description}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <Link
            href="/request-demo"
            className="inline-flex items-center justify-center h-11 px-6 rounded-lg font-semibold text-sm bg-brand-gradient text-bg-base transition-opacity hover:opacity-90 w-full sm:w-auto"
          >
            Request a Demo →
          </Link>
          <Link
            href="/resources/mia-care-product-demo"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg font-semibold text-sm transition-colors hover:opacity-80 w-full sm:w-auto"
            style={{
              border: "1px solid var(--bg-border-strong)",
              color: "var(--text-primary)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="6.5" stroke="currentColor" />
              <path d="M5.5 4.5l5 2.5-5 2.5V4.5z" fill="currentColor" />
            </svg>
            Watch Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
