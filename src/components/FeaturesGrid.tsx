
import React from "react";
import { cn } from "@/lib/utils";
import { 
  ShieldCheck, 
  ShieldAlert, 
  Activity,
  Users,
  MessageSquare,
  ChartBar,
  CalendarClock
} from "lucide-react";

const FeaturesGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What&apos;s Inside <span className="text-gradient">Scalysis</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* First large blue box */}
          <div className="bg-blue-500 text-white p-8 rounded-lg flex items-start gap-6">
            <div className="mt-1">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Smart Order Selection</h3>
              <p className="text-blue-100">
                Smartly Filter Out Bad Orders Trained On Your Specific Data
              </p>
            </div>
          </div>

          {/* Second large blue box */}
          <div className="bg-blue-500 text-white p-8 rounded-lg flex items-start gap-6">
            <div className="mt-1">
              <Users className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Smart Meta Targeting</h3>
              <p className="text-blue-100">
                Re Route your same adspent to better audience quality, better deliveries & save on meta.
              </p>
            </div>
          </div>
        </div>

        {/* Smaller feature boxes in a grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Small feature boxes */}
          <div className="bg-gray-100 hover:bg-gray-200 transition-colors p-6 rounded-lg flex flex-col items-center text-center">
            <ChartBar className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-800">Auto PNL Tracking</h3>
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 transition-colors p-6 rounded-lg flex flex-col items-center text-center">
            <Activity className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-800">Auto AWB Tracking Status Fetching</h3>
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 transition-colors p-6 rounded-lg flex flex-col items-center text-center">
            <CalendarClock className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-800">30 Day Cashflow Projection</h3>
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 transition-colors p-6 rounded-lg flex flex-col items-center text-center">
            <MessageSquare className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-800">Ask AI</h3>
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 transition-colors p-6 rounded-lg flex flex-col items-center text-center">
            <Activity className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-800">Overview</h3>
            <p className="text-sm text-gray-600 mt-1">Shows current status of orders...</p>
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 transition-colors p-6 rounded-lg flex flex-col items-center text-center">
            <ShieldAlert className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-800">Business Health Score</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
