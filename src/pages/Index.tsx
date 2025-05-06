
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import OldVsNew from "@/components/OldVsNew";
import ROISimulator from "@/components/ROISimulator";
import SmartMetaTargeting from "@/components/SmartMetaTargeting";
import AutoPnLTracking from "@/components/AutoPnLTracking";
import PredictCashFlow from "@/components/PredictCashFlow";
import PincodeBlocker from "@/components/PincodeBlocker";
import ProfitCalculator from "@/components/ProfitCalculator";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BrandsBleedRTOs from "@/components/BrandsBleedRTOs";

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
        <Features />
        <OldVsNew />
        <ROISimulator />
        <BrandsBleedRTOs />
        <SmartMetaTargeting />
        <AutoPnLTracking />
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
