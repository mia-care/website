"use client";

import { useRef, useState } from "react";

export function HeroProductPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setTilt({ x: dx * 7, y: -dy * 4 });
  }

  function onMouseEnter() {
    setHovered(true);
  }

  function onMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }

  return (
    <div
      ref={containerRef}
      style={{ perspective: "1200px", perspectiveOrigin: "center center" }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Float layer — pauses on hover so tilt feels snappy */}
      <div
        style={{
          animation: hovered ? "none" : "heroFloat 5s ease-in-out infinite",
          willChange: "transform",
        }}
      >
        {/* Tilt layer */}
        <div
          style={{
            transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
            transition: hovered ? "transform 0.08s ease-out" : "transform 0.6s ease-out",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Outer ring + shadow */}
          <div
            style={{
              borderRadius: 14,
              boxShadow: `
                0 0 0 1px rgba(0,240,150,${hovered ? "0.25" : "0.14"}),
                0 50px 100px rgba(0,0,0,0.8),
                0 0 140px rgba(0,240,150,${hovered ? "0.12" : "0.05"})
              `,
              overflow: "hidden",
              transition: "box-shadow 0.35s ease",
            }}
          >
            {/* Browser chrome bar */}
            <div
              style={{
                background: "#13151A",
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                gap: 7,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
                {(["#FF5F57", "#FEBC2E", "#28C840"] as const).map((color) => (
                  <span
                    key={color}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: color,
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  background: "#1C1E26",
                  borderRadius: 5,
                  padding: "3px 10px",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.28)",
                  textAlign: "center",
                  fontFamily: "ui-monospace, monospace",
                  letterSpacing: "0.01em",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                app.p4samd.com
              </div>
            </div>

            {/* Screenshot + dissolve mask */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/website/images/capability-svgs/heroHomepage.svg"
                alt=""
                aria-hidden="true"
                width={908}
                height={908}
                style={{
                  width: "100%",
                  display: "block",
                  userSelect: "none",
                  pointerEvents: "none",
                  maxHeight: 400,
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
              {/* Dissolve into hero background */}
              <div
                style={{
                  position: "absolute",
                  inset: "auto 0 0 0",
                  height: "60%",
                  background: "linear-gradient(to bottom, transparent 0%, #0b0c10 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
