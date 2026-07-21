import type { Metadata } from "next";
import { SITE } from "@/data/site.it";

export const metadata: Metadata = {
  title: { absolute: "P4SaMD: Piattaforma di Sviluppo SaMD Conforme — Mia-Care" },
  description:
    "P4SaMD integra la conformità a IEC 62304, EU MDR, EU AI Act e GAMP 5 direttamente nel tuo SDLC.",
  alternates: {
    canonical: "/it",
    languages: {
      en: "/",
      it: "/it",
      "x-default": "/",
    },
  },
};

// Placeholder — Batch 1 replaces this with the translated homepage (see docs/adr/0001-*.md).
export default function ItalianHome() {
  return (
    <section className="py-40" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <h1
          className="font-display font-bold mb-4"
          style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.03em" }}
        >
          {SITE.name} — versione italiana in arrivo
        </h1>
        <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
          Stiamo costruendo la versione italiana del sito. Torna a trovarci a breve.
        </p>
      </div>
    </section>
  );
}
