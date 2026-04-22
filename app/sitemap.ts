import type { MetadataRoute } from "next";
import { capabilities } from "@/data/capabilities";
import { useCases } from "@/data/use-cases";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mia-care.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/product",
    "/pricing",
    "/request-demo",
    "/about-us",
    "/newsroom",
    "/careers",
    "/certifications",
    "/sustainability",
    "/resources/competence-center",
    "/resources/blog",
    "/resources/docs",
    "/resources/events",
    "/resources/faq",
    "/privacy-policy",
    "/cookie-policy",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const capabilityRoutes = capabilities.map((c) => ({
    url: `${SITE_URL}/capabilities/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const useCaseRoutes = useCases.map((u) => ({
    url: `${SITE_URL}/use-cases/${u.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...capabilityRoutes, ...useCaseRoutes];
}
