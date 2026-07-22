"use client";

import { useEffect, useRef, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type JobSection = {
  heading: string;
  items: string[];
};

export type Job = {
  slug: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  role: string;
  sections: JobSection[];
  applyEmail: string;
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{
        transition: "transform 0.25s ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        flexShrink: 0,
      }}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function JobBadges({ job }: { job: Job }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-1">
      <span className="font-display font-bold text-base" style={{ color: "var(--text-primary)" }}>
        {job.title}
      </span>
      <span
        className="text-xs px-2 py-0.5 rounded-full font-medium"
        style={{
          background: "var(--bg-raised)",
          border: "1px solid var(--bg-border)",
          color: "var(--text-secondary)",
        }}
      >
        {job.type}
      </span>
      <span
        className="text-xs px-2 py-0.5 rounded-full font-medium"
        style={{
          background: "var(--bg-raised)",
          border: "1px solid var(--bg-border)",
          color: "var(--text-secondary)",
        }}
      >
        📍 {job.location}
      </span>
    </div>
  );
}

const COPY = {
  en: { applySubject: "Application", apply: "Apply for this role →", close: "Close" },
  it: { applySubject: "Candidatura", apply: "Candidati per questo ruolo →", close: "Chiudi" },
};

function JobBody({ job, locale = "en" }: { job: Job; locale?: "en" | "it" }) {
  const t = COPY[locale];
  return (
    <>
      <div className="pt-5 pb-4">
        <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
          {job.role}
        </p>
      </div>

      <div className="space-y-5">
        {job.sections.map((section) => (
          <div key={section.heading}>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--text-secondary)", letterSpacing: "0.1em" }}
            >
              {section.heading}
            </h4>
            <ul className="space-y-1.5">
              {section.items.map((item) => (
                <li
                  key={item.slice(0, 40)}
                  className="flex gap-2 text-sm"
                  style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
                >
                  <span style={{ color: "var(--text-muted)", flexShrink: 0, marginTop: 1 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-7">
        <a
          href={`mailto:${job.applyEmail}?subject=${t.applySubject}: ${encodeURIComponent(job.title)}`}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all hover:-translate-y-px"
          style={{
            background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
            color: "#0b0c10",
          }}
        >
          {t.apply}
        </a>
      </div>
    </>
  );
}

function JobCard({ job, locale = "en" }: { job: Job; locale?: "en" | "it" }) {
  const t = COPY[locale];
  const [open, setOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === `#${job.slug}`) {
      setOpen(true);
      setSheetOpen(true);
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  }, [job.slug]);

  function setHash(value: string | null) {
    history.replaceState(null, "", value ? `#${value}` : location.pathname + location.search);
  }

  function handleDesktopToggle() {
    const next = !open;
    setOpen(next);
    if (next) {
      setHash(job.slug);
    } else if (window.location.hash === `#${job.slug}`) {
      setHash(null);
    }
  }

  function handleSheetChange(next: boolean) {
    setSheetOpen(next);
    if (next) {
      setHash(job.slug);
    } else if (window.location.hash === `#${job.slug}`) {
      setHash(null);
    }
  }

  const cardStyle = {
    background: "var(--bg-surface)",
    border: open ? "1px solid rgba(0,240,150,0.25)" : "1px solid var(--bg-border)",
    scrollMarginTop: "calc(var(--banner-h, 40px) + 5rem)",
  };

  return (
    <div
      id={job.slug}
      ref={cardRef}
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={cardStyle}
    >
      {/* ── Mobile: header is a Sheet trigger ─────────────────────────── */}
      <div className="md:hidden">
        <Sheet open={sheetOpen} onOpenChange={handleSheetChange}>
          <SheetTrigger className="w-full flex items-start gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]">
            <div className="flex-1 min-w-0">
              <JobBadges job={job} />
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {job.summary}
              </p>
            </div>
            <span style={{ color: "var(--text-muted)", marginTop: 2 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </SheetTrigger>

          <SheetContent
            side="bottom"
            showCloseButton={false}
            className="rounded-t-2xl border-0 p-0 max-h-[88vh] overflow-y-auto"
            style={{
              background: "var(--bg-surface)",
              borderTop: "1px solid var(--bg-border-strong)",
            }}
          >
            {/* Sticky header: drag handle + close */}
            <div
              className="sticky top-0 z-10 flex items-center px-4 pt-3 pb-2"
              style={{ background: "var(--bg-surface)" }}
            >
              <div className="flex-1 flex justify-center">
                <div
                  className="w-10 h-1 rounded-full"
                  style={{ background: "var(--bg-border-strong)" }}
                />
              </div>
              <SheetClose
                render={
                  <button
                    type="button"
                    className="flex items-center justify-center w-9 h-9 rounded-full transition-colors hover:bg-white/10"
                    style={{ color: "white" }}
                    aria-label={t.close}
                  />
                }
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </SheetClose>
            </div>

            <div className="px-6 pb-8">
              {/* Sheet header */}
              <div className="py-4 mb-1" style={{ borderBottom: "1px solid var(--bg-border)" }}>
                <JobBadges job={job} />
                <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                  {job.summary}
                </p>
              </div>

              <JobBody job={job} locale={locale} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* ── Desktop: accordion inline ──────────────────────────────────── */}
      <div className="hidden md:block">
        <button
          type="button"
          onClick={handleDesktopToggle}
          className="w-full flex items-start gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
          aria-expanded={open}
        >
          <div className="flex-1 min-w-0">
            <JobBadges job={job} />
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {job.summary}
            </p>
          </div>
          <span style={{ color: open ? "var(--brand-green)" : "var(--text-muted)", marginTop: 2 }}>
            <ChevronIcon open={open} />
          </span>
        </button>

        {open && (
          <div className="px-6 pb-6" style={{ borderTop: "1px solid var(--bg-border)" }}>
            <JobBody job={job} locale={locale} />
          </div>
        )}
      </div>
    </div>
  );
}

export function JobAccordion({ jobs, locale = "en" }: { jobs: Job[]; locale?: "en" | "it" }) {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard key={job.slug} job={job} locale={locale} />
      ))}
    </div>
  );
}
