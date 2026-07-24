import Image from "next/image";
import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";
import { getCategoryName as getCategoryNameEn } from "@/data/blog-categories";
import { getCategoryName as getCategoryNameIt } from "@/data/blog-categories.it";
import { assetPath } from "@/lib/asset";
import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/format";

const COPY = {
  en: { heading: "Related Articles", hrefPrefix: "/resources/blog" },
  it: { heading: "Articoli Correlati", hrefPrefix: "/it/risorse/blog" },
};

export function RelatedPosts({
  posts,
  locale = "en",
}: {
  posts: PostMeta[];
  locale?: "en" | "it";
}) {
  if (posts.length === 0) return null;
  const t = COPY[locale];
  const getCategoryName = locale === "it" ? getCategoryNameIt : getCategoryNameEn;

  return (
    <section className="py-16" style={{ borderTop: "1px solid var(--bg-border)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-display font-bold text-2xl mb-8"
          style={{ color: "var(--text-primary)" }}
        >
          {t.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`${t.hrefPrefix}/${post.slug}`}
              className="group flex flex-col rounded-xl overflow-hidden border transition-colors"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--bg-border)",
              }}
            >
              {post.featuredImage && (
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-bg-raised">
                  <Image
                    src={assetPath(post.featuredImage)}
                    alt={post.featuredImageAlt || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-4 flex flex-col gap-2">
                {post.categories[0] && (
                  <PillTag variant="tag">{getCategoryName(post.categories[0])}</PillTag>
                )}
                <h3
                  className="font-display font-bold text-sm leading-snug group-hover:text-brand-green transition-colors line-clamp-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {post.title}
                </h3>
                <time
                  className="text-xs"
                  style={{ color: "var(--text-muted)" }}
                  dateTime={post.date}
                >
                  {formatDate(post.date, locale)}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
