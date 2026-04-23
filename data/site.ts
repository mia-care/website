export const SITE = {
  name: "Mia-Care P4SaMD",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mia-care.io",
  company: {
    name: "Mia Care srl",
    address: "Via Leopardi, 8 — 20123 Milan, Italy",
    vat: "IT 11504530962",
    email: "info@mia-care.io",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/mia-care",
  },
  hubspot: {
    portalId: "5308597",
    formId: "67e26712-013f-4707-95f6-c46a9bdce0ff",
    region: "eu1",
  },
} as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Platform Overview", href: "/product" },
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
    { label: "Greenfield SaMD", href: "/use-cases/greenfield-samd" },
    { label: "High-Risk AI (CDSS)", href: "/use-cases/high-risk-ai-cdss" },
    { label: "Legacy Remediation", href: "/use-cases/legacy-remediation" },
  ],
  resources: [
    { label: "Competence Center", href: "/resources/competence-center" },
    { label: "Blog", href: "/resources/blog" },
    { label: "Docs", href: "/resources/docs" },
    { label: "Events", href: "/resources/events" },
    { label: "FAQ", href: "/resources/faq" },
  ],
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Newsroom", href: "/newsroom" },
    { label: "Careers", href: "/careers" },
    { label: "Certifications", href: "/certifications" },
    { label: "Sustainability", href: "/sustainability" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};
