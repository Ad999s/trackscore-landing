
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRightIcon, IndianRupeeIcon, PackageIcon } from "lucide-react";

const ROISimulator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [orderCount, setOrderCount] = useState(100); // Changed from 10000 to 100
  const [avgOrderValue, setAvgOrderValue] = useState(1000);
  const [deliveryRate, setDeliveryRate] = useState([75]); // Inverse of RTO rate - starting at 75% delivery rate
  const [savings, setSavings] = useState({
    total: 0,
    inventoryProtected: 15 // Fixed at 15 as requested
  });
  
  // Calculate savings whenever inputs change
  useEffect(() => {
    const rtoRate = 100 - deliveryRate[0]; // Convert delivery rate to RTO rate
    const rtoOrders = orderCount * (rtoRate / 100);
    const preventableRtoOrders = rtoOrders * 0.35; // Assuming 35% RTO reduction
    const savingsPerOrder = avgOrderValue * 0.25; // Assuming 25% of order value is saved
    const totalSavings = preventableRtoOrders * savingsPerOrder;
    
    setSavings({
      total: Math.round(totalSavings),
      inventoryProtected: 15 // Fixed at 15 as requested
    });
  }, [orderCount, avgOrderValue, deliveryRate]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById("roi-simulator-section");
    
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
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="roi-simulator-section"
          className={cn(
            "max-w-5xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ROI Simulator
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your last 100 orders. Here's what we would've saved you.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left column - Input controls */}
              <div className={cn(
                "space-y-8 transition-all duration-700",
                isVisible ? "animate-slideUp" : "opacity-0 translate-y-8"
              )}>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Number of Orders</label>
                  <input
                    type="number"
                    value={orderCount}
                    onChange={(e) => setOrderCount(parseInt(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
                    min="1"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Average Order Value (₹)</label>
                  <input
                    type="number"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(parseInt(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
                    min="1"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Current Delivery Rate (%)</label>
                    <span className="text-sm font-medium text-primary">{deliveryRate[0]}%</span>
                  </div>
                  
                  <div className="relative py-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>0%</span>
                      <span>25%</span>
                      <span>50%</span>
                      <span>75%</span>
                      <span>100%</span>
                    </div>
                    <Slider
                      value={deliveryRate}
                      onValueChange={setDeliveryRate}
                      max={100}
                      step={1}
                    />
                  </div>
                </div>
                
                <Button size="lg" className="w-full">
                  Calculate Savings <ArrowRightIcon size={16} className="ml-2" />
                </Button>
              </div>
              
              {/* Right column - Results */}
              <div className={cn(
                "transition-all duration-700",
                isVisible ? "animate-slideUp animation-delay-300" : "opacity-0 translate-y-8"
              )}>
                <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-6 text-center">Your Potential Savings</h3>
                  
                  <div className="space-y-8 flex-grow flex flex-col justify-center">
                    <div className="bg-green-50 rounded-lg p-6 text-center">
                      <div className="text-sm text-gray-500 mb-2">Total Savings per 100 Order COD</div>
                      <div className="flex items-center justify-center text-3xl font-bold text-green-600">
                        <IndianRupeeIcon size={24} />
                        {new Intl.NumberFormat('en-IN').format(savings.total)}
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-6 text-center">
                      <div className="text-sm text-gray-500 mb-2">Inventory Protected</div>
                      <div className="flex items-center justify-center text-3xl font-bold text-blue-600">
                        <PackageIcon size={24} className="mr-2" />
                        {savings.inventoryProtected} units
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      Based on your current order volume and delivery rate, Scalysis could help you save up to <span className="font-bold text-primary">{Math.round((100 - deliveryRate[0]) * 0.35)}%</span> of your RTO costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISimulator;
