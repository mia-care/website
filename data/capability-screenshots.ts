export type CapabilityScreen = {
  tab: string;
  src: string;
  caption: string;
};

export const capabilityScreenshots: Record<string, CapabilityScreen[]> = {
  "documentation-engine": [
    {
      tab: "Document Catalog",
      src: "/images/capability-svgs/documentation-engine/page.svg",
      caption:
        "Document catalog — all DHF records grouped by category, with live status, version tracking, and one-click export across PDF, DOCX, and MD formats",
    },
    {
      tab: "Document Detail",
      src: "/images/capability-svgs/documentation-engine/page-11.svg",
      caption:
        "Document detail — full revision history, regulatory references (IEC 62304, ISO 13485), linked artifacts, and download buttons for every generated document",
    },
    {
      tab: "Custom Templates",
      src: "/images/capability-svgs/documentation-engine/page-12.svg",
      caption:
        "Custom templates — write Markdown templates with interpolated variables that pull live project data at generation time, for any document your process requires",
    },
    {
      tab: "Variable Library",
      src: "/images/capability-svgs/documentation-engine/page-13.svg",
      caption:
        "Variable library — browse all available template variables across product, requirements, risk, verification, AI/ML, and traceability data domains",
    },
  ],
  "software-development": [
    {
      tab: "Risk List",
      src: "/images/capability-svgs/risk-management/page.svg",
      caption:
        "Risk Management dashboard — all hazards tracked with inherent and residual risk classification per ISO 14971",
    },
    {
      tab: "Analysis",
      src: "/images/capability-svgs/risk-management/page-11.svg",
      caption:
        "Hazard analysis — hazardous situation, harm description, and initial risk estimation with Probability × Severity matrix",
    },
    {
      tab: "Controls",
      src: "/images/capability-svgs/risk-management/page-12.svg",
      caption:
        "Risk control measures — implementation status, verification evidence, and ISO 14971 §5.5–5.7 traceability",
    },
    {
      tab: "Evaluation",
      src: "/images/capability-svgs/risk-management/page-13.svg",
      caption:
        "Risk evaluation — inherent vs residual risk side by side, with linked requirements and test evidence",
    },
    {
      tab: "History",
      src: "/images/capability-svgs/risk-management/page-14.svg",
      caption:
        "Audit trail — immutable timeline of every risk decision, modification, and verification event",
    },
  ],
};
