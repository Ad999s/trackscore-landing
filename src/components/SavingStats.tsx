
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const SavingStats = () => {
  return (
    <section className="py-4 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-center md:text-left w-full"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>START 30 DAY FREE TRIAL TODAY</p>
          </motion.div>
          
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ShimmerButton 
              background="white" 
              shimmerColor="rgba(59, 130, 246, 0.5)"
              className="text-primary hover:bg-white border-white"
              onClick={() => window.location.href = "#get-started"}
            >
              <span className="text-sm font-medium">Get Started</span>
            </ShimmerButton>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="md:hidden mt-3 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ShimmerButton 
            background="white" 
            shimmerColor="rgba(59, 130, 246, 0.5)"
            className="text-primary hover:bg-white border-white"
            onClick={() => window.location.href = "#get-started"}
          >
            <span className="text-sm font-medium">Get Started</span>
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
};

export default SavingStats;
