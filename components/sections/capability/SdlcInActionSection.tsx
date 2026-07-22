"use client";

import { useEffect, useRef, useState } from "react";
import { SdlcBlueprintSvg } from "@/components/common/capability-svgs/SdlcBlueprintSvg";
import { SdlcConfigLogSvg } from "@/components/common/capability-svgs/SdlcConfigLogSvg";
import { SdlcWorkflowSvg } from "@/components/common/capability-svgs/SdlcWorkflowSvg";
import { PillTag } from "@/components/common/PillTag";

const TABS = {
  en: [
    {
      label: "Dashboard",
      caption:
        "Project dashboard: every active SDLC project in one view. Blocking tasks surfaced automatically with severity and effort estimates, so teams stay ahead of audits.",
      Component: SdlcWorkflowSvg,
      wrapStyle: {} as React.CSSProperties,
    },
    {
      label: "Integrations",
      caption:
        "Tool integrations: task managers, Git repositories, Mia-Platform Console, and Kubernetes clusters connected in minutes. Work items, commits, and runtime signals flow into a single IEC 62304-aligned audit trail automatically.",
      Component: SdlcBlueprintSvg,
      wrapStyle: {} as React.CSSProperties,
    },
    {
      label: "Audit Log",
      caption:
        "Audit log: every requirement change, risk update, and approval decision recorded with actor, timestamp, and role. Exportable as CSV for notified-body submissions and internal QMS reviews.",
      Component: SdlcConfigLogSvg,
      wrapStyle: {} as React.CSSProperties,
    },
  ],
  it: [
    {
      label: "Dashboard",
      caption:
        "Dashboard di progetto: ogni progetto SDLC attivo in un'unica vista. I task bloccanti emergono automaticamente con severità e stime di sforzo, così i team restano avanti rispetto agli audit.",
      Component: SdlcWorkflowSvg,
      wrapStyle: {} as React.CSSProperties,
    },
    {
      label: "Integrazioni",
      caption:
        "Integrazioni di strumenti: task manager, repository Git, Mia-Platform Console e cluster Kubernetes connessi in pochi minuti. Work item, commit e segnali runtime confluiscono automaticamente in un unico audit trail allineato a IEC 62304.",
      Component: SdlcBlueprintSvg,
      wrapStyle: {} as React.CSSProperties,
    },
    {
      label: "Audit Log",
      caption:
        "Audit log: ogni modifica ai requisiti, aggiornamento di rischio e decisione di approvazione registrati con attore, timestamp e ruolo. Esportabile in CSV per submission agli organismi notificati e review QMS interne.",
      Component: SdlcConfigLogSvg,
      wrapStyle: {} as React.CSSProperties,
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

const AUTO_ROTATE_MS = 20_000;

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

export function SdlcInActionSection({ locale = "en" }: { locale?: "en" | "it" }) {
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

  const { caption, Component, wrapStyle } = tabs[active];

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

          {/* Play/pause button */}
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
          style={{
            border: "1px solid var(--bg-border)",
            background: "var(--bg-raised)",
          }}
        >
          <div
            key={active}
            style={wrapStyle}
            className="h-[380px] sm:h-[460px] md:h-[560px] animate-fade-in-up"
          >
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
