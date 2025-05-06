
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
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="old-vs-new-section"
          className={cn(
            "max-w-6xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Old vs New</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Model 1 - Traditional Approach */}
            <div className={cn(
              "relative bg-white rounded-xl border border-gray-200 shadow-md p-6 transition-all duration-700",
              isVisible ? "animate-slideUp" : "opacity-0 translate-y-8"
            )}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-100 text-red-700 px-4 py-1 rounded-full font-medium">
                Model 1 (Traditional)
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Everyone Gets a Label</h3>
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 bg-red-50 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-4 text-center">
                  <div className="bg-red-50 p-3 rounded">
                    <p className="text-red-700">Vague predictions</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <p className="text-red-700">Unreliable accuracy</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <p className="text-red-700">High false positives</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg">
                    <span className="font-bold">50-60%</span> accuracy
                  </div>
                </div>
              </div>
            </div>
            
            {/* Model 2 - Scalysis Approach */}
            <div className={cn(
              "relative bg-white rounded-xl border border-gray-200 shadow-md p-6 transition-all duration-700",
              isVisible ? "animate-slideUp animation-delay-300" : "opacity-0 translate-y-8"
            )}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-700 px-4 py-1 rounded-full font-medium">
                Model 2 (Scalysis)
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Sniper Model</h3>
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 bg-green-50 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-4 text-center">
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-green-700">Labels few, high confidence orders</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-green-700">Precise predictions</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-green-700">Minimal false predictions</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg">
                    <span className="font-bold">95%+</span> accuracy
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Scalysis doesn't try to predict every single order - we focus only on high-confidence predictions to deliver real business value without false confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OldVsNew;
