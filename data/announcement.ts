export const announcement = {
  enabled: true,
  icon: "🎉",
  message: "This is a test banner — come say hi!",
  link: {
    label: "Learn more",
    href: "/resources/events",
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
