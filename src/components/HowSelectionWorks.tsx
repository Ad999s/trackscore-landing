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
  return <div className={cn("relative flex gap-6 cursor-pointer transition-all duration-300 group", isActive ? "opacity-100" : "opacity-70 hover:opacity-90")} onMouseEnter={onMouseEnter}>
      <div className="flex flex-col items-center">
        <div className={cn("flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300", isActive ? "border-2 border-blue-500 bg-blue-500 text-white" : "border-2 border-gray-300 text-gray-500")}>
          {number}
        </div>
        {!isLast && <div className={cn("mt-3 h-full w-0.5 transition-all duration-300", isActive ? "bg-blue-500" : "bg-gray-200")}></div>}
      </div>
      <div className="pb-8">
        <h3 className={cn("text-xl font-semibold mb-2 transition-all duration-300", isActive ? "text-blue-600" : "text-gray-700")}>{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>;
};
const HowSelectionWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
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
  const steps = [{
    number: 1,
    title: "Fetch AWB Links From Each Shopify Order",
    description: "Our AI engine automatically scans and processes all of your Cash-on-Delivery orders from your Shopify store in real-time."
  }, {
    number: 2,
    title: "Extract Tracking Status + Maintain Database",
    description: "Our proprietary algorithm extracts tracking information and maintains a comprehensive database for all your shipments."
  }, {
    number: 3,
    title: "AI Trains on Data + Product Specific Training",
    description: "Each order is analyzed and the AI learns from your specific product categories and customer behaviors to improve predictions."
  }, {
    number: 4,
    title: "Accurate Real-Time Predictions + 3 Modes of Shipping",
    description: "Orders are intelligently routed through three optimized shipping modes based on their scores to maximize delivery success rates."
  }, {
    number: 5,
    title: "AI Retrains & Gets Better Overtime",
    description: "Save working capital on shipping costs as our AI continuously learns from new data, improving predictions and reducing waste."
  }];
  return <section id="how-selection-works" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("text-center max-w-3xl mx-auto mb-16 transition-opacity duration-700", isVisible ? "opacity-100" : "opacity-0")}>
          <p className="inline-block text-sm font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full mb-4">
            Our Process
          </p>
          <h2 className="text-3xl font-bold mb-4 md:text-5xl">
            <span className="text-blue-500">Scalysis:</span> The Decision Engine Behind Your Profitable D2C Growth

          </h2>
          <p className="text-lg text-gray-600">
           Built for founders who care about every rupee, every order, every outcome.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Process Steps */}
          <div className={cn("space-y-4 transition-all duration-700 delay-300", isVisible ? "opacity-100" : "opacity-0 translate-y-10")}>
            {steps.map((step, index) => <ProcessStep key={step.number} number={step.number} title={step.title} description={step.description} isActive={activeStep === step.number} isLast={index === steps.length - 1} onMouseEnter={() => setActiveStep(step.number)} />)}
          </div>
          
          {/* Right Column - Visualization */}
          <div className={cn("relative transition-all duration-700 delay-500", isVisible ? "opacity-100" : "opacity-0 translate-y-10")}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-accent/20 rounded-3xl blur-lg"></div>
              <div className="relative bg-white rounded-2xl shadow-medium overflow-hidden border border-gray-100 p-6">
                {activeStep === 1 && <div className="space-y-6 animate-fadeIn">
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
                            <span className="font-medium text-green-600">AWB</span>
                          </div>
                          <div>
                            <p className="font-medium">AWB Link Extraction</p>
                            <p className="text-sm text-gray-500">Automated tracking setup</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-green-600 font-medium mr-2">Active</span>
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
                  </div>}
                
                {activeStep === 2 && <div className="space-y-6 animate-fadeIn">
                    <h3 className="font-medium text-xl flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check size={18} className="text-blue-600" />
                      </div>
                      Tracking Database
                    </h3>
                    
                    <div className="space-y-3 mt-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            <span className="font-medium text-blue-600">ETL</span>
                          </div>
                          <div>
                            <p className="font-medium">Data Processing</p>
                            <p className="text-sm text-gray-500">Extracting tracking data</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-green-600 font-medium mr-2">Active</span>
                          <ArrowRight size={20} className="text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                            <span className="font-medium text-purple-600">SQL</span>
                          </div>
                          <div>
                            <p className="font-medium">Database Storage</p>
                            <p className="text-sm text-gray-500">Maintaining history</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-green-600 font-medium mr-2">Indexed</span>
                          <ArrowRight size={20} className="text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="font-medium mb-2">Recent Tracking Updates</div>
                        <div className="space-y-2 text-sm">
                          {[{
                        id: "AWB-112233",
                        status: "Out for Delivery",
                        time: "12 min ago"
                      }, {
                        id: "AWB-445566",
                        status: "In Transit",
                        time: "45 min ago"
                      }, {
                        id: "AWB-778899",
                        status: "Delivered",
                        time: "2 hrs ago"
                      }].map(item => <div key={item.id} className="flex justify-between">
                              <span>{item.id}: <span className="text-blue-600">{item.status}</span></span>
                              <span className="text-gray-500">{item.time}</span>
                            </div>)}
                        </div>
                      </div>
                    </div>
                  </div>}
                
                {activeStep === 3 && <div className="space-y-6 animate-fadeIn">
                    <h3 className="font-medium text-xl flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check size={18} className="text-blue-600" />
                      </div>
                      AI Training Process
                    </h3>
                    
                    <div className="space-y-3 mt-4">
                      <div className="p-3 border border-blue-100 bg-blue-50 rounded-lg">
                        <div className="font-medium mb-2">Customer Behavior Analysis</div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Learning progress:</span>
                          <span className="text-sm text-blue-600 font-medium">87%</span>
                        </div>
                        <div className="w-full bg-white rounded-full h-2 mt-1 mb-3">
                          <div className="bg-blue-500 h-2 rounded-full" style={{
                        width: "87%"
                      }}></div>
                        </div>
                        <div className="text-xs text-gray-600">
                          25,482 order patterns analyzed
                        </div>
                      </div>
                      
                      <div className="p-3 border border-purple-100 bg-purple-50 rounded-lg">
                        <div className="font-medium mb-2">Product Category Training</div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <div className="font-medium text-purple-700">Electronics</div>
                            <div className="text-xs">3,451 orders</div>
                          </div>
                          <div>
                            <div className="font-medium text-purple-700">Fashion</div>
                            <div className="text-xs">8,927 orders</div>
                          </div>
                          <div>
                            <div className="font-medium text-purple-700">Home Goods</div>
                            <div className="text-xs">2,189 orders</div>
                          </div>
                          <div>
                            <div className="font-medium text-purple-700">Beauty</div>
                            <div className="text-xs">5,732 orders</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 border border-green-100 bg-green-50 rounded-lg">
                        <div className="font-medium mb-1">Model Training Metrics</div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Accuracy:</span>
                          <span className="font-medium">95.4%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Precision:</span>
                          <span className="font-medium">92.8%</span>
                        </div>
                      </div>
                    </div>
                  </div>}
                
                {activeStep === 4 && <div className="space-y-6 animate-fadeIn">
                    <h3 className="font-medium text-xl flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check size={18} className="text-blue-600" />
                      </div>
                      Smart Shipping Modes
                    </h3>
                    
                    <div className="space-y-3 mt-4">
                      <div className="p-3 border border-green-100 bg-green-50 rounded-lg">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-green-700">Maximum Success Mode</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm bg-green-200 text-green-800 px-2 py-0.5 rounded">Success: 85%</span>
                            <span className="text-sm bg-blue-200 text-blue-800 px-2 py-0.5 rounded">Profit: Medium</span>
                          </div>
                        </div>
                        <p className="text-sm text-green-700">Ship highest-quality orders for maximum delivery success</p>
                      </div>
                      
                      <div className="p-3 border border-blue-100 bg-blue-50 rounded-lg">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-blue-700">Peak Profit Mode</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm bg-green-200 text-green-800 px-2 py-0.5 rounded">Success: 70%</span>
                            <span className="text-sm bg-blue-200 text-blue-800 px-2 py-0.5 rounded">Profit: Maximum</span>
                          </div>
                        </div>
                        <p className="text-sm text-blue-700">Optimized for maximum profit with good delivery rates</p>
                      </div>
                      
                      <div className="p-3 border border-yellow-100 bg-yellow-50 rounded-lg">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-yellow-700">Balance Mode</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm bg-green-200 text-green-800 px-2 py-0.5 rounded">Success: 75%</span>
                            <span className="text-sm bg-blue-200 text-blue-800 px-2 py-0.5 rounded">Profit: Balanced</span>
                          </div>
                        </div>
                        <p className="text-sm text-yellow-700">Balanced approach for consistent results</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium mb-1">Today's Prediction Summary</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Predicted High Value Orders:</span>
                          <span className="font-medium">32</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Expected RTO Reduction:</span>
                          <span className="font-medium text-green-600">-48%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Projected Profit Increase:</span>
                          <span className="font-medium text-green-600">+29%</span>
                        </div>
                      </div>
                    </div>
                  </div>}
                
                {activeStep === 5 && <div className="space-y-6 animate-fadeIn">
                    <h3 className="font-medium text-xl flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check size={18} className="text-blue-600" />
                      </div>
                      Continuous AI Improvement
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 text-center bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">94%</div>
                        <div className="text-sm text-gray-600">Model Accuracy</div>
                        <div className="text-xs text-green-600">↑ 4% this month</div>
                      </div>
                      <div className="p-3 text-center bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">-52%</div>
                        <div className="text-sm text-gray-600">RTO Reduction</div>
                        <div className="text-xs text-blue-600">↑ 7% this month</div>
                      </div>
                      <div className="p-3 text-center bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">+38%</div>
                        <div className="text-sm text-gray-600">Profit Margin</div>
                        <div className="text-xs text-purple-600">↑ 5% this month</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium mb-2">Model Improvement Timeline</p>
                      <div className="relative">
                        <div className="border-l-2 border-blue-300 absolute h-full left-0 ml-2"></div>
                        <div className="ml-8 space-y-3">
                          <div className="relative">
                            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-10 top-1"></div>
                            <p className="text-sm font-medium">Initial Model Deployment</p>
                            <p className="text-xs text-gray-500">85% accuracy</p>
                          </div>
                          <div className="relative">
                            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-10 top-1"></div>
                            <p className="text-sm font-medium">First Data Retraining</p>
                            <p className="text-xs text-gray-500">88% accuracy</p>
                          </div>
                          <div className="relative">
                            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-10 top-1"></div>
                            <p className="text-sm font-medium">Algorithm Optimization</p>
                            <p className="text-xs text-gray-500">91% accuracy</p>
                          </div>
                          <div className="relative">
                            <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-10 top-1"></div>
                            <p className="text-sm font-medium">Current Model Performance</p>
                            <p className="text-xs text-gray-500">94% accuracy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowSelectionWorks;