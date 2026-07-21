export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  linkedin?: string;
  sameAs?: string[];
};

export const AUTHORS: Author[] = [
  {
    slug: "mia-care",
    name: "Mia-Care Editorial Team",
    role: "P4SaMD Experts",
    bio: "The Mia-Care team brings together experts in medical software compliance, regulatory affairs, and digital health engineering.",
    linkedin: "https://www.linkedin.com/company/mia-care",
    sameAs: ["https://www.linkedin.com/company/mia-care"],
  },
  {
    slug: "marzio-ghezzi",
    name: "Marzio Ghezzi",
    role: "CEO, Mia-Care",
    bio: "Marzio Ghezzi is the CEO of Mia-Care, leading the company's mission to make regulatory compliance a built-in part of medical software development.",
  },
  {
    slug: "dario-esposito",
    name: "Dario Esposito",
    role: "Technical Writer, Mia-Care",
    bio: "Dario Esposito is a Technical Writer at Mia-Care, focused on making SaMD compliance and healthcare interoperability standards easier to understand and implement.",
  },
  {
    slug: "roberta-egoriti",
    name: "Roberta Egoriti",
    role: "Product Manager, Mia-Care",
    bio: "Roberta Egoriti is a Product Manager at Mia-Care, working on how compliance, security, and platform architecture come together in the P4SaMD product.",
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}
