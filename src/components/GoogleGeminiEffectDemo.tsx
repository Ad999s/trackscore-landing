

"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Further increase scroll speed by reducing the range to complete faster
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.25], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.25], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.25], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.25], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.25], [0, 1.2]);

  return (
    <div
      className="h-[200vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="Built for COD. Trained on Your Reality."
        description="This isn’t a generic fraud filter. Scalysis uses a vertically trained ML model — tuned on millions of COD orders from Indian D2C brands like yours.
It learns from your historical delivery patterns, pin code behavior, return profiles, and even cash reconciliation data — to predict which orders will fail before you ship."
      />
    </div>
  );
}
