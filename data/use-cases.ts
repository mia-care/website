export type CaseStudyResult = {
  metric: string;
  label: string;
};

export type UseCase = {
  slug: string;
  segment: string;
  name: string;
  tagline: string;
  problem: { heading: string; body: string };
  need: { heading: string; body: string };
  solution: { heading: string; body: string };
  caseStudy: {
    label: string;
    quote: string;
    scope: string[];
    results: CaseStudyResult[];
  };
  capabilities: string[];
  seo: { title: string; description: string };
};

export const useCases: UseCase[] = [
  {
    slug: "greenfield-samd",
    segment: "For Pre-Market Startups & Scaleups",
    name: "SaMD Greenfield Development",
    tagline:
      "Building a SaMD from scratch means two simultaneous challenges: writing the software and satisfying the regulator. P4SaMD makes them the same phase.",
    problem: {
      heading: "The 3–6 month documentation sprint that kills launch momentum.",
      body: "Conventional SaMD development hits a bottleneck because engineering and documentation are usually done by different teams on disconnected timelines. Engineers code; quality teams document. The result is a painful, expensive documentation effort before market entry, often taking 3–6 months and delaying revenue.\n\nBy the time the documentation begins, the system has changed since the last design review, traceability is broken, and the quality team is under enormous pressure to produce artifacts that should have been generated incrementally throughout the project.",
    },
    need: {
      heading: "Compliance as a continuous output of normal engineering work.",
      body: "A framework that eliminates the friction between engineering speed and regulatory requirements, integrating compliance directly into the SDLC so teams maintain maximum release velocity while building software that's audit-ready at every increment, not just at the finish line.",
    },
    solution: {
      heading: "From first commit to compliant MVP, in one motion.",
      body: "P4SaMD enables continuous compliance orchestration by monitoring the development environment in real time. As code evolves, quality documentation is automatically synchronized.\n\nThe team builds their product; P4SaMD builds the regulatory file alongside it, making audit-readiness the default output of normal engineering work.",
    },
    caseStudy: {
      label: "Case Study // Digital Health Startup",
      quote:
        "A highly innovative Digital Health startup focused on personalized metabolic health management and clinical support platforms, combining medical expertise with cutting-edge technology.",
      scope: [
        "API developed on P4SaMD connected with a regional EHR",
        "Full greenfield SaMD development with continuous compliance orchestration from first development",
        "Automated traceability matrix maintained with zero manual effort throughout development",
        "Complete Design History File generated continuously alongside engineering work",
      ],
      results: [
        {
          metric: "1 Month",
          label: "from zero to a fully compliant MVP on sovereign infrastructure",
        },
        {
          metric: "0",
          label:
            "manual effort required for traceability matrix maintenance throughout development",
        },
        {
          metric: "100%",
          label:
            "Compliance-by-Design: eliminating the typical 3–6 month documentation sprint before launch",
        },
      ],
    },
    capabilities: [
      "sdlc-orchestrator",
      "guided-workflows",
      "documentation-engine",
      "smart-assistant",
    ],
    seo: {
      title: "SaMD Greenfield Development | Use Case | Mia-Care P4SaMD",
      description:
        "Build your first SaMD with compliance embedded from the first line of code. Eliminate the pre-launch documentation sprint. Ship a compliant MVP in weeks, not months.",
    },
  },
  {
    slug: "high-risk-ai-cdss",
    segment: "For AI-Native SaMD Enterprise",
    name: "Building High-Risk AI Software (CDSS)",
    tagline:
      "AI-based clinical software evolves dynamically, but traditional compliance models assume requirements are static. P4SaMD decouples your engineering velocity from regulatory rigidity.",
    problem: {
      heading: "Unreadable AI, untraceable compliance.",
      body: "AI-based clinical software evolves dynamically, yet traditional compliance models assume requirements are static from the outset. Every update to an AI model risks triggering a complex cascade of rework across risk management files, verification documents, and regulatory submissions, creating a compliance drag that slows innovation to a halt.\n\nProving that an opaque algorithm is safe for life-critical decisions requires a new kind of evidence: transparency reports, bias assessments, logbooks, and PCCP documentation that most QMS systems were never designed to generate.",
    },
    need: {
      heading: "Compliance that keeps pace with your model updates.",
      body: "Future-proofing AI-enabled medical devices by synchronizing regulatory rigor with high-speed technical development. A framework that manages the unique challenges of AI compliance (transparency, explainability, data bias, PCCP) without requiring a new 510(k) for every model iteration.",
    },
    solution: {
      heading: "Multi-framework compliance. One platform.",
      body: "Mia-Care P4SaMD streamlines building and leveraging AI components while managing all compliance aspects (transparency, explainability, security, logbooks), effectively abstracting developers from the complexity of regulatory mandates.\n\nThe platform handles multi-framework compliance (MDR, EU AI Act, GMLP) within a single unified system. Your team is never forced to choose between shipping a model improvement or maintaining your compliance posture.",
    },
    caseStudy: {
      label: "Case Study // CDSS Provider",
      quote:
        "A premier CDSS provider leveraging Generative AI and high-fidelity synthetic data to empower clinicians with precision diagnostics and tailored therapeutic strategies.",
      scope: [
        "Multi-framework compliance management: MDR + EU AI Act + GMLP in a single unified system",
        "Real-time gap detection via the Compliance Engine across all three regulatory frameworks",
        "Automated model cards and bias assessment reports for every model version",
        "PCCP-aligned change management enabling model updates without full re-submission",
      ],
      results: [
        { metric: "50%", label: "Reduction in time-to-compliance for new AI feature releases" },
        {
          metric: "3",
          label: "Regulatory frameworks managed in a single unified system (MDR, EU AI Act, GMLP)",
        },
        { metric: "0", label: "Deployment delays caused by documentation bottlenecks" },
      ],
    },
    capabilities: ["ai-compliance", "artt-traceability", "documentation-engine", "smart-assistant"],
    seo: {
      title: "Building High-Risk AI Software (CDSS) | Use Case | Mia-Care P4SaMD",
      description:
        "Ship AI-enabled clinical software with EU AI Act, GMLP, and MDR compliance in a single platform. Automated logbooks, PCCP support, and multi-framework gap detection.",
    },
  },
  {
    slug: "legacy-remediation",
    segment: "For MedTech Giants & Life Sciences Enterprises",
    name: "Legacy Regulated Software Remediation",
    tagline:
      "Many organizations hold valuable legacy software trapped by regulatory debt. P4SaMD provides a structured path to certification without rebuilding from scratch.",
    problem: {
      heading: "Valuable software, trapped by regulatory debt.",
      body: "Many organizations hold valuable legacy software not designed under ISO 13485 QMS or in alignment with IEC 62304. Often, these systems also face technical obsolescence. Manual remediation attempts are expensive, slow, and frequently fail audit review because they lack systematic traceability reconstruction.\n\nThe instinct to rebuild from scratch is costly and time-consuming. But without a structured remediation path, the legacy software remains locked, unable to be updated, re-certified, or legally distributed as a medical device in new markets.",
    },
    need: {
      heading: "A path to certification that doesn't start from zero.",
      body: "A solution designed to ingest and evaluate legacy systems, establishing a clear pathway for regulatory certification that bypasses full-scale redevelopment and that accelerates re-platforming initiatives with a structured, evidence-based remediation plan that maps gaps to specific standards.",
    },
    solution: {
      heading: "From legacy to audit-ready. Without rebuilding.",
      body: "Mia-Care P4SaMD ingests existing codebases in any language, along with existing documentation, and leverages agentic AI to automate legacy assessments and identify gaps against IEC 62304, ISO 13485, and EU MDR / FDA.\n\nThe platform generates custom remediation plans, automates traceability reconstruction using ARTT, and produces audit-ready documentation in your own templates. What typically takes years of manual effort is compressed into a structured, actionable remediation backlog your engineering team can execute immediately.",
    },
    caseStudy: {
      label: "Case Study // Consumer Health Enterprise",
      quote:
        "A global leader in the consumer health and lifestyle sector, with annual revenues exceeding several billion euros, operating across numerous countries through several globally recognized consumer brands.",
      scope: [
        "Automated ingestion of heterogeneous workitems: requirements, risks, tests, and existing code",
        "Traceability reconstruction via ARTT: generating the complete end-to-end traceability matrix",
        "Gap analysis against MDR and IEC 62304, with prioritized remediation tasks",
        "Dynamic generation of audit-ready MDR Technical Files using client templates",
      ],
      results: [
        {
          metric: "60%",
          label:
            "Reduction in remediation effort identified and executed in the first sprint review",
        },
        {
          metric: "90%",
          label: "Reduction in documentation generation time for mandatory Technical Files",
        },
      ],
    },
    capabilities: [
      "brownfield-remediator",
      "artt-traceability",
      "documentation-engine",
      "sdlc-orchestrator",
    ],
    seo: {
      title: "Legacy Regulated Software Remediation | Use Case | Mia-Care P4SaMD",
      description:
        "Certify legacy medical software without rebuilding it. Automated gap analysis, traceability reconstruction, and audit-ready MDR Technical Files for IEC 62304 and EU MDR.",
    },
  },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}
