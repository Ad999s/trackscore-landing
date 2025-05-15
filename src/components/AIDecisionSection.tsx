
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Package, PackageX, IndianRupee } from "lucide-react";

// Counter animation component for metrics
const AnimatedCounter = ({ 
  value, 
  prefix = "", 
  suffix = "", 
  duration = 2000
}: { 
  value: number,
  prefix?: string,
  suffix?: string,
  duration?: number 
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(countRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrameId: number;
    
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Easing function for smoother animation
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
      
      // Calculate the current count based on progress
      const progressRatio = Math.min(progress / duration, 1);
      const easedProgress = easeOutQuart(progressRatio);
      const currentCount = Math.floor(easedProgress * value);
      
      setCount(currentCount);
      
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };
    
    animationFrameId = requestAnimationFrame(animateCount);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, value, duration]);
  
  return (
    <span ref={countRef} className="font-mono font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// Main component
const AIDecisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Animation variants for elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Let Your AI Decide What Ships
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Scalysis filters out risky COD orders with machine learning precision — so you don't bleed shipping cost or ruin your ROAS.
          </motion.p>
          
          <motion.p 
            className="text-sm text-gray-400 italic"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            "Live model trained on millions of Indian D2C orders."
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* COD RTO Reduction */}
          <motion.div 
            className={cn(
              "p-6 rounded-lg bg-black bg-opacity-60 backdrop-blur-sm",
              "border border-gray-800 relative overflow-hidden"
            )}
            variants={itemVariants}
          >
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-500/20 rounded-full blur-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-3">
                <PackageX className="h-8 w-8 text-red-400 mr-2" />
              </div>
              <h3 className="text-lg font-medium text-gray-300 mb-2">COD RTO Reduction</h3>
              <p className="text-3xl md:text-4xl font-bold">
                <span className="text-red-400">↓ </span>
                <AnimatedCounter value={41.3} suffix="%" />
              </p>
            </div>
          </motion.div>
          
          {/* Fake Orders Blocked */}
          <motion.div 
            className={cn(
              "p-6 rounded-lg bg-black bg-opacity-60 backdrop-blur-sm",
              "border border-gray-800 relative overflow-hidden"
            )}
            variants={itemVariants}
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-500/20 rounded-full blur-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-3">
                <Package className="h-8 w-8 text-amber-400 mr-2" />
              </div>
              <h3 className="text-lg font-medium text-gray-300 mb-2">Fake Orders Blocked</h3>
              <p className="text-3xl md:text-4xl font-bold">
                <AnimatedCounter value={3212} /> <span className="text-sm font-normal text-gray-400">this week</span>
              </p>
            </div>
          </motion.div>
          
          {/* Shipping Saved */}
          <motion.div 
            className={cn(
              "p-6 rounded-lg bg-black bg-opacity-60 backdrop-blur-sm",
              "border border-gray-800 relative overflow-hidden"
            )}
            variants={itemVariants}
          >
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500/20 rounded-full blur-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-3">
                <IndianRupee className="h-8 w-8 text-green-400 mr-2" />
              </div>
              <h3 className="text-lg font-medium text-gray-300 mb-2">Shipping Saved</h3>
              <p className="text-3xl md:text-4xl font-bold">
                <span className="text-green-400">₹</span>
                <AnimatedCounter value={84.2} /> <span className="text-green-400">L</span> 
                <span className="text-sm font-normal text-gray-400 ml-1">saved across brands</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIDecisionSection;
