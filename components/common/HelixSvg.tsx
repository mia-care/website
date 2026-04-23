type Props = {
  className?: string;
  opacity?: number;
  width?: number;
  height?: number;
};

export function HelixSvg({ className = "", opacity = 0.08, width = 400, height = 600 }: Props) {
  const amplitude = 60;
  const frequency = 0.018;
  const points = 200;

  const path1Points: string[] = [];
  const path2Points: string[] = [];

  for (let i = 0; i <= points; i++) {
    const y = (i / points) * height;
    const x1 = width / 2 + amplitude * Math.sin(frequency * y * Math.PI * 2);
    const x2 = width / 2 - amplitude * Math.sin(frequency * y * Math.PI * 2);
    if (i === 0) {
      path1Points.push(`M ${x1.toFixed(1)} ${y.toFixed(1)}`);
      path2Points.push(`M ${x2.toFixed(1)} ${y.toFixed(1)}`);
    } else {
      path1Points.push(`L ${x1.toFixed(1)} ${y.toFixed(1)}`);
      path2Points.push(`L ${x2.toFixed(1)} ${y.toFixed(1)}`);
    }
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        d={path1Points.join(" ")}
        stroke="#00F096"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={path2Points.join(" ")}
        stroke="#00F0F0"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
