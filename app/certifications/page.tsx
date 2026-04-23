import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/blocks/shared/PlaceholderPage";
export const metadata: Metadata = { title: "Certifications — Mia-Care" };
export default function CertificationsPage() {
  return (
    <PlaceholderPage
      tag="Certifications"
      title="Our platform certifications and compliance posture."
    />
  );
}
