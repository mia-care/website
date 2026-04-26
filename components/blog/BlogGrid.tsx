"use client";

import { useState } from "react";
import type { BlogCategory } from "@/data/blog-categories";
import type { PostMeta } from "@/lib/blog";
import { BlogCard } from "./BlogCard";

const POSTS_PER_PAGE = 9;

export function BlogGrid({ posts, categories }: { posts: PostMeta[]; categories: BlogCategory[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [page, setPage] = useState(1);

  const filtered =
    activeCategory === "all" ? posts : posts.filter((p) => p.categories.includes(activeCategory));

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(0, page * POSTS_PER_PAGE);
  const hasMore = page < totalPages;

  function handleCategory(slug: string) {
    setActiveCategory(slug);
    setPage(1);
  }

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          type="button"
          onClick={() => handleCategory("all")}
          aria-pressed={activeCategory === "all"}
          className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
          style={
            activeCategory === "all"
              ? {
                  background: "var(--brand-green)",
                  color: "#0b0c10",
                }
              : {
                  background: "var(--bg-raised)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--bg-border)",
                }
          }
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => handleCategory(cat.slug)}
            aria-pressed={activeCategory === cat.slug}
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
            style={
              activeCategory === cat.slug
                ? {
                    background: "var(--brand-green)",
                    color: "#0b0c10",
                  }
                : {
                    background: "var(--bg-raised)",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--bg-border)",
                  }
            }
          >
            {cat.name}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center py-20" style={{ color: "var(--text-muted)" }}>
          No articles in this category yet.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-12">
              <button
                type="button"
                onClick={() => setPage((p) => p + 1)}
                className="px-8 py-3 rounded-full font-semibold text-sm transition-all"
                style={{
                  border: "1px solid var(--bg-border-strong)",
                  color: "var(--text-primary)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--brand-green)";
                  (e.currentTarget as HTMLElement).style.color = "var(--brand-green)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--bg-border-strong)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                }}
              >
                Load more
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
