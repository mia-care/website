import { SITE as SITE_EN } from "./site";

export const SITE = {
  ...SITE_EN,
  url: `${SITE_EN.url}/it`,
} as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Panoramica della Piattaforma", href: "/it/prodotto" },
    { label: "SDLC Orchestrator", href: "/capabilities/sdlc-orchestrator" },
    { label: "Automated Traceability", href: "/capabilities/artt-traceability" },
    { label: "Documentation Engine", href: "/capabilities/documentation-engine" },
    { label: "Smart Assistant", href: "/capabilities/smart-assistant" },
    { label: "Master AI for Compliance", href: "/capabilities/ai-compliance" },
    { label: "Brownfield Remediator", href: "/capabilities/brownfield-remediator" },
    { label: "Secure Software Dev", href: "/capabilities/software-development" },
    { label: "Guided Workflows", href: "/capabilities/guided-workflows" },
  ],
  useCases: [
    { label: "SaMD Greenfield", href: "/use-cases/greenfield-samd" },
    { label: "AI ad Alto Rischio (CDSS)", href: "/use-cases/high-risk-ai-cdss" },
    { label: "Remediation Legacy", href: "/use-cases/legacy-remediation" },
  ],
  resources: [
    { label: "Competence Center", href: "/it/risorse" },
    { label: "Blog", href: "/it/risorse/blog" },
    { label: "Docs", href: "https://docs.mia-care.io/" },
  ],
  company: [
    { label: "Chi Siamo", href: "/it/chi-siamo" },
    { label: "Lavora con Noi", href: "/it/lavora-con-noi" },
    { label: "Certificazioni", href: "/it/certificazioni" },
    { label: "Sostenibilità", href: "/it/sostenibilita" },
  ],
  legal: [
    { label: "Informativa Privacy", href: "/it/informativa-privacy" },
    { label: "Informativa Cookie", href: "/it/informativa-privacy#cookie" },
  ],
};
