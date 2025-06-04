
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Zap, Shield, Target, TrendingUp, Brain, Activity, ArrowUp, ArrowDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  const renderDashboard = (index: number) => {
    switch (index) {
      case 0: // Scalysis AI
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h4 className="text-lg font-semibold mb-4">AI Intent Detection Dashboard</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="text-sm font-medium">Customer Intent Score</span>
                <span className="text-green-600 font-bold">89%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                <span className="text-sm font-medium">RTO Reduction</span>
                <span className="text-blue-600 font-bold flex items-center gap-1">
                  <ArrowDown className="h-4 w-4" />
                  15% → 45%
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                <span className="text-sm font-medium">Orders Processed Today</span>
                <span className="text-purple-600 font-bold">2,847</span>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <div className="text-xs text-gray-600 mb-2">Learning Progress</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <div className="text-xs text-gray-600 mt-1">78% Model Training Complete</div>
              </div>
            </div>
          </div>
        );

      case 1: // Smart Order Selection
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h4 className="text-lg font-semibold mb-4">Order Filtering Dashboard</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-red-50 rounded text-center">
                  <div className="text-2xl font-bold text-red-600">142</div>
                  <div className="text-xs text-red-600">Orders Blocked</div>
                </div>
                <div className="p-3 bg-green-50 rounded text-center">
                  <div className="text-2xl font-bold text-green-600">1,205</div>
                  <div className="text-xs text-green-600">Orders Approved</div>
                </div>
              </div>
              <div className="p-3 bg-orange-50 rounded">
                <div className="text-sm font-medium mb-2">Risk Categories</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Fake Orders</span>
                    <span className="text-red-600">67</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Low Intent</span>
                    <span className="text-orange-600">45</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>High Risk COD</span>
                    <span className="text-yellow-600">30</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded">
                <div className="text-sm font-medium">Savings Today</div>
                <div className="text-lg font-bold text-blue-600">₹28,400</div>
              </div>
            </div>
          </div>
        );

      case 2: // Meta Targeting Block
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h4 className="text-lg font-semibold mb-4">Meta Ads Optimization</h4>
            <Tabs defaultValue="blocked" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="blocked">Blocked</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
              </TabsList>
              <TabsContent value="blocked" className="space-y-3">
                <div className="p-3 bg-red-50 rounded">
                  <div className="text-sm font-medium">High RTO Pincodes</div>
                  <div className="text-xs text-gray-600 mt-1">110001, 400001, 560001 +23 more</div>
                </div>
                <div className="p-3 bg-orange-50 rounded">
                  <div className="text-sm font-medium">Bad Audiences</div>
                  <div className="text-xs text-gray-600 mt-1">Lookalike 1%, Interest: Fast Fashion +5 more</div>
                </div>
              </TabsContent>
              <TabsContent value="performance" className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="text-sm font-medium">Ad Waste Reduced</span>
                  <span className="text-green-600 font-bold">8%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <span className="text-sm font-medium">RTO Improvement</span>
                  <span className="text-blue-600 font-bold">-15%</span>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        );

      case 3: // Trends
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h4 className="text-lg font-semibold mb-4">Trends Analytics</h4>
            <div className="space-y-4">
              <div className="p-3 bg-green-50 rounded">
                <div className="text-sm font-medium text-green-700">🔥 Scaling Regions</div>
                <div className="text-xs text-green-600 mt-1">
                  Mumbai: +23% conversion, Delhi: +18% conversion
                </div>
              </div>
              <div className="p-3 bg-red-50 rounded">
                <div className="text-sm font-medium text-red-700">⚠️ Loss-Making Zones</div>
                <div className="text-xs text-red-600 mt-1">
                  Kolkata: 45% RTO, Pune: 38% RTO
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Top Issues</div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs p-2 bg-gray-50 rounded">
                    <span>SKU: Blue T-Shirt</span>
                    <span className="text-red-600">67% RTO</span>
                  </div>
                  <div className="flex justify-between text-xs p-2 bg-gray-50 rounded">
                    <span>Campaign: Summer Sale</span>
                    <span className="text-orange-600">45% RTO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4: // ScalysisGPT
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h4 className="text-lg font-semibold mb-4">ScalysisGPT Chat</h4>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-sm font-medium">You:</div>
                <div className="text-xs text-gray-700">Which SKU causes most RTO in Tier 2?</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-sm font-medium">ScalysisGPT:</div>
                <div className="text-xs text-gray-700">
                  Red Sneakers (SKU: RS001) has 52% RTO rate in Tier 2 cities. 
                  Main issues: Size complaints (67%), Color mismatch (23%).
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-sm font-medium">You:</div>
                <div className="text-xs text-gray-700">How did RTO shift post-offer?</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-sm font-medium">ScalysisGPT:</div>
                <div className="text-xs text-gray-700">
                  RTO decreased by 12% after "Buy 2 Get 1" offer launch. 
                  Higher order value customers show 34% better delivery rates.
                </div>
              </div>
            </div>
          </div>
        );

      case 5: // Health Dashboard
        return (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h4 className="text-lg font-semibold mb-4">AI Model Health</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-blue-50 rounded text-center">
                  <div className="text-2xl font-bold text-blue-600">89.2%</div>
                  <div className="text-xs text-blue-600">Model Accuracy</div>
                </div>
                <div className="p-3 bg-orange-50 rounded text-center">
                  <div className="text-2xl font-bold text-orange-600">12.3%</div>
                  <div className="text-xs text-orange-600">Rejection Rate</div>
                </div>
              </div>
              <div className="p-3 bg-green-50 rounded">
                <div className="text-sm font-medium mb-2">Delivery Impact</div>
                <div className="flex justify-between text-xs">
                  <span>This Week</span>
                  <span className="text-green-600 font-bold">+18% Success</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>This Month</span>
                  <span className="text-green-600 font-bold">+27% Success</span>
                </div>
              </div>
              <div className="p-3 bg-purple-50 rounded">
                <div className="text-sm font-medium mb-2">Future Uplift Prediction</div>
                <div className="text-xs text-purple-600">
                  Expected 35% RTO reduction by next month based on current learning rate.
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <div className="text-xs text-gray-600 mb-2">Model Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600">Healthy & Learning</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
                    hoveredFeature === index ? "bg-blue-50 border-blue-200" : "",
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
                    {renderDashboard(hoveredFeature)}
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
