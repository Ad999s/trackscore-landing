
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { IndianRupee, TrendingUp, PackageCheck, Tag } from "lucide-react";

const data = [
  { month: "Jan", scalysisProfit: 32000, normalProfit: 18000 },
  { month: "Feb", scalysisProfit: 38000, normalProfit: 22000 },
  { month: "Mar", scalysisProfit: 35000, normalProfit: 19000 },
  { month: "Apr", scalysisProfit: 42000, normalProfit: 24000 },
  { month: "May", scalysisProfit: 48000, normalProfit: 26000 },
  { month: "Jun", scalysisProfit: 52000, normalProfit: 28000 },
];

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  subtext?: string;
  delay: string;
  color: string;
}

const StatCard = ({ icon, label, value, subtext, delay, color }: StatCardProps) => {
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
    
    const currentElement = document.getElementById(`stat-${label.replace(/\s+/g, '-').toLowerCase()}`);
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [label]);

  return (
    <div
      id={`stat-${label.replace(/\s+/g, '-').toLowerCase()}`}
      className={cn(
        "bg-white rounded-xl shadow-soft p-5 transition-all duration-500",
        isVisible ? `animate-fadeIn ${delay}` : "opacity-0"
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-sm text-gray-500 font-medium">{label}</p>
          <h4 className="text-2xl font-bold">{value}</h4>
          {subtext && <p className="text-xs text-gray-500 mt-1">{subtext}</p>}
        </div>
        <div className={`p-2 rounded-lg ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

const YourNewPnL = () => {
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
    
    const currentElement = document.getElementById("your-new-pnl-section");
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const config = {
    scalysisProfit: {
      label: "Scalysis Profit",
      theme: {
        light: "#10b981",
        dark: "#10b981"
      }
    },
    normalProfit: {
      label: "Normal Profit",
      theme: {
        light: "#ef4444",
        dark: "#ef4444"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="your-new-pnl-section"
          className={cn(
            "max-w-5xl mx-auto transition-all duration-500",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Your P&L. But <span className="text-gradient">BETTER.</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Scalysis protects your working capital by filtering bad orders — saving up to ₹5L/month. Better Deliveries. Better Profit.
            </p>
          </div>

          <div className="bg-white shadow-medium rounded-xl p-6 mb-12">
            <h3 className="text-xl font-medium mb-6">Profit Comparison</h3>
            <div className="h-72 md:h-80">
              <ChartContainer 
                className={cn(
                  "w-full h-full transition-opacity duration-1000", 
                  isVisible ? "opacity-100" : "opacity-0"
                )}
                config={config}
              >
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#888888" />
                  <YAxis stroke="#888888" tickFormatter={(value) => `₹${value/1000}k`} />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="scalysisProfit"
                    name="Scalysis Profit"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ r: 4, strokeWidth: 2, stroke: "#10b981", fill: "white" }}
                    activeDot={{ r: 6, stroke: "#10b981", strokeWidth: 2, fill: "#10b981" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="normalProfit"
                    name="Normal Profit"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ r: 4, strokeWidth: 2, stroke: "#ef4444", fill: "white" }}
                    activeDot={{ r: 6, stroke: "#ef4444", strokeWidth: 2, fill: "#ef4444" }}
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              icon={<TrendingUp className="h-5 w-5 text-green-600" />}
              label="Profit Bump"
              value="₹15,000"
              subtext="Increased profit margin"
              delay="animation-delay-100"
              color="bg-green-50"
            />
            <StatCard 
              icon={<Tag className="h-5 w-5 text-blue-600" />}
              label="RTO Drop"
              value="40%"
              subtext="Down from base rate"
              delay="animation-delay-200"
              color="bg-blue-50"
            />
            <StatCard 
              icon={<PackageCheck className="h-5 w-5 text-purple-600" />}
              label="Orders Saved"
              value="70"
              subtext="Monthly average"
              delay="animation-delay-300"
              color="bg-purple-50"
            />
            <StatCard 
              icon={<IndianRupee className="h-5 w-5 text-amber-600" />}
              label="Shipping Cost"
              value="₹20,000"
              subtext="Monthly savings"
              delay="animation-delay-400"
              color="bg-amber-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourNewPnL;
