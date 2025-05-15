
"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { List, Cpu, Check } from "lucide-react";

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      {/* Three column layout for the model overview */}
      <div className="absolute top-0 left-0 w-full z-10 px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Left column - All Orders */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center text-white">
            <div className="p-3 bg-blue-500/20 rounded-full mb-4">
              <List size={24} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">All Orders</h3>
            <p className="text-gray-300 text-sm text-center">
              Your store's complete order pipeline before AI filtering
            </p>
          </div>
          
          {/* Middle column - AI Model */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 flex flex-col items-center text-white transform md:scale-110 md:-mt-2">
            <div className="p-3 bg-purple-500/20 rounded-full mb-4">
              <Cpu size={24} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Model</h3>
            <p className="text-gray-300 text-sm text-center">
              Powered by machine learning to identify return intent
            </p>
          </div>
          
          {/* Right column - Green Filtered Orders */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center text-white">
            <div className="p-3 bg-green-500/20 rounded-full mb-4">
              <Check size={24} className="text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Green Filtered Orders</h3>
            <p className="text-gray-300 text-sm text-center">
              High-intent orders ready to ship with minimal return risk
            </p>
          </div>
        </div>
      </div>

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
