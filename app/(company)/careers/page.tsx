import type { Metadata } from "next";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PillTag } from "@/components/common/PillTag";
import { JobAccordion } from "@/components/sections/careers/JobAccordion";
import { getAllJobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Careers — Join the Healthcare Revolution | Mia-Care",
  description:
    "Join Mia-Care and help build the AI-native compliance platform for Software as a Medical Device. Open positions in Milan: Solution Architect, CSM, Product Owner, Software Engineer.",
};

const VALUES = [
  {
    title: "Transparency and Inclusion",
    body: "An inclusive work environment helps people feel appreciated and encourages creativity. We also strive to maintain the highest openness between managers and teams.",
  },
  {
    title: "Teamwork",
    body: "People are the real value of the company. Mia-Care teams work in Agile and are always keen to grow and improve through continuous discussion and training.",
  },
  {
    title: "Passion for Code and Care",
    body: "Writing high-quality code and continuously improving are the main pillars of our job. Nonetheless, we are sincerely committed to improving the quality of care for all people.",
  },
];

export default function CareersPage() {
  const jobs = getAllJobs();
  return (
    <>
      {/* Hero */}
      <section
        className="pt-20 pb-16"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,240,150,0.07) 0%, transparent 55%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-6">Career</PillTag>
          <h1
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: "clamp(36px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
          >
            Join the healthcare revolution
          </h1>
          <p
            className="text-lg max-w-2xl mb-8"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            Work in an inspiring workplace that meets social values and offers an agile company
            culture. Be proud of your job and share your aspirations with colleagues and managers
            with total transparency.
          </p>
          <a
            href="#open-positions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:-translate-y-px"
            style={{
              background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
              color: "#0b0c10",
            }}
          >
            See open positions ↓
          </a>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-10"
            style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}
          >
            What we pursue
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl"
                style={{ background: "var(--bg-raised)", border: "1px solid var(--bg-border)" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold mb-4"
                  style={{
                    background: "rgba(0,240,150,0.1)",
                    border: "1px solid rgba(0,240,150,0.2)",
                    color: "var(--brand-green)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2
                  className="font-display font-bold text-base mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {v.title}
                </h2>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job positions */}
      <section
        id="open-positions"
        className="py-20"
        style={{ borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "var(--text-muted)", letterSpacing: "0.12em" }}
          >
            Job Positions
          </p>
          <h2
            className="font-display font-bold mb-10"
            style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.03em" }}
          >
            Open roles
          </h2>

          <JobAccordion jobs={jobs} />

          {/* Spontaneous application */}
          <div
            className="mt-10 p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{
              background: "rgba(0,240,150,0.04)",
              border: "1px solid rgba(0,240,150,0.14)",
            }}
          >
            <div>
              <h3
                className="font-display font-bold text-lg mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                Interested in joining us?
              </h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Don't see a role that fits? Apply spontaneously — we're always looking for great
                people.
              </p>
            </div>
            <a
              href="mailto:info@mia-care.io?subject=Spontaneous Application"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all hover:-translate-y-px"
              style={{
                border: "1px solid var(--bg-border-strong)",
                color: "var(--text-primary)",
              }}
            >
              Apply now →
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
