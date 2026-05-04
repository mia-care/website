"use client";

import { useEffect } from "react";

const LIGHT_TOKENS: Record<string, string> = {
  "--bg-base": "#fafafa",
  "--bg-surface": "#f0f0f2",
  "--bg-raised": "#e4e4e8",
  "--bg-border": "rgba(0, 0, 0, 0.08)",
  "--bg-border-strong": "rgba(0, 0, 0, 0.14)",
  "--text-primary": "#0d0e14",
  "--text-secondary": "rgba(13, 14, 20, 0.6)",
  "--text-muted": "rgba(13, 14, 20, 0.5)",
  "--glow-green": "rgba(0, 180, 100, 0.14)",
  "--glow-cyan": "rgba(0, 180, 180, 0.12)",
};

export function LightThemeApplier() {
  useEffect(() => {
    const root = document.documentElement;
    for (const [prop, value] of Object.entries(LIGHT_TOKENS)) {
      root.style.setProperty(prop, value);
    }
    return () => {
      for (const prop of Object.keys(LIGHT_TOKENS)) {
        root.style.removeProperty(prop);
      }
    };
  }, []);

  return null;
}
