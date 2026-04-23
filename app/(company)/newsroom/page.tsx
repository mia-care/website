import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";
export const metadata: Metadata = { title: "Newsroom — Mia-Care" };
export default function NewsroomPage() {
  return <PlaceholderPage tag="Newsroom" title="Latest news from Mia-Care." />;
}
