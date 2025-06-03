import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("pnl"); // "pnl" or "cashflow"
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById("features-section");
    
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
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="features-section"
          className={cn(
            "grid md:grid-cols-2 gap-12 items-center transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
              Powerful Features
            </p>
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Ship <span className="text-gradient font-semibold">Smart Every Day</span>
            </h2>
            <p className="text-lg font-light text-gray-700">
              Save <span className="font-semibold">21% daily</span> on shipping costs, packaging costs & supplier payments without hurting the potential revenue. Add <span className="font-semibold">3%</span> to your profit margins.
            </p>
            
            {/* Tab Buttons */}
            <div className="flex space-x-4 pt-4">
              <Button
                variant={activeTab === "pnl" ? "default" : "outline"}
                onClick={() => setActiveTab("pnl")}
                className="flex-1"
              >
                Auto PnL Tracking
              </Button>
              <Button
                variant={activeTab === "cashflow" ? "default" : "outline"}
                onClick={() => setActiveTab("cashflow")}
                className="flex-1"
              >
                30 Day Cash Flow
              </Button>
            </div>
            
            {/* Tab Content */}
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 min-h-40">
              {activeTab === "pnl" ? (
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-blue-600">Automatic PnL Tracking</h3>
                  <p className="font-light text-gray-700">
                    Automatically tracks your profit and loss across all your orders. Integrates with 
                    your Shopify store and gives you <span className="font-semibold">real-time insights</span> into your business performance.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 font-light">
                    <li><span className="font-medium">Real-time</span> profit margin calculation</li>
                    <li>Cost tracking across suppliers</li>
                    <li>Shipping and packaging cost analysis</li>
                    <li>COD fees and charges monitoring</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-green-600">Predict 30 Day Cash Flow</h3>
                  <p className="font-light text-gray-700">
                    Get <span className="font-semibold">accurate predictions</span> of your cash flow for the next 30 days. Know exactly when money 
                    will come in and go out, helping you make better business decisions.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 font-light">
                    <li><span className="font-medium">Accurate</span> COD remittance forecasting</li>
                    <li>Supplier payment scheduling</li>
                    <li>Expected delivery and RTO projections</li>
                    <li>Daily, weekly, and monthly breakdown</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Feature Illustration */}
          <div className={cn(
            "relative transition-all duration-500",
            isVisible ? "animate-slideUp animation-delay-200" : "opacity-0"
          )}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-xl blur-xl"></div>
              <div className="relative bg-white rounded-xl shadow-medium overflow-hidden border border-gray-100">
                {activeTab === "pnl" ? (
                  <img 
                    src="/lovable-uploads/c408b62f-1bf7-42d2-8132-857456402690.png" 
                    alt="Auto PnL Tracking Dashboard" 
                    className="w-full h-auto" 
                  />
                ) : (
                  <img 
                    src="/lovable-uploads/f02f2d55-07d3-4d98-9dc7-9443cc8b8759.png" 
                    alt="30 Day Cash Flow Prediction" 
                    className="w-full h-auto" 
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
