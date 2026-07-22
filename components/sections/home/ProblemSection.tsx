"use client";

import { AlertTriangle, Clock, Layers } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PillTag } from "@/components/common/PillTag";

const PROBLEMS = {
  en: [
    {
      icon: Layers,
      title: "Fragmented tools",
      description: "Jira, ALM, GitHub, Word, Excel... every team operates in its own silo.",
    },
    {
      icon: AlertTriangle,
      title: "Manual handoffs",
      description:
        "Every transfer between systems is manual, error-prone, and invisible to auditors.",
    },
    {
      icon: Clock,
      title: "Last-minute compliance",
      description:
        "Releases slip and regulatory submissions arrive with gaps that take weeks to resolve.",
    },
  ],
  it: [
    {
      icon: Layers,
      title: "Strumenti frammentati",
      description: "Jira, ALM, GitHub, Word, Excel... ogni team opera nel proprio silo.",
    },
    {
      icon: AlertTriangle,
      title: "Passaggi manuali",
      description:
        "Ogni trasferimento tra sistemi è manuale, incline all'errore e invisibile agli auditor.",
    },
    {
      icon: Clock,
      title: "Compliance dell'ultimo minuto",
      description:
        "I rilasci slittano e le submission regolatorie arrivano con lacune che richiedono settimane per essere risolte.",
    },
  ],
};

const COPY = {
  en: {
    pill: "The Problem",
    heading: (
      <>
        Compliance is slowing your team down.
        <br />
        It shouldn&apos;t.
      </>
    ),
    cta: { label: "See how P4SaMD fixes this →", href: "/product" },
  },
  it: {
    pill: "Il Problema",
    heading: (
      <>
        La compliance sta rallentando il tuo team.
        <br />
        Non dovrebbe.
      </>
    ),
    cta: { label: "Scopri come P4SaMD lo risolve →", href: "/it/prodotto" },
  },
};

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return { ref, visible };
}

function ProblemCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) {
  const { ref, visible } = useReveal(delay);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: !visible ? "translateY(16px)" : hovered ? "translateY(-4px)" : "translateY(0)",
        transition:
          "opacity 0.5s ease-out, transform 0.3s ease-out, border-color 0.25s ease, box-shadow 0.25s ease",
        background: "var(--bg-surface)",
        border: `1px solid ${hovered ? "rgba(0, 240, 150, 0.3)" : "var(--bg-border)"}`,
        borderRadius: "16px",
        padding: "28px",
        boxShadow: hovered ? "0 8px 32px rgba(0, 240, 150, 0.08)" : "none",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "10px",
          background: "rgba(0, 240, 150, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.25s ease",
          flexShrink: 0,
        }}
      >
        <Icon size={22} style={{ color: "var(--brand-green)" }} strokeWidth={1.75} />
      </div>
      <div>
        <h3
          style={{
            color: "var(--text-primary)",
            fontWeight: 600,
            fontSize: "1rem",
            marginBottom: "8px",
            margin: "0 0 8px 0",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.9375rem",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function ProblemSection({ locale = "en" }: { locale?: "en" | "it" }) {
  const t = COPY[locale];
  const problems = PROBLEMS[locale];
  const header = useReveal(0);
  const cta = useReveal(500);

  return (
    <section
      className="relative py-14 md:py-24 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 0% 50%, rgba(0,240,150,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={header.ref}
          className="text-center mb-12"
          style={{
            opacity: header.visible ? 1 : 0,
            transform: header.visible ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          }}
        >
          <PillTag className="mb-6">{t.pill}</PillTag>
          <h2 className="heading-section">{t.heading}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {problems.map((p, i) => (
            <ProblemCard key={p.title} {...p} delay={i * 150} />
          ))}
        </div>

        <div
          ref={cta.ref}
          className="text-center"
          style={{
            opacity: cta.visible ? 1 : 0,
            transform: cta.visible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          }}
        >
          <Link
            href={t.cta.href}
            className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:text-brand-green"
            style={{ color: "var(--text-primary)" }}
          >
            {t.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
