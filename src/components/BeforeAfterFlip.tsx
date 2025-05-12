
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleX } from "lucide-react";

const BeforeAfterFlip = () => {
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
    
    const currentElement = document.getElementById("before-after-section");
    
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="before-after-section"
          className={cn(
            "max-w-5xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div className="text-center mb-12">
            <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
              Transformation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Powered <span className="text-gradient">Order Selection</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Save big on daily shipping costs, packaging costs & inventory. Ship less, make more.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-12">
            {/* First Green Card - Ship */}
            <div className={cn(
              "relative w-full md:w-1/3 h-64 bg-white border border-green-100 rounded-xl shadow-medium p-6 transition-all duration-500",
              isVisible ? "animate-fadeIn animation-delay-100" : "opacity-0"
            )}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-green-50">
                      <CircleCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-600">Ship</h3>
                  </div>
                  <p className="text-gray-600">Order #8752</p>
                  <p className="text-sm text-gray-500 mt-2">Mumbai, Maharashtra</p>
                </div>
                <div>
                  <p className="text-green-600 font-medium">Delivery Probability: 89%</p>
                  <p className="text-sm text-gray-500">Expected Profit: ₹460</p>
                </div>
              </div>
            </div>
            
            {/* Middle Red Card - Don't Ship with animation */}
            <div className={cn(
              "relative w-full md:w-1/3 h-64 bg-white border border-red-100 rounded-xl shadow-medium p-6 transition-all duration-700",
              isVisible ? "animate-pulse animation-delay-200 opacity-80 bg-gray-50" : "opacity-0"
            )}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-red-50">
                      <CircleX className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-red-600">Don't Ship</h3>
                  </div>
                  <p className="text-gray-600">Order #9145</p>
                  <p className="text-sm text-gray-500 mt-2">Ghaziabad, UP</p>
                </div>
                <div>
                  <p className="text-red-600 font-medium">RTO Risk: 87%</p>
                  <p className="text-sm text-gray-500">Potential Loss: ₹120</p>
                </div>
              </div>
            </div>
            
            {/* Last Green Card - Ship = More Profit */}
            <div className={cn(
              "relative w-full md:w-1/3 h-64 bg-white border border-green-100 rounded-xl shadow-medium p-6 transition-all duration-500",
              isVisible ? "animate-fadeIn animation-delay-300" : "opacity-0"
            )}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-green-50">
                      <CircleCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-600">Ship</h3>
                  </div>
                  <p className="text-gray-600">Order #7634</p>
                  <p className="text-sm text-gray-500 mt-2">Bangalore, Karnataka</p>
                </div>
                <div>
                  <p className="text-green-600 font-medium">Delivery Probability: 92%</p>
                  <p className="text-sm text-gray-600 font-bold">Expected Profit: ₹460</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-500">Scalysis intelligently selects orders to maximize profit and minimize returns</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterFlip;
