import Link from "next/link";
import { PillTag } from "@/components/common/PillTag";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  /** One line each (e.g. date, then one line per time zone). */
  details: string[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export function WebinarThankYou({ eyebrow, title, body, details, primary, secondary }: Props) {
  return (
    <section
      className="py-20 flex items-center"
      style={{ background: "var(--bg-base)", minHeight: "70vh" }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="mx-auto mb-8 flex items-center justify-center w-16 h-16 rounded-full"
          style={{ background: "rgba(0,240,150,0.1)", border: "1px solid rgba(0,240,150,0.25)" }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "var(--brand-green)" }}
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <PillTag className="mb-6">{eyebrow}</PillTag>
        <h1
          className="font-display font-bold mb-4 leading-tight"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.035em" }}
        >
          {title}
        </h1>
        <p
          className="text-base mb-4 max-w-lg mx-auto"
          style={{ color: "var(--text-primary)", lineHeight: 1.75, opacity: 0.8 }}
        >
          {body}
        </p>
        <p className="text-sm font-semibold mb-10" style={{ color: "var(--brand-green)" }}>
          {details.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={primary.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:-translate-y-px"
            style={{
              background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
              color: "#0b0c10",
            }}
          >
            {primary.label}
          </Link>
          <Link
            href={secondary.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-colors"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--bg-border)",
              color: "var(--text-primary)",
            }}
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
