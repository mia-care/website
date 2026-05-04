export function SecureSoftwareSvg() {
  const deps = [
    { label: "openssl", sub: "v3.1.4  ·  no CVE", y: 28 },
    { label: "libpng", sub: "v1.6.40 ·  no CVE", y: 88 },
    { label: "zlib", sub: "v1.2.13 ·  SBOM tracked", y: 148 },
    { label: "curl", sub: "v8.4.0  ·  no CVE", y: 208 },
  ];

  const outputs = [
    { label: "SBOM", sub: "Live inventory", y: 52 },
    { label: "CVE Scan", sub: "0 critical findings", y: 128 },
    { label: "Cleared", sub: "IEC 81001-5-1 passed", y: 204 },
  ];

  return (
    <svg
      viewBox="0 0 560 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <style>{`
        @keyframes sec-flow { from { stroke-dashoffset: 11; } to { stroke-dashoffset: 0; } }
        @keyframes sec-pulse { 0%,100% { opacity:0.2; } 50% { opacity:0.6; } }
        @keyframes sec-blink { 0%,100% { opacity:0.4; } 50% { opacity:1; } }
        @keyframes sec-shield {
          0%,100% { opacity:0.5; transform: scale(1); }
          50%      { opacity:1;   transform: scale(1.07); }
        }
        .sec-line { stroke-dasharray: 6 5; animation: sec-flow 1.4s linear infinite; }
        .sec-d0 { animation-delay: 0s; }    .sec-d1 { animation-delay: 0.35s; }
        .sec-d2 { animation-delay: 0.7s; }  .sec-d3 { animation-delay: 1.05s; }
        .sec-d4 { animation-delay: 0.2s; }  .sec-d5 { animation-delay: 0.55s; }
        .sec-d6 { animation-delay: 0.9s; }
        .sec-hub-ring { animation: sec-pulse 2s ease-in-out infinite; }
        .sec-dot { animation: sec-blink 2.5s ease-in-out infinite; }
        .sec-n1 { animation-delay: 0s; }   .sec-n2 { animation-delay: 0.5s; }
        .sec-n3 { animation-delay: 1s; }   .sec-n4 { animation-delay: 1.5s; }
        .sec-shield { animation: sec-shield 2.5s ease-in-out infinite; transform-origin: 278px 145px; transform-box: fill-box; }
      `}</style>

      <defs>
        <linearGradient
          id="sec-grad"
          x1="196"
          y1="106"
          x2="360"
          y2="194"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00f096" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#00f0f0" stopOpacity="0.07" />
        </linearGradient>
        <linearGradient
          id="sec-border"
          x1="196"
          y1="106"
          x2="360"
          y2="194"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00f096" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00f0f0" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {deps.map((dep, i) => (
        <g key={dep.label}>
          <rect
            x="8"
            y={dep.y}
            width="132"
            height="44"
            rx="6"
            fill="var(--bg-raised)"
            stroke="var(--bg-border-strong)"
            strokeWidth="1"
          />
          <circle
            cx="26"
            cy={dep.y + 14}
            r="4"
            fill="#00f096"
            className={`sec-dot sec-n${i + 1}`}
          />
          <text
            x="36"
            y={dep.y + 19}
            fontSize="10"
            fontWeight="700"
            fill="var(--text-primary)"
            fontFamily="ui-monospace,monospace"
          >
            {dep.label}
          </text>
          <text
            x="26"
            y={dep.y + 35}
            fontSize="8.5"
            fill="var(--text-secondary)"
            fontFamily="ui-monospace,monospace"
          >
            {dep.sub}
          </text>
        </g>
      ))}

      {[50, 110, 170, 230].map((cy, i) => (
        <path
          key={cy}
          d={`M 140,${cy} C 168,${cy} 168,150 196,150`}
          stroke="#00f096"
          strokeWidth="1"
          strokeOpacity="0.55"
          className={`sec-line sec-d${i}`}
        />
      ))}

      <rect
        x="188"
        y="98"
        width="180"
        height="104"
        rx="14"
        fill="none"
        stroke="#00f096"
        strokeWidth="8"
        strokeOpacity="0.08"
        className="sec-hub-ring"
      />
      <rect
        x="196"
        y="106"
        width="164"
        height="88"
        rx="10"
        fill="url(#sec-grad)"
        stroke="url(#sec-border)"
        strokeWidth="1"
      />
      {/* shield icon */}
      <path
        d="M278 116 L290 121 L290 133 Q290 141 278 146 Q266 141 266 133 L266 121 Z"
        fill="none"
        stroke="#00f096"
        strokeWidth="1.2"
        strokeOpacity="0.7"
        className="sec-shield"
      />
      <path
        d="M273 132 L277 136 L284 129"
        stroke="#00f096"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
        className="sec-shield"
      />
      <text
        x="278"
        y="160"
        textAnchor="middle"
        fontSize="9"
        fill="var(--text-secondary)"
        fontFamily="ui-sans-serif,sans-serif"
      >
        Security Scan Engine
      </text>
      <text
        x="278"
        y="176"
        textAnchor="middle"
        fontSize="8"
        fill="var(--text-muted)"
        fontFamily="ui-sans-serif,sans-serif"
        letterSpacing="0.04em"
      >
        IEC 81001-5-1 · IEC 62304
      </text>
      <text
        x="278"
        y="188"
        textAnchor="middle"
        fontSize="8"
        fill="var(--text-muted)"
        fontFamily="ui-sans-serif,sans-serif"
      >
        SBOM · CVE · Guardrails
      </text>

      {[
        { d: `M 360,150 C 388,150 388,74  416,74` },
        { d: `M 360,150 L 416,150` },
        { d: `M 360,150 C 388,150 388,226 416,226` },
      ].map(({ d }, i) => (
        <path
          key={d}
          d={d}
          stroke="#00f0f0"
          strokeWidth="1"
          strokeOpacity="0.55"
          className={`sec-line sec-d${i + 4}`}
        />
      ))}

      {outputs.map((out) => (
        <g key={out.label}>
          <rect
            x="416"
            y={out.y}
            width="136"
            height="44"
            rx="6"
            fill="var(--bg-raised)"
            stroke="var(--bg-border-strong)"
            strokeWidth="1"
          />
          <circle
            cx="434"
            cy={out.y + 14}
            r="8"
            fill="rgba(0,240,150,0.10)"
            stroke="#00f096"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <path
            d={`M ${429.5} ${out.y + 14} L ${433} ${out.y + 17.5} L ${439} ${out.y + 10.5}`}
            stroke="#00f096"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="448"
            y={out.y + 19}
            fontSize="11"
            fontWeight="700"
            fill="var(--text-primary)"
            fontFamily="ui-sans-serif,sans-serif"
          >
            {out.label}
          </text>
          <text
            x="434"
            y={out.y + 35}
            fontSize="9"
            fill="var(--text-secondary)"
            fontFamily="ui-sans-serif,sans-serif"
          >
            {out.sub}
          </text>
        </g>
      ))}

      <circle cx="196" cy="150" r="3" fill="#00f096" opacity="0.7" />
      <circle cx="360" cy="150" r="3" fill="#00f0f0" opacity="0.7" />
    </svg>
  );
}
