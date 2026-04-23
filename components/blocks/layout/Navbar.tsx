"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navItems } from "@/data/nav";
import { MobileMenu } from "./MobileMenu";

function DropdownMenu({
  items,
}: {
  items: { label: string; href: string; description?: string }[];
}) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-card p-2 z-50"
      style={{
        background: "var(--bg-raised)",
        border: "1px solid var(--bg-border-strong)",
        boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
      }}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5 group"
        >
          <span
            className="block text-sm font-medium group-hover:text-brand-green transition-colors"
            style={{ color: "var(--text-primary)" }}
          >
            {item.label}
          </span>
          {item.description && (
            <span className="block text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
              {item.description}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 h-16 flex items-center"
      style={{
        background: "rgba(11,12,16,0.82)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--bg-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center gap-8">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/images/logo/Horizontal_Lockup_Primary.svg"
            alt="Mia-Care P4SaMD"
            width={132}
            height={30}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              role={item.dropdown ? "menuitem" : undefined}
              onMouseEnter={() => item.dropdown && openDropdown(item.label)}
              onMouseLeave={() => item.dropdown && closeDropdown()}
              onFocus={() => item.dropdown && openDropdown(item.label)}
              onBlur={() => item.dropdown && closeDropdown()}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive(item.href) ? "text-brand-green" : "hover:text-text-primary"
                }`}
                style={{ color: isActive(item.href) ? undefined : "var(--text-secondary)" }}
              >
                {item.label}
                {item.dropdown && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
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
              </Link>
              {item.dropdown && activeDropdown === item.label && (
                <DropdownMenu items={item.dropdown} />
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3 ml-auto shrink-0">
          <Link
            href="/request-demo"
            className="flex items-center h-9 px-4 rounded-lg text-sm font-semibold bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
          >
            Request a Demo →
          </Link>
        </div>

        {/* Mobile */}
        <div className="ml-auto md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
