"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Announcement } from "@/data/announcement";

const STORAGE_KEY = "banner-dismissed-at";
const _BANNER_H = 40;
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

function getActualHeight(el: HTMLElement): number {
  return el.getBoundingClientRect().height;
}

export function AnnouncementBanner({ config }: { config: Announcement }) {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const scrollShown = useRef(true);
  const dismissed = useRef(false);

  // Effect 1: decide visibility
  useEffect(() => {
    if (!config.enabled || isDismissed()) {
      setBannerHeight(0);
      return;
    }
    setVisible(true);
  }, [config.enabled]);

  // Effect 2: wire up ResizeObserver + scroll once the banner is in the DOM
  useEffect(() => {
    if (!visible || !bannerRef.current) return;

    const updateHeight = () => {
      if (!bannerRef.current) return;
      setBannerHeight(getActualHeight(bannerRef.current));
    };

    updateHeight();

    const ro = new ResizeObserver(updateHeight);
    ro.observe(bannerRef.current);

    const onScroll = () => {
      if (dismissed.current) return;
      const currentY = window.scrollY;
      const goingDown = currentY > lastScrollY.current;
      lastScrollY.current = currentY;

      if (goingDown && scrollShown.current) {
        scrollShown.current = false;
        setBannerHeight(0);
        if (bannerRef.current) bannerRef.current.style.transform = "translateY(-100%)";
      } else if (!goingDown && !scrollShown.current) {
        scrollShown.current = true;
        if (bannerRef.current) {
          setBannerHeight(getActualHeight(bannerRef.current));
          bannerRef.current.style.transform = "translateY(0)";
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [visible]);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
    dismissed.current = true;
    if (bannerRef.current) bannerRef.current.style.transform = "translateY(-100%)";
    setBannerHeight(0);
    setTimeout(() => setVisible(false), 310);
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
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-center px-10 py-2.5 min-h-[40px]"
      style={{
        background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
        color: "#0a0b10",
        transition: "transform 300ms ease",
      }}
    >
      <div className="text-sm font-medium text-center">
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
