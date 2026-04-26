export type BlogCategory = {
  slug: string;
  name: string;
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "technology-application", name: "Technology Application" },
  { slug: "industry-key-insights", name: "Industry Key Insights" },
  { slug: "composable-technology", name: "Composable Technology" },
  { slug: "international-standards", name: "International Standards" },
  { slug: "partners-collaboration", name: "Partners Collaboration" },
];

export function getCategoryName(slug: string): string {
  return BLOG_CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}
