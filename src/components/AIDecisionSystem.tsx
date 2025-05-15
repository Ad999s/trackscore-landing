
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const AIDecisionSystem = () => {
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
    
    const currentElement = document.getElementById("ai-decision-system");
    
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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="ai-decision-system"
          className={cn(
            "flex flex-col items-center transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Intelligent Order <span className="text-green-400">Filtering</span> System
          </h2>
          
          <div className="relative w-full h-[500px] max-w-5xl mx-auto">
            {/* Central Node - AI Order Selection */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full flex items-center justify-center z-20 shadow-[0_0_40px_rgba(255,255,255,0.6)]">
              <div className="text-center">
                <div className="text-2xl font-bold text-black">AI Order Selection</div>
              </div>
            </div>
            
            {/* SVG Container for wires */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500">
              {/* Green Wires - Good Orders */}
              <path 
                d="M100,120 Q300,50 500,250" 
                fill="none" 
                stroke="#22C55E" 
                strokeWidth="4"
                className="shadow-[0_0_8px_#22C55E] animate-pulse"
                filter="url(#glow)"
              />
              <path 
                d="M100,200 Q300,150 500,250" 
                fill="none" 
                stroke="#22C55E" 
                strokeWidth="4"
                className="shadow-[0_0_8px_#22C55E] animate-pulse"
                filter="url(#glow)"
              />
              <path 
                d="M100,280 Q300,350 500,250" 
                fill="none" 
                stroke="#22C55E" 
                strokeWidth="4"
                className="shadow-[0_0_8px_#22C55E] animate-pulse"
                filter="url(#glow)"
              />
              <path 
                d="M100,360 Q250,400 500,250" 
                fill="none" 
                stroke="#22C55E" 
                strokeWidth="4"
                className="shadow-[0_0_8px_#22C55E] animate-pulse"
                filter="url(#glow)"
              />
              <path 
                d="M100,440 Q200,480 500,250" 
                fill="none" 
                stroke="#22C55E" 
                strokeWidth="4"
                className="shadow-[0_0_8px_#22C55E] animate-pulse"
                filter="url(#glow)"
              />
              
              {/* Red/Orange Wires - Bad Orders */}
              <path 
                d="M100,40 Q270,20 500,250" 
                fill="none" 
                stroke="#ea384c" 
                strokeWidth="4"
                className="shadow-[0_0_8px_#ea384c] animate-pulse"
                filter="url(#glow)"
              />
              <path 
                d="M100,160 Q280,120 500,250" 
                fill="none" 
                stroke="#F97316" 
                strokeWidth="4"
                className="shadow-[0_0_8px_#F97316] animate-pulse"
                filter="url(#glow)"
              />
              <path 
                d="M100,320 Q260,400 500,250" 
                fill="none" 
                stroke="#F97316" 
                strokeWidth="4"
                className="shadow-[0_0_8px_#F97316] animate-pulse"
                filter="url(#glow)"
              />
              
              {/* Continuation of Green Wires to the right */}
              <path 
                d="M500,250 Q700,50 900,120" 
                fill="none" 
                stroke="#22C55E" 
                strokeWidth="4"
                className="shadow-[0_0_8px_#22C55E] animate-pulse"
                filter="url(#glow)"
              />
              <path 
                d="M500,250 Q700,150 900,200" 
                fill="none" 
                stroke="#22C55E" 
                strokeWidth="4"
                className="shadow-[0_0_8px_#22C55E] animate-pulse"
                filter="url(#glow)"
              />
              <path 
                d="M500,250 Q700,280 900,280" 
                fill="none" 
                stroke="#22C55E" 
                strokeWidth="4"
                className="shadow-[0_0_8px_#22C55E] animate-pulse"
                filter="url(#glow)"
              />
              <path 
                d="M500,250 Q700,360 900,360" 
                fill="none" 
                stroke="#22C55E" 
                strokeWidth="4"
                className="shadow-[0_0_8px_#22C55E] animate-pulse"
                filter="url(#glow)"
              />
              <path 
                d="M500,250 Q700,440 900,440" 
                fill="none" 
                stroke="#22C55E" 
                strokeWidth="4"
                className="shadow-[0_0_8px_#22C55E] animate-pulse"
                filter="url(#glow)"
              />
              
              {/* Filters */}
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
            
            {/* Labels */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white">
              <div className="font-bold text-lg mb-2">Incoming Orders</div>
              <div className="text-green-400 mb-1">5 Good Orders</div>
              <div className="text-red-400">3 Bad Orders</div>
            </div>
            
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-right">
              <div className="font-bold text-lg mb-2">Filtered Orders</div>
              <div className="text-green-400 mb-1">5 Good Orders</div>
              <div className="text-gray-400">0 Bad Orders</div>
            </div>
          </div>
          
          <p className="text-white/70 max-w-2xl text-center mt-12">
            Our AI-powered system intelligently filters out high-risk orders in real-time, 
            allowing only genuine purchase intent to flow through to your fulfillment process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIDecisionSystem;
