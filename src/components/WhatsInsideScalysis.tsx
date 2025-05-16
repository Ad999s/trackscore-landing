
import React from "react";
import { cn } from "@/lib/utils";
import { 
  BoxIcon, 
  ShieldCheckIcon, 
  TargetIcon, 
  ChartBarIcon
} from "lucide-react";

const WhatsInsideScalysis = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What's Inside <span className="text-gradient">Scalysis</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Scalysis: The Backbone of ALL Indian E-commerce businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* First big blue box */}
          <div className="bg-primary rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <BoxIcon className="h-8 w-8 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Smart Order Selection</h3>
                <p className="text-white/90">
                  Smartly Filter Out Bad Orders Trained On Your Specific Data
                </p>
              </div>
            </div>
          </div>

          {/* Second big blue box */}
          <div className="bg-primary rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <TargetIcon className="h-8 w-8 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Smart Meta Targeting</h3>
                <p className="text-white/90">
                  Re-Route your same adspend to better audience quality, better deliveries & save on meta
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Smaller gray boxes in a grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Auto PNL Tracking */}
          <div className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <ChartBarIcon className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-semibold text-gray-900">Auto PNL Tracking</h4>
              </div>
            </div>
          </div>

          {/* Auto AWB Tracking Status Fetching */}
          <div className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <BoxIcon className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-semibold text-gray-900">Auto AWB Tracking Status Fetching</h4>
              </div>
            </div>
          </div>

          {/* 30 Day Cashflow Projection */}
          <div className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <ChartBarIcon className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-semibold text-gray-900">30 Day Cashflow Projection</h4>
                <p className="text-sm text-gray-600">Project your future cash flows</p>
              </div>
            </div>
          </div>

          {/* Ask AI */}
          <div className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <ShieldCheckIcon className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-semibold text-gray-900">Ask AI</h4>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <ChartBarIcon className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-semibold text-gray-900">Overview</h4>
                <p className="text-sm text-gray-600">Shows current status of orders...</p>
              </div>
            </div>
          </div>

          {/* Business Health Score */}
          <div className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <ShieldCheckIcon className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-semibold text-gray-900">Business Health Score</h4>
                <p className="text-sm text-gray-600">Business valuation...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsInsideScalysis;
