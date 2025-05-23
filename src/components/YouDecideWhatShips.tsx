
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Shield, ZapIcon, Layers, ToggleLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const YouDecideWhatShips = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    
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

  const keyPoints = [{
    icon: <ToggleLeft className="h-6 w-6" />,
    title: "Full override control built-in"
  }, {
    icon: <ZapIcon className="h-6 w-6" />,
    title: "Smart suggestions, not auto-blocks"
  }, {
    icon: <Layers className="h-6 w-6" />,
    title: "Transparency over automation"
  }];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div id="you-decide-section" className={cn("max-w-4xl mx-auto transition-all duration-500", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">You Decide What Ships</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Unlike other tools that auto-block orders, Scalysis puts you in control with real-time signals and smart suggestions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {keyPoints.map((point, index) => (
              <Card key={index} className={cn("border border-gray-200 transition-all duration-500 delay-300", 
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                      {point.icon}
                    </div>
                    <h3 className="font-medium text-lg mb-2">{point.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouDecideWhatShips;
