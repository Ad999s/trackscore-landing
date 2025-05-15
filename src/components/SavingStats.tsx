
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

// StatCard component for each metric
const StatCard = ({ 
  title, 
  value, 
  prefix = "", 
  suffix = "", 
  delay = 0,
  color = "bg-blue-50 text-blue-600"
}: { 
  title: string; 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  delay?: number;
  color?: string;
}) => {
  return (
    <motion.div 
      className={cn(
        "bg-white rounded-xl shadow-medium border border-blue-50 p-6 transform transition-all",
        "hover:shadow-lg hover:-translate-y-1"
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1 * delay }}
    >
      <div className="flex flex-col gap-2">
        <div className={cn("text-3xl md:text-4xl font-bold", color)}>
          <CountUp end={value} prefix={prefix} suffix={suffix} duration={2000} />
        </div>
        <div className="text-gray-600 text-sm md:text-base font-medium">
          {title}
        </div>
      </div>
    </motion.div>
  );
};

const SavingStats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Scalysis is helping <span className="text-gradient">D2C brands save</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our AI-powered solution delivers real, measurable results for e-commerce businesses across India
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              title="RTO Drop"
              value={45}
              suffix="%"
              delay={0}
              color="text-blue-600"
            />
            <StatCard 
              title="Unnecessary Shipping Costs Saved"
              value={85}
              suffix=" lakh/week"
              delay={1}
              color="text-green-600"
            />
            <StatCard 
              title="Inventory Units Saved From Being Blocked"
              value={89000}
              delay={2}
              color="text-purple-600"
            />
          </div>

          <div className="mt-12 text-center">
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-blue-600 font-medium px-4 py-2 bg-blue-100 rounded-full inline-block">
                Backed by real data from millions of orders
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SavingStats;
