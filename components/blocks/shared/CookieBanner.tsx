"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "mc-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div
        className="max-w-3xl mx-auto rounded-card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        style={{
          background: "var(--bg-surface)",
          border: "1px solid var(--bg-border-strong)",
        }}
      >
        <p className="flex-1 text-sm" style={{ color: "var(--text-secondary)" }}>
          We use cookies to improve your experience.{" "}
          <Link href="/cookie-policy" className="underline" style={{ color: "var(--brand-green)" }}>
            Cookie Policy
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={decline}
            className="px-4 py-2 text-sm rounded-md border transition-colors"
            style={{
              borderColor: "var(--bg-border-strong)",
              color: "var(--text-secondary)",
            }}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={accept}
            className="px-4 py-2 text-sm font-semibold rounded-md bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
