
import { useEffect, useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  isActive, 
  isLast = false,
  onClick
}: { 
  number: number;
  title: string;
  description: string;
  isActive: boolean;
  isLast?: boolean;
  onClick: () => void;
}) => {
  return (
    <div 
      className={cn(
        "relative flex gap-6 cursor-pointer transition-all duration-300 group",
        isActive ? "opacity-100" : "opacity-70 hover:opacity-90"
      )}
      onClick={onClick}
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

  useEffect(() => {
    // Auto cycle through steps
    const interval = setInterval(() => {
      setActiveStep((prev) => prev === 5 ? 1 : prev + 1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const steps = [
    {
      number: 1,
      title: "Scans All COD Shopify Orders",
      description: "Our AI engine automatically scans and processes all of your Cash-on-Delivery orders from your Shopify store in real-time."
    },
    {
      number: 2,
      title: "Ranks All Orders Internally",
      description: "Each order is analyzed and ranked based on multiple parameters including location, customer history, and product category."
    },
    {
      number: 3,
      title: "Scores Each Order",
      description: "Our proprietary algorithm assigns a confidence score to predict the likelihood of successful delivery and payment collection."
    },
    {
      number: 4,
      title: "Ships According to Modes",
      description: "Orders are intelligently routed through optimal shipping channels based on their scores to maximize delivery success rates."
    },
    {
      number: 5,
      title: "Better Business Outcomes",
      description: "The result: Fewer RTOs, improved inventory turnover, and significantly increased profit margins for your eCommerce business."
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
                onClick={() => setActiveStep(step.number)}
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
                      Order Scanning Process
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
                        <ArrowRight size={20} className="text-gray-400" />
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
                        <ArrowRight size={20} className="text-gray-400" />
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
                        <ArrowRight size={20} className="text-gray-400" />
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
                      Order Ranking Algorithm
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {[
                        { name: "Location", value: 85, color: "bg-green-500" },
                        { name: "Purchase History", value: 72, color: "bg-blue-500" },
                        { name: "Cart Value", value: 65, color: "bg-amber-500" },
                        { name: "Product Category", value: 78, color: "bg-purple-500" }
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
                      <p className="font-medium mb-2">Ranking Factors</p>
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
                      Order Confidence Scoring
                    </h3>
                    
                    <div className="mt-4 space-y-4">
                      {[
                        { id: "ORD-7845", score: 92, risk: "Low" },
                        { id: "ORD-7846", score: 76, risk: "Medium" },
                        { id: "ORD-7848", score: 38, risk: "High" }
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
                                order.risk === "Low" ? "bg-green-50 text-green-600" :
                                order.risk === "Medium" ? "bg-yellow-50 text-yellow-600" :
                                "bg-red-50 text-red-600"
                              )}
                            >
                              {order.risk} Risk
                            </div>
                            <div 
                              className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
                                order.score >= 80 ? "bg-green-50 text-green-600" :
                                order.score >= 60 ? "bg-yellow-50 text-yellow-600" :
                                "bg-red-50 text-red-600"
                              )}
                            >
                              {order.score}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-medium text-blue-800 mb-1">AI Score Interpretation</p>
                      <p className="text-sm text-blue-700">
                        90+ = Excellent delivery probability<br/>
                        70-89 = Good delivery probability<br/>
                        Below 50 = High risk of return
                      </p>
                    </div>
                  </div>
                )}
                
                {activeStep === 4 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="font-medium text-xl flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check size={18} className="text-blue-600" />
                      </div>
                      Smart Shipping Optimization
                    </h3>
                    
                    <div className="space-y-3 mt-4">
                      <div className="p-3 border border-green-100 bg-green-50 rounded-lg">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-green-700">Priority Shipping</span>
                          <span className="text-sm bg-green-200 text-green-800 px-2 py-0.5 rounded">90-100 Score</span>
                        </div>
                        <p className="text-sm text-green-700">Premium shipping for highest confidence orders</p>
                      </div>
                      
                      <div className="p-3 border border-blue-100 bg-blue-50 rounded-lg">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-blue-700">Standard Shipping</span>
                          <span className="text-sm bg-blue-200 text-blue-800 px-2 py-0.5 rounded">70-89 Score</span>
                        </div>
                        <p className="text-sm text-blue-700">Regular shipping path for good confidence orders</p>
                      </div>
                      
                      <div className="p-3 border border-yellow-100 bg-yellow-50 rounded-lg">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-yellow-700">Verification Required</span>
                          <span className="text-sm bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded">50-69 Score</span>
                        </div>
                        <p className="text-sm text-yellow-700">Additional verification before shipping</p>
                      </div>
                      
                      <div className="p-3 border border-red-100 bg-red-50 rounded-lg">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-red-700">Flagged Orders</span>
                          <span className="text-sm bg-red-200 text-red-800 px-2 py-0.5 rounded">Below 50</span>
                        </div>
                        <p className="text-sm text-red-700">Manual review or prepayment required</p>
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
                      Business Impact
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 text-center bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">-55%</div>
                        <div className="text-sm text-gray-600">RTO Reduction</div>
                      </div>
                      <div className="p-3 text-center bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">+32%</div>
                        <div className="text-sm text-gray-600">Inventory Turnover</div>
                      </div>
                      <div className="p-3 text-center bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">+22%</div>
                        <div className="text-sm text-gray-600">Net Profit</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium mb-1">ROI Calculator</p>
                      <div className="flex items-center justify-between text-sm">
                        <span>Monthly Orders: 1,000</span>
                        <span className="text-green-600 font-medium">+₹45,000 Monthly Profit</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-blue-100 bg-blue-50 rounded-lg">
                      <p className="font-medium text-blue-800">Start reducing RTOs today!</p>
                      <p className="text-sm text-blue-700 mt-1">
                        Integrate our Smart Order Selection system with your Shopify store in minutes.
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
