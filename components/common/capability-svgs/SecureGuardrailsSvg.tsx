"use client";

import { useEffect, useRef, useState } from "react";
import { D, NAV_ICONS, PlatformShell } from "./PlatformShell";

type StepState = "pending" | "running" | "pass" | "fail";

const INIT_STEPS: { label: string; state: StepState }[] = [
  { label: "Install dependencies", state: "pending" },
  { label: "Build", state: "pending" },
  { label: "Unit tests", state: "pending" },
  { label: "IEC 81001-5-1 security check", state: "pending" },
];

const VIOLATIONS = [
  {
    pkg: "log4j-core",
    version: "2.14.1",
    cve: "CVE-2021-44228",
    severity: "Critical" as const,
    rule: "No Critical CVE in production dependencies",
  },
  {
    pkg: "openssl",
    version: "3.1.4",
    cve: "CVE-2024-0727",
    severity: "High" as const,
    rule: "SBOM must be free of High+ severity vulnerabilities",
  },
];

const STEP_MS = 900;
const RUN_MS = 700;
const HOLD_MS = 3500;

const SECURITY_NAV = [
  { label: "SBOM", icon: NAV_ICONS.sbom },
  { label: "Vuln. Scan", icon: NAV_ICONS.vulnScan },
  { label: "Guardrails", icon: NAV_ICONS.guardrails, active: true },
  { label: "Component Lib.", icon: NAV_ICONS.componentLibrary },
];

