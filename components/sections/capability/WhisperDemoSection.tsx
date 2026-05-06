"use client";

import { useEffect, useRef, useState } from "react";
import { PillTag } from "@/components/common/PillTag";
import { BASE_PATH } from "@/lib/utils";

const REQS = [
  {
    id: "SRS-001",
    text: "The system shall continuously monitor ECG data and classify cardiac rhythms using an AI inference model.",
    issue: false,
  },
  {
    id: "SRS-002",
    text: "The system shall alert clinicians within 3 seconds of detecting a life-threatening arrhythmia event.",
    issue: true,
  },
  {
    id: "SRS-003",
    text: "The AI model shall log all inference outputs with a UTC timestamp and a confidence score.",
    issue: false,
  },
  {
    id: "SRS-004",
    text: "The system shall support FHIR-compliant export of diagnostic reports to connected EHR systems.",
    issue: true,
  },
  {
    id: "SRS-005",
    text: "The AI model shall achieve a minimum sensitivity of 97% on the clinical validation dataset.",
    issue: true,
  },
];

const FINDINGS = [
  {
    icon: "⊗",
    color: "#EF4444",
    bg: "#FEF2F2",
    border: "#FECACA",
    borderLeft: "#EF4444",
    reqId: "SRS-002",
    title: "Missing upstream traceability",
    body: "No linked system-level requirement found. IEC 62304 §5.2.1 mandates traceability from every software requirement to a system specification.",
    tags: ["IEC 62304 §5.2.1", "ISO 13485 §7.3.3"],
  },
  {
    icon: "⚠",
    color: "#EA580C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    borderLeft: "#F97316",
    reqId: "SRS-004",
    title: "Incomplete acceptance criteria",
    body: "FHIR export scope must specify the supported version (R4/R5) and validation profile. Ambiguous wording makes verification planning impossible.",
    tags: ["IEC 62304 §5.2.2"],
  },
  {
    icon: "⚠",
    color: "#D97706",
    bg: "#FFFBEB",
    border: "#FDE68A",
    borderLeft: "#F59E0B",
    reqId: "SRS-005",
    title: "Performance threshold unverifiable",
    body: "97% sensitivity must reference the test dataset, confidence interval, and the ISO 14971 risk control it satisfies. Current wording cannot be objectively verified.",
    tags: ["ISO 14971 §5.5", "IEC 62304 §5.2.5"],
  },
];

const NAV_ITEMS = [
  { label: "Dashboard", icon: "□", active: false },
  { label: "Workflow Guide", icon: "◎", active: false },
  { label: "Requirements", icon: "≡", active: true },
  { label: "Software System", icon: "⊞", active: false },
  { label: "Risk Management", icon: "△", active: false },
];

const SCAN_MS = 1000;
const ISSUE_EXTRA_MS = 600;
const HOLD_MS = 2500;
const RESET_MS = 600;

