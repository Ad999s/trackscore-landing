
import React from "react";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

const World = lazy(() => import("@/components/ui/globe").then((module) => ({ default: module.World })));

export default function GlobeDemo() {
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
    initialPosition: { lat: 22.3193, lng: 77.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.2090,
      endLat: 19.0760,
      endLng: 72.8777,
      arcAlt: 0.2,
      color: "#06b6d4", // Mumbai
    },
    {
      order: 2,
      startLat: 28.6139,
      startLng: 77.2090,
      endLat: 13.0827,
      endLng: 80.2707,
      arcAlt: 0.3,
      color: "#3b82f6", // Chennai
    },
    {
      order: 3,
      startLat: 28.6139,
      startLng: 77.2090,
      endLat: 22.5726,
      endLng: 88.3639,
      arcAlt: 0.25,
      color: "#6366f1", // Kolkata
    },
    {
      order: 4,
      startLat: 28.6139,
      startLng: 77.2090,
      endLat: 12.9716,
      endLng: 77.5946,
      arcAlt: 0.2,
      color: "#06b6d4", // Bangalore
    },
    {
      order: 5,
      startLat: 28.6139,
      startLng: 77.2090,
      endLat: 23.0225,
      endLng: 72.5714,
      arcAlt: 0.3,
      color: "#3b82f6", // Ahmedabad
    },
    {
      order: 6,
      startLat: 28.6139,
      startLng: 77.2090,
      endLat: 26.9124,
      endLng: 75.7873,
      arcAlt: 0.15,
      color: "#6366f1", // Jaipur
    },
    {
      order: 7,
      startLat: 28.6139,
      startLng: 77.2090,
      endLat: 17.3850,
      endLng: 78.4867,
      arcAlt: 0.2,
      color: "#06b6d4", // Hyderabad
    },
    {
      order: 8,
      startLat: 28.6139,
      startLng: 77.2090,
      endLat: 25.5941,
      endLng: 85.1376,
      arcAlt: 0.2,
      color: "#3b82f6", // Patna
    },
    {
      order: 9,
      startLat: 28.6139,
      startLng: 77.2090,
      endLat: 15.2993,
      endLng: 74.1240,
      arcAlt: 0.3,
      color: "#6366f1", // Goa
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-blue-800">
            India to India Dispatches
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-gray-700 max-w-md mt-2 mx-auto">
            This globe shows only India-based movements. All arcs originate from Delhi and span across the country.
          </p>
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-white z-40" />
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-gray-500">Loading globe...</div>}>
            <World data={sampleArcs} globeConfig={globeConfig} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
