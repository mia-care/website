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
        background: "rgba(0,240,150,0.08)",
        borderColor: "rgba(0,240,150,0.18)",
        color: "var(--brand-green)",
        letterSpacing: "0.1em",
      }}
    >
      {children}
    </span>
  );
}
