"use client";

import { useEffect, useRef, useState } from "react";
import { D, NAV_ICONS, PlatformShell } from "./PlatformShell";

const INTEGRATIONS = [
  {
    group: "ALM",
    icon: "J",
    iconBg: "#155DFC",
    items: [
      {
        name: "Jira Software",
        status: "Connected",
        desc: "Application Lifecycle Management — issue tracking, sprint planning",
        tag: "CARDIO",
        sync: "2026-03-06 09:32",
      },
    ],
  },
  {
    group: "Dev Tools",
    icon: "GH",
    iconBg: "#1A1A1A",
    items: [
      {
        name: "GitHub",
        status: "Connected",
        desc: "Source code management, CI/CD pipelines, pull request reviews",
        tag: "mia-care/cardio-ai",
        sync: "2026-03-06 10:15",
      },
      {
        name: "Mia-Platform Console",
        status: "Connected",
        desc: "Internal Developer Platform — microservice orchestration",
        tag: "cardio-ai-prod",
        sync: "2026-03-06 08:50",
        iconBg: "#0052CC",
        iconLabel: "MP",
      },
    ],
  },
];

export function SdlcBlueprintSvg() {
  const [visibleCards, setVisibleCards] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cardTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clearAll = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      cardTimers.current.forEach(clearTimeout);
      cardTimers.current = [];
    };

    const totalCards = INTEGRATIONS.flatMap((g) => g.items).length;

    const run = () => {
      setVisibleCards(0);
      timerRef.current = setTimeout(() => {
        for (let i = 0; i < totalCards; i++) {
          const t = setTimeout(() => setVisibleCards(i + 1), i * 300);
          cardTimers.current.push(t);
        }
        const allDone = totalCards * 300 + 1200;
        timerRef.current = setTimeout(() => {
          clearAll();
          timerRef.current = setTimeout(run, 600);
        }, allDone + 2000);
      }, 400);
    };

    run();
    return clearAll;
  }, []);

  let cardIndex = 0;

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "Tool Integrations"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard }}
      sections={[
        {
          title: "SDLC",
          items: [
            { label: "Workflow Guide", icon: NAV_ICONS.workflowGuide },
            { label: "Requirements", icon: NAV_ICONS.requirements },
            { label: "Software System", icon: NAV_ICONS.softwareSystem },
            { label: "Verification", icon: NAV_ICONS.verification },
            { label: "Risk Analysis", icon: NAV_ICONS.riskAnalysis },
          ],
        },
        {
          title: "Configuration",
          items: [
            { label: "Tool Integrations", icon: NAV_ICONS.toolIntegrations, active: true },
            { label: "Audit Log", icon: NAV_ICONS.auditLog },
          ],
        },
      ]}
    >
      <div style={{ flex: 1, overflow: "hidden", padding: "14px 18px" }}>
        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 8,
            marginBottom: 14,
          }}
        >
          {[
            { label: "Total Tools", value: "6", icon: "⚙", color: D.body, bg: D.surface },
            { label: "Connected", value: "5", icon: "●", color: D.greenText, bg: D.greenFaint },
            { label: "Disconnected", value: "1", icon: "○", color: D.muted, bg: D.surface },
            { label: "Errors", value: "0", icon: "⊘", color: D.red, bg: D.redFaint },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: s.bg,
                border: `1px solid ${D.border}`,
                borderRadius: 8,
                padding: "9px 12px",
              }}
            >
              <div style={{ fontSize: 9, color: D.muted, marginBottom: 3 }}>
                <span style={{ color: s.color, marginRight: 4 }}>{s.icon}</span>
                {s.label}
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Filter chips */}
        <div style={{ display: "flex", gap: 6, marginBottom: 12, alignItems: "center" }}>
          <span style={{ fontSize: 10, color: D.muted }}>Filter:</span>
          {["All", "ALM", "Dev Tools", "Runtime"].map((f, i) => (
            <span
              key={f}
              style={{
                background: i === 0 ? D.blue : D.surface,
                color: i === 0 ? "white" : D.muted,
                border: `1px solid ${i === 0 ? D.blue : D.border}`,
                borderRadius: 20,
                padding: "3px 10px",
                fontSize: 10,
                fontWeight: i === 0 ? 600 : 400,
                cursor: "default",
              }}
            >
              {f}
            </span>
          ))}
          <span
            style={{
              marginLeft: "auto",
              background: D.blue,
              color: "white",
              borderRadius: 6,
              padding: "4px 10px",
              fontSize: 10,
              fontWeight: 600,
              cursor: "default",
            }}
          >
            + Add Integration
          </span>
        </div>

        {/* Integration groups */}
        {INTEGRATIONS.map((group) => (
          <div key={group.group} style={{ marginBottom: 10 }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: D.muted,
                marginBottom: 6,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span>{group.group}</span>
              <span
                style={{
                  background: D.bg,
                  border: `1px solid ${D.border}`,
                  borderRadius: 10,
                  padding: "0px 6px",
                  fontSize: 9,
                }}
              >
                {group.items.length}
              </span>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {group.items.map((item) => {
                const idx = cardIndex++;
                const visible = visibleCards > idx;
                return (
                  <div
                    key={item.name}
                    style={{
                      flex: 1,
                      background: D.surface,
                      border: `1px solid ${D.border}`,
                      borderRadius: 8,
                      padding: "10px 12px",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(8px)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 6,
                          background: (item as { iconBg?: string }).iconBg ?? group.iconBg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: 10,
                          fontWeight: 800,
                          flexShrink: 0,
                        }}
                      >
                        {(item as { iconLabel?: string }).iconLabel ?? group.icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}
                        >
                          <span style={{ fontSize: 11, fontWeight: 700, color: D.body }}>
                            {item.name}
                          </span>
                          <span style={{ fontSize: 9, color: D.greenText, fontWeight: 600 }}>
                            ● {item.status}
                          </span>
                        </div>
                        <div
                          style={{
                            fontSize: 9,
                            color: D.muted,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            marginBottom: 5,
                          }}
                        >
                          {item.desc}
                        </div>
                        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                          <span
                            style={{
                              background: D.bg,
                              border: `1px solid ${D.border}`,
                              borderRadius: 4,
                              padding: "1px 5px",
                              fontSize: 8,
                              fontFamily: "ui-monospace, monospace",
                              color: D.muted,
                            }}
                          >
                            {item.tag}
                          </span>
                          <span style={{ fontSize: 8, color: D.faint }}>↻ {item.sync}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </PlatformShell>
  );
}
