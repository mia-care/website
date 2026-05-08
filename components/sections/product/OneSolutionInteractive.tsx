"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PillTag } from "@/components/common/PillTag";

const CYCLE_MS = 20_000;

const TOOLS = [
  {
    code: "eQMS",
    name: "Quality Management",
    traditional: {
      status: "Manual",
      items: [
        "SOPs compiled in Word/PDF",
        "Offline audit trail",
        "Compliance sprint before every audit",
      ],
    },
    unified: {
      status: "Automated",
      items: [
        "Records auto-generated from SDLC",
        "Real-time, immutable audit trail",
        "Continuously audit-ready",
      ],
    },
  },
  {
    code: "ALM",
    name: "Application Lifecycle",
    traditional: {
      status: "Disconnected",
      items: [
        "Requirements in spreadsheets",
        "No link to quality records",
        "Manual traceability reconciliation",
      ],
    },
    unified: {
      status: "Connected",
      items: [
        "Requirements traced in real time",
        "Risks linked to mitigations & tests",
        "Living traceability matrix",
      ],
    },
  },
  {
    code: "DevOps",
    name: "Development & CI/CD",
    traditional: {
      status: "Unguarded",
      items: [
        "No compliance checks at commit",
        "Release notes written manually",
        "Documentation created post-hoc",
      ],
    },
    unified: {
      status: "Compliant",
      items: [
        "Guardrails enforced at every commit",
        "Release notes auto-generated",
        "DHF compiled continuously",
      ],
    },
  },
];

