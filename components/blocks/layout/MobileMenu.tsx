"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/data/nav";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md transition-colors hover:bg-white/5"
        style={{ color: "var(--text-primary)" }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect y="3" width="20" height="1.5" rx="0.75" fill="currentColor" />
          <rect y="9.25" width="20" height="1.5" rx="0.75" fill="currentColor" />
          <rect y="15.5" width="20" height="1.5" rx="0.75" fill="currentColor" />
        </svg>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-sm p-0 border-0"
        style={{ background: "var(--bg-surface)" }}
      >
        <div className="flex flex-col h-full p-6 gap-2 overflow-y-auto">
          <div className="mb-6">
            <Image
              src="/images/logo/Horizontal_Lockup_Primary.svg"
              alt="Mia-Care"
              width={120}
              height={28}
              priority
            />
          </div>

          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <div>
                  <span
                    className="label-caps block mb-2 mt-4"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.label}
                  </span>
                  <div className="flex flex-col gap-1 pl-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        className="py-1.5 text-sm transition-colors hover:text-brand-green"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base font-medium block transition-colors hover:text-brand-green"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <div className="mt-auto pt-6 flex flex-col gap-3">
            <Link
              href="/request-demo"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center h-11 px-5 rounded-lg font-semibold text-sm bg-brand-gradient text-bg-base"
            >
              Request a Demo →
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
