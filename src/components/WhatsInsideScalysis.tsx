
import React from "react";
import { cn } from "@/lib/utils";
import { 
  BoxIcon, 
  ShieldCheckIcon, 
  BarChart, 
  TrendingUp, 
  Database,
  Clock,
  Users
} from "lucide-react";
import { motion } from "framer-motion";

const WhatsInsideScalysis = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What's Inside <span className="text-gradient">Scalysis</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Scalysis: The Backbone of ALL Indian E-commerce businesses
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* Smart Order Selection */}
          <motion.div 
            variants={item}
            className="bg-primary rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
          >
            <div className="flex items-start gap-4">
              <BoxIcon className="h-8 w-8 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Smart Order Selection</h3>
                <p className="text-white/90">
                  90%+ precision. Full override control. Built for ops at scale. Handles 10k+ orders/day. No Lag.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Smart Meta Targeting */}
          <motion.div 
            variants={item}
            className="bg-primary rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
          >
            <div className="flex items-start gap-4">
              <TrendingUp className="h-8 w-8 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Smart Meta Targeting</h3>
                <p className="text-white/90">
                  Same ad spend, better audience. No CPM hikes.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Features grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* RTO Adjusted PNL Tracker */}
          <motion.div 
            variants={item}
            className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4 mb-3">
              <BarChart className="h-7 w-7 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">RTO Adjusted PNL Tracker</h4>
              </div>
            </div>
            <p className="text-gray-600 ml-11">Clean, CFO-grade financial visibility, Auto-synced with AWB & ads</p>
          </motion.div>

          {/* Auto AWB Status Tracker */}
          <motion.div 
            variants={item}
            className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4 mb-3">
              <BoxIcon className="h-7 w-7 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">Auto AWB Status Tracker</h4>
              </div>
            </div>
            <p className="text-gray-600 ml-11">Track Every Order's Journey — Automatically. From forward to return to delivery — we monitor every status.</p>
          </motion.div>

          {/* 30 Day Cashflow Projection */}
          <motion.div 
            variants={item}
            className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4 mb-3">
              <TrendingUp className="h-7 w-7 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">30-Day Cashflow Projection</h4>
              </div>
            </div>
            <p className="text-gray-600 ml-11">RTO-adjusted projections. Works even if you're scaling fast</p>
          </motion.div>

          {/* Real Time Overview Dashboard */}
          <motion.div 
            variants={item}
            className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4 mb-3">
              <Database className="h-7 w-7 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">Real Time Overview Dashboard</h4>
              </div>
            </div>
            <p className="text-gray-600 ml-11">Customizable by team. Made for speed</p>
          </motion.div>

          {/* Business Health Score */}
          <motion.div 
            variants={item}
            className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4 mb-3">
              <ShieldCheckIcon className="h-7 w-7 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">Business Health Score</h4>
              </div>
            </div>
            <p className="text-gray-600 ml-11">Benchmark against other D2C brands. Backed by real unit economics</p>
          </motion.div>

          {/* Hide last block on mobile, show on larger screens for balanced grid */}
          <motion.div 
            variants={item}
            className="hidden lg:block bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4 mb-3">
              <Clock className="h-7 w-7 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">24/7 Monitoring</h4>
              </div>
            </div>
            <p className="text-gray-600 ml-11">Constant vigilance on your metrics, alerts for any anomalies</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="inline-block text-sm font-medium px-4 py-2 bg-blue-50 text-blue-600 rounded-full">
            Built for Scale — Handles 10K+ orders per day with sub-second response times
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatsInsideScalysis;
