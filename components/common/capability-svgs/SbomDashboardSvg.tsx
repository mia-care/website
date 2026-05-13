"use client";

import { useEffect, useRef, useState } from "react";
import { D, NAV_ICONS, PlatformShell } from "./PlatformShell";

const PACKAGES = [
  { name: "openssl", version: "3.1.4", license: "Apache-2.0", status: "cve" as const },
  { name: "lodash", version: "4.17.21", license: "MIT", status: "ok" as const },
  { name: "express", version: "4.18.2", license: "MIT", status: "ok" as const },
  { name: "axios", version: "1.6.0", license: "MIT", status: "outdated" as const },
  { name: "log4j-core", version: "2.14.1", license: "Apache-2.0", status: "cve" as const },
  { name: "jsonwebtoken", version: "9.0.0", license: "MIT", status: "ok" as const },
];

const STATUS_LABEL: Record<string, string> = {
  ok: "Up-to-date",
  cve: "CVE Found",
  outdated: "Outdated",
};
const STATUS_COLOR: Record<string, { bg: string; text: string; border: string }> = {
  ok: { bg: D.greenFaint, text: D.greenText, border: "#A7F3D0" },
  cve: { bg: D.redFaint, text: D.red, border: "#FECACA" },
  outdated: { bg: D.amberFaint, text: D.amberText, border: "#FDE68A" },
};

const REVEAL_MS = 350;
const BETWEEN_MS = 500;
const HOLD_MS = 3500;

const SECURITY_NAV = [
  { label: "SBOM", icon: NAV_ICONS.sbom, active: true },
  { label: "Vuln. Scan", icon: NAV_ICONS.vulnScan },
  { label: "Guardrails", icon: NAV_ICONS.guardrails },
  { label: "Component Lib.", icon: NAV_ICONS.componentLibrary },
];

export function SbomDashboardSvg() {
  const [phase, setPhase] = useState(0);
  const [visibleRows, setVisibleRows] = useState<boolean[]>(new Array(PACKAGES.length).fill(false));
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
      setVisibleRows(new Array(PACKAGES.length).fill(false));

      later(() => setPhase(1), 250);
      later(() => setPhase(2), 550);

      PACKAGES.forEach((_, i) => {
        later(
          () => {
            setVisibleRows((v) => {
              const n = [...v];
              n[i] = true;
              return n;
            });
          },
          700 + REVEAL_MS + i * BETWEEN_MS,
        );
      });

      later(run, 700 + REVEAL_MS + PACKAGES.length * BETWEEN_MS + HOLD_MS);
    };

    run();
    return clear;
  }, []);

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "SBOM"]}
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
          background: D.bg,
        }}
      >
        {/* Stat cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 8,
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            flexShrink: 0,
          }}
        >
          {[
            { label: "Total Deps", value: "47", color: D.body, bg: D.surface },
            { label: "CVE Found", value: "2", color: D.red, bg: D.redFaint },
            { label: "Outdated", value: "5", color: D.amber, bg: D.amberFaint },
            { label: "Up-to-date", value: "40", color: D.green, bg: D.greenFaint },
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
              <div style={{ fontSize: 9, color: D.muted, marginBottom: 3 }}>{s.label}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div
          style={{
            flex: 1,
            background: D.surface,
            border: `1px solid ${D.border}`,
            borderRadius: 8,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            opacity: phase >= 2 ? 1 : 0,
            transition: "opacity 0.3s ease",
            minHeight: 0,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.6fr 80px 90px 80px",
              padding: "6px 14px",
              background: D.bg,
              borderBottom: `1px solid ${D.border}`,
              gap: 8,
              flexShrink: 0,
            }}
          >
            {["Package", "Version", "License", "Status"].map((h) => (
              <div
                key={h}
                style={{
                  fontSize: 9,
                  color: D.faint,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {h}
              </div>
            ))}
          </div>

          <div style={{ flex: 1, overflowY: "hidden" }}>
            {PACKAGES.map((pkg, i) => {
              const s = STATUS_COLOR[pkg.status];
              return (
                <div
                  key={pkg.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.6fr 80px 90px 80px",
                    padding: "7px 14px",
                    borderBottom: `1px solid ${D.border}`,
                    gap: 8,
                    alignItems: "center",
                    opacity: visibleRows[i] ? 1 : 0,
                    transform: visibleRows[i] ? "translateY(0)" : "translateY(4px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "ui-monospace, monospace",
                      fontSize: 10.5,
                      fontWeight: 600,
                      color: D.body,
                    }}
                  >
                    {pkg.name}
                  </div>
                  <div
                    style={{ fontFamily: "ui-monospace, monospace", fontSize: 9, color: D.muted }}
                  >
                    {pkg.version}
                  </div>
                  <div
                    style={{ fontFamily: "ui-monospace, monospace", fontSize: 9, color: D.faint }}
                  >
                    {pkg.license}
                  </div>
                  <div>
                    <span
                      style={{
                        background: s.bg,
                        color: s.text,
                        border: `1px solid ${s.border}`,
                        borderRadius: 20,
                        padding: "2px 7px",
                        fontSize: 8.5,
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {STATUS_LABEL[pkg.status]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PlatformShell>
  );
}
