
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
          {/* Left Column - Image */}
          <div className={cn(
            "relative transition-all duration-500",
            isVisible ? "animate-slideUp animation-delay-200" : "opacity-0"
          )}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-xl blur-xl"></div>
              <div className="relative bg-white rounded-xl shadow-medium overflow-hidden border border-gray-100">
                <img 
                  src="/lovable-uploads/f02f2d55-07d3-4d98-9dc7-9443cc8b8759.png" 
                  alt="Smart Meta Targeting Interface" 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="space-y-6">
            <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
              Smart Targeting
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart <span className="text-gradient">Meta Targeting</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Re-route 7% of the same ad spend to your ideal customer. Our Soft-Touch Targeting won't hurt your ROAS, CPM, or audience reach—just big results.
            </p>
            
            {/* Added bullet points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <p className="text-gray-700">Works with Meta ads</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <p className="text-gray-700">Auto-filters bad regions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <p className="text-gray-700">Save ad spend daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartMetaTargeting;
