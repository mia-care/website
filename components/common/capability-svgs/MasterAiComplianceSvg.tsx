"use client";

import { useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    title: "AI App Cardio-Monitor",
    desc: "Real-time cardiac monitoring application with AI suggestions.",
    score: 92,
    class_: "Class A",
    framework: "EU MDR",
    version: "v2.0.0",
  },
  {
    title: "AI Diagnostic Tool",
    desc: "AI-powered diagnostic assistance platform.",
    score: 78,
    class_: "Class A",
    framework: "EU MDR",
    version: "v1.0.0",
  },
  {
    title: "AI Chronic Disease Manager",
    desc: "Continuous monitoring and trend alerts for long-term conditions.",
    score: 89,
    class_: "Class A",
    framework: "EU MDR",
    version: "v1.0.0",
  },
  {
    title: "AI ER Assistant",
    desc: "AI support to prioritize patients in real time based on clinical urgency.",
    score: 92,
    class_: "Class A",
    framework: "EU MDR",
    version: "v1.0.0",
  },
];

function scoreColor(s: number) {
  return s >= 85 ? "#0D9488" : "#F59E0B";
}

const SCAN_MS = 1600;

function SparkleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      {/* large 4-pointed star */}
      <path
        d="M10.5 2 L11.8 6.7 L16 8 L11.8 9.3 L10.5 14 L9.2 9.3 L5 8 L9.2 6.7 Z"
        fill="#7C3AED"
      />
      {/* small companion spark */}
      <path
        d="M3.5 2 L4.2 3.8 L6 4.5 L4.2 5.2 L3.5 7 L2.8 5.2 L1 4.5 L2.8 3.8 Z"
        fill="#7C3AED"
        fillOpacity="0.5"
      />
    </svg>
  );
}

function PinIcon({ active }: { active: boolean }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M10 2L6 6l-3.5 1 .5.5 2.5 2.5.5.5L7 7l4-4-1-1zM6 10l-2 4"
        stroke={active ? "#0D9488" : "#9CA3AF"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.3s" }}
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="#9CA3AF" strokeWidth="1.2" />
      <path d="M8 5v3.5l2 1.5" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function MasterAiComplianceSvg() {
  const [active, setActive] = useState(0);
  const [bars, setBars] = useState([0, 0, 0, 0]);
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // fill bars on mount
    const t = setTimeout(() => setBars(PROJECTS.map((p) => p.score)), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const tick = () => {
      setActive((prev) => {
        const next = (prev + 1) % PROJECTS.length;
        setChecked((c) => {
          if (next === 0) return new Set([prev]);
          return new Set([...c, prev]);
        });
        return next;
      });
      timerRef.current = setTimeout(tick, SCAN_MS);
    };
    timerRef.current = setTimeout(tick, SCAN_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      style={{
        background: "#F5F5F5",
        borderRadius: 12,
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: 10,
        padding: 10,
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes mai-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes mai-checkin {
          from { opacity: 0; transform: scale(0.6); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes mai-glow {
          0%, 100% { box-shadow: 0 0 0 2px rgba(13,148,136,0.25); }
          50%       { box-shadow: 0 0 0 4px rgba(13,148,136,0.12); }
        }
      `}</style>

      {PROJECTS.map((p, i) => {
        const isActive = active === i;
        const isDone = checked.has(i);
        const color = scoreColor(p.score);

        return (
          <div
            key={p.title}
            style={{
              background: "white",
              borderRadius: 10,
              border: `1.5px solid ${isActive ? "#0D9488" : "#E5E5E5"}`,
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              transition: "border-color 0.35s",
              animation: isActive ? "mai-glow 1.6s ease-in-out infinite" : "none",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* active overlay */}
            {isActive && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background: "linear-gradient(135deg, rgba(13,148,136,0.05) 0%, transparent 55%)",
                }}
              />
            )}

            {/* ── Title row ── */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 6,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 5, minWidth: 0 }}>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: 11,
                    color: "#0A0A0A",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {p.title}
                </span>
                <SparkleIcon />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                {/* AI check indicator */}
                {isActive ? (
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    style={{ animation: "mai-spin 0.8s linear infinite" }}
                  >
                    <path
                      d="M8 2a6 6 0 100 12A6 6 0 008 2z"
                      stroke={color}
                      strokeWidth="1.6"
                      strokeDasharray="16 8"
                    />
                  </svg>
                ) : isDone ? (
                  p.score >= 85 ? (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      style={{ animation: "mai-checkin 0.2s ease" }}
                    >
                      <circle cx="8" cy="8" r="6" fill="#CCFBF1" />
                      <path
                        d="M5 8l2.5 2.5L11 5.5"
                        stroke="#0D9488"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      style={{ animation: "mai-checkin 0.2s ease" }}
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="6"
                        fill="#FEF3C7"
                        stroke="#F59E0B"
                        strokeWidth="1.2"
                      />
                      <circle cx="8" cy="8" r="2.5" fill="#F59E0B" />
                    </svg>
                  )
                ) : null}
                <PinIcon active={isActive || isDone} />
              </div>
            </div>

            {/* ── Description ── */}
            <div style={{ fontSize: 9.5, color: "#737373", lineHeight: 1.5 }}>{p.desc}</div>

            {/* ── Compliance score ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}
              >
                <span style={{ fontSize: 10, color: "#0A0A0A", fontWeight: 500 }}>
                  Compliance score
                </span>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    color: color,
                    transition: "color 0.3s",
                  }}
                >
                  {p.score}%
                </span>
              </div>
              <div
                style={{ height: 6, background: "#E5E5E5", borderRadius: 99, overflow: "hidden" }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${bars[i]}%`,
                    background: color,
                    borderRadius: 99,
                    transition: "width 1.0s cubic-bezier(0.4,0,0.2,1), background 0.3s",
                  }}
                />
              </div>
            </div>

            {/* ── Pills ── */}
            <div style={{ display: "flex", gap: 6 }}>
              {[p.class_, p.framework].map((tag) => (
                <span
                  key={tag}
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
                  {tag}
                </span>
              ))}
            </div>

            {/* ── Version ── */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                marginTop: "auto",
                paddingTop: 4,
                borderTop: "1px solid #F3F4F6",
              }}
            >
              <ClockIcon />
              <span style={{ fontSize: 9, color: "#9CA3AF" }}>Latest version {p.version}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
