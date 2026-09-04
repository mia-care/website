import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/common/CtaBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { PillTag } from "@/components/common/PillTag";
import { MetricStat } from "@/components/sections/success-cases/MetricStat";
import { SITE } from "@/data/site";
import { assetPath } from "@/lib/asset";
import { localeAlternates } from "@/lib/seo";
import { getAllSuccessCases, getSuccessCasePage } from "@/lib/success-cases";

export function generateStaticParams() {
  return getAllSuccessCases("it").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getSuccessCasePage(slug, "it");
  if (!item) return {};

  const pathname = `/it/risorse/success-cases/${item.slug}`;
  const canonicalUrl = `${SITE.url}${pathname}`;
  const coverImage = item.featuredImage ? `${SITE.url}${item.featuredImage}` : undefined;

  return {
    title: `${item.title} | Mia-Care`,
    description: item.description,
    alternates: { canonical: canonicalUrl, languages: localeAlternates(pathname) },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.description,
      url: canonicalUrl,
      images: coverImage ? [{ url: coverImage }] : undefined,
    },
  };
}

export default async function SuccessCasePageIt({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getSuccessCasePage(slug, "it");
  if (!item) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.description,
    datePublished: item.date,
    url: `${SITE.url}/it/risorse/success-cases/${item.slug}`,
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: "Mia-Care",
    },
  };

  return (
    <>
      <JsonLd schema={jsonLd} />

      {/* Hero */}
      <section
        className="pt-20 pb-16"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,240,150,0.07) 0%, transparent 55%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section breadcrumb */}
          <PillTag className="mb-6">Caso di Successo</PillTag>

          {/* Client logo + industry tag on the same row */}
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            {item.clientLogo && (
              // biome-ignore lint/performance/noImgElement: fixed bounding-box logo, next/image fill not suitable here
              <img
                src={assetPath(item.clientLogo)}
                alt={item.client ?? ""}
                style={{
                  display: "block",
                  width: 110,
                  height: 26,
                  objectFit: "contain",
                  objectPosition: "left center",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.7,
                }}
              />
            )}
            {item.industry && <PillTag variant="tag">{item.industry}</PillTag>}
          </div>

          <h1
            className="font-display font-bold mb-4 leading-tight"
            style={{
              fontSize: "clamp(30px, 4vw, 52px)",
              letterSpacing: "-0.035em",
              textWrap: "balance",
            }}
          >
            {item.title}
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            {item.description}
          </p>

          {/* Metrics */}
          {item.metrics && item.metrics.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-10">
              {item.metrics.map((metric) => (
                <MetricStat key={metric} metric={metric} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cover image */}
      {item.featuredImage && (
        <div
          className="w-full overflow-hidden"
          style={{ maxHeight: 480, background: "var(--bg-raised)" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "16/9",
                border: "1px solid var(--bg-border)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              }}
            >
              <Image
                src={assetPath(item.featuredImage)}
                alt=""
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      )}

      {/* Body */}
      <section className="py-16" style={{ borderTop: "1px solid var(--bg-border)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {item.contentHtml && (
            <div
              className="blog-prose case-study"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown from trusted filesystem
              dangerouslySetInnerHTML={{ __html: item.contentHtml }}
            />
          )}
        </div>
      </section>

      {/* Quote — full-bleed, dark + brand glow */}
      {item.quote && (
        <section
          className="relative py-16 sm:py-24 overflow-hidden"
          style={{
            background: "var(--bg-surface)",
            borderTop: "1px solid var(--bg-border)",
            borderBottom: "1px solid var(--bg-border)",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 35%, rgba(0,240,150,0.14) 0%, transparent 65%)",
            }}
          />
          <blockquote className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span
              aria-hidden
              className="block font-display font-bold select-none"
              style={{ fontSize: 88, lineHeight: 1, color: "var(--brand-green)", opacity: 0.3 }}
            >
              "
            </span>
            <p
              className="font-display font-medium leading-snug"
              style={{
                fontSize: "clamp(20px, 2.6vw, 30px)",
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
                textWrap: "balance",
              }}
            >
              {item.quote}
            </p>
            {item.quoteAuthor && (
              <footer className="flex items-center justify-center gap-3 mt-8">
                {/* Avatar: photo if available, initials fallback */}
                {item.quoteAuthorImage ? (
                  <Image
                    src={assetPath(item.quoteAuthorImage)}
                    alt={item.quoteAuthor}
                    width={56}
                    height={56}
                    className="rounded-full object-cover shrink-0"
                    style={{ border: "2px solid rgba(0,240,150,0.35)" }}
                    unoptimized
                  />
                ) : (
                  <span
                    className="inline-flex items-center justify-center rounded-full shrink-0 text-sm font-bold"
                    style={{
                      width: 56,
                      height: 56,
                      background: "var(--bg-raised)",
                      border: "2px solid rgba(0,240,150,0.35)",
                      color: "var(--brand-green)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.quoteAuthor
                      .split(/[\s,]+/)
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((w) => w[0]?.toUpperCase())
                      .join("")}
                  </span>
                )}
                <cite className="text-sm not-italic" style={{ color: "var(--text-secondary)" }}>
                  {item.quoteAuthor}
                </cite>
              </footer>
            )}
          </blockquote>
        </section>
      )}

      <CtaBanner locale="it" />
    </>
  );
}
