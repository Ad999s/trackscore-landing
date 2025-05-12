
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import YourNewPnL from "@/components/YourNewPnL";
import Features from "@/components/Features";
import OldVsNew from "@/components/OldVsNew";
import ROISimulator from "@/components/ROISimulator";
import BrandsBleedRTOs from "@/components/BrandsBleedRTOs";
import SmartMetaTargeting from "@/components/SmartMetaTargeting";
import AutoPnLTracking from "@/components/AutoPnLTracking";
import PredictCashFlow from "@/components/PredictCashFlow";
import PincodeBlocker from "@/components/PincodeBlocker";
import ProfitCalculator from "@/components/ProfitCalculator";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SmartLearning from "@/components/SmartLearning";
import BadOrdersCounter from "@/components/BadOrdersCounter";
import BeforeAfterFlip from "@/components/BeforeAfterFlip";
import AITrainingModel from "@/components/AITrainingModel";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <YourNewPnL />
        <SmartLearning />
        <Features />
        <OldVsNew />
        <BadOrdersCounter />
        <ROISimulator />
        <BeforeAfterFlip />
        <BrandsBleedRTOs />
        <SmartMetaTargeting />
        <AutoPnLTracking />
        <AITrainingModel />
        <PredictCashFlow />
        <PincodeBlocker />
        <ProfitCalculator />
        <Stats />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
