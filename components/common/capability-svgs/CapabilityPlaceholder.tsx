type Props = { name: string };

export function CapabilityPlaceholder({ name }: Props) {
  const nodes: { cx: number; cy: number }[] = [
    { cx: 80, cy: 60 },
    { cx: 190, cy: 40 },
    { cx: 300, cy: 70 },
    { cx: 400, cy: 50 },
    { cx: 50, cy: 150 },
    { cx: 160, cy: 130 },
    { cx: 270, cy: 150 },
    { cx: 380, cy: 140 },
    { cx: 470, cy: 120 },
    { cx: 90, cy: 230 },
    { cx: 210, cy: 220 },
    { cx: 320, cy: 240 },
    { cx: 440, cy: 220 },
    { cx: 140, cy: 300 },
    { cx: 260, cy: 290 },
    { cx: 370, cy: 310 },
  ];

  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [9, 10],
    [10, 11],
    [11, 12],
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7],
    [5, 9],
    [6, 10],
    [7, 11],
    [8, 12],
    [9, 13],
    [10, 14],
    [11, 15],
    [13, 14],
    [14, 15],
  ];

  const centralIdx = 6;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center min-h-[200px]">
      <svg
        viewBox="0 0 520 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full opacity-40"
        aria-hidden="true"
      >
        <style>{`
          @keyframes ph-flow {
            from { stroke-dashoffset: 14; }
            to   { stroke-dashoffset: 0; }
          }
          @keyframes ph-pulse {
            0%, 100% { opacity: 0.3; r: 5; }
            50%       { opacity: 0.9; r: 7; }
          }
          @keyframes ph-node {
            0%, 100% { opacity: 0.25; }
            50%       { opacity: 0.7; }
          }
          .ph-edge {
            stroke-dasharray: 8 6;
            animation: ph-flow 2.2s linear infinite;
          }
          .ph-center { animation: ph-pulse 2s ease-in-out infinite; }
          .ph-node   { animation: ph-node 3s ease-in-out infinite; }
          .ph-e0  { animation-delay: 0s; }    .ph-e1  { animation-delay: 0.1s; }
          .ph-e2  { animation-delay: 0.2s; }  .ph-e3  { animation-delay: 0.3s; }
          .ph-e4  { animation-delay: 0.4s; }  .ph-e5  { animation-delay: 0.5s; }
          .ph-e6  { animation-delay: 0.6s; }  .ph-e7  { animation-delay: 0.7s; }
          .ph-e8  { animation-delay: 0.8s; }  .ph-e9  { animation-delay: 0.9s; }
          .ph-e10 { animation-delay: 1.0s; }  .ph-e11 { animation-delay: 1.1s; }
          .ph-e12 { animation-delay: 1.2s; }  .ph-e13 { animation-delay: 1.3s; }
          .ph-e14 { animation-delay: 1.4s; }  .ph-e15 { animation-delay: 1.5s; }
          .ph-e16 { animation-delay: 1.6s; }  .ph-e17 { animation-delay: 1.7s; }
          .ph-e18 { animation-delay: 1.8s; }  .ph-e19 { animation-delay: 1.9s; }
          .ph-e20 { animation-delay: 2.0s; }  .ph-e21 { animation-delay: 2.1s; }
          .ph-e22 { animation-delay: 2.2s; }
          .ph-n0  { animation-delay: 0s; }    .ph-n1  { animation-delay: 0.4s; }
          .ph-n2  { animation-delay: 0.8s; }  .ph-n3  { animation-delay: 1.2s; }
          .ph-n4  { animation-delay: 1.6s; }  .ph-n5  { animation-delay: 2.0s; }
        `}</style>

        {edges.map(([a, b], i) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            stroke="#00f096"
            strokeWidth="1"
            strokeOpacity="0.5"
            className={`ph-edge ph-e${i}`}
          />
        ))}

        {nodes.map((n, i) =>
          i === centralIdx ? (
            <circle
              key={`c-${n.cx}-${n.cy}`}
              cx={n.cx}
              cy={n.cy}
              r="6"
              fill="#00f096"
              className="ph-center"
            />
          ) : (
            <circle
              key={`n-${n.cx}-${n.cy}`}
              cx={n.cx}
              cy={n.cy}
              r="3.5"
              fill="#00f096"
              fillOpacity="0.5"
              className={`ph-node ph-n${i % 6}`}
            />
          ),
        )}
      </svg>

      {/* Coming soon badge */}
      <div
        className="relative z-10 flex flex-col items-center gap-3 px-6 py-5 rounded-xl text-center"
        style={{
          background: "var(--bg-raised)",
          border: "1px solid var(--bg-border-strong)",
          maxWidth: 220,
        }}
      >
        <span className="label-caps" style={{ color: "var(--brand-green)", opacity: 0.7 }}>
          Coming soon
        </span>
        <p
          className="text-sm font-semibold"
          style={{ color: "var(--text-primary)", lineHeight: 1.4 }}
        >
          {name}
        </p>
        <p className="text-xs" style={{ color: "var(--text-muted)", lineHeight: 1.5 }}>
          Interactive screenshot in production
        </p>
      </div>
    </div>
  );
}
