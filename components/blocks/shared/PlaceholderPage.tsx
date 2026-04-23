import Link from "next/link";
import { PillTag } from "./PillTag";

type Props = {
  tag?: string;
  title: string;
  description?: string;
};

export function PlaceholderPage({
  tag = "Coming Soon",
  title,
  description = "This page is under construction. Check back soon.",
}: Props) {
  return (
    <section className="py-32" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <PillTag className="mb-6">{tag}</PillTag>
        <h1
          className="font-display font-bold mb-4"
          style={{ fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.035em" }}
        >
          {title}
        </h1>
        <p className="text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
        <Link
          href="/request-demo"
          className="inline-flex items-center h-12 px-7 rounded-lg font-semibold text-sm bg-brand-gradient text-bg-base transition-opacity hover:opacity-90"
        >
          Request a Demo →
        </Link>
      </div>
    </section>
  );
}
