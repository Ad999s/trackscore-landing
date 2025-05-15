import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  
  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.section 
      ref={sectionRef}
      className="relative pt-28 pb-20 overflow-hidden"
      style={{ opacity }}
    >
      {/* Background Elements */}
      <motion.div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2"
          style={{ y: y1 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"
          style={{ y: y2 }}
        ></motion.div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className={`space-y-8 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="inline-block text-sm font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                Reduce RTO rates upto 55%
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Smart Order <br />Selection: <span className="text-blue-500">Reduce RTO</span>
              </h1>
              <p className="text-xl text-gray-600 mt-4 max-w-xl">
                Scalysis automatically removes orders that were never meant to convert. Ship less, scale more.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
                <a href="#get-started" className="flex items-center">
                  Install on shopify -&gt;
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300">
                <a href="#how-it-works">See how it works</a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex flex-col space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <p className="text-gray-700">Trusted by D2C brands just like yours</p>
              </div>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
                <span className="ml-2 text-gray-700 font-medium">4.9/5</span>
              </div>
              <div className="mt-2">
                <p className="font-medium text-gray-800">
                  Instantly increase your Net Profits by <span className="text-blue-600 font-bold text-xl">22%+</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Dashboard Preview */}
          <motion.div 
            className={`relative ${isLoaded ? 'animate-slideUp animation-delay-200' : 'opacity-0'}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ opacity:1 }}
          >
            <video autoPlay loop muted className="rounded-lg shadow-lg">
              <source src="https://framerusercontent.com/assets/viTcCR1FxpC0CsC06mwO0B2Grks.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
