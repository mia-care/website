"use client";

import { useState } from "react";
import { PillTag } from "@/components/common/PillTag";
import type { CapabilityScreen } from "@/data/capability-screenshots";
import { BASE_PATH } from "@/lib/utils";

const PILL = { en: "In Action", it: "In Azione" };

export function CapabilityScreenshots({
  screens,
  locale = "en",
}: {
  screens: CapabilityScreen[];
  locale?: "en" | "it";
}) {
  const [active, setActive] = useState(0);
  const screen = screens[active];

  return (
    <section
      className="py-20"
      style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-8">{PILL[locale]}</PillTag>

        {/* Tab strip */}
        <div className="mb-8">
          <div
            className="inline-flex gap-1 flex-wrap"
            style={{
              background: "var(--bg-raised)",
              border: "1px solid var(--bg-border)",
              borderRadius: 12,
              padding: 4,
            }}
          >
            {screens.map((s, i) => (
              <button
                key={s.tab}
                type="button"
                onClick={() => setActive(i)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: active === i ? "var(--bg-surface)" : "transparent",
                  color: active === i ? "var(--text-primary)" : "var(--text-muted)",
                  boxShadow: active === i ? "0 1px 3px rgba(0,0,0,0.12)" : "none",
                }}
              >
                {s.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Screenshot */}
        <div
          key={active}
          className="rounded-card overflow-hidden animate-fade-in-up"
          style={{
            border: "1px solid var(--bg-border)",
            background: "var(--bg-raised)",
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              padding: "10px 14px",
              borderBottom: "1px solid var(--bg-border)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            {["#EF4444", "#F59E0B", "#22C55E"].map((c) => (
              <span
                key={c}
                style={{ width: 10, height: 10, borderRadius: "50%", background: c, flexShrink: 0 }}
              />
            ))}
            <span
              className="text-xs"
              style={{
                marginLeft: 8,
                color: "var(--text-muted)",
                background: "var(--bg-base)",
                border: "1px solid var(--bg-border)",
                borderRadius: 6,
                padding: "2px 12px",
              }}
            >
              app.mia-care.io / risk-management
            </span>
          </div>

          <img
            src={`${BASE_PATH}${screen.src}`}
            alt={screen.tab}
            className="w-full h-auto block"
            style={{ display: "block" }}
          />
        </div>

        {/* Caption */}
        <p className="mt-4 text-sm text-center" style={{ color: "var(--text-muted)" }}>
          {screen.caption}
        </p>
      </div>
    </section>
  );
}
