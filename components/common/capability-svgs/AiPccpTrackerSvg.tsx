"use client";

import { useEffect, useRef, useState } from "react";

const ENVELOPE = [
  { label: "Accuracy delta", limit: "± 3.5%", locked: false },
  { label: "Training data change", limit: "+ 20% max", locked: false },
  { label: "Model architecture", limit: "Frozen", locked: true },
];

const CHECKS = [
  { label: "Accuracy delta", proposed: "+1.8%", ok: true },
  { label: "Training data", proposed: "+15%", ok: true },
  { label: "Architecture change", proposed: "None", ok: true },
];

export function AiPccpTrackerSvg() {
  const [showEnvelope, setShowEnvelope] = useState(0);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showChecks, setShowChecks] = useState(0);
  const [showVerdict, setShowVerdict] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rowTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clearAll = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      rowTimers.current.forEach(clearTimeout);
      rowTimers.current = [];
    };

    const run = () => {
      setShowEnvelope(0);
      setShowUpdate(false);
      setShowChecks(0);
      setShowVerdict(false);

      timerRef.current = setTimeout(() => {
        ENVELOPE.forEach((_, i) => {
          const t = setTimeout(() => setShowEnvelope(i + 1), i * 220);
          rowTimers.current.push(t);
        });

        const afterEnvelope = ENVELOPE.length * 220 + 500;

        timerRef.current = setTimeout(() => {
          setShowUpdate(true);
          CHECKS.forEach((_, i) => {
            const t = setTimeout(() => setShowChecks(i + 1), 350 + i * 280);
            rowTimers.current.push(t);
          });
          const afterChecks = 350 + CHECKS.length * 280 + 400;
          timerRef.current = setTimeout(() => {
            setShowVerdict(true);
            timerRef.current = setTimeout(() => {
              clearAll();
              timerRef.current = setTimeout(run, 600);
            }, 2800);
          }, afterChecks);
        }, afterEnvelope);
      }, 400);
    };

    run();
    return clearAll;
  }, []);

  return (
    <div
      style={{
        background: "white",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        fontSize: 12,
        color: "#0A0A0A",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: "1px solid #E5E5E5",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 14 }}>PCCP Tracker</span>
        <div style={{ display: "flex", gap: 6 }}>
          <span
            style={{
              background: "#FEF3C7",
              color: "#92400E",
              border: "1px solid #FCD34D",
              borderRadius: 20,
              padding: "2px 8px",
              fontSize: 9,
              fontWeight: 600,
            }}
          >
            FDA
          </span>
          <span
            style={{
              background: "#CCFBF1",
              color: "#0D9488",
              border: "1px solid #99F6E4",
              borderRadius: 20,
              padding: "2px 8px",
              fontSize: 9,
              fontWeight: 600,
            }}
          >
            PCCP 2024-AI-007
          </span>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          overflow: "hidden",
          padding: "14px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {/* Pre-approved envelope */}
        <div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#737373",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 7,
            }}
          >
            Pre-approved Change Envelope
          </div>
          {ENVELOPE.map((rule, i) => (
            <div
              key={rule.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "7px 12px",
                background: "#FAFAFA",
                border: "1px solid #F0F0F0",
                borderRadius: 7,
                marginBottom: 5,
                opacity: showEnvelope > i ? 1 : 0,
                transform: showEnvelope > i ? "translateY(0)" : "translateY(4px)",
                transition: "opacity 0.25s ease, transform 0.25s ease",
              }}
            >
              <span style={{ fontSize: 11 }}>{rule.label}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 10, color: "#525252", fontFamily: "monospace" }}>
                  {rule.limit}
                </span>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: rule.locked ? "#737373" : "#0D9488",
                    background: rule.locked ? "#F5F5F5" : "#CCFBF1",
                    border: `1px solid ${rule.locked ? "#E5E5E5" : "#99F6E4"}`,
                    borderRadius: 20,
                    padding: "1px 7px",
                  }}
                >
                  {rule.locked ? "🔒 Locked" : "In bounds"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Proposed update */}
        <div
          style={{
            opacity: showUpdate ? 1 : 0,
            transform: showUpdate ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#737373",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 7,
            }}
          >
            Proposed Update — v2.1.0
          </div>
          {CHECKS.map((check, i) => (
            <div
              key={check.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "7px 12px",
                background: showChecks > i ? (check.ok ? "#F0FDF4" : "#FEF2F2") : "white",
                border: `1px solid ${showChecks > i ? (check.ok ? "#BBF7D0" : "#FCA5A5") : "#E5E5E5"}`,
                borderRadius: 7,
                marginBottom: 5,
                transition: "background 0.3s ease, border-color 0.3s ease",
              }}
            >
              <span style={{ fontSize: 11 }}>{check.label}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 10, fontFamily: "monospace", color: "#525252" }}>
                  {check.proposed}
                </span>
                {showChecks > i && (
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      color: check.ok ? "#059669" : "#DC2626",
                      background: check.ok ? "#DCFCE7" : "#FEF2F2",
                      border: `1px solid ${check.ok ? "#6EE7B7" : "#FCA5A5"}`,
                      borderRadius: 20,
                      padding: "1px 7px",
                    }}
                  >
                    {check.ok ? "✓ Within PCCP" : "✗ Exceeds"}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Verdict */}
        <div
          style={{
            background: "#F0FDF4",
            border: "1.5px solid #86EFAC",
            borderRadius: 8,
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            opacity: showVerdict ? 1 : 0,
            transform: showVerdict ? "translateY(0)" : "translateY(4px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          <span style={{ fontSize: 20, lineHeight: 1 }}>✓</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 12, color: "#166534" }}>
              No re-submission required
            </div>
            <div style={{ fontSize: 10, color: "#16a34a", marginTop: 2 }}>
              All changes within pre-approved PCCP boundaries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
