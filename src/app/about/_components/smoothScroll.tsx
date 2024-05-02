"use client";

import { Lenis, ReactLenis } from "lenis/react";

export default function SmoothScroll() {
  return (
    <Lenis
      root
      options={{
        duration: 1.5,
        lerp: 0.1,
      }}
    />
  );
}
