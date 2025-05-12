
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

const SmartMetaTargeting = () => {
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
    
    const currentElement = document.getElementById("meta-targeting-section");
    
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
          id="meta-targeting-section"
          className={cn(
            "grid md:grid-cols-2 gap-12 items-center transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          {/* Left Column - Map Visualization */}
          <div className={cn(
            "relative transition-all duration-500",
            isVisible ? "animate-slideUp animation-delay-200" : "opacity-0"
          )}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-xl blur-xl"></div>
              <div className="relative bg-white rounded-xl shadow-medium overflow-hidden border border-gray-100 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Smart Meta Targeting</h3>
                </div>
                
                <div className="relative h-80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/3ed73d25-a9b5-4f0f-9933-105b590d6901.png" 
                      alt="Map showing excluded zones with high RTO rates" 
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Excluded Zones</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>27%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                      <span>18%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-100"></div>
                      <span>16%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Stop risky orders from <span className="text-gradient">ever coming in</span>
            </h2>

            <p className="text-lg text-gray-600">
              Our Automatic PAL + Cashlytics package scans your ad data and block pincode codes with most RTOs.
            </p>
            
            {/* Feature points */}
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">↑</span>
                </div>
                <p className="text-gray-700 font-medium">Works with Meta ads</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">↑</span>
                </div>
                <p className="text-gray-700 font-medium">Auto-filters bad regions</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">↑</span>
                </div>
                <p className="text-gray-700 font-medium">Save ad spend daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartMetaTargeting;
