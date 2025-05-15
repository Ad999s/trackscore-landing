
"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { cn } from "@/lib/utils";

// Animated counter component
const AnimatedCounter = ({ 
  value, 
  duration = 2000, 
  prefix = "", 
  suffix = "", 
  className = "" 
}: { 
  value: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string; 
  className?: string;
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * value);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);
  
  return (
    <div className={cn("font-bold", className)}>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

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

  // Control the visibility of the metrics based on scroll position
  const metricsOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const metricsY = useTransform(scrollYProgress, [0.05, 0.15], [20, 0]);

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
        title="Let Your AI Decide What Ships"
        description="Scalysis filters out risky COD orders with machine learning precision — so you don't bleed shipping cost or ruin your ROAS."
      />
      
      {/* Tiny copy under node */}
      <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 translate-y-8 text-center">
        <p className="text-white/80 text-sm italic">
          "Live model trained on millions of Indian D2C orders."
        </p>
      </div>
      
      {/* Animated metrics */}
      <motion.div 
        className="absolute bottom-48 left-0 w-full"
        style={{ opacity: metricsOpacity, y: metricsY }}
      >
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-8 px-4">
          {/* COD RTO Reduction */}
          <div className="flex flex-col items-center bg-black/50 backdrop-blur-md p-4 rounded-lg border border-white/10">
            <div className="text-lg md:text-2xl text-white">
              <AnimatedCounter prefix="↓ " suffix="%" value={41.3} />
            </div>
            <p className="text-xs md:text-sm text-white/70 text-center mt-2">COD RTO Reduction</p>
          </div>
          
          {/* Fake Orders Blocked */}
          <div className="flex flex-col items-center bg-black/50 backdrop-blur-md p-4 rounded-lg border border-white/10">
            <div className="text-lg md:text-2xl text-white">
              <AnimatedCounter value={3212} />
            </div>
            <p className="text-xs md:text-sm text-white/70 text-center mt-2">Fake Orders Blocked this week</p>
          </div>
          
          {/* Shipping Saved */}
          <div className="flex flex-col items-center bg-black/50 backdrop-blur-md p-4 rounded-lg border border-white/10">
            <div className="text-lg md:text-2xl text-white">
              <AnimatedCounter prefix="₹" suffix="L" value={84.2} />
            </div>
            <p className="text-xs md:text-sm text-white/70 text-center mt-2">Shipping Saved across brands</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
