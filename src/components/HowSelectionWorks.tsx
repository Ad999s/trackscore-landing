import { useEffect, useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  isActive, 
  isLast = false,
  onMouseEnter
}: { 
  number: number;
  title: string;
  description: string;
  isActive: boolean;
  isLast?: boolean;
  onMouseEnter: () => void;
}) => {
  return (
    <div 
      className={cn(
        "relative flex gap-6 cursor-pointer transition-all duration-300 group",
        isActive ? "opacity-100" : "opacity-70 hover:opacity-90"
      )}
      onMouseEnter={onMouseEnter}
    >
      <div className="flex flex-col items-center">
        <div className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300",
          isActive 
            ? "border-2 border-blue-500 bg-blue-500 text-white" 
            : "border-2 border-gray-300 text-gray-500"
        )}>
          {number}
        </div>
        {!isLast && (
          <div className={cn(
            "mt-3 h-full w-0.5 transition-all duration-300",
            isActive ? "bg-blue-500" : "bg-gray-200"
          )}></div>
        )}
      </div>
      <div className="pb-8">
        <h3 className={cn(
          "text-xl font-semibold mb-2 transition-all duration-300",
          isActive ? "text-blue-600" : "text-gray-700"
        )}>{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowSelectionWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
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
    
    const currentElement = document.getElementById("how-selection-works");
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);
  
  const steps = [
    {
      number: 1,
      title: "Scans All COD Shopify Orders",
      description: "Our AI engine automatically scans and processes all of your Cash-on-Delivery orders from your Shopify store in real-time."
    },
    {
      number: 2,
      title: "Scores Each Order",
      description: "Our proprietary algorithm assigns a confidence score to predict the likelihood of successful delivery and payment collection."
    },
    {
      number: 3,
      title: "Ranks All Orders Internally",
      description: "Each order is analyzed and ranked based on multiple parameters including location, customer history, and product category."
    },
    {
      number: 4,
      title: "3 Mode Shipping",
      description: "Orders are intelligently routed through three optimized shipping modes based on their scores to maximize delivery success rates."
    },
    {
      number: 5,
      title: "Efficient Cashflow System",
      description: "Save working capital on shipping costs, unnecessary wasted shipments that were never meant to convert."
    }
  ];

  return (
    <section id="how-selection-works" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-opacity duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <p className="inline-block text-sm font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full mb-4">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-blue-500">Smart Order Selection</span> Works
          </h2>
          <p className="text-lg text-gray-600">
            Our AI-powered system optimizes your order fulfillment process to minimize returns and maximize profits.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Process Steps */}
          <div className={cn(
            "space-y-4 transition-all duration-700 delay-300",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            {steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                isActive={activeStep === step.number}
                isLast={index === steps.length - 1}
                onMouseEnter={() => setActiveStep(step.number)}
              />
            ))}
          </div>
          
          {/* Right Column - Visualization */}
          <div className={cn(
            "relative transition-all duration-700 delay-500",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-accent/20 rounded-3xl blur-lg"></div>
              <div className="relative bg-white rounded-2xl shadow-medium overflow-hidden border border-gray-100 p-6">
                {activeStep === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="font-medium text-xl flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check size={18} className="text-blue-600" />
                      </div>
                      Syncing with Shopify
                    </h3>
                    
                    <div className="space-y-3 mt-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <span className="font-medium text-blue-600">API</span>
                          </div>
                          <div>
                            <p className="font-medium">Shopify Integration</p>
                            <p className="text-sm text-gray-500">Real-time order capture</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-green-600 font-medium mr-2">Synced</span>
                          <ArrowRight size={20} className="text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                            <span className="font-medium text-green-600">ML</span>
                          </div>
                          <div>
                            <p className="font-medium">Data Processing</p>
                            <p className="text-sm text-gray-500">Order metadata extraction</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-green-600 font-medium mr-2">Synced</span>
                          <ArrowRight size={20} className="text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                            <span className="font-medium text-amber-600">DB</span>
                          </div>
                          <div>
                            <p className="font-medium">Order Repository</p>
                            <p className="text-sm text-gray-500">Secure data storage</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-green-600 font-medium mr-2">All Orders Synced</span>
                          <ArrowRight size={20} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="font-medium text-xl flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check size={18} className="text-blue-600" />
                      </div>
                      Order Scoring Parameters
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {[
                        { name: "Past Purchase History", value: 85, color: "bg-green-500" },
                        { name: "Time on Website", value: 72, color: "bg-blue-500" },
                        { name: "Cross-site History", value: 65, color: "bg-amber-500" },
                        { name: "Time to Order", value: 78, color: "bg-purple-500" },
                        { name: "Intent Score", value: 88, color: "bg-indigo-500" },
                        { name: "Product Category", value: 75, color: "bg-red-500" }
                      ].map((factor) => (
                        <div key={factor.name} className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">{factor.name}</p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                            <div 
                              className={`h-2 rounded-full ${factor.color}`} 
                              style={{ width: `${factor.value}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-right font-medium text-gray-500">
                            Weight: {factor.value}%
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium mb-2">Parameter Analysis</p>
                      <div className="text-sm text-gray-600">
                        Our proprietary algorithm uses 35+ data points to determine order quality and likelihood of successful delivery.
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 3 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="font-medium text-xl flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check size={18} className="text-blue-600" />
                      </div>
                      Orders Ranked by Intent Score
                    </h3>
                    
                    <div className="mt-4 space-y-4">
                      {[
                        { id: "ORD-7845", score: 92, intent: "High" },
                        { id: "ORD-7846", score: 76, intent: "Medium" },
                        { id: "ORD-7847", score: 58, intent: "Medium" },
                        { id: "ORD-7848", score: 38, intent: "Low" },
                        { id: "ORD-7849", score: 22, intent: "Very Low" },
                        { id: "ORD-7850", score: 12, intent: "Very Low" }
                      ].map((order) => (
                        <div 
                          key={order.id} 
                          className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-white"
                        >
                          <div className="font-medium">{order.id}</div>
                          <div className="flex items-center gap-3">
                            <div 
                              className={cn(
                                "text-xs font-medium px-2 py-1 rounded",
                                order.intent === "High" ? "bg-green-50 text-green-600" :
                                order.intent === "Medium" ? "bg-yellow-50 text-yellow-600" :
                                order.intent === "Low" ? "bg-orange-50 text-orange-600" :
                                "bg-red-50 text-red-600"
                              )}
                            >
                              {order.intent} Intent
                            </div>
                            <div 
                              className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
                                order.score >= 80 ? "bg-green-50 text-green-600" :
                                order.score >= 50 ? "bg-yellow-50 text-yellow-600" :
                                order.score >= 30 ? "bg-orange-50 text-orange-600" :
                                "bg-red-50 text-red-600"
                              )}
                            >
                              {order.score}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeStep === 4 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="font-medium text-xl flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check size={18} className="text-blue-600" />
                      </div>
                      3 Mode Shipping
                    </h3>
                    
                    <div className="space-y-3 mt-4">
                      <div className="p-3 border border-green-100 bg-green-50 rounded-lg">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-green-700">Ship All</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm bg-green-200 text-green-800 px-2 py-0.5 rounded">Delivery Success: 60%</span>
                            <span className="text-sm bg-blue-200 text-blue-800 px-2 py-0.5 rounded">Profit: Medium</span>
                          </div>
                        </div>
                        <p className="text-sm text-green-700">Ship all orders - balanced approach with medium profit</p>
                      </div>
                      
                      <div className="p-3 border border-blue-100 bg-blue-50 rounded-lg">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-blue-700">Peak Profit</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm bg-green-200 text-green-800 px-2 py-0.5 rounded">Delivery Success: 70%</span>
                            <span className="text-sm bg-blue-200 text-blue-800 px-2 py-0.5 rounded">Profit: Maximum</span>
                          </div>
                        </div>
                        <p className="text-sm text-blue-700">Optimized for maximum profit with good delivery rates</p>
                      </div>
                      
                      <div className="p-3 border border-yellow-100 bg-yellow-50 rounded-lg">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-yellow-700">Least RTO</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm bg-green-200 text-green-800 px-2 py-0.5 rounded">Delivery Success: 85%</span>
                            <span className="text-sm bg-blue-200 text-blue-800 px-2 py-0.5 rounded">Profit: Medium</span>
                          </div>
                        </div>
                        <p className="text-sm text-yellow-700">Focus on minimizing returns while maintaining profit</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-medium text-blue-800">Recommended Mode: Peak Profit</p>
                      <div className="mt-2 flex justify-between">
                        <span className="text-sm text-blue-700">Estimated Delivery Success: 70%</span>
                        <span className="text-sm text-blue-700">Estimated Profit: ₹42,500 monthly</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 5 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="font-medium text-xl flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check size={18} className="text-blue-600" />
                      </div>
                      Efficient Cashflow System
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 text-center bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">90%</div>
                        <div className="text-sm text-gray-600">Delivery Success</div>
                      </div>
                      <div className="p-3 text-center bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">-40%</div>
                        <div className="text-sm text-gray-600">Shipping Cost</div>
                      </div>
                      <div className="p-3 text-center bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">-40%</div>
                        <div className="text-sm text-gray-600">Inventory Usage</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium mb-1">Business Impact</p>
                      <div className="flex items-center justify-between text-sm">
                        <span>Monthly Orders: 1,000</span>
                        <span className="text-green-600 font-medium">+₹45,000 Monthly Profit</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-blue-100 bg-blue-50 rounded-lg">
                      <p className="font-medium text-blue-800">Save working capital today!</p>
                      <p className="text-sm text-blue-700 mt-1">
                        Avoid unnecessary wasted shipments that were never meant to convert.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSelectionWorks;
