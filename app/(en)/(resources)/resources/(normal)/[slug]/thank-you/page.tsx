import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { assetPath } from "@/lib/asset";
import type { ResourceType } from "@/lib/resources";
import { getAllResources, getThankYouPage } from "@/lib/resources";

export function generateStaticParams() {
  return getAllResources().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getThankYouPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    robots: { index: false },
  };
}

const TYPE_LABELS: Record<ResourceType, string> = {
  whitepaper: "Whitepaper",
  video: "Video",
  guide: "Guide",
  "case-study": "Case Study",
  report: "Report",
};

export default async function ThankYouPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getThankYouPage(slug);
  if (!page) notFound();

  const related = getAllResources()
    .filter((r) => r.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <section
        className="pt-20 pb-16"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,240,150,0.07) 0%, transparent 55%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          {/* Success icon */}
          <div
            className="mx-auto flex items-center justify-center w-14 h-14 rounded-full text-xl"
            style={{
              background: "rgba(0,240,150,0.12)",
              border: "1px solid rgba(0,240,150,0.30)",
            }}
          >
            ✓
          </div>

          <h1
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(26px, 3.5vw, 44px)", letterSpacing: "-0.03em" }}
          >
            {page.title}
          </h1>

          <p className="text-base" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
            {page.message}
          </p>

          {/* Body content */}
          {page.contentHtml && (
            <div
              className="prose prose-sm prose-invert max-w-none text-left"
              style={{ color: "var(--text-secondary)" }}
              // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown from trusted filesystem
              dangerouslySetInnerHTML={{ __html: page.contentHtml }}
            />
          )}
        </div>
      </section>

      {/* Download CTA */}
      {page.downloadUrl && (
        <section className="pb-4">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <a
              href={page.downloadUrl}
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:-translate-y-px"
              style={{
                background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
                color: "#0b0c10",
              }}
            >
              Download the whitepaper ↓
            </a>
          </div>
        </section>
      )}

      {/* Video embed */}
      {page.videoEmbedUrl && (
        <section className="pb-4">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                src={page.videoEmbedUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={page.resourceTitle}
              />
            </div>
          </div>
        </section>
      )}

      {/* Secondary CTA */}
      {page.ctaUrl && page.ctaLabel && (
        <section className="pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <Link
              href={page.ctaUrl}
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: "var(--brand-green)" }}
            >
              {page.ctaLabel} →
            </Link>
          </div>
        </section>
      )}

      {/* Related resources */}
      {related.length > 0 && (
        <section className="py-16" style={{ borderTop: "1px solid var(--bg-border)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-lg mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              You might also like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/resources/${r.slug}`}
                  className="group flex flex-col rounded-xl overflow-hidden transition-all hover:-translate-y-1"
                  style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
                >
                  <div
                    className="relative h-36 overflow-hidden shrink-0"
                    style={{ background: "var(--bg-raised)" }}
                  >
                    {r.featuredImage && (
                      <Image
                        src={assetPath(r.featuredImage)}
                        alt={r.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    )}
                    <span
                      className="absolute top-2 left-2 text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{
                        background: "rgba(11,12,16,0.75)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "var(--text-secondary)",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {TYPE_LABELS[r.type]}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-4 gap-2">
                    <p
                      className="font-display font-bold text-sm leading-snug"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {r.title}
                    </p>
                    <p
                      className="text-xs flex-1"
                      style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}
                    >
                      {r.description}
                    </p>
                    <span
                      className="mt-1 text-xs font-semibold"
                      style={{ color: "var(--brand-green)" }}
                    >
                      {r.type === "video" ? "Watch →" : "Download →"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
