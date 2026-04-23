import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/blocks/shared/PlaceholderPage";
export const metadata: Metadata = { title: "Events — Mia-Care Resources" };
export default function Page() {
  return (
    <PlaceholderPage
      tag="Resources"
      title="Coming soon."
      description="This resource is under construction. Check back soon."
    />
  );
}
