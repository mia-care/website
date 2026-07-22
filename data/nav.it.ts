import type { NavItem } from "./nav";

export const navItems: NavItem[] = [
  {
    label: "Prodotto",
    href: "/it/prodotto",
    megaMenu: true,
    dropdown: [
      {
        label: "Panoramica della piattaforma",
        href: "/it/prodotto",
        description: "La piattaforma SaMD AI-native",
      },
      {
        label: "SDLC Orchestrator",
        href: "/capabilities/sdlc-orchestrator",
        description: "Orchestrazione del workflow conforme",
      },
      {
        label: "Automated Traceability",
        href: "/capabilities/artt-traceability",
        description: "ARTT in tempo reale",
      },
      {
        label: "Documentation Engine",
        href: "/capabilities/documentation-engine",
        description: "Technical File e DHF",
      },
      {
        label: "Smart Assistant",
        href: "/capabilities/smart-assistant",
        description: "Intelligenza regolatoria Whisper",
      },
      {
        label: "Master AI for Compliance",
        href: "/capabilities/ai-compliance",
        description: "Supporto EU AI Act e PCCP",
      },
      {
        label: "Brownfield Remediator",
        href: "/capabilities/brownfield-remediator",
        description: "Certificazione di software legacy",
      },
      {
        label: "Secure Software Development",
        href: "/capabilities/software-development",
        description: "IEC 81001-5-1 by design",
      },
      {
        label: "Guided Workflows",
        href: "/capabilities/guided-workflows",
        description: "Guida passo dopo passo alla conformità",
      },
    ],
  },
  {
    label: "Casi d'Uso",
    href: "/use-cases/greenfield-samd",
    activeRoot: "/use-cases",
    dropdown: [
      { label: "Sviluppo SaMD Greenfield", href: "/use-cases/greenfield-samd" },
      { label: "Software AI ad Alto Rischio (CDSS)", href: "/use-cases/high-risk-ai-cdss" },
      { label: "Remediation di Software Legacy", href: "/use-cases/legacy-remediation" },
    ],
  },
  { label: "Piani", href: "/it/piani" },
  {
    label: "Risorse",
    href: "/it/risorse",
    activeRoot: "/it/risorse",
    dropdown: [
      { label: "Competence Center", href: "/it/risorse" },
      { label: "Blog", href: "/it/risorse/blog" },
      { label: "Docs", href: "https://docs.mia-care.io/", external: true },
    ],
  },
  {
    label: "Azienda",
    href: "/it/chi-siamo",
    dropdown: [
      { label: "Chi Siamo", href: "/it/chi-siamo" },
      { label: "Lavora con Noi", href: "/it/lavora-con-noi" },
      { label: "Certificazioni", href: "/it/certificazioni" },
      { label: "Sostenibilità", href: "/it/sostenibilita" },
    ],
  },
];
