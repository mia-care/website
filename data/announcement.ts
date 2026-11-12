export const announcement = {
  id: "webinar-ai-medical-software-2026",
  enabled: true,
  // End of the English session (data/webinar.ts endDate).
  expiresAt: "2026-11-30T18:30:00+01:00",
  icon: "📅",
  message: "From Algorithm to Clinic: free live webinar with Aindo, Nov 30 at 5:30 PM CET",
  link: {
    label: "Save your seat",
    href: "/webinar/ai-medical-software",
  },
} satisfies Announcement;

export type Announcement = {
  /** Unique per announcement: closing one banner does not hide the next one. */
  id: string;
  enabled: boolean;
  /** ISO 8601 date with offset. The banner stops showing from this moment on. */
  expiresAt?: string;
  icon?: string;
  message: string;
  link?: {
    label: string;
    href: string;
    external?: boolean;
  };
};

export function isAnnouncementActive(config: Announcement, now = Date.now()): boolean {
  if (!config.enabled) return false;
  if (!config.expiresAt) return true;
  return now < new Date(config.expiresAt).getTime();
}
