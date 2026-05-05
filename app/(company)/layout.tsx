import { AnnouncementBanner } from "@/components/layout/AnnouncementBanner";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { announcement } from "@/data/announcement";

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBanner config={announcement} />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
