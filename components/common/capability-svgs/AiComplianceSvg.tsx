export function AiComplianceSvg() {
  const inputs = [
    { label: "Model v1.3", sub: "Training snapshot", y: 28 },
    { label: "Dataset", sub: "Quality assessment", y: 88 },
    { label: "Metrics", sub: "Performance bench.", y: 148 },
    { label: "Validation", sub: "Clinical eval.", y: 208 },
  ];

  const outputs = [
    { label: "EU AI Act", sub: "Annex IV docs", y: 52 },
    { label: "PCCP Plan", sub: "Change control", y: 128 },
    { label: "Logbook", sub: "Model version trail", y: 204 },
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
        @keyframes ai-flow { from { stroke-dashoffset: 11; } to { stroke-dashoffset: 0; } }
        @keyframes ai-pulse { 0%,100% { opacity:0.2; } 50% { opacity:0.6; } }
        @keyframes ai-blink { 0%,100% { opacity:0.3; } 50% { opacity:0.9; } }
        @keyframes ai-orbit {
          from { transform: rotate(0deg) translateX(22px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(22px) rotate(-360deg); }
        }
        .ai-line { stroke-dasharray: 6 5; animation: ai-flow 1.3s linear infinite; }
        .ai-d0 { animation-delay: 0s; }    .ai-d1 { animation-delay: 0.35s; }
        .ai-d2 { animation-delay: 0.7s; }  .ai-d3 { animation-delay: 1.05s; }
        .ai-d4 { animation-delay: 0.2s; }  .ai-d5 { animation-delay: 0.55s; }
        .ai-d6 { animation-delay: 0.9s; }
        .ai-hub-ring { animation: ai-pulse 2.2s ease-in-out infinite; }
        .ai-dot { animation: ai-blink 2.5s ease-in-out infinite; }
        .ai-n1 { animation-delay: 0s; }   .ai-n2 { animation-delay: 0.5s; }
        .ai-n3 { animation-delay: 1s; }   .ai-n4 { animation-delay: 1.5s; }
        .ai-orb { animation: ai-orbit 4s linear infinite; transform-origin: 278px 148px; transform-box: fill-box; }
        .ai-orb2 { animation: ai-orbit 6s linear infinite reverse; transform-origin: 278px 148px; transform-box: fill-box; }
      `}</style>

      <defs>
        <linearGradient
          id="ai-grad"
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
          id="ai-border"
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

      {inputs.map((inp, i) => (
        <g key={inp.label}>
          <rect
            x="8"
            y={inp.y}
            width="132"
            height="44"
            rx="6"
            fill="var(--bg-raised)"
            stroke="var(--bg-border-strong)"
            strokeWidth="1"
          />
          <circle cx="26" cy={inp.y + 14} r="4" fill="#00f096" className={`ai-dot ai-n${i + 1}`} />
          <text
            x="36"
            y={inp.y + 19}
            fontSize="11"
            fontWeight="700"
            fill="var(--text-primary)"
            fontFamily="ui-monospace,monospace"
          >
            {inp.label}
          </text>
          <text
            x="26"
            y={inp.y + 35}
            fontSize="9"
            fill="var(--text-secondary)"
            fontFamily="ui-sans-serif,sans-serif"
          >
            {inp.sub}
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
          className={`ai-line ai-d${i}`}
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
        className="ai-hub-ring"
      />
      <rect
        x="196"
        y="106"
        width="164"
        height="88"
        rx="10"
        fill="url(#ai-grad)"
        stroke="url(#ai-border)"
        strokeWidth="1"
      />
      {/* orbit rings */}
      <circle
        cx="278"
        cy="148"
        r="22"
        stroke="#00f096"
        strokeWidth="0.75"
        strokeOpacity="0.2"
        fill="none"
      />
      <circle cx="278" cy="148" r="4" fill="#00f096" fillOpacity="0.6" />
      <circle cx="300" cy="148" r="2.5" fill="#00f0f0" fillOpacity="0.7" className="ai-orb" />
      <circle cx="278" cy="126" r="2" fill="#00f096" fillOpacity="0.5" className="ai-orb2" />
      <text
        x="278"
        y="178"
        textAnchor="middle"
        fontSize="9"
        fill="var(--text-secondary)"
        fontFamily="ui-sans-serif,sans-serif"
      >
        AI Compliance Engine
      </text>
      <text
        x="278"
        y="190"
        textAnchor="middle"
        fontSize="8"
        fill="var(--text-muted)"
        fontFamily="ui-sans-serif,sans-serif"
        letterSpacing="0.04em"
      >
        EU AI Act · GMLP · PCCP · FDA
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
          className={`ai-line ai-d${i + 4}`}
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
