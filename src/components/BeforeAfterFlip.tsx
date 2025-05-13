
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleX, Package, TrendingUp, BarChart3, DollarSign } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Type for our orders
interface Order {
  id: string;
  channel: string;
  amount: string;
  status: string;
  score?: number;
  decision?: "ship" | "don't ship";
  probability?: number;
  risk?: string;
  hidden?: boolean;
}

const BeforeAfterFlip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  
  // Orders data based on the image reference 
  const initialOrders: Order[] = [
    { id: "ORD-7845", channel: "Online Store", amount: "₹1,598.00", status: "Payment pending" },
    { id: "ORD-7846", channel: "Online Store", amount: "₹1,598.00", status: "Payment pending" },
    { id: "ORD-7847", channel: "Online Store", amount: "₹900.00", status: "Payment pending" },
    { id: "ORD-7848", channel: "Online Store", amount: "₹1,598.00", status: "Payment pending" },
    { id: "ORD-7849", channel: "Online Store", amount: "₹900.00", status: "Payment pending" },
    { id: "ORD-7850", channel: "Online Store", amount: "₹900.00", status: "Payment pending" },
  ];
  
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  
  // Stats data with updated values
  const stats = [
    { label: "Delivery Success", value: "90%", icon: <Package className="h-5 w-5 text-green-600" /> },
    { label: "Shipping Cost", value: "-40%", icon: <TrendingUp className="h-5 w-5 text-blue-600" /> },
    { label: "Inventory Usage", value: "-40%", icon: <DollarSign className="h-5 w-5 text-purple-600" /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startAnimation();
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
  
  // Animation controller with 2-second delays
  const startAnimation = () => {
    // Reset animation state
    setAnimationStep(0);
    setOrders(initialOrders.map(order => ({...order, score: undefined, decision: undefined, hidden: false})));
    setSelectedOrders([]);
    
    // Animation sequence with 2-second delays
    const sequence = [
      // Step 1: Initial state - show all orders
      () => setAnimationStep(1),
      
      // Step 2: Add intent score column (0-100, red and green)
      () => {
        setAnimationStep(2);
        setOrders(prevOrders => 
          prevOrders.map(order => ({
            ...order,
            score: Math.floor(Math.random() * 100) + 1, // Scores between 1-100
          }))
        );
      },
      
      // Step 3: Strike through red orders (continuation of step 2)
      () => {
        setAnimationStep(3);
        setOrders(prevOrders => 
          prevOrders.map(order => {
            const score = order.score || 0;
            return {
              ...order,
              decision: score >= 45 ? "ship" : "don't ship",
              probability: score >= 45 ? score : undefined,
              risk: score < 45 ? "High RTO Risk" : undefined
            };
          })
        );
      },
      
      // Step 4: Only green orders left
      () => {
        setAnimationStep(4);
        setOrders(prevOrders => 
          prevOrders.map(order => ({
            ...order,
            hidden: order.decision === "don't ship"
          }))
        );
      },
      
      // Step 5: Show business analytics
      () => {
        setAnimationStep(5);
      },
      
      // Restart animation after delay
      () => {
        setTimeout(startAnimation, 2000);
      }
    ];
    
    // Run each step with a 2-second delay
    sequence.forEach((step, index) => {
      setTimeout(step, (index + 1) * 2000);
    });
  };
  
  // Animation classes based on step for smooth transitions
  const getOrderRowClass = (order: Order) => {
    if (animationStep < 3) return "";
    
    if (order.decision === "ship") {
      return "bg-green-50 border-l-4 border-green-500 transition-all duration-500";
    } else {
      return "bg-red-50 border-l-4 border-red-500 transition-all duration-500";
    }
  };

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
              Scalysis <span className="text-gradient">knows which ones convert</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Remove the RTO headache. Give it to Scalysis—AI does all the work. No calling team. No confirmation texts. Just results.
            </p>
          </div>

          {/* Order Processing Animation */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden mb-10">
            <div className="p-4 bg-gray-50 border-b border-gray-100">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
                {animationStep === 0 && "Payment Pending Orders"}
                {animationStep === 1 && "Payment Pending Orders"}
                {animationStep === 2 && "AI Scoring Orders"}
                {animationStep === 3 && "Identifying Low-Quality Orders"}
                {animationStep === 4 && "Selecting Profitable Orders"}
                {animationStep === 5 && "Business Analytics"}
              </h3>
            </div>
            
            {/* Table of orders */}
            <div className={cn(
              "transition-all duration-500",
              animationStep <= 4 ? "block" : "hidden"
            )}>
              <div className="p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Channel</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      {(animationStep >= 2) && (
                        <TableHead className="transition-opacity duration-500 animate-fadeIn">Intent Score</TableHead>
                      )}
                      {(animationStep >= 3) && (
                        <TableHead className="transition-opacity duration-500 animate-fadeIn">Decision</TableHead>
                      )}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow 
                        key={order.id} 
                        className={cn(
                          "transition-all duration-500",
                          getOrderRowClass(order),
                          animationStep === 1 ? "animate-pulse" : "",
                          animationStep === 3 && order.decision === "don't ship" ? "line-through text-gray-400" : "",
                          order.hidden ? "hidden" : ""
                        )}
                      >
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.channel}</TableCell>
                        <TableCell>{order.amount}</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            {order.status}
                          </span>
                        </TableCell>
                        
                        {(animationStep >= 2) && (
                          <TableCell className="transition-opacity duration-500 animate-fadeIn">
                            {order.score !== undefined && (
                              <div className="flex items-center gap-2">
                                <div className={cn(
                                  "w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500",
                                  order.score >= 45 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                )}>
                                  {order.score}
                                </div>
                                {(animationStep === 2) && (
                                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div 
                                      className={cn(
                                        "h-full rounded-full transition-all duration-500",
                                        order.score >= 45 ? "bg-green-500" : "bg-red-500"
                                      )}
                                      style={{ width: `${order.score}%` }}
                                    ></div>
                                  </div>
                                )}
                              </div>
                            )}
                          </TableCell>
                        )}
                        
                        {(animationStep >= 3) && (
                          <TableCell className="transition-opacity duration-500 animate-fadeIn">
                            {order.decision === "ship" ? (
                              <div className="flex items-center gap-1 text-green-600">
                                <CircleCheck className="h-4 w-4" />
                                <span>Ship</span>
                                <span className="text-xs text-gray-500 ml-1">({order.probability}% verified)</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1 text-red-600">
                                <CircleX className="h-4 w-4" />
                                <span>Don't Ship</span>
                                <span className="text-xs text-gray-500 ml-1">({order.risk})</span>
                              </div>
                            )}
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            
            {/* Stats display */}
            <div className={cn(
              "p-6 transition-all duration-500",
              animationStep === 5 ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
            )}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className={cn(
                      "bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center",
                      "transform transition-all duration-500",
                      animationStep === 5 ? `opacity-100 translate-y-0` : "opacity-0 translate-y-4"
                    )}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 mb-4">
                      {stat.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{stat.label}</h4>
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-12">
            {/* First Green Card - Ship */}
            <div className={cn(
              "relative w-full md:w-1/3 h-64 bg-white border border-green-100 rounded-xl shadow-medium p-6 transition-all duration-500",
              isVisible ? "animate-fadeIn animation-delay-100" : "opacity-0"
            )}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-green-50">
                      <CircleCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-600">Ship</h3>
                  </div>
                  <p className="text-gray-600">Order #8752</p>
                  <p className="text-sm text-gray-500 mt-2">Mumbai, Maharashtra</p>
                </div>
                <div>
                  <p className="text-green-600 font-medium">Delivery Probability: 89%</p>
                  <p className="text-sm text-gray-500">Expected Profit: ₹460</p>
                </div>
              </div>
            </div>
            
            {/* Middle Red Card - Don't Ship with animation */}
            <div className={cn(
              "relative w-full md:w-1/3 h-64 bg-white border border-red-100 rounded-xl shadow-medium p-6 transition-all duration-700",
              isVisible ? "animate-pulse animation-delay-200 opacity-80 bg-gray-50" : "opacity-0"
            )}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-red-50">
                      <CircleX className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-red-600">Don't Ship</h3>
                  </div>
                  <p className="text-gray-600">Order #9145</p>
                  <p className="text-sm text-gray-500 mt-2">Ghaziabad, UP</p>
                </div>
                <div>
                  <p className="text-red-600 font-medium">RTO Risk: 87%</p>
                  <p className="text-sm text-gray-500">Potential Loss: ₹120</p>
                </div>
              </div>
            </div>
            
            {/* Last Green Card - Ship = More Profit */}
            <div className={cn(
              "relative w-full md:w-1/3 h-64 bg-white border border-green-100 rounded-xl shadow-medium p-6 transition-all duration-500",
              isVisible ? "animate-fadeIn animation-delay-300" : "opacity-0"
            )}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-green-50">
                      <CircleCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-600">Ship</h3>
                  </div>
                  <p className="text-gray-600">Order #7634</p>
                  <p className="text-sm text-gray-500 mt-2">Bangalore, Karnataka</p>
                </div>
                <div>
                  <p className="text-green-600 font-medium">Delivery Probability: 92%</p>
                  <p className="text-sm text-gray-600 font-bold">Expected Profit: ₹460</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-500">Scalysis intelligently selects orders to maximize profit and minimize returns</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterFlip;
