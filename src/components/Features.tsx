
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
              Ship <span className="text-gradient">Smart Every Day</span>
            </h2>
            <p className="text-lg text-gray-600">
              Save 21% daily on shipping costs, packaging costs & supplier payments without hurting the potential revenue. Add 3% to your profit margins.
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
                <img 
                  src="/lovable-uploads/c408b62f-1bf7-42d2-8132-857456402690.png" 
                  alt="Smart Order Selection AI Dashboard" 
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

export default Features;
