import { GatedFooter } from "@/components/layout/GatedFooter";
import { GatedNavbar } from "@/components/layout/GatedNavbar";

export default function ResourcesGatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GatedNavbar />
      {children}
      <GatedFooter />
    </>
  );
}
