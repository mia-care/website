import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** "eyebrow" (default): uppercase section label above headings.
   *  "tag": content metadata (blog categories, segments) — no uppercase. */
  variant?: "eyebrow" | "tag";
};

export function PillTag({ children, className = "", variant = "eyebrow" }: Props) {
  if (variant === "tag") {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-xs font-medium ${className}`}
        style={{
          background: "rgba(255,255,255,0.05)",
          borderColor: "rgba(255,255,255,0.1)",
          color: "var(--text-secondary)",
        }}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold tracking-widest uppercase ${className}`}
      style={{
        background: "rgba(255,255,255,0.05)",
        borderColor: "rgba(255,255,255,0.1)",
        color: "var(--text-secondary)",
        letterSpacing: "0.1em",
      }}
    >
      {children}
    </span>
  );
}
