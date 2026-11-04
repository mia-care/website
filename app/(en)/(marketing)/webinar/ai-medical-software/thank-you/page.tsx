import type { Metadata } from "next";
import { WebinarThankYou } from "@/components/sections/webinar/WebinarThankYou";
import { webinar } from "@/data/webinar";

export const metadata: Metadata = {
  title: "Webinar Registration Confirmed | Mia-Care",
  robots: { index: false, follow: false },
};

export default function WebinarThankYouPage() {
  return (
    <WebinarThankYou
      eyebrow="Registration confirmed"
      title="You're in. See you there!"
      body="We've saved your seat. You'll get an email with the link to join, plus a reminder before the session starts."
      details={`${webinar.dateLabel} · ${webinar.timeLabel} · ${webinar.languageLabel}`}
      primary={{ label: "Explore Master AI for Compliance", href: "/capabilities/ai-compliance" }}
      secondary={{ label: "Browse resources", href: "/resources" }}
    />
  );
}
