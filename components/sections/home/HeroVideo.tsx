"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BASE_PATH } from "@/lib/utils";

const VIDEO_ID = "fiDpuEUn_lE";
const POSTER = `${BASE_PATH}/images/home/hero-video-poster.jpg`;

// Muted 20s loop cut from the master render (0:16-0:36), with a 1s crossfade so the restart is
// invisible. Self-hosted, so no YouTube UI shows in the hero. The poster is the loop's first frame.
// 1080p for desktop (retina, frame up to 1040px wide), 720p below 768px.
const LOOP_SRC = {
  desktop: `${BASE_PATH}/videos/home/hero-loop-1080.mp4`,
  mobile: `${BASE_PATH}/videos/home/hero-loop-720.mp4`,
};

const COPY = {
  en: {
    play: "Play video: P4SaMD overview",
    close: "Close video",
    dialog: "P4SaMD video",
    iframeTitle: "P4SaMD overview video",
  },
  it: {
    play: "Riproduci il video: panoramica di P4SaMD",
    close: "Chiudi il video",
    dialog: "Video P4SaMD",
    iframeTitle: "Video di panoramica di P4SaMD",
  },
};

const PLAYER_ORIGIN = "https://www.youtube-nocookie.com";

// Caption language each locale starts with. EN: none, the English text is burned into the video.
// IT: the Italian track uploaded to YouTube.
const CAPTION_LANGUAGE = { en: null, it: "it" } as const;

type CaptionTrack = { languageCode?: string };
type PlayerMessage = {
  event?: string;
  info?: { captions?: { track?: CaptionTrack; tracklist?: CaptionTrack[] } };
};

// Player with sound, opened in the modal. A fresh iframe on every open restarts the video from 0:00.
// The player API is enabled so the effect below can set the caption track.
// Only called while the modal is open, so it never runs on the server.
function modalSrc(locale: "en" | "it") {
  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    playsinline: "1",
    hl: locale,
    enablejsapi: "1",
    origin: window.location.origin,
  });
  if (locale === "it") {
    // Makes the player load its captions module even for visitors who turned captions off
    params.set("cc_load_policy", "1");
    params.set("cc_lang_pref", "it");
  }
  return `${PLAYER_ORIGIN}/embed/${VIDEO_ID}?${params}`;
}

