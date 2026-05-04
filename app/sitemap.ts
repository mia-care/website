import type { MetadataRoute } from "next";
import { capabilities } from "@/data/capabilities";
import { useCases } from "@/data/use-cases";
import { getAllPosts } from "@/lib/blog";
import { getAllResources } from "@/lib/resources";

export const dynamic = "force-static";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mia-care.io";

// Update these dates manually when page content changes significantly.
// Format: YYYY-MM-DD. Never use new Date() — it marks every page as modified on every build.
const PAGE_DATES: Record<string, string> = {
  "/": "2026-04-26",
  "/product": "2026-04-26",
  "/pricing": "2026-04-26",
  "/request-demo": "2026-04-26",
  "/about-us": "2026-04-26",
  "/newsroom": "2026-04-26",
  "/careers": "2026-04-26",
  "/certifications": "2026-04-26",
  "/sustainability": "2026-04-26",
  "/resources": "2026-04-26",
  "/resources/blog": "2026-04-26",
  "/resources/docs": "2026-04-26",
  "/resources/events": "2026-04-26",
  "/resources/faq": "2026-04-26",
};

// Capabilities, use-cases, competence-center: update when data in /data/*.ts changes
const DATA_LAST_MODIFIED = "2026-04-26";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: PAGE_DATES["/"], changeFrequency: "weekly", priority: 1 },
    {
      url: `${BASE}/product`,
      lastModified: PAGE_DATES["/product"],
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/pricing`,
      lastModified: PAGE_DATES["/pricing"],
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/request-demo`,
      lastModified: PAGE_DATES["/request-demo"],
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/about-us`,
      lastModified: PAGE_DATES["/about-us"],
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/newsroom`,
      lastModified: PAGE_DATES["/newsroom"],
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${BASE}/careers`,
      lastModified: PAGE_DATES["/careers"],
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${BASE}/certifications`,
      lastModified: PAGE_DATES["/certifications"],
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE}/sustainability`,
      lastModified: PAGE_DATES["/sustainability"],
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${BASE}/resources`,
      lastModified: PAGE_DATES["/resources"],
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${BASE}/resources/blog`,
      lastModified: PAGE_DATES["/resources/blog"],
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${BASE}/resources/docs`,
      lastModified: PAGE_DATES["/resources/docs"],
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE}/resources/events`,
      lastModified: PAGE_DATES["/resources/events"],
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${BASE}/resources/faq`,
      lastModified: PAGE_DATES["/resources/faq"],
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const capabilityPages: MetadataRoute.Sitemap = capabilities.map((cap) => ({
    url: `${BASE}/capabilities/${cap.slug}`,
    lastModified: DATA_LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const useCasePages: MetadataRoute.Sitemap = useCases.map((uc) => ({
    url: `${BASE}/use-cases/${uc.slug}`,
    lastModified: DATA_LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const resourcePages: MetadataRoute.Sitemap = getAllResources().map((r) => ({
    url: `${BASE}/resources/${r.slug}`,
    lastModified: DATA_LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPosts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/resources/blog/${post.slug}`,
    // date = first publication, modified = last meaningful content update
    lastModified: post.modified ?? post.date,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...capabilityPages, ...useCasePages, ...resourcePages, ...blogPages];
}
