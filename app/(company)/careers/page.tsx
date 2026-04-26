import type { Metadata } from "next";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PillTag } from "@/components/common/PillTag";
import type { Job } from "@/components/sections/careers/JobAccordion";
import { JobAccordion } from "@/components/sections/careers/JobAccordion";

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

const OFFER_COMMON = [
  "Hybrid workplace — 50% smart working, 50% in-office",
  "Inclusive environment with a strong DE&I commitment",
  "Training path and access to Mia-Platform learning hub",
  "Creative and agile work environment",
  "Team building events and company perks",
  "Ticket restaurants",
  "Corporate benefits: gyms, travel, technology, language courses",
];

const JOBS: Job[] = [
  {
    title: "Solution Architect",
    type: "Full time",
    location: "Milan",
    summary: "We seek talents who translate business needs into tailored IT solutions.",
    applyEmail: "info@mia-care.io",
    role: "We are looking for a Solution Architect who can create the overall vision and strategy for a specific solution to a business problem or need. You will design, describe, and manage the solution, acting as a bridge between a business problem and the technology solution. You will help both potential and existing customers understand and implement their internal solutions using Mia-Platform's and Mia-Care's products.",
    sections: [
      {
        heading: "Activities",
        items: [
          "Work with customers to understand their needs and outline how Mia-Care's solutions could help",
          "Suggest how to reduce cloud-native complexities and make infrastructure transparent to customer devs",
          "Design software architecture for the Digital Platform using Mia-Platform runtime components",
          "Assist customer teams in designing SaMD solutions using Mia-Care's platform",
          "Define and implement a POC on Mia-Platform that solves real customer problems",
          "Work closely with R&D, Delivery, and Sales/Pre-Sales teams to provide product feedback",
          "Support Mia-Platform partners in defining working solutions for their customers",
        ],
      },
      {
        heading: "Required Skills",
        items: [
          "Master's Degree in CS or Computer Engineering with 2+ years of relevant experience",
          "Experience with DevOps methods and tools",
          "Experience with Cloud Native technologies",
          "Experience delivering custom solutions to enterprises",
          "Excellent English communication skills",
          "Knowledge of medical device regulatory framework (ISO 13485, IEC 62304) is a plus",
        ],
      },
      { heading: "We Offer", items: OFFER_COMMON },
    ],
  },
  {
    title: "Customer Success Manager",
    type: "Full time",
    location: "Milan",
    summary: "We are looking for a Customer Success Manager to join our Mia-Care Team.",
    applyEmail: "info@mia-care.io",
    role: "As a Customer Success Manager, you will be responsible for nurturing and maintaining strong relationships with our large enterprise clients. Your primary focus will be to drive software adoption, ensure client satisfaction, and keep clients informed about product updates and enhancements — bridging the gap between our clients and our product development team.",
    sections: [
      {
        heading: "Activities",
        items: [
          "Develop and maintain strong relationships with key stakeholders within client organizations",
          "Understand and align with client's business goals to deliver tailored solutions",
          "Create adoption strategies that ensure clients derive maximum value from our software",
          "Proactively inform clients about product updates, enhancements, and new features",
          "Identify upsell and cross-sell opportunities aligned with client needs",
          "Act as primary point of contact for client concerns, working with support and technical teams",
          "Data analysis and reporting on client health and adoption",
        ],
      },
      {
        heading: "Required Skills",
        items: [
          "Bachelor's degree in a relevant field",
          "Proven experience as a CSM, Account Manager, or similar B2B role",
          "Strong understanding of the software and technology industry",
          "Excellent communication, presentation, and negotiation skills",
          "Ability to analyze data and derive actionable insights",
          "Agile enthusiast",
        ],
      },
      { heading: "We Offer", items: OFFER_COMMON },
    ],
  },
  {
    title: "Product Owner",
    type: "Full time",
    location: "Milan",
    summary:
      "We are looking for a Product Owner to manage medium/large IT projects in digital healthcare.",
    applyEmail: "info@mia-care.io",
    role: "This hybrid role combines Product Owner responsibilities (70%) with Customer Success (30%). You will work directly with clients to understand their needs and translate them into actionable product requirements, while ensuring their success with our solutions. You will be involved in functional analysis, process redesign, and management of IT projects in digital healthcare.",
    sections: [
      {
        heading: "Product Owner (70%)",
        items: [
          "Gather and analyze customer needs; translate them into clear product specifications",
          "Collaborate with the development team to define, prioritize, and refine the product backlog",
          "Create and maintain product roadmaps aligned with client objectives and Mia-Care's vision",
          "Participate in agile ceremonies: sprint planning, daily stand-ups, sprint reviews",
          "Conduct functional analysis to identify key features and improvements",
          "Manage medium/large IT projects within the digital healthcare context",
        ],
      },
      {
        heading: "Customer Success (30%)",
        items: [
          "Develop and maintain strong relationships with key stakeholders",
          "Understand client business goals and deliver tailored solutions",
          "Create comprehensive adoption strategies for maximum software value",
          "Act as primary point of contact for client concerns",
          "Identify upsell and cross-sell opportunities",
        ],
      },
      {
        heading: "Requirements",
        items: [
          "Bachelor's degree in a relevant field",
          "Proven experience as Product Owner or similar role in B2B software",
          "Excellent communication, presentation, and negotiation skills",
          "Strong project management and organizational skills",
          "Agile enthusiast — biomedical engineering background is a plus",
        ],
      },
      { heading: "We Offer", items: OFFER_COMMON },
    ],
  },
  {
    title: "Software Engineer",
    type: "Full time",
    location: "Milan",
    summary:
      "We are looking for a Software Engineer with web development skills to join one of our teams.",
    applyEmail: "info@mia-care.io",
    role: "You will be involved in the design and development of the platform used by our customers. The work includes development of software solutions for clients on top of Mia-Care, actively contributing to the evolution of the product.",
    sections: [
      {
        heading: "Required Skills",
        items: [
          "Knowledge of HTTP protocol and REST architecture for API development",
          "Node.js, Java, and other object-oriented languages",
          "Git",
          "At least one of: React, Angular, Vue",
          "Experience in unit tests or automated interface tests (Cypress, Playwright)",
          "Desire to learn and actively contribute to the company's innovation",
        ],
      },
      {
        heading: "Nice-to-Have",
        items: ["Go", "TDD", "Fastify experience", "Docker, Kubernetes"],
      },
      { heading: "We Offer", items: OFFER_COMMON },
    ],
  },
];

export default function CareersPage() {
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

          <JobAccordion jobs={JOBS} />

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
