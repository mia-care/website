"use client";

import { useEffect, useRef, useState } from "react";
import { DocumentationDetailSvg } from "@/components/common/capability-svgs/DocumentationDetailSvg";
import { DocumentationEngineSvg } from "@/components/common/capability-svgs/DocumentationEngineSvg";
import { DocumentationTemplatesSvg } from "@/components/common/capability-svgs/DocumentationTemplatesSvg";
import { PillTag } from "@/components/common/PillTag";

const TABS = {
  en: [
    {
      label: "Document Catalog",
      caption:
        "Document catalog: all DHF records grouped by category, with live status, version tracking, and one-click export across PDF, DOCX, and MD formats.",
      Component: DocumentationEngineSvg,
    },
    {
      label: "Document Detail",
      caption:
        "Document detail: full revision history, regulatory references, linked artifacts, and one-click regeneration from live project data.",
      Component: DocumentationDetailSvg,
    },
    {
      label: "Custom Templates",
      caption:
        "Custom templates: write Markdown templates with interpolated variables that pull live project data at generation time, for any document your process requires.",
      Component: DocumentationTemplatesSvg,
    },
  ],
  it: [
    {
      label: "Catalogo Documenti",
      caption:
        "Catalogo documenti: tutti i record DHF raggruppati per categoria, con stato live, versionamento e export in un click nei formati PDF, DOCX e MD.",
      Component: DocumentationEngineSvg,
    },
    {
      label: "Dettaglio Documento",
      caption:
        "Dettaglio documento: storico completo delle revisioni, riferimenti normativi, artefatti collegati e rigenerazione in un click a partire dai dati live di progetto.",
      Component: DocumentationDetailSvg,
    },
    {
      label: "Template Personalizzati",
      caption:
        "Template personalizzati: scrivi template Markdown con variabili interpolate che recuperano i dati live di progetto al momento della generazione, per qualsiasi documento richieda il tuo processo.",
      Component: DocumentationTemplatesSvg,
    },
  ],
};

const COPY = {
  en: { pill: "In Action", pauseAria: "Pause autoplay", resumeAria: "Resume autoplay" },
  it: {
    pill: "In Azione",
    pauseAria: "Metti in pausa l'autoplay",
    resumeAria: "Riprendi l'autoplay",
  },
};

const AUTO_ROTATE_MS = 18_000;

function PauseIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <rect x="1.5" y="1" width="2.5" height="8" rx="1" fill="currentColor" />
      <rect x="6" y="1" width="2.5" height="8" rx="1" fill="currentColor" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 1.5l7 3.5-7 3.5V1.5z" fill="currentColor" />
    </svg>
  );
}

export function DocumentationEngineInActionSection({ locale = "en" }: { locale?: "en" | "it" }) {
  const t = COPY[locale];
  const tabs = TABS[locale];
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
      return;
    }
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % tabs.length);
    }, AUTO_ROTATE_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, tabs.length]);

  const handleTabClick = (i: number) => {
    setActive(i);
    setIsPlaying(false);
  };

  const { caption, Component } = tabs[active];

  return (
    <section
      className="py-20"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <style>{`
        @keyframes inaction-progress {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0); }
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-8">{t.pill}</PillTag>

        {/* Tab strip + play/pause */}
        <div className="mb-8 flex items-center gap-2">
          <div
            className="overflow-x-auto flex-1 min-w-0"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div
              className="flex gap-1"
              style={{
                background: "var(--bg-raised)",
                border: "1px solid var(--bg-border)",
                borderRadius: 12,
                padding: 4,
                width: "max-content",
                minWidth: "100%",
              }}
            >
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => handleTabClick(i)}
                  className="shrink-0 px-4 rounded-lg text-sm font-medium transition-all"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    height: 44,
                    background: active === i ? "var(--bg-surface)" : "transparent",
                    color: active === i ? "var(--text-primary)" : "var(--text-muted)",
                    boxShadow: active === i ? "0 1px 3px rgba(0,0,0,0.12)" : "none",
                  }}
                >
                  {tab.label}
                  {active === i && isPlaying && (
                    <div
                      key={tab.label}
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: "var(--brand-green)",
                        transformOrigin: "left center",
                        animation: `inaction-progress ${AUTO_ROTATE_MS}ms linear forwards`,
                        borderRadius: 1,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? t.pauseAria : t.resumeAria}
            className="shrink-0 flex items-center justify-center transition-colors"
            style={{
              width: 44,
              height: 44,
              borderRadius: 8,
              background: "var(--bg-raised)",
              border: "1px solid var(--bg-border)",
              color: "var(--text-muted)",
            }}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>

        {/* SVG frame */}
        <div
          className="rounded-card overflow-hidden"
          style={{ border: "1px solid var(--bg-border)", background: "var(--bg-raised)" }}
        >
          <div key={active} className="h-[380px] sm:h-[420px] md:h-[480px] animate-fade-in-up">
            <Component />
          </div>
        </div>

        {/* Caption */}
        <p className="mt-4 text-sm text-center" style={{ color: "var(--text-muted)" }}>
          {caption}
        </p>
      </div>
    </section>
  );
}