export function WhisperDemoSection() {
  const [scanIdx, setScanIdx] = useState<number>(-1);
  const [doneSet, setDoneSet] = useState<Set<number>>(new Set());
  const [flagSet, setFlagSet] = useState<Set<number>>(new Set());
  const [findings, setFindings] = useState(0);
  const [isDone, setIsDone] = useState(false);
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
      setScanIdx(-1);
      setDoneSet(new Set());
      setFlagSet(new Set());
      setFindings(0);
      setIsDone(false);

      let cursor = 300;

      REQS.forEach((req, i) => {
        later(() => setScanIdx(i), cursor);
        cursor += SCAN_MS;

        if (req.issue) {
          later(() => {
            setFlagSet((f) => new Set([...f, i]));
            setFindings((n) => n + 1);
          }, cursor);
          cursor += ISSUE_EXTRA_MS;
        } else {
          later(() => setDoneSet((d) => new Set([...d, i])), cursor);
        }
      });

      later(() => {
        setScanIdx(-1);
        setIsDone(true);
      }, cursor);

      later(run, cursor + HOLD_MS + RESET_MS);
    };

    run();
    return clear;
  }, []);

  const rowState = (i: number) => {
    if (scanIdx === i) return "scanning";
    if (flagSet.has(i)) return "flagged";
    if (doneSet.has(i)) return "ok";
    return "idle";
  };

  return (
    <section
      className="py-20"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <style>{`
        @keyframes wd-dot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40%            { transform: scale(1);   opacity: 1;   }
        }
        @keyframes wd-slide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <PillTag className="mb-6">Whisper in Action</PillTag>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(26px, 3vw, 40px)", letterSpacing: "-0.025em" }}
          >
            Compliance intelligence at the point of engineering
          </h2>
          <p className="text-base" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
            Whisper reads your requirements as you write them, surfacing regulatory gaps before they
            become audit findings.
          </p>
        </div>

        {/* Demo frame */}
        <div
          className="rounded-card overflow-hidden"
          style={{ border: "1px solid var(--bg-border)", display: "flex", height: 580 }}
        >
          {/* ── Sidebar (background app chrome) ── */}
          <div
            style={{
              width: 148,
              flexShrink: 0,
              background: "#0B3D2E",
              display: "flex",
              flexDirection: "column",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            {/* Logo */}
            <div
              style={{
                padding: "14px 14px 12px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* biome-ignore lint/performance/noImgElement: static export */}
              <img
                src={`${BASE_PATH}/images/logo/Horizontal_Lockup_White.svg`}
                alt="Mia-Care"
                style={{ width: 110, height: "auto", display: "block" }}
              />
            </div>

            {/* Back + project */}
            <div
              style={{ padding: "10px 14px 8px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
                ← Back to products
              </div>
              <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
                App Cardio-Monitor
              </div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>dev</div>
            </div>

            {/* Nav */}
            <div style={{ padding: "10px 8px", flex: 1 }}>
              <div
                style={{
                  fontSize: 8,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  padding: "0 6px",
                  marginBottom: 6,
                }}
              >
                SDLC
              </div>
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "5px 7px",
                    borderRadius: 6,
                    marginBottom: 2,
                    background: item.active ? "rgba(0,200,122,0.15)" : "transparent",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      color: item.active ? "#00C87A" : "rgba(255,255,255,0.35)",
                      fontFamily: "ui-monospace, monospace",
                    }}
                  >
                    {item.icon}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      color: item.active ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.45)",
                      fontWeight: item.active ? 600 : 400,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Main content area (background app) ── */}
          <div
            style={{
              flex: 1,
              minWidth: 0,
              background: "#F9FAFB",
              display: "flex",
              flexDirection: "column",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            {/* Top bar */}
            <div
              style={{
                padding: "10px 20px",
                background: "white",
                borderBottom: "1px solid #E5E7EB",
                display: "flex",
                alignItems: "center",
                gap: 6,
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 10, color: "#9CA3AF" }}>Mia Care</span>
              <span style={{ fontSize: 10, color: "#D1D5DB" }}>›</span>
              <span style={{ fontSize: 10, color: "#9CA3AF" }}>App Cardio-Monitor</span>
              <span style={{ fontSize: 10, color: "#D1D5DB" }}>›</span>
              <span style={{ fontSize: 10, color: "#374151", fontWeight: 600 }}>Requirements</span>

              {/* Whisper badge in top bar */}
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ fontSize: 11 }}>✨</span>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    background: "linear-gradient(90deg,#7C3AED,#2563EB)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Whisper active
                </span>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#22C55E",
                    display: "inline-block",
                  }}
                />
              </div>
            </div>

            {/* Document area */}
            <div style={{ padding: "20px", flex: 1 }}>
              <div
                style={{
                  background: "white",
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  padding: "20px 22px",
                }}
              >
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#0A0A0A", marginBottom: 2 }}>
                    Software Requirements Specification
                  </div>
                  <div style={{ fontSize: 10, color: "#6B7280" }}>
                    Cardio-Monitor App · v2.1 · IEC 62304 §5.2
                  </div>
                  <div style={{ marginTop: 12, height: 1, background: "#F3F4F6" }} />
                </div>

                {/* Whisper status bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 14,
                    padding: "6px 10px",
                    borderRadius: 7,
                    background: scanIdx >= 0 ? "#F5F3FF" : isDone ? "#F0FDF4" : "#F9FAFB",
                    border: `1px solid ${scanIdx >= 0 ? "#DDD6FE" : isDone ? "#A7F3D0" : "#E5E7EB"}`,
                    transition: "background 0.3s, border-color 0.3s",
                  }}
                >
                  {scanIdx >= 0 && !isDone && (
                    <div style={{ display: "flex", gap: 3 }}>
                      {[0, 1, 2].map((j) => (
                        <div
                          key={j}
                          style={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: "#7C3AED",
                            animation: `wd-dot 1.2s ease-in-out ${j * 0.2}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                  {isDone && (
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="6" fill="#DCFCE7" />
                      <path
                        d="M5 8l2.5 2.5L11 5.5"
                        stroke="#059669"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <span
                    style={{
                      fontSize: 9.5,
                      fontWeight: 500,
                      color: scanIdx >= 0 ? "#7C3AED" : isDone ? "#059669" : "#9CA3AF",
                      transition: "color 0.3s",
                    }}
                  >
                    {isDone
                      ? `Whisper — ${findings} issue${findings !== 1 ? "s" : ""} found`
                      : scanIdx >= 0
                        ? `Whisper is analyzing ${REQS[scanIdx]?.id}…`
                        : "Initializing Whisper…"}
                  </span>
                </div>

                {/* Requirements list */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {REQS.map((req, i) => {
                    const state = rowState(i);
                    const s = {
                      scanning: {
                        bg: "#EFF6FF",
                        border: "#93C5FD",
                        idBg: "#DBEAFE",
                        idColor: "#2563EB",
                      },
                      flagged: {
                        bg: "#FFF7ED",
                        border: "#FED7AA",
                        idBg: "#FFEDD5",
                        idColor: "#EA580C",
                      },
                      ok: { bg: "#F0FDF4", border: "#A7F3D0", idBg: "#DCFCE7", idColor: "#059669" },
                      idle: { bg: "white", border: "#E5E7EB", idBg: "#F3F4F6", idColor: "#6B7280" },
                    }[state];

                    return (
                      <div
                        key={req.id}
                        style={{
                          padding: "8px 10px",
                          borderRadius: 6,
                          background: s.bg,
                          border: `1px solid ${s.border}`,
                          display: "flex",
                          gap: 8,
                          alignItems: "flex-start",
                          transition: "background 0.35s, border-color 0.35s",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 8.5,
                            fontWeight: 700,
                            color: s.idColor,
                            fontFamily: "ui-monospace, monospace",
                            background: s.idBg,
                            padding: "1px 5px",
                            borderRadius: 3,
                            flexShrink: 0,
                            marginTop: 2,
                            transition: "background 0.35s, color 0.35s",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {req.id}
                        </span>
                        <span
                          style={{ fontSize: 10.5, color: "#374151", lineHeight: 1.55, flex: 1 }}
                        >
                          {req.text}
                        </span>
                        <div style={{ flexShrink: 0, marginTop: 2, width: 13 }}>
                          {state === "flagged" && (
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 16 16"
                              fill="none"
                              aria-hidden="true"
                              style={{ animation: "wd-slide 0.25s ease" }}
                            >
                              <path
                                d="M8 2L14 13H2L8 2Z"
                                fill="#FED7AA"
                                stroke="#EA580C"
                                strokeWidth="1.2"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8 6v3.5"
                                stroke="#EA580C"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                              />
                              <circle cx="8" cy="11.2" r="0.7" fill="#EA580C" />
                            </svg>
                          )}
                          {state === "ok" && (
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 16 16"
                              fill="none"
                              aria-hidden="true"
                              style={{ animation: "wd-slide 0.25s ease" }}
                            >
                              <circle cx="8" cy="8" r="6" fill="#DCFCE7" />
                              <path
                                d="M5 8l2.5 2.5L11 5.5"
                                stroke="#059669"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ── Whisper overlay panel (light) ── */}
          <div
            style={{
              width: 280,
              flexShrink: 0,
              background: "white",
              borderLeft: "1px solid #E5E7EB",
              boxShadow: "-6px 0 24px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              position: "relative",
            }}
          >
            {/* Whisper header */}
            <div
              style={{
                padding: "12px 14px 10px",
                borderBottom: "1px solid #E5E7EB",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 2,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 14 }}>✨</span>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 13,
                      background: "linear-gradient(90deg,#7C3AED,#2563EB)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Whisper AI
                  </span>
                </div>
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: "#F3F4F6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 8,
                    color: "#9CA3AF",
                  }}
                >
                  ✕
                </div>
              </div>
              <div style={{ fontSize: 9.5, color: "#737373", marginBottom: 8 }}>
                Contextual suggestions
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    border: "1px solid #DDD6FE",
                    borderRadius: 5,
                    padding: "2px 7px",
                    fontSize: 9,
                    color: "#7C3AED",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  Model: GPT-4 <span style={{ fontSize: 7 }}>▾</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    fontSize: 9,
                    color: "#737373",
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#22C55E",
                      display: "inline-block",
                    }}
                  />
                  Cardio-Monitor · dev
                </div>
              </div>
            </div>

            {/* Findings */}
            <div
              style={{
                flex: 1,
                overflowY: "hidden",
                padding: "10px 12px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {findings === 0 && (
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 2px" }}>
                  <div style={{ display: "flex", gap: 3 }}>
                    {[0, 1, 2].map((j) => (
                      <div
                        key={j}
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "#a78bfa",
                          animation: `wd-dot 1.2s ease-in-out ${j * 0.2}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                  <span style={{ fontSize: 10, color: "#9CA3AF" }}>Reading requirements…</span>
                </div>
              )}

              {FINDINGS.slice(0, findings).map((f) => (
                <div
                  key={f.reqId}
                  style={{
                    background: f.bg,
                    border: `1px solid ${f.border}`,
                    borderLeft: `3px solid ${f.borderLeft}`,
                    borderRadius: 7,
                    padding: "9px 10px",
                    animation: "wd-slide 0.35s ease",
                  }}
                >
                  <div style={{ display: "flex", gap: 7, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 12, flexShrink: 0, marginTop: 1 }}>{f.icon}</span>
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: 11,
                          color: "#0A0A0A",
                          marginBottom: 3,
                          lineHeight: 1.3,
                        }}
                      >
                        {f.title}
                      </div>
                      <div
                        style={{
                          fontSize: 9.5,
                          color: "#737373",
                          lineHeight: 1.5,
                          marginBottom: 6,
                        }}
                      >
                        {f.body}
                      </div>
                      <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                        {f.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              background: "#F3F4F6",
                              border: "1px solid #E5E5E5",
                              borderRadius: 3,
                              padding: "1px 5px",
                              fontSize: 8.5,
                              color: "#525252",
                              fontFamily: "ui-monospace, monospace",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                        <span
                          style={{
                            background: "#F3F4F6",
                            border: "1px solid #E5E5E5",
                            borderRadius: 3,
                            padding: "1px 5px",
                            fontSize: 8.5,
                            color: "#9CA3AF",
                            fontFamily: "ui-monospace, monospace",
                          }}
                        >
                          {f.reqId}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isDone && findings > 0 && (
                <div
                  style={{
                    padding: "8px 10px",
                    borderRadius: 7,
                    background: "#F0FDF4",
                    border: "1px solid #A7F3D0",
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    animation: "wd-slide 0.35s ease",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="6" fill="#DCFCE7" stroke="#6EE7B7" strokeWidth="1.2" />
                    <path
                      d="M5 8l2.5 2.5L11 5.5"
                      stroke="#059669"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span style={{ fontSize: 10, color: "#059669", fontWeight: 500 }}>
                    {findings} issue{findings !== 1 ? "s" : ""} flagged for review
                  </span>
                </div>
              )}
            </div>

            {/* Input bar */}
            <div style={{ padding: "8px 12px", borderTop: "1px solid #E5E7EB", flexShrink: 0 }}>
              <div
                style={{
                  background: "#F9FAFB",
                  border: "1px solid #E5E5E5",
                  borderRadius: 7,
                  padding: "6px 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 9.5, color: "#9CA3AF" }}>Ask Whisper…</span>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 5,
                    background: "#2563EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="9" height="9" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
