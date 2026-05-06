export type CapabilityScreen = {
  tab: string;
  src: string;
  caption: string;
};

export const capabilityScreenshots: Record<string, CapabilityScreen[]> = {
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
