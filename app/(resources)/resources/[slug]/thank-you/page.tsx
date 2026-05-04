import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/common/CtaBanner";
import { assetPath } from "@/lib/asset";
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
    title: `${page.title} | Mia-Care`,
    robots: { index: false },
  };
}

export default async function ThankYouPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getThankYouPage(slug);
  if (!page) notFound();

  return (
    <>
      <section
        className="py-24 min-h-[60vh] flex items-center"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,240,150,0.07) 0%, transparent 55%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Success icon */}
          <div
            className="mx-auto flex items-center justify-center w-16 h-16 rounded-full text-2xl"
            style={{
              background: "rgba(0,240,150,0.12)",
              border: "1px solid rgba(0,240,150,0.25)",
            }}
          >
            ✓
          </div>

          <h1
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.03em" }}
          >
            {page.title}
          </h1>

          <p className="text-lg" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
            {page.message}
          </p>

          {/* Download button */}
          {page.downloadUrl && (
            <a
              href={assetPath(page.downloadUrl)}
              download
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-semibold transition-all hover:-translate-y-px"
              style={{
                background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
                color: "#0b0c10",
              }}
            >
              Download PDF ↓
            </a>
          )}

          {/* Video embed */}
          {page.videoEmbedUrl && (
            <div className="mt-6 aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                src={page.videoEmbedUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Video"
              />
            </div>
          )}

          {/* Body content */}
          {page.contentHtml && (
            <div
              className="prose prose-sm prose-invert max-w-none text-left"
              style={{ color: "var(--text-secondary)" }}
              // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown from trusted filesystem
              dangerouslySetInnerHTML={{ __html: page.contentHtml }}
            />
          )}

          {/* Secondary CTA */}
          {page.ctaUrl && page.ctaLabel && (
            <Link
              href={page.ctaUrl}
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: "var(--brand-green)" }}
            >
              {page.ctaLabel} →
            </Link>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
