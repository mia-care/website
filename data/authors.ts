export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  sameAs?: string[];
};

export const AUTHORS: Author[] = [
  {
    slug: "mia-care",
    name: "Mia-Care Editorial Team",
    role: "P4SaMD Experts",
    bio: "The Mia-Care team brings together experts in medical software compliance, regulatory affairs, and digital health engineering.",
    avatar: "/blog/images/authors/mia-care.webp",
    linkedin: "https://www.linkedin.com/company/mia-care",
    sameAs: ["https://www.linkedin.com/company/mia-care"],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}
