
import React, { Suspense } from "react";
import { motion } from "framer-motion";

const IndiaLovesCOD = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 77.1694 }, // Centered on India
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const sampleArcs = [
    {
      startLat: 28.6139, startLng: 77.2090, endLat: 19.0760, endLng: 72.8777, arcAlt: 0.2, color: "#06b6d4", // Mumbai
    },
    {
      startLat: 28.6139, startLng: 77.2090, endLat: 13.0827, endLng: 80.2707, arcAlt: 0.3, color: "#3b82f6", // Chennai
    },
    {
      startLat: 28.6139, startLng: 77.2090, endLat: 22.5726, endLng: 88.3639, arcAlt: 0.25, color: "#6366f1", // Kolkata
    },
    {
      startLat: 28.6139, startLng: 77.2090, endLat: 12.9716, endLng: 77.5946, arcAlt: 0.2, color: "#06b6d4", // Bangalore
    },
    {
      startLat: 28.6139, startLng: 77.2090, endLat: 23.0225, endLng: 72.5714, arcAlt: 0.3, color: "#3b82f6", // Ahmedabad
    },
    {
      startLat: 28.6139, startLng: 77.2090, endLat: 26.9124, endLng: 75.7873, arcAlt: 0.15, color: "#6366f1", // Jaipur
    },
    {
      startLat: 28.6139, startLng: 77.2090, endLat: 17.3850, endLng: 78.4867, arcAlt: 0.2, color: "#06b6d4", // Hyderabad
    },
    {
      startLat: 28.6139, startLng: 77.2090, endLat: 25.5941, endLng: 85.1376, arcAlt: 0.2, color: "#3b82f6", // Patna
    },
    {
      startLat: 28.6139, startLng: 77.2090, endLat: 15.2993, endLng: 74.1240, arcAlt: 0.3, color: "#6366f1", // Goa
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            India Loves COD. 65% all transactions powered by COD.
          </h2>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px] w-full">
          <div className="absolute w-full inset-x-0 h-full z-10">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading globe...</div>}>
              {/* Globe will be loaded via index.tsx */}
              <div className="w-full h-full bg-blue-50/20 rounded-lg">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Globe visualization loading...
                </div>
              </div>
            </Suspense>
          </div>
          <div className="absolute w-full bottom-0 inset-x-0 h-20 bg-gradient-to-b from-transparent to-white z-40" />
        </div>
      </div>
    </section>
  );
};

export default IndiaLovesCOD;
