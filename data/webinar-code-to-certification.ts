// Webinar "From Code to Certification", with Scarlet, 28 Jan 2027 (English only).
// Types and the shared Marzio Ghezzi speaker live in data/webinar.ts.
import { SPEAKER_MARZIO, type WebinarContent, type WebinarSpeaker } from "@/data/webinar";

const DIR = "/images/webinars/code-to-certification";

export const SPEAKER_STEVEN: WebinarSpeaker = {
  name: "Steven Byrne",
  role: "Principal SaMD Expert",
  company: "Scarlet",
  photo: `${DIR}/steven-byrne.webp`,
  bio: "Steven Byrne is Scarlet's Principal SaMD Expert, creating and delivering technical content and providing expertise on SaMD & AI medical devices. Before joining Scarlet, he spent his career building medical device software, ranging from embedded software to standalone software & AI as a medical device products. He holds a BSc in Computer Science from University College Dublin, an MSc in Software Engineering from NUI Maynooth, and a PhD in Electronic Engineering from Queen's University Belfast.",
};

export const webinar: WebinarContent = {
  locale: "en",
  path: "/webinar/code-to-certification",
  thankYouPath: "/webinar/code-to-certification/thank-you",
  eyebrow: "Live Webinar",
  title: "From Code to Certification",
  subtitle: "Your Roadmap for AI Medical Software",
  dateLabel: "January 28, 2027",
  timeLabel: "4:00 PM GMT (UK Time) | 5:00 PM CET (Europe Time) | 11:00 AM EST (US Time)",
  languageLabel: "English",
  formatLabel: "Online, free",
  // 4 PM GMT = 5 PM CET = 11 AM EST. The end time has not been announced.
  startDate: "2027-01-28T17:00:00+01:00",
  ogImage: `${DIR}/og-image.jpg`,
  abstract: [
    "AI-based healthcare solutions only create value once they reach patients, and the route to market is where many promising projects stall. Regulatory expectations are often discovered late, when evidence is missing and documentation has to be rebuilt, at a high cost in time and budget.",
    "In this educational session, Steven Byrne, Principal SaMD Expert at Scarlet, and Marzio Ghezzi, CEO of Mia-Care, bring together the notified body's view and the manufacturer's view on how to plan that route from the start: what assessors expect to see under the MDR and the EU AI Act, the gaps they find most often, the hardest challenges teams face and practical ways to address them, and the decisions to take early so that compliance stays in view throughout development and certification becomes a planned milestone rather than a late hurdle.",
  ],
  speakersHeading: "Speakers",
  speakers: [SPEAKER_MARZIO, SPEAKER_STEVEN],
  formHeading: "Save your seat",
  formNote: "Free online session. You will receive the link to join by email.",
  ctaLabel: "Register now",
  hubspotFormId: "643293c1-f4b0-4087-bac6-1bfac9e1470c",
  labels: { date: "Date", time: "Time", language: "Language", format: "Format", at: "at" },
};
