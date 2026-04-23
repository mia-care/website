import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
};

export function GradientText({ children, className = "", as: Tag = "span" }: Props) {
  return <Tag className={`text-brand-gradient ${className}`}>{children}</Tag>;
}
