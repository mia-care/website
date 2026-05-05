"use client";

import { useEffect, useRef, useState } from "react";

type RowStatus = "idle" | "generating" | "current";

const DOCS = [
  {
    code: "SDP",
    name: "Software Development Plan",
    standard: "IEC 62304 §5.1",
    version: "3.1",
    updated: "2026-03-04",
    formats: ["PDF", "DOCX"],
  },
  {
    code: "SRS",
    name: "Software Requirements Spec.",
    standard: "IEC 62304 §5.2",
    version: "4.2",
    updated: "2026-03-05",
    formats: ["PDF", "DOCX", "MD"],
  },
  {
    code: "SAD",
    name: "Software Architecture Document",
    standard: "IEC 62304 §5.3",
    version: "2.4",
    updated: "2026-03-02",
    formats: ["PDF", "DOCX"],
  },
];

const FORMAT_STYLE: Record<string, React.CSSProperties> = {
  PDF: { background: "#FEE2E2", color: "#DC2626" },
  DOCX: { background: "#EFF6FF", color: "#2563EB" },
  MD: { background: "#F3F4F6", color: "#6B7280" },
};

const START_CURRENT = 14;
const START_NOT_GEN = 8;
const DRAFT = 8;
const NEEDS_UPDATE = 2;
const FROM_TEMPLATES = 3;
const TOTAL = 32;

