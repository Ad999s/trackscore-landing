
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const SmartMetaTargeting = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
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

  useEffect(() => {
    // Automatic scrolling effect for pincode list
    if (isVisible && scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const scrollAnimation = () => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += 1;
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
          }
        }
        requestAnimationFrame(scrollAnimation);
      };
      
      const animationFrame = requestAnimationFrame(scrollAnimation);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isVisible]);

  const pincodes = [
    { code: "180011", rto: 94 },
    { code: "560001", rto: 89 },
    { code: "110001", rto: 85 },
    { code: "400001", rto: 82 },
    { code: "411001", rto: 78 },
    { code: "380001", rto: 76 },
    { code: "500001", rto: 73 },
    { code: "226001", rto: 71 },
    { code: "700001", rto: 69 },
    { code: "600001", rto: 67 },
    { code: "530001", rto: 65 },
    { code: "800001", rto: 62 },
  ];

  const getRtoColor = (rto: number) => {
    // Returns darker red for higher RTO rates
    const intensity = Math.min(255, Math.round((rto / 100) * 255));
    return `rgb(${intensity}, ${Math.max(0, 80 - intensity * 0.5)}, ${Math.max(0, 80 - intensity * 0.5)})`;
  };

  const handleCopyCsv = () => {
    const csvContent = "Pincode,RTO Rate\n" + pincodes.map(p => `${p.code},${p.rto}%`).join("\n");
    navigator.clipboard.writeText(csvContent);
    console.log("CSV copied to clipboard");
    // In a real app, you could add a toast notification here
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
            Smart Targeting
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart <span className="text-gradient">Meta Targeting</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scalysis maps your worst RTO zones. Attract better buyers.
          </p>
        </div>
        
        <div 
          id="meta-targeting-section"
          className={cn(
            "max-w-5xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          {/* Image display - moved above pincode list */}
          <div className={cn(
            "mb-12 transition-all duration-500",
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
          
          {/* Pincode scrolling list with oval boxes */}
          <div className="relative mt-8 mb-6 overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex whitespace-nowrap overflow-hidden py-4"
            >
              {/* Duplicate the pincodes array to create a seamless loop */}
              {[...pincodes, ...pincodes].map((pincode, idx) => (
                <div 
                  key={`${pincode.code}-${idx}`} 
                  className="inline-block mx-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm"
                >
                  <span className="font-medium">{pincode.code}</span>
                  <span 
                    className="ml-2 font-bold" 
                    style={{ color: getRtoColor(pincode.rto) }}
                  >
                    {pincode.rto}%
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Copy CSV button */}
          <div className="flex justify-center mt-6 mb-12">
            <Button 
              onClick={handleCopyCsv} 
              variant="outline" 
              className="flex items-center gap-2"
            >
              <Copy size={16} />
              Copy CSV
            </Button>
          </div>
          
          {/* Three metric boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">6%</div>
              <p className="text-gray-700">Better audience quality</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">6.6%</div>
              <p className="text-gray-700">Better Ad Spent</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">8%</div>
              <p className="text-gray-700">RTO Drop</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartMetaTargeting;
