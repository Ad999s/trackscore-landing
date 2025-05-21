
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Shield, ZapIcon, Layers, ToggleLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const YouDecideWhatShips = () => {
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
    
    const currentElement = document.getElementById("you-decide-section");
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const keyPoints = [
    {
      icon: <ToggleLeft className="h-6 w-6" />,
      title: "Full override control built-in",
    },
    {
      icon: <ZapIcon className="h-6 w-6" />,
      title: "Smart suggestions, not auto-blocks",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Transparency over automation",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="you-decide-section"
          className={cn(
            "max-w-5xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side: Content */}
            <div className={cn(
              "transition-all duration-700",
              isVisible ? "animate-slideUp" : "opacity-0 translate-y-8"
            )}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                You Decide What Ships. <span className="text-blue-600">Not Us.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Scalysis doesn't auto-reject orders. It flags risky ones — you choose what to approve, hold, or override.
              </p>
              
              {/* Key Points */}
              <div className="space-y-6">
                {keyPoints.map((point, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex items-center gap-4",
                      isVisible ? `animate-fadeIn animation-delay-${(index + 1) * 100}` : "opacity-0"
                    )}
                  >
                    <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                      {point.icon}
                    </div>
                    <p className="font-semibold">{point.title}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side: Quote */}
            <Card className={cn(
              "bg-gradient-to-br from-blue-50 to-blue-100 border-none shadow-md overflow-hidden",
              isVisible ? "animate-fadeIn animation-delay-200" : "opacity-0"
            )}>
              <CardContent className="p-8 relative">
                <div className="absolute text-blue-200 opacity-20 top-4 left-4">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 32H16V20H28V32ZM56 32H44V20H56V32Z" fill="currentColor"/>
                    <path d="M28 20C28 13.4 22.6 8 16 8V4C24.8 4 32 11.2 32 20V44H8V20H16C16 17.8 14.2 16 12 16H8V8H12C16.4 8 20.4 10 22.8 13.6C23.6 15 24 17.4 24 20H28ZM56 20C56 13.4 50.6 8 44 8V4C52.8 4 60 11.2 60 20V44H36V20H44C44 17.8 42.2 16 40 16H36V8H40C44.4 8 48.4 10 50.8 13.6C51.6 15 52 17.4 52 20H56Z" fill="currentColor"/>
                  </svg>
                </div>
                
                <div className="text-xl font-medium mb-6 text-gray-800 pl-8 pt-8">
                  "We never lost sales — just lost the junk. Scalysis made our ops sharper without slowing them down."
                </div>
                
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-bold">Founder</div>
                    <div className="text-sm text-gray-500">₹2.5Cr/month D2C brand</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouDecideWhatShips;
