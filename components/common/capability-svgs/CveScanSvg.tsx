"use client";

import { useEffect, useRef, useState } from "react";
import { D, NAV_ICONS, PlatformShell } from "./PlatformShell";

const CVES = [
  {
    pkg: "log4j-core",
    version: "2.14.1",
    cve: "CVE-2021-44228",
    severity: "Critical" as const,
    score: "10.0",
    patched: "2.17.1",
  },
  {
    pkg: "openssl",
    version: "3.1.4",
    cve: "CVE-2024-0727",
    severity: "High" as const,
    score: "7.5",
    patched: "3.1.5",
  },
  {
    pkg: "semver",
    version: "5.7.1",
    cve: "CVE-2022-25883",
    severity: "Medium" as const,
    score: "5.3",
    patched: "5.7.2",
  },
];

const SEV_STYLE: Record<string, { bg: string; text: string; border: string }> = {
  Critical: { bg: D.redFaint, text: D.red, border: "#FECACA" },
  High: { bg: D.amberFaint, text: D.amberText, border: "#FDE68A" },
  Medium: { bg: "#FFF7ED", text: "#EA580C", border: "#FED7AA" },
};

const SCAN_MS = 2000;
const BETWEEN_MS = 800;
const HOLD_MS = 3000;

const SECURITY_NAV = [
  { label: "SBOM", icon: NAV_ICONS.sbom },
  { label: "Vuln. Scan", icon: NAV_ICONS.vulnScan, active: true },
  { label: "Guardrails", icon: NAV_ICONS.guardrails },
  { label: "Component Lib.", icon: NAV_ICONS.componentLibrary },
];

export function CveScanSvg() {
  const [phase, setPhase] = useState(0);
  const [scanPct, setScanPct] = useState(0);
  const [visibleCves, setVisibleCves] = useState<boolean[]>([false, false, false]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const frames = useRef<number[]>([]);

  useEffect(() => {
    const clearAll = () => {
      timers.current.forEach(clearTimeout);
      frames.current.forEach(cancelAnimationFrame);
    };
    const later = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timers.current.push(t);
    };

    const run = () => {
      clearAll();
      timers.current = [];
      frames.current = [];
      setPhase(0);
      setScanPct(0);
      setVisibleCves([false, false, false]);

      later(() => setPhase(1), 250);

      later(() => {
        const start = performance.now();
        const tick = () => {
          const pct = Math.min((performance.now() - start) / SCAN_MS, 1);
          setScanPct(pct);
          if (pct < 1) {
            frames.current.push(requestAnimationFrame(tick));
          } else {
            setPhase(2);
            CVES.forEach((_, i) => {
              later(
                () => {
                  setVisibleCves((v) => {
                    const n = [...v];
                    n[i] = true;
                    return n;
                  });
                },
                300 + i * BETWEEN_MS,
              );
            });
            later(run, 300 + CVES.length * BETWEEN_MS + HOLD_MS);
          }
        };
        frames.current.push(requestAnimationFrame(tick));
      }, 350);
    };

    run();
    return clearAll;
  }, []);

  const pct = Math.round(scanPct * 100);

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "Vulnerability Scan"]}
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
        {/* Scan progress card */}
        <div
          style={{
            background: D.surface,
            border: `1px solid ${D.border}`,
            borderRadius: 8,
            padding: "12px 14px",
            flexShrink: 0,
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 700, color: phase === 2 ? D.red : D.blue }}>
              {phase < 2
                ? "Scanning dependencies…"
                : `Scan complete · ${CVES.length} vulnerabilities found`}
            </span>
            <span
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: 10,
                fontWeight: 700,
                color: D.muted,
              }}
            >
              {pct}%
            </span>
          </div>
          <div style={{ height: 5, background: D.bg, borderRadius: 99, overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: `${pct}%`,
                borderRadius: 99,
                background: phase < 2 ? D.blue : D.red,
                transition: phase < 2 ? "none" : "background 0.4s ease",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 5 }}>
            <span style={{ fontSize: 8.5, color: D.faint }}>
              47 packages · NVD · GitHub Advisory · OSV
            </span>
            <span style={{ fontSize: 8.5, color: D.faint }}>App Cardio-Monitor v2.1</span>
          </div>
        </div>

        {/* CVE findings */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 7,
            minHeight: 0,
            overflow: "hidden",
          }}
        >
          {CVES.map((cve, i) => {
            const s = SEV_STYLE[cve.severity];
            return (
              <div
                key={cve.cve}
                style={{
                  background: D.surface,
                  border: `1px solid ${D.border}`,
                  borderRadius: 8,
                  padding: "10px 14px",
                  flexShrink: 0,
                  opacity: visibleCves[i] ? 1 : 0,
                  transform: visibleCves[i] ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        marginBottom: 4,
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "ui-monospace, monospace",
                          fontSize: 11,
                          fontWeight: 700,
                          color: D.body,
                        }}
                      >
                        {cve.pkg}
                      </span>
                      <span
                        style={{
                          fontFamily: "ui-monospace, monospace",
                          fontSize: 9,
                          color: D.faint,
                          background: D.bg,
                          border: `1px solid ${D.border}`,
                          borderRadius: 4,
                          padding: "1px 5px",
                        }}
                      >
                        {cve.version}
                      </span>
                      <span
                        style={{
                          fontFamily: "ui-monospace, monospace",
                          fontSize: 9,
                          color: D.muted,
                        }}
                      >
                        {cve.cve}
                      </span>
                    </div>
                    <div style={{ fontSize: 9, color: D.faint }}>
                      Patch available →{" "}
                      <span
                        style={{
                          fontFamily: "ui-monospace, monospace",
                          color: D.greenText,
                          fontWeight: 600,
                        }}
                      >
                        {cve.patched}
                      </span>
                      {" · "}CVSS <span style={{ fontWeight: 600 }}>{cve.score}</span>
                    </div>
                  </div>
                  <span
                    style={{
                      background: s.bg,
                      color: s.text,
                      border: `1px solid ${s.border}`,
                      borderRadius: 20,
                      padding: "3px 10px",
                      fontSize: 9,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {cve.severity}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PlatformShell>
  );
}
