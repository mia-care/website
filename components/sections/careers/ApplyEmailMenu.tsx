"use client";

import { ChevronDownIcon, ExternalLinkIcon, MailIcon } from "lucide-react";
import { type CSSProperties, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLinkItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type EmailClient = "gmail" | "outlook" | "mailto";

const STORAGE_KEY = "careers-apply-email-client";

const COPY = {
  en: {
    gmail: "Open in Gmail",
    outlook: "Open in Outlook",
    mailto: "Use default mail client",
    change: "Change email app",
  },
  it: {
    gmail: "Apri in Gmail",
    outlook: "Apri in Outlook",
    mailto: "Usa il client di posta predefinito",
    change: "Cambia app email",
  },
} as const;

function buildLinks(to: string, subject: string) {
  const encTo = encodeURIComponent(to);
  const encSubject = encodeURIComponent(subject);
  return {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${encTo}&su=${encSubject}`,
    outlook: `https://outlook.office.com/mail/deeplink/compose?to=${encTo}&subject=${encSubject}`,
    mailto: `mailto:${to}?subject=${encSubject}`,
  } satisfies Record<EmailClient, string>;
}

function readStoredPreference(): EmailClient | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "gmail" || stored === "outlook" || stored === "mailto" ? stored : null;
  } catch {
    return null;
  }
}

export function ApplyEmailMenu({
  to,
  subject,
  label,
  locale = "en",
  className,
  style,
  chevronClassName = "inline-flex items-center justify-center rounded-lg border border-bg-border-strong px-2 text-text-secondary transition-colors hover:bg-white/10",
  chevronStyle,
}: {
  to: string;
  subject: string;
  label: string;
  locale?: "en" | "it";
  className?: string;
  style?: CSSProperties;
  chevronClassName?: string;
  chevronStyle?: CSSProperties;
}) {
  const t = COPY[locale];
  const links = buildLinks(to, subject);
  const [preferred, setPreferred] = useState<EmailClient | null>(null);

  useEffect(() => {
    setPreferred(readStoredPreference());
  }, []);

  function remember(client: EmailClient) {
    setPreferred(client);
    try {
      localStorage.setItem(STORAGE_KEY, client);
    } catch {
      // preference just won't persist across visits
    }
  }

  const options = (
    <DropdownMenuContent align="start">
      <DropdownMenuLinkItem
        href={links.gmail}
        target="_blank"
        rel="noopener"
        onClick={() => remember("gmail")}
      >
        <ExternalLinkIcon className="size-4 shrink-0 text-text-muted" />
        {t.gmail}
      </DropdownMenuLinkItem>
      <DropdownMenuLinkItem
        href={links.outlook}
        target="_blank"
        rel="noopener"
        onClick={() => remember("outlook")}
      >
        <ExternalLinkIcon className="size-4 shrink-0 text-text-muted" />
        {t.outlook}
      </DropdownMenuLinkItem>
      <DropdownMenuLinkItem href={links.mailto} onClick={() => remember("mailto")}>
        <MailIcon className="size-4 shrink-0 text-text-muted" />
        {t.mailto}
      </DropdownMenuLinkItem>
    </DropdownMenuContent>
  );

  if (!preferred) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className={className} style={style}>
          {label}
        </DropdownMenuTrigger>
        {options}
      </DropdownMenu>
    );
  }

  const preferredHref = links[preferred];
  const opensInNewTab = preferred !== "mailto";

  return (
    <div className="inline-flex items-stretch gap-1.5">
      <a
        href={preferredHref}
        target={opensInNewTab ? "_blank" : undefined}
        rel={opensInNewTab ? "noopener" : undefined}
        className={className}
        style={style}
      >
        {label}
      </a>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={chevronClassName}
          style={chevronStyle}
          aria-label={t.change}
        >
          <ChevronDownIcon className="size-4" />
        </DropdownMenuTrigger>
        {options}
      </DropdownMenu>
    </div>
  );
}
