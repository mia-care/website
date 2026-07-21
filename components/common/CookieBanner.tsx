"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

const COOKIE_NAME = "mc-cookie-consent";

const COPY = {
  en: {
    dialogAria: "Cookie consent",
    intro: "We use cookies to improve your experience.",
    cookiePolicyLabel: "Cookie Policy",
    cookiePolicyHref: "/privacy-policy#cookies",
    customize: "Customize",
    hideSettings: "Hide settings",
    declineAll: "Decline all",
    acceptAll: "Accept all",
    savePreferences: "Save preferences",
    technical: {
      label: "Technical cookies",
      description: "Required for the site to function. Cannot be disabled.",
    },
    performance: {
      label: "Performance cookies",
      description: "Help us understand how visitors use the site (analytics).",
    },
    profiling: {
      label: "Profiling cookies",
      description: "Used to show you personalised advertising.",
    },
  },
  it: {
    dialogAria: "Consenso cookie",
    intro: "Utilizziamo i cookie per migliorare la tua esperienza.",
    cookiePolicyLabel: "Informativa Cookie",
    cookiePolicyHref: "/it/informativa-privacy#cookie",
    customize: "Personalizza",
    hideSettings: "Nascondi impostazioni",
    declineAll: "Rifiuta tutto",
    acceptAll: "Accetta tutto",
    savePreferences: "Salva preferenze",
    technical: {
      label: "Cookie tecnici",
      description: "Necessari al funzionamento del sito. Non possono essere disabilitati.",
    },
    performance: {
      label: "Cookie di performance",
      description: "Ci aiutano a capire come i visitatori usano il sito (analytics).",
    },
    profiling: {
      label: "Cookie di profilazione",
      description: "Usati per mostrarti pubblicità personalizzata.",
    },
  },
};

type Preferences = {
  performance: boolean;
  profiling: boolean;
};

function getPrefsFromCookie(): Preferences | null {
  const row = document.cookie.split("; ").find((r) => r.startsWith(`${COOKIE_NAME}=`));
  if (!row) return null;
  const value = row.split("=")[1] ?? "";
  return {
    performance: value.includes("performance"),
    profiling: value.includes("profiling"),
  };
}

declare global {
  interface Window {
    dataLayer: object[];
    gtag: (...args: unknown[]) => void;
  }
}

function pushConsent(prefs: Preferences) {
  window.dataLayer = window.dataLayer || [];
  window.gtag?.("consent", "update", {
    analytics_storage: prefs.performance ? "granted" : "denied",
    ad_storage: prefs.profiling ? "granted" : "denied",
    ad_user_data: prefs.profiling ? "granted" : "denied",
    ad_personalization: prefs.profiling ? "granted" : "denied",
  });
  window.dataLayer.push({
    event: "cookie_consent_update",
    technicalCookies: true,
    performanceCookies: prefs.performance,
    profilingCookies: prefs.profiling,
  });
}

export function CookieBanner({ locale = "en" }: { locale?: "en" | "it" }) {
  const t = COPY[locale];
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState<Preferences>({ performance: false, profiling: false });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) {
      containerRef.current?.focus();
    }
  }, [visible]);

  useEffect(() => {
    const saved = getPrefsFromCookie();
    if (!saved) {
      setVisible(true);
      return;
    }
    pushConsent(saved);
  }, []);

  const save = (preferences: Preferences) => {
    const parts: string[] = [];
    if (preferences.performance) parts.push("performance");
    if (preferences.profiling) parts.push("profiling");
    const value = parts.length > 0 ? parts.join(",") : "none";
    // biome-ignore lint/suspicious/noDocumentCookie: cookie store API unavailable in all target environments
    document.cookie = `${COOKIE_NAME}=${value}; Max-Age=31536000; Path=/; SameSite=Lax; Secure`;
    pushConsent(preferences);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      tabIndex={-1}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 focus:outline-none"
      role="dialog"
      aria-label={t.dialogAria}
      aria-modal="true"
    >
      <div
        className="max-w-3xl mx-auto rounded-card p-5 flex flex-col gap-4"
        style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border-strong)" }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="flex-1 text-sm" style={{ color: "var(--text-secondary)" }}>
            {t.intro}{" "}
            <Link
              href={t.cookiePolicyHref}
              className="underline"
              style={{ color: "var(--brand-green)" }}
            >
              {t.cookiePolicyLabel}
            </Link>
          </p>
          <div className="flex gap-3 shrink-0 flex-wrap">
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="px-4 py-2 text-sm rounded-md border transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.28)", color: "var(--text-primary)" }}
            >
              {expanded ? t.hideSettings : t.customize}
            </button>
            <button
              type="button"
              onClick={() => save({ performance: false, profiling: false })}
              className="px-4 py-2 text-sm rounded-md border transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.28)", color: "var(--text-primary)" }}
            >
              {t.declineAll}
            </button>
            <button
              type="button"
              onClick={() => save({ performance: true, profiling: true })}
              className="px-4 py-2 text-sm font-semibold rounded-md bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
            >
              {t.acceptAll}
            </button>
          </div>
        </div>

        {expanded && (
          <div
            className="flex flex-col gap-3 pt-3 border-t"
            style={{ borderColor: "var(--bg-border-strong)" }}
          >
            <ConsentRow
              label={t.technical.label}
              description={t.technical.description}
              checked={true}
              disabled={true}
              onChange={() => {}}
            />
            <ConsentRow
              label={t.performance.label}
              description={t.performance.description}
              checked={prefs.performance}
              onChange={(v) => setPrefs((p) => ({ ...p, performance: v }))}
            />
            <ConsentRow
              label={t.profiling.label}
              description={t.profiling.description}
              checked={prefs.profiling}
              onChange={(v) => setPrefs((p) => ({ ...p, profiling: v }))}
            />
            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={() => save(prefs)}
                className="px-4 py-2 text-sm font-semibold rounded-md bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
              >
                {t.savePreferences}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ConsentRow({
  label,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  const labelId = useId();
  return (
    <div className="flex items-start gap-4">
      <div className="flex-1">
        <p id={labelId} className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
          {label}
        </p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={labelId}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-5 w-9 shrink-0 rounded-full transition-colors mt-0.5 ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        style={{ background: checked ? "var(--brand-green)" : "var(--bg-border-strong)" }}
      >
        <span
          className="inline-block h-4 w-4 rounded-full bg-white shadow transition-transform mt-0.5"
          style={{ transform: checked ? "translateX(18px)" : "translateX(2px)" }}
        />
      </button>
    </div>
  );
}
