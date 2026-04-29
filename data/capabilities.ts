export type CapabilityFeature = {
  label: string;
  title: string;
  description: string;
};

export type Capability = {
  slug: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  whatItDoes: { heading: string; body: string };
  features: CapabilityFeature[];
  regulations: string[];
  relatedUseCases: string[];
  seo: { title: string; description: string };
};

export const capabilities: Capability[] = [
  {
    slug: "sdlc-orchestrator",
    code: "01 — SDLC",
    name: "SDLC Workflow Orchestrator",
    tagline: "From fragmented tools to a single compliant workflow.",
    description:
      "Connects and orchestrates existing best-of-breed SDLC tools (Git, ALM, eQMS, IDPs) for the implementation of a fully IEC 62304-compliant SDLC. No rip-and-replace. No disruption to engineering culture. Just compliance, built into how your team already works.",
    whatItDoes: {
      heading: "Your tools. Your stack. Compliance guaranteed.",
      body: "Most teams already have the tools they rely on: GitHub for code, Jira or other ALMs for task management, an eQMS for quality records. The problem is that these tools rarely speak the same language as a regulatory auditor. P4SaMD bridges that gap without asking your team to change the way they work.\n\nBeyond connecting your existing toolchain, P4SaMD enforces the correct workflow sequence across the entire development lifecycle: requirements before design, design before implementation, implementation before verification. Skipping a mandated step becomes structurally impossible.",
    },
    features: [
      {
        label: "Tool Orchestration",
        title: "Connect without migrating",
        description:
          "P4SaMD integrates with your existing Git repositories, ALM tools, and eQMS without requiring migration to a proprietary system. Your team keeps their tools; the platform adds the compliance layer on top.",
      },
      {
        label: "Blueprint Engine",
        title: "IEC 62304 workflow templates",
        description:
          "Pre-built workflow blueprints for each software safety class (A, B, C) encode the correct IEC 62304 lifecycle phases and required artifacts, so teams always know what to do next, and auditors always find what they expect.",
      },
      {
        label: "Config Management",
        title: "End-to-end change control",
        description:
          "Every configuration item is tracked with full change history, approval records, and version lineage. When a regulator asks who approved this change and what was the impact assessment, the answer is instant.",
      },
      {
        label: "Seamless Integration",
        title: "No rip-and-replace",
        description:
          "Built for the reality of enterprise engineering. P4SaMD works alongside your existing tool stack with lightweight connectors, no forced migrations, no retraining, no disruption to the releases already in flight.",
      },
    ],
    regulations: ["IEC 62304", "ISO 13485", "EU MDR 2017/745", "ISO 14971", "FDA"],
    relatedUseCases: ["legacy-remediation", "greenfield-samd", "high-risk-ai-cdss"],
    seo: {
      title: "SDLC Workflow Orchestrator | P4SaMD Capability | Mia-Care",
      description:
        "Connect your Git, ALM, and eQMS into a single IEC 62304-compliant SDLC workflow. No rip-and-replace. Compliance built into how your team already works.",
    },
  },
  {
    slug: "artt-traceability",
    code: "02 — ARTT",
    name: "Automated Real-time Traceability",
    tagline: "Every requirement. Every risk. Every line of code. Connected.",
    description:
      "Guarantees end-to-end traceability from requirements and risks to design, implementation, and verification by integrating directly with ALM systems and SDLC toolchains in real time. No manual updates. No reconciliation sprints before audits.",
    whatItDoes: {
      heading: "Traceability that builds itself, continuously.",
      body: "Manual traceability is the silent killer of regulated software projects. It starts as a spreadsheet and ends as an audit risk. By the time the project is ready for review, the traceability matrix is already out of date.\n\nARTT integrates directly with your ALM, Git repositories, and risk management toolchain to map every requirement to its design output, every design output to its implementation, and every implementation to its verification evidence, in real time, automatically, every time something changes.",
    },
    features: [
      {
        label: "Real-time Mapping",
        title: "Automatic linking as work happens",
        description:
          "Requirements are linked to code commits, test cases, and risk controls the moment they're created or modified. The traceability graph is always one step ahead.",
      },
      {
        label: "Living Traceability Matrix",
        title: "Always current, always audit-ready",
        description:
          "The Design History File traceability matrix is automatically maintained at all times. There is no reconciliation sprint before an audit because the matrix is never out of date.",
      },
      {
        label: "Risk Integration",
        title: "ISO 14971 risk items linked to mitigations",
        description:
          "Each risk item is automatically linked to its mitigating software items and the corresponding verification evidence, creating the closed-loop risk chain auditors require.",
      },
      {
        label: "Gap Detection",
        title: "Missing links surfaced before audits find them",
        description:
          "ARTT continuously monitors the traceability graph and alerts when a requirement has no linked test, a risk has no linked control, or a change has no impact assessment.",
      },
    ],
    regulations: ["IEC 62304", "ISO 14971", "EU MDR 2017/745", "FDA", "ISO 13485"],
    relatedUseCases: ["legacy-remediation", "high-risk-ai-cdss", "greenfield-samd"],
    seo: {
      title: "Automated Real-time Traceability (ARTT) | P4SaMD | Mia-Care",
      description:
        "End-to-end traceability from requirements to code, automatically maintained in real time. No reconciliation sprints. No gaps before audits.",
    },
  },
  {
    slug: "documentation-engine",
    code: "03 — DOCS",
    name: "Documentation Engine",
    tagline: "Your audit package, assembled automatically.",
    description:
      "P4SaMD automatically generates DHF records, risk evidence, verification reports, audit trails, and submission-ready documentation, ensuring constant audit readiness from the first commit to the final release.",
    whatItDoes: {
      heading: "Documentation that writes itself, from your work.",
      body: "The Documentation Engine lets your SaMD team focus on what they do best: building great software. By connecting directly to your SDLC tools and pulling live development data in real time, it compiles the Design History File, Technical File, and all required regulatory evidence continuously and automatically, in your own templates, using your terminology, ready for submission at any point in the development cycle.",
    },
    features: [
      {
        label: "Auto-generated DHF",
        title: "Continuous Design History File compilation",
        description:
          "The DHF is compiled continuously from live development data (requirements, risks, design, implementation, and verification) so the document always reflects the current system state.",
      },
      {
        label: "Technical File Generation",
        title: "Submission-ready EU MDR Technical Files",
        description:
          "Produces regulation submission-ready technical files using your own templates and branding, covering all requirements automatically from structured platform data.",
      },
      {
        label: "Release Notes",
        title: "Compliant release notes, automatically",
        description:
          "Every release automatically generates the full documentation package: SRS, Test Reports, Risk Management Files, and Traceability Matrix, complete with change log, impact assessment, and verification summary.",
      },
      {
        label: "Audit Trail",
        title: "Immutable record of every decision and change",
        description:
          "A timestamped, tamper-evident log of every decision, change, and approval across the entire SDLC, answering 'who decided what, and when?' instantly, for any point in the product's lifecycle.",
      },
    ],
    regulations: ["ISO 13485", "EU MDR 2017/745", "FDA", "21 CFR Part 820", "IEC 62304"],
    relatedUseCases: ["legacy-remediation", "high-risk-ai-cdss", "greenfield-samd"],
    seo: {
      title: "Documentation Engine | P4SaMD Capability | Mia-Care",
      description:
        "Automatically generate DHF records, Technical Files, and audit trails from live development data. Audit-ready documentation without manual effort.",
    },
  },
  {
    slug: "smart-assistant",
    code: "04 — WHISPER",
    name: "Smart Assistant (Whisper)",
    tagline: "Regulatory expertise, always available in your workflow.",
    description:
      "A regulatory intelligence engine aligned with MDR, ISO 13485, IEC 62304, FDA guidance, EU AI Act, GMLP, and PCCP requirements. Whisper enforces deterministic rules, evaluates complex compliance policies, and surfaces proactive guidance exactly when developers need it.",
    whatItDoes: {
      heading: "Regulatory expertise at the point of engineering.",
      body: "The traditional model concentrates all regulatory expertise in a small team of RA/QA specialists expected to cover every engineering decision in real time. At a certain scale, that model breaks down.\n\nWhisper is a regulatory intelligence engine aligned with MDR, ISO 13485, IEC 62304, FDA, EU AI Act, GMLP, and PCCP. It enforces hard rules, evaluates nuanced compliance policies, and proactively flags issues before they become audit findings. Routine decisions are handled at the point of engineering. RA/QA teams stay focused on where their expertise has the most impact.",
    },
    features: [
      {
        label: "Deterministic Rule Enforcement",
        title: "No ambiguity, no gaps",
        description:
          "Whisper applies a curated, versioned regulatory ruleset where every enforcement action is traceable to a specific requirement. Binary compliance checks, software classification boundaries, mandatory documentation triggers, all handled consistently, every time.",
      },
      {
        label: "Policy Evaluation",
        title: "Compliance judgment for complex decisions",
        description:
          "Beyond hard rules, Whisper evaluates complex compliance policies that require contextual analysis, surfacing structured, traceable recommendations so your team makes informed decisions rather than guesses.",
      },
      {
        label: "Proactive Suggestions",
        title: "Catch issues before they become findings",
        description:
          "Because Whisper understands the full context of what is being built, it identifies downstream risks, flags optimization opportunities, and recommends actions that reduce compliance debt before it accumulates.",
      },
      {
        label: "Contextual Guidance",
        title: "Right guidance at the right moment",
        description:
          "Whisper surfaces enforcement and suggestions based on what the developer is currently working on. Implementing a Class B software item triggers IEC 62304 5.3 guidance, not a generic reminder.",
      },
    ],
    regulations: ["ISO 13485", "IEC 62304", "EU MDR 2017/745", "FDA", "EU AI Act", "GMLP"],
    relatedUseCases: ["high-risk-ai-cdss", "greenfield-samd", "legacy-remediation"],
    seo: {
      title: "Smart Assistant Whisper | P4SaMD Capability | Mia-Care",
      description:
        "Deterministic regulatory guidance embedded in your SDLC. Whisper enforces compliance rules and surfaces proactive suggestions aligned with IEC 62304, MDR, FDA, and EU AI Act.",
    },
  },
  {
    slug: "ai-compliance",
    code: "05 — AI",
    name: "Master AI for Compliance",
    tagline: "Ship AI-enabled medical software with full regulatory clarity.",
    description:
      "A dedicated feature set that enforces the specific regulatory requirements of AI-enabled medical software: transparency, explainability, audit logbooks, and data quality. Supports EU AI Act, GMLP, and FDA PCCP frameworks.",
    whatItDoes: {
      heading: "The compliance infrastructure for AI-enabled SaMD.",
      body: "AI components enable smarter diagnostics and adaptive workflows, but they also introduce a new layer of regulatory complexity. The EU AI Act, FDA GMLP, and PCCP frameworks demand documentation and control practices that standard QMS systems were never designed to support.\n\nMaster AI for Compliance adds a dedicated layer within P4SaMD that enforces transparency, explainability, and logbook requirements while supporting structured documentation of AI training data, model versions, performance metrics, and PCCP change control plans.",
    },
    features: [
      {
        label: "AI Transparency Framework",
        title: "EU AI Act Annex IV requirements, enforced",
        description:
          "Automatically generates and maintains AI system transparency documentation required by EU AI Act Annex IV, including intended purpose, performance metrics, data quality assessments, and human oversight provisions.",
      },
      {
        label: "PCCP Support",
        title: "Model updates without full re-submission",
        description:
          "Structured support for FDA Predetermined Change Control Plans, enabling teams to plan and execute model updates within pre-approved boundaries, avoiding the cost and delay of a new regulatory submission for every algorithm iteration.",
      },
      {
        label: "Model Logbooks",
        title: "Automated tracking of every model state",
        description:
          "Automated logbooks track training data characteristics, model versions, performance benchmarks, validation results, and bias assessments, creating the continuous record that regulators require for AI-enabled SaMD.",
      },
      {
        label: "AI Risk Management",
        title: "ISO 14971 extended for AI failure modes",
        description:
          "Extends the ISO 14971 risk management framework to cover AI-specific failure modes including data drift, distribution shift, algorithmic bias, and performance degradation over time.",
      },
    ],
    regulations: ["EU AI Act", "GMLP", "PCCP", "EU MDR 2017/745", "FDA"],
    relatedUseCases: ["high-risk-ai-cdss", "greenfield-samd", "legacy-remediation"],
    seo: {
      title: "Master AI for Compliance | P4SaMD Capability | Mia-Care",
      description:
        "Enforce EU AI Act, GMLP, and FDA PCCP requirements for AI-enabled SaMD. Automated logbooks, transparency reports, and PCCP-aligned change management.",
    },
  },
  {
    slug: "brownfield-remediator",
    code: "06 — BROWNFIELD",
    name: "Brownfield Remediator",
    tagline: "Certify what you already built, without rebuilding it.",
    description:
      "Provides dedicated capabilities to ingest existing applications of any codebase, run automated gap analysis against reference standards, and generate custom remediation plans that move legacy software toward certification without a full redevelopment.",
    whatItDoes: {
      heading: "From legacy software to audit-ready evidence.",
      body: "Millions of lines of medical device software were written before IEC 62304 was a consideration and before EU MDR came into force. This software still works and creates value, but it cannot be certified, updated, or brought to new markets without satisfying the regulatory frameworks it predates.\n\nThe Brownfield Remediator ingests your existing software regardless of programming language or documentation maturity, automates the gap analysis, reconstructs traceability from disconnected artifacts, and generates a structured, sprint-ready remediation backlog.",
    },
    features: [
      {
        label: "Automated Ingestion",
        title: "Import any codebase, any format",
        description:
          "Imports heterogeneous workitems (requirements from Word, risks from Excel, tests from any test management tool, code from any Git repository) into P4SaMD's unified compliance model without manual migration.",
      },
      {
        label: "Gap Analysis",
        title: "Deviations from IEC 62304 and ISO 13485, surfaced automatically",
        description:
          "The P4SaMD Compliance Engine maps existing artifacts to reference standards and identifies every gap (what's missing, what's incomplete, what's non-conformant) with prioritized remediation effort estimates.",
      },
      {
        label: "Traceability Reconstruction",
        title: "ARTT rebuilds what was never built",
        description:
          "Using ARTT, the Brownfield Remediator reconstructs end-to-end traceability from existing artifacts even when no explicit traceability was ever defined.",
      },
      {
        label: "Remediation Planning",
        title: "Sprint-ready backlog of prioritized compliance tasks",
        description:
          "Generates a structured remediation backlog organized by regulatory priority and effort that engineering teams can import directly into Jira or any ALM tool and begin executing immediately.",
      },
    ],
    regulations: ["IEC 62304", "ISO 13485", "EU MDR 2017/745", "FDA"],
    relatedUseCases: ["legacy-remediation", "high-risk-ai-cdss", "greenfield-samd"],
    seo: {
      title: "Brownfield Remediator | P4SaMD Capability | Mia-Care",
      description:
        "Certify legacy medical software without rebuilding it. Automated gap analysis, traceability reconstruction, and sprint-ready remediation plans for IEC 62304 and EU MDR.",
    },
  },
  {
    slug: "software-development",
    code: "07 — DEV",
    name: "Secure Software Development",
    tagline: "Secure by design. From the first line of code.",
    description:
      "Supports Software Item implementation with ready-to-use modules and software components, while implementing Secure by Design principles by continuously scanning for vulnerabilities and managing software supply chain security per IEC 81001-5-1.",
    whatItDoes: {
      heading: "Security and compliance built into the development toolchain.",
      body: "Medical software is an increasingly targeted attack surface. A vulnerability in a device software component is not just a security incident, it's a patient safety event and a regulatory failure. IEC 81001-5-1 sets the standard for health software cybersecurity, but satisfying it requires far more than a security audit at release time.\n\nP4SaMD's Secure Software Development capability embeds IEC 81001-5-1 requirements directly into the development workflow, maintaining an up-to-date Software Bill of Materials and continuously scanning dependencies for known CVEs.",
    },
    features: [
      {
        label: "Secure Component Library",
        title: "Pre-validated modules for regulated development",
        description:
          "A curated library of software components pre-validated against IEC 81001-5-1 security requirements, reducing development time while guaranteeing that foundational components meet the standard from the first import.",
      },
      {
        label: "SBOM Management",
        title: "Continuous Software Bill of Materials",
        description:
          "Automatically generates and maintains a Software Bill of Materials for every software item, enabling real-time tracking of all third-party dependencies and instant response when a new CVE affects your product.",
      },
      {
        label: "Vulnerability Scanning",
        title: "Automated CVE detection with risk impact assessment",
        description:
          "Continuously scans dependencies and infrastructure for known vulnerabilities, assessing each finding against its compliance impact, distinguishing between a minor update and a finding requiring an immediate risk management response.",
      },
      {
        label: "Secure Development Guardrails",
        title: "Prevent vulnerable code from entering the build",
        description:
          "Enforces security coding standards and blocks dependencies with known critical vulnerabilities from being introduced into the codebase, making the insecure path structurally unavailable during development.",
      },
    ],
    regulations: ["IEC 81001-5-1", "IEC 62304", "ISO 13485"],
    relatedUseCases: ["greenfield-samd", "legacy-remediation", "high-risk-ai-cdss"],
    seo: {
      title: "Secure Software Development | P4SaMD Capability | Mia-Care",
      description:
        "Embed IEC 81001-5-1 cybersecurity compliance into your medical device SDLC. Continuous SBOM management, CVE scanning, and secure component library.",
    },
  },
  {
    slug: "guided-workflows",
    code: "08 — GUIDED",
    name: "Guided Workflows",
    tagline: "Compliance guardrails for every developer on your team.",
    description:
      "Provides guided, step-by-step workflow assistance and conversational support that keeps engineering teams on the right path through every phase of the SDLC, without requiring deep regulatory expertise to stay compliant.",
    whatItDoes: {
      heading: "The structure that keeps compliant development on track.",
      body: "Even experienced engineering teams building SaMD face the same structural risk: without clear guardrails, compliant processes drift. Steps get skipped under delivery pressure. Artifacts get documented after the fact.\n\nGuided Workflows provides step-by-step, contextual structure through every phase of the IEC 62304 lifecycle, keeping teams on the correct path regardless of their regulatory background. A conversational interface answers compliance questions in plain language. Role-specific workflows surface the right scope for each contributor.",
    },
    features: [
      {
        label: "Step-by-step Process Guidance",
        title: "Walk through every lifecycle phase",
        description:
          "Guides teams through each SDLC lifecycle phase with contextual instructions, decision prompts, and required artifact checklists, so the correct process is always the path of least resistance.",
      },
      {
        label: "Conversational Interface",
        title: "Ask in plain language, get regulatory answers",
        description:
          "A natural language interface for compliance questions. Developers ask what they need to do, the system responds with specific, actionable compliance answers without requiring them to know the underlying regulations.",
      },
      {
        label: "Role-based Guidance",
        title: "Workflows tailored by role and responsibility",
        description:
          "Developer, QA, and regulatory affairs workflows each surface appropriate scope and depth. Developers see implementation-level guidance, QA sees verification requirements, RA sees submission-level documentation tasks.",
      },
      {
        label: "Onboarding Accelerator",
        title: "From zero SaMD knowledge to compliant delivery",
        description:
          "Structured onboarding path for teams new to SaMD development, compressing the learning curve from months to days through guided task sequences, contextual regulation explanations, and milestone checklists.",
      },
    ],
    regulations: ["ISO 13485", "IEC 62304", "EU MDR 2017/745", "FDA"],
    relatedUseCases: ["greenfield-samd", "high-risk-ai-cdss", "legacy-remediation"],
    seo: {
      title: "Guided Workflows | P4SaMD Capability | Mia-Care",
      description:
        "Step-by-step compliance guidance for every developer, regardless of regulatory background. Role-based workflows aligned with IEC 62304 and ISO 13485.",
    },
  },
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
