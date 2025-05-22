
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

// This is the content for the first blog post
const firstBlogContent = {
  title: "How to Reduce RTO by 40% in 30 Days (No Gimmicks)",
  date: "May 20, 2025",
  readTime: "9 min read",
  content: `
    <h2>Intro:</h2>
    <p>RTO (Return to Origin) is the silent killer of COD-first ecommerce brands in India. It's not just about a parcel coming back — it's about money lost on packaging, shipping, manpower, ad spend, and customer trust. Every fake name, invalid pin code, or undelivered parcel is a cost you eat. And as more Indian shoppers choose COD, this problem only grows.</p>
    
    <p>But what if you could reduce RTO by 40% in just one month? No fake promises. No banning COD. Just smarter data and better decisioning. In this guide, we break down the exact steps.</p>
    
    <img src="/lovable-uploads/c408b62f-1bf7-42d2-8132-857456402690.png" alt="RTO Shipping" class="my-8 rounded-lg w-full" />
    
    <h2>What is RTO (Return to Origin) and Why It's Rising in India</h2>
    <p>RTO occurs when an order is shipped but never gets delivered — and is returned to the seller. With prepaid orders, it's rare. But with COD, it's rampant.</p>
    
    <p>Why is RTO increasing?</p>
    <ul>
      <li>Rising COD preference: 60–80% of ecommerce orders in India are still COD.</li>
      <li>Low buyer intent: Many customers place orders impulsively.</li>
      <li>No digital verification: Unlike prepaid, there's no payment friction.</li>
      <li>Courier inefficiencies: Last-mile issues, wrong addresses, bad pin codes.</li>
    </ul>
    
    <p>This creates a massive leak in cashflow, especially for D2C brands spending lakhs daily on ads.</p>
    
    <h2>3 Main Causes of High RTO</h2>
    
    <div class="bg-blue-50 p-6 rounded-lg my-8">
      <h3>1. Fake or impulsive orders</h3>
      <p>Customers use fake names (e.g. "Rahul Dravid", "Free Product") or abandoned carts.</p>
    </div>
    
    <div class="bg-blue-50 p-6 rounded-lg my-8">
      <h3>2. High-risk pin codes</h3>
      <p>Certain regions have historically low delivery success rates. Couriers fail or customers refuse delivery.</p>
    </div>
    
    <div class="bg-blue-50 p-6 rounded-lg my-8">
      <h3>3. No smart filtering</h3>
      <p>Brands ship every COD order — without knowing which ones are likely to fail.</p>
    </div>
    
    <img src="/lovable-uploads/68139ac9-6424-41d9-a055-16fc60b62d14.png" alt="Shipping Analysis" class="my-8 rounded-lg w-full" />
    
    <h2>Why Traditional Fraud Tools Fail on COD</h2>
    <p>Most fraud detection tools are built for prepaid ecommerce — flagging credit card fraud or identity mismatches. But COD fraud is different:</p>
    
    <ul>
      <li>It's behavioral, not transactional.</li>
      <li>There's no payment metadata.</li>
      <li>The risk is not in payment — it's in intent.</li>
    </ul>
    
    <p>COD fraud requires a new type of intelligence: Order intent prediction.</p>
    
    <h2>Step-by-Step: How Smart Order Selection Reduces RTO</h2>
    
    <div class="bg-gray-50 p-6 rounded-lg my-6 border-l-4 border-blue-500">
      <h3 class="text-lg font-bold">1. Score every order at checkout</h3>
      <p>Scalysis analyzes buyer behavior, device signals, historical courier data, and pin code reliability in real-time.</p>
    </div>
    
    <div class="bg-gray-50 p-6 rounded-lg my-6 border-l-4 border-blue-500">
      <h3 class="text-lg font-bold">2. Identify low-quality orders</h3>
      <p>Example: Late-night, first-time customer, high-risk zone, fake-looking name.</p>
    </div>
    
    <div class="bg-gray-50 p-6 rounded-lg my-6 border-l-4 border-blue-500">
      <h3 class="text-lg font-bold">3. Auto-flag or hold risky orders</h3>
      <p>Instead of shipping blindly, pause these orders for re-verification.</p>
    </div>
    
    <div class="bg-gray-50 p-6 rounded-lg my-6 border-l-4 border-blue-500">
      <h3 class="text-lg font-bold">4. Ship only what's clean</h3>
      <p>Orders with high intent, real names, trusted pin codes.</p>
    </div>
    
    <div class="bg-gray-50 p-6 rounded-lg my-6 border-l-4 border-blue-500">
      <h3 class="text-lg font-bold">5. Feed courier success/fail data back into model</h3>
      <p>Scalysis improves precision every day.</p>
    </div>
    
    <p class="text-lg font-semibold">Result? Lower RTO. Higher profit per shipment.</p>
    
    <h2>Case Study: A Shopify Brand That Dropped from 48% to 19% RTO</h2>
    <p>A premium skincare D2C brand in Mumbai was bleeding ₹6L+ per month due to RTO. Most of their COD customers came from Instagram ads.</p>
    
    <img src="/lovable-uploads/f02f2d55-07d3-4d98-9dc7-9443cc8b8759.png" alt="Case Study" class="my-8 rounded-lg w-full" />
    
    <h3>Problems:</h3>
    <ul>
      <li>No check on COD orders.</li>
      <li>Shipping to every pincode.</li>
      <li>Fake names, prank orders.</li>
    </ul>
    
    <h3>What changed with Scalysis:</h3>
    <ul>
      <li>Smart scoring at checkout.</li>
      <li>Auto-blocking high-risk zones.</li>
      <li>Fake name database filtering.</li>
      <li>Weekly RTO heatmaps by courier.</li>
    </ul>
    
    <h3>Results in 30 days:</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      <div class="bg-blue-500 text-white p-4 rounded-lg text-center">
        <div class="text-2xl font-bold">48% → 19%</div>
        <div>RTO Rate</div>
      </div>
      <div class="bg-blue-500 text-white p-4 rounded-lg text-center">
        <div class="text-2xl font-bold">₹3.4L</div>
        <div>Savings</div>
      </div>
      <div class="bg-blue-500 text-white p-4 rounded-lg text-center">
        <div class="text-2xl font-bold">0%</div>
        <div>Drop in Conversions</div>
      </div>
      <div class="bg-blue-500 text-white p-4 rounded-lg text-center">
        <div class="text-2xl font-bold">+25%</div>
        <div>Better ROI on Ads</div>
      </div>
    </div>
    
    <h2>Tools You Can Start Using Now</h2>
    <ul>
      <li><strong>Scalysis</strong> – AI-powered smart order scoring for Indian COD brands.</li>
      <li><strong>WhatsApp reconfirmation tools</strong> – Recheck risky orders before shipping.</li>
      <li><strong>Courier-level RTO dashboards</strong> – Understand where you're losing money.</li>
      <li><strong>Pincode risk database</strong> – Build a blocklist of known bad zones.</li>
    </ul>
  `,
};

// Content for placeholder blog posts
const placeholderContent = {
  title: "Blog Post Coming Soon",
  date: "Coming Soon",
  readTime: "Coming Soon",
  content: `
    <div class="py-12 text-center">
      <h2 class="text-xl">This blog post is coming soon!</h2>
      <p class="mt-4">Our team is working hard to create quality content about reducing RTO rates. Please check back later.</p>
    </div>
  `,
};

const BlogPost = () => {
  const { slug } = useParams();
  const isFirstBlog = slug === "reduce-rto-40-percent";
  const blogContent = isFirstBlog ? firstBlogContent : placeholderContent;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <Link to="/reduce-rto">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Button>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blogContent.title}</h1>
          
          <div className="flex items-center text-gray-500 mb-8">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-4">{blogContent.date}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{blogContent.readTime}</span>
          </div>
        </div>

        <div className="prose max-w-none prose-lg prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4"
             dangerouslySetInnerHTML={{ __html: blogContent.content }}>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-2">Want to see which orders not to ship this week?</h2>
          <p className="mb-6">Get early access to Scalysis and start recovering lost margins.</p>
          <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => window.location.href = "/#get-started"}>
            Try Scalysis Early
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
