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
    tagline: "One platform. Every tool. One source of truth.",
    description:
      "Connects Git repositories, ALM, eQMS, and your Internal Developer Platform into a single unified workspace. No rip-and-replace. Just compliance, built into how your team already works.",
    whatItDoes: {
      heading: "Your tools, connected. Your data, unified.",
      body: "Engineering teams already work with the tools they trust: Git for code, Jira for tasks, ALMs for specifications, an eQMS for quality records. The problem is that these tools store data in silos, and no single system holds the full picture.\n\nP4SaMD sits at the center, ingesting data from every connected tool and maintaining a live, unified record of the entire development lifecycle. Every change, approval, and artifact captured in one place, always in sync. IEC 62304-compliant workflow structure built in, without disrupting how your team works.",
    },
    features: [
      {
        label: "Tool Orchestration",
        title: "Connect without migrating",
        description:
          "P4SaMD integrates with your existing Git repositories, ALM tools, and eQMS without migration to a proprietary system. Your team keeps their tools. The platform adds the compliance layer.",
      },
      {
        label: "Guided SDLC Workflow",
        title: "IEC 62304 workflow template",
        description:
          "Built-in IEC 62304-compliant workflows for every safety class (A, B, C) guide teams through the correct phases and required artifacts. Every team knows what to do next. Auditors always find what they expect.",
      },
      {
        label: "Single Source of Truth",
        title: "All your data, in one place",
        description:
          "P4SaMD continuously ingests data from your connected tools and maintains a live record of every requirement, risk, design output, code change, and approval. One consistent picture of the project, regardless of which tool created it.",
      },
      {
        label: "Seamless Integration",
        title: "No rip-and-replace",
        description:
          "P4SaMD works alongside your existing tool stack with lightweight connectors. No forced migrations, no retraining, no disruption to releases already in flight.",
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
    tagline: "Every requirement. Every risk. Every artifact. Connected.",
    description:
      "ARTT guarantees end-to-end traceability from requirements and risks to design, implementation, and verification in real time, across ALM systems, external sources, and files. Traceability is not just a compliance artifact: it drives development forward, surfaces gaps before they become findings, and continuously assembles a complete Technical File.",
    whatItDoes: {
      heading: "Traceability that builds itself, continuously.",
      body: "Manual, segmented traceability is the silent killer of regulated software projects. It starts as a spreadsheet and ends as an audit risk. By the time the project is ready for review, the matrix is out of date and the reconciliation effort delays release.\n\nARTT integrates directly with your ALM, Git repositories, and risk management toolchain to map every requirement to its design output, every design output to its implementation, and every implementation to its verification evidence, in real time. The traceability graph detects gaps as they open, keeping teams focused on design and delivery rather than documentation maintenance.\n\nTraceability matrices are continuously aligned to IEC 62304, ISO 14971, and your own quality SOPs, providing a complete Technical File at every point in the lifecycle.",
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
          "The DHF traceability matrix is automatically maintained at all times. No reconciliation sprint before audits: the matrix is never out of date.",
      },
      {
        label: "Risk Integration",
        title: "ISO 14971 risk items linked to mitigations",
        description:
          "Each risk item is automatically linked to its mitigating software items and the corresponding verification evidence, creating the closed-loop risk chain auditors require.",
      },
      {
        label: "Gap Detection",
        title: "Missing links surfaced during development, not just before audits",
        description:
          "ARTT continuously monitors the traceability graph and surfaces gaps as they open: a requirement without verification, an uncontrolled risk, a change with no impact assessment. Development stays on track rather than catching problems at audit time.",
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
      "P4SaMD automatically generates Technical Files, DHF records, risk evidence, verification reports, and audit trails, ensuring audit readiness from the first commit to the final release.",
    whatItDoes: {
      heading: "Documentation that writes itself, from your work.",
      body: "The Documentation Engine lets your SaMD team focus on what they do best: building great software. Connected directly to your SDLC tools, it pulls live development data in real time and compiles the Technical File, DHF, and all required regulatory evidence continuously. Your own templates, your terminology, ready for submission at any point in the cycle.",
    },
    features: [
      {
        label: "Technical File & DHF",
        title: "Continuous Technical File and DHF compilation",
        description:
          "The Technical File and DHF are compiled continuously from live development data (requirements, risks, design, implementation, and verification), always reflecting the current system state.",
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
      "Deterministic rule engine plus LLM policy engine for regulatory compliance. Aligned with MDR, IEC 62304, ISO 14971, FDA, EU AI Act, GMLP, and PCCP. Active compliance intelligence embedded in every SDLC phase.",
    whatItDoes: {
      heading: "Regulatory expertise at the point of engineering.",
      body: "The traditional model concentrates all regulatory expertise in a small team of RA/QA specialists expected to cover every engineering decision in real time. At a certain scale, that model breaks down.\n\nWhisper is a regulatory intelligence engine aligned with MDR, ISO 13485, IEC 62304, ISO 14971, FDA, EU AI Act, GMLP, and PCCP. It enforces hard rules, evaluates nuanced compliance policies, and surfaces blind spots before they become audit findings. Routine decisions are handled at the point of engineering. RA/QA teams stay focused on where their expertise has the most impact.",
    },
    features: [
      {
        label: "Deterministic Rule Enforcement",
        title: "No ambiguity, no gaps",
        description:
          "Whisper applies a curated, versioned regulatory ruleset where every enforcement action is traceable to a specific requirement. Binary compliance checks, software classification boundaries, mandatory documentation triggers, all handled consistently, every time.",
      },
      {
        label: "Directive Evaluation",
        title: "Compliance judgment for complex decisions",
        description:
          "Beyond hard rules, Whisper evaluates complex compliance policies that require contextual analysis, surfacing structured, traceable recommendations so your team makes informed decisions rather than guesses.",
      },
      {
        label: "Proactive Suggestions",
        title: "Catch issues before they become findings",
        description:
          "Whisper understands the full context of what is being built, identifying downstream risks, flagging optimization opportunities, and recommending actions that reduce compliance debt before it accumulates.",
      },
      {
        label: "Contextual Guidance",
        title: "Right guidance at the right moment",
        description:
          "Whisper surfaces enforcement and suggestions based on what the developer is currently working on. Implementing a Class B software item triggers the specific IEC 62304 guidance for that safety class, not a generic reminder.",
      },
    ],
    regulations: [
      "ISO 13485",
      "IEC 62304",
      "ISO 14971",
      "EU MDR 2017/745",
      "FDA",
      "EU AI Act",
      "GMLP",
    ],
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
      "A dedicated feature set for AI-enabled SaMD that enforces transparency, explainability, audit records, and data quality requirements across the full compliance lifecycle of AI components, agents, and models.",
    whatItDoes: {
      heading: "The compliance infrastructure for AI-enabled SaMD.",
      body: "AI components, agents, and models are transforming SaMD products, enabling smarter diagnostics, adaptive workflows, and better patient outcomes. But they introduce a regulatory complexity that standard QMS systems were never designed to handle: the EU AI Act, FDA GMLP, and PCCP frameworks demand transparency, explainability, audit records, and data quality controls that go far beyond traditional software compliance.\n\nMaster AI for Compliance adds a dedicated layer within P4SaMD that manages the full compliance lifecycle of AI components, from design inputs and regulatory review through implementation adherence, quality assurance, and documentation. It enforces transparency, explainability, and audit record requirements, and supports structured documentation of AI training data, model versions, performance metrics, and PCCP change control plans.",
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
          "Structured support for FDA Predetermined Change Control Plans, enabling teams to plan and execute model updates within pre-approved boundaries. No new regulatory submission for every algorithm iteration.",
      },
      {
        label: "AI Component Audit Records",
        title: "Automated tracking of every model state",
        description:
          "Automated audit records track the full lifecycle of every AI component, agent, and model: training data characteristics, version history, performance benchmarks, validation results, and bias assessments. The continuous record regulators and notified bodies require.",
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
        "Enforce EU AI Act, GMLP, and FDA PCCP requirements for AI-enabled SaMD. Automated audit records, transparency reports, and PCCP-aligned change management.",
    },
  },
  {
    slug: "brownfield-remediator",
    code: "06 — BROWNFIELD",
    name: "Brownfield Remediator",
    tagline: "Certify what you already built, without rebuilding it.",
    description:
      "Ingests your full legacy software estate (documentation and technical assets), runs automated gap analysis against IEC 62304 and EU MDR, and generates a prioritized remediation plan. No full redevelopment required.",
    whatItDoes: {
      heading: "From legacy software to audit-ready evidence.",
      body: "Millions of lines of medical device software were written before IEC 62304 was a consideration and before EU MDR came into force. This software still works and creates value, but it cannot be certified, updated, or brought to new markets without satisfying the regulatory frameworks it predates.\n\nThe Brownfield Remediator ingests your full legacy estate regardless of format, language, or documentation maturity. It automates gap analysis against the regulatory framework of your choice, maps what exists to what is required, and generates a structured, prioritized task list. A scattered legacy archive becomes an audit-ready compliance record.",
    },
    features: [
      {
        label: "Automated Ingestion",
        title: "Import any documentation, any technical asset",
        description:
          "Ingests the full legacy estate into P4SaMD's unified compliance model: documentation (requirement analyses, specs, architecture, test plans, test reports) and technical assets (source code, DB schemas, SBOMs, configuration files). No manual migration required.",
      },
      {
        label: "Gap Analysis",
        title: "Gaps against the applicable regulatory framework, surfaced automatically",
        description:
          "The P4SaMD Compliance Engine maps existing artifacts to the regulatory framework of your choice (IEC 62304, ISO 13485, EU MDR, FDA, ISO 14971) and identifies every gap: what's missing, incomplete, or non-conformant, with prioritized remediation effort estimates.",
      },
      {
        label: "Legacy Remediation",
        title: "From compliance gaps to audit-ready evidence",
        description:
          "Translates gap analysis output into a structured remediation path: missing documentation is scaffolded, non-conformant artifacts flagged with corrective actions, and partial traceability extended. The evidence package auditors and notified bodies require.",
      },
      {
        label: "Remediation Planning",
        title: "Structured, prioritized task list for compliance remediation",
        description:
          "Generates a structured, prioritized remediation task list organized by regulatory priority and effort that teams can import into any ALM tool and begin executing immediately.",
      },
    ],
    regulations: [
      "IEC 62304",
      "ISO 13485",
      "ISO 14971",
      "EU MDR 2017/745",
      "FDA",
      "Custom Frameworks",
    ],
    relatedUseCases: ["legacy-remediation", "high-risk-ai-cdss", "greenfield-samd"],
    seo: {
      title: "Brownfield Remediator | P4SaMD Capability | Mia-Care",
      description:
        "Certify legacy medical software without rebuilding it. Automated gap analysis, full estate ingestion, and prioritized remediation plans for IEC 62304, EU MDR, and more.",
    },
  },
  {
    slug: "software-development",
    code: "07 — DEV",
    name: "Secure Software Development",
    tagline: "Secure by design. From the first line of code.",
    description:
      "Full design control from specification to code, continuous implementation verification, and software supply chain management through dependency control and vulnerability management per IEC 81001-5-1.",
    whatItDoes: {
      heading: "Security and compliance built into the development toolchain.",
      body: "Medical software is an increasingly targeted attack surface. A vulnerability in a device software component is not just a security incident, it's a patient safety event and a regulatory failure. IEC 81001-5-1 sets the standard for health software cybersecurity, but satisfying it requires far more than a security audit at release time.\n\nSecurity and compliance controls embedded directly in the workflow: design alignment, anomaly detection, and full dependency and vulnerability lifecycle management, from detection to approval and documentation.",
    },
    features: [
      {
        label: "Implementation Verification",
        title: "Continuous checks of implementation against software specifications",
        description:
          "Automatic controls verify implementation against software specifications at every level (design files, code, and test artifacts), enabling early detection of anomalies before they propagate into the compliance record.",
      },
      {
        label: "SBOM Management",
        title: "Dependency detection, approval, and documentation",
        description:
          "Plug-and-play dependency detection automatically generates and maintains the Software Bill of Materials for every software item. Every dependency is tracked, approved, and documented, giving teams full visibility into their software supply chain with minimal setup.",
      },
      {
        label: "Vulnerability Management",
        title: "Automated CVE detection with risk impact assessment",
        description:
          "Covers the full vulnerability lifecycle: automated detection, risk-based mitigation planning, approval workflow, and documentation. Distinguishes between a minor dependency update and a finding requiring an immediate IEC 81001-5-1 risk management response.",
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
        "Embed IEC 81001-5-1 cybersecurity compliance into your medical device SDLC. Implementation verification, dependency control, and full vulnerability lifecycle management.",
    },
  },
  {
    slug: "guided-workflows",
    code: "08 — GUIDED",
    name: "Guided Workflows",
    tagline: "Compliance guardrails for every developer on your team.",
    description:
      "Step-by-step workflow guidance and a conversational AI compliance assistant for every SDLC phase, combining regulatory framework indexing with real-time project data. No deep regulatory expertise required.",
    whatItDoes: {
      heading: "The structure that keeps compliant development on track.",
      body: "Even experienced engineering teams building SaMD face the same structural risk: without clear guardrails, compliant processes drift. Steps get skipped under delivery pressure. Artifacts get documented after the fact.\n\nGuided Workflows provides step-by-step, contextual structure through every phase of the IEC 62304 lifecycle, keeping teams on the correct path regardless of their regulatory background. A specialized compliance assistant acts as the project's knowledge core, combining regulatory framework indexing with real-time access to uploaded documentation, integrated tools, and implementation data. Role-specific workflows surface the right scope for each contributor.",
    },
    features: [
      {
        label: "Step-by-step Process Guidance",
        title: "Walk through every lifecycle phase",
        description:
          "Guides teams through each SDLC lifecycle phase with contextual instructions, decision prompts, and required artifact checklists, so the correct process is always the path of least resistance.",
      },
      {
        label: "Compliance Assistant",
        title: "Project-aware compliance intelligence, always in context",
        description:
          "A conversational AI engine combining regulatory framework indexing (IEC 62304, MDR, ISO 14971) with real-time access to project data: uploaded documentation, integrated tools, and implementation. Delivers context-specific guidance for project-wide consistency and compliance.",
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
