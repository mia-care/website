import type { Metadata } from "next";
import { CtaBanner } from "@/components/common/CtaBanner";
import { PillTag } from "@/components/common/PillTag";

export const metadata: Metadata = {
  title: "About Us — Mia-Care",
  description:
    "Mia Care is a health tech company building the AI-native compliance platform for Software as a Medical Device.",
};

export default function AboutUsPage() {
  return (
    <>
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

      <section
        className="py-20"
        style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--bg-border)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
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

      <CtaBanner />
    </>
  );
}
