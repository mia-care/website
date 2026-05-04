export function GuidedWorkflowsSvg() {
  const phases = [
    { label: "Requirements", sub: "SRS + URS captured", y: 28 },
    { label: "Design", sub: "Architecture docs", y: 88 },
    { label: "Implement", sub: "Code + unit tests", y: 148 },
    { label: "Verification", sub: "V&V evidence", y: 208 },
  ];

  const roles = [
    { label: "Developer", sub: "Task-level guidance", y: 52 },
    { label: "QA", sub: "Verification plan", y: 128 },
    { label: "Reg. Affairs", sub: "Submission package", y: 204 },
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
        @keyframes gw-flow { from { stroke-dashoffset: 11; } to { stroke-dashoffset: 0; } }
        @keyframes gw-pulse { 0%,100% { opacity:0.2; } 50% { opacity:0.6; } }
        @keyframes gw-step {
          0%,100% { opacity:0.5; r:4; }
          50%      { opacity:1;   r:5.5; }
        }
        @keyframes gw-progress {
          0%   { width: 0; }
          60%  { width: 60px; }
          100% { width: 60px; }
        }
        .gw-line { stroke-dasharray: 6 5; animation: gw-flow 1.5s linear infinite; }
        .gw-d0 { animation-delay: 0s; }    .gw-d1 { animation-delay: 0.4s; }
        .gw-d2 { animation-delay: 0.8s; }  .gw-d3 { animation-delay: 1.2s; }
        .gw-d4 { animation-delay: 0.15s; } .gw-d5 { animation-delay: 0.55s; }
        .gw-d6 { animation-delay: 0.95s; }
        .gw-hub-ring { animation: gw-pulse 2s ease-in-out infinite; }
        .gw-step { animation: gw-step 2s ease-in-out infinite; }
        .gw-s1 { animation-delay: 0s; }    .gw-s2 { animation-delay: 0.5s; }
        .gw-s3 { animation-delay: 1s; }    .gw-s4 { animation-delay: 1.5s; }
      `}</style>

      <defs>
        <linearGradient
          id="gw-grad"
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
          id="gw-border"
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

      {phases.map((phase, i) => (
        <g key={phase.label}>
          <rect
            x="8"
            y={phase.y}
            width="132"
            height="44"
            rx="6"
            fill="var(--bg-raised)"
            stroke="var(--bg-border-strong)"
            strokeWidth="1"
          />
          {/* step indicator */}
          <circle
            cx="26"
            cy={phase.y + 22}
            r="4"
            fill="#00f096"
            className={`gw-step gw-s${i + 1}`}
          />
          <text
            x="22"
            y={phase.y + 26}
            textAnchor="middle"
            fontSize="8"
            fontWeight="700"
            fill="var(--bg-base)"
          >
            {i + 1}
          </text>
          <text
            x="36"
            y={phase.y + 19}
            fontSize="10"
            fontWeight="700"
            fill="var(--text-primary)"
            fontFamily="ui-sans-serif,sans-serif"
          >
            {phase.label}
          </text>
          <text
            x="26"
            y={phase.y + 35}
            fontSize="9"
            fill="var(--text-secondary)"
            fontFamily="ui-sans-serif,sans-serif"
          >
            {phase.sub}
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
          className={`gw-line gw-d${i}`}
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
        className="gw-hub-ring"
      />
      <rect
        x="196"
        y="106"
        width="164"
        height="88"
        rx="10"
        fill="url(#gw-grad)"
        stroke="url(#gw-border)"
        strokeWidth="1"
      />
      {/* step progress bar */}
      <rect x="218" y="120" width="120" height="6" rx="3" fill="var(--bg-border)" />
      <rect x="218" y="120" width="80" height="6" rx="3" fill="#00f096" fillOpacity="0.6" />
      <text
        x="278"
        y="144"
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        fill="#00f096"
        fontFamily="ui-monospace,monospace"
        letterSpacing="0.06em"
      >
        GUIDED
      </text>
      <text
        x="278"
        y="162"
        textAnchor="middle"
        fontSize="9"
        fill="var(--text-secondary)"
        fontFamily="ui-sans-serif,sans-serif"
      >
        Step-by-step Workflows
      </text>
      <text
        x="278"
        y="178"
        textAnchor="middle"
        fontSize="8"
        fill="var(--text-muted)"
        fontFamily="ui-sans-serif,sans-serif"
        letterSpacing="0.04em"
      >
        IEC 62304 · ISO 13485 · EU MDR
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
          className={`gw-line gw-d${i + 4}`}
        />
      ))}

      {roles.map((role) => (
        <g key={role.label}>
          <rect
            x="416"
            y={role.y}
            width="136"
            height="44"
            rx="6"
            fill="var(--bg-raised)"
            stroke="var(--bg-border-strong)"
            strokeWidth="1"
          />
          <circle
            cx="434"
            cy={role.y + 14}
            r="8"
            fill="rgba(0,240,150,0.10)"
            stroke="#00f096"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <path
            d={`M ${429.5} ${role.y + 14} L ${433} ${role.y + 17.5} L ${439} ${role.y + 10.5}`}
            stroke="#00f096"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="448"
            y={role.y + 19}
            fontSize="11"
            fontWeight="700"
            fill="var(--text-primary)"
            fontFamily="ui-sans-serif,sans-serif"
          >
            {role.label}
          </text>
          <text
            x="434"
            y={role.y + 35}
            fontSize="9"
            fill="var(--text-secondary)"
            fontFamily="ui-sans-serif,sans-serif"
          >
            {role.sub}
          </text>
        </g>
      ))}

      <circle cx="196" cy="150" r="3" fill="#00f096" opacity="0.7" />
      <circle cx="360" cy="150" r="3" fill="#00f0f0" opacity="0.7" />
    </svg>
  );
}
