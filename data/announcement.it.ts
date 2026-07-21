import type { Announcement } from "./announcement";

export const announcement = {
  enabled: true,
  icon: "🎉",
  message: "P4SaMD v3 è arrivato!",
  link: {
    label: "Scopri di più",
    href: "https://docs.mia-care.io/docs/p4samd/release-notes/v3.0",
    external: true,
  },
} satisfies Announcement;
