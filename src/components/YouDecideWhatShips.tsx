import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Shield, ZapIcon, Layers, ToggleLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const YouDecideWhatShips = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    const currentElement = document.getElementById("you-decide-section");
    if (currentElement) {
      observer.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);
  const keyPoints = [{
    icon: <ToggleLeft className="h-6 w-6" />,
    title: "Full override control built-in"
  }, {
    icon: <ZapIcon className="h-6 w-6" />,
    title: "Smart suggestions, not auto-blocks"
  }, {
    icon: <Layers className="h-6 w-6" />,
    title: "Transparency over automation"
  }];
  return;
};
export default YouDecideWhatShips;