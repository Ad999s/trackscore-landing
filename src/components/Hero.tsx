
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
            <div className="space-y-4">
              <p className="inline-block text-sm font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                Reduce RTO rates upto 55%
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Smart Order <br />Selection: <span className="text-blue-500">Reduce RTO</span>
              </h1>
              <p className="text-xl text-gray-600 mt-4 max-w-xl">
                Your hunt for "how to reduce rtos" ends here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
                <a href="#get-started" className="flex items-center">
                  Install on shopify -&gt;
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300">
                <a href="#how-it-works">See how it works</a>
              </Button>
            </div>
            
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2">
                <p className="text-gray-700">Trusted by D2C brands just like yours</p>
              </div>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
                <span className="ml-2 text-gray-700 font-medium">4.9/5</span>
              </div>
              <div className="mt-2">
                <p className="font-medium text-gray-800">
                  Instantly increase your Net Profits by <span className="text-blue-600 font-bold text-xl">22%+</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className={`relative ${isLoaded ? 'animate-slideUp animation-delay-200' : 'opacity-0'}`}>
            <div className="relative bg-white rounded-xl shadow-medium overflow-hidden border border-gray-100">
              <div className="p-5">
                <div className="flex justify-between mb-4">
                  <div className="space-y-1">
                    <h3 className="font-medium text-xl">Order Intelligence Dashboard</h3>
                    <p className="text-sm text-gray-600">Real-time AI-driven insights</p>
                  </div>
                  <div className="px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded flex items-center">
                    AI Analysis
                  </div>
                </div>
                
                <div className="space-y-6 mt-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Genuine Orders</span>
                      <span className="text-sm font-medium text-green-600">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Low Intent Orders</span>
                      <span className="text-sm font-medium text-red-600">8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: "8%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Profit Increase</span>
                      <span className="text-sm font-medium text-blue-600">+62%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "62%" }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mt-6 mb-6">
                  <div className="font-medium mb-2">AI Recommendation</div>
                  <p className="text-sm text-gray-700">Focus marketing efforts on Northern region - 89% genuine purchase rate, 2.8x higher ROI than other regions.</p>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 text-center bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">82%</div>
                    <div className="text-sm text-gray-600">Delivery Rate</div>
                  </div>
                  <div className="p-3 text-center bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">+56%</div>
                    <div className="text-sm text-gray-600">Profit Margin</div>
                  </div>
                  <div className="p-3 text-center bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">-43%</div>
                    <div className="text-sm text-gray-600">RTO Rate</div>
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

export default Hero;
