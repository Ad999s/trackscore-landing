
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StatProps {
  value: string;
  label: string;
  description: string;
  delay: string;
}

const Stat = ({ value, label, description, delay }: StatProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState("0");

  const animateValue = (start: number, end: number, duration: number) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = Math.floor(progress * (end - start) + start);
      
      if (end >= 1000) {
        setDisplayValue(currentValue.toLocaleString());
      } else if (value.includes("%")) {
        setDisplayValue(`${currentValue}%`);
      } else if (value.includes("₹")) {
        setDisplayValue(`₹${currentValue}`);
      } else {
        setDisplayValue(`${currentValue}`);
      }
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Extract number from value
          const numValue = parseInt(value.replace(/[^0-9]/g, ""));
          if (!isNaN(numValue)) {
            animateValue(0, numValue, 1500);
          }
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById(`stat-${label.replace(/\s+/g, '-').toLowerCase()}`);
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [label, value]);

  return (
    <div 
      id={`stat-${label.replace(/\s+/g, '-').toLowerCase()}`}
      className={cn(
        "text-center transition-all duration-500",
        isVisible ? `animate-fadeIn ${delay}` : "opacity-0"
      )}
    >
      <div className="bg-primary text-white rounded-lg p-6 mb-4 shadow-medium">
        <div className="text-4xl font-bold mb-2">{displayValue}</div>
      </div>
      <h3 className="text-lg font-medium text-gray-800 mb-1">{label}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
            Real Results
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Numbers</span> That Speak For Themselves
          </h2>
          <p className="text-lg text-gray-600">
            Scalysis delivers measurable improvements to businesses of all sizes across India. Here's what our customers have achieved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Stat 
            value="37%" 
            label="RTO Reduction" 
            description="Average decrease in return-to-origin rates" 
            delay="animation-delay-100"
          />
          <Stat 
            value="₹4500" 
            label="Savings Per Day" 
            description="Average daily cost savings for mid-sized businesses" 
            delay="animation-delay-200"
          />
          <Stat 
            value="93%" 
            label="Prediction Accuracy" 
            description="Our AI correctly identifies high-risk orders" 
            delay="animation-delay-300"
          />
          <Stat 
            value="25000" 
            label="Orders Optimized" 
            description="Daily across our platform" 
            delay="animation-delay-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
