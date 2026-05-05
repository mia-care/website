"use client";

import { useEffect, useRef, useState } from "react";

const RISK_TITLE = "Incorrect arrhythmia classification leading to missed diagnosis";
const HARM_TEXT =
  "Delayed treatment of atrial fibrillation, potentially leading to stroke or other…";

const ROWS = [
  {
    id: "r0",
    code: "MCRISK-001",
    version: null,
    inherent: "Unacceptable",
    residual: "ALARP",
    cls: "3",
  },
  {
    id: "r1",
    code: "MCRISK-001",
    version: "v2.1.0",
    inherent: "ALARP",
    residual: "Acceptable",
    cls: "3",
  },
  {
    id: "r2",
    code: "MCRISK-001",
    version: null,
    inherent: "ALARP",
    residual: "Acceptable",
    cls: "3",
  },
  {
    id: "r3",
    code: "MCRISK-001",
    version: null,
    inherent: "ALARP",
    residual: "Acceptable",
    cls: "3",
  },
];

const RISK_PILL: Record<string, React.CSSProperties> = {
  Unacceptable: { background: "#FEF3C7", color: "#D97706", border: "1px solid #FDE68A" },
  ALARP: { background: "#FEF3C7", color: "#D97706", border: "1px solid #FDE68A" },
  Acceptable: { background: "#DCFCE7", color: "#16A34A", border: "1px solid #A7F3D0" },
};

const BETWEEN_MS = 800;
const REVEAL_MS = 500;
const HOLD_MS = 2200;
const RESET_MS = 500;

function SyncIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M13 3A6 6 0 003 8M3 13a6 6 0 0010-5"
        stroke="#3B82F6"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M11 1l2 2-2 2M5 15l-2-2 2-2"
        stroke="#3B82F6"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TargetIcon({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="1.3" />
      <circle cx="8" cy="8" r="3" stroke={color} strokeWidth="1.3" />
      <circle cx="8" cy="8" r="1" fill={color} />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5" stroke="#9CA3AF" strokeWidth="1.3" />
      <path d="M11 11l3 3" stroke="#9CA3AF" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function SecureSoftwareSvg() {
  const [visibleRows, setVisibleRows] = useState<boolean[]>([false, false, false, false]);
  const [unacceptable, setUnacceptable] = useState(5);
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
      setVisibleRows([false, false, false, false]);
      setUnacceptable(5);

      ROWS.forEach((row, i) => {
        const at = REVEAL_MS + i * BETWEEN_MS;
        later(() => {
          setVisibleRows((v) => {
            const n = [...v];
            n[i] = true;
            return n;
          });
          // when a row with Acceptable residual appears, decrement unacceptable count
          if (row.residual === "Acceptable") {
            setUnacceptable((u) => Math.max(0, u - 1));
          }
        }, at);
      });

      later(run, REVEAL_MS + ROWS.length * BETWEEN_MS + HOLD_MS + RESET_MS);
    };

    run();
    return clear;
  }, []);

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
        padding: "14px 16px 10px",
        gap: 10,
      }}
    >
      <style>{`
        @keyframes rm-slide {
          from { opacity: 0; transform: translateY(5px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── Header ── */}
      <div>
        <div style={{ fontWeight: 800, fontSize: 15, color: "#0A0A0A" }}>Risk Management</div>
        <div style={{ fontSize: 9, color: "#6B7280", marginTop: 2, lineHeight: 1.4 }}>
          Hazard identification, risk estimation, control &amp; residual risk evaluation per ISO
          14971
        </div>
      </div>

      {/* ── Stat cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 7 }}>
        <div
          style={{
            border: "1px solid #E5E7EB",
            borderRadius: 8,
            padding: "8px 10px",
            background: "#FAFAFA",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <span style={{ fontSize: 9, color: "#6B7280", fontWeight: 500 }}>Total Risks</span>
            <SyncIcon />
          </div>
          <div style={{ fontWeight: 800, fontSize: 22, color: "#0A0A0A", lineHeight: 1 }}>12</div>
        </div>

        <div
          style={{
            border: "1px solid #FDE68A",
            borderRadius: 8,
            padding: "8px 10px",
            background: "#FFFBEB",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <span style={{ fontSize: 9, color: "#D97706", fontWeight: 500 }}>Unacceptable</span>
            <TargetIcon color="#D97706" />
          </div>
          <div
            style={{
              fontWeight: 800,
              fontSize: 22,
              color: "#D97706",
              lineHeight: 1,
              transition: "color 0.3s",
            }}
          >
            {unacceptable}
          </div>
        </div>

        <div
          style={{
            border: "1px solid #FDE68A",
            borderRadius: 8,
            padding: "8px 10px",
            background: "#FFFBEB",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <span style={{ fontSize: 9, color: "#D97706", fontWeight: 500 }}>ALARP</span>
            <TargetIcon color="#D97706" />
          </div>
          <div style={{ fontWeight: 800, fontSize: 22, color: "#D97706", lineHeight: 1 }}>1</div>
        </div>
      </div>

      {/* ── Search + filters ── */}
      <div style={{ display: "flex", gap: 6 }}>
        <div
          style={{
            flex: 1,
            border: "1px solid #E5E7EB",
            borderRadius: 7,
            padding: "5px 9px",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <SearchIcon />
          <span style={{ fontSize: 9.5, color: "#9CA3AF" }}>Search requirements…</span>
        </div>
        {["Status", "Severity"].map((f) => (
          <div
            key={f}
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: 7,
              padding: "5px 9px",
              fontSize: 9.5,
              color: "#374151",
              display: "flex",
              alignItems: "center",
              gap: 3,
              whiteSpace: "nowrap",
              background: "white",
            }}
          >
            {f} <span style={{ fontSize: 8, color: "#9CA3AF" }}>▾</span>
          </div>
        ))}
      </div>

      {/* ── Table ── */}
      <div
        style={{
          flex: 1,
          border: "1px solid #E5E7EB",
          borderRadius: 8,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        {/* Column headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1.6fr 84px 84px 20px",
            padding: "5px 10px",
            background: "#F9FAFB",
            borderBottom: "1px solid #E5E7EB",
            gap: 8,
            flexShrink: 0,
          }}
        >
          {["Risk / Hazard", "Harm", "Inherent Risk", "Residual Risk", "C"].map((h) => (
            <div key={h} style={{ fontSize: 9, color: "#6B7280", fontWeight: 600 }}>
              {h}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div style={{ flex: 1, overflowY: "hidden" }}>
          {ROWS.map((row, rowIndex) => (
            <div
              key={row.id}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1.6fr 84px 84px 20px",
                padding: "7px 10px",
                borderBottom: "1px solid #F3F4F6",
                gap: 8,
                alignItems: "start",
                opacity: visibleRows[rowIndex] ? 1 : 0,
                transform: visibleRows[rowIndex] ? "translateY(0)" : "translateY(5px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              {/* Risk / Hazard */}
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 10,
                    color: "#0A0A0A",
                    lineHeight: 1.35,
                    marginBottom: 3,
                  }}
                >
                  {RISK_TITLE}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
                  {row.version && (
                    <span
                      style={{
                        background: "#EFF6FF",
                        color: "#2563EB",
                        border: "1px solid #BFDBFE",
                        borderRadius: 4,
                        padding: "1px 5px",
                        fontSize: 8,
                        fontWeight: 700,
                        fontFamily: "ui-monospace,monospace",
                      }}
                    >
                      {row.version}
                    </span>
                  )}
                  <span
                    style={{
                      fontSize: 8.5,
                      color: "#6B7280",
                      fontFamily: "ui-monospace,monospace",
                    }}
                  >
                    {row.code}
                  </span>
                  <span
                    style={{
                      background: "#F3F4F6",
                      color: "#6B7280",
                      borderRadius: 20,
                      padding: "1px 6px",
                      fontSize: 8,
                      fontWeight: 500,
                    }}
                  >
                    Patient
                  </span>
                </div>
              </div>

              {/* Harm */}
              <div style={{ fontSize: 9, color: "#6B7280", lineHeight: 1.45, overflow: "hidden" }}>
                {HARM_TEXT}
              </div>

              {/* Inherent Risk */}
              <div>
                <span
                  style={{
                    ...RISK_PILL[row.inherent],
                    borderRadius: 20,
                    padding: "2px 7px",
                    fontSize: 8.5,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.inherent}
                </span>
              </div>

              {/* Residual Risk */}
              <div>
                <span
                  style={{
                    ...RISK_PILL[row.residual],
                    borderRadius: 20,
                    padding: "2px 7px",
                    fontSize: 8.5,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.residual}
                </span>
              </div>

              {/* Class */}
              <div style={{ fontSize: 9.5, color: "#6B7280", textAlign: "center" }}>{row.cls}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
