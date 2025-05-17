
"use client";
import React, { useEffect, useRef } from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import { useMotionValue, useScroll } from "framer-motion";

export const GoogleGeminiEffectDemo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const pathLengths = [
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
  ];

  useEffect(() => {
    const updatePathLengths = () => {
      const value = scrollYProgress.get();
      const adjustedValue = Math.min(Math.max(value, 0), 1);
      
      pathLengths.forEach((pathLength, index) => {
        const delay = index * 0.2; // Each path animates with a delay
        const newValue = Math.max(0, Math.min(1, (adjustedValue - delay) * 1.5));
        pathLength.set(newValue);
      });
    };

    const unsubscribe = scrollYProgress.on("change", updatePathLengths);
    return () => unsubscribe();
  }, [scrollYProgress, pathLengths]);

  return (
    <div className="relative bg-black min-h-screen" ref={ref}>
      <div className="h-[70vh]" /> {/* Spacer to allow scrolling */}
      <GoogleGeminiEffect 
        pathLengths={pathLengths}
        title="AI-Powered Order Selection"
        description="Our advanced AI algorithms analyze thousands of data points to select only the most profitable orders for your business."
      />
      <div className="h-[100vh]" /> {/* Spacer to continue effect while scrolling */}
    </div>
  );
};

export default GoogleGeminiEffectDemo;
