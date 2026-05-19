export const announcement = {
  enabled: true,
  icon: "🎉",
  message: "P4SaMD v3 is here!",
  link: {
    label: "Check it out",
    href: "https://docs.mia-care.io/docs/p4samd/release-notes/v3.0",
  },
} satisfies Announcement;

export type Announcement = {
  enabled: boolean;
  icon?: string;
  message: string;
  link?: {
    label: string;
    href: string;
    external?: boolean;
  };
};
