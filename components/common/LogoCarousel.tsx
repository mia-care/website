import Image from "next/image";
import { BASE_PATH } from "@/lib/utils";

// All SVGs share viewBox 0 0 376 128 → 2.9375:1 aspect ratio
// +15% from previous 108×37
const LOGO_W = 149;
const LOGO_H = 52;

const DEFAULT_FILTER = "grayscale(1) brightness(1.8)";
// youhealthy embeds a black raster PNG — invert to white before brightening
const INVERT_FILTER = "grayscale(1) invert(1) brightness(0.85)";

const LOGOS: { src: string; alt: string; filter?: string }[] = [
  { src: `${BASE_PATH}/images/clients/Bip.svg`, alt: "Bip" },
  { src: `${BASE_PATH}/images/clients/ItaliAssistenza.svg`, alt: "Itali Assistenza" },
  { src: `${BASE_PATH}/images/clients/GVM.svg`, alt: "GVM" },
  { src: `${BASE_PATH}/images/clients/Avitaam.svg`, alt: "Avitaam" },
  { src: `${BASE_PATH}/images/clients/RBdigital.svg`, alt: "RB Digital" },
  { src: `${BASE_PATH}/images/clients/MDConsierge.svg`, alt: "MD Consierge" },
  { src: `${BASE_PATH}/images/clients/Flex.svg`, alt: "Flex" },
  { src: `${BASE_PATH}/images/clients/youhealthy.svg`, alt: "YouHealthy", filter: INVERT_FILTER },
  { src: `${BASE_PATH}/images/clients/iit.svg`, alt: "IIT" },
];

// Duplicate for seamless loop: track scrolls exactly -50% of its total width → loops invisibly
const TRACK = [...LOGOS, ...LOGOS];

export function LogoMarquee() {
  return (
    <section
      className="w-full overflow-hidden border-y py-8"
      style={{ borderColor: "var(--bg-border)" }}
      aria-label="Our clients"
    >
      <div
        className="flex items-center"
        style={{
          gap: "4rem",
          width: "max-content",
          animation: "marqueeScroll 35s linear infinite",
        }}
      >
        {/* biome-ignore lint/suspicious/noArrayIndexKey: static logo array duplicated for marquee loop */}
        {TRACK.map((logo, i) => (
          <Image
            key={`${logo.alt}-${i}`}
            src={logo.src}
            alt={i < LOGOS.length ? logo.alt : ""}
            aria-hidden={i >= LOGOS.length ? true : undefined}
            width={LOGO_W}
            height={LOGO_H}
            style={{
              filter: logo.filter ?? DEFAULT_FILTER,
              opacity: 0.7,
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
