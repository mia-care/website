"use client";

import { useEffect, useRef, useState } from "react";
import { D, NAV_ICONS, PlatformShell } from "./PlatformShell";

const ITEMS = [
  { id: 0, label: "Cardio-Monitor Core", depth: 0, hasChildren: true },
  { id: 1, label: "Signal Processing Engine", depth: 1, hasChildren: true },
  { id: 2, label: "ML Anomaly Detection", depth: 2, hasChildren: false },
  { id: 3, label: "Data Storage Layer", depth: 1, hasChildren: false },
  { id: 4, label: "Frontend Application", depth: 1, hasChildren: false },
];

const SECURITY_NAV = [
  { label: "SBOM", icon: NAV_ICONS.sbom },
  { label: "Vuln. Scan", icon: NAV_ICONS.vulnScan },
  { label: "Component Lib.", icon: NAV_ICONS.componentLibrary },
  { label: "Software System", icon: NAV_ICONS.softwareSystem, active: true },
];

const BETWEEN_MS = 900;
const HOLD_MS = 3500;

function CodeIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M5.5 4.5L2 8l3.5 3.5M10.5 4.5L14 8l-3.5 3.5M9 3l-2 10"
        stroke={D.muted}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M3.5 2.5L6.5 5 3.5 7.5"
        stroke={D.faint}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SecureSoftwareItemsSvg() {
  const [verified, setVerified] = useState<boolean[]>(new Array(ITEMS.length).fill(false));
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
      setVerified(new Array(ITEMS.length).fill(false));

      ITEMS.forEach((_, i) => {
        later(
          () =>
            setVerified((v) => {
              const n = [...v];
              n[i] = true;
              return n;
            }),
          600 + i * BETWEEN_MS,
        );
      });

      later(run, 600 + ITEMS.length * BETWEEN_MS + HOLD_MS);
    };

    run();
    return clear;
  }, []);

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "AI Diagnostic Tool", "Software System"]}
      topItem={{ label: "Dashboard", icon: NAV_ICONS.dashboard }}
      sections={[{ title: "Security", items: SECURITY_NAV }]}
    >
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          padding: "14px 18px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {/* Page title */}
        <div style={{ flexShrink: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: D.body }}>System Design</div>
          <div style={{ fontSize: 9.5, color: D.muted, marginTop: 2 }}>
            Software architecture and component hierarchy
          </div>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 0,
            borderBottom: `1px solid ${D.border}`,
            flexShrink: 0,
          }}
        >
          {["Software Items", "System Context"].map((tab, i) => (
            <div
              key={tab}
              style={{
                padding: "6px 14px",
                fontSize: 10,
                fontWeight: i === 0 ? 600 : 400,
                color: i === 0 ? D.blue : D.muted,
                borderBottom: i === 0 ? `2px solid ${D.blue}` : "2px solid transparent",
                marginBottom: -1,
                cursor: "default",
              }}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Total count card */}
        <div
          style={{
            border: `1px solid ${D.border}`,
            borderRadius: 8,
            padding: "10px 14px",
            display: "flex",
            alignItems: "baseline",
            gap: 6,
            flexShrink: 0,
            background: D.surface,
          }}
        >
          <span style={{ fontWeight: 800, fontSize: 22, color: D.body, lineHeight: 1 }}>
            {ITEMS.length}
          </span>
          <span style={{ fontSize: 10, color: D.muted }}>Total Components</span>
        </div>

        {/* Section header */}
        <div
          style={{
            fontSize: 8.5,
            fontWeight: 700,
            color: D.faint,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            flexShrink: 0,
          }}
        >
          Software Items (Design)
        </div>

        {/* Tree list */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            overflow: "hidden",
          }}
        >
          {ITEMS.map((item, i) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: item.depth * 18,
                gap: 6,
                padding: `5px 6px 5px ${6 + item.depth * 18}px`,
                borderRadius: 6,
                background: "transparent",
              }}
            >
              {/* Expand arrow for items with children */}
              {item.hasChildren ? (
                <span style={{ display: "flex", flexShrink: 0, marginRight: 1 }}>
                  <ChevronRight />
                </span>
              ) : (
                <span style={{ width: 9, flexShrink: 0 }} />
              )}

              {/* Code tag icon */}
              <span style={{ display: "flex", flexShrink: 0 }}>
                <CodeIcon />
              </span>

              {/* Label */}
              <span
                style={{
                  fontSize: 11,
                  fontWeight: item.depth === 0 ? 700 : 400,
                  color: D.body,
                  flex: 1,
                }}
              >
                {item.label}
              </span>

              {/* Verified tag — animates in */}
              <span
                style={{
                  opacity: verified[i] ? 1 : 0,
                  transform: verified[i] ? "scale(1)" : "scale(0.75)",
                  transition: "opacity 0.35s ease, transform 0.35s ease",
                  background: D.greenFaint,
                  color: D.greenText,
                  border: `1px solid #A7F3D0`,
                  borderRadius: 20,
                  padding: "2px 8px",
                  fontSize: 8.5,
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                ✓ Verified
              </span>
            </div>
          ))}
        </div>

        {/* AI Inventory sub-section card */}
        <div
          style={{
            flexShrink: 0,
            border: `1px solid ${D.border}`,
            borderRadius: 10,
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: D.purpleFaint,
            borderColor: "#DDD6FE",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: D.purple,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="4" y="4" width="12" height="12" rx="3" stroke="white" strokeWidth="1.5" />
              <path d="M10 7v6M7 10h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 11, color: D.body }}>AI Inventory</div>
            <div style={{ fontSize: 9, color: D.muted, marginTop: 1 }}>
              Manage AI Models and Datasets
            </div>
          </div>
          <span
            style={{
              background: D.purpleFaint,
              color: D.purple,
              border: `1px solid #DDD6FE`,
              borderRadius: 20,
              padding: "3px 10px",
              fontSize: 9,
              fontWeight: 600,
              whiteSpace: "nowrap",
              cursor: "default",
            }}
          >
            Sub-section
          </span>
        </div>
      </div>
    </PlatformShell>
  );
}
