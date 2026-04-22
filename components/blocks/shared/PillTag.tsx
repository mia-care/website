import { cn } from "@/lib/utils";

interface PillTagProps {
  children: React.ReactNode;
  className?: string;
}

export function PillTag({ children, className }: PillTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 label-caps",
        "bg-brand-green/8 border border-brand-green/18 text-brand-green",
        className,
      )}
    >
      {children}
    </span>
  );
}
