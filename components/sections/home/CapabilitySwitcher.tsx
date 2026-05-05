"use client";

import { useEffect, useState } from "react";
import { ArttTraceabilitySvg } from "@/components/common/capability-svgs/ArttTraceabilitySvg";
import { DocumentationEngineSvg } from "@/components/common/capability-svgs/DocumentationEngineSvg";
import { MasterAiComplianceSvg } from "@/components/common/capability-svgs/MasterAiComplianceSvg";
import { SdlcOrchestratorSvg } from "@/components/common/capability-svgs/SdlcOrchestratorSvg";

const TABS = [
  { id: "sdlc", label: "SDLC Orchestrator", Component: SdlcOrchestratorSvg },
  { id: "artt", label: "Traceability", Component: ArttTraceabilitySvg },
  { id: "docs", label: "Documentation", Component: DocumentationEngineSvg },
  { id: "ai", label: "AI Compliance", Component: MasterAiComplianceSvg },
];

const ROTATE_MS = 4000;

export function CapabilitySwitcher() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % TABS.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const { Component } = TABS[active];

  return (
    <div
      style={{
        background: "rgba(10,11,16,0.72)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 16,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.08em",
          color: "rgba(255,255,255,0.35)",
          textTransform: "uppercase",
        }}
      >
        Platform capabilities
      </div>

      <div
        style={{
          display: "flex",
          gap: 2,
          background: "rgba(255,255,255,0.04)",
          borderRadius: 10,
          padding: 3,
        }}
      >
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActive(i);
              setPaused(true);
            }}
            style={{
              flex: 1,
              padding: "5px 4px",
              borderRadius: 7,
              border: "none",
              cursor: "pointer",
              fontSize: 10.5,
              fontWeight: active === i ? 600 : 400,
              background: active === i ? "rgba(0,240,150,0.12)" : "transparent",
              color: active === i ? "var(--brand-green)" : "rgba(255,255,255,0.4)",
              transition: "background 0.2s, color 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ height: 290, overflow: "hidden", borderRadius: 10 }}>
        <Component key={active} />
      </div>
    </div>
  );
}
