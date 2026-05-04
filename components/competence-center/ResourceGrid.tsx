"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { assetPath } from "@/lib/asset";
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

export function ResourceGrid({ resources }: { resources: ResourceMeta[] }) {
  const [active, setActive] = useState<ResourceType | "all">("all");

  const availableTypes = ["all", ...new Set(resources.map((r) => r.type))] as (
    | ResourceType
    | "all"
  )[];

  const filtered = active === "all" ? resources : resources.filter((r) => r.type === active);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {availableTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setActive(type)}
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
                  border: "1px solid rgba(0,240,150,0.25)",
                  color: "var(--brand-green)",
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
                style={{ color: "var(--brand-green)" }}
              >
                {CTA_LABELS[resource.type]}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
