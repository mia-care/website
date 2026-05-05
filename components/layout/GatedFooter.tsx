import Link from "next/link";
import { CookiePreferencesButton } from "@/components/common/CookiePreferencesButton";
import { FOOTER_LINKS, SITE } from "@/data/site";

export function GatedFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-6"
      style={{ borderColor: "var(--bg-border)", background: "var(--bg-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs" style={{ color: "var(--text-muted)" }}>
          © {year} {SITE.company.name} — {SITE.company.address} — VAT {SITE.company.vat}
        </div>
        <div className="flex items-center gap-6">
          {FOOTER_LINKS.legal.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs transition-colors hover:text-text-primary"
              style={{ color: "var(--text-muted)" }}
            >
              {link.label}
            </Link>
          ))}
          <CookiePreferencesButton />
        </div>
      </div>
    </footer>
  );
}
