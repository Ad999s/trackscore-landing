import { useState, useMemo, useEffect } from "react";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleX, Package, TrendingUp, DollarSign, Play } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

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
  const [isVisible, setIsVisible] = useState(true);
  const [animationStep, setAnimationStep] = useState(0);
  const [animationRunning, setAnimationRunning] = useState(false);
  const [animationStatus, setAnimationStatus] = useState("");

  // Generate 6 orders with consistent data
  const initialOrders: Order[] = useMemo(() => {
    // Create array of 6 orders
    const orders: Order[] = [];
    for (let i = 7840; i < 7846; i++) {
      orders.push({
        id: `ORD-${i}`,
        channel: "Online Store",
        amount: i % 3 === 0 ? "₹900.00" : "₹1,598.00",
        status: "Payment pending"
      });
    }
    return orders;
  }, []);

  // Select 2 specific orders that will be marked as "don't ship"
  const dontShipOrders = useMemo(() => {
    const orderIds = initialOrders.map(order => order.id);
    // Always pick the 2nd and 5th orders
    return [orderIds[1], orderIds[4]];
  }, [initialOrders]);
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  // Stats data with updated values
  const stats = [{
    label: "Delivery Success",
    value: "90%",
    icon: <Package className="h-5 w-5 text-white" />
  }, {
    label: "Shipping Cost",
    value: "-40%",
    icon: <TrendingUp className="h-5 w-5 text-white" />
  }, {
    label: "Inventory Usage",
    value: "-40%",
    icon: <DollarSign className="h-5 w-5 text-white" />
  }];

  // Animation controller with status updates
  const startAnimation = () => {
    // Don't start if already running
    if (animationRunning) return;

    // Set animation as running
    setAnimationRunning(true);
    setAnimationStatus("Initializing...");

    // Start animation after 0.5 seconds
    setTimeout(() => {
      // Reset animation state
      setAnimationStep(0);
      setOrders(initialOrders.map(order => ({
        ...order,
        score: undefined,
        decision: undefined,
        hidden: false
      })));

      // Animation sequence with 2-second delays and status updates
      const sequence = [
      // Step 1: Initial state - show all orders
      () => {
        setAnimationStep(1);
        setAnimationStatus("Syncing orders...");
      },
      // Step 2: Add intent score column (0-100, red and green)
      () => {
        setAnimationStep(2);
        setAnimationStatus("Calculating intent scores...");
        setOrders(prevOrders => prevOrders.map(order => {
          // Determine if this order should be "don't ship" based on our preselected list
          const shouldNotShip = dontShipOrders.includes(order.id);
          // Generate appropriate score range
          const scoreBase = shouldNotShip ? 10 : 45;
          const scoreRange = shouldNotShip ? 35 : 55;
          return {
            ...order,
            score: scoreBase + Math.floor(Math.random() * scoreRange)
          };
        }));
      },
      // Step 3: Strike through red orders (continuation of step 2)
      () => {
        setAnimationStep(3);
        setAnimationStatus("Processing decisions...");
        setOrders(prevOrders => prevOrders.map(order => {
          const shouldNotShip = dontShipOrders.includes(order.id);
          return {
            ...order,
            decision: shouldNotShip ? "don't ship" : "ship",
            probability: shouldNotShip ? undefined : order.score,
            risk: shouldNotShip ? "High RTO Risk" : undefined
          };
        }));
      },
      // Step 4: Only green orders left
      () => {
        setAnimationStep(4);
        setAnimationStatus("Filtering orders...");
        setOrders(prevOrders => prevOrders.map(order => ({
          ...order,
          hidden: order.decision === "don't ship"
        })));
        // Mark animation as complete
        setTimeout(() => {
          setAnimationRunning(false);
          setAnimationStatus("Complete");
        }, 1000);
      }];

      // Run each step with a 2-second delay
      sequence.forEach((step, index) => {
        setTimeout(step, index * 2000);
      });
    }, 500); // 0.5 second initial delay
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
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div id="before-after-section" className={cn("max-w-5xl mx-auto transition-all duration-500", isVisible ? "animate-fadeIn" : "opacity-0")}>
          <div className="text-center mb-10">
            <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
              Transformation
            </p>
            <h2 className="text-3xl font-bold mb-4 md:text-5xl">
              Scalysis <span className="text-gradient">knows which ones convert</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Remove the RTO headache. Give it to Scalysis—AI does all the work. No calling team. No confirmation texts. Just results.
            </p>
          </div>

          {/* Order Processing Animation */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden mb-8 max-w-3xl mx-auto">
            <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
                {animationStep === 0 && "Shopify COD Orders"}
                {animationStep === 1 && "Shopify COD Orders"}
                {animationStep === 2 && "Scalysis Scoring"}
                {animationStep === 3 && "Order Selection"}
                {animationStep === 4 && "Order Selection"}
              </h3>
              {animationRunning && <span className="text-sm text-blue-600 font-medium animate-pulse">
                  {animationStatus}
                </span>}
            </div>
            
            {/* Table of orders - making it more compact */}
            <div className="max-h-[350px] overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Channel</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    {animationStep >= 2 && <TableHead className="transition-opacity duration-500 animate-fadeIn">Intent Score</TableHead>}
                    {animationStep >= 3 && <TableHead className="transition-opacity duration-500 animate-fadeIn">Decision</TableHead>}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map(order => <TableRow key={order.id} className={cn("transition-all duration-500", getOrderRowClass(order), animationStep === 1 ? "animate-pulse" : "", animationStep === 3 && order.decision === "don't ship" ? "line-through text-gray-400" : "", order.hidden ? "hidden" : "")}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.channel}</TableCell>
                      <TableCell>{order.amount}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          {order.status}
                        </span>
                      </TableCell>
                      
                      {animationStep >= 2 && <TableCell className="transition-opacity duration-500 animate-fadeIn">
                          {order.score !== undefined && <div className="flex items-center gap-2">
                              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500", order.score >= 45 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700")}>
                                {order.score}
                              </div>
                              {animationStep === 2 && <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div className={cn("h-full rounded-full transition-all duration-500", order.score >= 45 ? "bg-green-500" : "bg-red-500")} style={{
                          width: `${order.score}%`
                        }}></div>
                                </div>}
                            </div>}
                        </TableCell>}
                      
                      {animationStep >= 3 && <TableCell className="transition-opacity duration-500 animate-fadeIn">
                          {order.decision === "ship" ? <div className="flex items-center gap-1 text-green-600">
                              <CircleCheck className="h-4 w-4" />
                              <span>Ship</span>
                              <span className="text-xs text-gray-500 ml-1">({order.probability}% verified)</span>
                            </div> : <div className="flex items-center gap-1 text-red-600">
                              <CircleX className="h-4 w-4" />
                              <span>Don't Ship</span>
                              <span className="text-xs text-gray-500 ml-1">({order.risk})</span>
                            </div>}
                        </TableCell>}
                    </TableRow>)}
                </TableBody>
              </Table>
            </div>
          </div>
          
          {/* Start Button */}
          <div className="flex justify-center mb-8">
            <Button onClick={startAnimation} disabled={animationRunning} className="px-6 py-3 bg-primary hover:bg-primary/90">
              <Play className="h-4 w-4 mr-2" />
              {animationRunning ? "Running..." : "Start"}
            </Button>
          </div>
          
          {/* Stats in blue background for emphasis */}
          
        </div>
      </div>
    </section>;
};
export default BeforeAfterFlip;