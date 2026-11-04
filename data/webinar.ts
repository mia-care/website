// Webinar "From Algorithm to Clinic", 30 Nov 2026.
// Two separate sessions: Italian at 16:00 CET (data/webinar.it.ts) and
// English at 17:30 CET (this file). Each session has its own HubSpot form.

export type WebinarSpeaker = {
  name: string;
  role: string;
  company: string;
  photo: string;
};

export type WebinarAgendaItem = {
  time: string;
  title: string;
  speaker?: WebinarSpeaker;
};

export type WebinarContent = {
  locale: "en" | "it";
  path: string;
  thankYouPath: string;
  eyebrow: string;
  title: string;
  /** Optional line shown under the title. */
  subtitle?: string;
  dateLabel: string;
  timeLabel: string;
  languageLabel: string;
  formatLabel: string;
  /** ISO 8601 with offset, used for the Event structured data. */
  startDate: string;
  endDate: string;
  abstract: string[];
  coverHeading: string;
  coverItems: string[];
  agendaHeading: string;
  agenda: WebinarAgendaItem[];
  speakersHeading: string;
  speakers: WebinarSpeaker[];
  formHeading: string;
  formNote: string;
  ctaLabel: string;
  /** HubSpot form for this session (portal and region are in WEBINAR_HUBSPOT). */
  hubspotFormId: string;
  labels: { date: string; time: string; language: string; format: string; at: string };
};

export const WEBINAR_HUBSPOT = {
  portalId: "5308597",
  region: "eu1",
} as const;

const PHOTO_DIR = "/images/webinars/ai-medical-software";

export const SPEAKER_MARZIO: WebinarSpeaker = {
  name: "Marzio Ghezzi",
  role: "CEO",
  company: "Mia-Care",
  photo: `${PHOTO_DIR}/marzio-ghezzi.webp`,
};

export const SPEAKER_ALESSANDRO: WebinarSpeaker = {
  name: "Alessandro Di Pietro",
  role: "Head of Business Development",
  company: "Aindo",
  photo: `${PHOTO_DIR}/alessandro-di-pietro.webp`,
};

export const webinar: WebinarContent = {
  locale: "en",
  path: "/webinar/ai-medical-software",
  thankYouPath: "/webinar/ai-medical-software/thank-you",
  eyebrow: "Live Webinar",
  title: "From Algorithm to Clinic",
  subtitle: "What It Really Takes to Bring AI Medical Software to Market",
  dateLabel: "November 30, 2026",
  timeLabel: "17:30 CET (Europe Time) | 11:30 EST (U.S. Time)",
  languageLabel: "English",
  formatLabel: "Online, free",
  startDate: "2026-11-30T17:30:00+01:00",
  endDate: "2026-11-30T18:30:00+01:00",
  abstract: [
    "New technologies, AI above all, are changing what medical software can do. Computer vision and deep learning analyze X-rays, MRIs and CT scans to detect abnormalities like tumors, fractures or hemorrhages. Natural language processing (NLP) and generative AI turn unstructured doctor-patient conversations into organized electronic health records (EHRs) and support clinical decisions.",
    "These capabilities also bring complex regulatory challenges. AI models rely heavily on training data, evolve after deployment and demand continuous human oversight. Compliance is shifting fast worldwide: in Europe, MDR and IVDR now interface with the EU AI Act, while the US FDA is pushing Predetermined Change Control Plans (PCCPs) for dynamic AI models.",
    "Join our webinar to find out what it takes to bring AI-powered medical software to market successfully.",
  ],
  coverHeading: "What we will cover",
  coverItems: [
    "Key trends and governance challenges shaping software used in clinical settings and in medical devices in the AI era.",
    "End-to-end AI lifecycle management with Mia-Care capabilities (P4SaMD and Master AI), from data quality and risk assessment to validation and post-market monitoring.",
    "A practical case study: the Cardio Clinical LLM built by Aindo and Centro Cardiologico Monzino. Aindo shares how clinical-grade synthetic data removes real-patient data bottlenecks, while Mia-Care shows the compliance framework that safeguards the model's entire lifecycle.",
  ],
  agendaHeading: "Agenda",
  agenda: [
    {
      time: "17:30",
      title: "SaMD in the AI Era: New Trends and New Challenges in Medical Software",
      speaker: SPEAKER_MARZIO,
    },
    {
      time: "17:40",
      title:
        "From Algorithm to Clinical Practice: Managing the Lifecycle of AI-Enabled Medical Software with P4SaMD",
      speaker: SPEAKER_MARZIO,
    },
    {
      time: "17:55",
      title:
        "Clinical-Grade Synthetic Data: Training Models Without Waiting for the Data. A success case",
      speaker: SPEAKER_ALESSANDRO,
    },
    { time: "18:15", title: "Q&A" },
  ],
  speakersHeading: "Speakers",
  speakers: [SPEAKER_MARZIO, SPEAKER_ALESSANDRO],
  formHeading: "Save your seat",
  formNote: "Free online session. You will receive the link to join by email.",
  ctaLabel: "Register now",
  hubspotFormId: "2758d124-68ef-449b-a552-540ef89e33ce",
  labels: { date: "Date", time: "Time", language: "Language", format: "Format", at: "at" },
};
