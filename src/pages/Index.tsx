
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowSelectionWorks from "@/components/HowSelectionWorks";
import ProfitCalculator from "@/components/ProfitCalculator";
import BeforeAfterFlip from "@/components/BeforeAfterFlip";
import SmartMetaTargeting from "@/components/SmartMetaTargeting";
import AutoPnLTracking from "@/components/AutoPnLTracking";
import PredictCashFlow from "@/components/PredictCashFlow";
import PincodeBlocker from "@/components/PincodeBlocker";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
        <HowSelectionWorks />
        <ProfitCalculator />
        <BeforeAfterFlip />
        <SmartMetaTargeting />
        <AutoPnLTracking />
        <PredictCashFlow />
        <PincodeBlocker />
        <Stats />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
