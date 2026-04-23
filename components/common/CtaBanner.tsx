import Link from "next/link";
import { HelixSvg } from "@/components/common/HelixSvg";

export function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--bg-border)",
      }}
    >
      {/* Gradient top border */}
      <span
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--brand-gradient)" }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,240,150,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Helix decorations */}
      <div className="absolute left-0 top-0 hidden lg:block pointer-events-none">
        <HelixSvg width={200} height={400} opacity={0.05} />
      </div>
      <div
        className="absolute right-0 top-0 hidden lg:block pointer-events-none"
        style={{ transform: "scaleX(-1)" }}
      >
        <HelixSvg width={200} height={400} opacity={0.05} />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2
          className="font-display font-bold mb-4"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}
        >
          Ready to ship compliant software faster?
        </h2>
        <p className="text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
          Join the teams building the next generation of regulated medical software.
        </p>
        <Link
          href="/request-demo"
          className="inline-flex items-center h-13 px-8 rounded-lg font-semibold text-base bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
          style={{ height: 52 }}
        >
          Request a Demo →
        </Link>
      </div>
    </section>
  );
}
