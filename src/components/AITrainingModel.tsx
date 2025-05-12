
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Brain, FileCode, Clock, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AITrainingModel = () => {
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
    
    const currentElement = document.getElementById("ai-training-section");
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const trainingModels = [
    {
      icon: <FileCode className="h-6 w-6" />,
      title: "Past delivery behavior",
      description: "Analyzes historical delivery patterns to predict future outcomes",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "SKU risk",
      description: "Identifies product categories with higher risk profiles",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hour of order",
      description: "Detects time-based patterns in order quality",
      color: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Platform adaptability",
      description: "Works across Shopify, Cashfree, WooCommerce and more",
      color: "text-green-500",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="ai-training-section"
          className={cn(
            "max-w-5xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div className="text-center mb-12">
            <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
              Tailored AI
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🧠 Scalysis <span className="text-gradient">"Knows You"</span> Model
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI trains on your specific business data to provide a tailor-fit solution for your unique needs.
            </p>
          </div>

          <div className="relative">
            {/* Brain Icon Background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
              <Brain className="h-64 w-64" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              {trainingModels.map((model, index) => (
                <Card 
                  key={index} 
                  className={cn(
                    "border border-gray-100 shadow-soft transition-all duration-500",
                    isVisible ? `animate-fadeIn animation-delay-${(index + 1) * 100}` : "opacity-0"
                  )}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${model.bgColor} ${model.color}`}>
                        {model.icon}
                      </div>
                      <CardTitle className="text-xl">{model.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{model.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITrainingModel;
