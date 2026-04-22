import Image from "next/image";
import Link from "next/link";

const capabilities = [
  { label: "SDLC Workflow Orchestrator", href: "/capabilities/sdlc-orchestrator" },
  { label: "Automated Real-time Traceability", href: "/capabilities/artt-traceability" },
  { label: "Documentation Engine", href: "/capabilities/documentation-engine" },
  { label: "Smart Assistant (Whisper)", href: "/capabilities/smart-assistant" },
  { label: "Master AI for Compliance", href: "/capabilities/ai-compliance" },
  { label: "Brownfield Remediator", href: "/capabilities/brownfield-remediator" },
  { label: "Secure Software Development", href: "/capabilities/software-development" },
  { label: "Guided Workflows", href: "/capabilities/guided-workflows" },
];

const useCases = [
  { label: "SaMD Greenfield Development", href: "/use-cases/greenfield-samd" },
  { label: "Building High-Risk AI Software (CDSS)", href: "/use-cases/high-risk-ai-cdss" },
  { label: "Legacy Software Remediation", href: "/use-cases/legacy-remediation" },
];

const resources = [
  { label: "Competence Center", href: "/resources/competence-center" },
  { label: "Blog", href: "/resources/blog" },
  { label: "Docs", href: "/resources/docs" },
  { label: "Events", href: "/resources/events" },
  { label: "FAQ", href: "/resources/faq" },
];

const company = [
  { label: "About Us", href: "/about-us" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Careers", href: "/careers" },
  { label: "Certifications", href: "/certifications" },
  { label: "Sustainability", href: "/sustainability" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="label-caps text-text-muted">{heading}</p>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-bg-border bg-bg-base">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-6 lg:col-span-1">
            <Link href="/" aria-label="Mia-Care home">
              <Image
                src="/images/logo/Horizontal_Lockup_Primary.svg"
                alt="Mia-Care P4SaMD"
                width={120}
                height={28}
              />
            </Link>
            <p className="text-sm leading-relaxed text-text-secondary">
              The AI-native platform for Software as a Medical Device compliance.
            </p>
            <Link
              href="/request-demo"
              className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-bg-base transition-opacity hover:opacity-90"
            >
              Request a Demo →
            </Link>
          </div>

          <FooterColumn heading="Capabilities" links={capabilities} />
          <FooterColumn heading="Use Cases" links={useCases} />
          <FooterColumn heading="Resources" links={resources} />
          <FooterColumn heading="Company" links={company} />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-bg-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Mia-Care S.r.l. All rights reserved.
          </p>
          <div className="flex gap-5">
            {legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-text-muted transition-colors hover:text-text-secondary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
