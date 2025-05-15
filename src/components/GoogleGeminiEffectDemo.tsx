
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

  // Increasing these values to make the scroll effect faster
  // By increasing the max value from 1.2 to 2.0, the effect completes in 40% of the original scroll distance
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.4], [0.2, 2.0]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.4], [0.15, 2.0]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.4], [0.1, 2.0]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.4], [0.05, 2.0]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.4], [0, 2.0]);

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
        title="Reduce RTO with AI"
        description="Scalysis uses advanced machine learning to identify and filter out orders with high return intent"
      />
    </div>
  );
}
