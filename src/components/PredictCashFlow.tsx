
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const PredictCashFlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById("cashflow-prediction-section");
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="cashflow-prediction-section"
          className={cn(
            "grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          {/* Left Column - Image */}
          <div className={cn(
            "relative transition-all duration-500",
            isVisible ? "animate-slideUp animation-delay-200" : "opacity-0"
          )}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-xl blur-xl"></div>
              <div className="relative bg-white rounded-xl shadow-medium overflow-hidden border border-gray-100">
                <img 
                  src="/lovable-uploads/68139ac9-6424-41d9-a055-16fc60b62d14.png" 
                  alt="Cashflow Prediction Graph" 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <p className="inline-block text-xs sm:text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-2 sm:mb-4">
              Cashflow Forecasting
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Predict <span className="text-gradient">30 Day Cashflow</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              AI, correctly synced with remittance cycles and daily spending, can accurately predict automatic COD cash flow cycles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictCashFlow;
