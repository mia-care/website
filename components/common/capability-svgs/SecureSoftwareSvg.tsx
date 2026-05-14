"use client";

import { useEffect, useRef, useState } from "react";

const ROWS = [
  {
    id: "r0",
    cve: "CVE-2025-47152",
    version: "0.2.1",
    score: "5.3",
    severity: "High",
    library: "axios 0.27.2",
    status: "Accepted",
  },
  {
    id: "r1",
    cve: "CVE-2023-45857",
    version: "0.2.1",
    score: "6.5",
    severity: "Medium",
    library: "axios 0.27.2",
    status: "Accepted",
  },
  {
    id: "r2",
    cve: "CVE-2025-5889",
    version: "—",
    score: "3.1",
    severity: "Low",
    library: "brace-expansion 1.1.11",
    status: "Open",
  },
  {
    id: "r3",
    cve: "CVE-2025-5889",
    version: "0.2.2",
    score: "3.1",
    severity: "Low",
    library: "brace-expansion 1.1.11",
    status: "Open",
  },
  {
    id: "r4",
    cve: "CVE-2024-47764",
    version: "latest",
    score: "3.7",
    severity: "Low",
    library: "cookie 0.5.0",
    status: "Accepted",
  },
  {
    id: "r5",
    cve: "CVE-2024-47764",
    version: "0.2.2",
    score: "3.7",
    severity: "Low",
    library: "cookie 0.5.0",
    status: "Accepted",
  },
];

const SEVERITY_STYLE: Record<string, React.CSSProperties> = {
  High: { background: "#FEE2E2", color: "#DC2626", border: "1px solid #FECACA" },
  Medium: { background: "#FEF3C7", color: "#D97706", border: "1px solid #FDE68A" },
  Low: { background: "#DBEAFE", color: "#2563EB", border: "1px solid #BFDBFE" },
};

const BETWEEN_MS = 700;
const REVEAL_MS = 400;
const HOLD_MS = 2400;
const RESET_MS = 500;

function RefreshIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M13 3A6 6 0 003 8M3 13a6 6 0 0010-5"
        stroke="#6B7280"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M11 1l2 2-2 2M5 15l-2-2 2-2"
        stroke="#6B7280"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M2.5 4L5 6.5 7.5 4"
        stroke="#9CA3AF"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SecureSoftwareSvg() {
  const [visibleRows, setVisibleRows] = useState<boolean[]>(ROWS.map(() => false));
  const [openCount, setOpenCount] = useState(4);
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
      setVisibleRows(ROWS.map(() => false));
      setOpenCount(4);

      ROWS.forEach((row, i) => {
        later(
          () => {
            setVisibleRows((v) => {
              const n = [...v];
              n[i] = true;
              return n;
            });
            if (row.status === "Accepted") {
              setOpenCount((c) => Math.max(0, c - 1));
            }
          },
          REVEAL_MS + i * BETWEEN_MS,
        );
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
        @media (max-width: 480px) {
          .ss-table { display: none !important; }
          .ss-cards { display: flex !important; }
          .ss-statnum { font-size: 16px !important; line-height: 1 !important; }
          .ss-statbox { padding: 6px 8px !important; }
        }
      `}</style>

      {/* ── Breadcrumb ── */}
      <div style={{ fontSize: 9, color: "#9CA3AF", display: "flex", alignItems: "center", gap: 4 }}>
        <span>Software System</span>
        <span style={{ color: "#D1D5DB" }}>›</span>
        <span>0.2.0</span>
        <span style={{ color: "#D1D5DB" }}>›</span>
        <span style={{ color: "#374151", fontWeight: 600 }}>mobile-bff 0.2.1</span>
      </div>

      {/* ── Stat cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 7 }}>
        {/* Total */}
        <div
          className="ss-statbox"
          style={{
            border: "1px solid #E5E7EB",
            borderRadius: 8,
            padding: "8px 10px",
            background: "#FAFAFA",
          }}
        >
          <div style={{ fontSize: 9, color: "#6B7280", fontWeight: 500, marginBottom: 4 }}>
            Total CVEs
          </div>
          <div
            className="ss-statnum"
            style={{ fontWeight: 800, fontSize: 22, color: "#0A0A0A", lineHeight: 1 }}
          >
            46
          </div>
        </div>
        {/* High */}
        <div
          className="ss-statbox"
          style={{
            border: "1px solid #FECACA",
            borderRadius: 8,
            padding: "8px 10px",
            background: "#FFF5F5",
          }}
        >
          <div style={{ fontSize: 9, color: "#DC2626", fontWeight: 500, marginBottom: 4 }}>
            High / Critical
          </div>
          <div
            className="ss-statnum"
            style={{ fontWeight: 800, fontSize: 22, color: "#DC2626", lineHeight: 1 }}
          >
            2
          </div>
        </div>
        {/* Open */}
        <div
          className="ss-statbox"
          style={{
            border: "1px solid #FDE68A",
            borderRadius: 8,
            padding: "8px 10px",
            background: "#FFFBEB",
          }}
        >
          <div style={{ fontSize: 9, color: "#D97706", fontWeight: 500, marginBottom: 4 }}>
            Open
          </div>
          <div
            className="ss-statnum"
            style={{
              fontWeight: 800,
              fontSize: 22,
              color: "#D97706",
              lineHeight: 1,
              transition: "color 0.3s",
            }}
          >
            {openCount}
          </div>
        </div>
      </div>

      {/* ── Header row ── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontWeight: 700, fontSize: 12 }}>Vulnerabilities</span>
          <RefreshIcon />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              border: "1px solid #E5E7EB",
              borderRadius: 5,
              padding: "3px 7px",
              fontSize: 9,
              color: "#374151",
            }}
          >
            Refresh rate: Off <ChevronIcon />
          </div>
          <div
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: 5,
              padding: "3px 6px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <RefreshIcon />
          </div>
        </div>
      </div>

      {/* ── Desktop: table ── */}
      <div
        className="ss-table"
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
            gridTemplateColumns: "2.2fr 0.7fr 1fr 1.4fr 1fr",
            padding: "5px 10px",
            background: "#F9FAFB",
            borderBottom: "1px solid #E5E7EB",
            gap: 6,
            flexShrink: 0,
          }}
        >
          {["Vulnerability name", "Version", "CVSS", "Affected library", "Status"].map((h) => (
            <div key={h} style={{ fontSize: 9, color: "#6B7280", fontWeight: 600 }}>
              {h}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div style={{ flex: 1, overflowY: "hidden" }}>
          {ROWS.map((row, i) => (
            <div
              key={row.id}
              style={{
                display: "grid",
                gridTemplateColumns: "2.2fr 0.7fr 1fr 1.4fr 1fr",
                padding: "6px 10px",
                borderBottom: "1px solid #F3F4F6",
                gap: 6,
                alignItems: "center",
                opacity: visibleRows[i] ? 1 : 0,
                transform: visibleRows[i] ? "translateY(0)" : "translateY(5px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              {/* CVE name */}
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 9.5,
                  color: "#2563EB",
                  fontFamily: "ui-monospace, monospace",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {row.cve}
              </div>

              {/* Version */}
              <div style={{ fontSize: 9, color: "#6B7280", fontFamily: "ui-monospace, monospace" }}>
                {row.version}
              </div>

              {/* CVSS */}
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 9.5, fontWeight: 700, color: "#0A0A0A" }}>
                  {row.score}
                </span>
                <span
                  style={{
                    ...SEVERITY_STYLE[row.severity],
                    borderRadius: 4,
                    padding: "1px 5px",
                    fontSize: 8,
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.severity}
                </span>
              </div>

              {/* Library */}
              <div
                style={{
                  fontSize: 9,
                  color: "#374151",
                  fontFamily: "ui-monospace, monospace",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {row.library}
              </div>

              {/* Status */}
              <div>
                {row.status === "Accepted" ? (
                  <span
                    style={{
                      background: "#DCFCE7",
                      color: "#16A34A",
                      border: "1px solid #A7F3D0",
                      borderRadius: 20,
                      padding: "2px 7px",
                      fontSize: 8,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    ✓ Accepted
                  </span>
                ) : (
                  <span
                    style={{
                      background: "white",
                      color: "#6B7280",
                      border: "1px solid #D1D5DB",
                      borderRadius: 20,
                      padding: "2px 7px",
                      fontSize: 8,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    ↗ Open
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 4,
            padding: "5px 10px",
            borderTop: "1px solid #F3F4F6",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 8.5, color: "#9CA3AF", marginRight: 6 }}>46 in total</span>
          {["‹", "1", "2", "3", "4", "5", "›"].map((p) => (
            <span
              key={p}
              style={{
                fontSize: 8.5,
                fontWeight: p === "2" ? 700 : 500,
                color: p === "2" ? "white" : "#6B7280",
                background: p === "2" ? "#2563EB" : "transparent",
                borderRadius: 3,
                padding: "1px 5px",
                minWidth: 16,
                textAlign: "center",
              }}
            >
              {p}
            </span>
          ))}
          <span style={{ fontSize: 8.5, color: "#9CA3AF", marginLeft: 4 }}>10 / page</span>
        </div>
      </div>

      {/* ── Mobile: card list ── */}
      <div
        className="ss-cards"
        style={{
          flex: 1,
          display: "none",
          flexDirection: "column",
          gap: 5,
          minHeight: 0,
          overflow: "hidden",
        }}
      >
        {ROWS.slice(0, 4).map((row, i) => (
          <div
            key={row.id}
            style={{
              flexShrink: 0,
              border: "1px solid #E5E7EB",
              borderRadius: 8,
              padding: "8px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              opacity: visibleRows[i] ? 1 : 0,
              transform: visibleRows[i] ? "translateY(0)" : "translateY(5px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 10,
                  color: "#2563EB",
                  fontFamily: "ui-monospace, monospace",
                }}
              >
                {row.cve}
              </div>
              <div style={{ fontSize: 9, color: "#9CA3AF", marginTop: 2 }}>{row.library}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span
                style={{
                  ...SEVERITY_STYLE[row.severity],
                  borderRadius: 4,
                  padding: "2px 6px",
                  fontSize: 8.5,
                  fontWeight: 700,
                }}
              >
                {row.severity}
              </span>
              {row.status === "Accepted" ? (
                <span
                  style={{
                    background: "#DCFCE7",
                    color: "#16A34A",
                    border: "1px solid #A7F3D0",
                    borderRadius: 20,
                    padding: "2px 7px",
                    fontSize: 8.5,
                    fontWeight: 600,
                  }}
                >
                  ✓
                </span>
              ) : (
                <span
                  style={{
                    border: "1px solid #D1D5DB",
                    borderRadius: 20,
                    padding: "2px 7px",
                    fontSize: 8.5,
                    color: "#6B7280",
                    fontWeight: 600,
                  }}
                >
                  ↗
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
