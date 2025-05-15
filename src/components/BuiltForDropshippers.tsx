
import React from "react";
import { motion } from "framer-motion";

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
            Offer COD <span className="text-blue-500">without fear.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for dropshippers, D2C brands, and anyone scaling with COD.
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
                Scalysis picks your highest-quality orders daily — cutting RTO, saving on shipping, and driving profit. No bluff. Just results.
              </p>
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
