"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

const GROUPS = [
  {
    name: "Product",
    count: 7,
    vars: [
      { key: "{{product.name}}", label: "Product Name", example: "CardioAI Diagnostic" },
      { key: "{{product.version}}", label: "Product Version", example: "v2.1.0" },
      { key: "{{product.classification}}", label: "Device Classification", example: "Class IIa" },
      { key: "{{product.manufacturer}}", label: "Manufacturer Name", example: "Mia-Care S.r.l." },
    ],
  },
  {
    name: "Requirements",
    count: 5,
    vars: [
      { key: "{{requirements.total}}", label: "Total Requirements", example: "47" },
      { key: "{{requirements.approved}}", label: "Approved Requirements", example: "41" },
      { key: "{{requirements.list}}", label: "Full Requirements Table", example: "[table]" },
    ],
  },
  {
    name: "Risk Management",
    count: 4,
    vars: [
      { key: "{{risks.total}}", label: "Total Risks", example: "15" },
      { key: "{{risks.unacceptable}}", label: "Unacceptable Risks", example: "2" },
      { key: "{{risks.matrix}}", label: "Risk Matrix (5×5)", example: "[matrix]" },
    ],
  },
];

const SEARCH_STEPS = ["", "r", "ri", "ris", "risk"];

export function DocumentationVariablesSvg() {
  const [search, setSearch] = useState("");
  const [highlightedRow, setHighlightedRow] = useState<string | null>(null);
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
      setSearch("");
      setHighlightedRow(null);

      // Type "risk" character by character
      let delay = 800;
      for (const s of SEARCH_STEPS) {
        const step = s;
        later(() => setSearch(step), delay);
        delay += 260;
      }

      // Highlight first risk variable
      later(() => setHighlightedRow("{{risks.total}}"), delay);
      delay += 700;
      later(() => setHighlightedRow("{{risks.unacceptable}}"), delay);
      delay += 700;
      later(() => setHighlightedRow("{{risks.matrix}}"), delay);
      delay += 700;

      // Clear and reset
      later(() => setHighlightedRow(null), delay);
      later(() => setSearch(""), delay + 400);
      later(run, delay + 1200);
    };

    run();
    return clear;
  }, []);

  const filter = search.toLowerCase();
  const filtered = GROUPS.map((g) => ({
    ...g,
    vars: g.vars.filter(
      (v) =>
        !filter ||
        v.key.includes(filter) ||
        v.label.toLowerCase().includes(filter) ||
        g.name.toLowerCase().includes(filter),
    ),
  })).filter((g) => !filter || g.vars.length > 0 || g.name.toLowerCase().includes(filter));

  const p = compact ? 8 : 14;
  const gap = compact ? 6 : 10;

  const DOC_NAV = [
    { label: "Document Catalog", icon: NAV_ICONS.documentCatalog },
    { label: "Document Detail", icon: NAV_ICONS.documentDetail },
    { label: "Custom Templates", icon: NAV_ICONS.customTemplates },
    { label: "Variable Library", icon: NAV_ICONS.variableLibrary, active: true },
  ];

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "Variable Library"]}
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
        @keyframes var-highlight { 0% { background:#EDE9FE; } 100% { background:#F5F3FF; } }
      `}</style>

        {/* Header */}
        <div>
          <div style={{ fontWeight: 700, fontSize: compact ? 13 : 14 }}>
            Template Variable Library
          </div>
          {!compact && (
            <div style={{ color: "#737373", fontSize: 9, marginTop: 2 }}>
              Use variables in Markdown templates — resolved at generation time from live project
              data
            </div>
          )}
        </div>

        {/* Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid #E5E5E5",
            borderRadius: 8,
            padding: "5px 10px",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="5" stroke="#9CA3AF" strokeWidth="1.3" />
            <path d="M11 11l3 3" stroke="#9CA3AF" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 10, color: search ? "#0A0A0A" : "#D1D5DB", flex: 1 }}>
            {search || "Search variables by key, label, or category…"}
            {search && (
              <span
                style={{
                  borderLeft: "1px solid #6366F1",
                  marginLeft: 1,
                  animation: "blink 1s step-end infinite",
                }}
              />
            )}
          </span>
        </div>

        {/* Variable groups */}
        <div
          style={{ flex: 1, overflowY: "hidden", display: "flex", flexDirection: "column", gap: 8 }}
        >
          {filtered.map((group) => (
            <div
              key={group.name}
              style={{ border: "1px solid #E5E5E5", borderRadius: 8, overflow: "hidden" }}
            >
              {/* Group header */}
              <div
                style={{
                  padding: "5px 10px",
                  background: "#F8FAFC",
                  borderBottom: "1px solid #F1F5F9",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 2,
                    background: "#CBD5E1",
                    display: "inline-block",
                  }}
                />
                <span style={{ fontWeight: 600, fontSize: 11, color: "#475569" }}>
                  {group.name}
                </span>
                <span style={{ fontSize: 9.5, color: "#94A3B8" }}>({group.count})</span>
              </div>

              {/* Rows */}
              {group.vars.map((v, ri) => (
                <div
                  key={v.key}
                  style={{
                    display: "grid",
                    gridTemplateColumns: compact ? "1fr auto" : "180px 1fr auto",
                    padding: compact ? "5px 8px" : "6px 10px",
                    borderBottom: ri < group.vars.length - 1 ? "1px solid #F3F4F6" : undefined,
                    background:
                      highlightedRow === v.key ? "#EDE9FE" : ri % 2 === 0 ? "white" : "#F8FAFC",
                    transition: "background 0.2s",
                    alignItems: "center",
                    animation: highlightedRow === v.key ? "var-highlight 0.3s ease" : undefined,
                  }}
                >
                  <span
                    style={{
                      background: highlightedRow === v.key ? "#DDD6FE" : "#F5F3FF",
                      border: `1px solid ${highlightedRow === v.key ? "#7C3AED" : "#DDD6FE"}`,
                      borderRadius: 4,
                      padding: "1px 6px",
                      fontSize: 8.5,
                      fontWeight: 600,
                      color: "#7C3AED",
                      fontFamily: "ui-monospace, monospace",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      transition: "all 0.2s",
                    }}
                  >
                    {v.key}
                  </span>
                  {!compact && (
                    <span style={{ fontSize: 10.5, color: "#475569", paddingLeft: 10 }}>
                      {v.label}
                    </span>
                  )}
                  {!compact && (
                    <span
                      style={{
                        fontSize: 9.5,
                        color: "#94A3B8",
                        fontFamily: "ui-monospace, monospace",
                      }}
                    >
                      <span style={{ color: "#CBD5E1", marginRight: 4 }}>e.g.</span>
                      {v.example}
                    </span>
                  )}
                  {compact && (
                    <span
                      style={{
                        fontSize: 9,
                        color: "#94A3B8",
                        paddingLeft: 8,
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {v.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Info banner */}
        {!compact && (
          <div
            style={{
              background: "#EFF6FF",
              border: "1px solid #BFDBFE",
              borderRadius: 8,
              padding: "6px 10px",
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              style={{ flexShrink: 0, marginTop: 1 }}
            >
              <circle cx="8" cy="8" r="6.5" stroke="#2563EB" strokeWidth="1.3" />
              <path d="M8 7v4M8 5.5v.5" stroke="#2563EB" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: 8.5, color: "#1E3A8A", lineHeight: 1.5 }}>
              Variables use double curly braces{" "}
              <code
                style={{
                  background: "white",
                  border: "1px solid #BFDBFE",
                  borderRadius: 3,
                  padding: "0 3px",
                  color: "#1D4ED8",
                  fontSize: 8,
                }}
              >
                {"{{variable.key}}"}
              </code>{" "}
              — table and matrix variables render as formatted tables at generation time.
            </span>
          </div>
        )}
      </div>
    </PlatformShell>
  );
}
