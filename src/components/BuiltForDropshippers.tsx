
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const BuiltForDropshippers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Offer COD Without <span className="text-blue-500">Second Thought.</span> 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlimited Fun. Zero RTO risk. No ROAS drop.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
Indian customers love COD — Scalysis lets you accept every order without fear, then smartly selects only the best ones to ship, protecting your ad spend and maximizing profit.              </p>
              
              <div className="space-y-3 mt-6">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Build a 10x Wider Customer Base</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Protect 100% Of Revenue</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">No Overblocking, Lean Profits</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-lg overflow-hidden shadow-xl"
          >
            <video 
              src="https://framerusercontent.com/assets/mWYPZsyYGsgYETs0FSJHYv5B8oA.mp4" 
              loop 
              preload="auto" 
              muted 
              playsInline 
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "0.5rem",
                display: "block",
                objectFit: "cover",
                backgroundColor: "rgba(0, 0, 0, 0)",
                objectPosition: "50% 50%"
              }} 
              autoPlay
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForDropshippers;
