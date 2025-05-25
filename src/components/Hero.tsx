import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const messages = ["Instantly 20% Less Returns, from day one. • Save On Shipping", "Product Specific Training (PST) • Train Smarter", "Worst 10% Pincodes, accounts for 90% RTOs • Spot Them", "Smart Meta Targeting, Save 30% On Marketing • Every Rupee counts"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const handleCTAClick = () => {
    document.getElementById("get-started")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <motion.section ref={sectionRef} className="relative pt-28 pb-20 overflow-hidden" style={{
    opacity
  }}>
      {/* Background Elements */}
      <motion.div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2" style={{
        y: y1
      }}></motion.div>
        <motion.div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" style={{
        y: y2
      }}></motion.div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <div className="flex flex-col items-center text-center">
          {/* Centered Text Content */}
          <motion.div className={`space-y-8 max-w-3xl mb-12 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            
            <motion.div className="space-y-4" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }}>
              <AnimatePresence mode="wait">
              <motion.p key={index} initial={{
                opacity: 0,
                y: 8
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -8
              }} transition={{
                duration: 0.4
              }} className="inline-block text-sm font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                {messages[index]}
              </motion.p>
              </AnimatePresence>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Scale COD 10x Faster.<br /><span className="text-blue-500">Without RTO.</span>
              </h1>
              <p className="text-xl text-gray-600 mt-4 mx-auto">AI Powered RTO Solution For Indian D2Cs.</p>
            </motion.div>

            <motion.div className="flex justify-center" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.4,
            duration: 0.6
          }}>
              <ShimmerButton background="rgba(37, 99, 235, 1)" shimmerColor="rgba(255, 255, 255, 0.4)" className="w-40" onClick={handleCTAClick}>
                <span className="text-sm font-medium">Try Scalysis Early</span>
              </ShimmerButton>
            </motion.div>
          </motion.div>

          {/* Centered Full-width Video - Now with 90% width and 5% padding on each side */}
          <motion.div className={`w-[90%] mx-auto ${isLoaded ? 'animate-slideUp animation-delay-200' : 'opacity-0'}`} initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }} style={{
          opacity: 1
        }}>
            <video autoPlay loop muted className="w-full rounded-lg shadow-lg">
              <source src="https://framerusercontent.com/assets/viTcCR1FxpC0CsC06mwO0B2Grks.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </motion.section>;
};
export default Hero;