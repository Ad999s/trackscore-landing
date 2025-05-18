
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface AnimatedBannerProps {
  text: string;
  linkText: string;
  targetId: string;
}

const AnimatedBanner = ({ text, linkText, targetId }: AnimatedBannerProps) => {
  const borderRef = useRef<HTMLDivElement>(null);
  
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
    const border = borderRef.current;
    if (!border) return;

    let position = 0;
    let direction = 1;
    let speed = 1;
    const maxSpeed = 15;
    const acceleration = 0.2;
    const totalLength = (border.offsetWidth * 2) + (border.offsetHeight * 2);
    
    const animate = () => {
      if (!border) return;
      
      position = (position + speed * direction) % totalLength;
      
      // Increase speed until max, then reset
      if (speed < maxSpeed) {
        speed += acceleration;
      } else {
        speed = 1; // Reset to slow
      }
      
      // Calculate which side of the rectangle we're on
      let dashOffset = -position;
      
      // Update the dash offset
      border.style.strokeDashoffset = dashOffset.toString();
      
      requestAnimationFrame(animate);
    };
    
    // Set up the dash pattern to match the perimeter
    border.style.strokeDasharray = totalLength.toString();
    
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
      className="w-full max-w-3xl mx-auto relative py-4 px-6 my-4 cursor-pointer group"
    >
      {/* SVG border with animation */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          ref={borderRef}
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="25"
          strokeWidth="2"
          stroke="rgba(59, 130, 246, 0.8)"
          fill="transparent"
        />
      </svg>
      
      <div className="flex items-center justify-center text-center">
        <p className="text-gray-700 font-medium">
          {text} <span className="text-blue-600 group-hover:underline">• {linkText}</span>
        </p>
      </div>
    </div>
  );
};

export default AnimatedBanner;
