"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchBar } from "@/components/common/SearchBar";
import type { BlogCategory } from "@/data/blog-categories";
import type { PostMeta } from "@/lib/blog";
import { BlogCard } from "./BlogCard";

const POSTS_PER_PAGE = 9;

export function BlogGrid({ posts, categories }: { posts: PostMeta[]; categories: BlogCategory[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category") ?? "all";
  const query = searchParams.get("q") ?? "";
  const [page, setPage] = useState(1);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [query, activeCategory]);

  function setParam(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
  }

  function handleCategory(slug: string) {
    setParam("category", slug === "all" ? null : slug);
  }

  const filtered = posts.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.categories.includes(activeCategory);
    const q = query.toLowerCase().trim();
    const matchesQuery =
      !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  const paginated = filtered.slice(0, page * POSTS_PER_PAGE);
  const hasMore = page * POSTS_PER_PAGE < filtered.length;

  const searchItems = posts.map((p) => ({
    title: p.title,
    href: `/resources/blog/${p.slug}`,
  }));

  return (
    <div>
      {/* Search bar */}
      <div className="mb-6">
        <SearchBar
          items={searchItems}
          defaultValue={query}
          onSearch={(v) => setParam("q", v || null)}
          placeholder="Search articles..."
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          type="button"
          onClick={() => handleCategory("all")}
          aria-pressed={activeCategory === "all"}
          className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
          style={
            activeCategory === "all"
              ? { background: "var(--brand-green)", color: "#0b0c10" }
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
                ? { background: "var(--brand-green)", color: "#0b0c10" }
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
          {query ? `No articles found for "${query}".` : "No articles in this category yet."}
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
