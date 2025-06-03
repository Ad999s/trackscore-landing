
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Link, Database, TrendingUp } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
  delay: string;
}

const Step = ({ number, title, description, icon, isLast = false, delay }: StepProps) => {
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
    
    const currentElement = document.getElementById(`step-${number}`);
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [number]);
  
  return (
    <div 
      id={`step-${number}`}
      className={cn(
        "relative flex gap-6",
        isVisible ? `animate-slideRight ${delay}` : "opacity-0"
      )}
    >
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-primary text-white text-lg font-bold">
          {number}
        </div>
        {!isLast && (
          <div className="mt-3 h-full w-0.5 bg-gray-200"></div>
        )}
      </div>
      <div className="pb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
        <p className="text-gray-700 font-light">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Connect your store",
      description: "Easily integrate with Shopify, Meesho, and other platforms in just a few clicks.",
      icon: <Link size={20} className="text-primary" />,
      delay: "animation-delay-100"
    },
    {
      number: 2,
      title: "Let AI start learning",
      description: "Our system analyzes your real orders and delivery results to build a custom model.",
      icon: <Database size={20} className="text-primary" />,
      delay: "animation-delay-200"
    },
    {
      number: 3,
      title: "Start saving",
      description: "Get daily flagged orders, P&L tracking, and smart ad targeting recommendations.",
      icon: <TrendingUp size={20} className="text-primary" />,
      delay: "animation-delay-300",
      isLast: true
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
              Simple Process
            </p>
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              <span className="text-gradient font-semibold">Get Started</span> in 3 Simple Steps
            </h2>
            <p className="text-lg font-light text-gray-700 mb-8">
              Our intuitive platform <span className="font-semibold">seamlessly integrates</span> with your existing workflows to reduce RTO rates without disrupting your operations.
            </p>
            
            <div className="space-y-4">
              {steps.map((step) => (
                <Step
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  isLast={step.isLast}
                  delay={step.delay}
                />
              ))}
            </div>
          </div>
          
          <div className="relative lg:pl-12">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-lg"></div>
              <div className="relative bg-white rounded-2xl shadow-medium overflow-hidden border border-gray-100 p-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Order Risk Assessment</h3>
                    <div className="px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></span>
                      Live
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { id: "ORD-7845", risk: "Low", score: 92, status: "Processing" },
                      { id: "ORD-7846", risk: "Medium", score: 76, status: "Verification" },
                      { id: "ORD-7847", risk: "Low", score: 95, status: "Processing" },
                      { id: "ORD-7848", risk: "High", score: 38, status: "Flagged" },
                      { id: "ORD-7849", risk: "Low", score: 89, status: "Processing" }
                    ].map((order, index) => (
                      <div 
                        key={order.id} 
                        className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <div>
                          <div className="font-medium">{order.id}</div>
                          <div className="text-sm text-gray-500">{order.status}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div 
                            className={cn(
                              "text-xs font-medium px-2 py-1 rounded",
                              order.risk === "Low" ? "bg-green-50 text-green-600" :
                              order.risk === "Medium" ? "bg-yellow-50 text-yellow-600" :
                              "bg-red-50 text-red-600"
                            )}
                          >
                            {order.risk} Risk
                          </div>
                          <div 
                            className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
                              order.score >= 80 ? "bg-green-50 text-green-600" :
                              order.score >= 60 ? "bg-yellow-50 text-yellow-600" :
                              "bg-red-50 text-red-600"
                            )}
                          >
                            {order.score}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div className="text-gray-500">Showing 5 of 248 orders</div>
                    <div className="flex items-center text-primary font-medium cursor-pointer hover:underline">
                      View All Orders
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
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

export default HowItWorks;
