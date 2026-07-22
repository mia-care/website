"use client";

import { useEffect, useRef, useState } from "react";
import { CveScanSvg } from "@/components/common/capability-svgs/CveScanSvg";
import { SbomDashboardSvg } from "@/components/common/capability-svgs/SbomDashboardSvg";
import { SecureComponentLibrarySvg } from "@/components/common/capability-svgs/SecureComponentLibrarySvg";
import { SecureSoftwareItemsSvg } from "@/components/common/capability-svgs/SecureSoftwareItemsSvg";
import { PillTag } from "@/components/common/PillTag";

const TABS = {
  en: [
    {
      label: "SBOM",
      caption:
        "Software Bill of Materials: every third-party dependency tracked, versioned, and continuously checked against the NVD, GitHub Advisory, and OSV databases. One new CVE disclosure triggers an immediate alert across every affected project.",
      Component: SbomDashboardSvg,
      wrapStyle: {} as React.CSSProperties,
    },
    {
      label: "CVE Scan",
      caption:
        "Vulnerability scanner: automated CVSS-scored findings across the full dependency graph, with patch-ready upgrade paths surfaced inline. Critical findings are mapped to their IEC 81001-5-1 compliance impact before the team even opens the ticket.",
      Component: CveScanSvg,
      wrapStyle: {} as React.CSSProperties,
    },
    {
      label: "Implementation Verification",
      caption:
        "Continuous verification of implementation against software specifications at every level (design files, code, and test artifacts), enabling early detection of anomalies before they propagate into the compliance record.",
      Component: SecureComponentLibrarySvg,
      wrapStyle: {} as React.CSSProperties,
    },
    {
      label: "Software Items",
      caption:
        "Software item traceability: every component in the system hierarchy verified against its specification. The platform confirms each item is documented, tested, and compliant before it can advance through the IEC 62304 lifecycle.",
      Component: SecureSoftwareItemsSvg,
      wrapStyle: {} as React.CSSProperties,
    },
  ],
  it: [
    {
      label: "SBOM",
      caption:
        "Software Bill of Materials: ogni dipendenza di terze parti tracciata, versionata e verificata continuamente rispetto ai database NVD, GitHub Advisory e OSV. Una nuova disclosure CVE attiva un alert immediato su tutti i progetti interessati.",
      Component: SbomDashboardSvg,
      wrapStyle: {} as React.CSSProperties,
    },
    {
      label: "CVE Scan",
      caption:
        "Scanner delle vulnerabilità: risultati automatizzati con punteggio CVSS su tutto il grafo delle dipendenze, con percorsi di upgrade pronti da applicare mostrati in linea. I risultati critici sono mappati al loro impatto di compliance IEC 81001-5-1 ancora prima che il team apra il ticket.",
      Component: CveScanSvg,
      wrapStyle: {} as React.CSSProperties,
    },
    {
      label: "Verifica dell'Implementazione",
      caption:
        "Verifica continua dell'implementazione rispetto alle specifiche software a ogni livello (file di design, codice e artefatti di test), permettendo il rilevamento precoce delle anomalie prima che si propaghino nel record di compliance.",
      Component: SecureComponentLibrarySvg,
      wrapStyle: {} as React.CSSProperties,
    },
    {
      label: "Software Item",
      caption:
        "Tracciabilità dei software item: ogni componente nella gerarchia di sistema verificato rispetto alla propria specifica. La piattaforma conferma che ogni item sia documentato, testato e conforme prima di poter avanzare nel ciclo di vita IEC 62304.",
      Component: SecureSoftwareItemsSvg,
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

export function SoftwareDevelopmentInActionSection({ locale = "en" }: { locale?: "en" | "it" }) {
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
