
"use client";

import { Activity, IdCard, Tag, Shield, TrendingUp } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Pattern Recognition",
    date: "Ongoing",
    content: "Scalysis scans customer behavior at the micro level — including click delays, repeat order patterns, address anomalies, device fingerprints, and bot-like velocity.",
    category: "Behavior Signals",
    icon: Activity, // Using Activity icon as neural network alternative
    relatedIds: [2],
    status: "completed" as const,
    energy: 80,
    metric: "15,231 behavior anomalies detected this week"
  },
  {
    id: 2,
    title: "Buyer Identity Reconstruction",
    date: "Ongoing",
    content: "Scalysis reconstructs hidden customer identities by stitching together signals from phone numbers, addresses, order history, IPs, and device patterns — even across different accounts. Helps detect repeat offenders, fake names, and burner numbers.",
    category: "Customer Fingerprinting",
    icon: IdCard, // Using IdCard for ID card representation
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
    metric: "3,213 high-risk buyers flagged across 6 brands last week"
  },
  {
    id: 3,
    title: "Product Category Intelligence",
    date: "Ongoing",
    content: "Learns how different product types behave in COD — fashion has high fake orders, gadgets face dead delivery attempts, skincare sees better acceptance.",
    category: "Category Risk Profiling",
    icon: Tag, // Using Tag icon for product categories
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
    metric: "Beauty: 83% acceptance, Electronics: 52% RTO"
  },
  {
    id: 4,
    title: "Order Scoring Engine",
    date: "Ongoing",
    content: "Assigns a daily precision score (0-100) to every incoming COD order. Selects only the cleanest, highest-converting 10–20%.",
    category: "Smart Order Selection",
    icon: Shield, // Using Shield for protection/selection
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 89,
    metric: "92.8% precision rate over last 7 days"
  },
  {
    id: 5,
    title: "Revenue Impact Simulator",
    date: "Ongoing",
    content: "Simulates the effect of accepting vs. rejecting a high-risk COD order. Projects shipping loss, refund cycles, and net profit differential.",
    category: "Cashflow Impact Modeling",
    icon: TrendingUp, // Using TrendingUp for chart representation
    relatedIds: [4],
    status: "pending" as const,
    energy: 70,
    metric: "Saved ₹85,00,000 in fake shipping costs last week"
  },
];

export function ScalysisTimelineDemo() {
  return (
    <div className="w-full h-screen bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Scalysis AI Core</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our proprietary AI system trained on millions of COD orders across India
          </p>
        </div>
      </div>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </div>
  );
}
