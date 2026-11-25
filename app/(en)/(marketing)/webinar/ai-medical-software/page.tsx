import type { Metadata } from "next";
import { WebinarPage } from "@/components/sections/webinar/WebinarPage";
import { webinar } from "@/data/webinar";
import { localeAlternates } from "@/lib/seo";

const TITLE = "Webinar: From Algorithm to Clinic, AI Medical Software to Market";
const DESCRIPTION =
  "Free webinar on November 30, 2026, 5:30 PM CET (11:30 AM EST). How to bring AI medical software to market under EU MDR, IVDR, EU AI Act and FDA PCCP, with a case study by Aindo.";
const OG_IMAGE = {
  url: webinar.ogImage ?? "",
  width: 1200,
  height: 675,
  alt: "From Algorithm to Clinic: live webinar with Mia-Care and Aindo, November 30",
};

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Mia-Care` },
  description: DESCRIPTION,
  alternates: { canonical: webinar.path, languages: localeAlternates(webinar.path) },
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

export default function WebinarAiMedicalSoftwarePage() {
  return <WebinarPage webinar={webinar} />;
}
