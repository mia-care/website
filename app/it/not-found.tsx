import type { Metadata } from "next";
import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";

export const metadata: Metadata = {
  title: "Pagina non trovata | Mia-Care",
  robots: { index: false, follow: false },
};

export default function NotFoundIt() {
  return (
    <section className="py-40" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <PillTag className="mb-6">404</PillTag>
        <h1
          className="font-display font-bold mb-4"
          style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.035em" }}
        >
          Pagina non trovata.
        </h1>
        <p className="text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/it"
            className="inline-flex items-center h-11 px-6 rounded-lg font-semibold text-sm bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
          >
            Torna alla home →
          </Link>
          <Link
            href="/it/richiedi-demo"
            className="inline-flex items-center h-11 px-6 rounded-lg font-semibold text-sm border transition-colors hover:bg-white/5"
            style={{ borderColor: "rgba(255,255,255,0.28)", color: "var(--text-primary)" }}
          >
            Richiedi una Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
