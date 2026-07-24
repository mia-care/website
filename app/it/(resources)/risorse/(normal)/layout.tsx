import { AnnouncementBanner } from "@/components/layout/AnnouncementBanner";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { announcement } from "@/data/announcement.it";

export default function ItalianResourcesNormalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBanner config={announcement} />
      <Navbar locale="it" />
      {children}
      <Footer locale="it" />
    </>
  );
}
