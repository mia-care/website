import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export function GradientText({ children, className, as: Tag = "span" }: GradientTextProps) {
  return <Tag className={cn("text-brand-gradient", className)}>{children}</Tag>;
}
