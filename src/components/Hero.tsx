
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
            <div className="space-y-2">
              <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                AI-Powered Order Selection
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Stop guessing RTOs. <span className="text-gradient">Start sniping them.</span>
              </h1>
              <p className="text-xl text-gray-600 mt-4 max-w-xl">
                The only AI model built to tag the right orders with 95%+ accuracy.
                No revenue impact. No false confidence. Just cash flow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <a href="#get-started">
                  Get a Precision Report 
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#how-it-works">Watch Demo</a>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-medium">300+</span> businesses using Scalysis
              </p>
            </div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <div className={`relative ${isLoaded ? 'animate-slideUp animation-delay-200' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-xl blur-xl"></div>
              <div className="relative bg-white rounded-xl shadow-medium overflow-hidden border border-gray-100">
                <div className="h-8 bg-gray-50 flex items-center px-4 border-b border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between mb-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">RTO Reduction Dashboard</h3>
                      <p className="text-xs text-gray-500">Real-time order analysis</p>
                    </div>
                    <div className="px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></span>
                      Live
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Orders Analyzed", value: "2,851", color: "bg-blue-50 text-blue-600" },
                      { label: "RTO Reduction", value: "37%", color: "bg-green-50 text-green-600" },
                      { label: "Cost Savings", value: "₹235K", color: "bg-accent/10 text-accent" }
                    ].map((stat, index) => (
                      <div key={index} className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                        <div className={`text-xs font-medium ${stat.color} px-1.5 py-0.5 rounded w-fit mb-1`}>
                          {stat.label}
                        </div>
                        <div className="text-xl font-semibold">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-full px-4">
                      <div className="h-6 bg-gray-200 rounded-full mb-2 overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "65%" }}></div>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-4 bg-gray-200 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Updated 5 minutes ago</span>
                    <span className="text-primary">View full report</span>
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
