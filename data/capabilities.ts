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
      "Connects and orchestrates existing best-of-breed toolchain (Git Repositories, ALM, eQMS, Internal Developer Platforms) into a single unified workspace. No rip-and-replace. No disruption to engineering culture. Just compliance, built into how your team already works.",
    whatItDoes: {
      heading: "Your tools, connected. Your data, unified.",
      body: "Engineering teams already work with the tools they trust: Git repositories for code, Jira for tasks, ALMs for specification management, an eQMS for quality records. The problem is that these tools store data in silos — and no single system holds the full picture.\n\nP4SaMD sits at the center, ingesting data from every connected tool and maintaining a live, unified record of the entire development lifecycle. Every change, every approval, every artifact is captured in one place — so your team always works from the same source of truth, and nothing falls through the cracks between systems. The compliant workflow structure embedded across all connected tools meets IEC 62304 requirements without disrupting the way your team works.",
    },
    features: [
      {
        label: "Tool Orchestration",
        title: "Connect without migrating",
        description:
          "P4SaMD integrates with your existing Git repositories, ALM tools, and eQMS without requiring migration to a proprietary system. Your team keeps their tools; the platform adds the compliance layer on top.",
      },
      {
        label: "Guided SDLC Workflow",
        title: "IEC 62304 workflow template",
        description:
          "IEC 62304-compliant lifecycle workflows for every software safety class (A, B, C) are built into P4SaMD and guide teams through the correct phases and required artifacts, so every team always knows what to do next and auditors always find what they expect.",
      },
      {
        label: "Single Source of Truth",
        title: "All your data, in one place",
        description:
          "P4SaMD continuously ingests data from your connected tools and maintains a unified, live record of every requirement, risk, design output, code change, and approval — so your team always works from a single, consistent picture of the project, regardless of which tool they used to create it.",
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
    tagline: "Every requirement. Every risk. Every artifact. Connected.",
    description:
      "ARTT guarantees end-to-end traceability from requirements and risks to design, implementation, and verification in real time; even from different sources by integrating ALM systems, external sources and files. Traceability isn't just a compliance artifact — it drives your development forward, surfaces gaps before they become findings, and continuously assembles a complete, consistent Technical File.",
    whatItDoes: {
      heading: "Traceability that builds itself, continuously.",
      body: "Manual, segmented traceability is the silent killer of regulated software projects. It starts as a spreadsheet and ends as an audit risk. By the time the project is ready for review, the matrix is out of date and the reconciliation effort delays release.\n\nARTT integrates directly with your ALM, Git repositories, and risk management toolchain to map every requirement to its design output, every design output to its implementation, and every implementation to its verification evidence — in real time, every time something changes. The traceability graph doesn't just record what happened: it drives development forward, detecting gaps as they open so teams stay focused on design and delivery rather than documentation maintenance.\n\nTraceability matrices are continuously tailored to IEC 62304, ISO 14971, and your own plans and quality SOPs — providing a complete, consistent, and correct Technical File at every point in the lifecycle.",
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
        title: "Missing links surfaced during development, not just before audits",
        description:
          "ARTT continuously monitors the traceability graph and surfaces gaps as they open — a requirement without verification, an uncontrolled risk, a change with no impact assessment — keeping development on track rather than catching problems at audit time.",
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
      "P4SaMD automatically generates Technical File, DHF records, risk evidence, verification reports, audit trails, and submission-ready documentation, ensuring constant audit readiness from the first commit to the final release.",
    whatItDoes: {
      heading: "Documentation that writes itself, from your work.",
      body: "The Documentation Engine lets your SaMD team focus on what they do best: building great software. By connecting directly to your SDLC tools and pulling live development data in real time, it compiles the Technical File, Design History File, and all required regulatory evidence continuously and automatically, in your own templates, using your terminology, ready for submission at any point in the development cycle.",
    },
    features: [
      {
        label: "Technical File & DHF",
        title: "Continuous Technical File and DHF compilation",
        description:
          "The Technical File and DHF are compiled continuously from live development data — requirements, risks, design, implementation, and verification — so both documents always reflect the current system state.",
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
      "A deterministic rule and LLM-based policy engine for regulatory compliance. Whisper is aligned with MDR, ISO 13485, IEC 62304, ISO 14971, FDA, and AI regulatory frameworks (EU AI Act, GMLP, PCCP). It delivers active, pre-configured regulatory intelligence throughout the SDLC and performs AI-driven assessments of requirement quality and test coverage — identifying blind spots before they become audit findings.",
    whatItDoes: {
      heading: "Regulatory expertise at the point of engineering.",
      body: "The traditional model concentrates all regulatory expertise in a small team of RA/QA specialists expected to cover every engineering decision in real time. At a certain scale, that model breaks down.\n\nWhisper is a regulatory intelligence engine aligned with MDR, ISO 13485, IEC 62304, ISO 14971, FDA, and the latest AI-related regulations and guidances (EU AI Act, GMLP, and PCCP). It enforces hard rules, evaluates nuanced compliance policies, and performs AI-driven assessments of quality. It addresses compliance gaps and targets 100% verified software by surfacing blind spots in the verification process before they become audit findings. Routine decisions are handled at the point of engineering. RA/QA teams stay focused on where their expertise has the most impact.",
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
          "Because Whisper understands the full context of what is being built, it identifies downstream risks, flags optimization opportunities, and recommends actions that reduce compliance debt before it accumulates.",
      },
      {
        label: "Contextual Guidance",
        title: "Right guidance at the right moment",
        description:
          "Whisper surfaces enforcement and suggestions based on what the developer is currently working on. Implementing a Class B software item triggers IEC 62304 5.3 guidance, not a generic reminder.",
      },
    ],
    regulations: ["ISO 13485", "IEC 62304", "ISO 14971", "EU MDR 2017/745", "FDA", "EU AI Act", "GMLP"],
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
      "A dedicated feature set that enforces specific AI regulatory requirements — transparency, explainability, audit records, and data quality — while supporting design inputs, regulatory review, implementation adherence, quality assurance, and documentation for AI-enabled components. Covers the full compliance lifecycle for AI components, agents, and models in SaMD products.",
    whatItDoes: {
      heading: "The compliance infrastructure for AI-enabled SaMD.",
      body: "AI components, agents, and models are transforming SaMD products — enabling smarter diagnostics, adaptive workflows, and better patient outcomes. But they introduce a regulatory complexity that standard QMS systems were never designed to handle: the EU AI Act, FDA GMLP, and PCCP frameworks demand transparency, explainability, audit records, and data quality controls that go far beyond traditional software compliance.\n\nMaster AI for Compliance adds a dedicated layer within P4SaMD that manages the full compliance lifecycle of AI components — from design inputs and regulatory review through implementation adherence, quality assurance, and documentation. It enforces transparency, explainability, and audit record requirements while supporting structured documentation of AI training data, model versions, performance metrics, and PCCP change control plans.",
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
        label: "AI Component Audit Records",
        title: "Automated tracking of every model state",
        description:
          "Automated audit records track the full lifecycle of every AI component, agent, and model: training data characteristics, version history, performance benchmarks, validation results, and bias assessments — creating the continuous record that regulators and notified bodies require for AI-enabled SaMD.",
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
      "Provides dedicated capabilities to ingest the full legacy software estate — documentation (requirement analyses, specs, architecture designs, test plans, test reports, project plans) and technical assets (source code, DB schemas, SBOMs, configuration files) — run automated gap analysis against the applicable regulatory framework, and generate custom remediation plans that bring legacy software to audit readiness without a full redevelopment.",
    whatItDoes: {
      heading: "From legacy software to audit-ready evidence.",
      body: "Millions of lines of medical device software were written before IEC 62304 was a consideration and before EU MDR came into force. This software still works and creates value, but it cannot be certified, updated, or brought to new markets without satisfying the regulatory frameworks it predates.\n\nThe Brownfield Remediator ingests your full legacy estate regardless of format, language, or documentation maturity. It automates gap analysis against the regulatory framework of your choice, maps what exists to what is required, and generates a structured, prioritized task list — turning a scattered legacy archive into an audit-ready compliance record.",
    },
    features: [
      {
        label: "Automated Ingestion",
        title: "Import any documentation, any technical asset",
        description:
          "Ingests the full legacy estate into P4SaMD's unified compliance model: documentation (requirement analyses, specs, architecture designs, test plans, test reports, project plans) and technical assets (source code, DB schemas, SBOMs, configuration files) — no manual migration required.",
      },
      {
        label: "Gap Analysis",
        title: "Gaps against the applicable regulatory framework, surfaced automatically",
        description:
          "The P4SaMD Compliance Engine maps existing artifacts to the regulatory framework of your choice — IEC 62304, ISO 13485, EU MDR, FDA, ISO 14971, or any newly applicable regulation — and identifies every gap: what's missing, incomplete, or non-conformant, with prioritized remediation effort estimates.",
      },
      {
        label: "Legacy Remediation",
        title: "From compliance gaps to audit-ready evidence",
        description:
          "Translates the gap analysis output into a structured remediation path: missing documentation is scaffolded, non-conformant artifacts are flagged with corrective actions, and partial traceability is extended — producing the evidence package that auditors and notified bodies require.",
      },
      {
        label: "Remediation Planning",
        title: "Structured, prioritized task list for compliance remediation",
        description:
          "Generates a structured, prioritized remediation task list organized by regulatory priority and effort that teams can import into any ALM tool and begin executing immediately.",
      },
    ],
    regulations: ["IEC 62304", "ISO 13485", "ISO 14971", "EU MDR 2017/745", "FDA", "Custom Frameworks"],
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
      "Supports Software Item implementation with full design control at every stage — from specification to code — while enforcing continuous implementation verification and managing the full software supply chain through dependency control and vulnerability management per IEC 81001-5-1.",
    whatItDoes: {
      heading: "Security and compliance built into the development toolchain.",
      body: "Medical software is an increasingly targeted attack surface. A vulnerability in a device software component is not just a security incident, it's a patient safety event and a regulatory failure. IEC 81001-5-1 sets the standard for health software cybersecurity, but satisfying it requires far more than a security audit at release time.\n\nP4SaMD's Secure Software Development capability embeds security and compliance controls directly into the development workflow: keeping design files aligned with implementation at every stage, detecting anomalies between software specifications and actual code early, and managing the full dependency and vulnerability lifecycle — from detection to approval and documentation.",
    },
    features: [
      {
        label: "Implementation Verification",
        title: "Continuous checks of implementation against software specifications",
        description:
          "Automatic controls guarantee constant verification of implementation against software specifications at every level — design files, code, and test artifacts — enabling early detection of anomalies before they propagate into the compliance record.",
      },
      {
        label: "SBOM Management",
        title: "Dependency detection, approval, and documentation",
        description:
          "Plug-and-play dependency detection automatically generates and maintains the Software Bill of Materials for every software item. Every dependency is tracked, approved, and documented — giving teams full visibility into their software supply chain with minimal setup.",
      },
      {
        label: "Vulnerability Management",
        title: "Automated CVE detection with risk impact assessment",
        description:
          "Covers the full vulnerability lifecycle: automated detection, risk-based mitigation planning, approval workflow, and documentation — distinguishing between a minor dependency update and a finding requiring an immediate risk management response under IEC 81001-5-1.",
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
      "Provides guided, step-by-step workflow assistance and a conversational AI compliance assistant that keeps engineering teams on the right path through every phase of the SDLC — combining deep regulatory framework indexing with real-time access to project data, without requiring deep regulatory expertise.",
    whatItDoes: {
      heading: "The structure that keeps compliant development on track.",
      body: "Even experienced engineering teams building SaMD face the same structural risk: without clear guardrails, compliant processes drift. Steps get skipped under delivery pressure. Artifacts get documented after the fact.\n\nGuided Workflows provides step-by-step, contextual structure through every phase of the IEC 62304 lifecycle, keeping teams on the correct path regardless of their regulatory background. A specialized compliance assistant acts as the project's knowledge core — combining deep indexing of the applicable regulatory framework with real-time access to uploaded documentation, integrated tools, and implementation data. Role-specific workflows surface the right scope for each contributor.",
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
          "A specialized conversational AI engine that combines deep indexing of the applicable regulatory framework (IEC 62304, MDR, ISO 14971, and others) with real-time access to project data — uploaded documentation, integrated tools, and implementation. Supports complex cross-entity queries and delivers context-specific guidance that ensures project-wide consistency and compliance.",
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
