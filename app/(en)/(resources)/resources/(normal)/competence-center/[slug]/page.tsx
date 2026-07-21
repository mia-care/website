import { getAllResources } from "@/lib/resources";
import { CompetenceCenterRedirect } from "./redirect";

export function generateStaticParams() {
  return getAllResources().map((r) => ({ slug: r.slug }));
}

export default function Page() {
  return <CompetenceCenterRedirect />;
}
