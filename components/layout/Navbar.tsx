"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/nav";
import { BASE_PATH } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

function SimpleDropdown({
  items,
  onClose,
}: {
  items: { label: string; href: string; external?: boolean }[];
  onClose: () => void;
}) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
      <div
        role="menu"
        className="w-56 rounded-xl p-1.5 nav-dropdown"
        style={{
          background: "var(--bg-raised)",
          border: "1px solid var(--bg-border-strong)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.7), 0 4px 16px rgba(0,0,0,0.4)",
        }}
      >
        {items.map((item) =>
          item.external ? (
            <a
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={onClose}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5 hover:text-brand-green"
              style={{ color: "var(--text-secondary)" }}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={onClose}
              className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5 hover:text-brand-green"
              style={{ color: "var(--text-secondary)" }}
            >
              {item.label}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}

function ProductMegaMenu({
  items,
  onClose,
}: {
  items: { label: string; href: string; description?: string }[];
  onClose: () => void;
}) {
  const [featured, ...capabilities] = items;
  return (
    <div className="absolute top-full pt-2 z-50" style={{ left: -12 }}>
      <div
        role="menu"
        className="nav-dropdown flex flex-col"
        style={{
          width: 580,
          background: "var(--bg-raised)",
          border: "1px solid var(--bg-border-strong)",
          borderRadius: 16,
          padding: 8,
          boxShadow: "0 24px 64px rgba(0,0,0,0.7), 0 4px 16px rgba(0,0,0,0.4)",
        }}
      >
        {/* Platform Overview — full-width top row */}
        <Link
          href={featured.href}
          role="menuitem"
          onClick={onClose}
          className="flex items-center gap-4 px-4 py-3 rounded-xl mb-2 transition-colors hover:brightness-110 group"
          style={{
            background: "rgba(0,240,150,0.05)",
            border: "1px solid rgba(0,240,150,0.12)",
          }}
        >
          <span className="flex flex-col flex-1 min-w-0">
            <span
              className="text-xs font-bold uppercase tracking-widest mb-0.5"
              style={{ color: "var(--brand-green)", letterSpacing: "0.12em" }}
            >
              Platform
            </span>
            <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              {featured.label}
            </span>
            {featured.description && (
              <span className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
                {featured.description}
              </span>
            )}
          </span>
          <span
            className="inline-flex items-center gap-1 text-xs font-semibold shrink-0"
            style={{ color: "var(--brand-green)" }}
          >
            Explore
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M2 6h8M6 3l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>

        {/* Capabilities label */}
        <span
          className="block text-xs font-bold uppercase tracking-widest px-2 pb-1.5"
          style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}
        >
          Capabilities
        </span>

        {/* 2-column grid */}
        <div className="grid grid-cols-2 gap-px">
          {capabilities.map((cap, i) => (
            <Link
              key={cap.href}
              href={cap.href}
              role="menuitem"
              onClick={onClose}
              className="flex items-start gap-2.5 px-2.5 py-2 rounded-lg transition-colors hover:bg-white/[0.04] group"
            >
              <span
                className="flex shrink-0 items-center justify-center rounded-md text-xs font-bold mt-px"
                style={{
                  width: 22,
                  height: 22,
                  background: "rgba(0,240,150,0.08)",
                  border: "1px solid rgba(0,240,150,0.16)",
                  color: "var(--brand-green)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex flex-col">
                <span
                  className="text-xs font-medium leading-snug transition-colors group-hover:text-brand-green"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cap.label}
                </span>
                {cap.description && (
                  <span
                    className="text-xs mt-0.5 leading-snug"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {cap.description.replace(/^\d+\s*—\s*/, "")}
                  </span>
                )}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const openDropdown = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 250);
  };

  const closeImmediate = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(null);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  // Close on Escape key or click outside the header
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDropdown(null);
    };
    const onOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-40 h-16 flex items-center"
      style={{
        background: "rgba(10,11,16,0.88)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid var(--bg-border)",
        boxShadow: "inset 0 1px 0 rgba(0,240,150,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center relative">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src={`${BASE_PATH}/images/logo/Horizontal_Lockup_White.svg`}
            alt="Mia-Care P4SaMD"
            width={190}
            height={44}
            priority
          />
        </Link>

        {/* Desktop nav — absolutely centered */}
        <nav
          className="hidden md:flex items-center gap-px absolute left-1/2 -translate-x-1/2"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            const open = activeDropdown === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && openDropdown(item.label)}
                onMouseLeave={() => item.dropdown && closeDropdown()}
                onFocus={() => item.dropdown && openDropdown(item.label)}
                onBlur={() => item.dropdown && closeDropdown()}
              >
                <Link
                  href={item.href}
                  aria-haspopup={item.dropdown ? "menu" : undefined}
                  aria-expanded={item.dropdown ? open : undefined}
                  aria-current={active ? "page" : undefined}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") closeImmediate();
                    if (e.key === "ArrowDown" && item.dropdown) {
                      e.preventDefault();
                      openDropdown(item.label);
                    }
                  }}
                  className="relative flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-colors"
                  style={{
                    color: active || open ? "var(--text-primary)" : "var(--text-secondary)",
                    background: active
                      ? "rgba(0,240,150,0.08)"
                      : open
                        ? "rgba(255,255,255,0.06)"
                        : undefined,
                    outline: open ? "2px solid rgba(0,240,150,0.4)" : undefined,
                    outlineOffset: open ? 2 : undefined,
                  }}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                      style={{
                        opacity: open ? 0.9 : 0.4,
                        transform: open ? "rotate(180deg)" : undefined,
                        transition: "transform 0.2s, opacity 0.15s",
                      }}
                    >
                      <path
                        d="M2 4l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {/* Gradient underline for active page */}
                  {active && (
                    <span
                      className="absolute"
                      aria-hidden="true"
                      style={{
                        bottom: 4,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 18,
                        height: 2,
                        borderRadius: 2,
                        background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
                      }}
                    />
                  )}
                </Link>

                {item.dropdown &&
                  open &&
                  (item.label === "Product" ? (
                    <ProductMegaMenu items={item.dropdown} onClose={closeImmediate} />
                  ) : (
                    <SimpleDropdown items={item.dropdown} onClose={closeImmediate} />
                  ))}
              </div>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/request-demo"
          className="hidden md:flex items-center h-9 px-4 rounded-lg text-sm font-semibold text-bg-base shrink-0 ml-auto transition-transform hover:-translate-y-px active:translate-y-0 relative z-10"
          style={{
            background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
            boxShadow: "0 0 18px rgba(0,240,150,0.22), 0 2px 8px rgba(0,0,0,0.35)",
          }}
        >
          Request a Demo →
        </Link>

        {/* Mobile */}
        <div className="ml-auto md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
