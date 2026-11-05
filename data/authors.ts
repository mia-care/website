export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  /** Job title for Person schema.org markup (role without the company suffix). */
  jobTitle?: string;
  /** True for collective authors, emitted as Organization instead of Person. */
  isOrganization?: boolean;
  linkedin?: string;
  sameAs?: string[];
};

export const AUTHORS: Author[] = [
  {
    slug: "mia-care",
    name: "Mia-Care Editorial Team",
    isOrganization: true,
    role: "P4SaMD Experts",
    bio: "The Mia-Care team brings together experts in medical software compliance, regulatory affairs, and digital health engineering.",
    linkedin: "https://www.linkedin.com/company/mia-care",
    sameAs: ["https://www.linkedin.com/company/mia-care"],
  },
  {
    slug: "marzio-ghezzi",
    name: "Marzio Ghezzi",
    role: "CEO, Mia-Care",
    jobTitle: "CEO",
    bio: "Marzio Ghezzi is the CEO of Mia-Care, leading the company's mission to make regulatory compliance a built-in part of medical software development.",
  },
  {
    slug: "dario-esposito",
    name: "Dario Esposito",
    role: "Technical Writer, Mia-Care",
    jobTitle: "Technical Writer",
    bio: "Dario Esposito is a Technical Writer at Mia-Care, focused on making SaMD compliance and healthcare interoperability standards easier to understand and implement.",
    linkedin: "https://www.linkedin.com/in/dario-esposito-091562171/",
    sameAs: ["https://www.linkedin.com/in/dario-esposito-091562171/"],
  },
  {
    slug: "roberta-egoriti",
    name: "Roberta Egoriti",
    role: "Product Manager, Mia-Care",
    jobTitle: "Product Manager",
    bio: "Roberta Egoriti is a Product Manager at Mia-Care, working on how compliance, security, and platform architecture come together in the P4SaMD product.",
    linkedin: "https://www.linkedin.com/in/roberta-egoriti-b6537414b/",
    sameAs: ["https://www.linkedin.com/in/roberta-egoriti-b6537414b/"],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}
