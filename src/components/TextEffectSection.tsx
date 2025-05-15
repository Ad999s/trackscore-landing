
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { TextEffectPerChar, TextEffectWithExit } from "@/components/ui/text-effect-demo";

const TextEffectSection = () => {
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
    
    const currentElement = document.getElementById("text-effect-section");
    
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
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="text-effect-section"
          className={cn(
            "max-w-5xl mx-auto transition-all duration-500 py-20",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div className="text-center mb-12">
            <div className="flex flex-col items-center justify-center space-y-6">
              <TextEffectPerChar />
              
              <div className="mt-16">
                <TextEffectWithExit />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextEffectSection;
