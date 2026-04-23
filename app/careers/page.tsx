import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/blocks/shared/PlaceholderPage";
export const metadata: Metadata = { title: "Careers — Mia-Care" };
export default function CareersPage() {
  return (
    <PlaceholderPage
      tag="Careers"
      title="Join the team building compliant SaMD."
      description="We're growing. Open positions coming soon — follow us on LinkedIn for updates."
    />
  );
}
