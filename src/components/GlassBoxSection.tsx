import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SearchCode, Bell, Info, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const GlassBoxSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    const currentElement = document.getElementById("glass-box-section");
    if (currentElement) {
      observer.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);
  const featureAlerts = [{
    title: "Flagged: Name mismatch + Unreachable Pincode",
    color: "bg-amber-50 border-amber-200 text-amber-700"
  }, {
    title: "Blocked: COD attempt after 5 failed deliveries in past 30 days",
    color: "bg-red-50 border-red-200 text-red-700"
  }];
  return;
};
export default GlassBoxSection;