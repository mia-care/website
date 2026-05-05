"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Announcement } from "@/data/announcement";

const STORAGE_KEY = "banner-dismissed-at";
const BANNER_H = 40;
const DISMISS_DAYS = 15;

function isDismissed(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    return Date.now() - Number(raw) < DISMISS_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

function setBannerHeight(px: number) {
  document.documentElement.style.setProperty("--banner-h", `${px}px`);
}

export function AnnouncementBanner({ config }: { config: Announcement }) {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const scrollShown = useRef(true);

  useEffect(() => {
    if (!config.enabled || isDismissed()) return;

    setVisible(true);
    setBannerHeight(BANNER_H);

    const onScroll = () => {
      const currentY = window.scrollY;
      const goingDown = currentY > lastScrollY.current;
      lastScrollY.current = currentY;

      if (goingDown && scrollShown.current) {
        scrollShown.current = false;
        setBannerHeight(0);
        if (bannerRef.current) bannerRef.current.style.transform = "translateY(-100%)";
      } else if (!goingDown && !scrollShown.current) {
        scrollShown.current = true;
        setBannerHeight(BANNER_H);
        if (bannerRef.current) bannerRef.current.style.transform = "translateY(0)";
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [config.enabled]);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
    setVisible(false);
    setBannerHeight(0);
  };

  if (!visible) return null;

  const inner = (
    <span className="flex items-center gap-2">
      {config.icon && <span aria-hidden="true">{config.icon}</span>}
      <span>{config.message}</span>
      {config.link && (
        <span className="font-semibold underline underline-offset-2 opacity-80">
          {config.link.label} →
        </span>
      )}
    </span>
  );

  return (
    <div
      ref={bannerRef}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-center px-10"
      style={{
        height: BANNER_H,
        background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
        color: "#0a0b10",
        transition: "transform 300ms ease",
      }}
    >
      <div className="text-sm font-medium">
        {config.link ? (
          config.link.external ? (
            <a href={config.link.href} target="_blank" rel="noopener noreferrer">
              {inner}
            </a>
          ) : (
            <Link href={config.link.href}>{inner}</Link>
          )
        ) : (
          inner
        )}
      </div>

      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-4 flex items-center justify-center w-6 h-6 rounded transition-colors hover:bg-black/10"
        style={{ color: "#0a0b10" }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M1 1l10 10M11 1L1 11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
