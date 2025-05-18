
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface AnimatedBannerProps {
  text: string;
  linkText: string;
  targetId: string;
}

const AnimatedBanner = ({ text, linkText, targetId }: AnimatedBannerProps) => {
  const rectRef = useRef<SVGRectElement>(null);
  
  // Smoothly scroll to the target section when clicked
  const scrollToSection = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Animation for the border
    const rect = rectRef.current;
    if (!rect) return;

    let position = 0;
    let direction = 1;
    let speed = 1;
    const maxSpeed = 15;
    const acceleration = 0.2;
    const totalLength = (rect.width.baseVal.value * 2) + (rect.height.baseVal.value * 2);
    
    const animate = () => {
      if (!rect) return;
      
      position = (position + speed * direction) % totalLength;
      
      // Increase speed until max, then reset
      if (speed < maxSpeed) {
        speed += acceleration;
      } else {
        speed = 1; // Reset to slow
      }
      
      // Update the dash offset
      rect.style.strokeDashoffset = (-position).toString();
      
      requestAnimationFrame(animate);
    };
    
    // Set up the dash pattern to match the perimeter
    rect.style.strokeDasharray = totalLength.toString();
    
    // Start the animation
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div 
      onClick={scrollToSection}
      className="h-[32px] max-w-[440px] max-sm:w-[328px] mx-auto relative overflow-hidden rounded-full cursor-pointer group my-4"
    >
      {/* SVG border with animation */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          ref={rectRef}
          x="0.5"
          y="0.5"
          width="calc(100% - 1px)"
          height="calc(100% - 1px)"
          rx="16"
          strokeWidth="1"
          stroke="rgba(59, 130, 246, 0.8)"
          fill="transparent"
        />
      </svg>
      
      <div className="flex items-center justify-center h-full">
        <div className="card-content rounded-full px-3 flex items-center h-full">
          <p className="text-[12.25px] md:text-[12.75px] text-gray-600 font-medium">
            {text} <span className="text-indigo-600 max-sm:hidden">• {linkText}</span>
            <span className="text-indigo-600 sm:hidden ml-1">
              <ChevronRight className="h-4 w-4" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBanner;
