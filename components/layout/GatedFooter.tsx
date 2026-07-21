import Link from "next/link";
import { CookiePreferencesButton } from "@/components/common/CookiePreferencesButton";
import { FOOTER_LINKS as FOOTER_LINKS_EN, SITE as SITE_EN } from "@/data/site";
import { FOOTER_LINKS as FOOTER_LINKS_IT, SITE as SITE_IT } from "@/data/site.it";

export function GatedFooter({ locale = "en" }: { locale?: "en" | "it" }) {
  const year = new Date().getFullYear();
  const FOOTER_LINKS = locale === "it" ? FOOTER_LINKS_IT : FOOTER_LINKS_EN;
  const SITE = locale === "it" ? SITE_IT : SITE_EN;

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
