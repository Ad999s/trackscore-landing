
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const CTA = () => {
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
    
    const currentElement = document.getElementById("cta-section");
    
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
    <section id="get-started" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="cta-section"
          className={cn(
            "max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-strong relative transition-all duration-700",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 opacity-95"></div>
          
          <div className="relative p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Reduce Your RTO Rates?
                </h2>
                <p className="text-white/90 text-lg">
                  Join hundreds of businesses across India that are saving money and improving customer satisfaction with Scalysis.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <ShimmerButton 
                    background="white" 
                    shimmerColor="rgba(59, 130, 246, 0.5)"
                    className="w-40 text-primary hover:bg-white border-white"
                  >
                    <span className="text-sm font-medium">Try 30 Days Free</span>
                  </ShimmerButton>
                  <ShimmerButton 
                    background="transparent" 
                    shimmerColor="rgba(255, 255, 255, 0.5)"
                    className="w-40 text-white hover:bg-white/10 border-white"
                  >
                    <span className="text-sm font-medium">Watch Demo</span>
                  </ShimmerButton>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <h3 className="text-xl font-medium mb-3">RTO Savings Calculator</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-white/80 block mb-1">Daily COD Orders</label>
                      <div className="bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-sm">
                        100-500 orders
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white/80 block mb-1">Current RTO Rate</label>
                      <div className="bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-sm">
                        25-30%
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-sm font-medium mb-1">Estimated Monthly Savings</div>
                      <div className="text-2xl font-bold">₹85,000 - ₹125,000</div>
                    </div>
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

export default CTA;
