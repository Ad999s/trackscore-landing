
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Ban, Clock } from "lucide-react";

const BadOrdersCounter = () => {
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
    
    const currentElement = document.getElementById("bad-orders-section");
    
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
          id="bad-orders-section"
          className={cn(
            "max-w-5xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div className="bg-white rounded-xl shadow-medium p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-red-50 p-6 rounded-full">
                <Ban className="h-12 w-12 text-red-500" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  🛑 Bad Orders You Almost Shipped
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <p className="text-sm text-gray-500">Yesterday</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xl">
                    Scalysis blocked <span className="font-bold text-red-500">42 high-risk orders</span>
                  </p>
                  <p className="text-lg">
                    That would have cost you <span className="font-bold">₹9,210</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BadOrdersCounter;
