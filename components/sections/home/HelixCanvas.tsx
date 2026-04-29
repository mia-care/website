"use client";

import dynamic from "next/dynamic";

export const HelixCanvas = dynamic(
  () => import("./ValueFlowAnimation").then((m) => ({ default: m.ValueFlowAnimation })),
  { ssr: false },
);
