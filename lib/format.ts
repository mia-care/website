export function formatDate(dateStr: string, locale: "en" | "it" = "en"): string {
  return new Date(dateStr).toLocaleDateString(locale === "it" ? "it-IT" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
