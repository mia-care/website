"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { assetPath } from "@/lib/asset";
import { SearchBar } from "@/components/common/SearchBar";
import type { ResourceMeta, ResourceType } from "@/lib/resources";

const TYPE_LABELS: Record<ResourceType | "all", string> = {
  all: "All",
  whitepaper: "Whitepaper",
  video: "Video",
  guide: "Guide",
  "case-study": "Case Study",
  report: "Report",
};

const CTA_LABELS: Record<ResourceType, string> = {
  whitepaper: "Download →",
  video: "Watch →",
  guide: "Download →",
  "case-study": "Read →",
  report: "Download →",
};

function FeaturedCard({ resource }: { resource: ResourceMeta }) {
  return (
    <Link
      href={`/resources/${resource.slug}`}
      className="group flex flex-col sm:flex-row rounded-2xl overflow-hidden mb-12 transition-all hover:-translate-y-0.5"
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--bg-border-strong)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
      }}
    >
      {/* Image */}
      <div
        className="relative sm:w-[45%] shrink-0 h-56 sm:h-auto overflow-hidden"
        style={{ background: "var(--bg-raised)", minHeight: 220 }}
      >
        {resource.featuredImage && (
          <Image
            src={assetPath(resource.featuredImage)}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        )}
        <span
          className="absolute top-3 left-3 text-xs px-2 py-0.5 rounded-full font-semibold"
          style={{
            background: "rgba(11,12,16,0.75)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "var(--text-secondary)",
            backdropFilter: "blur(6px)",
          }}
        >
          {TYPE_LABELS[resource.type]}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col justify-center gap-4 p-7 sm:p-10">
        <span className="label-caps" style={{ color: "var(--brand-green)" }}>
          Featured
        </span>
        <h3
          className="font-display font-bold leading-snug"
          style={{ fontSize: "clamp(20px, 2.2vw, 28px)", color: "var(--text-primary)" }}
        >
          {resource.title}
        </h3>
        <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
          {resource.description}
        </p>
        <span
          className="inline-flex items-center h-10 px-6 rounded-lg font-semibold text-sm self-start"
          style={{
            background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
            color: "#0b0c10",
          }}
        >
          {CTA_LABELS[resource.type]}
        </span>
      </div>
    </Link>
  );
}

export function ResourceGrid({ resources }: { resources: ResourceMeta[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const active = (searchParams.get("type") ?? "all") as ResourceType | "all";
  const query = searchParams.get("q") ?? "";

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

  const featured = resources.find((r) => r.featured);
  const rest = resources.filter((r) => !r.featured);

  const availableTypes = ["all", ...new Set(rest.map((r) => r.type))] as (ResourceType | "all")[];

  const q = query.toLowerCase().trim();
  const isSearching = q.length > 0;

  const filtered = (isSearching ? resources : rest).filter((r) => {
    const matchesType = active === "all" || r.type === active;
    const matchesQuery =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q);
    return matchesType && matchesQuery;
  });

  const searchItems = resources.map((r) => ({
    title: r.title,
    href: `/resources/${r.slug}`,
  }));

  return (
    <>
      {/* Featured hero card — shown only when not searching */}
      {featured && !isSearching && <FeaturedCard resource={featured} />}

      {/* Search bar */}
      <div className="mb-6">
        <SearchBar
          items={searchItems}
          defaultValue={query}
          onSearch={(v) => setParam("q", v || null)}
          placeholder="Search resources..."
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {availableTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setParam("type", type === "all" ? null : type)}
            aria-pressed={active === type}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
            style={
              active === type
                ? {
                    background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
                    color: "#0b0c10",
                  }
                : {
                    background: "var(--bg-raised)",
                    border: "1px solid var(--bg-border)",
                    color: "var(--text-secondary)",
                  }
            }
          >
            {TYPE_LABELS[type]}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center py-20" style={{ color: "var(--text-muted)" }}>
          {query ? `No resources found for "${query}".` : "No resources in this category yet."}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((resource) => (
            <Link
              key={resource.slug}
              href={`/resources/${resource.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
              style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
            >
              {/* Cover */}
              <div
                className="relative h-44 overflow-hidden"
                style={{ background: "var(--bg-raised)" }}
              >
                {resource.featuredImage && (
                  <Image
                    src={assetPath(resource.featuredImage)}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                )}
                <span
                  className="absolute top-3 left-3 text-xs px-2 py-0.5 rounded-full font-semibold capitalize"
                  style={{
                    background: "rgba(11,12,16,0.75)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "var(--text-secondary)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {TYPE_LABELS[resource.type]}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5">
                <h3
                  className="font-display font-bold text-base mb-2 leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {resource.title}
                </h3>
                <p
                  className="text-sm flex-1"
                  style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}
                >
                  {resource.description}
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {CTA_LABELS[resource.type]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
