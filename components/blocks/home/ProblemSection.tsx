import { PillTag } from "@/components/blocks/shared/PillTag";

const TOOLS = [
  "Jira",
  "Confluence",
  "Word",
  "Excel",
  "GitHub",
  "SharePoint",
  "TestRail",
  "Polarion",
  "Doors",
  "Windchill",
  "Veeva",
  "SAP QM",
  "Teams",
  "Slack",
  "Email",
  "PDF",
];

export function ProblemSection() {
  return (
    <section className="py-24" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <PillTag className="mb-6">The Problem</PillTag>
            <h2
              className="font-display font-bold mb-6 leading-tight"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}
            >
              The gap between engineering and compliance is costing you.
            </h2>
            <div
              className="space-y-4 text-base"
              style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
            >
              <p>
                Most organizations still rely on a fragmented "tool soup": Jira or any ALMs for
                tasks, Word for documentation, Excel for traceability, GitHub for code. Every
                handoff between these disconnected systems is a manual, error-prone process that
                costs days and gradually increases audit risk.
              </p>
              <p>
                The result: compliance becomes a last-minute effort rather than an ongoing
                discipline, and product launches slip by months. The hidden cost goes beyond time —
                it shows up as developer burnout, unexpected regulatory rejections, and audit
                findings that only emerge after inconsistency has been building for months.
              </p>
            </div>
          </div>

          {/* Tool soup visual */}
          <div
            className="relative rounded-card p-8"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--bg-border)",
            }}
          >
            <p className="label-caps mb-5">Your current tool stack</p>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded text-sm font-medium"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
            {/* Disconnect arrows */}
            <div
              className="mt-6 flex items-center gap-2 rounded p-3"
              style={{
                background: "rgba(239,68,68,0.06)",
                border: "1px solid rgba(239,68,68,0.15)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="#ef4444" strokeWidth="1.5" />
                <path d="M5 8h6M8 5v6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="text-xs" style={{ color: "rgba(239,68,68,0.8)" }}>
                Manual handoffs — no automated compliance layer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
