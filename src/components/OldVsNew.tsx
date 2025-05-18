
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const OldVsNew = () => {
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
    
    const currentElement = document.getElementById("old-vs-new-section");
    
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
          id="old-vs-new-section"
          className={cn(
            "max-w-6xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-16">RTO Models: Old vs 2025</h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            {/* Traditional Approach */}
            <div className={cn(
              "relative bg-white rounded-xl border border-gray-200 shadow-md p-4 sm:p-6 transition-all duration-700",
              isVisible ? "animate-slideUp" : "opacity-0 translate-y-8"
            )}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-100 text-red-700 px-4 py-1 rounded-full font-medium text-sm">
                ❌ Traditional RTO Tools
              </div>
              <div className="mt-6 space-y-3 sm:space-y-5">
                {[
                  "Blanket tagging on every order",
                  "Vague labels: High / Medium / Low",
                  "Over-blocking → lost revenue",
                  "No learning or personalization",
                  "~50-60% accuracy"
                ].map((item, index) => (
                  <div key={index} className="p-2 sm:p-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="min-w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      <p className="text-gray-800 font-medium text-xs sm:text-sm">{item}</p>
                    </div>
                  </div>
                ))}
                
                <div className="mt-4 flex justify-center">
                  <div className="bg-red-100 text-red-700 px-3 py-1 rounded-lg text-xs sm:text-sm">
                    <span className="font-bold">~50-60%</span> accuracy
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scalysis Approach */}
            <div className={cn(
              "relative bg-white rounded-xl border border-gray-200 shadow-md p-4 sm:p-6 transition-all duration-700",
              isVisible ? "animate-slideUp animation-delay-300" : "opacity-0 translate-y-8"
            )}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-700 px-4 py-1 rounded-full font-medium text-sm">
                ✅ Scalysis Precision Engine
              </div>
              <div className="mt-6 space-y-3 sm:space-y-5">
                {[
                  "Targeted, per-order decisions",
                  "Trained on your brand's real order data",
                  "Smart filtering that protects profit",
                  "Learns from your actual delivery trends",
                  "95%+ precision where it matters"
                ].map((item, index) => (
                  <div key={index} className="p-2 sm:p-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="min-w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <p className="text-gray-800 font-medium text-xs sm:text-sm">{item}</p>
                    </div>
                  </div>
                ))}
                
                <div className="mt-4 flex justify-center">
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs sm:text-sm">
                    <span className="font-bold">95%+</span> precision where it matters
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 md:mt-16 text-center">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
              Modern D2C brands don't rely on guesses or blunt scoring.
              <br className="hidden sm:block" />
              In 2025, RTO is handled with precision AI — trained on your data, optimized for your profit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OldVsNew;
