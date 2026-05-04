import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { PillTag } from "@/components/common/PillTag";
import { getAuthorBySlug } from "@/data/authors";
import { getCategoryName } from "@/data/blog-categories";
import { SITE } from "@/data/site";
import { assetPath } from "@/lib/asset";
import { formatDate, getAllPostSlugs, getPost, getRelatedPosts } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const seoTitle = post.seoTitle ?? `${post.title} | Mia-Care`;
  const canonicalUrl = `${SITE.url}/resources/blog/${post.slug}`;

  return {
    title: seoTitle,
    description: post.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "article",
      title: seoTitle,
      description: post.description,
      url: canonicalUrl,
      publishedTime: post.date,
      modifiedTime: post.modified ?? post.date,
      images: post.featuredImage
        ? [{ url: `${SITE.url}${post.featuredImage}`, alt: post.featuredImageAlt }]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const author = getAuthorBySlug(post.author);
  const related = getRelatedPosts(post.slug, post.categories);
  const canonicalUrl = `${SITE.url}/resources/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: canonicalUrl,
    datePublished: post.date,
    dateModified: post.modified ?? post.date,
    image: post.featuredImage ? `${SITE.url}${post.featuredImage}` : undefined,
    author: author
      ? {
          "@type": "Organization",
          name: author.name,
          url: SITE.url,
          sameAs: author.sameAs,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: SITE.company.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/images/mia-care-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="py-16" style={{ borderBottom: "1px solid var(--bg-border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            <Link href="/resources/blog" className="hover:text-brand-green transition-colors">
              Blog
            </Link>
            <span>/</span>
            {post.categories[0] && (
              <span style={{ color: "var(--text-secondary)" }}>
                {getCategoryName(post.categories[0])}
              </span>
            )}
          </nav>

          {/* Categories */}
          {post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((cat) => (
                <PillTag key={cat}>{getCategoryName(cat)}</PillTag>
              ))}
            </div>
          )}

          <h1
            className="font-display font-bold mb-6"
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-lg mb-8" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
              {post.excerpt}
            </p>
          )}

          {/* Meta row */}
          <div
            className="flex flex-wrap items-center gap-4 text-sm pt-6"
            style={{ borderTop: "1px solid var(--bg-border)", color: "var(--text-muted)" }}
          >
            {author && (
              <span className="font-medium" style={{ color: "var(--text-secondary)" }}>
                {author.name}
              </span>
            )}
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      {post.featuredImage && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mb-8 relative z-10 pt-8">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src={assetPath(post.featuredImage)}
              alt={post.featuredImageAlt || ""}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Article body + TOC */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex gap-16">
          {/* Main content */}
          <article className="flex-1 min-w-0">
            <div
              className="blog-prose"
              dangerouslySetInnerHTML={{ __html: addHeadingIds(post.contentHtml, post.headings) }}
            />
          </article>

          {/* Sidebar TOC */}
          {post.headings.length > 2 && (
            <aside className="hidden xl:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents headings={post.headings} />
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* Related posts */}
      <RelatedPosts posts={related} />
    </>
  );
}

function addHeadingIds(
  html: string,
  headings: { id: string; text: string; level: 2 | 3 }[],
): string {
  const byLevel: Record<2 | 3, typeof headings> = { 2: [], 3: [] };
  for (const h of headings) byLevel[h.level].push(h);
  const counters: Record<2 | 3, number> = { 2: 0, 3: 0 };

  return html.replace(/<(h[23])([^>]*)>([\s\S]*?)<\/\1>/gi, (match, tag, attrs, inner) => {
    const level = Number(tag[1]) as 2 | 3;
    const h = byLevel[level][counters[level]++];
    return h ? `<${tag}${attrs} id="${h.id}">${inner}</${tag}>` : match;
  });
}
