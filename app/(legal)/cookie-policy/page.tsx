import { permanentRedirect } from "next/navigation";

export default function CookiePolicyRedirect() {
  permanentRedirect("/privacy-policy#cookies");
}
