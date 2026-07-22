import type { BlogCategory } from "./blog-categories";

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "technology-application", name: "Applicazione Tecnologica" },
  { slug: "industry-key-insights", name: "Approfondimenti di Settore" },
  { slug: "composable-technology", name: "Tecnologia Componibile" },
  { slug: "international-standards", name: "Standard Internazionali" },
  { slug: "partners-collaboration", name: "Collaborazione con i Partner" },
];

export function getCategoryName(slug: string): string {
  return BLOG_CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}
