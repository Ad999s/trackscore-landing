
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProductShowcase = () => {
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
    
    const currentElement = document.getElementById("product-showcase");
    
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
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="product-showcase"
          className={cn(
            "relative mx-auto max-w-6xl",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div className="bg-[#f8f8f8] rounded-xl shadow-xl p-4 md:p-6 relative z-10">
            <div className="w-full">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="mt-8">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src="/lovable-uploads/68139ac9-6424-41d9-a055-16fc60b62d14.png" 
                    alt="Scalysis Dashboard" 
                    className="rounded-lg w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-24 -right-24 text-gray-100/10 text-[250px] font-bold z-0 select-none">
            Scalysis
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
