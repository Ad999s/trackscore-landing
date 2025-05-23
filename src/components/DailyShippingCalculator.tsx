import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Package, TrendingUp, IndianRupeeIcon, Calendar } from "lucide-react";
import { Slider } from "@/components/ui/slider";
const DailyShippingCalculator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [codOrders, setCodOrders] = useState(100);
  const [deliveryRate, setDeliveryRate] = useState([70]);
  const [results, setResults] = useState({
    inventorySaved: 0,
    shippingCostSaved: 0
  });
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    const currentElement = document.getElementById("daily-shipping-calculator");
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
    calculateSavings();
  }, [codOrders, deliveryRate]);
  const calculateSavings = () => {
    // Calculate RTO rate (percentage of orders that aren't delivered)
    const rtoRate = 100 - deliveryRate[0];

    // Calculate number of RTO orders
    const rtoOrders = codOrders * (rtoRate / 100);

    // Calculate preventable RTO orders (assume 35% of RTO orders can be prevented)
    const preventableRtoOrders = rtoOrders * 0.35;

    // Calculate shipping cost saved (assume ₹120 per order)
    const shippingCostPerOrder = 120;
    const shippingCostSaved = Math.round(preventableRtoOrders * shippingCostPerOrder);

    // Calculate inventory saved (each prevented RTO is one unit of inventory)
    const inventorySaved = Math.round(preventableRtoOrders);
    setResults({
      inventorySaved,
      shippingCostSaved
    });
  };
  return <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div id="daily-shipping-calculator" className={cn("max-w-4xl mx-auto transition-all duration-500", isVisible ? "animate-fadeIn" : "opacity-0")}>
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold mb-4 md:text-5xl">
              See How Much You Can Save With <span className="text-blue-600">Smart Order Selection</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estimate your potential savings by reducing unnecessary shipments with our AI-powered order selection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className={cn("shadow-md transition-all duration-700 bg-white", isVisible ? "animate-slideUp" : "opacity-0 translate-y-8")}>
              <CardHeader>
                <CardTitle>Your COD Order Details</CardTitle>
                <CardDescription>
                  Enter your current order volume to see potential savings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="cod-orders">COD Orders per Day</Label>
                  <Input id="cod-orders" type="number" min="1" value={codOrders} onChange={e => setCodOrders(parseInt(e.target.value) || 0)} className="text-lg" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Current Delivery Rate (%)</Label>
                    <span className="font-medium text-blue-600">{deliveryRate[0]}%</span>
                  </div>
                  <Slider value={deliveryRate} onValueChange={setDeliveryRate} max={100} step={1} className="my-6" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>
                
                <Button className="w-full" size="lg" onClick={calculateSavings}>
                  Calculate Savings
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
            
            {/* Results Section - Updated with Monthly Metrics */}
            <Card className={cn("shadow-md transition-all duration-700 border border-blue-100 bg-gradient-to-br from-blue-50 to-white", isVisible ? "animate-slideUp animation-delay-200" : "opacity-0 translate-y-8")}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="text-blue-600" size={22} />
                  Your Savings
                </CardTitle>
                <CardDescription>
                  Based on your current order volume and delivery rate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-600 text-white rounded-lg p-4 text-center">
                      <div className="text-sm mb-1">Daily Inventory Saved</div>
                      <div className="text-2xl font-bold flex items-center justify-center">
                        <Package size={20} className="mr-2" />
                        <CountUp end={results.inventorySaved} /> units
                      </div>
                    </div>
                    
                    <div className="bg-blue-600 text-white rounded-lg p-4 text-center">
                      <div className="text-sm mb-1">Monthly Inventory Saved</div>
                      <div className="text-2xl font-bold flex items-center justify-center">
                        <Package size={20} className="mr-2" />
                        <CountUp end={results.inventorySaved * 30} /> units
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-600 text-white rounded-lg p-4 text-center">
                      <div className="text-sm mb-1">Daily Savings</div>
                      <div className="text-2xl font-bold flex items-center justify-center">
                        <IndianRupeeIcon size={20} className="mr-1" />
                        <CountUp end={results.shippingCostSaved} />
                      </div>
                    </div>
                    
                    <div className="bg-green-600 text-white rounded-lg p-4 text-center">
                      <div className="text-sm mb-1">Monthly Savings</div>
                      <div className="text-2xl font-bold flex items-center justify-center">
                        <Calendar size={20} className="mr-1" />
                        <IndianRupeeIcon size={16} className="mr-1" />
                        <CountUp end={results.shippingCostSaved * 30} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-blue-100 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      By implementing Scalysis, you could save up to <span className="font-bold text-blue-600">{results.inventorySaved * 30}</span> units of inventory monthly, 
                      resulting in <span className="font-bold text-green-600">₹{results.shippingCostSaved * 30}</span> in shipping cost savings.
                    </p>
                    <div className="text-xs text-gray-500 mt-2">
                      * Calculation based on improvement in non-delivered orders
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};

// Simple CountUp animation component
const CountUp = ({
  end
}: {
  end: number;
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (end === 0) return;

    // Reset to 0 when end value changes
    setCount(0);
    const duration = 1000; // 1 second duration
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(end * Math.min(progress, 1));
      setCount(currentCount);
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    return () => clearInterval(counter);
  }, [end]);
  return <>{new Intl.NumberFormat('en-IN').format(count)}</>;
};
export default DailyShippingCalculator;