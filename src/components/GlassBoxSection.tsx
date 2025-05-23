
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SearchCode, Bell, Info, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GlassBoxSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    
    const currentElement = document.getElementById("glass-box-section");
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const featureAlerts = [{
    title: "Flagged: Name mismatch + Unreachable Pincode",
    color: "bg-amber-50 border-amber-200 text-amber-700"
  }, {
    title: "Blocked: COD attempt after 5 failed deliveries in past 30 days",
    color: "bg-red-50 border-red-200 text-red-700"
  }];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div id="glass-box-section" className={cn("max-w-4xl mx-auto transition-all duration-500", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">No Black Box Algorithm</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Transparent signals explain exactly why each order is flagged, with clear reasoning you can share with your team.
          </p>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {featureAlerts.map((alert, index) => (
              <Card key={index} className={cn("border transition-all duration-500 delay-300", 
                alert.color, isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
                <CardContent className="p-5">
                  <div className="flex items-center">
                    <div className="mr-4">
                      {index === 0 ? 
                        <Bell className="h-5 w-5" /> : 
                        <Info className="h-5 w-5" />
                      }
                    </div>
                    <p className="font-medium">{alert.title}</p>
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

export default GlassBoxSection;
