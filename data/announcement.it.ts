import type { Announcement } from "./announcement";

export const announcement = {
  id: "webinar-ai-medical-software-2026",
  enabled: true,
  // Fine della sessione italiana (endDate in data/webinar.it.ts).
  expiresAt: "2026-11-30T17:00:00+01:00",
  icon: "📅",
  message: "Dall'algoritmo alla clinica: webinar gratuito con Aindo, 30 novembre alle 16:00",
  link: {
    label: "Iscriviti",
    href: "/it/webinar/software-medicale-ai",
  },
} satisfies Announcement;
