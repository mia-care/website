"use client";

import { useEffect, useRef, useState } from "react";
import { D, NAV_ICONS, PlatformShell } from "./PlatformShell";

const COMPONENTS = [
  {
    name: "AuthModule",
    category: "Identity",
    badge: "IEC 81001-5-1",
    catColor: D.blue,
    catBg: D.blueFaint,
  },
  {
    name: "SecureLogger",
    category: "Observability",
    badge: "IEC 62304",
    catColor: D.green,
    catBg: D.greenFaint,
  },
  {
    name: "CryptoKit",
    category: "Security",
    badge: "IEC 81001-5-1",
    catColor: D.amber,
    catBg: D.amberFaint,
  },
  {
    name: "AuditTrail",
    category: "Compliance",
    badge: "IEC 62304",
    catColor: D.purple,
    catBg: D.purpleFaint,
  },
  {
    name: "DataSanitizer",
    category: "Input Safety",
    badge: "IEC 81001-5-1",
    catColor: D.blue,
    catBg: D.blueFaint,
  },
  {
    name: "RateLimiter",
    category: "Resilience",
    badge: "IEC 81001-5-1",
    catColor: D.green,
    catBg: D.greenFaint,
  },
];

const BETWEEN_MS = 300;
const HOLD_MS = 4000;

const SECURITY_NAV = [
  { label: "SBOM", icon: NAV_ICONS.sbom },
  { label: "Vuln. Scan", icon: NAV_ICONS.vulnScan },
  { label: "Guardrails", icon: NAV_ICONS.guardrails },
  { label: "Component Lib.", icon: NAV_ICONS.componentLibrary, active: true },
];

export function SecureComponentLibrarySvg() {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState<boolean[]>(new Array(COMPONENTS.length).fill(false));
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
      setPhase(0);
      setVisible(new Array(COMPONENTS.length).fill(false));

      later(() => setPhase(1), 250);

      COMPONENTS.forEach((_, i) => {
        later(
          () => {
            setVisible((v) => {
              const n = [...v];
              n[i] = true;
              return n;
            });
          },
          500 + i * BETWEEN_MS,
        );
      });

      later(run, 500 + COMPONENTS.length * BETWEEN_MS + HOLD_MS);
    };

    run();
    return clear;
  }, []);

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "Component Library"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard }}
      sections={[{ title: "Security", items: SECURITY_NAV }]}
    >
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          padding: "12px 18px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {/* Filter bar */}
        <div
          style={{
            display: "flex",
            gap: 6,
            alignItems: "center",
            flexShrink: 0,
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(4px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {["All", "Security", "Compliance", "Observability"].map((f, i) => (
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
            + Add Component
          </span>
        </div>

        {/* Grid */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
            alignContent: "start",
            overflow: "hidden",
            minHeight: 0,
          }}
        >
          {COMPONENTS.map((comp, i) => (
            <div
              key={comp.name}
              style={{
                background: D.surface,
                border: `1px solid ${D.border}`,
                borderRadius: 8,
                padding: "10px 12px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? "translateY(0) scale(1)" : "translateY(6px) scale(0.97)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
              >
                <span
                  style={{
                    fontFamily: "ui-monospace, monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: D.body,
                  }}
                >
                  {comp.name}
                </span>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle
                    cx="8"
                    cy="8"
                    r="5.5"
                    fill={D.greenFaint}
                    stroke={D.green}
                    strokeWidth="1.3"
                  />
                  <path
                    d="M5 8l2.5 2.5 4-4"
                    stroke={D.greenText}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                style={{
                  background: comp.catBg,
                  color: comp.catColor,
                  borderRadius: 20,
                  padding: "2px 7px",
                  fontSize: 8.5,
                  fontWeight: 600,
                  alignSelf: "flex-start",
                  whiteSpace: "nowrap",
                }}
              >
                {comp.category}
              </span>
              <span
                style={{
                  fontSize: 8,
                  color: D.purple,
                  background: D.purpleFaint,
                  border: `1px solid #DDD6FE`,
                  borderRadius: 4,
                  padding: "1px 6px",
                  fontWeight: 600,
                  alignSelf: "flex-start",
                  whiteSpace: "nowrap",
                }}
              >
                ✓ {comp.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PlatformShell>
  );
}