export function OneSolutionInteractive() {
  const [mode, setMode] = useState<"traditional" | "p4samd">("traditional");
  const [cycleKey, setCycleKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isP4 = mode === "p4samd";

  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setMode((prev) => (prev === "traditional" ? "p4samd" : "traditional"));
      setCycleKey((k) => k + 1);
    }, CYCLE_MS);
  }, []);

  useEffect(() => {
    startCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startCycle]);

  const handleClick = (m: "traditional" | "p4samd") => {
    if (m === mode) return;
    setMode(m);
    setCycleKey((k) => k + 1);
    startCycle();
  };

  return (
    <section
      className="py-20"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <style>{`
        @keyframes sol-progress {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0); }
        }
        .sol-toggle:not([data-active="true"]):hover {
          background: var(--bg-raised) !important;
          color: var(--text-secondary) !important;
          border-color: var(--bg-border) !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <PillTag className="mb-5">One Solution. End-to-end.</PillTag>
        <h2
          className="font-display font-bold mb-8"
          style={{
            fontSize: "clamp(28px, 3.5vw, 44px)",
            letterSpacing: "-0.025em",
            maxWidth: "32rem",
          }}
        >
          Most organizations treat compliance as a layer on top of engineering.
        </h2>

        {/* Toggle — left aligned */}
        <div
          className="flex items-center gap-1 mb-8"
          style={{
            background: "var(--bg-base)",
            border: "1px solid var(--bg-border)",
            borderRadius: 10,
            padding: 4,
            width: "fit-content",
          }}
        >
          {(["traditional", "p4samd"] as const).map((m) => {
            const isActive = mode === m;
            const label = m === "traditional" ? "Traditional" : "With P4SaMD";
            return (
              <button
                key={m}
                type="button"
                onClick={() => handleClick(m)}
                className="sol-toggle relative px-4 py-2 rounded-lg text-sm font-semibold transition-all overflow-hidden"
              data-active={isActive ? "true" : "false"}
                style={{
                  background: isActive ? "var(--bg-surface)" : "transparent",
                  color: isActive
                    ? m === "p4samd"
                      ? "var(--brand-green)"
                      : "var(--text-primary)"
                    : "var(--text-muted)",
                  border: isActive ? "1px solid var(--bg-border)" : "1px solid transparent",
                  boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.2)" : "none",
                  cursor: "pointer",
                }}
              >
                {label}
                {/* Progress bar — counts down, resets on mode change */}
                {isActive && (
                  <span
                    key={`${m}-${cycleKey}`}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background:
                        m === "p4samd" ? "var(--brand-green)" : "var(--text-muted)",
                      transformOrigin: "left center",
                      animation: `sol-progress ${CYCLE_MS}ms linear forwards`,
                      opacity: 0.5,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Visualization ─────────────────────────────────────────────── */}
        <div>
          {/*
           * Connector area — FIXED HEIGHT in both modes to prevent layout shift.
           * Traditional: dashed "disconnected" lines above each card.
           * P4SaMD:      solid P4SaMD bar + connector lines. Crossfades via opacity.
           */}
          <div style={{ position: "relative", height: 84 }}>
            {/* P4SaMD: bar + solid connector lines */}
            <div
              aria-hidden={!isP4}
              style={{
                position: "absolute",
                inset: 0,
                opacity: isP4 ? 1 : 0,
                transition: "opacity 0.35s ease",
                pointerEvents: isP4 ? "auto" : "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Bar */}
              <div
                className="rounded-card relative overflow-hidden flex-1"
                style={{
                  background: "var(--bg-raised)",
                  border: "1px solid var(--bg-border-strong)",
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderBottom: "none",
                }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: "var(--brand-gradient)" }}
                />
                <div
                  style={{
                    padding: "10px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 8,
                    height: "100%",
                  }}
                >
                  <div>
                    <span
                      className="label-caps block mb-0.5"
                      style={{ color: "var(--brand-green)" }}
                    >
                      P4SaMD
                    </span>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Regulatory Intelligence Layer
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Auto-tracing", "Auto-evidence", "Auto-DHF"].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          padding: "2px 9px",
                          borderRadius: 99,
                          background: "rgba(0,240,150,0.08)",
                          color: "var(--brand-green)",
                          border: "1px solid rgba(0,240,150,0.2)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector lines */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1rem",
                  height: 28,
                  borderLeft: "1px solid var(--bg-border-strong)",
                  borderRight: "1px solid var(--bg-border-strong)",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex justify-center">
                    <div
                      style={{
                        width: 1,
                        height: "100%",
                        background: "var(--brand-green)",
                        opacity: 0.35,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tool cards — always same structure, content transitions */}
          <div className="grid sm:grid-cols-3 gap-0 sm:gap-4">
            {TOOLS.map((tool, idx) => {
              const data = isP4 ? tool.unified : tool.traditional;
              return (
                <div
                  key={tool.code}
                  className="p-5"
                  style={{
                    background: "var(--bg-base)",
                    border: "1px solid var(--bg-border)",
                    borderRadius: "var(--radius-card, 12px)",
                    transition: "border-color 0.35s ease",
                    ...(isP4
                      ? { borderColor: "var(--bg-border-strong)" }
                      : {}),
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span
                        className="label-caps block mb-0.5"
                        style={{
                          color: isP4 ? "var(--brand-green)" : "var(--text-muted)",
                          transition: "color 0.35s ease",
                        }}
                      >
                        {tool.code}
                      </span>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {tool.name}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        padding: "2px 8px",
                        borderRadius: 99,
                        background: isP4
                          ? "rgba(0,240,150,0.08)"
                          : "rgba(239,68,68,0.07)",
                        color: isP4 ? "var(--brand-green)" : "#ef4444",
                        border: `1px solid ${isP4 ? "rgba(0,240,150,0.2)" : "rgba(239,68,68,0.2)"}`,
                        transition: "all 0.35s ease",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {data.status}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {data.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs"
                        style={{ color: "var(--text-secondary)", lineHeight: 1.55 }}
                      >
                        <span
                          style={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: isP4 ? "var(--brand-green)" : "#737373",
                            flexShrink: 0,
                            marginTop: 4,
                            transition: "background 0.35s ease",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Bottom caption */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <span
              style={{
                display: "inline-block",
                width: 28,
                height: 1,
                background: isP4 ? "var(--brand-green)" : "var(--bg-border)",
                opacity: isP4 ? 0.5 : 1,
                transition: "background 0.35s, opacity 0.35s",
              }}
            />
            <p
              className="text-xs text-center"
              style={{
                color: isP4 ? "var(--brand-green)" : "var(--text-muted)",
                transition: "color 0.35s ease",
              }}
            >
              {isP4
                ? "All systems governed and audit-ready in real time — no manual effort."
                : "Manual reconciliation required between every system, before every audit."}
            </p>
            <span
              style={{
                display: "inline-block",
                width: 28,
                height: 1,
                background: isP4 ? "var(--brand-green)" : "var(--bg-border)",
                opacity: isP4 ? 0.5 : 1,
                transition: "background 0.35s, opacity 0.35s",
              }}
            />
          </div>
        </div>

        {/* Supporting text */}
        <div
          className="mt-10 grid lg:grid-cols-3 gap-6 pt-8"
          style={{ borderTop: "1px solid var(--bg-border)" }}
        >
          <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            P4SaMD connects to your existing tools, orchestrates your workflows, and enforces
            quality controls as a natural part of your SDLC — without asking your team to change
            how they work.
          </p>
          <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            It integrates your IDP, your Catalog, and a Compliance Engine into a single cohesive
            execution environment, with P4SaMD as the regulatory intelligence layer that governs
            all of it.
          </p>
          <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Every requirement tracked. Every risk mapped. Every release documented. Continuously,
            automatically, in real time.
          </p>
        </div>
      </div>
    </section>
  );
}
