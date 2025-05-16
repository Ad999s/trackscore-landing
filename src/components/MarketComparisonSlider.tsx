
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Map } from "lucide-react";
import { Globe } from "@/components/ui/globe";

const MarketComparisonSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [isScalysisView, setIsScalysisView] = useState(false);
  
  // Update state based on slider value
  useEffect(() => {
    setIsScalysisView(sliderValue === 100);
  }, [sliderValue]);

  // Animation variants
  const mapVariants = {
    prepaid: {
      scale: 1,
      opacity: 1,
    },
    scalysis: {
      scale: 1.05,
      opacity: 1,
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 } 
    }
  };

  const statsItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };
  
  // Handle slider change
  const handleSliderChange = (value: number[]) => {
    // Only allow values 0 or 100 to create a toggle effect
    const newValue = value[0] > 50 ? 100 : 0;
    setSliderValue(newValue);
  };

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
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            See How Big Your <span className="text-blue-500">Real Market Is</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare your current market reach with Scalysis-powered expansion
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-10">
          {/* Left Column - Map Visualization */}
          <div className="relative h-[500px] perspective-1000">
            <motion.div 
              className="w-full h-full relative rounded-lg overflow-hidden shadow-xl"
              animate={isScalysisView ? "scalysis" : "prepaid"}
              variants={mapVariants}
              transition={{ duration: 0.5 }}
            >
              {/* Globe underneath */}
              <div className="absolute inset-0 opacity-90">
                <Globe 
                  config={{
                    width: 800,
                    height: 800,
                    glowColor: isScalysisView ? [0.3, 0.6, 1] : [0.5, 0.5, 0.5],
                    baseColor: isScalysisView ? [0.3, 0.3, 1] : [0.2, 0.2, 0.2],
                    markerColor: isScalysisView 
                      ? [66/255, 135/255, 245/255] 
                      : [120/255, 120/255, 120/255],
                    markers: isScalysisView 
                      ? [
                          // Tier 1 cities with bigger size
                          { location: [19.076, 72.8777], size: 0.15 }, // Mumbai
                          { location: [28.6139, 77.2090], size: 0.15 }, // Delhi
                          { location: [12.9716, 77.5946], size: 0.15 }, // Bangalore
                          { location: [13.0827, 80.2707], size: 0.15 }, // Chennai
                          { location: [17.3850, 78.4867], size: 0.15 }, // Hyderabad
                          { location: [22.5726, 88.3639], size: 0.15 }, // Kolkata
                          
                          // Many Tier 2 & 3 cities
                          { location: [23.0225, 72.5714], size: 0.1 }, // Ahmedabad
                          { location: [18.5204, 73.8567], size: 0.1 }, // Pune
                          { location: [26.9124, 75.7873], size: 0.1 }, // Jaipur
                          { location: [25.5941, 85.1376], size: 0.1 }, // Patna
                          { location: [26.8467, 80.9462], size: 0.1 }, // Lucknow
                          { location: [21.1458, 79.0882], size: 0.1 }, // Nagpur
                          { location: [30.7333, 76.7794], size: 0.1 }, // Chandigarh
                          { location: [20.2961, 85.8245], size: 0.1 }, // Bhubaneswar
                          { location: [23.2599, 77.4126], size: 0.1 }, // Bhopal
                          { location: [9.9312, 76.2673], size: 0.08 },  // Kochi
                          { location: [10.5276, 76.2144], size: 0.08 }, // Thrissur
                          { location: [22.7196, 75.8577], size: 0.08 }, // Indore
                          { location: [17.6868, 83.2185], size: 0.08 }, // Visakhapatnam
                          { location: [11.0168, 76.9558], size: 0.08 }, // Coimbatore
                          { location: [22.3072, 73.1812], size: 0.08 }, // Vadodara
                          { location: [9.9252, 78.1198], size: 0.08 },  // Madurai
                          { location: [16.3067, 80.4365], size: 0.08 }, // Vijayawada
                          { location: [31.3260, 75.5762], size: 0.08 }, // Jalandhar
                          { location: [26.1445, 91.7362], size: 0.08 }, // Guwahati
                          { location: [23.3441, 85.3096], size: 0.08 }, // Ranchi
                        ]
                      : [
                          // Only Tier 1 cities with small size
                          { location: [19.076, 72.8777], size: 0.1 },   // Mumbai
                          { location: [28.6139, 77.2090], size: 0.1 },  // Delhi
                          { location: [12.9716, 77.5946], size: 0.1 },  // Bangalore
                          { location: [13.0827, 80.2707], size: 0.1 },  // Chennai
                          { location: [17.3850, 78.4867], size: 0.1 },  // Hyderabad
                          { location: [22.5726, 88.3639], size: 0.1 },  // Kolkata
                        ],
                    mapSamples: 20000,
                    mapBrightness: isScalysisView ? 3 : 1.2,
                    diffuse: isScalysisView ? 0.8 : 0.4,
                  }}
                />
              </div>
              
              {/* Overlay for captions */}
              <div className="absolute bottom-10 left-0 right-0 text-center px-6 py-4">
                <motion.div 
                  className={`p-4 rounded-lg ${isScalysisView ? 'bg-blue-500/10' : 'bg-gray-500/10'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className={`text-xl font-bold ${isScalysisView ? 'text-blue-600' : 'text-gray-700'}`}>
                    {isScalysisView 
                      ? "Scalysis unlocks your true TAM by filtering only the profitable COD orders" 
                      : "Prepaid gives access to just 5–10% of India's buying power"}
                  </h3>
                  <p className={`mt-1 ${isScalysisView ? 'text-blue-600/90' : 'text-gray-600'}`}>
                    {isScalysisView ? "Safe, high-ROAS, and scalable." : "Limited reach, limited growth."}
                  </p>
                </motion.div>
              </div>

              {/* Pulse animation for Scalysis view */}
              {isScalysisView && (
                <motion.div 
                  className="absolute inset-0 bg-blue-400/10 rounded-lg"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              )}
              
              {/* Map icon */}
              <div className="absolute top-4 left-4 bg-white/80 p-2 rounded-full">
                <Map className={`h-6 w-6 ${isScalysisView ? 'text-blue-500' : 'text-gray-500'}`} />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Slider and Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Prepaid TAM</span>
                <span className="font-medium text-blue-600">Scalysis TAM</span>
              </div>
              
              <Slider
                value={[sliderValue]}
                onValueChange={handleSliderChange}
                max={100}
                step={100}
                className="w-full"
              />
              
              <div className="flex justify-between text-sm">
                <span>Limited Reach</span>
                <span>Full Market Access</span>
              </div>
            </div>
            
            {isScalysisView && (
              <motion.div 
                className="mt-8 space-y-4 bg-blue-50 p-6 rounded-xl"
                initial="hidden"
                animate="visible"
                variants={statVariants}
              >
                <motion.h3 className="text-xl font-bold text-blue-700" variants={statsItemVariants}>
                  With Scalysis Smart Order Selection:
                </motion.h3>
                
                <motion.div className="grid grid-cols-2 gap-4" variants={statVariants}>
                  <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={statsItemVariants}>
                    <h4 className="text-2xl font-bold text-blue-600">80%+</h4>
                    <p className="text-gray-600">of real Indian buyers</p>
                  </motion.div>
                  
                  <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={statsItemVariants}>
                    <h4 className="text-2xl font-bold text-blue-600">50%</h4>
                    <p className="text-gray-600">lower RTO rates</p>
                  </motion.div>
                  
                  <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={statsItemVariants}>
                    <h4 className="text-2xl font-bold text-blue-600">5x</h4>
                    <p className="text-gray-600">more scale potential</p>
                  </motion.div>
                  
                  <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={statsItemVariants}>
                    <h4 className="text-2xl font-bold text-green-600">Real</h4>
                    <p className="text-gray-600">profit-focused filtering</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
            
            {!isScalysisView && (
              <motion.div 
                className="mt-8 space-y-4 bg-gray-50 p-6 rounded-xl"
                initial="hidden"
                animate="visible"
                variants={statVariants}
              >
                <motion.h3 className="text-xl font-bold text-gray-700" variants={statsItemVariants}>
                  With Prepaid-Only Strategy:
                </motion.h3>
                
                <motion.div className="grid grid-cols-2 gap-4" variants={statVariants}>
                  <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={statsItemVariants}>
                    <h4 className="text-2xl font-bold text-gray-600">5-10%</h4>
                    <p className="text-gray-600">of potential buyers</p>
                  </motion.div>
                  
                  <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={statsItemVariants}>
                    <h4 className="text-2xl font-bold text-gray-600">Limited</h4>
                    <p className="text-gray-600">urban market only</p>
                  </motion.div>
                  
                  <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={statsItemVariants}>
                    <h4 className="text-2xl font-bold text-gray-600">Missing</h4>
                    <p className="text-gray-600">growth opportunities</p>
                  </motion.div>
                  
                  <motion.div className="bg-white p-4 rounded-lg shadow-sm" variants={statsItemVariants}>
                    <h4 className="text-2xl font-bold text-gray-600">Low</h4>
                    <p className="text-gray-600">market penetration</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
            
            <div className="mt-8 text-center">
              <motion.p 
                className={`inline-block py-2 px-4 rounded-full text-lg font-semibold ${
                  isScalysisView 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-700'
                }`}
                animate={{ scale: isScalysisView ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 1, repeat: isScalysisView ? Infinity : 0, repeatType: "loop" }}
              >
                {isScalysisView ? "Scalysis = Profitable COD TAM" : "Prepaid = Limited TAM"}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketComparisonSlider;
