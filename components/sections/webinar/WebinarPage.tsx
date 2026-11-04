import { CalendarDays, Clock, Languages, MonitorPlay } from "lucide-react";
import Image from "next/image";
import { HubSpotForm } from "@/components/common/HubSpotForm";
import { JsonLd } from "@/components/common/JsonLd";
import { PillTag } from "@/components/common/PillTag";
import { SITE } from "@/data/site";
import { WEBINAR_HUBSPOT, type WebinarContent, type WebinarSpeaker } from "@/data/webinar";
import { assetPath } from "@/lib/asset";

function eventSchema(w: WebinarContent): Record<string, unknown> {
  const url = `${SITE.url}${w.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: w.subtitle ? `${w.title}: ${w.subtitle}` : w.title,
    description: w.abstract[0],
    startDate: w.startDate,
    endDate: w.endDate,
    inLanguage: w.locale,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: { "@type": "VirtualLocation", url },
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url,
    },
    organizer: { "@type": "Organization", name: "Mia-Care", url: SITE.url },
    performer: w.speakers.map((s) => ({
      "@type": "Person",
      name: s.name,
      jobTitle: s.role,
      worksFor: { "@type": "Organization", name: s.company },
    })),
  };
}

function SpeakerAvatar({ speaker, size }: { speaker: WebinarSpeaker; size: number }) {
  return (
    <Image
      src={assetPath(speaker.photo)}
      alt={speaker.name}
      width={size}
      height={size}
      className="rounded-full object-cover shrink-0"
      style={{ width: size, height: size, border: "1px solid var(--bg-border)" }}
    />
  );
}

export function WebinarPage({ webinar: w }: { webinar: WebinarContent }) {
  const facts = [
    { icon: CalendarDays, label: w.labels.date, value: w.dateLabel },
    { icon: Clock, label: w.labels.time, value: w.timeLabel },
    { icon: Languages, label: w.labels.language, value: w.languageLabel },
    { icon: MonitorPlay, label: w.labels.format, value: w.formatLabel },
  ];

  return (
    <section className="py-16 sm:py-20" style={{ background: "var(--bg-base)" }}>
      <JsonLd schema={eventSchema(w)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_420px] gap-10 lg:gap-16 items-start">
          {/* Left: event content */}
          <div className="min-w-0">
            <PillTag className="mb-6">{w.eyebrow}</PillTag>
            <h1
              className={`font-display font-bold leading-tight ${w.subtitle ? "mb-4" : "mb-8"}`}
              style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.035em" }}
            >
              {w.title}
            </h1>
            {w.subtitle && (
              <p
                className="font-display font-semibold mb-8"
                style={{
                  fontSize: "clamp(20px, 2.2vw, 26px)",
                  lineHeight: 1.35,
                  color: "var(--brand-green)",
                  letterSpacing: "-0.01em",
                }}
              >
                {w.subtitle}
              </p>
            )}

            {/* Key facts */}
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-8">
              {facts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-card p-3 sm:p-4"
                  style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
                >
                  <dt
                    className="flex items-center gap-1.5 text-[11px] uppercase font-semibold mb-1.5"
                    style={{ color: "var(--text-muted)", letterSpacing: "0.08em" }}
                  >
                    <Icon size={14} aria-hidden="true" style={{ color: "var(--brand-green)" }} />
                    {label}
                  </dt>
                  <dd className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {/* "A | B" values (e.g. two time zones) go on separate lines */}
                    {value.split(" | ").map((part) => {
                      // "17:30 CET (Europe Time)": the zone note goes small and muted under the time
                      const [main, note] = part.split(" (");
                      return (
                        <span key={part} className="block [&+&]:mt-1.5">
                          {main}
                          {note && (
                            <span
                              className="block font-normal text-xs"
                              style={{ color: "var(--text-muted)" }}
                            >
                              ({note}
                            </span>
                          )}
                        </span>
                      );
                    })}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Mobile shortcut to the form, which sits below the content on small screens */}
            <a
              href="#register"
              className="lg:hidden inline-flex w-full items-center justify-center px-6 py-3 mb-10 rounded-lg text-sm font-semibold"
              style={{
                background: "linear-gradient(90deg, var(--brand-green), var(--brand-cyan))",
                color: "#0b0c10",
              }}
            >
              {w.ctaLabel}
            </a>

            <div className="space-y-4 mb-12">
              {w.abstract.map((p) => (
                <p
                  key={p.slice(0, 32)}
                  className="text-base"
                  style={{ color: "var(--text-primary)", lineHeight: 1.75, opacity: 0.8 }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* What we will cover */}
            <div className="mb-12">
              <h2
                className="font-display font-semibold text-xl mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                {w.coverHeading}
              </h2>
              <ul className="space-y-4">
                {w.coverItems.map((item) => (
                  <li key={item.slice(0, 32)} className="flex items-start gap-3 text-sm">
                    <span
                      className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(0,240,150,0.1)",
                        color: "var(--brand-green)",
                        fontSize: 10,
                      }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span style={{ color: "var(--text-primary)", opacity: 0.8, lineHeight: 1.7 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Agenda */}
            <div className="mb-12">
              <h2
                className="font-display font-semibold text-xl mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                {w.agendaHeading}
              </h2>
              <ol
                className="rounded-card overflow-hidden"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
              >
                {w.agenda.map((item, i) => (
                  <li
                    key={item.time}
                    className="flex gap-4 sm:gap-6 p-4 sm:p-5"
                    style={i > 0 ? { borderTop: "1px solid var(--bg-border)" } : undefined}
                  >
                    <span
                      className="font-display font-bold text-sm sm:text-base shrink-0 min-w-12 whitespace-nowrap tabular-nums"
                      style={{ color: "var(--brand-green)" }}
                    >
                      {item.time}
                    </span>
                    <div className="min-w-0">
                      <p
                        className="font-semibold text-sm sm:text-base"
                        style={{ color: "var(--text-primary)", lineHeight: 1.5 }}
                      >
                        {item.title}
                      </p>
                      {item.speaker && (
                        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                          {item.speaker.name}, {item.speaker.role} {w.labels.at}{" "}
                          {item.speaker.company}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Speakers */}
            <div>
              <h2
                className="font-display font-semibold text-xl mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                {w.speakersHeading}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {w.speakers.map((s) => (
                  <div
                    key={s.name}
                    className="rounded-card p-5 flex items-center gap-4"
                    style={{
                      background: "var(--bg-surface)",
                      border: "1px solid var(--bg-border)",
                    }}
                  >
                    <SpeakerAvatar speaker={s} size={72} />
                    <div className="min-w-0">
                      <p
                        className="font-display font-semibold text-base"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {s.name}
                      </p>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        {s.role}
                      </p>
                      <p className="text-sm font-semibold" style={{ color: "var(--brand-green)" }}>
                        {s.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: registration form, sticky on desktop */}
          <div
            id="register"
            className="relative rounded-card p-6 sm:p-8 lg:sticky lg:top-24 scroll-mt-24"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--bg-border)",
              overflow: "hidden",
            }}
          >
            <span
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: "var(--brand-gradient)" }}
              aria-hidden="true"
            />
            <h2
              className="font-display font-semibold text-xl mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              {w.formHeading}
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
              {w.dateLabel} · {w.timeLabel}
              <br />
              {w.formNote}
            </p>
            <HubSpotForm
              portalId={WEBINAR_HUBSPOT.portalId}
              formId={w.hubspotFormId}
              region={WEBINAR_HUBSPOT.region}
              redirectTo={w.thankYouPath}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
