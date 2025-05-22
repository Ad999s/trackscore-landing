
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "How to Reduce RTO by 40% in 30 Days (No Gimmicks)",
    slug: "reduce-rto-40-percent",
    excerpt: "Learn how to significantly cut down your Return to Origin rates with data-driven strategies that actually work.",
    date: "May 20, 2025",
    readTime: "9 min read",
    image: "/lovable-uploads/c408b62f-1bf7-42d2-8132-857456402690.png"
  },
  {
    id: 2,
    title: "The True Cost of RTO in Indian E-commerce",
    slug: "true-cost-of-rto",
    excerpt: "Beyond lost product value - understand the hidden costs that make RTO so damaging to your business.",
    date: "May 15, 2025",
    readTime: "7 min read",
    image: "/lovable-uploads/68139ac9-6424-41d9-a055-16fc60b62d14.png"
  },
  {
    id: 3,
    title: "Why Your COD Orders Are Getting Rejected",
    slug: "cod-rejections-explained",
    excerpt: "Discover the common patterns behind high rejection rates and how to address them effectively.",
    date: "May 10, 2025",
    readTime: "8 min read",
    image: "/lovable-uploads/f02f2d55-07d3-4d98-9dc7-9443cc8b8759.png"
  },
  {
    id: 4,
    title: "Pin Code Analytics: Ship Smarter, Not Everywhere",
    slug: "pin-code-analytics",
    excerpt: "Using geographical data to make better shipping decisions and reduce return rates.",
    date: "May 5, 2025",
    readTime: "6 min read",
    image: "/lovable-uploads/2a0db2ed-aa3c-40c9-8206-0ac412dda034.png"
  },
  {
    id: 5,
    title: "Building an RTO Prediction Model for Your Business",
    slug: "rto-prediction-model",
    excerpt: "Steps to create a custom algorithm that predicts which orders are likely to be returned.",
    date: "April 30, 2025",
    readTime: "10 min read",
    image: "/lovable-uploads/3c4756d4-83a0-499f-8d98-04970f61faa7.png"
  },
  {
    id: 6,
    title: "WhatsApp Verification: The Pre-Shipping Secret Weapon",
    slug: "whatsapp-verification",
    excerpt: "How a simple messaging workflow can dramatically improve your delivery success rates.",
    date: "April 25, 2025",
    readTime: "7 min read",
    image: "/lovable-uploads/c408b62f-1bf7-42d2-8132-857456402690.png"
  },
  {
    id: 7,
    title: "Courier Performance Analysis: Who's Really Delivering?",
    slug: "courier-performance-analysis",
    excerpt: "Not all logistics partners are created equal. Learn how to track and optimize your courier mix.",
    date: "April 20, 2025",
    readTime: "8 min read",
    image: "/lovable-uploads/68139ac9-6424-41d9-a055-16fc60b62d14.png"
  },
  {
    id: 8,
    title: "Fake Names and Fraud Orders: Detection Techniques",
    slug: "fake-names-detection",
    excerpt: "Practical methods to identify and filter out suspicious orders before they become costly returns.",
    date: "April 15, 2025",
    readTime: "9 min read",
    image: "/lovable-uploads/f02f2d55-07d3-4d98-9dc7-9443cc8b8759.png"
  },
  {
    id: 9,
    title: "Seasonal RTO Patterns and How to Prepare",
    slug: "seasonal-rto-patterns",
    excerpt: "Understanding how return rates fluctuate throughout the year and strategies to mitigate seasonal spikes.",
    date: "April 10, 2025",
    readTime: "7 min read",
    image: "/lovable-uploads/2a0db2ed-aa3c-40c9-8206-0ac412dda034.png"
  },
  {
    id: 10,
    title: "Case Studies: 5 D2C Brands That Conquered RTO",
    slug: "d2c-rto-case-studies",
    excerpt: "Real success stories from Indian direct-to-consumer brands that significantly reduced their return rates.",
    date: "April 5, 2025",
    readTime: "11 min read",
    image: "/lovable-uploads/3c4756d4-83a0-499f-8d98-04970f61faa7.png"
  }
];

const ReduceRTO = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Reduce RTO Blog</h1>
        <p className="text-lg text-gray-600 mb-12">
          Expert insights, data-driven strategies, and practical tips to help e-commerce businesses reduce Return to Origin rates and improve profitability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/reduce-rto/${post.slug}`}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="flex justify-between">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-blue-500 hover:text-blue-700">
                    Read More
                  </Button>
                </CardFooter>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReduceRTO;
