
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

  // Extend the animation duration by reducing the range values even more
  // Changed to make animation last about 2x longer
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.08], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.08], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.08], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.08], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.08], [0, 1.2]);

  return (
    <div
      className="h-[100vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
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
        title="Machine Learning. Built Only for COD."
        description="Trained on crores of order patterns, understands why RTO happens, tracks buying intent and every move on your Shopify site — with over 95% prediction accuracy."
      />
    </div>
  );
}
