"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ICONS, PlatformShell } from "./PlatformShell";

const REQS = [
  {
    id: "REQ-001",
    title: "Safety interlock shutdown",
    status: "Closed",
    tests: 8,
    risks: 3,
    impl: 12,
  },
  {
    id: "REQ-002",
    title: "User data encryption at rest",
    status: "Closed",
    tests: 5,
    risks: 2,
    impl: 7,
  },
  {
    id: "REQ-003",
    title: "Authentication session timeout",
    status: "Open",
    tests: 0,
    risks: 1,
    impl: 4,
  },
  { id: "REQ-004", title: "Audit log immutability", status: "Closed", tests: 6, risks: 2, impl: 9 },
  {
    id: "REQ-005",
    title: "Graceful error recovery",
    status: "Review",
    tests: 4,
    risks: 1,
    impl: 6,
  },
];

const LINK_ROW = 2; // REQ-003

type Status = "Closed" | "Open" | "Review";

const STATUS_STYLES: Record<Status, { bg: string; color: string; border: string }> = {
  Closed: { bg: "#A7F3D0", color: "#059669", border: "1px solid #6EE7B7" },
  Open: { bg: "#FEF9C3", color: "#92400E", border: "1px solid #FDE68A" },
  Review: { bg: "#E0E7FF", color: "#4338CA", border: "1px solid #A5B4FC" },
};

export function ArttRequirementsListSvg() {
  const [visibleRows, setVisibleRows] = useState(0);
  const [linking, setLinking] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rowTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clearAll = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      rowTimers.current.forEach(clearTimeout);
      rowTimers.current = [];
    };

    const run = () => {
      setVisibleRows(0);
      setLinking(false);
      timerRef.current = setTimeout(() => {
        REQS.forEach((_, i) => {
          const t = setTimeout(() => setVisibleRows(i + 1), i * 150);
          rowTimers.current.push(t);
        });
        const revealDone = REQS.length * 150 + 500;
        timerRef.current = setTimeout(() => {
          setLinking(true);
          timerRef.current = setTimeout(() => {
            setLinking(false);
            timerRef.current = setTimeout(run, 700);
          }, 3000);
        }, revealDone);
      }, 500);
    };

    run();
    return clearAll;
  }, []);

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "Requirements"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard }}
      sections={[
        {
          title: "ARTT",
          items: [
            { label: "Requirements", icon: NAV_ICONS.requirements, active: true },
            { label: "Requirement Detail", icon: NAV_ICONS.requirementDetail },
            { label: "Coverage Monitor", icon: NAV_ICONS.coverageMonitor },
          ],
        },
      ]}
    >
      <div
        style={{
          background: "#F8F8F8",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          fontSize: 12,
          color: "#0A0A0A",
          overflow: "hidden",
        }}
      >
        <style>{`
        @keyframes artt-req-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 480px) {
          .artt-req-row { grid-template-columns: 90px 1fr 84px !important; }
          .artt-req-cnt { display: none !important; }
        }
      `}</style>

        {/* Header */}
        <div
          style={{
            background: "white",
            borderBottom: "1px solid #E5E5E5",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 14 }}>Requirements</div>
          <div style={{ display: "flex", gap: 8 }}>
            {["Filter ▾", "Export"].map((label) => (
              <span
                key={label}
                style={{
                  padding: "3px 10px",
                  borderRadius: 6,
                  border: "1px solid #E5E5E5",
                  background: "white",
                  color: "#737373",
                  fontSize: 11,
                  cursor: "default",
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Column headers */}
        <div
          className="artt-req-row"
          style={{
            display: "grid",
            gridTemplateColumns: "90px 1fr 56px 56px 56px 84px",
            padding: "6px 20px",
            background: "#FAFAFA",
            borderBottom: "1px solid #E5E5E5",
            color: "#A3A3A3",
            fontSize: 10,
            fontWeight: 600,
            gap: 8,
            flexShrink: 0,
          }}
        >
          <span>ID</span>
          <span>Title</span>
          <span className="artt-req-cnt" style={{ textAlign: "center" }}>
            Tests
          </span>
          <span className="artt-req-cnt" style={{ textAlign: "center" }}>
            Risks
          </span>
          <span className="artt-req-cnt" style={{ textAlign: "center" }}>
            Impl.
          </span>
          <span>Status</span>
        </div>

        {/* Rows */}
        <div style={{ flex: 1 }}>
          {REQS.map((req, i) => {
            const visible = visibleRows > i;
            const isLinking = linking && i === LINK_ROW;
            const s = STATUS_STYLES[req.status as Status];

            return (
              <div
                key={req.id}
                className="artt-req-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "90px 1fr 56px 56px 56px 84px",
                  padding: "9px 20px",
                  gap: 8,
                  alignItems: "center",
                  background: isLinking ? "#EFF6FF" : "white",
                  borderBottom: "1px solid #F0F0F0",
                  borderLeft: isLinking ? "3px solid #2563EB" : "3px solid transparent",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(5px)",
                  transition:
                    "opacity 0.25s ease, transform 0.25s ease, background 0.3s ease, border-left-color 0.3s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    color: "#525252",
                    fontWeight: 600,
                  }}
                >
                  {req.id}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {req.title}
                </span>
                <div className="artt-req-cnt" style={{ textAlign: "center" }}>
                  <span
                    style={{
                      background: "#EFF6FF",
                      color: "#2563EB",
                      borderRadius: 20,
                      padding: "1px 7px",
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    {isLinking ? req.tests + 2 : req.tests}
                  </span>
                </div>
                <div className="artt-req-cnt" style={{ textAlign: "center" }}>
                  <span
                    style={{
                      background: "#FEF2F2",
                      color: "#EF4444",
                      borderRadius: 20,
                      padding: "1px 7px",
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    {req.risks}
                  </span>
                </div>
                <div className="artt-req-cnt" style={{ textAlign: "center" }}>
                  <span
                    style={{
                      background: "#F5F5F5",
                      color: "#737373",
                      borderRadius: 20,
                      padding: "1px 7px",
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    {req.impl}
                  </span>
                </div>
                {isLinking ? (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      background: "#DCFCE7",
                      color: "#059669",
                      borderRadius: 20,
                      padding: "2px 8px",
                      fontSize: 10,
                      fontWeight: 700,
                      animation: "artt-req-pulse 1.2s ease-in-out infinite",
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#059669",
                        display: "inline-block",
                      }}
                    />
                    Linking…
                  </span>
                ) : (
                  <span
                    style={{
                      background: s.bg,
                      color: s.color,
                      border: s.border,
                      borderRadius: 20,
                      padding: "2px 8px",
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    {req.status}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "6px 20px",
            background: "white",
            borderTop: "1px solid #E5E5E5",
            display: "flex",
            justifyContent: "space-between",
            color: "#A3A3A3",
            fontSize: 10,
            flexShrink: 0,
          }}
        >
          <span>{REQS.length} requirements</span>
          {linking && (
            <span style={{ color: "#059669", fontWeight: 600 }}>● Auto-linking active</span>
          )}
        </div>
      </div>
    </PlatformShell>
  );
}
