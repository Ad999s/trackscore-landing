
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Check, ChevronRight, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const CoreValuePoints = () => {
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
    
    const currentElement = document.getElementById("core-value-section");
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const valuePoints = [
    {
      title: "Precision Scores",
      description: "Every order gets a quality score based on 50+ real-world signals — fake names, COD timing, past behavior, unreachable zones.",
    },
    {
      title: "Full Override Access",
      description: "Nothing moves without your say. Approve, block, or whitelist in one click.",
    },
    {
      title: "Action-Ready Insights",
      description: "We don't give you vague alerts. We show you exactly why each order was flagged — in plain language your ops team understands.",
    },
  ];

  const orderExamples = [
    {
      id: "19432",
      score: 34,
      status: "Flagged",
      reason: "Fake email + blocked pincode",
      actions: [
        { label: "Ship Anyway", color: "bg-green-500 hover:bg-green-600", icon: <ChevronRight className="h-4 w-4" /> },
        { label: "Block", color: "bg-red-500 hover:bg-red-600", icon: <X className="h-4 w-4" /> }
      ]
    },
    {
      id: "19433",
      score: 92,
      status: "Clean",
      reason: "",
      actions: [
        { label: "Auto-approved", color: "bg-green-100 text-green-800", icon: <Check className="h-4 w-4" /> }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="core-value-section"
          className={cn(
            "max-w-7xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              See <span className="text-blue-600">Pitfalls</span> Before They Cost You.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don’t Ship Blind.
            </p>
          </div>
          
          {/* Value Points Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {valuePoints.map((point, index) => (
              <div 
                key={index} 
                className={cn(
                  "bg-white p-6 rounded-lg shadow-soft transition-all duration-500",
                  isVisible ? `animate-fadeIn animation-delay-${(index + 1) * 100}` : "opacity-0"
                )}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 text-blue-600">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{point.title}</h3>
                </div>
                <p className="text-gray-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Order Panel Mock */}
          <div className={cn(
            "bg-white rounded-lg shadow-medium border border-gray-200 overflow-hidden transition-all duration-700 max-w-4xl mx-auto",
            isVisible ? "animate-fadeIn animation-delay-400" : "opacity-0"
          )}>
            <div className="border-b border-gray-200 bg-gray-50 p-4">
              <h3 className="font-medium text-lg">Order Management Panel</h3>
            </div>
            
            <div className="divide-y divide-gray-200">
              {orderExamples.map((order, index) => (
                <div key={index} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="text-gray-500">📦</div>
                    <div>
                      <div className="font-medium">Order #{order.id}</div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className={cn("font-medium", 
                          order.score < 50 ? "text-red-600" : "text-green-600"
                        )}>
                          Score: {order.score}/100
                        </span>
                        <span className="text-gray-400">→</span>
                        <span className={cn(
                          "font-medium",
                          order.status === "Flagged" ? "text-amber-600" : "text-green-600"
                        )}>
                          {order.status}
                        </span>
                        {order.reason && (
                          <>
                            <span className="text-gray-400">→</span>
                            <span className="text-gray-700">{order.reason}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    {order.actions.map((action, actionIndex) => (
                      <Button 
                        key={actionIndex}
                        size="sm"
                        className={cn(action.color, "text-white")}
                      >
                        {action.icon}
                        <span>{action.label}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Micro-Quote */}
          <div className={cn(
            "mt-16 max-w-3xl mx-auto text-center",
            isVisible ? "animate-fadeIn animation-delay-500" : "opacity-0"
          )}>
            <Separator className="mb-8" />
            <p className="text-xl font-medium text-gray-700 mb-2">
              "We still decide what ships. Scalysis just makes sure we know what not to touch."
            </p>
            <p className="text-gray-500">
              — Ops Head, 20k orders/month brand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuePoints;
