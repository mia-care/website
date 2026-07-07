import Image from "next/image";
import { BASE_PATH } from "@/lib/utils";

// Intrinsic size hint passed to next/image so the placeholder aspect ratio matches
// the real file before it loads — mismatches here cause a visible jump on load.
// Most SVGs share viewBox 0 0 376 128; logos with a different native ratio override
// width/height below. Actual on-screen size is controlled by each logo's className.
const LOGO_W = 376;
const LOGO_H = 128;

const LOGO_FILTER = "brightness(0) invert(1)";

const LOGOS: {
  src: string;
  alt: string;
  filter?: string;
  className?: string;
  width?: number;
  height?: number;
}[] = [
  { src: `${BASE_PATH}/images/clients/Bip.svg`, alt: "Bip" },
  { src: `${BASE_PATH}/images/clients/ItaliAssistenza.svg`, alt: "Itali Assistenza" },
  { src: `${BASE_PATH}/images/clients/GVM.svg`, alt: "GVM" },
  { src: `${BASE_PATH}/images/clients/Avitaam.svg`, alt: "Avitaam" },
  { src: `${BASE_PATH}/images/clients/RBdigital.svg`, alt: "RB Digital" },
  { src: `${BASE_PATH}/images/clients/MDConsierge.svg`, alt: "MD Consierge" },
  { src: `${BASE_PATH}/images/clients/Flex.svg`, alt: "Flex" },
  { src: `${BASE_PATH}/images/clients/youhealthy.svg`, alt: "YouHealthy" },
  { src: `${BASE_PATH}/images/clients/iit.svg`, alt: "IIT", filter: "invert(1)" },
  { src: `${BASE_PATH}/images/clients/aindo.svg`, alt: "Aindo" },
  { src: `${BASE_PATH}/images/clients/CDI.svg`, alt: "CDI" },
  { src: `${BASE_PATH}/images/clients/ONHC.svg`, alt: "ONHC" },
  { src: `${BASE_PATH}/images/clients/FastwebVodafone.svg`, alt: "Fastweb + Vodafone" },
];

// Duplicate for seamless loop: track scrolls exactly -50% of its total width → loops invisibly
const TRACK = [...LOGOS, ...LOGOS];

const MASK_STYLE = {
  maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 88%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 8%, black 88%, transparent 100%)",
};

// Both rows loop the same full logo list — a negative delay and reversed direction
// keep them out of phase so they never show the same logos at once.
function MarqueeRow({ reverse, delay }: { reverse?: boolean; delay?: string }) {
  return (
    <div className="overflow-hidden" style={MASK_STYLE}>
      <div
        className="flex items-center"
        style={{
          gap: "4rem",
          width: "max-content",
          animation: "marqueeScroll 55s linear infinite",
          animationDirection: reverse ? "reverse" : "normal",
          animationDelay: delay,
        }}
      >
        {TRACK.map((logo, i) => (
          <Image
            key={`${reverse ? "top" : "bottom"}-${logo.alt}-${i}`}
            src={logo.src}
            alt={i < LOGOS.length ? logo.alt : ""}
            aria-hidden={i >= LOGOS.length ? true : undefined}
            width={logo.width ?? LOGO_W}
            height={logo.height ?? LOGO_H}
            draggable={false}
            className={logo.className ?? "w-[110px] sm:w-[149px]"}
            style={{
              height: "auto",
              filter: logo.filter ?? LOGO_FILTER,
              opacity: 0.75,
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section
      className="w-full border-y"
      style={{ borderColor: "var(--bg-border)" }}
      aria-label="Our clients"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:py-4"
          style={{ minHeight: 80 }}
        >
          {/* Label — fixed width on desktop, full row on mobile */}
          <div className="pt-5 pb-3 sm:py-0 sm:pr-5 shrink-0 sm:w-[260px]">
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

          {/* Two scrolling rows, opposite directions, offset start */}
          <div className="flex-1 min-w-0 flex flex-col gap-2 sm:gap-3 pb-5 sm:py-0">
            <MarqueeRow reverse />
            <MarqueeRow delay="-27.5s" />
          </div>
        </div>
      </div>
    </section>
  );
}