export function DocumentationEngineSvg() {
  const [rowStates, setRowStates] = useState<RowStatus[]>(["idle", "idle", "idle"]);
  const [currentCount, setCurrentCount] = useState(START_CURRENT);
  const [notGenCount, setNotGenCount] = useState(START_NOT_GEN);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clear = () => timers.current.forEach(clearTimeout);
    const later = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timers.current.push(t);
    };

    const run = () => {
      clear();
      timers.current = [];
      setRowStates(["idle", "idle", "idle"]);
      setCurrentCount(START_CURRENT);
      setNotGenCount(START_NOT_GEN);

      later(() => {
        setRowStates((s) => {
          const n = [...s];
          n[0] = "generating";
          return n;
        });
        setNotGenCount((c) => c - 1);
      }, 500);
      later(() => {
        setRowStates((s) => {
          const n = [...s];
          n[0] = "current";
          return n;
        });
        setCurrentCount((c) => c + 1);
      }, 1400);
      later(() => {
        setRowStates((s) => {
          const n = [...s];
          n[1] = "generating";
          return n;
        });
        setNotGenCount((c) => c - 1);
      }, 1900);
      later(() => {
        setRowStates((s) => {
          const n = [...s];
          n[1] = "current";
          return n;
        });
        setCurrentCount((c) => c + 1);
      }, 2800);
      later(() => {
        setRowStates((s) => {
          const n = [...s];
          n[2] = "generating";
          return n;
        });
        setNotGenCount((c) => c - 1);
      }, 3300);
      later(() => {
        setRowStates((s) => {
          const n = [...s];
          n[2] = "current";
          return n;
        });
        setCurrentCount((c) => c + 1);
      }, 4200);
      later(run, 6800);
    };

    run();
    return clear;
  }, []);

  const statCards = [
    { label: "Total Documents", value: TOTAL, color: "#525252", bg: "white" },
    { label: "Current", value: currentCount, color: "#059669", bg: "#F0FDF4" },
    { label: "Draft", value: DRAFT, color: "#D97706", bg: "#FFFBEB" },
    { label: "Needs Update", value: NEEDS_UPDATE, color: "#EA580C", bg: "#FFF7ED" },
    { label: "Not Generated", value: notGenCount, color: "#737373", bg: "white" },
    { label: "From Templates", value: FROM_TEMPLATES, color: "#EA580C", bg: "white" },
  ];

  return (
    <div
      style={{
        background: "white",
        borderRadius: 12,
        border: "1px solid #E5E5E5",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        fontSize: 12,
        color: "#0A0A0A",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        padding: "14px 16px 12px",
        gap: 10,
      }}
    >
      <style>{`
        @keyframes doc-fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        @keyframes doc-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* ── Header ── */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 14 }}>Documentation</div>
          <div style={{ color: "#737373", fontSize: 9, marginTop: 2, lineHeight: 1.4 }}>
            eQMS-compliant document catalog — generate, download, and manage your Technical
            Documentation File
          </div>
        </div>
        <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
          <div
            style={{
              border: "1px solid #E5E5E5",
              borderRadius: 7,
              padding: "4px 7px",
              fontSize: 9,
              color: "#525252",
              background: "white",
              display: "flex",
              alignItems: "center",
              gap: 3,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#9333EA", fontWeight: 700 }}>{"{}"}</span> Variable Library
          </div>
          <div
            style={{
              background: "#2563EB",
              color: "white",
              border: "none",
              borderRadius: 7,
              padding: "4px 8px",
              fontSize: 9,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 3,
              whiteSpace: "nowrap",
            }}
          >
            ↓ Export (ZIP)
          </div>
        </div>
      </div>

      {/* ── Stat cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 5 }}>
        {statCards.map((c) => (
          <div
            key={c.label}
            style={{
              border: "1px solid #E5E5E5",
              borderRadius: 8,
              padding: "6px 7px",
              background: c.bg,
              transition: "background 0.4s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: c.color,
                fontSize: 8,
                lineHeight: 1.2,
                fontWeight: 500,
              }}
            >
              {c.label}
            </div>
            <div
              style={{
                fontWeight: 800,
                fontSize: 18,
                color: c.color,
                lineHeight: 1,
                transition: "color 0.3s",
                marginTop: 4,
              }}
            >
              {c.value}
            </div>
          </div>
        ))}
      </div>

      {/* ── Search bar ── */}
      <div style={{ display: "flex", gap: 6 }}>
        <div
          style={{
            flex: 1,
            border: "1px solid #E5E5E5",
            borderRadius: 8,
            padding: "5px 10px",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="5" stroke="#9CA3AF" strokeWidth="1.3" />
            <path d="M11 11l3 3" stroke="#9CA3AF" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <span style={{ color: "#9CA3AF", fontSize: 10 }}>
            Search by title, code, or standard…
          </span>
        </div>
        <div
          style={{
            border: "1px solid #E5E5E5",
            borderRadius: 8,
            padding: "5px 10px",
            fontSize: 10,
            color: "#525252",
            background: "white",
            display: "flex",
            alignItems: "center",
            gap: 4,
            whiteSpace: "nowrap",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M2 4h12M4 8h8M6 12h4"
              stroke="#525252"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
          Filters
        </div>
      </div>

      {/* ── Table ── */}
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
        {/* Section header */}
        <div
          style={{
            background: "#FAFAFA",
            padding: "6px 10px",
            borderBottom: "1px solid #E5E5E5",
            display: "flex",
            alignItems: "center",
            gap: 6,
            flexShrink: 0,
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 3l3 4 3-4" stroke="#737373" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M6 2h4M4 6h8M4 10h8"
              stroke="#2563EB"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
          <span style={{ fontWeight: 600, fontSize: 11 }}>Design &amp; Development</span>
          <span style={{ color: "#737373", fontSize: 10 }}>(7 documents)</span>
        </div>

        {/* Column headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "38px 1fr 82px 40px 74px 80px",
            padding: "4px 10px",
            background: "#F9FAFB",
            borderBottom: "1px solid #E5E5E5",
            flexShrink: 0,
          }}
        >
          {["Code", "Document", "Status", "Ver.", "Last Updated", "Formats"].map((h) => (
            <div key={h} style={{ color: "#9CA3AF", fontSize: 9, fontWeight: 600 }}>
              {h}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div style={{ flex: 1, overflowY: "hidden" }}>
          {DOCS.map((doc, i) => {
            const status = rowStates[i];
            if (status === "idle") return null;
            return (
              <div
                key={doc.code}
                style={{
                  display: "grid",
                  gridTemplateColumns: "38px 1fr 82px 40px 74px 80px",
                  padding: "7px 10px",
                  borderBottom: "1px solid #F3F4F6",
                  alignItems: "center",
                  animation: "doc-fade-in 0.35s ease",
                }}
              >
                {/* Code */}
                <div style={{ fontWeight: 700, fontSize: 11, color: "#0A0A0A" }}>{doc.code}</div>

                {/* Document name */}
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#0A0A0A",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {doc.name}
                  </div>
                  <div style={{ fontSize: 8.5, color: "#9CA3AF" }}>{doc.standard}</div>
                </div>

                {/* Status */}
                <div>
                  {status === "generating" ? (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        background: "#FEF9C3",
                        color: "#CA8A04",
                        borderRadius: 20,
                        padding: "2px 7px",
                        fontSize: 9,
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        style={{ animation: "doc-spin 0.8s linear infinite", flexShrink: 0 }}
                      >
                        <path
                          d="M8 2a6 6 0 100 12A6 6 0 008 2z"
                          stroke="#CA8A04"
                          strokeWidth="1.5"
                          strokeDasharray="20 10"
                        />
                      </svg>
                      Generating…
                    </span>
                  ) : (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        background: "#DCFCE7",
                        color: "#059669",
                        border: "1px solid #A7F3D0",
                        borderRadius: 20,
                        padding: "2px 7px",
                        fontSize: 9,
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      <svg width="9" height="9" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M3 8l4 4 6-6"
                          stroke="#059669"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                      Current
                    </span>
                  )}
                </div>

                {/* Version */}
                <div style={{ fontSize: 10, color: "#525252" }}>{doc.version}</div>

                {/* Last Updated */}
                <div style={{ fontSize: 9.5, color: "#525252" }}>{doc.updated}</div>

                {/* Format badges */}
                <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                  {status === "current" &&
                    doc.formats.map((f) => (
                      <span
                        key={f}
                        style={{
                          ...FORMAT_STYLE[f],
                          borderRadius: 4,
                          padding: "1px 5px",
                          fontSize: 8.5,
                          fontWeight: 700,
                        }}
                      >
                        {f}
                      </span>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
