
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Zap, Shield, Target, TrendingUp, Brain, Activity } from "lucide-react";

const FeatureEcosystem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById("feature-ecosystem-section");
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Scalysis AI — Trained to Spot Customer Intent",
      description: "No more manual blocking, general fraud rules, pincode blocking.",
      highlight: "15% RTO drop from day 1 — scales to 45% in 60 days as new data flows in.",
      emoji: "⚡️",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Smart Order Selection — 20% Reduction RTO",
      description: "AI filters out fake, low-intent, and high-risk COD orders before they burn your money.",
      highlight: "No more wasted packaging, shipping, or reverse logistics.",
      emoji: "🚫",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Meta Targeting Block — Cut 8% Ad Waste, Drop RTO by 15%",
      description: "Auto-detects high RTO pin codes and bad ad audiences.",
      highlight: "Block them at the ad level — before bad traffic enters your funnel.",
      emoji: "📉",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Trends — Spot Next Scaling Regions, Kill Loss-Making Zones",
      description: "Real-time insights on what's driving failed orders — SKUs, cities, campaigns, channels.",
      highlight: "Act fast before the damage spreads.",
      emoji: "📊",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "ScalysisGPT — Instant Answers, Replace Analyst",
      description: "Ask: \"Which SKU causes most RTO in Tier 2?\" or \"How did RTO shift post-offer?\"",
      highlight: "Your AI business analyst, trained on your store.",
      emoji: "🧠",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Health Dashboard — Current Status of Your AI Model",
      description: "Track current model accuracy, rejection rate, delivery impact & future uplift.",
      highlight: "Know exactly how much better your shipping is getting.",
      emoji: "🎯",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="feature-ecosystem-section"
          className={cn(
            "max-w-7xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-black">
              <span className="font-semibold">Full Data-Driven Ecosystem:</span> Cut RTO, Scale COD Without Friction.
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "transition-all duration-300 border-b border-gray-100 pb-6 last:border-b-0 cursor-pointer",
                    "hover:bg-gray-50 p-4 rounded-lg",
                    isVisible ? `animate-fadeIn animation-delay-${(index + 1) * 100}` : "opacity-0"
                  )}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="flex gap-6">
                    {/* Icon and Number */}
                    <div className="flex-shrink-0 flex items-start gap-4">
                      <div className="bg-blue-50 rounded-lg p-3 text-blue-600">
                        {feature.icon}
                      </div>
                      <div className="text-xl font-light text-gray-400">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-medium text-black">
                        {feature.title}
                      </h3>
                      <p className="text-sm font-light text-gray-700 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="flex items-start gap-2">
                        <span className="text-base">{feature.emoji}</span>
                        <p className="text-sm font-medium text-black">
                          {feature.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dashboard/Preview */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-gray-50 rounded-xl p-8 min-h-[500px] flex items-center justify-center">
                {hoveredFeature !== null ? (
                  <div className="transition-all duration-300 w-full">
                    <img 
                      src={features[hoveredFeature].image} 
                      alt={features[hoveredFeature].title}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                    <div className="mt-4 text-center">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        {features[hoveredFeature].title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {features[hoveredFeature].description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <Activity className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-lg font-light">Hover over a feature to see it in action</p>
                    <p className="text-sm mt-2">Interactive dashboard preview</p>
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

export default FeatureEcosystem;
