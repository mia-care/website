import type { Metadata } from "next";
import { CompetenceCenterRedirect } from "./redirect";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CompetenceCenterRedirect />;
}
