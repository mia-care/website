import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function PillTag({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold tracking-widest uppercase ${className}`}
      style={{
        background: "rgba(255,255,255,0.05)",
        borderColor: "rgba(255,255,255,0.1)",
        color: "var(--text-muted)",
        letterSpacing: "0.1em",
      }}
    >
      {children}
    </span>
  );
}
