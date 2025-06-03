import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const OldVsNew = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
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
          <h2 className="text-2xl md:text-3xl font-medium text-center mb-10 md:mb-16 lg:text-5xl">
            Scalysis Vs <span className="font-semibold">Traditional Tools</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Traditional Approach */}
            <div className={cn(
              "relative bg-white rounded-xl border border-gray-200 shadow-md p-5 sm:p-6 transition-all duration-700", 
              isVisible ? "animate-slideUp" : "opacity-0 translate-y-8"
            )}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-100 text-red-700 px-4 py-1 rounded-full font-medium text-sm">
                Old RTO Tools
              </div>
              <div className="mt-6 space-y-5">
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-light text-sm sm:text-base">
                      <span className="font-medium">Blanket tagging</span> on every order
                    </p>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-light text-sm sm:text-base">
                      Vague labels: <span className="font-medium">High / Medium / Low</span>
                    </p>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-light text-sm sm:text-base">
                      <span className="font-medium">Over-blocking</span> → lost revenue
                    </p>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-light text-sm sm:text-base">
                      <span className="font-medium">No learning</span> or personalization
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm sm:text-base font-light">
                    <span className="font-bold">~50-60%</span> accuracy
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
                2025 RTO Engine
              </div>
              <div className="mt-6 space-y-5">
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-light text-sm sm:text-base">
                      <span className="font-medium">Targeted</span>, per-order decisions
                    </p>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-light text-sm sm:text-base">
                      Trained on <span className="font-medium">your brand's real</span> order data
                    </p>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-light text-sm sm:text-base">
                      <span className="font-medium">Smart filtering</span> that protects profit
                    </p>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="min-w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-light text-sm sm:text-base">
                      Learns from your <span className="font-medium">actual delivery trends</span>
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm sm:text-base font-light">
                    <span className="font-bold">95%+</span> precision where it matters
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-base md:text-lg font-light text-gray-700 max-w-2xl mx-auto px-4">
              Modern D2C brands don't rely on guesses or blunt scoring.
              <br className="hidden sm:block" />
              In 2025, RTO is handled with <span className="font-semibold">precision AI</span> — trained on your data, optimized for your profit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OldVsNew;
