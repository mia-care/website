"use client";

import { useEffect, useRef, useState } from "react";

const SUGGESTIONS = [
  {
    icon: "⊗",
    iconColor: "#EF4444",
    borderColor: "#EF4444",
    bgColor: "rgba(239,68,68,0.08)",
    title: "Incomplete Software Requirements Specification",
    body: "12 software requirements have been identified without traceability to system requirements. The traceability matrix must be completed.",
    tags: ["IEC 62304:2006 §5.2", "ISO 13485:2016 §7.3.2"],
  },
  {
    icon: "⚠",
    iconColor: "#F97316",
    borderColor: "#F97316",
    bgColor: "rgba(249,115,22,0.08)",
    title: "Missing Integration Tests",
    body: "5 software modules have no documented integration tests. IEC 62304 requires testing for all integrated components.",
    tags: ["IEC 62304:2006 §5.6", "ISO 13485:2016 §7.3.4"],
  },
];

const REVEAL_DELAY = 800;
const BETWEEN_MS = 950;
const HOLD_MS = 2200;
const RESET_DELAY = 400;

export function SmartAssistantSvg() {
  const [visible, setVisible] = useState<boolean[]>([false, false, false]);
  const [thinking, setThinking] = useState(false);
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
      setVisible([false, false, false]);
      setThinking(false);

      later(() => setThinking(true), RESET_DELAY);

      SUGGESTIONS.forEach((_, i) => {
        const base = RESET_DELAY + REVEAL_DELAY + i * BETWEEN_MS;
        later(() => {
          setThinking(i < SUGGESTIONS.length - 1);
          setVisible((v) => {
            const n = [...v];
            n[i] = true;
            return n;
          });
        }, base);
      });

      const total = RESET_DELAY + REVEAL_DELAY + SUGGESTIONS.length * BETWEEN_MS + HOLD_MS;
      later(run, total);
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
      }}
    >
      <style>{`
        @keyframes wh-slide-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        @keyframes wh-dot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40%           { transform: scale(1);   opacity: 1;   }
        }
      `}</style>

      {/* ── Header ── */}
      <div
        style={{
          padding: "12px 14px 10px",
          borderBottom: "1px solid #E5E5E5",
          background: "white",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
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
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#E5E5E5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 9,
              color: "#737373",
            }}
          >
            ✕
          </div>
        </div>
        <div style={{ fontSize: 9.5, color: "#737373", marginTop: 2 }}>Contextual suggestions</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
          <div
            style={{
              border: "1px solid #DDD6FE",
              borderRadius: 6,
              padding: "3px 8px",
              fontSize: 9.5,
              color: "#7C3AED",
              background: "white",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            Model: GPT-4
            <span style={{ fontSize: 8 }}>▾</span>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 9, color: "#737373" }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22C55E",
                display: "inline-block",
              }}
            />
            Cardio-Monitor App · dev
          </div>
        </div>
      </div>

      {/* ── Suggestions ── */}
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
        {SUGGESTIONS.map((s, i) =>
          visible[i] ? (
            <div
              key={s.title}
              style={{
                background: s.bgColor,
                border: `1px solid ${s.borderColor}33`,
                borderLeft: `3px solid ${s.borderColor}`,
                borderRadius: 8,
                padding: "9px 11px",
                animation: "wh-slide-in 0.35s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>{s.icon}</span>
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
                    {s.title}
                  </div>
                  <div
                    style={{ fontSize: 9.5, color: "#737373", lineHeight: 1.5, marginBottom: 6 }}
                  >
                    {s.body}
                  </div>
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: "#F3F4F6",
                          border: "1px solid #E5E5E5",
                          borderRadius: 4,
                          padding: "1px 6px",
                          fontSize: 8.5,
                          color: "#525252",
                          fontFamily: "ui-monospace, monospace",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : null,
        )}

        {/* Thinking indicator */}
        {thinking && (
          <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 2px" }}>
            <span style={{ fontSize: 10 }}>✨</span>
            <div style={{ display: "flex", gap: 3 }}>
              {[0, 1, 2].map((j) => (
                <div
                  key={j}
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#a78bfa",
                    animation: `wh-dot 1.2s ease-in-out ${j * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Input ── */}
      <div
        style={{
          padding: "8px 12px",
          borderTop: "1px solid #E5E5E5",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            background: "#F9FAFB",
            border: "1px solid #E5E5E5",
            borderRadius: 8,
            padding: "7px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 9.5, color: "#9CA3AF" }}>
            Type a message… (Shift+Enter for new line)
          </span>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 6,
              background: "#2563EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
        <div style={{ fontSize: 8.5, color: "#9CA3AF", marginTop: 5, textAlign: "center" }}>
          Whisper is contextualized on: Cardio-Monitor App · dev
        </div>
      </div>
    </div>
  );
}
