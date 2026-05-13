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
    author: "Dr. Elena Rossi",
    modified: "2026-02-20",
    vars: 6,
    selected: true,
  },
  {
    name: "Notified Body Submission Cover",
    author: "Marco Bianchi",
    modified: "2026-01-10",
    vars: 6,
    selected: false,
  },
  {
    name: "AI Performance Summary",
    author: "Dr. Sara Verdi",
    modified: "2026-03-01",
    vars: 4,
    selected: false,
  },
];

const LINES: { id: string; text: React.ReactNode; varIdx?: number }[] = [
  {
    id: "title",
    text: (
      <>
        <span style={{ color: "#60A5FA" }}># Release Note — </span>
        <span className="tpl-var" data-idx="0">
          {"{{product.name}}"}
        </span>
        <span style={{ color: "#60A5FA" }}> </span>
        <span className="tpl-var" data-idx="1">
          {"{{product.version}}"}
        </span>
      </>
    ),
  },
  {
    id: "date",
    text: (
      <>
        <span style={{ color: "#94A3B8" }}>{"**Date:** "}</span>
        <span className="tpl-var" data-idx="4">
          {"{{meta.date}}"}
        </span>
      </>
    ),
  },
  { id: "h-summary", text: <span style={{ color: "#34D399" }}>{"## Summary"}</span> },
  {
    id: "summary-body",
    text: (
      <>
        <span style={{ color: "#94A3B8" }}>This release covers </span>
        <span className="tpl-var" data-idx="0">
          {"{{product.name}}"}
        </span>
        <span style={{ color: "#94A3B8" }}> version </span>
        <span className="tpl-var" data-idx="1">
          {"{{product.version}}"}
        </span>
      </>
    ),
  },
  { id: "h-quality", text: <span style={{ color: "#34D399" }}>{"## Quality Metrics"}</span> },
  {
    id: "pass-rate",
    text: (
      <>
        <span style={{ color: "#94A3B8" }}>{"- Test Pass Rate: "}</span>
        <span className="tpl-var" data-idx="2">
          {"{{tests.passRate}}"}
        </span>
      </>
    ),
  },
  {
    id: "risks",
    text: (
      <>
        <span style={{ color: "#94A3B8" }}>{"- Unacceptable Risks: "}</span>
        <span className="tpl-var" data-idx="3">
          {"{{risks.unacceptable}}"}
        </span>
      </>
    ),
  },
  { id: "h-changes", text: <span style={{ color: "#34D399" }}>{"## Changes"}</span> },
  {
    id: "changes-body",
    text: (
      <span className="tpl-var" data-idx="5">
        {"{{changes.list}}"}
      </span>
    ),
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
    { label: "Variable Library", icon: NAV_ICONS.variableLibrary },
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

        {/* Markdown preview */}
        <div
          style={{
            flex: 1,
            borderRadius: 8,
            background: "#0F172A",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "5px 10px",
              background: "#1E293B",
              borderBottom: "1px solid #334155",
              display: "flex",
              alignItems: "center",
              gap: 6,
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: 9.5, color: "#94A3B8" }}>Markdown Preview</span>
            {!compact && (
              <span style={{ fontSize: 9.5, color: "#475569" }}>— Internal Release Note</span>
            )}
          </div>
          <div
            style={{
              flex: 1,
              padding: "8px 12px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: compact ? 2 : 4,
            }}
          >
            {(compact ? LINES.slice(0, 5) : LINES).map((line) => (
              <div
                key={line.id}
                style={{
                  fontFamily: "ui-monospace, monospace",
                  fontSize: compact ? 9 : 10,
                  lineHeight: 1.5,
                  color: "#94A3B8",
                }}
              >
                <LineRenderer line={line} activeVar={activeVar} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PlatformShell>
  );
}

function LineRenderer({ line, activeVar }: { line: (typeof LINES)[0]; activeVar: number | null }) {
  // Re-render the line with highlighted variables
  const content = line.text;
  if (activeVar === null) return <>{content}</>;

  // We need to walk the JSX and highlight matching var spans
  // Since we can't easily traverse React elements, we use a string-based approach for the preview
  const varStr = VARIABLES[activeVar];
  return <HighlightedLine content={content} varStr={varStr} />;
}

function HighlightedLine({ content, varStr }: { content: React.ReactNode; varStr: string }) {
  // Clone children and highlight matching text
  function highlight(node: React.ReactNode): React.ReactNode {
    if (typeof node === "string") {
      if (node === varStr) {
        return (
          <span
            style={{ background: "#4C1D95", color: "#C4B5FD", borderRadius: 3, padding: "0 2px" }}
          >
            {node}
          </span>
        );
      }
      return node;
    }
    // biome-ignore lint/suspicious/noArrayIndexKey: arbitrary ReactNode array, no stable id
    if (Array.isArray(node)) return node.map((n, i) => <span key={i}>{highlight(n)}</span>);
    return node;
  }
  return <>{highlight(content)}</>;
}
