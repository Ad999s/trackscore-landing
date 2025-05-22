
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Observer for fade-in animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById("typeform-container");
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      // Clean up script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <section id="get-started" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="typeform-container"
          className={cn(
            "max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-medium transition-all duration-700",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div data-tf-live="01JVWDWG3HHEAD58J2SYJYFMAG" className="w-full aspect-video"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
