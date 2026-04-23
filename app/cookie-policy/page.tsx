import type { Metadata } from "next";
import { PillTag } from "@/components/blocks/shared/PillTag";

export const metadata: Metadata = {
  title: "Cookie Policy — Mia-Care",
  description: "Cookie policy for mia-care.io.",
};

export default function CookiePolicyPage() {
  return (
    <section className="py-20" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-6">Legal</PillTag>
        <h1
          className="font-display font-bold mb-4"
          style={{ fontSize: "clamp(32px,4vw,48px)", letterSpacing: "-0.03em" }}
        >
          Cookie Policy
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
          Last updated: April 2026
        </p>
        <div
          className="space-y-6 text-sm"
          style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
        >
          <p>
            This Cookie Policy explains how Mia Care srl uses cookies and similar tracking
            technologies on mia-care.io.
          </p>
          <h2
            className="font-display font-semibold text-base mt-8 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            What are cookies?
          </h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help
            us recognize your browser and remember certain information to improve your experience.
          </p>
          <h2
            className="font-display font-semibold text-base mt-8 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Cookies we use
          </h2>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Essential cookies</strong> — necessary
            for the website to function. They cannot be disabled.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Analytics cookies</strong> — help us
            understand how visitors interact with our site (e.g., Google Analytics via GTM). Only
            set with your consent.
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Marketing cookies</strong> — used to
            deliver relevant advertisements. Only set with your consent.
          </p>
          <h2
            className="font-display font-semibold text-base mt-8 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Managing cookies
          </h2>
          <p>
            You can manage or withdraw consent at any time by clearing your browser storage or
            adjusting your browser settings. For questions, contact{" "}
            <a href="mailto:privacy@mia-care.io" style={{ color: "var(--brand-green)" }}>
              privacy@mia-care.io
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
