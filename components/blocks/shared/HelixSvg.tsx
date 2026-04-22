import { cn } from "@/lib/utils";

interface HelixSvgProps {
  className?: string;
  opacity?: number;
}

export function HelixSvg({ className, opacity = 0.08 }: HelixSvgProps) {
  return (
    <svg
      viewBox="0 0 200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none select-none", className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        d="M100 0 C140 50, 160 100, 100 150 C40 200, 60 250, 100 300 C140 350, 160 400, 100 450 C40 500, 60 550, 100 600"
        stroke="#00F096"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M100 0 C60 50, 40 100, 100 150 C160 200, 140 250, 100 300 C60 350, 40 400, 100 450 C160 500, 140 550, 100 600"
        stroke="#00F0F0"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
