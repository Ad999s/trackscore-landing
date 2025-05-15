
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
    <section className="py-4 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 md:space-x-8">
            <motion.div 
              className="text-5xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <CountUp end={85} suffix=" lakh" />
            </motion.div>
            
            <motion.div 
              className="text-base md:text-lg max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                <span className="block font-medium mb-0">Scalysis is helping D2C brands save</span>
                unnecessary shipping costs each week
              </p>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="px-3 py-1 bg-blue-500 rounded-full inline-block text-xs font-medium">
              Backed by real data from millions of orders
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="md:hidden mt-3 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="px-3 py-1 bg-blue-500 rounded-full inline-block text-xs font-medium">
            Backed by real data from millions of orders
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SavingStats;
