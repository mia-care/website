"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { capabilities } from "@/data/capabilities";
import { useCases } from "@/data/use-cases";
import { cn } from "@/lib/utils";

const productLinks = [
  { label: "Platform Overview", href: "/product" },
  ...capabilities.map((c) => ({ label: c.name, href: `/capabilities/${c.slug}` })),
];

const useCaseLinks = useCases.map((u) => ({ label: u.name, href: `/use-cases/${u.slug}` }));

const resourceLinks = [
  { label: "Competence Center", href: "/resources/competence-center" },
  { label: "Blog", href: "/resources/blog" },
  { label: "Docs", href: "/resources/docs" },
  { label: "Events", href: "/resources/events" },
  { label: "FAQ", href: "/resources/faq" },
];

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Careers", href: "/careers" },
];

interface DropdownProps {
  label: string;
  items: { label: string; href: string }[];
}

function NavDropdown({ label, items }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      role="none"
    >
      <button
        type="button"
        className={cn(
          "flex items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base rounded",
          open && "text-text-primary",
        )}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown
          className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-bg-border bg-bg-surface p-2 shadow-2xl">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-raised hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-1 focus-visible:ring-offset-bg-surface"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-bg-border bg-bg-base/75 backdrop-blur-[20px]">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
            aria-label="Mia-Care home"
          >
            <Image
              src="/images/logo/Horizontal_Lockup_Primary.svg"
              alt="Mia-Care P4SaMD"
              width={140}
              height={32}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            <NavDropdown label="Product" items={productLinks} />
            <NavDropdown label="Use Cases" items={useCaseLinks} />
            <Link
              href="/pricing"
              className="rounded text-sm font-medium text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
            >
              Pricing
            </Link>
            <NavDropdown label="Resources" items={resourceLinks} />
            <NavDropdown label="Company" items={companyLinks} />
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="https://app.mia-care.io"
              className="rounded text-sm font-medium text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
            >
              Log in
            </Link>
            <Link
              href="/request-demo"
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-gradient px-4 py-2 text-sm font-semibold text-bg-base transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
            >
              Request a Demo
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-raised hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-30 overflow-y-auto bg-bg-base pt-16 lg:hidden">
          <nav className="flex flex-col gap-1 p-6" aria-label="Mobile navigation">
            {[
              { label: "Product", items: productLinks },
              { label: "Use Cases", items: useCaseLinks },
              { label: "Resources", items: resourceLinks },
              { label: "Company", items: companyLinks },
            ].map(({ label, items }) => (
              <div key={label}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-text-primary"
                  onClick={() => setMobileSection(mobileSection === label ? null : label)}
                >
                  {label}
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform",
                      mobileSection === label && "rotate-180",
                    )}
                  />
                </button>
                {mobileSection === label && (
                  <div className="ml-3 flex flex-col gap-0.5 border-l border-bg-border pl-4 pb-2">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/pricing"
              className="rounded-lg px-3 py-3 text-base font-medium text-text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>

            <div className="mt-4 flex flex-col gap-3 border-t border-bg-border pt-4">
              <Link
                href="https://app.mia-care.io"
                className="rounded-lg border border-bg-border px-4 py-3 text-center text-sm font-medium text-text-primary"
                onClick={() => setMobileOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/request-demo"
                className="rounded-lg bg-brand-gradient px-4 py-3 text-center text-sm font-semibold text-bg-base"
                onClick={() => setMobileOpen(false)}
              >
                Request a Demo →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
