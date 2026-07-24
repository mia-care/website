import type { BlogCategory } from "./blog-categories";

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "technology-application", name: "Applicazione tecnologica" },
  { slug: "industry-key-insights", name: "Approfondimenti di settore" },
  { slug: "composable-technology", name: "Tecnologia componibile" },
  { slug: "international-standards", name: "Standard internazionali" },
  { slug: "partners-collaboration", name: "Collaborazione con i partner" },
];

export function getCategoryName(slug: string): string {
  return BLOG_CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}
