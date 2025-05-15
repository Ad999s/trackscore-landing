
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// CountUp component to animate numbers from 0 to target value
const CountUp = ({ 
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
    <span ref={countRef}>
      {prefix}
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
};

const SavingStats = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
            <motion.div 
              className="text-6xl md:text-8xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <CountUp end={85} suffix=" lakh" />
            </motion.div>
            
            <motion.div 
              className="text-xl md:text-2xl max-w-md text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                <span className="block font-medium text-2xl md:text-3xl mb-2">Scalysis is helping D2C brands save</span>
                unnecessary shipping costs each week with smart order selection
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="px-4 py-2 bg-blue-500 rounded-full inline-block text-sm font-medium">
              Backed by real data from millions of orders
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SavingStats;
