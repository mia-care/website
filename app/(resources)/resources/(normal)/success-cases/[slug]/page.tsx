import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/common/CtaBanner";
import { JsonLd } from "@/components/common/JsonLd";
import { PillTag } from "@/components/common/PillTag";
import { SITE } from "@/data/site";
import { assetPath } from "@/lib/asset";
import { getAllSuccessCases, getSuccessCasePage } from "@/lib/success-cases";

export function generateStaticParams() {
  return getAllSuccessCases().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getSuccessCasePage(slug);
  if (!item) return {};

  const canonicalUrl = `${SITE.url}/resources/success-cases/${item.slug}`;
  const coverImage = item.featuredImage ? `${SITE.url}${item.featuredImage}` : undefined;

  return {
    title: `${item.title} | Mia-Care`,
    description: item.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.description,
      url: canonicalUrl,
      images: coverImage ? [{ url: coverImage }] : undefined,
    },
  };
}

export default async function SuccessCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getSuccessCasePage(slug);
  if (!item) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.description,
    datePublished: item.date,
    url: `${SITE.url}/resources/success-cases/${item.slug}`,
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
          <PillTag className="mb-6">Success Case</PillTag>

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
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.03em" }}
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
                <div
                  key={metric}
                  className="px-5 py-3 rounded-xl"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--bg-border)",
                  }}
                >
                  <span
                    className="font-display font-bold text-base"
                    style={{ color: "var(--brand-green)" }}
                  >
                    {metric}
                  </span>
                </div>
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
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
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
              className="prose prose-invert max-w-none"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown from trusted filesystem
              dangerouslySetInnerHTML={{ __html: item.contentHtml }}
            />
          )}

          {/* Quote */}
          {item.quote && (
            <blockquote
              className="mt-12 px-8 py-6 rounded-2xl"
              style={{
                background: "var(--bg-surface)",
                borderLeft: "3px solid var(--brand-green)",
              }}
            >
              <p
                className="text-lg font-medium leading-relaxed mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                "{item.quote}"
              </p>
              {item.quoteAuthor && (
                <div className="flex items-center gap-3">
                  {/* Avatar: photo if available, initials fallback */}
                  {item.quoteAuthorImage ? (
                    <Image
                      src={assetPath(item.quoteAuthorImage)}
                      alt={item.quoteAuthor}
                      width={40}
                      height={40}
                      className="rounded-full object-cover shrink-0"
                      style={{ border: "2px solid var(--bg-border)" }}
                      unoptimized
                    />
                  ) : (
                    <span
                      className="inline-flex items-center justify-center rounded-full shrink-0 text-xs font-bold"
                      style={{
                        width: 40,
                        height: 40,
                        background: "var(--bg-raised)",
                        border: "2px solid var(--bg-border)",
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
                </div>
              )}
            </blockquote>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
