"use client";

import Image from "next/image";
import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";
import { getCategoryName as getCategoryNameEn } from "@/data/blog-categories";
import { getCategoryName as getCategoryNameIt } from "@/data/blog-categories.it";
import { assetPath } from "@/lib/asset";
import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/format";

const COPY = {
  en: { featured: "Featured", readArticle: "Read article →", hrefPrefix: "/resources/blog" },
  it: {
    featured: "In evidenza",
    readArticle: "Leggi l'articolo →",
    hrefPrefix: "/it/risorse/blog",
  },
};

export function FeaturedPost({ post, locale = "en" }: { post: PostMeta; locale?: "en" | "it" }) {
  const t = COPY[locale];
  const getCategoryName = locale === "it" ? getCategoryNameIt : getCategoryNameEn;
  return (
    <Link
      href={`${t.hrefPrefix}/${post.slug}`}
      className="group grid lg:grid-cols-2 rounded-2xl overflow-hidden border transition-all duration-300"
      style={{
        background: "var(--bg-surface)",
        borderColor: "var(--bg-border)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--bg-border-strong)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--bg-border)";
      }}
    >
      {/* Image */}
      {post.featuredImage && (
        <div className="relative w-full aspect-[16/9] lg:aspect-auto overflow-hidden bg-bg-raised">
          <Image
            src={assetPath(post.featuredImage)}
            alt={post.featuredImageAlt || ""}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
      )}

      {/* Text */}
      <div className="flex flex-col justify-center p-8 lg:p-12 gap-5">
        {/* Badges row */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase"
            style={{
              background: "rgba(0,240,150,0.12)",
              border: "1px solid rgba(0,240,150,0.25)",
              color: "var(--brand-green)",
              letterSpacing: "0.08em",
            }}
          >
            {t.featured}
          </span>
          {post.categories.slice(0, 2).map((cat) => (
            <PillTag key={cat} variant="tag">
              {getCategoryName(cat)}
            </PillTag>
          ))}
        </div>

        <h2
          className="font-display font-bold leading-tight group-hover:text-brand-green transition-colors"
          style={{ fontSize: "clamp(22px, 2.5vw, 34px)", color: "var(--text-primary)" }}
        >
          {post.title}
        </h2>

        {post.excerpt && (
          <p
            className="text-base line-clamp-3"
            style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
          >
            {post.excerpt}
          </p>
        )}

        <div
          className="flex items-center gap-3 text-xs pt-4"
          style={{
            color: "var(--text-muted)",
            borderTop: "1px solid var(--bg-border)",
          }}
        >
          <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
          <span
            className="ml-auto font-semibold text-sm transition-colors group-hover:text-brand-green"
            style={{ color: "var(--text-secondary)" }}
          >
            {t.readArticle}
          </span>
        </div>
      </div>
    </Link>
  );
}
