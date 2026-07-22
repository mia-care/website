import { SITE as SITE_EN } from "./site";

export const SITE = {
  ...SITE_EN,
  url: `${SITE_EN.url}/it`,
} as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Panoramica della Piattaforma", href: "/it/prodotto" },
    { label: "SDLC Orchestrator", href: "/it/capabilities/sdlc-orchestrator" },
    { label: "Automated Traceability", href: "/it/capabilities/artt-traceability" },
    { label: "Documentation Engine", href: "/it/capabilities/documentation-engine" },
    { label: "Smart Assistant", href: "/it/capabilities/smart-assistant" },
    { label: "Master AI for Compliance", href: "/it/capabilities/ai-compliance" },
    { label: "Brownfield Remediator", href: "/it/capabilities/brownfield-remediator" },
    { label: "Secure Software Dev", href: "/it/capabilities/software-development" },
    { label: "Guided Workflows", href: "/it/capabilities/guided-workflows" },
  ],
  useCases: [
    { label: "SaMD Greenfield", href: "/it/use-cases/greenfield-samd" },
    { label: "AI ad Alto Rischio (CDSS)", href: "/it/use-cases/high-risk-ai-cdss" },
    { label: "Remediation Legacy", href: "/it/use-cases/legacy-remediation" },
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
