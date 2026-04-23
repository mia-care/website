import type { Metadata } from "next";
import { PillTag } from "@/components/blocks/shared/PillTag";

export const metadata: Metadata = {
  title: "Privacy Policy — Mia-Care",
  description: "Privacy policy for Mia Care srl and the P4SaMD platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PillTag className="mb-6">Legal</PillTag>
        <h1
          className="font-display font-bold mb-4"
          style={{ fontSize: "clamp(32px,4vw,48px)", letterSpacing: "-0.03em" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
          Last updated: April 2026
        </p>
        <div
          className="prose space-y-6 text-sm"
          style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
        >
          <p>
            Mia Care srl ("Mia-Care", "we", "us") is the data controller for personal data collected
            through this website and the P4SaMD platform. Our registered address is Via Leopardi 8,
            20123 Milan, Italy (VAT IT 11504530962).
          </p>
          <h2
            className="font-display font-semibold text-base mt-8 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Data we collect
          </h2>
          <p>
            We collect contact information you provide when requesting a demo (name, work email,
            company, role), usage data collected via analytics cookies (with your consent), and
            technical data necessary to operate our services.
          </p>
          <h2
            className="font-display font-semibold text-base mt-8 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Legal basis
          </h2>
          <p>
            We process your data on the basis of your consent, our legitimate interest in providing
            and improving our services, and contractual necessity where applicable.
          </p>
          <h2
            className="font-display font-semibold text-base mt-8 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Your rights
          </h2>
          <p>
            Under GDPR, you have the right to access, rectify, erase, restrict, and port your data.
            To exercise these rights, contact us at{" "}
            <a href="mailto:privacy@mia-care.io" style={{ color: "var(--brand-green)" }}>
              privacy@mia-care.io
            </a>
            .
          </p>
          <h2
            className="font-display font-semibold text-base mt-8 mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Contact
          </h2>
          <p>
            For any privacy-related queries, contact our DPO at{" "}
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
