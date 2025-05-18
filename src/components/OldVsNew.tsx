
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
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="old-vs-new-section"
          className={cn(
            "max-w-6xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-16">RTO Models: Old vs 2025</h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Traditional Approach */}
            <div className={cn(
              "relative bg-white rounded-xl border border-gray-200 shadow-md p-5 sm:p-6 transition-all duration-700",
              isVisible ? "animate-slideUp" : "opacity-0 translate-y-8"
            )}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-100 text-red-700 px-4 py-1 rounded-full font-medium text-sm">
                Traditional RTO Tools (Outdated Approach)
              </div>
              <div className="mt-6 space-y-5">
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">Blanket tagging applied to every order</p>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">Vague risk scores (High / Medium / Low)</p>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">Over-blocking leads to lost revenue</p>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">One-size-fits-all logic with no learning</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm sm:text-base">
                    <span className="font-bold">50-60%</span> prediction accuracy
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scalysis Approach */}
            <div className={cn(
              "relative bg-white rounded-xl border border-gray-200 shadow-md p-5 sm:p-6 transition-all duration-700",
              isVisible ? "animate-slideUp animation-delay-300" : "opacity-0 translate-y-8"
            )}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-700 px-4 py-1 rounded-full font-medium text-sm">
                Scalysis Precision Engine (Built for 2025 Brands)
              </div>
              <div className="mt-6 space-y-5">
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">Hyper-targeted, order-level decisioning</p>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">Trained on your actual delivery and fraud data</p>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">Smart filtering that preserves revenue and ROAS</p>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">Brand-personalized AI model, not generic scoring</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm sm:text-base">
                    <span className="font-bold">95%+</span> precision on confident decisions
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
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
