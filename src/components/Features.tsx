
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Features = () => {
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
    
    const currentElement = document.getElementById("features-section");
    
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
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="features-section"
          className={cn(
            "grid md:grid-cols-2 gap-12 items-center transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
              Powerful Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart <span className="text-gradient">Order Selection AI</span>
            </h2>
            <p className="text-lg text-gray-600">
              Add 3% to your profit. Just by being efficient saving daily 10% on shipping, packaging and inventory costs. Without Hurting your revenue.
            </p>
          </div>

          {/* Right Column - Feature Illustration */}
          <div className={cn(
            "relative transition-all duration-500",
            isVisible ? "animate-slideUp animation-delay-200" : "opacity-0"
          )}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-xl blur-xl"></div>
              <div className="relative bg-white rounded-xl shadow-medium overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="font-semibold text-lg">Order Selection Engine</h3>
                      <p className="text-sm text-gray-500">AI-powered risk analysis</p>
                    </div>
                    <div className="px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded">Active</div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Order Risk Level</span>
                      <span className="text-sm font-medium text-green-500">Low</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <div className="text-xs font-medium mb-1">Confidence</div>
                        <div className="text-lg font-semibold">93%</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <div className="text-xs font-medium mb-1">Savings</div>
                        <div className="text-lg font-semibold">₹450</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <div className="text-xs font-medium mb-1">RTO Risk</div>
                        <div className="text-lg font-semibold">Low</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">Analyzing new orders in real-time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
