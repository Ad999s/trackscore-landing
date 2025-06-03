
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Zap, Shield, Target, TrendingUp, Brain, Activity } from "lucide-react";

const FeatureEcosystem = () => {
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
      emoji: "⚡️"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Smart Order Selection — 20% Reduction RTO",
      description: "AI filters out fake, low-intent, and high-risk COD orders before they burn your money.",
      highlight: "No more wasted packaging, shipping, or reverse logistics.",
      emoji: "🚫"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Meta Targeting Block — Cut 8% Ad Waste, Drop RTO by 15%",
      description: "Auto-detects high RTO pin codes and bad ad audiences.",
      highlight: "Block them at the ad level — before bad traffic enters your funnel.",
      emoji: "📉"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Trends — Spot Next Scaling Regions, Kill Loss-Making Zones",
      description: "Real-time insights on what's driving failed orders — SKUs, cities, campaigns, channels.",
      highlight: "Act fast before the damage spreads.",
      emoji: "📊"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "ScalysisGPT — Instant Answers, Replace Analyst",
      description: "Ask: \"Which SKU causes most RTO in Tier 2?\" or \"How did RTO shift post-offer?\"",
      highlight: "Your AI business analyst, trained on your store.",
      emoji: "🧠"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Health Dashboard — Current Status of Your AI Model",
      description: "Track current model accuracy, rejection rate, delivery impact & future uplift.",
      highlight: "Know exactly how much better your shipping is getting.",
      emoji: "🎯"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="feature-ecosystem-section"
          className={cn(
            "max-w-6xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-black">
              <span className="font-semibold">Full Data-Driven Ecosystem:</span> Cut RTO, Scale COD Without Friction.
            </h2>
          </div>
          
          {/* Features Grid */}
          <div className="space-y-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={cn(
                  "transition-all duration-500 border-b border-gray-100 pb-8 last:border-b-0",
                  isVisible ? `animate-fadeIn animation-delay-${(index + 1) * 100}` : "opacity-0"
                )}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon and Number */}
                  <div className="flex-shrink-0 flex items-start gap-4">
                    <div className="bg-blue-50 rounded-lg p-3 text-blue-600">
                      {feature.icon}
                    </div>
                    <div className="text-2xl font-light text-gray-400">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-medium text-black">
                      {feature.title}
                    </h3>
                    <p className="text-base font-light text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-start gap-2">
                      <span className="text-lg">{feature.emoji}</span>
                      <p className="text-base font-medium text-black">
                        {feature.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureEcosystem;
