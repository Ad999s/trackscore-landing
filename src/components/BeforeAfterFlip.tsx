
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeftRight, IndianRupee, TrendingUp, Package } from "lucide-react";

interface FlipCardProps {
  icon: React.ReactNode;
  title: string;
  beforeValue: string;
  afterValue: string;
  iconBg: string;
  iconColor: string;
  delay: string;
}

const FlipCard = ({ icon, title, beforeValue, afterValue, iconBg, iconColor, delay }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Set up flipping interval
          const flipInterval = setInterval(() => {
            setIsFlipped(prev => !prev);
          }, 3000);
          
          return () => clearInterval(flipInterval);
        }
      },
      { threshold: 0.1, once: true }
    );
    
    const id = `flip-card-${title.replace(/\s+/g, '-').toLowerCase()}`;
    const currentElement = document.getElementById(id);
    
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
      id={`flip-card-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className={cn(
        "relative h-64 perspective-1000 w-full transition-all duration-500",
        isVisible ? `animate-fadeIn ${delay}` : "opacity-0"
      )}
    >
      <div className={cn(
        "relative w-full h-full transition-transform duration-700 transform-style-3d rounded-xl shadow-medium",
        isFlipped ? "rotate-y-180" : ""
      )}>
        {/* Front Card (Before) */}
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-white border border-gray-100 p-6 flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-lg ${iconBg}`}>
              {icon}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="text-sm text-gray-500 mb-2">Before Scalysis</p>
            <p className="text-3xl font-bold">{beforeValue}</p>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => setIsFlipped(true)}
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeftRight className="h-4 w-4" />
              See After
            </button>
          </div>
        </div>
        
        {/* Back Card (After) */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl bg-white border-2 border-primary p-6 flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-lg ${iconBg}`}>
              {icon}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="text-sm text-gray-500 mb-2">After Scalysis</p>
            <p className="text-3xl font-bold text-primary">{afterValue}</p>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => setIsFlipped(false)}
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeftRight className="h-4 w-4" />
              See Before
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeforeAfterFlip = () => {
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
    
    const currentElement = document.getElementById("before-after-section");
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const flipCards = [
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "Delivery Rate",
      beforeValue: "58%",
      afterValue: "73%",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      delay: "animation-delay-100"
    },
    {
      icon: <IndianRupee className="h-6 w-6 text-red-600" />,
      title: "Monthly RTO Loss",
      beforeValue: "₹1.2L",
      afterValue: "₹35K",
      iconBg: "bg-red-50",
      iconColor: "text-red-600",
      delay: "animation-delay-200"
    },
    {
      icon: <Package className="h-6 w-6 text-amber-600" />,
      title: "Inventory Use",
      beforeValue: "100 units",
      afterValue: "70 units",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      delay: "animation-delay-300"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="before-after-section"
          className={cn(
            "max-w-5xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div className="text-center mb-12">
            <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
              Transformation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🔁 <span className="text-gradient">Before vs After</span> Comparison
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the dramatic improvement in your key metrics when you switch to Scalysis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {flipCards.map((card) => (
              <FlipCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterFlip;
