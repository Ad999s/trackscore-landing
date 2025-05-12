
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Package, 
  UserRound, 
  Globe, 
  ShoppingCart 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SmartLearning = () => {
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
    
    const currentElement = document.getElementById("smart-learning-section");
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const learningCategories = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "Product category",
      description: "Learns which products lead to higher RTO rates",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: <UserRound className="h-6 w-6" />,
      title: "Repeat buyer behavior",
      description: "Identifies patterns in customer purchase history",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Geography",
      description: "Maps delivery success rates by region",
      color: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Platform",
      description: "Adapts to Meesho, Shopify and other platforms",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="smart-learning-section"
          className={cn(
            "max-w-5xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div className="text-center mb-12">
            <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
              Smart AI
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI that understands <span className="text-gradient">order patterns</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scalysis knows your order patterns more than you do. 95% accuracy predicting order intent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {learningCategories.map((category, index) => (
              <Card 
                key={index} 
                className={cn(
                  "border border-gray-100 shadow-soft overflow-hidden transition-all duration-500",
                  isVisible ? `animate-fadeIn animation-delay-${(index + 1) * 100}` : "opacity-0"
                )}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${category.bgColor} ${category.color}`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartLearning;
