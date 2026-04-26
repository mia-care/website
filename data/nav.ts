export type NavDropdownItem = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
};

export const navItems: NavItem[] = [
  {
    label: "Product",
    href: "/product",
    dropdown: [
      { label: "Platform Overview", href: "/product", description: "The AI-native SaMD platform" },
      {
        label: "SDLC Orchestrator",
        href: "/capabilities/sdlc-orchestrator",
        description: "01 — Compliant workflow orchestration",
      },
      {
        label: "Automated Traceability",
        href: "/capabilities/artt-traceability",
        description: "02 — Real-time ARTT",
      },
      {
        label: "Documentation Engine",
        href: "/capabilities/documentation-engine",
        description: "03 — Auto-generated DHF & Technical Files",
      },
      {
        label: "Smart Assistant",
        href: "/capabilities/smart-assistant",
        description: "04 — Whisper regulatory intelligence",
      },
      {
        label: "Master AI for Compliance",
        href: "/capabilities/ai-compliance",
        description: "05 — EU AI Act & PCCP support",
      },
      {
        label: "Brownfield Remediator",
        href: "/capabilities/brownfield-remediator",
        description: "06 — Legacy software certification",
      },
      {
        label: "Secure Software Development",
        href: "/capabilities/software-development",
        description: "07 — IEC 81001-5-1 by design",
      },
      {
        label: "Guided Workflows",
        href: "/capabilities/guided-workflows",
        description: "08 — Step-by-step compliance guidance",
      },
    ],
  },
  {
    label: "Use Cases",
    href: "/use-cases/greenfield-samd",
    dropdown: [
      { label: "Greenfield SaMD Development", href: "/use-cases/greenfield-samd" },
      { label: "High-Risk AI Software (CDSS)", href: "/use-cases/high-risk-ai-cdss" },
      { label: "Legacy Software Remediation", href: "/use-cases/legacy-remediation" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "/resources/competence-center",
    dropdown: [
      { label: "Competence Center", href: "/resources/competence-center" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Docs", href: "http://docs.mia-care.io/", external: true },
    ],
  },
  {
    label: "Company",
    href: "/about-us",
    dropdown: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Certifications", href: "/certifications" },
      { label: "Sustainability", href: "/sustainability" },
    ],
  },
];

export const COMPLIANCE_STANDARDS = [
  "EU MDR 2017/745",
  "IVDR 2017/746",
  "FDA",
  "ISO 13485",
  "ISO 14971",
  "21 CFR Part 820",
  "IEC 62304",
  "IEC 82304-1",
  "IEC 62366-1",
  "IEC 81001-5-1",
  "EU AI Act",
  "GMLP",
  "PCCP",
  "GDPR",
  "HIPAA",
];
