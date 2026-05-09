import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";

const SEGMENTS = [
  {
    title: "MedTech Giants",
    href: "/use-cases/legacy-remediation",
    description:
      "Enterprise organizations modernizing fragmented legacy software estates into a unified, compliant digital health platform.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="9" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 22V17h8v5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 9l9-7 9 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="10" y="12" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Life Sciences Enterprises",
    href: "/use-cases/legacy-remediation",
    description:
      "Global pharma and biotech companies launching digital companions and Patient Support Programs alongside drug releases.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 3v8.5L4.5 18A2 2 0 006.3 21h11.4a2 2 0 001.8-3L15 11.5V3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 3h6M7.5 15.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="17.5" r="1" fill="currentColor" />
        <circle cx="14.5" cy="16.5" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "AI-Native Scaleups",
    href: "/use-cases/high-risk-ai-cdss",
    description:
      "Series B to IPO-stage companies building and continuously improving clinical AI models without sacrificing engineering velocity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M7 9H4M7 12H3M7 15H4M17 9h3M17 12h4M17 15h3"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M9 7V4M12 7V3M15 7V4M9 17v3M12 17v4M15 17v3"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Pre-Market Startups",
    href: "/use-cases/greenfield-samd",
    description:
      "Seed-to-Series A teams building their Design History File and first regulated product on the path to FDA clearance.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path
          d="M12 3v2M12 19v2M3 12h2M19 12h2"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M7.5 7.5l4.5 4.5M16.5 7.5l-4.5 4.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function WhoWeServe() {
  return (
    <section className="py-24" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <PillTag className="mb-6">Who We Serve</PillTag>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}
          >
            Every company carries the weight of regulated software.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SEGMENTS.map((seg) => (
            <Link
              key={seg.title}
              href={seg.href}
              className="group rounded-card p-6 flex flex-col gap-4 transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--bg-border)",
              }}
            >
              <div style={{ color: "var(--text-muted)" }}>{seg.icon}</div>
              <h3
                className="font-display font-semibold text-base"
                style={{ color: "var(--text-primary)" }}
              >
                {seg.title}
              </h3>
              <p
                className="text-sm flex-1"
                style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
              >
                {seg.description}
              </p>
              <span
                className="text-xs font-semibold mt-auto transition-colors group-hover:text-brand-green"
                style={{ color: "var(--text-muted)" }}
              >
                Explore use case →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
