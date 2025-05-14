import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Package, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const ProfitCalculator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState([70]);
  const [calculatedProfit, setCalculatedProfit] = useState({
    monthly: "211,833",
    annual: "25.42",
    inventorySaved: "588",
    deliveryRateFrom: "70.0",
    deliveryRateTo: "83.5",
    profitIncrease: "17"
  });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById("profit-calculator-section");
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const handleCalculate = () => {
    // In a real app, this would be actual calculation logic
    // For now we'll just keep the same values
    setCalculatedProfit({
      monthly: "211,833",
      annual: "25.42",
      inventorySaved: "588",
      deliveryRateFrom: "70.0",
      deliveryRateTo: "83.5",
      profitIncrease: "17"
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="profit-calculator-section"
          className={cn(
            "flex flex-col items-center text-center transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find your hidden profits per month
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-16">
            Shipping bad orders eat away a lot of monthly profits
          </p>

          <div className={cn(
            "grid md:grid-cols-2 gap-8 w-full transition-all duration-500 max-w-5xl",
            isVisible ? "animate-slideUp animation-delay-200" : "opacity-0"
          )}>
            {/* Calculator - Left side */}
            <div className="bg-blue-600 text-white rounded-lg p-8">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="2"/>
                    <line x1="8" y1="17" x2="12" y2="17" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Estimate Your Profit</h3>
              </div>
              
              <p className="mb-8 text-white/90">
                Enter your current order details & it will show how much you save by just not shipping bad orders.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Daily Orders</label>
                  <input 
                    type="number" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
                    placeholder="Enter number of daily orders"
                    defaultValue="167"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Average Order Value (₹)</label>
                  <input 
                    type="number" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
                    placeholder="Enter average order value"
                    defaultValue="1000"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">Current Delivery Rate (%)</label>
                    <span className="text-sm font-medium">{sliderValue[0]}%</span>
                  </div>
                  <div className="relative py-4">
                    <div className="flex justify-between text-xs text-white/60 mb-1">
                      <span>0%</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                    <Slider
                      value={sliderValue}
                      onValueChange={setSliderValue}
                      max={100}
                      step={1}
                    />
                  </div>
                </div>
                
                <Button 
                  variant="secondary" 
                  className="w-full py-6 text-primary font-medium text-base"
                  onClick={handleCalculate}
                >
                  Calculate Profit
                </Button>
              </div>
            </div>
            
            {/* Results - Right side */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <ArrowUpRight className="w-5 h-5 text-green-600" />
                <h3 className="text-xl font-medium text-gray-800">Add this to your bottomline profit</h3>
              </div>
              
              <div className="bg-green-50 rounded-lg p-8 text-center mb-6">
                <div className="text-4xl font-bold text-green-600 mb-1">+₹{calculatedProfit.monthly}</div>
                <div className="text-gray-500">Monthly profit</div>
                <div className="text-2xl font-bold text-green-600 mt-3">+₹{calculatedProfit.annual} Lakhs</div>
                <div className="text-gray-500">In Annual profits</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <Package className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-sm text-gray-500">Inventory Saved</div>
                  <div className="font-bold text-blue-600">{calculatedProfit.inventorySaved} units</div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-sm text-gray-500">Delivery Rate</div>
                  <div className="font-bold text-blue-600">{calculatedProfit.deliveryRateFrom}% → {calculatedProfit.deliveryRateTo}%</div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4V20" stroke="#3B82F6" strokeWidth="2"/>
                      <path d="M4 12H20" stroke="#3B82F6" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="text-sm text-gray-500">Increase in Net Profit</div>
                  <div className="font-bold text-blue-600">{calculatedProfit.profitIncrease}%</div>
                </div>
              </div>
              
              <div className="text-left">
                <p className="text-gray-700 mb-4">
                  Our customers typically achieve a <span className="font-bold">45% improvement in delivery rates</span> within 3 months of implementing our <span className="bg-primary text-white px-3 py-1 rounded">Smart Order Selection</span> system.
                </p>
                <Button variant="default" size="lg">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculator;
