export function HomepageMockup() {
  return (
    <div
      className="animate-fade-in-up"
      style={{
        animationDelay: "320ms",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 32px 64px -16px rgba(0,0,0,0.5), 0 0 0 1px var(--bg-border-strong)",
      }}
    >
      <svg
        viewBox="0 0 860 520"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%" }}
        aria-label="P4SaMD — SDLC compliance dashboard"
        role="img"
      >
        <defs>
          <style>{`
            @keyframes hmSlideRow {
              from { opacity: 0; transform: translateX(-18px); }
              to   { opacity: 1; transform: translateX(0); }
            }
            @keyframes hmCardFloat {
              0%, 100% { transform: translateY(0px); }
              50%       { transform: translateY(-5px); }
            }
            @keyframes hmBadgePop {
              0%   { opacity: 0; transform: scale(0.5); }
              75%  { transform: scale(1.12); }
              100% { opacity: 1; transform: scale(1); }
            }
            @keyframes hmFadeIn {
              from { opacity: 0; }
              to   { opacity: 1; }
            }
            @keyframes hmPulse {
              0%, 100% { opacity: 1; }
              50%       { opacity: 0.3; }
            }

            .hm-r1 { animation: hmSlideRow 0.55s cubic-bezier(0.22,1,0.36,1) 0.35s both; }
            .hm-r2 { animation: hmSlideRow 0.55s cubic-bezier(0.22,1,0.36,1) 0.55s both; }
            .hm-r3 { animation: hmSlideRow 0.55s cubic-bezier(0.22,1,0.36,1) 0.75s both; }
            .hm-r4 { animation: hmSlideRow 0.55s cubic-bezier(0.22,1,0.36,1) 0.95s both; }
            .hm-r5 { animation: hmSlideRow 0.55s cubic-bezier(0.22,1,0.36,1) 1.15s both; }

            .hm-c1 { animation: hmCardFloat 3.4s ease-in-out 0.0s infinite; }
            .hm-c2 { animation: hmCardFloat 3.4s ease-in-out 0.5s infinite; }
            .hm-c3 { animation: hmCardFloat 3.4s ease-in-out 1.0s infinite; }
            .hm-c4 { animation: hmCardFloat 3.4s ease-in-out 1.5s infinite; }

            .hm-b1 { transform-box: fill-box; transform-origin: center; animation: hmBadgePop 0.38s cubic-bezier(0.34,1.56,0.64,1) 0.55s both; }
            .hm-b2 { transform-box: fill-box; transform-origin: center; animation: hmBadgePop 0.38s cubic-bezier(0.34,1.56,0.64,1) 0.75s both; }
            .hm-b3 { transform-box: fill-box; transform-origin: center; animation: hmBadgePop 0.38s cubic-bezier(0.34,1.56,0.64,1) 0.95s both; }
            .hm-b4 { transform-box: fill-box; transform-origin: center; animation: hmBadgePop 0.38s cubic-bezier(0.34,1.56,0.64,1) 1.15s both; }
            .hm-b5 { transform-box: fill-box; transform-origin: center; animation: hmBadgePop 0.38s cubic-bezier(0.34,1.56,0.64,1) 1.35s both; }

            .hm-hdr  { animation: hmFadeIn 0.4s ease 0.2s both; }
            .hm-skel { animation: hmFadeIn 0.5s ease 1.3s both; }
            .hm-dot  { animation: hmPulse 1.8s ease-in-out infinite; }
          `}</style>

          <linearGradient id="hm-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0D1117" stopOpacity="0" />
            <stop offset="100%" stopColor="#0D1117" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="hm-shim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.055)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          <filter id="hm-card-sh" x="-20%" y="-40%" width="140%" height="200%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="rgba(0,0,0,0.5)" />
          </filter>
          <filter id="hm-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="rgba(0,240,150,0.85)" />
          </filter>

          <clipPath id="hm-skel-clip">
            <rect x="12" y="386" width="836" height="42" />
          </clipPath>
        </defs>

        {/* ── background ── */}
        <rect width="860" height="520" fill="#0D1117" />

        {/* ── title bar ── */}
        <rect width="860" height="36" fill="#161B22" />
        <circle cx="20" cy="18" r="5" fill="#FF5F57" />
        <circle cx="38" cy="18" r="5" fill="#FFBD2E" />
        <circle cx="56" cy="18" r="5" fill="#28CA41" />
        <rect x="74" y="6" width="180" height="24" rx="5" fill="#0D1117" />
        <text
          x="90"
          y="22.5"
          fill="#8B949E"
          fontSize="10.5"
          fontFamily="system-ui,-apple-system,sans-serif"
        >
          P4SaMD — Requirements
        </text>
        <circle cx="834" cy="18" r="5" fill="#00F096" filter="url(#hm-glow)" className="hm-dot" />

        {/* ── breadcrumb ── */}
        <rect y="36" width="860" height="30" fill="#0D1117" />
        <text x="18" y="55" fill="#6E7681" fontSize="10" fontFamily="system-ui,sans-serif">
          Requirements
        </text>
        <text x="99" y="55" fill="#3A4048" fontSize="10" fontFamily="system-ui,sans-serif">
          {" "}
          /{" "}
        </text>
        <text x="110" y="55" fill="#484F58" fontSize="10" fontFamily="system-ui,sans-serif">
          IEC 62304
        </text>
        <rect
          x="770"
          y="40"
          width="78"
          height="18"
          rx="5"
          fill="rgba(0,240,150,0.1)"
          stroke="rgba(0,240,150,0.25)"
          strokeWidth="0.6"
        />
        <text
          x="809"
          y="53"
          fill="#00F096"
          fontSize="9.5"
          fontFamily="system-ui,sans-serif"
          textAnchor="middle"
        >
          + New Item
        </text>

        {/* ── metric cards ── */}
        <g className="hm-c1" filter="url(#hm-card-sh)">
          <rect
            x="12"
            y="74"
            width="190"
            height="56"
            rx="8"
            fill="#161B22"
            stroke="#21262D"
            strokeWidth="0.8"
          />
          <text
            x="24"
            y="92"
            fill="#6E7681"
            fontSize="8.5"
            fontFamily="system-ui,sans-serif"
            letterSpacing="0.06em"
          >
            ALL ITEMS
          </text>
          <text
            x="24"
            y="116"
            fill="#E6EDF3"
            fontSize="24"
            fontWeight="700"
            fontFamily="system-ui,sans-serif"
          >
            24
          </text>
          <rect x="110" y="82" width="42" height="14" rx="3" fill="#1C2128" />
          <text
            x="131"
            y="92.5"
            fill="#6E7681"
            fontSize="8"
            fontFamily="system-ui,sans-serif"
            textAnchor="middle"
          >
            ↑ 4 new
          </text>
        </g>

        <g className="hm-c2" filter="url(#hm-card-sh)">
          <rect
            x="216"
            y="74"
            width="190"
            height="56"
            rx="8"
            fill="#161B22"
            stroke="#21262D"
            strokeWidth="0.8"
          />
          <text
            x="228"
            y="92"
            fill="#6E7681"
            fontSize="8.5"
            fontFamily="system-ui,sans-serif"
            letterSpacing="0.06em"
          >
            COMPLETED
          </text>
          <text
            x="228"
            y="116"
            fill="#E6EDF3"
            fontSize="24"
            fontWeight="700"
            fontFamily="system-ui,sans-serif"
          >
            11
          </text>
          <circle cx="325" cy="85" r="3.5" fill="#059669" />
          <text x="334" y="89" fill="#34D399" fontSize="8.5" fontFamily="system-ui,sans-serif">
            45.8%
          </text>
        </g>

        <g className="hm-c3" filter="url(#hm-card-sh)">
          <rect
            x="420"
            y="74"
            width="190"
            height="56"
            rx="8"
            fill="#161B22"
            stroke="#21262D"
            strokeWidth="0.8"
          />
          <text
            x="432"
            y="92"
            fill="#6E7681"
            fontSize="8.5"
            fontFamily="system-ui,sans-serif"
            letterSpacing="0.06em"
          >
            IN PROGRESS
          </text>
          <text
            x="432"
            y="116"
            fill="#E6EDF3"
            fontSize="24"
            fontWeight="700"
            fontFamily="system-ui,sans-serif"
          >
            9
          </text>
          <circle cx="529" cy="85" r="3.5" fill="#F97316" />
          <text x="538" y="89" fill="#FB923C" fontSize="8.5" fontFamily="system-ui,sans-serif">
            37.5%
          </text>
        </g>

        <g className="hm-c4" filter="url(#hm-card-sh)">
          <rect
            x="624"
            y="74"
            width="224"
            height="56"
            rx="8"
            fill="#161B22"
            stroke="#21262D"
            strokeWidth="0.8"
          />
          <text
            x="636"
            y="92"
            fill="#6E7681"
            fontSize="8.5"
            fontFamily="system-ui,sans-serif"
            letterSpacing="0.06em"
          >
            TO REVIEW
          </text>
          <text
            x="636"
            y="116"
            fill="#E6EDF3"
            fontSize="24"
            fontWeight="700"
            fontFamily="system-ui,sans-serif"
          >
            4
          </text>
          <circle cx="733" cy="85" r="3.5" fill="#9333EA" />
          <text x="742" y="89" fill="#C084FC" fontSize="8.5" fontFamily="system-ui,sans-serif">
            16.7%
          </text>
        </g>

        {/* ── table container ── */}
        <rect
          x="12"
          y="142"
          width="836"
          height="368"
          rx="8"
          fill="#161B22"
          stroke="#21262D"
          strokeWidth="0.8"
        />

        {/* table header */}
        <rect x="12" y="142" width="836" height="34" rx="8" fill="#1C2128" />
        <rect x="12" y="159" width="836" height="17" fill="#1C2128" />
        <g className="hm-hdr">
          <text
            x="40"
            y="163"
            fill="#6E7681"
            fontSize="9"
            fontFamily="system-ui,sans-serif"
            fontWeight="600"
            letterSpacing="0.05em"
          >
            TITLE
          </text>
          <text
            x="250"
            y="163"
            fill="#6E7681"
            fontSize="9"
            fontFamily="system-ui,sans-serif"
            fontWeight="600"
            letterSpacing="0.05em"
          >
            QUALITY
          </text>
          <text
            x="356"
            y="163"
            fill="#6E7681"
            fontSize="9"
            fontFamily="system-ui,sans-serif"
            fontWeight="600"
            letterSpacing="0.05em"
          >
            TYPE
          </text>
          <text
            x="452"
            y="163"
            fill="#6E7681"
            fontSize="9"
            fontFamily="system-ui,sans-serif"
            fontWeight="600"
            letterSpacing="0.05em"
          >
            CATEGORY
          </text>
          <text
            x="558"
            y="163"
            fill="#6E7681"
            fontSize="9"
            fontFamily="system-ui,sans-serif"
            fontWeight="600"
            letterSpacing="0.05em"
          >
            LABELS
          </text>
          <text
            x="686"
            y="163"
            fill="#6E7681"
            fontSize="9"
            fontFamily="system-ui,sans-serif"
            fontWeight="600"
            letterSpacing="0.05em"
          >
            STATUS
          </text>
          <text
            x="786"
            y="163"
            fill="#6E7681"
            fontSize="9"
            fontFamily="system-ui,sans-serif"
            fontWeight="600"
            letterSpacing="0.05em"
          >
            FILE
          </text>
        </g>

        {/* ── row 1 ── */}
        <g className="hm-r1">
          <rect x="12" y="176" width="836" height="42" fill="rgba(0,240,150,0.04)" />
          <line x1="12" y1="218" x2="848" y2="218" stroke="#21262D" strokeWidth="0.5" />
          <rect
            x="18"
            y="185"
            width="13"
            height="13"
            rx="3"
            fill="rgba(0,240,150,0.1)"
            stroke="rgba(0,240,150,0.3)"
            strokeWidth="0.7"
          />
          <polyline
            points="20.5,191.5 23.5,195 30,186"
            fill="none"
            stroke="#00F096"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x="40" y="191" fill="#E6EDF3" fontSize="11" fontFamily="system-ui,sans-serif">
            User authentication flow
          </text>
          <text x="40" y="205" fill="#484F58" fontSize="8.5" fontFamily="system-ui,sans-serif">
            USR-001
          </text>
          <g className="hm-b1">
            <rect x="244" y="184" width="52" height="17" rx="4" fill="rgba(147,51,234,0.15)" />
            <text
              x="270"
              y="196"
              fill="#C084FC"
              fontSize="9"
              fontFamily="system-ui,sans-serif"
              textAnchor="middle"
            >
              Critical
            </text>
          </g>
          <text x="352" y="196" fill="#8B949E" fontSize="10" fontFamily="system-ui,sans-serif">
            USR
          </text>
          <text x="448" y="196" fill="#8B949E" fontSize="10" fontFamily="system-ui,sans-serif">
            Auth
          </text>
          <g className="hm-b2">
            <rect x="552" y="184" width="36" height="17" rx="8.5" fill="rgba(20,184,166,0.15)" />
            <text
              x="570"
              y="196"
              fill="#2DD4BF"
              fontSize="8.5"
              fontFamily="system-ui,sans-serif"
              textAnchor="middle"
            >
              USR
            </text>
          </g>
          <g className="hm-b3">
            <rect x="592" y="184" width="52" height="17" rx="8.5" fill="rgba(37,99,235,0.15)" />
            <text
              x="618"
              y="196"
              fill="#60A5FA"
              fontSize="8.5"
              fontFamily="system-ui,sans-serif"
              textAnchor="middle"
            >
              Binding
            </text>
          </g>
          <circle cx="689" cy="192" r="3.2" fill="#059669" />
          <text x="698" y="196" fill="#4ADE80" fontSize="9.5" fontFamily="system-ui,sans-serif">
            Done
          </text>
          <text x="782" y="196" fill="#484F58" fontSize="8.5" fontFamily="system-ui,sans-serif">
            SRS_v2.pdf
          </text>
        </g>

        {/* ── row 2 ── */}
        <g className="hm-r2">
          <rect x="12" y="218" width="836" height="42" fill="transparent" />
          <line x1="12" y1="260" x2="848" y2="260" stroke="#21262D" strokeWidth="0.5" />
          <rect
            x="18"
            y="227"
            width="13"
            height="13"
            rx="3"
            fill="none"
            stroke="#21262D"
            strokeWidth="0.7"
          />
          <text x="40" y="233" fill="#E6EDF3" fontSize="11" fontFamily="system-ui,sans-serif">
            Data encryption at rest
          </text>
          <text x="40" y="247" fill="#484F58" fontSize="8.5" fontFamily="system-ui,sans-serif">
            SEC-004
          </text>
          <g className="hm-b1">
            <rect x="244" y="226" width="62" height="17" rx="4" fill="rgba(249,115,22,0.15)" />
            <text
              x="275"
              y="238"
              fill="#FB923C"
              fontSize="9"
              fontFamily="system-ui,sans-serif"
              textAnchor="middle"
            >
              Important
            </text>
          </g>
          <text x="352" y="238" fill="#8B949E" fontSize="10" fontFamily="system-ui,sans-serif">
            SEC
          </text>
          <text x="448" y="238" fill="#8B949E" fontSize="10" fontFamily="system-ui,sans-serif">
            Data
          </text>
          <g className="hm-b3">
            <rect x="552" y="226" width="40" height="17" rx="8.5" fill="rgba(37,99,235,0.15)" />
            <text
              x="572"
              y="238"
              fill="#60A5FA"
              fontSize="8.5"
              fontFamily="system-ui,sans-serif"
              textAnchor="middle"
            >
              Data
            </text>
          </g>
          <circle cx="689" cy="234" r="3.2" fill="#F97316" />
          <text x="698" y="238" fill="#FB923C" fontSize="9.5" fontFamily="system-ui,sans-serif">
            In Progress
          </text>
          <text x="782" y="238" fill="#484F58" fontSize="8.5" fontFamily="system-ui,sans-serif">
            SAD_v1.pdf
          </text>
        </g>

        {/* ── row 3 ── */}
        <g className="hm-r3">
          <rect x="12" y="260" width="836" height="42" fill="rgba(0,240,150,0.04)" />
          <line x1="12" y1="302" x2="848" y2="302" stroke="#21262D" strokeWidth="0.5" />
          <rect
            x="18"
            y="269"
            width="13"
            height="13"
            rx="3"
            fill="none"
            stroke="#21262D"
            strokeWidth="0.7"
          />
          <text x="40" y="275" fill="#E6EDF3" fontSize="11" fontFamily="system-ui,sans-serif">
            Audit trail logging
          </text>
          <text x="40" y="289" fill="#484F58" fontSize="8.5" fontFamily="system-ui,sans-serif">
            AUD-012
          </text>
          <g className="hm-b2">
            <rect x="244" y="268" width="52" height="17" rx="4" fill="rgba(147,51,234,0.15)" />
            <text
              x="270"
              y="280"
              fill="#C084FC"
              fontSize="9"
              fontFamily="system-ui,sans-serif"
              textAnchor="middle"
            >
              Critical
            </text>
          </g>
          <text x="352" y="280" fill="#8B949E" fontSize="10" fontFamily="system-ui,sans-serif">
            AUD
          </text>
          <text x="448" y="280" fill="#8B949E" fontSize="10" fontFamily="system-ui,sans-serif">
            Compliance
          </text>
          <g className="hm-b3">
            <rect x="552" y="268" width="36" height="17" rx="8.5" fill="rgba(20,184,166,0.15)" />
            <text
              x="570"
              y="280"
              fill="#2DD4BF"
              fontSize="8.5"
              fontFamily="system-ui,sans-serif"
              textAnchor="middle"
            >
              USR
            </text>
          </g>
          <g className="hm-b4">
            <rect x="592" y="268" width="42" height="17" rx="8.5" fill="rgba(5,150,105,0.15)" />
            <text
              x="613"
              y="280"
              fill="#34D399"
              fontSize="8.5"
              fontFamily="system-ui,sans-serif"
              textAnchor="middle"
            >
              v1.0
            </text>
          </g>
          <circle cx="689" cy="276" r="3.2" fill="#9333EA" />
          <text x="698" y="280" fill="#C084FC" fontSize="9.5" fontFamily="system-ui,sans-serif">
            To Review
          </text>
          <text x="782" y="280" fill="#484F58" fontSize="8.5" fontFamily="system-ui,sans-serif">
            IEC_62304.pdf
          </text>
        </g>

        {/* ── row 4 ── */}
        <g className="hm-r4">
          <rect x="12" y="302" width="836" height="42" fill="transparent" />
          <line x1="12" y1="344" x2="848" y2="344" stroke="#21262D" strokeWidth="0.5" />
          <rect
            x="18"
            y="311"
            width="13"
            height="13"
            rx="3"
            fill="rgba(0,240,150,0.1)"
            stroke="rgba(0,240,150,0.3)"
            strokeWidth="0.7"
          />
          <polyline
            points="20.5,317.5 23.5,321 30,312"
            fill="none"
            stroke="#00F096"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x="40" y="317" fill="#E6EDF3" fontSize="11" fontFamily="system-ui,sans-serif">
            Risk assessment documentation
          </text>
          <text x="40" y="331" fill="#484F58" fontSize="8.5" fontFamily="system-ui,sans-serif">
            RSK-007
          </text>
          <g className="hm-b3">
            <rect x="244" y="310" width="62" height="17" rx="4" fill="rgba(249,115,22,0.15)" />
            <text
              x="275"
              y="322"
              fill="#FB923C"
              fontSize="9"
              fontFamily="system-ui,sans-serif"
              textAnchor="middle"
            >
              Important
            </text>
          </g>
          <text x="352" y="322" fill="#8B949E" fontSize="10" fontFamily="system-ui,sans-serif">
            RSK
          </text>
          <text x="448" y="322" fill="#8B949E" fontSize="10" fontFamily="system-ui,sans-serif">
            Safety
          </text>
          <g className="hm-b4">
            <rect x="552" y="310" width="52" height="17" rx="8.5" fill="rgba(37,99,235,0.15)" />
            <text
              x="578"
              y="322"
              fill="#60A5FA"
              fontSize="8.5"
              fontFamily="system-ui,sans-serif"
              textAnchor="middle"
            >
              Binding
            </text>
          </g>
          <circle cx="689" cy="318" r="3.2" fill="#059669" />
          <text x="698" y="322" fill="#4ADE80" fontSize="9.5" fontFamily="system-ui,sans-serif">
            Done
          </text>
          <text x="782" y="322" fill="#484F58" fontSize="8.5" fontFamily="system-ui,sans-serif">
            RMF_v3.pdf
          </text>
        </g>

        {/* ── row 5 ── */}
        <g className="hm-r5">
          <rect x="12" y="344" width="836" height="42" fill="rgba(0,240,150,0.04)" />
          <line x1="12" y1="386" x2="848" y2="386" stroke="#21262D" strokeWidth="0.5" />
          <rect
            x="18"
            y="353"
            width="13"
            height="13"
            rx="3"
            fill="none"
            stroke="#21262D"
            strokeWidth="0.7"
          />
          <text x="40" y="359" fill="#E6EDF3" fontSize="11" fontFamily="system-ui,sans-serif">
            Software version control policy
          </text>
          <text x="40" y="373" fill="#484F58" fontSize="8.5" fontFamily="system-ui,sans-serif">
            CFG-019
          </text>
          <g className="hm-b4">
            <rect x="244" y="352" width="48" height="17" rx="4" fill="rgba(147,51,234,0.15)" />
            <text
              x="268"
              y="364"
              fill="#C084FC"
              fontSize="9"
              fontFamily="system-ui,sans-serif"
              textAnchor="middle"
            >
              Normal
            </text>
          </g>
          <text x="352" y="364" fill="#8B949E" fontSize="10" fontFamily="system-ui,sans-serif">
            CFG
          </text>
          <text x="448" y="364" fill="#8B949E" fontSize="10" fontFamily="system-ui,sans-serif">
            Version
          </text>
          <g className="hm-b5">
            <rect x="552" y="352" width="42" height="17" rx="8.5" fill="rgba(5,150,105,0.15)" />
            <text
              x="573"
              y="364"
              fill="#34D399"
              fontSize="8.5"
              fontFamily="system-ui,sans-serif"
              textAnchor="middle"
            >
              v1.0
            </text>
          </g>
          <circle cx="689" cy="360" r="3.2" fill="#F97316" />
          <text x="698" y="364" fill="#FB923C" fontSize="9.5" fontFamily="system-ui,sans-serif">
            In Progress
          </text>
          <text x="782" y="364" fill="#484F58" fontSize="8.5" fontFamily="system-ui,sans-serif">
            SOP_v1.pdf
          </text>
        </g>

        {/* ── skeleton row ── */}
        <g className="hm-skel" opacity="0.45">
          <rect x="12" y="386" width="836" height="42" fill="transparent" />
          <rect x="18" y="395" width="13" height="13" rx="3" fill="#1C2128" />
          <rect x="40" y="394" width="144" height="9" rx="3" fill="#1C2128" />
          <rect x="40" y="408" width="48" height="7" rx="3" fill="#161B22" />
          <rect x="244" y="394" width="58" height="17" rx="4" fill="#1C2128" />
          <rect x="352" y="396" width="26" height="7" rx="3" fill="#1C2128" />
          <rect x="448" y="396" width="44" height="7" rx="3" fill="#1C2128" />
          <rect x="552" y="394" width="78" height="17" rx="8.5" fill="#1C2128" />
          <rect x="684" y="396" width="52" height="7" rx="3" fill="#1C2128" />
          <rect x="782" y="396" width="44" height="7" rx="3" fill="#1C2128" />
          {/* shimmer sweep */}
          <rect
            x="-860"
            y="386"
            width="860"
            height="42"
            fill="url(#hm-shim)"
            clipPath="url(#hm-skel-clip)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="1720 0"
              dur="2s"
              begin="1.4s"
              repeatCount="indefinite"
            />
          </rect>
        </g>

        {/* ── bottom fade ── */}
        <rect x="0" y="436" width="860" height="84" fill="url(#hm-fade)" />
      </svg>
    </div>
  );
}
