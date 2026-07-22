import Link from "next/link";
import { JsonLd } from "@/components/common/JsonLd";
import { SITE } from "@/data/site";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

const ARIA_LABEL = { en: "Breadcrumb", it: "Percorso di navigazione" };

export function Breadcrumb({
  items,
  locale = "en",
}: {
  items: BreadcrumbItem[];
  locale?: "en" | "it";
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? `${SITE.url}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <nav
        aria-label={ARIA_LABEL[locale]}
        className="border-b"
        style={{ borderColor: "var(--bg-border)", background: "var(--bg-base)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-1.5 h-10 text-xs flex-wrap">
            {items.map((item, i) => (
              <li key={item.label} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span aria-hidden="true" style={{ color: "var(--text-muted)" }}>
                    /
                  </span>
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-brand-green"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current="page" style={{ color: "var(--text-secondary)" }}>
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
