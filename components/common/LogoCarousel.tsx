import Image from "next/image";
import { BASE_PATH } from "@/lib/utils";

// All SVGs share viewBox 0 0 376 128 → 2.9375:1 aspect ratio
// +15% from previous 108×37
const LOGO_W = 149;
const LOGO_H = 52;

const LOGO_FILTER = "brightness(0) invert(1)";

const LOGOS: { src: string; alt: string }[] = [
  { src: `${BASE_PATH}/images/clients/Bip.svg`, alt: "Bip" },
  { src: `${BASE_PATH}/images/clients/ItaliAssistenza.svg`, alt: "Itali Assistenza" },
  { src: `${BASE_PATH}/images/clients/GVM.svg`, alt: "GVM" },
  { src: `${BASE_PATH}/images/clients/Avitaam.svg`, alt: "Avitaam" },
  { src: `${BASE_PATH}/images/clients/RBdigital.svg`, alt: "RB Digital" },
  { src: `${BASE_PATH}/images/clients/MDConsierge.svg`, alt: "MD Consierge" },
  { src: `${BASE_PATH}/images/clients/Flex.svg`, alt: "Flex" },
  { src: `${BASE_PATH}/images/clients/youhealthy.svg`, alt: "YouHealthy" },
  { src: `${BASE_PATH}/images/clients/iit.svg`, alt: "IIT" },
];

// Duplicate for seamless loop: track scrolls exactly -50% of its total width → loops invisibly
const TRACK = [...LOGOS, ...LOGOS];

export function LogoMarquee() {
  return (
    <section
      className="w-full border-y"
      style={{ borderColor: "var(--bg-border)" }}
      aria-label="Our clients"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center" style={{ minHeight: 80 }}>
          {/* Label — fixed width on desktop, full row on mobile */}
          <div
            className="pt-5 pb-3 sm:py-0 sm:pr-8 shrink-0"
            style={{ width: "auto", minWidth: 210 }}
          >
            <p className="label-caps" style={{ color: "var(--text-muted)" }}>
              Trusted by
            </p>
            <p className="label-caps mt-0.5" style={{ color: "var(--text-secondary)" }}>
              healthcare organizations worldwide
            </p>
          </div>

          {/* Divider — visible only on desktop */}
          <div
            className="hidden sm:block shrink-0"
            style={{ width: 1, height: 32, background: "var(--bg-border)" }}
            aria-hidden="true"
          />

          {/* Scrolling logos — fades on both edges */}
          <div
            className="flex-1 overflow-hidden pb-5 sm:py-0"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 88%, transparent 100%)",
            }}
          >
            <div
              className="flex items-center"
              style={{
                gap: "4rem",
                width: "max-content",
                animation: "marqueeScroll 35s linear infinite",
              }}
            >
              {TRACK.map((logo, i) => (
                <Image
                  key={`${logo.alt}-${i}`}
                  src={logo.src}
                  alt={i < LOGOS.length ? logo.alt : ""}
                  aria-hidden={i >= LOGOS.length ? true : undefined}
                  width={LOGO_W}
                  height={LOGO_H}
                  className="w-[110px] sm:w-[149px]"
                  style={{
                    height: "auto",
                    filter: LOGO_FILTER,
                    opacity: 0.75,
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
