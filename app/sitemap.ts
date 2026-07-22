import type { MetadataRoute } from "next";
import { capabilities } from "@/data/capabilities";
import { useCases } from "@/data/use-cases";
import { getAllPosts } from "@/lib/blog";
import { getAllResources } from "@/lib/resources";

export const dynamic = "force-static";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mia-care.io";

// Update these dates manually when page content changes significantly.
// Format: YYYY-MM-DD. Never use new Date() — it marks every page as modified on every build.
const PAGE_DATES: Record<string, string> = {
  "/": "2026-04-26",
  "/product": "2026-04-26",
  "/plans": "2026-05-08",
  "/request-demo": "2026-04-26",
  "/about-us": "2026-04-26",
  "/careers": "2026-04-26",
  "/certifications": "2026-04-26",
  "/sustainability": "2026-04-26",
  "/resources": "2026-04-26",
  "/resources/blog": "2026-04-26",
};

// Capabilities, use-cases, competence-center: update when data in /data/*.ts changes
const DATA_LAST_MODIFIED = "2026-04-26";

type Entry = MetadataRoute.Sitemap[number];

// A static page and its /it counterpart, both already built — see the
// pairing rule in CONTEXT.md and docs/adr/0001-*.md. Only pair entries
// whose /it page actually exists; an unbuilt one would hreflang to a 404.
function localePair(
  enPath: string,
  itPath: string,
  opts: { lastModified: string; changeFrequency: Entry["changeFrequency"]; priority: number },
): Entry[] {
  const enUrl = enPath === "/" ? BASE : `${BASE}${enPath}`;
  const itUrl = `${BASE}${itPath}`;
  const alternates = { languages: { en: enUrl, it: itUrl, "x-default": enUrl } };
  return [
    { url: enUrl, ...opts, alternates },
    { url: itUrl, ...opts, alternates },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    ...localePair("/", "/it", {
      lastModified: PAGE_DATES["/"],
      changeFrequency: "weekly",
      priority: 1,
    }),
    ...localePair("/product", "/it/prodotto", {
      lastModified: PAGE_DATES["/product"],
      changeFrequency: "monthly",
      priority: 0.9,
    }),
    ...localePair("/plans", "/it/piani", {
      lastModified: PAGE_DATES["/plans"],
      changeFrequency: "monthly",
      priority: 0.8,
    }),
    ...localePair("/request-demo", "/it/richiedi-demo", {
      lastModified: PAGE_DATES["/request-demo"],
      changeFrequency: "monthly",
      priority: 0.9,
    }),
    ...localePair("/about-us", "/it/chi-siamo", {
      lastModified: PAGE_DATES["/about-us"],
      changeFrequency: "monthly",
      priority: 0.6,
    }),
    ...localePair("/careers", "/it/lavora-con-noi", {
      lastModified: PAGE_DATES["/careers"],
      changeFrequency: "weekly",
      priority: 0.5,
    }),
    ...localePair("/certifications", "/it/certificazioni", {
      lastModified: PAGE_DATES["/certifications"],
      changeFrequency: "monthly",
      priority: 0.5,
    }),
    ...localePair("/sustainability", "/it/sostenibilita", {
      lastModified: PAGE_DATES["/sustainability"],
      changeFrequency: "monthly",
      priority: 0.4,
    }),
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
  ];

  const capabilityPages: MetadataRoute.Sitemap = capabilities.flatMap((cap) =>
    localePair(`/capabilities/${cap.slug}`, `/it/capabilities/${cap.slug}`, {
      lastModified: DATA_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    }),
  );

  const useCasePages: MetadataRoute.Sitemap = useCases.flatMap((uc) =>
    localePair(`/use-cases/${uc.slug}`, `/it/use-cases/${uc.slug}`, {
      lastModified: DATA_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

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
