"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

const VARIABLES = [
  "{{product.name}}",
  "{{product.version}}",
  "{{tests.passRate}}",
  "{{risks.unacceptable}}",
  "{{meta.date}}",
  "{{changes.list}}",
];

const TEMPLATES = [
  {
    name: "Internal Release Note",
    author: "Elena Rossi",
    modified: "2026-02-20",
    vars: 6,
    selected: true,
  },
  {
    name: "Software Test Report",
    author: "Marco Bianchi",
    modified: "2026-01-10",
    vars: 6,
    selected: false,
  },
  {
    name: "AI Performance Summary",
    author: "Sara Verdi",
    modified: "2026-03-01",
    vars: 4,
    selected: false,
  },
  {
    name: "Risk Analysis",
    author: "Elena Rossi",
    modified: "2026-04-05",
    vars: 5,
    selected: false,
  },
  {
    name: "Software Bill of Materials",
    author: "Marco Bianchi",
    modified: "2026-04-18",
    vars: 3,
    selected: false,
  },
];

export function DocumentationTemplatesSvg() {
  const [activeVar, setActiveVar] = useState<number | null>(null);
  const [compact, setCompact] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setCompact(entry.contentRect.width < 480);
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const clear = () => timers.current.forEach(clearTimeout);
    const later = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timers.current.push(t);
    };

    const run = () => {
      clear();
      timers.current = [];
      setActiveVar(null);

      let delay = 800;
      for (let i = 0; i < VARIABLES.length; i++) {
        const idx = i;
        later(() => setActiveVar(idx), delay);
        delay += 900;
      }
      later(() => setActiveVar(null), delay);
      later(run, delay + 600);
    };

    run();
    return clear;
  }, []);

  const p = compact ? 8 : 14;
  const gap = compact ? 6 : 10;

  const DOC_NAV = [
    { label: "Document Catalog", icon: NAV_ICONS.documentCatalog },
    { label: "Document Detail", icon: NAV_ICONS.documentDetail },
    { label: "Custom Templates", icon: NAV_ICONS.customTemplates, active: true },
  ];

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "Custom Templates"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard }}
      sections={[{ title: "Documentation", items: DOC_NAV }]}
    >
      <div
        ref={wrapRef}
        style={{
          background: "white",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          fontSize: compact ? 11 : 12,
          color: "#0A0A0A",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          padding: `${p}px ${p + 2}px ${p - 2}px`,
          gap,
        }}
      >
        <style>{`
        @keyframes tpl-pulse { 0%,100% { opacity:1; } 50% { opacity:0.6; } }
      `}</style>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: compact ? 13 : 14 }}>
              Custom Document Templates
            </div>
            {!compact && (
              <div style={{ color: "#737373", fontSize: 9, marginTop: 2 }}>
                Markdown templates with interpolated variables from live project data
              </div>
            )}
          </div>
          <div
            style={{
              background: "#0052CC",
              color: "white",
              borderRadius: 7,
              padding: "4px 10px",
              fontSize: 9,
              fontWeight: 700,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            + New Template
          </div>
        </div>

        {/* Template cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: compact ? 4 : 6 }}>
          {(compact ? TEMPLATES.slice(0, 2) : TEMPLATES).map((t) => (
            <div
              key={t.name}
              style={{
                border: t.selected ? "1.5px solid #0052CC" : "1px solid #E5E5E5",
                borderRadius: 8,
                padding: compact ? "6px 8px" : "8px 10px",
                background: t.selected ? "#F0F6FF" : "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 6,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0 }}>
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 2,
                      background: "#FEF3C7",
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: 11,
                      color: "#0F172A",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {t.name}
                  </span>
                </div>
                <span style={{ fontSize: 8.5, color: "#94A3B8", flexShrink: 0 }}>
                  {t.vars} vars
                </span>
              </div>
              {!compact && (
                <div style={{ fontSize: 8.5, color: "#94A3B8", marginTop: 2, paddingLeft: 16 }}>
                  by {t.author} · {t.modified}
                </div>
              )}
              {t.selected && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 4,
                    marginTop: compact ? 4 : 6,
                    paddingLeft: 16,
                  }}
                >
                  {VARIABLES.map((v, i) => (
                    <span
                      key={v}
                      style={{
                        background: activeVar === i ? "#DDD6FE" : "#F5F3FF",
                        border: `1px solid ${activeVar === i ? "#7C3AED" : "#DDD6FE"}`,
                        borderRadius: 4,
                        padding: "1px 5px",
                        fontSize: 8,
                        fontWeight: 600,
                        color: activeVar === i ? "#5B21B6" : "#7C3AED",
                        transition: "all 0.25s",
                        animation: activeVar === i ? "tpl-pulse 0.6s ease" : undefined,
                      }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PlatformShell>
  );
}
