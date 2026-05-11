"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function StickyDemoPill() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/resources/mia-care-product-demo"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold transition-all duration-300"
      style={{
        background: "rgba(0,240,150,0.08)",
        border: "1px solid rgba(0,240,150,0.2)",
        color: "var(--brand-green)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-label="Watch the P4SaMD product demo"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
        <path d="M3 2l9 5-9 5V2z" />
      </svg>
      Watch Demo
    </Link>
  );
}
