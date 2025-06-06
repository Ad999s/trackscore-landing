import React from "react";
import { cn } from "@/lib/utils";
import { BoxIcon, ShieldCheckIcon, BarChart, TrendingUp, Database, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
const WhatsInsideScalysis = () => {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return <div className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-2 md:text-5xl">
            All Your RTO Problems.<span className="text-gradient"> Packed In One Ecosystem.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
           Get Everything At One Place.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
        once: true
      }} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Smart Order Selection */}
          <motion.div variants={item} className="rounded-xl p-4 sm:p-6 text-white bg-cover bg-center bg-no-repeat shadow-lg hover:shadow-xl transition-[background-size,box-shadow] duration-500 ease-in-out" style={{
          backgroundImage: 'url(https://framerusercontent.com/images/4i9FPdNBCCe7MA9cLPYtlp0TxRc.png)',
          backgroundSize: '100%',
          backgroundPosition: 'left 1%',
          transform: 'scaleY(-1)'
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundSize = '105%';
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundSize = '100%';
        }}>

            <div className="flex items-start gap-3 sm:gap-4">
              <BoxIcon className="h-6 w-6 sm:h-8 sm:w-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Smart Order Selection</h3>
                <p className="text-sm sm:text-base text-white/90">
                  90%+ precision. Full override control. Built for ops at scale. Handles 10k+ orders/day. No Lag.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Smart Meta Targeting */}
          <motion.div variants={item} className="rounded-xl p-4 sm:p-6 text-white bg-cover bg-center bg-no-repeat shadow-lg hover:shadow-xl transition-[background-size,box-shadow] duration-500 ease-in-out" style={{
          backgroundImage: 'url(https://framerusercontent.com/images/4i9FPdNBCCe7MA9cLPYtlp0TxRc.png)',
          backgroundSize: '100%'
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundSize = '105%';
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundSize = '100%';
        }}>
            <div className="flex items-start gap-3 sm:gap-4">
              <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Smart Meta Targeting</h3>
                <p className="text-sm sm:text-base text-white/90">
                  Same ad spend, better audience. No CPM hikes. Save 4% Monthly Ad spent and 6% Boost in delivery rates.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Features grid */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
        once: true
      }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* RTO Adjusted PNL Tracker */}
          <motion.div variants={item} className="bg-gray-100/50 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start gap-3 mb-2 sm:mb-3">
              <BarChart className="h-6 w-6 sm:h-7 sm:w-7 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">RTO Adjusted PNL Tracker</h4>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 ml-9 sm:ml-11">Clean, CFO-grade financial visibility, Auto-synced with AWB & ads</p>
          </motion.div>

          {/* Auto AWB Status Tracker */}
          <motion.div variants={item} className="bg-gray-100/50 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start gap-3 mb-2 sm:mb-3">
              <BoxIcon className="h-6 w-6 sm:h-7 sm:w-7 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Auto AWB Status Tracker</h4>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 ml-9 sm:ml-11">Track Every Order's Journey — Automatically. From forward to return to delivery — we monitor every status.</p>
          </motion.div>

          {/* 30 Day Cashflow Projection */}
          <motion.div variants={item} className="bg-gray-100/50 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start gap-3 mb-2 sm:mb-3">
              <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">30-Day Cashflow Projection</h4>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 ml-9 sm:ml-11">RTO-adjusted projections. Works even if you're scaling fast</p>
          </motion.div>

          {/* Real Time Overview Dashboard */}
          <motion.div variants={item} className="bg-gray-100/50 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start gap-3 mb-2 sm:mb-3">
              <Database className="h-6 w-6 sm:h-7 sm:w-7 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Real Time Overview Dashboard</h4>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 ml-9 sm:ml-11">Customizable by team. Made for speed</p>
          </motion.div>

          {/* Business Health Score */}
          <motion.div variants={item} className="bg-gray-100/50 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start gap-3 mb-2 sm:mb-3">
              <ShieldCheckIcon className="h-6 w-6 sm:h-7 sm:w-7 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Business Health Score</h4>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 ml-9 sm:ml-11">Benchmark against other D2C brands. Backed by real unit economics</p>
          </motion.div>

          {/* 24/7 Monitoring - only show on desktop/large screens for balanced grid */}
          <motion.div variants={item} className="hidden lg:block bg-gray-100/50 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start gap-3 mb-2 sm:mb-3">
              <Clock className="h-6 w-6 sm:h-7 sm:w-7 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">24/7 Monitoring</h4>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 ml-9 sm:ml-11">Constant vigilance on your metrics, alerts for any anomalies</p>
          </motion.div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.3,
        duration: 0.6
      }} className="text-center mt-8 sm:mt-12">
          <p className="inline-block text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-600 rounded-full">
            Built for Scale — Handles 10K+ orders per day with sub-second response times
          </p>
        </motion.div>
      </div>
    </div>;
};
export default WhatsInsideScalysis;