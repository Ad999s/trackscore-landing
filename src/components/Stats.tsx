
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Stats = () => {
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
    
    const currentElement = document.getElementById("stats-section");
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const metrics = [
    { name: "Delivery Rate", before: "58%", after: "73%" },
    { name: "RTO Rate", before: "29%", after: "13%" },
    { name: "Daily Profit", before: "₹18,000", after: "₹27,000" },
    { name: "Inventory Needed", before: "100 units", after: "72 units" },
  ];

  const testimonials = [
    { 
      initial: "VP", 
      name: "Varun P.", 
      company: "ShopEasy", 
      quote: "Immediate impact on our bottom line."
    },
    { 
      initial: "MK", 
      name: "Meera K.", 
      company: "TrendyWear", 
      quote: "RTO reduction changed our business."
    },
    { 
      initial: "AR", 
      name: "Amit R.", 
      company: "HomeDecor", 
      quote: "The cash flow improvement is remarkable."
    },
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="stats-section"
          className={cn(
            "max-w-4xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div className="text-center mb-12">
            <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
              Real Results
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">What Our Users See</span> After Switching
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Businesses using Scalysis see significant improvements in key metrics that directly impact their profitability.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-xl shadow-medium overflow-hidden mb-12">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 hover:bg-gray-50">
                  <TableHead className="font-bold">Metric</TableHead>
                  <TableHead className="font-bold text-red-500">Before Scalysis</TableHead>
                  <TableHead className="font-bold text-green-500">After Scalysis</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {metrics.map((metric, index) => (
                  <TableRow key={index} className={cn(index % 2 === 0 ? "bg-white" : "bg-gray-50")}>
                    <TableCell className="font-medium">{metric.name}</TableCell>
                    <TableCell className="text-red-500">{metric.before}</TableCell>
                    <TableCell className="text-green-500 font-medium">{metric.after}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={cn(
                  "bg-white p-6 rounded-xl shadow-soft border border-gray-100 transition-all duration-500",
                  isVisible ? `animate-fadeIn animation-delay-${(index + 1) * 100}` : "opacity-0"
                )}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold mr-3">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
