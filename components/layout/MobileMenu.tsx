"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/data/nav";
import { BASE_PATH } from "@/lib/utils";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      style={{
        transform: open ? "rotate(180deg)" : undefined,
        transition: "transform 0.2s",
        flexShrink: 0,
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
  );
}

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isChildActive = (dropdown: { href: string }[]) =>
    dropdown.some((sub) => pathname === sub.href || pathname.startsWith(`${sub.href}/`));

  // Track which sections are expanded; auto-open the section of the current page
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    for (const item of navItems) {
      if (item.dropdown && isChildActive(item.dropdown)) {
        init[item.label] = true;
      }
    }
    return init;
  });

  const toggle = (label: string) => setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));

  const isLinkActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        className="md:hidden inline-flex items-center justify-center rounded-lg transition-colors hover:bg-white/5"
        style={{ width: 40, height: 40, color: "var(--text-primary)" }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect y="3" width="20" height="1.5" rx="0.75" fill="currentColor" />
          <rect y="9.25" width="20" height="1.5" rx="0.75" fill="currentColor" />
          <rect y="15.5" width="20" height="1.5" rx="0.75" fill="currentColor" />
        </svg>
      </SheetTrigger>

      <SheetContent
        id="mobile-nav-drawer"
        side="right"
        className="w-full max-w-sm p-0 border-0 flex flex-col"
        style={{ background: "var(--bg-surface)" }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid var(--bg-border)" }}
        >
          <Link href="/" onClick={() => setOpen(false)} aria-label="Mia-Care P4SaMD home">
            <Image
              src={`${BASE_PATH}/images/logo/Horizontal_Lockup_White.svg`}
              alt="Mia-Care P4SaMD"
              width={176}
              height={41}
              priority
            />
          </Link>
        </div>

        {/* Nav body */}
        <nav className="flex-1 overflow-y-auto px-3 py-3" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <div className="mt-1 first:mt-0">
                  {/* Accordion trigger */}
                  <button
                    type="button"
                    aria-expanded={expanded[item.label] ?? false}
                    onClick={() => toggle(item.label)}
                    className="w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-white/[0.04]"
                    style={{
                      color: isChildActive(item.dropdown)
                        ? "var(--text-primary)"
                        : "var(--text-secondary)",
                      background: isChildActive(item.dropdown) ? "rgba(0,240,150,0.06)" : undefined,
                    }}
                  >
                    <span className="flex items-center gap-2">
                      {isChildActive(item.dropdown) && (
                        <span
                          aria-hidden="true"
                          className="shrink-0 rounded-sm"
                          style={{
                            width: 2,
                            height: 14,
                            background:
                              "linear-gradient(180deg, var(--brand-green), var(--brand-cyan))",
                          }}
                        />
                      )}
                      {item.label}
                    </span>
                    <ChevronIcon open={expanded[item.label] ?? false} />
                  </button>

                  {/* Accordion content */}
                  {(expanded[item.label] ?? false) && (
                    <div className="mt-0.5 ml-2 flex flex-col">
                      {item.dropdown.map((sub) => {
                        const active = isLinkActive(sub.href);
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2.5 rounded-lg px-3 text-sm transition-colors hover:bg-white/[0.04]"
                            style={{
                              height: 38,
                              color: active ? "var(--brand-green)" : "var(--text-secondary)",
                              fontWeight: active ? 500 : undefined,
                            }}
                          >
                            {active && (
                              <span
                                aria-hidden="true"
                                className="shrink-0 rounded-full"
                                style={{
                                  width: 5,
                                  height: 5,
                                  background: "var(--brand-green)",
                                  boxShadow: "0 0 6px var(--brand-green)",
                                }}
                              />
                            )}
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 rounded-lg px-3 text-sm font-medium transition-colors hover:bg-white/[0.04]"
                  style={{
                    height: 44,
                    color: isLinkActive(item.href) ? "var(--brand-green)" : "var(--text-primary)",
                    fontWeight: isLinkActive(item.href) ? 500 : undefined,
                  }}
                >
                  {isLinkActive(item.href) && (
                    <span
                      aria-hidden="true"
                      className="shrink-0 rounded-full"
                      style={{
                        width: 5,
                        height: 5,
                        background: "var(--brand-green)",
                        boxShadow: "0 0 6px var(--brand-green)",
                      }}
                    />
                  )}
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA footer */}
        <div className="px-4 pb-8 pt-4" style={{ borderTop: "1px solid var(--bg-border)" }}>
          <Link
            href="/request-demo"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full rounded-xl text-sm font-semibold text-bg-base transition-transform hover:-translate-y-px active:translate-y-0"
            style={{
              height: 50,
              background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
              boxShadow: "0 0 20px rgba(0,240,150,0.2)",
            }}
          >
            Request a Demo&nbsp;→
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
