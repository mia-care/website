export type CaseStudyResult = {
  metric: string;
  label: string;
};

/**
 * Inline markup supported in the text fields below (rendered by RichText):
 * `**bold**` and `[label](href)`. Plain-text consumers (JSON-LD) strip it
 * with `stripRichText`.
 */
export type UseCaseSection = {
  heading: string;
  /** A string is a paragraph, a string[] is a bullet list. */
  body: (string | string[])[];
};

export type UseCaseFaq = {
  heading: string;
  items: { q: string; a: string }[];
};

export type UseCase = {
  slug: string;
  segment: string;
  name: string;
  tagline: string;
  /** Optional hero block shown under the H1 in place of the tagline. First paragraph is the bold lead. */
  intro?: string[];
  /** ISO dates (YYYY-MM-DD). `lastUpdated` is shown under the H1 and used as dateModified. */
  datePublished?: string;
  lastUpdated?: string;
  problem: { heading: string; body: string };
  need: { heading: string; body: string };
  solution: { heading: string; body: string };
  /** Extra H2 sections rendered between the problem/need/solution story and the case study. */
  sections?: UseCaseSection[];
  caseStudy: {
    label: string;
    quote: string;
    scope: string[];
    /** Overrides the default "Measured outcomes" heading and adds a short note under it. */
    outcomesHeading?: string;
    outcomesNote?: string;
    results: CaseStudyResult[];
  };
  capabilities: string[];
  /** Capability slugs shown with an "Upcoming" badge in Capabilities Involved. */
  upcomingCapabilities?: string[];
  /** Short highlighted subtitle per capability slug, shown on its card in Capabilities Involved. */
  capabilityNotes?: Record<string, string>;
  /** FAQ block rendered after Capabilities Involved; also emitted as FAQPage JSON-LD. */
  faq?: UseCaseFaq;
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
      body: "Engineering and documentation run on disconnected timelines: by the time quality teams start documenting, traceability is already broken and the system has changed. The result is a 3 to 6 month documentation sprint that delays revenue and pressures the quality team to reconstruct artifacts that were never captured incrementally.",
    },
    need: {
      heading: "Compliance as a continuous output of normal engineering work.",
      body: "A framework that eliminates friction between engineering speed and regulatory requirements, integrating compliance directly into the SDLC so teams build software that's audit-ready at every increment, not just at the finish line.",
    },
    solution: {
      heading: "From first commit to compliant MVP, in one motion.",
      body: "P4SaMD enables continuous compliance orchestration by monitoring the development environment in real time. As code evolves, quality documentation is automatically synchronized.\n\nThe team builds their product. P4SaMD builds the regulatory file alongside it, making audit-readiness the default output of normal engineering work.",
    },
    caseStudy: {
      label: "Case Study // Digital Health Startup",
      quote:
        "A Digital Health startup focused on personalized metabolic health management and clinical support platforms, combining medical expertise with advanced technology.",
      scope: [
        "API developed on P4SaMD connected with a regional EHR",
        "Full greenfield SaMD development with continuous compliance orchestration from day one",
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
      body: "AI-based clinical software evolves dynamically, yet traditional compliance models assume requirements are static from the outset. Every update to an AI model risks triggering a complex cascade of rework across risk management files, verification documents, and regulatory submissions, creating a compliance drag that slows innovation to a halt.\n\nProving that an opaque algorithm is safe for life-critical decisions requires a new kind of evidence: transparency reports, bias assessments, audit records, and PCCP documentation that most QMS systems were never designed to generate.",
    },
    need: {
      heading: "Compliance that keeps pace with your model updates.",
      body: "Future-proofing AI-enabled medical devices by synchronizing regulatory rigor with high-speed technical development. A framework that manages the unique challenges of AI compliance (transparency, explainability, data bias, PCCP) without requiring a new 510(k) for every model iteration.",
    },
    solution: {
      heading: "Multi-framework compliance. One platform.",
      body: "Mia-Care P4SaMD manages AI compliance in full (transparency, explainability, security, audit records) across MDR, EU AI Act, and GMLP in a single system. Your team ships model improvements without choosing between velocity and compliance posture.",
    },
    caseStudy: {
      label: "Case Study // CDSS Provider",
      quote:
        "A leading CDSS provider using Generative AI and high-fidelity synthetic data to support clinicians with precision diagnostics and tailored therapeutic strategies.",
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
        "Ship AI-enabled clinical software with EU AI Act, GMLP, and MDR compliance in a single platform. Automated audit records, PCCP support, and multi-framework gap detection.",
    },
  },
  {
    slug: "legacy-remediation",
    segment: "For MedTech Giants & Life Sciences Enterprises",
    name: "Legacy Regulated Software Remediation",
    tagline:
      "Regulatory debt is locking your legacy software. P4SaMD clears the path to certification, without rebuilding from scratch.",
    intro: [
      "Legacy software remediation tools help medical device manufacturers bring software that is already on the market, or already built, up to current regulatory expectations without rewriting it: they assess the existing code and documentation against standards such as IEC 62304 and FDA requirements, list the gaps, and help rebuild the missing evidence. P4SaMD by Mia-Care, a Mia-Platform company, does this with Brownfield Remediator, our legacy software assessment: a guided import of your existing software, an automated gap analysis and a prioritised remediation plan.",
      "A rewrite is rarely the first step. [IEC 62304](/resources/blog/iec-62304-a-comprehensive-faq-guide) (the international standard for the medical device software life cycle) has a specific route for legacy software, and most of the work is evidence, not code: requirements, risk controls, tests and a record of third-party components.",
    ],
    datePublished: "2026-04-22",
    lastUpdated: "2026-11-19",
    problem: {
      heading: "Valuable software, trapped by regulatory debt.",
      body: "Many organizations hold valuable legacy software not designed under ISO 13485 QMS or in alignment with IEC 62304. Often, these systems also face technical obsolescence. Manual remediation attempts are expensive, slow, and frequently fail audit review because they lack systematic traceability reconstruction.\n\nThe instinct to rebuild from scratch is costly and time-consuming. But without a structured remediation path, the legacy software remains locked, unable to be updated, re-certified, or legally distributed as a medical device in new markets.",
    },
    need: {
      heading: "A path to certification that doesn't start from zero.",
      body: "A solution that ingests and evaluates legacy systems, establishes a clear certification pathway without full-scale redevelopment, and delivers a structured, evidence-based remediation plan that maps gaps to specific standards.",
    },
    solution: {
      heading: "From legacy to audit-ready. Without rebuilding.",
      body: "Mia-Care P4SaMD ingests codebases in any language and existing documentation, then uses agentic AI to automate legacy assessments and identify gaps against IEC 62304, ISO 13485, and EU MDR / FDA.\n\nThe platform generates custom remediation plans and produces audit-ready documentation in your own templates. What can take months of manual effort is compressed into a structured, prioritized task list your engineering team can execute immediately.",
    },
    sections: [
      {
        heading: "Compliance gaps and cybersecurity gaps: one remediation project",
        body: [
          'When teams search for "legacy remediation", two problems often hide behind the same word:',
          [
            "**The compliance gap.** The software works, but the documentation a notified body or the FDA expects (requirements traced to risks, risks to controls, controls to tests) is missing or out of date.",
            '**The cybersecurity gap.** The software relies on third-party and open-source components (SOUP, "software of unknown provenance") that nobody has listed or checked for known vulnerabilities. In the US, section 524B of the FD&C Act requires devices with software that connect to networks ("cyber devices") to have a software bill of materials (SBOM), a plan to monitor and address vulnerabilities, and a process for updates and patches; FDA\'s final premarket cybersecurity guidance (February 2026, aligned with the QMSR) explains what to submit, including a threat model. In the EU, MDCG 2019-16 sets out the cybersecurity expectations under the MDR.',
          ],
          "Treating the two separately doubles the work: both start from the same inventory of what the software contains and what it does. A single remediation plan covers both.",
        ],
      },
      {
        heading: "What P4SaMD does for legacy software today",
        body: [
          [
            "**Guided import and automated gap analysis.** A six-step import of your existing software produces a gap analysis and a prioritised remediation plan (P4SaMD 3.0, May 2026).",
            "**US frameworks.** Since P4SaMD 3.7 (19 Oct 2026) the assessment also covers ten US-oriented frameworks, including FDA medical device reporting, premarket pathways, quality systems, unique device identification and federal cybersecurity directives.",
            "**EU cybersecurity.** Since P4SaMD 3.7.5 (30 Oct 2026) the MDR gap analysis also evaluates against MDCG 2019-16, the EU guidance on medical device cybersecurity.",
            "**SBOM and SOUP.** P4SaMD generates a CycloneDX SBOM (3.4, Aug 2026) and reconciles it with the SOUP components you declared, flagging what is missing or outdated (3.6, Sep 2026).",
            "**Traceability from now on.** Requirements, risks (ISO 14971 5×5 matrix, 3.5) and tests stay linked, and released versions are locked in line with IEC 62304. The Documentation Hub (3.7) gathers every compliance artifact in one place, and the full requirement-to-evidence traceability matrix can be downloaded as a CSV (3.8).",
            "**AI that suggests, people who decide.** The Whisper assistant (beta, on request) proposes compliance findings with normative references; nothing changes without approval.",
          ],
          "P4SaMD is also adding more automation across the software life cycle, such as an SDLC workflow orchestrator. P4SaMD helps teams produce and maintain the evidence; the notified body or the FDA decides on certification.",
        ],
      },
    ],
    caseStudy: {
      label: "Case Study // Consumer Health Enterprise",
      quote:
        "A global leader in the consumer health and lifestyle sector, with revenues exceeding several billion euros and operations across numerous countries through internationally recognized consumer brands.",
      scope: [
        "Automated ingestion of heterogeneous workitems: requirements, risks, tests, and existing code",
        "Gap analysis against MDR and IEC 62304, generating a complete compliance evidence package with prioritized remediation tasks",
        "Dynamic generation of audit-ready MDR Technical Files using client templates",
      ],
      outcomesHeading: "Measured outcomes from this customer project.",
      outcomesNote: "Figures measured on a real customer project.",
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
    upcomingCapabilities: ["sdlc-orchestrator"],
    capabilityNotes: {
      "brownfield-remediator": "Our legacy software assessment",
      "documentation-engine": "Now available as the Documentation Hub",
    },
    faq: {
      heading: "FAQ: Legacy software remediation for medical devices",
      items: [
        {
          q: "What are legacy software remediation tools for medical devices?",
          a: "Tools that assess existing medical device software against current standards and regulations, list the gaps, and help rebuild the missing evidence, so the software can be certified or kept compliant without a rewrite.",
        },
        {
          q: "Do we have to rewrite legacy software to comply with IEC 62304?",
          a: "Usually not. IEC 62304 includes a route for legacy software: assess the risks, close the gaps that matter for safety, and document the rationale. A rewrite is an engineering decision you take after the gap analysis, not a regulatory requirement.",
        },
        {
          q: "Is legacy remediation about cybersecurity too?",
          a: "Yes. Older software often contains third-party components that are not listed or monitored. An SBOM and a review of known vulnerabilities belong in the same remediation plan.",
        },
        {
          q: "What does a remediation plan contain?",
          a: "The list of gaps per requirement of the standard or regulation, their priority, the evidence to produce for each, and who does it.",
        },
        {
          q: "Can a tool certify our legacy software?",
          a: "No. A tool can produce and organise the evidence; certification is decided by a notified body (EU) or the FDA (US).",
        },
      ],
    },
    seo: {
      title: "Legacy Regulated Software Remediation | Use Case | Mia-Care P4SaMD",
      description:
        "Legacy software remediation for medical devices: assess existing software against IEC 62304 and FDA, close compliance and cybersecurity gaps, no rewrite.",
    },
  },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}
