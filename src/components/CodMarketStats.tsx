import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";

// Animated counter component
const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  prefix = "", 
  suffix = "" 
}: { 
  end: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      updateCount(timestamp);
    };
    
    const updateCount = (timestamp: number) => {
      const runtime = timestamp - startTime;
      const progress = Math.min(runtime / duration, 1);
      
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);
      
      if (runtime < duration) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(startAnimation);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);
  
  return (
    <span ref={countRef} className="font-bold">
      {prefix}{count}{suffix}
    </span>
  );
};

const CodMarketStats = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            India loves COD. <span className="text-blue-500">65% Of All Ecom Transactions.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Globe Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <Globe />
          </motion.div>

          {/* Stats Display - Normalized text sizes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Ecom Market Size - Reduced text size */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg text-blue-700 mb-1">Ecom Market Size</h3>
              <p className="text-2xl md:text-3xl text-blue-600">
                <AnimatedCounter prefix="$" end={123} suffix="B" duration={2500} />
              </p>
            </div>
            
            {/* COD Market Size - Reduced text size */}
            <div className="bg-blue-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg text-blue-800 mb-1">COD Market Size</h3>
              <p className="text-2xl md:text-3xl text-blue-700">
                <AnimatedCounter prefix="$" end={79.9} suffix="B" duration={2700} />
              </p>
            </div>
            
            {/* Indian Shopify Stores - Reduced text size */}
            <div className="bg-blue-600 p-6 rounded-lg shadow-sm text-white">
              <h3 className="text-lg mb-1">Indian Shopify Stores</h3>
              <p className="text-2xl md:text-3xl">
                <AnimatedCounter end={89} suffix=",000+" duration={2900} />
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodMarketStats;
