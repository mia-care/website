import Link from "next/link";
import type { ReactNode } from "react";

// Minimal inline markup for data-driven copy: **bold** and [label](href).
const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

export function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    const start = m.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    if (m[1] !== undefined) {
      nodes.push(
        <strong key={start} style={{ color: "var(--text-primary)", fontWeight: 600 }}>
          {m[1]}
        </strong>,
      );
    } else {
      nodes.push(
        <Link
          key={start}
          href={m[3]}
          className="underline underline-offset-2 transition-colors hover:text-brand-green"
          style={{ color: "var(--text-primary)" }}
        >
          {m[2]}
        </Link>,
      );
    }
    last = start + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
