
import React from "react";
import { motion } from "framer-motion";

const BuiltForDropshippers = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Offer COD without fear.
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
              <h3 className="text-2xl font-bold text-gray-800">
                Customers love COD. <span className="text-blue-600">So does your ROAS.</span>
              </h3>
              <p className="text-lg font-medium text-red-500">The only problem? RTO.</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Scalysis picks your <span className="font-semibold bg-yellow-100 px-1 rounded">highest-quality orders</span> daily — 
                cutting RTO, saving on shipping, and <span className="font-semibold text-green-600">driving profit</span>. 
                No bluff. Just results.
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
