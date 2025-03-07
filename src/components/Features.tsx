
import { useEffect, useState } from "react";
import { 
  BarChart3, 
  TrendingDown, 
  IndianRupee, 
  Truck, 
  Package, 
  Shield 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const Feature = ({ title, description, icon, delay }: FeatureProps) => {
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
    
    const currentElement = document.getElementById(`feature-${title.replace(/\s+/g, '-').toLowerCase()}`);
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [title]);
  
  return (
    <div 
      id={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className={cn(
        "rounded-xl border border-gray-100 bg-white p-6 shadow-soft transition-all duration-500 hover:shadow-medium hover:translate-y-[-4px]",
        isVisible ? `animate-slideUp ${delay}` : "opacity-0"
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "AI Prediction Engine",
      description: "Our advanced algorithms analyze order patterns and customer behavior to predict RTO risk with 93% accuracy.",
      icon: <BarChart3 className="text-primary" size={24} />,
      delay: "animation-delay-100"
    },
    {
      title: "RTO Reduction",
      description: "Reduce return-to-origin rates by up to 37% by identifying high-risk orders before they're processed.",
      icon: <TrendingDown className="text-primary" size={24} />,
      delay: "animation-delay-200"
    },
    {
      title: "Cost Savings",
      description: "Save on shipping, packaging, and operational costs associated with returned orders.",
      icon: <IndianRupee className="text-primary" size={24} />,
      delay: "animation-delay-300"
    },
    {
      title: "Delivery Optimization",
      description: "Optimize delivery routes and schedules based on successful delivery predictions.",
      icon: <Truck className="text-primary" size={24} />,
      delay: "animation-delay-100"
    },
    {
      title: "Order Prioritization",
      description: "Automatically prioritize orders with higher completion probability for better resource allocation.",
      icon: <Package className="text-primary" size={24} />,
      delay: "animation-delay-200"
    },
    {
      title: "Fraud Prevention",
      description: "Identify potentially fraudulent orders and protect your business from scams and losses.",
      icon: <Shield className="text-primary" size={24} />,
      delay: "animation-delay-300"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
            Powerful Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart Solutions for <span className="text-gradient">COD Order Management</span>
          </h2>
          <p className="text-lg text-gray-600">
            TrackScore combines data analytics, machine learning, and industry expertise to reduce RTO rates and optimize your order fulfillment process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Feature
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
