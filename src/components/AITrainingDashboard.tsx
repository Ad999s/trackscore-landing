
"use client";
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, AlertOctagon, RefreshCw, ShoppingBag, Sparkles, Smartphone, Home } from "lucide-react";

const AITrainingDashboard = () => {
  const [progress, setProgress] = React.useState(87);
  
  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      {/* Neural arcs background animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
      </div>
      
      {/* Flowing data animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-blue-500/70 to-transparent"
            style={{ 
              top: `${15 + index * 20}%`,
              left: "-10%",
              width: "120%"
            }}
            animate={{
              x: ["0%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + index * 2,
              ease: "linear",
              delay: index * 1.5
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white mb-4">
            Scalysis AI Training Engine
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Learning from millions of COD orders across India — in real time.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Progress Block */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 h-full overflow-hidden">
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-semibold text-white mb-6">Training Progress</h3>
                
                <div className="flex justify-center items-center mb-6">
                  <div className="relative h-40 w-40">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        cx="50" cy="50" r="40" 
                        fill="transparent" 
                        stroke="#1e293b" 
                        strokeWidth="5" 
                      />
                      <motion.circle 
                        cx="50" cy="50" r="40" 
                        fill="transparent" 
                        stroke="url(#progressGradient)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={2 * Math.PI * 40 * (1 - progress/100)}
                        initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - progress/100) }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                      <text 
                        x="50%" 
                        y="50%" 
                        dominantBaseline="middle" 
                        textAnchor="middle" 
                        fill="white" 
                        fontSize="16" 
                        fontWeight="bold"
                      >
                        {progress}%
                      </text>
                      <defs>
                        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#60a5fa" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Animated dots around the circle */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-500 rounded-full"
                        style={{
                          top: `${50 + 46 * Math.sin(2 * Math.PI * i / 8)}%`,
                          left: `${50 + 46 * Math.cos(2 * Math.PI * i / 8)}%`,
                        }}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.25,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-center text-gray-300 mb-2">
                  25,482 order patterns analyzed
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Customer Behavior Analysis */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Order Pattern Clustering</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1 bg-green-900/20 rounded-full mr-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-gray-200">Fake Address Flags</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1 bg-red-900/20 rounded-full mr-3">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="text-gray-200">Bot-like Patterns</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1 bg-orange-900/20 rounded-full mr-3">
                      <AlertOctagon className="w-5 h-5 text-orange-500" />
                    </div>
                    <span className="text-gray-200">High RTO Zip Codes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1 bg-blue-900/20 rounded-full mr-3">
                      <RefreshCw className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="text-gray-200">Repeat RTO Customers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Category-Based Learning */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Training by Product Category</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-purple-900/20 rounded-full">
                        <ShoppingBag className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-gray-200">Fashion</span>
                    </div>
                    <span className="text-sm text-gray-400">8,927 orders</span>
                  </div>
                  <Progress value={89} className="h-2 bg-gray-800" />
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-pink-900/20 rounded-full">
                        <Sparkles className="w-4 h-4 text-pink-400" />
                      </div>
                      <span className="text-gray-200">Beauty</span>
                    </div>
                    <span className="text-sm text-gray-400">5,732 orders</span>
                  </div>
                  <Progress value={57} className="h-2 bg-gray-800" />
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-blue-900/20 rounded-full">
                        <Smartphone className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-gray-200">Electronics</span>
                    </div>
                    <span className="text-sm text-gray-400">3,451 orders</span>
                  </div>
                  <Progress value={35} className="h-2 bg-gray-800" />
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-green-900/20 rounded-full">
                        <Home className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-200">Home Goods</span>
                    </div>
                    <span className="text-sm text-gray-400">2,189 orders</span>
                  </div>
                  <Progress value={22} className="h-2 bg-gray-800" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Model Performance Metrics */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-3">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">AI Model Accuracy</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Accuracy", value: "95.4%", color: "from-blue-500/20 to-blue-600/20" },
                    { label: "Precision", value: "92.8%", color: "from-green-500/20 to-green-600/20" },
                    { label: "RTO Drop Rate", value: "-42.1%", color: "from-purple-500/20 to-purple-600/20" },
                    { label: "Decision Confidence", value: "High", color: "from-orange-500/20 to-orange-600/20" }
                  ].map((metric, idx) => (
                    <div 
                      key={idx} 
                      className={`bg-gradient-to-br ${metric.color} backdrop-blur-sm border border-gray-800/50 rounded-lg p-4 flex flex-col items-center justify-center`}
                    >
                      <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
                      <p className="text-2xl font-bold text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
        
        {/* Glowing Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {["View Selection Logs", "Improve Model", "Push to Live Orders"].map((text, idx) => (
            <button
              key={idx}
              className="relative px-6 py-3 bg-transparent text-white font-medium rounded-md overflow-hidden group"
            >
              <span className="relative z-10">{text}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-70 group-hover:opacity-90 transition-opacity"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 blur-md group-hover:blur-lg transition-all"></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITrainingDashboard;
