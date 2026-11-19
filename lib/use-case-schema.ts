import { SITE } from "@/data/site";
import type { UseCase } from "@/data/use-cases";
import { BLOG_PUBLISHER_NAME } from "@/lib/seo";

/** Strips the inline markup used in use-case copy (**bold**, [label](href)) for plain-text consumers. */
export function stripRichText(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

/**
 * Extra JSON-LD for use cases that carry a publish/update date and/or a FAQ:
 * BlogPosting (datePublished, dateModified, publisher) and FAQPage.
 */
export function buildUseCaseSchemas(
  uc: UseCase,
  { path, locale }: { path: string; locale: "en" | "it" },
): Record<string, unknown>[] {
  const url = `${SITE.url}${path}`;
  const schemas: Record<string, unknown>[] = [];

  if (uc.datePublished && uc.lastUpdated) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: uc.name,
      description: uc.seo.description,
      url,
      inLanguage: locale,
      datePublished: uc.datePublished,
      dateModified: uc.lastUpdated,
      publisher: {
        "@type": "Organization",
        name: BLOG_PUBLISHER_NAME,
        logo: { "@type": "ImageObject", url: `${SITE.url}/images/mia-care-logo.png` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    });
  }

  if (uc.faq && uc.faq.items.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: uc.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: stripRichText(item.a) },
      })),
    });
  }

  return schemas;
}