export function HeroVideo({ locale = "en" }: { locale?: "en" | "it" }) {
  const t = COPY[locale];
  const loopRef = useRef<HTMLVideoElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loopPlaying, setLoopPlaying] = useState(false);
  const [open, setOpen] = useState(false);

  // The loop source is attached after window load to keep it off the critical path,
  // and never for visitors who prefer reduced motion (they keep the poster).
  useEffect(() => {
    const video = loopRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const start = () => {
      if (video.getAttribute("src")) return;
      // Set as a property: React does not reliably render the muted attribute, and autoplay needs it
      video.muted = true;
      video.src = window.matchMedia("(min-width: 768px)").matches
        ? LOOP_SRC.desktop
        : LOOP_SRC.mobile;
      video.play().catch(() => {
        // Autoplay refused (e.g. iOS Low Power Mode): the poster simply stays up
      });
    };

    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  // Modal: native <dialog> gives focus trapping, Esc to close and focus return for free.
  // The loop pauses while the modal plays and resumes when it closes.
  useEffect(() => {
    const dialog = dialogRef.current;
    const loop = loopRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
      loop?.pause();
      const root = document.documentElement;
      const previousOverflow = root.style.overflow;
      root.style.overflow = "hidden";
      return () => {
        root.style.overflow = previousOverflow;
      };
    }

    if (dialog.open) dialog.close();
    if (loop?.getAttribute("src")) loop.play().catch(() => {});
  }, [open]);

  // Caption track, checked once when the player reports its captions module. URL parameters are not
  // enough: YouTube turns English captions on by itself (ignoring cc_load_policy=0), and a caption
  // language the visitor picked on any YouTube embed is remembered for 30 days and wins over
  // cc_lang_pref. The track is only changed when it is not the wanted one: setting the same track
  // again reloads it and can leave the player without captions. Later reports are left alone, so
  // the CC button still works as usual.
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!open || !iframe) return;

    const post = (message: object) =>
      iframe.contentWindow?.postMessage(
        JSON.stringify({ ...message, id: 1, channel: "widget" }),
        PLAYER_ORIGIN,
      );
    let handshake: number | undefined;
    let done = false;

    // Same handshake as YouTube's iframe_api script: repeat "listening" until the player answers
    const onLoad = () => {
      let tries = 0;
      window.clearInterval(handshake);
      handshake = window.setInterval(() => {
        post({ event: "listening" });
        tries += 1;
        if (tries >= 40) window.clearInterval(handshake);
      }, 250);
    };

    const onMessage = (e: MessageEvent) => {
      if (e.source !== iframe.contentWindow || e.origin !== PLAYER_ORIGIN) return;
      if (typeof e.data !== "string") return;
      window.clearInterval(handshake);
      if (done) return;
      let data: PlayerMessage | undefined;
      try {
        data = JSON.parse(e.data);
      } catch {
        return;
      }
      const captions = data?.event === "apiInfoDelivery" ? data.info?.captions : undefined;
      if (!captions) return;
      done = true;

      const wanted = CAPTION_LANGUAGE[locale];
      if ((captions.track?.languageCode ?? null) === wanted) return;
      // An empty track turns captions off; otherwise use the player's own entry for that language
      const track = wanted
        ? (captions.tracklist?.find((tr) => tr.languageCode === wanted) ?? { languageCode: wanted })
        : {};
      post({ event: "command", func: "setOption", args: ["captions", "track", track] });
    };

    iframe.addEventListener("load", onLoad);
    window.addEventListener("message", onMessage);
    return () => {
      window.clearInterval(handshake);
      iframe.removeEventListener("load", onLoad);
      window.removeEventListener("message", onMessage);
    };
  }, [open, locale]);

  return (
    <>
      <div className="relative w-full" style={{ maxWidth: 1040, containerType: "inline-size" }}>
        {/* Ambient glow behind the glass frame (same recipe as the helix glow) */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            inset: "-12% -14% auto",
            height: "90%",
            background:
              "radial-gradient(55% 55% at 30% 60%, rgba(0,240,150,0.13), transparent 70%), radial-gradient(55% 55% at 70% 60%, rgba(0,240,240,0.13), transparent 70%)",
            filter: "blur(28px)",
          }}
        />

        {/* Only the top 3/4 of the browser frame shows: it ends on the logo marquee's top border.
            Full frame height = 1px border + 44px bar + 16:9 video + 8px bezel + 1px border. */}
        <div
          className="relative overflow-hidden"
          style={{ height: "calc(((100cqw - 18px) * 0.5625 + 54px) * 0.75)" }}
        >
          <div
            style={{
              border: "1px solid var(--bg-border-strong)",
              borderRadius: "12px 12px 0 0",
              background: "rgba(255,255,255,0.035)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "inset 0 1px 0 rgba(0,240,150,0.07), 0 24px 64px rgba(0,0,0,0.7)",
              padding: "0 8px 8px",
            }}
          >
            {/* Browser bar: window dots only */}
            <div
              aria-hidden="true"
              className="flex items-center"
              style={{ height: 44, padding: "0 6px", gap: 7 }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.16)",
                  }}
                />
              ))}
            </div>

            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "16 / 9",
                borderRadius: "6px 6px 0 0",
                border: "1px solid var(--bg-border)",
                background: "#000",
              }}
            >
              <video
                ref={loopRef}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="none"
                aria-hidden="true"
                tabIndex={-1}
                onPlaying={() => setLoopPlaying(true)}
              />
              <Image
                src={POSTER}
                alt=""
                fill
                sizes="(min-width: 1040px) 1040px, 100vw"
                className="object-cover transition-opacity duration-700"
                style={{ opacity: loopPlaying ? 0 : 1 }}
              />
              {/* The whole screen is the button; the visible play sits in the middle of the visible part */}
              <button
                type="button"
                className="hero-video-play"
                aria-label={t.play}
                aria-haspopup="dialog"
                onClick={() => setOpen(true)}
              >
                <span className="hero-video-play-circle">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6 3.8v16.4c0 .9 1 1.4 1.7.9l12.6-8.2c.7-.4.7-1.4 0-1.8L7.7 2.9C7 2.4 6 2.9 6 3.8z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="hero-video-modal"
        aria-label={t.dialog}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="flex justify-end" style={{ marginBottom: 12 }}>
          <button
            type="button"
            aria-label={t.close}
            onClick={() => setOpen(false)}
            className="grid place-items-center rounded-full bg-white/[0.06] transition-colors hover:bg-white/10"
            style={{
              width: 40,
              height: 40,
              border: "1px solid var(--bg-border-strong)",
              color: "var(--text-primary)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M2 2l8 8M10 2l-8 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div
          className="relative overflow-hidden"
          style={{
            aspectRatio: "16 / 9",
            borderRadius: 12,
            border: "1px solid var(--bg-border-strong)",
            background: "#000",
            boxShadow: "0 24px 64px rgba(0,0,0,0.7), 0 4px 16px rgba(0,0,0,0.4)",
          }}
        >
          {open && (
            <iframe
              ref={iframeRef}
              src={modalSrc(locale)}
              title={t.iframeTitle}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
            />
          )}
        </div>
      </dialog>
    </>
  );
}
