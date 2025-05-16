
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const TrustedPartners = () => {
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
    
    const currentElement = document.getElementById("trusted-partners");
    
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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div 
          id="trusted-partners"
          className={cn(
            "transition-all duration-500 text-center",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Trusted Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="h-16 flex items-center justify-center transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/a456b80f-d920-47c4-9e93-4f377145f13d.png" 
                alt="Shopify" 
                className="h-10 object-contain" 
              />
            </div>
            <div className="h-16 flex items-center justify-center transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/91dd9cf8-63eb-40f0-b0ee-78d2dbc1d243.png" 
                alt="Meta" 
                className="h-10 object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
