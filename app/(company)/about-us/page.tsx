import type { Metadata } from "next";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PillTag } from "@/components/common/PillTag";

export const metadata: Metadata = {
  title: "About Us — Mia-Care",
  description:
    "Mia Care is a health tech company headquartered in Milan, Italy, building the AI-native compliance platform for Software as a Medical Device.",
};

const STATS = [
  { value: "80+", label: "Ready-to-use microservices" },
  { value: "1M+", label: "API requests per month" },
  { value: "100+", label: "Developers on Mia-Care suite" },
  { value: "1K+", label: "Patients managed monthly" },
];

const LEADERSHIP = [
  {
    name: "Marzio Ghezzi",
    role: "COO & Co-founder",
    bio: "Executive Director with international experience in Health Tech, Medical Device and Pharma. Led strategic technology initiatives in Europe and the US including PaaS and SaaS solutions for connected drug delivery devices, digital therapeutics and decentralized clinical trials. Holds a Master in Engineering and an Executive MBA.",
    linkedin: "https://www.linkedin.com/company/mia-care",
    initials: "MG",
  },
  {
    name: "Giulio Roggero",
    role: "CTO & Co-founder",
    bio: "25 years of experience in software engineering. Serial entrepreneur, co-founder and CTO at Mia-Platform — named Gartner Cool Vendor for Software Engineering Technologies. Principal focus: cloud native, platform engineering, data fabric and omnichannel experience.",
    linkedin: "https://www.linkedin.com/company/mia-care",
    initials: "GR",
  },
  {
    name: "Francesco Soncini Sessa",
    role: "CFO & Head of Strategic Alliances",
    bio: "Experienced businessman with strong background in IT, supply chain and services. Deep expertise in supply chain digital transformation. MSc in Computer Science from Politecnico di Milano and Executive MBA from Bocconi SDA.",
    linkedin: "https://www.linkedin.com/company/mia-care",
    initials: "FS",
  },
];

export default function AboutUsPage() {
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
          <PillTag className="mb-6">Company</PillTag>
          <h1
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: "clamp(36px, 4.5vw, 58px)", letterSpacing: "-0.035em" }}
          >
            We believe regulated software development shouldn't be a bottleneck.
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}
          >
            Mia Care is a health tech company headquartered in Milan, Italy. We build P4SaMD — the
            AI-native platform that embeds regulatory compliance directly into the software
            development lifecycle for medical device manufacturers worldwide.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          borderTop: "1px solid var(--bg-border)",
          borderBottom: "1px solid var(--bg-border)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="py-8 px-4 text-center"
                style={{
                  borderRight: i < STATS.length - 1 ? "1px solid var(--bg-border)" : undefined,
                }}
              >
                <div className="font-display font-bold text-3xl mb-1 text-brand-gradient">
                  {s.value}
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-20" style={{ background: "var(--bg-surface)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2
              className="font-display font-bold text-2xl mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Why Mia-Care
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Mia-Care has originated to contribute to humanity's health and well-being by providing
              the most effective care experience to every patient and doctor. We bring healthcare
              innovation to success with a modern architecture that enables ever-expanded,
              interconnected, secure, and intelligent data-driven digital services.
            </p>
          </div>

          <div>
            <h2
              className="font-display font-bold text-2xl mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Our mission
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              We believe that the gap between engineering excellence and regulatory compliance is an
              artificial one — the product of decades of disconnected tooling and manual processes.
              Our mission is to eliminate that gap entirely, making compliance the default output of
              great software development, not a separate, painful phase that follows it.
            </p>
          </div>

          <div>
            <h2
              className="font-display font-bold text-2xl mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Our approach
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              P4SaMD is built by a team with deep expertise in both regulated software development
              and AI engineering. We've seen the problem from the inside — as developers, as
              regulatory affairs professionals, as QMS architects — and we built the platform we
              always wished existed.
            </p>
          </div>

          <div>
            <h2
              className="font-display font-bold text-2xl mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Company details
            </h2>
            <div
              className="rounded-card p-6 text-sm space-y-2"
              style={{
                background: "var(--bg-raised)",
                border: "1px solid var(--bg-border)",
                color: "var(--text-secondary)",
              }}
            >
              <p>
                <strong style={{ color: "var(--text-primary)" }}>Legal name:</strong> Mia Care srl
              </p>
              <p>
                <strong style={{ color: "var(--text-primary)" }}>Registered address:</strong> Via
                Leopardi, 8 — 20123 Milan, Italy
              </p>
              <p>
                <strong style={{ color: "var(--text-primary)" }}>VAT number:</strong> IT 11504530962
              </p>
              <p>
                <strong style={{ color: "var(--text-primary)" }}>Contact:</strong>{" "}
                <a href="mailto:info@mia-care.io" style={{ color: "var(--brand-green)" }}>
                  info@mia-care.io
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20" style={{ borderTop: "1px solid var(--bg-border)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillTag className="mb-6">Leadership Team</PillTag>
          <h2
            className="font-display font-bold mb-12"
            style={{ fontSize: "clamp(24px, 3vw, 38px)", letterSpacing: "-0.03em" }}
          >
            The people behind Mia-Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP.map((person) => (
              <div
                key={person.name}
                className="flex flex-col p-6 rounded-2xl"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full mb-4 font-display font-bold text-sm"
                  style={{
                    background: "rgba(0,240,150,0.1)",
                    border: "1px solid rgba(0,240,150,0.2)",
                    color: "var(--brand-green)",
                  }}
                >
                  {person.initials}
                </div>
                <p
                  className="font-display font-bold text-base mb-0.5"
                  style={{ color: "var(--text-primary)" }}
                >
                  {person.name}
                </p>
                <p className="text-xs mb-4" style={{ color: "var(--brand-green)" }}>
                  {person.role}
                </p>
                <p
                  className="text-sm flex-1"
                  style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
                >
                  {person.bio}
                </p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:text-brand-green"
                  style={{ color: "var(--text-muted)" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
