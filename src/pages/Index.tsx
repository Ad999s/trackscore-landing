
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";
import SavingStats from "@/components/SavingStats";
import HowSelectionWorks from "@/components/HowSelectionWorks";
import BeforeAfterFlip from "@/components/BeforeAfterFlip";
import SmartMetaTargeting from "@/components/SmartMetaTargeting";
import AutoPnLTracking from "@/components/AutoPnLTracking";
import PredictCashFlow from "@/components/PredictCashFlow";
import PincodeBlocker from "@/components/PincodeBlocker";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import DailyShippingCalculator from "@/components/DailyShippingCalculator";
import { motion } from "framer-motion";
import SmartLearning from "@/components/SmartLearning";
import BuiltForDropshippers from "@/components/BuiltForDropshippers";
import CodMarketStats from "@/components/CodMarketStats";
import MarketComparisonSlider from "@/components/MarketComparisonSlider";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Animation variants for staggered section reveals
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <GoogleGeminiEffectDemo />
        <BuiltForDropshippers />
        <MarketComparisonSlider />
        <CodMarketStats />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <HowSelectionWorks />
        </motion.div>
        <SavingStats />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <DailyShippingCalculator />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <BeforeAfterFlip />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <SmartMetaTargeting />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <AutoPnLTracking />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <PredictCashFlow />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <PincodeBlocker />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Stats />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <SmartLearning />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <HowItWorks />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <CTA />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
