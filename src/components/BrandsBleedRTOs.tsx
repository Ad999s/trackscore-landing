
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CheckIcon, QuoteIcon } from "lucide-react";

const BrandsBleedRTOs = () => {
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
    
    const currentElement = document.getElementById("brands-bleed-rtos-section");
    
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="brands-bleed-rtos-section"
          className={cn(
            "max-w-5xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            BUILT FOR BRANDS WHO BLEED FROM RTOs
          </h2>
          
          <h3 className="text-xl md:text-2xl font-medium text-center mb-12 text-gray-700">
            Built for Dropshippers, COD-first D2C brands & High-RTO businesses.
          </h3>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <p className="text-lg text-gray-700 mb-8">
              Fake orders. Return fraud. Inventory stuck in transit. It's profit leakage—and you're paying for it.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className={cn(
                "flex items-start transition-all duration-700",
                isVisible ? "animate-slideUp" : "opacity-0 translate-y-4"
              )}>
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <CheckIcon size={16} className="text-green-600" />
                </span>
                <span className="text-gray-700">We reduce RTO losses without blocking good orders</span>
              </li>
              
              <li className={cn(
                "flex items-start transition-all duration-700",
                isVisible ? "animate-slideUp animation-delay-100" : "opacity-0 translate-y-4"
              )}>
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <CheckIcon size={16} className="text-green-600" />
                </span>
                <span className="text-gray-700">You ship with confidence — every order counts</span>
              </li>
              
              <li className={cn(
                "flex items-start transition-all duration-700",
                isVisible ? "animate-slideUp animation-delay-200" : "opacity-0 translate-y-4"
              )}>
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <CheckIcon size={16} className="text-green-600" />
                </span>
                <span className="text-gray-700">No changes to your Shopify, Meesho, Woo setup</span>
              </li>
            </ul>
            
            <div className={cn(
              "bg-gray-50 rounded-lg p-6 border-l-4 border-primary relative transition-all duration-700",
              isVisible ? "animate-slideUp animation-delay-300" : "opacity-0 translate-y-4"
            )}>
              <div className="absolute -left-3 top-4 bg-white p-1 rounded-full shadow-md">
                <QuoteIcon size={24} className="text-primary" />
              </div>
              <p className="text-gray-700 italic pl-6">
                "We were wasting lakhs in returns. Scalysis didn't just reduce RTO — it gave us breathing room."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsBleedRTOs;
