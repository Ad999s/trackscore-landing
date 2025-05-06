
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
                Traditional RTO Models
              </div>
              <div className="mt-6 space-y-6">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium">Everyone gets tagged</p>
                  </div>
                </div>
                
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium">Vague risk scores (High, Medium, Low)</p>
                  </div>
                </div>
                
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium">Over-blocking → lost revenue</p>
                  </div>
                </div>
                
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium">One-size-fits-all logic</p>
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
                Scalysis Precision Model
              </div>
              <div className="mt-6 space-y-6">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium">Targeted and accurate tagging</p>
                  </div>
                </div>
                
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium">Order-specific insights with data-backed confidence</p>
                  </div>
                </div>
                
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium">Smart blocking → saved revenue</p>
                  </div>
                </div>
                
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <p className="text-gray-800 font-medium">Seller-personalized AI engine</p>
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
