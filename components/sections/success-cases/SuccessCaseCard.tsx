"use client";

import Image from "next/image";
import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";
import { assetPath } from "@/lib/asset";
import type { SuccessCaseMeta } from "@/lib/success-cases";

export function SuccessCaseCard({
  item,
  locale = "en",
}: {
  item: SuccessCaseMeta;
  locale?: "en" | "it";
}) {
  const href =
    locale === "it"
      ? `/it/risorse/success-cases/${item.slug}`
      : `/resources/success-cases/${item.slug}`;

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--bg-border)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,240,150,0.3)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.16)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--bg-border)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
      }}
    >
      {/* Accent bar — appears on hover */}
      <div
        aria-hidden
        className="h-[3px] w-full shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))" }}
      />

      {/* Cover image */}
      {item.featuredImage && (
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16/9", background: "var(--bg-raised)" }}
        >
          <Image
            src={assetPath(item.featuredImage)}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        </div>
      )}

      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* Client logo — only rendered when logo path is set */}
        {item.clientLogo && (
          // biome-ignore lint/performance/noImgElement: fixed bounding-box logo, next/image fill not suitable here
          <img
            src={assetPath(item.clientLogo)}
            alt={item.client ?? ""}
            style={{
              display: "block",
              width: 96,
              height: 22,
              objectFit: "contain",
              objectPosition: "left center",
              filter: "brightness(0) invert(1)",
              opacity: 0.7,
            }}
          />
        )}

        {/* Industry pill */}
        {item.industry && <PillTag variant="tag">{item.industry}</PillTag>}

        {/* Title + description */}
        <div className="flex flex-col gap-2 flex-1">
          <h3
            className="font-display font-bold leading-snug"
            style={{
              fontSize: "clamp(18px, 1.8vw, 22px)",
              letterSpacing: "-0.015em",
              color: "var(--text-primary)",
            }}
          >
            {item.title}
          </h3>
          <p
            className="text-sm line-clamp-3"
            style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
          >
            {item.description}
          </p>
        </div>

        <span
          className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto"
          style={{ color: "var(--brand-green)" }}
        >
          {locale === "it" ? "Leggi la storia" : "Read the story"}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
