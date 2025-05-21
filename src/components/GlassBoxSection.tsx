
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SearchCode, Bell, Info, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GlassBoxSection = () => {
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

  const featureAlerts = [
    {
      title: "Flagged: Name mismatch + Unreachable Pincode",
      color: "bg-amber-50 border-amber-200 text-amber-700"
    },
    {
      title: "Blocked: COD attempt after 5 failed deliveries in past 30 days",
      color: "bg-red-50 border-red-200 text-red-700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="glass-box-section"
          className={cn(
            "max-w-5xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side: UI mockup */}
            <div className={cn(
              "relative transition-all duration-700",
              isVisible ? "animate-slideUp" : "opacity-0 translate-y-8"
            )}>
              <Card className="shadow-xl border border-gray-100 overflow-hidden bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="font-bold text-lg">Order Alerts</div>
                    <div className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-gray-500" />
                      <Info className="h-5 w-5 text-gray-500" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {featureAlerts.map((alert, index) => (
                      <div 
                        key={index} 
                        className={cn(
                          `p-4 border rounded-lg ${alert.color} transition-all`,
                          isVisible ? `animate-fadeIn animation-delay-${(index + 1) * 200}` : "opacity-0"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-medium">{alert.title}</div>
                          <Activity className="h-4 w-4" />
                        </div>
                        
                        <div className="mt-4 flex items-center text-sm text-blue-600 cursor-pointer">
                          <SearchCode className="h-4 w-4 mr-1" />
                          <span>🕵️ Tap to see full logic trail</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <button className="bg-white border border-gray-200 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                      View All
                    </button>
                    <button className="bg-green-500 text-white py-2 rounded text-sm font-medium hover:bg-green-600 transition-colors col-span-2">
                      Override & Approve
                    </button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-blue-100 opacity-50"></div>
              <div className="absolute -top-10 -left-10 w-16 h-16 rounded-full bg-purple-100 opacity-50"></div>
            </div>
            
            {/* Right side: Content */}
            <div className={cn(
              "transition-all duration-700",
              isVisible ? "animate-slideUp animation-delay-200" : "opacity-0 translate-y-8"
            )}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Not a Black Box. <span className="text-blue-600">A Glass Box.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We don't just say "block this" — we tell you why.
                Every decision is backed by logic you can audit, override, and learn from.
              </p>
              
              <div className="bg-blue-900 text-white p-6 rounded-lg mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-blue-800 rounded-full">
                    <SearchCode className="h-6 w-6" />
                  </div>
                  <div className="font-bold text-lg">Trust Message</div>
                </div>
                <div className="space-y-2">
                  <p>Built by ex-Flipkart data scientists.</p>
                  <p>Designed for ops managers, not ML engineers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlassBoxSection;
