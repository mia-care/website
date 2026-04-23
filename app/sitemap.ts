import type { MetadataRoute } from "next";
import { capabilities } from "@/data/capabilities";
import { useCases } from "@/data/use-cases";

export const dynamic = "force-static";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mia-care.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/product`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/request-demo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/newsroom`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: `${BASE}/careers`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: `${BASE}/certifications`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/sustainability`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    {
      url: `${BASE}/resources/competence-center`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    { url: `${BASE}/resources/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/resources/docs`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    {
      url: `${BASE}/resources/events`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    { url: `${BASE}/resources/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/cookie-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const capabilityPages: MetadataRoute.Sitemap = capabilities.map((cap) => ({
    url: `${BASE}/capabilities/${cap.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const useCasePages: MetadataRoute.Sitemap = useCases.map((uc) => ({
    url: `${BASE}/use-cases/${uc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...capabilityPages, ...useCasePages];
}
