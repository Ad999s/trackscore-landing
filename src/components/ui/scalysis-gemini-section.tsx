
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Chat, Create, Analyze, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const GeminiButton = ({ 
  icon: Icon, 
  label 
}: { 
  icon: React.ElementType; 
  label: string 
}) => {
  return (
    <Button
      variant="outline"
      className="flex items-center gap-2 bg-transparent border border-blue-400/30 hover:border-blue-400/60 text-white rounded-full py-2 px-4 hover:bg-blue-900/20 transition-all"
    >
      <Icon className="text-blue-400" size={18} />
      <span>{label}</span>
    </Button>
  );
};

export function ScalysisGeminiSection() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background stars/sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="star-sm absolute top-[15%] right-[20%] w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="star-md absolute top-[25%] left-[15%] w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="star-lg absolute bottom-[30%] right-[25%] w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        
        {/* Star with glow */}
        <div className="absolute top-[10%] left-[30%]">
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-50"></div>
            <div className="absolute inset-1 bg-white rounded-full"></div>
          </div>
        </div>
        
        {/* Main large sparkle */}
        <div className="absolute top-[40%] right-[10%]">
          <div className="relative w-10 h-10 rotate-45">
            <div className="absolute inset-0 bg-blue-300 blur-lg opacity-60"></div>
            <div className="absolute inset-0 bg-blue-400 transform rotate-45">
              <div className="w-full h-full">
                <div className="w-10 h-2 bg-white absolute top-4 left-0"></div>
                <div className="w-2 h-10 bg-white absolute top-0 left-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Left wire graphic */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <svg width="300" height="200" viewBox="0 0 300 200">
          <path 
            d="M0 100 C100 50, 150 150, 300 100" 
            stroke="url(#blueGradient)" 
            strokeWidth="1.5" 
            fill="none" 
          />
          <path 
            d="M0 110 C100 60, 150 160, 300 110" 
            stroke="url(#blueGradient)" 
            strokeWidth="1" 
            fill="none" 
            opacity="0.6" 
          />
          <path 
            d="M0 90 C100 40, 150 140, 300 90" 
            stroke="url(#blueGradient)" 
            strokeWidth="1" 
            fill="none" 
            opacity="0.6" 
          />
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Right wire graphic */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <svg width="300" height="200" viewBox="0 0 300 200">
          <path 
            d="M0 100 C100 150, 150 50, 300 100" 
            stroke="url(#blueGradient)" 
            strokeWidth="1.5" 
            fill="none" 
          />
          <path 
            d="M0 110 C100 160, 150 60, 300 110" 
            stroke="url(#blueGradient)" 
            strokeWidth="1" 
            fill="none" 
            opacity="0.6" 
          />
          <path 
            d="M0 90 C100 140, 150 40, 300 90" 
            stroke="url(#blueGradient)" 
            strokeWidth="1" 
            fill="none" 
            opacity="0.6" 
          />
        </svg>
      </div>

      {/* Logo */}
      <div className="absolute top-10 left-10">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
          <div className="text-blue-500 rotate-45">
            <div className="w-6 h-1.5 bg-blue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-1.5 h-6 bg-blue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
      
      {/* Version tag */}
      <div className="absolute top-10 right-10">
        <span className="text-blue-400 text-xl font-light">Ultra 1.0</span>
      </div>

      {/* Main headline */}
      <div className="text-center z-10 mb-10">
        <h1 className="text-7xl font-light mb-8">
          <span className="text-white">The </span>
          <span className="text-blue-400 font-normal">Scalysis</span>
          <span className="text-white"> era</span>
        </h1>
        
        <p className="text-gray-300 max-w-lg mx-auto text-xl">
          Smarter COD order selection for greater profitability
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap justify-center gap-6 z-10">
        <GeminiButton icon={Chat} label="Chat" />
        <GeminiButton icon={Create} label="Create" />
        <GeminiButton icon={Analyze} label="Analyze" />
        <GeminiButton icon={Activity} label="Build" />
      </div>

      {/* Performance metrics */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-16 right-16 max-w-xs"
      >
        <div className="backdrop-blur-sm bg-black/50 border border-blue-900/30 rounded-lg p-4">
          <div className="text-blue-400 text-sm mb-2">Scalysis Performance</div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Conversion Lift</span>
              <span className="text-white">+42.7%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">RTO Reduction</span>
              <span className="text-white">-85.2%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Cash Flow Improvement</span>
              <span className="text-white">+46.3%</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Code snippet visualization */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute bottom-16 right-48 max-w-xs hidden lg:block"
      >
        <div className="backdrop-blur-sm bg-black/50 border border-blue-900/30 rounded-lg p-3">
          <div className="text-blue-500 text-xs mb-1 font-mono">model.accuracy</div>
          <div className="text-xs font-mono">
            <pre className="text-green-400">{'const score = 96.8;'}</pre>
            <pre className="text-blue-300">{'// Measured across 3.2M orders'}</pre>
            <pre className="text-white">{'return predictionConfidence > 0.9;'}</pre>
            <pre className="text-blue-400">{'function optimizeCashFlow() {'}</pre>
            <pre className="text-blue-200">{'  reduceBadOrders();'}</pre>
            <pre className="text-blue-400">{'}'}</pre>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
