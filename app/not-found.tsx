import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";

export default function NotFound() {
  return (
    <section className="py-40" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <PillTag className="mb-6">404</PillTag>
        <h1
          className="font-display font-bold mb-4"
          style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.035em" }}
        >
          Page not found.
        </h1>
        <p className="text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center h-11 px-6 rounded-lg font-semibold text-sm bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
          >
            Go home →
          </Link>
          <Link
            href="/request-demo"
            className="inline-flex items-center h-11 px-6 rounded-lg font-semibold text-sm border transition-colors hover:bg-white/5"
            style={{ borderColor: "var(--bg-border-strong)", color: "var(--text-primary)" }}
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
