import Image from "next/image";
import Link from "next/link";
import { getCategoryName } from "@/data/blog-categories";
import { assetPath } from "@/lib/asset";
import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/format";

export function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/resources/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300"
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
      {post.featuredImage && (
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-bg-raised">
          <Image
            src={assetPath(post.featuredImage)}
            alt={post.featuredImageAlt || ""}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 p-6 gap-4">
        {post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.categories.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase"
                style={{
                  background: "rgba(0,240,150,0.08)",
                  borderColor: "rgba(0,240,150,0.18)",
                  border: "1px solid rgba(0,240,150,0.18)",
                  color: "var(--brand-green)",
                  letterSpacing: "0.08em",
                }}
              >
                {getCategoryName(cat)}
              </span>
            ))}
          </div>
        )}

        <h2
          className="font-display font-bold leading-tight text-lg group-hover:text-brand-green transition-colors"
          style={{ color: "var(--text-primary)" }}
        >
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="text-sm line-clamp-3" style={{ color: "var(--text-secondary)" }}>
            {post.excerpt}
          </p>
        )}

        <div
          className="mt-auto flex items-center gap-3 text-xs pt-4"
          style={{
            color: "var(--text-muted)",
            borderTop: "1px solid var(--bg-border)",
          }}
        >
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
      </div>
    </Link>
  );
}
