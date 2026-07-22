import { GatedFooter } from "@/components/layout/GatedFooter";
import { GatedNavbar } from "@/components/layout/GatedNavbar";

export default function ItalianGatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GatedNavbar locale="it" />
      {children}
      <GatedFooter locale="it" />
    </>
  );
}
