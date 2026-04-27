"use client";

const COOKIE_NAME = "mc-cookie-consent";

export function CookiePreferencesButton() {
  const handleClick = () => {
    // biome-ignore lint/suspicious/noDocumentCookie: cookie store API unavailable in all target environments
    document.cookie = `${COOKIE_NAME}=; Max-Age=0; Path=/; SameSite=Lax; Secure`;
    location.reload();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-xs transition-colors hover:text-text-primary"
      style={{ color: "var(--text-muted)" }}
    >
      Cookie preferences
    </button>
  );
}
