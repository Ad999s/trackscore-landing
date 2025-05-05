
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const AutoPnLTracking = () => {
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
    
    const currentElement = document.getElementById("auto-pnl-section");
    
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="auto-pnl-section"
          className={cn(
            "grid md:grid-cols-2 gap-12 items-center transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
              P&L Automation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Auto <span className="text-gradient">P&L Tracking</span>
            </h2>
            <p className="text-lg text-gray-600">
              Scalysis integrates with logistics and marketing channels, creating daily automatic P&L sheets, comparing new performance, and unlocking new growth.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className={cn(
            "relative transition-all duration-500",
            isVisible ? "animate-slideUp animation-delay-200" : "opacity-0"
          )}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-xl blur-xl"></div>
              <div className="relative bg-white rounded-xl shadow-medium overflow-hidden border border-gray-100">
                <img 
                  src="/lovable-uploads/2a0db2ed-aa3c-40c9-8206-0ac412dda034.png" 
                  alt="Auto P&L Tracking Dashboard" 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoPnLTracking;
