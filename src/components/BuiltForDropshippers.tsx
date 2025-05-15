
import React from "react";
import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";

const BuiltForDropshippers = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
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
                Scalysis picks your highest-quality orders daily — cutting RTO, saving on shipping, and driving profit. Scale with COD.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Globe Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-80 rounded-lg overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0">
              <Globe className="top-0" />
            </div>
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_100%,rgba(0,0,0,0.1),rgba(255,255,255,0))]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForDropshippers;
