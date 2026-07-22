"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/blog";

const COPY = {
  en: { aria: "Table of contents", onThisPage: "On this page" },
  it: { aria: "Indice dei contenuti", onThisPage: "In questa pagina" },
};

export function TableOfContents({
  headings,
  locale = "en",
}: {
  headings: Heading[];
  locale?: "en" | "it";
}) {
  const t = COPY[locale];
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -70% 0px" },
    );

    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label={t.aria}>
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: "var(--text-muted)" }}
      >
        {t.onThisPage}
      </p>
      <ol className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? "0.75rem" : "0" }}>
            <a
              href={`#${h.id}`}
              className="block text-sm py-0.5 transition-colors leading-snug"
              style={{
                color: activeId === h.id ? "var(--brand-green)" : "var(--text-secondary)",
                borderLeft:
                  activeId === h.id ? "2px solid var(--brand-green)" : "2px solid transparent",
                paddingLeft: "0.5rem",
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
