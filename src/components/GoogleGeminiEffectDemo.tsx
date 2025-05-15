
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

  // Faster scroll speed by increasing the second number in the array (from 0.8 to 0.4)
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.4], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.4], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.4], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.4], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.4], [0, 1.2]);

  return (
    <div
      className="h-[300vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
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
        title="Advanced Order Selection With AI"
        description="Scalysis uses advanced machine learning to identify and filter out orders with high return intent"
      />
    </div>
  );
}
