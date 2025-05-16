
"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Reduce the scroll range to complete the animation faster but extend the lines
  // Using 0.05 for slower completion to make wires appear to last longer
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.05], [0.2, 1.7]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.05], [0.15, 1.7]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.05], [0.1, 1.7]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.05], [0.05, 1.7]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.05], [0, 1.7]);

  // Animation variants for ML metrics cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div
      className="h-[80vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
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

      {/* ML Training metrics with sprinkle effect */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 flex justify-center items-center z-30 px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full">
          {/* Left panel */}
          <motion.div 
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-white"
            variants={itemVariants}
          >
            <h3 className="text-sm font-semibold text-white/80 mb-2">Customer Behavior Analysis</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Learning progress:</span>
                  <span className="text-green-400">87%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-green-400 h-1.5 rounded-full" style={{ width: "87%" }}></div>
                </div>
              </div>
              <div className="text-xs flex justify-between">
                <span>Orders analyzed:</span>
                <span className="text-green-200">25,482</span>
              </div>
            </div>
          </motion.div>

          {/* Middle panel - larger */}
          <motion.div 
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-white md:col-span-1"
            variants={itemVariants}
          >
            <h3 className="text-sm font-semibold text-white/80 mb-2">Product Category Training</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-xs">
                <span>Electronics</span>
                <span className="text-blue-300">3,451 orders</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: "65%" }}></div>
              </div>
              
              <div className="flex justify-between text-xs">
                <span>Fashion</span>
                <span className="text-purple-300">8,927 orders</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="bg-purple-400 h-1.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
              
              <div className="flex justify-between text-xs">
                <span>Home Goods</span>
                <span className="text-amber-300">2,189 orders</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: "40%" }}></div>
              </div>
              
              <div className="flex justify-between text-xs">
                <span>Beauty</span>
                <span className="text-pink-300">5,732 orders</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="bg-pink-400 h-1.5 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
          </motion.div>

          {/* Right panel */}
          <motion.div 
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-white"
            variants={itemVariants}
          >
            <h3 className="text-sm font-semibold text-white/80 mb-2">Model Training Metrics</h3>
            <div className="space-y-3">
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Accuracy:</span>
                  <span className="text-green-400">95.4%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-green-400 h-1.5 rounded-full" style={{ width: "95.4%" }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Precision:</span>
                  <span className="text-blue-400">92.8%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: "92.8%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>ROI Improvement:</span>
                  <span className="text-purple-400">73.2%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-purple-400 h-1.5 rounded-full" style={{ width: "73.2%" }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
