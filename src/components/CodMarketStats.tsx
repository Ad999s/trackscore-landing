
import React from "react";
import { motion } from "framer-motion";

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
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = React.useState(false);
  
  React.useEffect(() => {
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
  
  React.useEffect(() => {
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
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Scalysis = <span className="text-blue-500">(COD TAM − Junk Orders)</span> → Scalable Market
          </h2>
        </motion.div>

        {/* New body text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            Scalysis helps you tap into the massive COD market — but only the part that actually converts. 
            We filter out fake, bot, and high-risk orders so you reach the real buyers — 
            the ones who accept delivery and drive profit.
          </p>
        </motion.div>

        {/* Horizontal Stats Display - Updated with middle box bigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-7 gap-6 mb-8"
        >
          {/* All COD Market Size - Smaller */}
          <div className="md:col-span-2 bg-blue-50 p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg text-blue-700 mb-1">Total Indian COD Market Size</h3>
            <p className="text-2xl md:text-3xl text-blue-600">
              <AnimatedCounter prefix="$" end={79.9} suffix="B" duration={2500} />
            </p>
          </div>
          
          {/* Clean COD Market - Larger */}
          <div className="md:col-span-3 bg-blue-100 p-6 rounded-lg shadow-sm text-center">
            <h3 className="text-lg text-blue-800 mb-1">Scalysis Real COD Market</h3>
            <p className="text-2xl md:text-4xl text-blue-700">
              <AnimatedCounter prefix="$" end={47.94} suffix="B" duration={2700} />
            </p>
          </div>
          
          {/* Indian Shopify Stores - Smaller */}
          <div className="md:col-span-2 bg-blue-600 p-6 rounded-lg shadow-sm text-white text-center">
            <h3 className="text-lg mb-1">Indian Shopify Stores</h3>
            <p className="text-2xl md:text-3xl">
              <AnimatedCounter end={89} suffix=",000+" duration={2900} />
            </p>
          </div>
        </motion.div>

        {/* Subtext - Updated */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg font-medium text-blue-600 italic">
            Scalysis helps you tap into goldmine of COD Audience, Scale without RTO.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CodMarketStats;
