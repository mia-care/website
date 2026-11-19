import type { Metadata } from "next";
import { WebinarPage } from "@/components/sections/webinar/WebinarPage";
import { webinar } from "@/data/webinar-code-to-certification";

const TITLE = "Webinar: From Code to Certification, Your Roadmap for AI Medical Software";
const DESCRIPTION =
  "Free webinar on January 28, 2027, 5 PM CET (4 PM GMT, 11 AM EST). Scarlet and Mia-Care on planning MDR and EU AI Act certification for AI medical software from the start.";
const OG_IMAGE = {
  url: webinar.ogImage ?? "",
  width: 1200,
  height: 675,
  alt: "From Code to Certification: live webinar with Mia-Care and Scarlet, January 28",
};

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Mia-Care` },
  description: DESCRIPTION,
  // English only: no Italian counterpart, so no hreflang alternates.
  alternates: { canonical: webinar.path },
  openGraph: {
    type: "website",
    siteName: "Mia-Care P4SaMD",
    title: TITLE,
    description: DESCRIPTION,
    url: webinar.path,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function WebinarCodeToCertificationPage() {
  return <WebinarPage webinar={webinar} />;
}
