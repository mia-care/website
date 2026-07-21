"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCounterpartPath } from "@/data/locale-pairs";

const LABEL = { en: "English", it: "Italiano" };

export function LanguageSwitcher({ locale }: { locale: "en" | "it" }) {
  const pathname = usePathname();
  const target = locale === "it" ? "en" : "it";
  const counterpart = getCounterpartPath(pathname, target);

  // No translated counterpart for this page yet — show nothing rather than
  // a link that lands somewhere other than what the user expects.
  if (!counterpart) return null;

  return (
    <Link
      href={counterpart}
      className="text-sm transition-colors hover:text-text-primary"
      style={{ color: "var(--text-muted)" }}
    >
      {LABEL[target]}
    </Link>
  );
}
