import type { Metadata } from "next";
import { WebinarThankYou } from "@/components/sections/webinar/WebinarThankYou";
import { webinar } from "@/data/webinar.it";

export const metadata: Metadata = {
  title: "Iscrizione al webinar confermata | Mia-Care",
  robots: { index: false, follow: false },
};

export default function WebinarThankYouPageIt() {
  return (
    <WebinarThankYou
      eyebrow="Iscrizione confermata"
      title="Ci vediamo al webinar!"
      body="Il tuo posto è prenotato. Riceverai una email con il link per partecipare e un promemoria prima dell'inizio."
      details={[
        `${webinar.dateLabel} · ${webinar.languageLabel}`,
        ...webinar.timeLabel.split(" | "),
      ]}
      primary={{ label: "Scopri Master AI for Compliance", href: "/it/capabilities/ai-compliance" }}
      secondary={{ label: "Esplora le risorse", href: "/it/risorse" }}
    />
  );
}
