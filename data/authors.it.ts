import type { Author } from "./authors";

export const AUTHORS: Author[] = [
  {
    slug: "mia-care",
    name: "Mia-Care Editorial Team",
    role: "Esperti P4SaMD",
    bio: "Il team di Mia-Care riunisce esperti in compliance del software medicale, affari regolatori ed ingegneria della sanità digitale.",
    linkedin: "https://www.linkedin.com/company/mia-care",
    sameAs: ["https://www.linkedin.com/company/mia-care"],
  },
  {
    slug: "marzio-ghezzi",
    name: "Marzio Ghezzi",
    role: "CEO, Mia-Care",
    bio: "Marzio Ghezzi è il CEO di Mia-Care, alla guida della missione dell'azienda di rendere la compliance regolatoria parte integrante dello sviluppo del software medicale.",
  },
  {
    slug: "dario-esposito",
    name: "Dario Esposito",
    role: "Technical Writer, Mia-Care",
    bio: "Dario Esposito è Technical Writer in Mia-Care, impegnato a rendere più semplici da comprendere e implementare la compliance SaMD e gli standard di interoperabilità sanitaria.",
  },
  {
    slug: "roberta-egoriti",
    name: "Roberta Egoriti",
    role: "Product Manager, Mia-Care",
    bio: "Roberta Egoriti è Product Manager in Mia-Care, e lavora su come compliance, sicurezza e architettura della piattaforma si combinano nel prodotto P4SaMD.",
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}
