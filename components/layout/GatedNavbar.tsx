import Image from "next/image";
import Link from "next/link";
import { BASE_PATH } from "@/lib/utils";

export function GatedNavbar() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-40 h-16 flex items-center"
      style={{
        background: "rgba(10,11,16,0.88)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid var(--bg-border)",
        boxShadow: "inset 0 1px 0 rgba(0,240,150,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center">
        <Link href="/" aria-label="Back to homepage">
          <Image
            src={`${BASE_PATH}/images/logo/Horizontal_Lockup_White.svg`}
            alt="Mia-Care P4SaMD"
            width={190}
            height={44}
            priority
          />
        </Link>
      </div>
    </header>
  );
}