export function SecureGuardrailsSvg() {
  const [phase, setPhase] = useState(0);
  const [steps, setSteps] = useState(INIT_STEPS);
  const [visibleV, setVisibleV] = useState<boolean[]>([false, false]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clear = () => timers.current.forEach(clearTimeout);
    const later = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timers.current.push(t);
    };

    const setStep = (i: number, state: StepState) =>
      setSteps((s) => s.map((x, idx) => (idx === i ? { ...x, state } : x)));

    const run = () => {
      clear();
      timers.current = [];
      setPhase(0);
      setSteps(INIT_STEPS);
      setVisibleV([false, false]);

      later(() => setPhase(1), 250);

      later(() => setStep(0, "running"), STEP_MS);
      later(() => setStep(0, "pass"), STEP_MS + RUN_MS);
      later(() => setStep(1, "running"), STEP_MS * 2);
      later(() => setStep(1, "pass"), STEP_MS * 2 + RUN_MS);
      later(() => setStep(2, "running"), STEP_MS * 3);
      later(() => setStep(2, "pass"), STEP_MS * 3 + RUN_MS);
      later(() => setStep(3, "running"), STEP_MS * 4);
      later(
        () => {
          setStep(3, "fail");
          setPhase(2);
        },
        STEP_MS * 4 + RUN_MS,
      );
      later(
        () =>
          setVisibleV((v) => {
            const n = [...v];
            n[0] = true;
            return n;
          }),
        STEP_MS * 4 + RUN_MS + 350,
      );
      later(
        () =>
          setVisibleV((v) => {
            const n = [...v];
            n[1] = true;
            return n;
          }),
        STEP_MS * 4 + RUN_MS + 750,
      );
      later(run, STEP_MS * 5 + RUN_MS + HOLD_MS);
    };

    run();
    return clear;
  }, []);

  const STEP_BG: Record<StepState, string> = {
    pending: D.bg,
    running: D.blueFaint,
    pass: D.greenFaint,
    fail: D.redFaint,
  };
  const STEP_BORDER: Record<StepState, string> = {
    pending: D.border,
    running: D.blue,
    pass: "#A7F3D0",
    fail: "#FECACA",
  };
  const STEP_COLOR: Record<StepState, string> = {
    pending: D.faint,
    running: D.blue,
    pass: D.greenText,
    fail: D.red,
  };

  return (
    <PlatformShell
      breadcrumb={["Mia-Care Dev", "App Cardio-Monitor", "Guardrails"]}
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
        {/* Branch info */}
        <div
          style={{
            background: D.surface,
            border: `1px solid ${D.border}`,
            borderRadius: 8,
            padding: "9px 14px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexShrink: 0,
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          <span style={{ fontSize: 10, color: D.faint }}>⑂</span>
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: 10,
              fontWeight: 600,
              color: D.body,
            }}
          >
            feature/add-logging-module
          </span>
          <span style={{ fontSize: 9, color: D.faint, marginLeft: 4 }}>→ main</span>
          <span
            style={{
              marginLeft: "auto",
              fontFamily: "ui-monospace, monospace",
              fontSize: 8.5,
              color: D.faint,
            }}
          >
            PR #247
          </span>
        </div>

        {/* Pipeline steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 5, flexShrink: 0 }}>
          {steps.map((step) => (
            <div
              key={step.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 12px",
                borderRadius: 7,
                background: STEP_BG[step.state],
                border: `1px solid ${STEP_BORDER[step.state]}`,
                transition: "background 0.3s, border-color 0.3s",
              }}
            >
              {step.state === "pending" && <span style={{ fontSize: 10, color: D.faint }}>○</span>}
              {step.state === "running" && (
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  style={{ animation: "sgSpin 1s linear infinite" }}
                >
                  <style>{`@keyframes sgSpin { to { transform: rotate(360deg); transform-origin: 8px 8px; } }`}</style>
                  <circle
                    cx="8"
                    cy="8"
                    r="5.5"
                    stroke={D.blue}
                    strokeWidth="1.5"
                    strokeDasharray="22 12"
                  />
                </svg>
              )}
              {step.state === "pass" && (
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
              )}
              {step.state === "fail" && (
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle
                    cx="8"
                    cy="8"
                    r="5.5"
                    fill={D.redFaint}
                    stroke={D.red}
                    strokeWidth="1.3"
                  />
                  <path
                    d="M5.5 5.5l5 5M10.5 5.5l-5 5"
                    stroke={D.red}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              <span
                style={{
                  fontSize: 10,
                  fontWeight: step.state === "fail" ? 700 : 500,
                  color: STEP_COLOR[step.state],
                }}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Violations */}
        {phase >= 2 && (
          <div
            style={{
              flex: 1,
              border: `1px solid #FECACA`,
              borderRadius: 8,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
            }}
          >
            <div
              style={{
                padding: "6px 12px",
                background: D.redFaint,
                borderBottom: "1px solid #FECACA",
                display: "flex",
                alignItems: "center",
                gap: 6,
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 10, color: D.red }}>⚠</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: D.red }}>
                Security violations — merge blocked
              </span>
            </div>
            <div
              style={{
                flex: 1,
                overflowY: "hidden",
                padding: "8px 10px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              {VIOLATIONS.map((v, i) => (
                <div
                  key={v.cve}
                  style={{
                    background: D.surface,
                    border: `1px solid ${D.border}`,
                    borderRadius: 7,
                    padding: "8px 12px",
                    opacity: visibleV[i] ? 1 : 0,
                    transform: visibleV[i] ? "translateY(0)" : "translateY(4px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      marginBottom: 3,
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "ui-monospace, monospace",
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: D.body,
                      }}
                    >
                      {v.pkg}
                    </span>
                    <span
                      style={{
                        fontFamily: "ui-monospace, monospace",
                        fontSize: 8.5,
                        color: D.faint,
                        background: D.bg,
                        border: `1px solid ${D.border}`,
                        borderRadius: 4,
                        padding: "1px 5px",
                      }}
                    >
                      {v.version}
                    </span>
                    <span
                      style={{
                        fontFamily: "ui-monospace, monospace",
                        fontSize: 8.5,
                        color: D.muted,
                      }}
                    >
                      {v.cve}
                    </span>
                    <span
                      style={{
                        marginLeft: "auto",
                        fontSize: 8.5,
                        fontWeight: 700,
                        background: v.severity === "Critical" ? D.redFaint : D.amberFaint,
                        color: v.severity === "Critical" ? D.red : D.amberText,
                        border: `1px solid ${v.severity === "Critical" ? "#FECACA" : "#FDE68A"}`,
                        borderRadius: 20,
                        padding: "2px 8px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {v.severity}
                    </span>
                  </div>
                  <div style={{ fontSize: 8.5, color: D.faint }}>↳ {v.rule}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PlatformShell>
  );
}
