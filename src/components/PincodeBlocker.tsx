
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const PincodeBlocker = () => {
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
    
    const currentElement = document.getElementById("pincode-section");
    
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
    <section className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="pincode-section"
          className={cn(
            "flex flex-col items-center text-center transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            No more <span className="text-gradient text-primary">Manually Blocking Pincodes</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mb-8 sm:mb-16">
            Say goodbye to manually enabling/disabling COD option for certain pincodes, product &
            customer behaviour on your shopify store.
          </p>

          <div className={cn(
            "grid md:grid-cols-2 gap-8 md:gap-16 w-full transition-all duration-500",
            isVisible ? "animate-slideUp animation-delay-200" : "opacity-0"
          )}>
            {/* Order Cards */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-medium p-4 sm:p-6 border border-gray-100">
                <div className="space-y-6 sm:space-y-8">
                  {/* High Intent Order */}
                  <div className="border-b pb-4 sm:pb-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      </div>
                      <h3 className="text-base sm:text-xl font-semibold">High Intent Order</h3>
                    </div>
                    
                    <div className="space-y-1 text-xs sm:text-sm text-gray-600">
                      <p>Phone: +91 98765 43210</p>
                      <p>Metrics: First Visit, ordered in under 7 mins</p>
                      <p>3 page visits</p>
                      <p>87% past acceptance rate</p>
                      <p>Order Value: ₹2,499</p>
                    </div>
                    
                    <div className="mt-2 sm:mt-3 inline-block px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs sm:text-sm rounded-full">
                      95% Delivery Probability
                    </div>
                  </div>
                  
                  {/* Low Intent Order */}
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex items-center justify-center font-bold">!</span>
                      </div>
                      <h3 className="text-base sm:text-xl font-semibold">Low Intent Order</h3>
                    </div>
                    
                    <div className="space-y-1 text-xs sm:text-sm text-gray-600">
                      <p>Phone: +91 87654 32109</p>
                      <p>Metrics: First time visit</p>
                      <p>Ordered in under 3 mins from single ad</p>
                      <p>40% past acceptance rate</p>
                      <p>Order Value: ₹1,999</p>
                    </div>
                    
                    <div className="mt-2 sm:mt-3 inline-block px-2 sm:px-3 py-1 bg-red-100 text-red-700 text-xs sm:text-sm rounded-full">
                      32% Delivery Probability
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Analysis Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Smart Order Analysis</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Our AI analyzes over 30 data points from each incoming order, including:</p>
              
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Smart Product-Specific Training (PST) adapts to different trends, including pin code, city, and customer type.",
                  "Easily detects customer fraud by tracking orders at the IP address level.",
                  "Keeps track of past customer behavior across multiple Shopify orders.",
                  "Improves AI accuracy by continuously learning from the seller's Shopify account over time."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PincodeBlocker;
