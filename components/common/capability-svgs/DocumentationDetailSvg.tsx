"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

type Phase = "idle" | "regenerating" | "done";

const REVISIONS_INITIAL = [
  {
    ver: "4.2",
    desc: "Regenerated with latest requirement changes (MCCR-007) — 47 requirements tracked",
    date: "2026-03-05",
    by: "System",
    latest: true,
  },
  {
    ver: "4.1",
    desc: "Added 3 new functional requirements for AI module patient data handling",
    date: "2026-02-20",
    by: "System",
    latest: false,
  },
  {
    ver: "4.0",
    desc: "Major revision — AI module requirements incorporated from MCCR-003",
    date: "2026-01-12",
    by: "Dr. Elena Rossi",
    latest: false,
  },
];

const NEW_REVISION = {
  ver: "4.3",
  desc: "Auto-regenerated — MCCR-012 merged: 2 new interface requirements added",
  date: "2026-03-06",
  by: "System",
  latest: true,
};

export function DocumentationDetailSvg() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [revisions, setRevisions] = useState(REVISIONS_INITIAL);
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
      setPhase("idle");
      setRevisions(REVISIONS_INITIAL);

      later(() => setPhase("regenerating"), 1500);
      later(() => {
        setPhase("done");
        setRevisions([
          { ...NEW_REVISION },
          ...REVISIONS_INITIAL.map((r) => ({ ...r, latest: false })),
        ]);
      }, 3200);
      later(run, 7000);
    };

    run();
    return clear;
  }, []);

  const badgeStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    background: "#F0FDF4",
    border: "1px solid #BBF7D0",
    borderRadius: 20,
    padding: "2px 8px",
    fontSize: 9,
    fontWeight: 600,
    color: "#15803D",
  };

  const p = compact ? 8 : 14;
  const gap = compact ? 6 : 10;

  const DOC_NAV = [
    { label: "Document Catalog", icon: NAV_ICONS.documentCatalog },
    { label: "Document Detail", icon: NAV_ICONS.documentDetail, active: true },
    { label: "Custom Templates", icon: NAV_ICONS.customTemplates },
    { label: "Variable Library", icon: NAV_ICONS.variableLibrary },
  ];

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "Document Detail"]}
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
        @keyframes doc-detail-fade { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }
        @keyframes doc-detail-spin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
      `}</style>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          {!compact && (
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "#EFF6FF",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M4 4L2 8l2 4M12 4l2 4-2 4M6 2l4 12"
                  stroke="#2563EB"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
              <span
                style={{
                  background: "#F1F5F9",
                  border: "1px solid #E2E8F0",
                  borderRadius: 5,
                  padding: "1px 6px",
                  fontSize: 9,
                  fontWeight: 700,
                  color: "#475569",
                }}
              >
                SRS
              </span>
              <span style={badgeStyle}>
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#16A34A",
                    display: "inline-block",
                  }}
                />
                Current
              </span>
              {!compact && (
                <span
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: 20,
                    padding: "1px 7px",
                    fontSize: 9,
                    color: "#64748B",
                  }}
                >
                  Platform
                </span>
              )}
            </div>
            <div style={{ fontWeight: 700, fontSize: compact ? 12 : 13, marginTop: 4 }}>
              Software Requirements Specification
            </div>
            {!compact && (
              <div style={{ color: "#64748B", fontSize: 9.5, marginTop: 1 }}>
                IEC 62304 §5.2 · IEC 82304-1 §6 · ISO 13485 §7.3
              </div>
            )}
          </div>
          <div style={{ display: "flex", gap: compact ? 3 : 5, flexShrink: 0 }}>
            {(compact ? ["PDF"] : ["PDF", "DOCX", "MD"]).map((f) => (
              <span
                key={f}
                style={{
                  borderRadius: 6,
                  padding: "3px 7px",
                  fontSize: 9,
                  fontWeight: 700,
                  background: f === "PDF" ? "#FEE2E2" : f === "DOCX" ? "#DBEAFE" : "#F1F5F9",
                  color: f === "PDF" ? "#B91C1C" : f === "DOCX" ? "#1D4ED8" : "#475569",
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Meta row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: compact ? "repeat(2,1fr)" : "repeat(4,1fr)",
            gap: 6,
            padding: "6px 0",
            borderTop: "1px solid #F1F5F9",
            borderBottom: "1px solid #F1F5F9",
          }}
        >
          {(compact
            ? [
                ["Version", revisions[0]?.ver ?? "4.2"],
                ["Auto-Generate", "Yes"],
              ]
            : [
                ["Version", revisions[0]?.ver ?? "4.2"],
                ["Last Generated", "2026-03-05"],
                ["Pages", "52"],
                ["Auto-Generate", "Yes"],
              ]
          ).map(([label, val]) => (
            <div key={label}>
              <div style={{ fontSize: 8.5, color: "#94A3B8" }}>{label}</div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: compact ? 12 : 13,
                  color: label === "Auto-Generate" ? "#15803D" : "#0F172A",
                  marginTop: 2,
                }}
              >
                {val}
              </div>
            </div>
          ))}
        </div>

        {/* Revision history */}
        <div
          style={{
            flex: 1,
            border: "1px solid #E5E5E5",
            borderRadius: 8,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "6px 10px",
              background: "#F9FAFB",
              borderBottom: "1px solid #E5E5E5",
              display: "flex",
              alignItems: "center",
              gap: 6,
              flexShrink: 0,
            }}
          >
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6" stroke="#475569" strokeWidth="1.3" />
              <path d="M8 5v3l2 2" stroke="#475569" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <span style={{ fontWeight: 600, fontSize: 11 }}>Revision History</span>
          </div>
          <div style={{ flex: 1, overflowY: "hidden" }}>
            {revisions.map((r, i) => (
              <div
                key={r.ver}
                style={{
                  padding: "7px 10px",
                  borderBottom: "1px solid #F3F4F6",
                  background: r.latest ? "#EFF6FF" : i % 2 === 0 ? "#F8FAFC" : "white",
                  animation:
                    i === 0 && phase === "done" && r.ver === "4.3"
                      ? "doc-detail-fade 0.4s ease"
                      : undefined,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      background: r.latest ? "white" : undefined,
                      border: "1px solid #E2E8F0",
                      borderRadius: 4,
                      padding: "1px 6px",
                      fontSize: 9,
                      fontWeight: 700,
                      color: "#475569",
                      flexShrink: 0,
                    }}
                  >
                    {r.ver}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      color: r.latest ? "#1E3A8A" : "#475569",
                      flex: 1,
                      minWidth: 0,
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {r.desc}
                  </span>
                </div>
                <div style={{ fontSize: 8.5, color: "#94A3B8", marginTop: 3, paddingLeft: 44 }}>
                  {r.date} · by {r.by}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 14px",
              borderRadius: 8,
              border: "none",
              fontSize: 11,
              fontWeight: 600,
              background: phase === "regenerating" ? "#1E40AF" : "#0052CC",
              color: "white",
              cursor: "default",
            }}
          >
            {phase === "regenerating" ? (
              <>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  style={{ animation: "doc-detail-spin 0.7s linear infinite" }}
                >
                  <path
                    d="M8 2a6 6 0 100 12A6 6 0 008 2z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeDasharray="20 10"
                  />
                </svg>
                Regenerating…
              </>
            ) : (
              <>
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M4 8a4 4 0 014-4 4 4 0 012.8 1.2M12 8a4 4 0 01-4 4 4 4 0 01-2.8-1.2"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11.8 4.2L12.8 1l1 3.2"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Regenerate
              </>
            )}
          </button>
          {!compact && (
            <button
              type="button"
              style={{
                padding: "6px 12px",
                borderRadius: 8,
                border: "1px solid #E2E8F0",
                background: "white",
                fontSize: 11,
                color: "#475569",
                cursor: "default",
              }}
            >
              Preview
            </button>
          )}
        </div>
      </div>
    </PlatformShell>
  );
}
