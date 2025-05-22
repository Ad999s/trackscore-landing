import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

// Content for the first blog post with clean, structured format
const firstBlogContent = {
  title: "Reduce RTO by 40% in 30 Days",
  date: "May 20, 2025",
  readTime: "9 min read",
  content: `
    <h2>Understanding RTO in Indian E-commerce</h2>
    <p>Return to Origin (RTO) is the silent killer of COD-focused brands in India. Each returned package represents wasted spending on packaging, shipping, labor, advertising, and customer acquisition.</p>
    
    <h2>What is RTO (Return to Origin) and Why It's Rising in India</h2>
    <p>RTO occurs when an order is shipped but never gets delivered — and is returned to the seller. With prepaid orders, it's rare. But with COD, it's rampant.</p>
    
    <h2>Why is RTO increasing?</h2>
    <ul>
      <li><strong>Rising COD preference:</strong> 60-80% of ecommerce orders in India are still COD.</li>
      <li><strong>Low buyer intent:</strong> Many customers place orders impulsively.</li>
      <li><strong>No digital verification:</strong> Unlike prepaid, there's no payment friction.</li>
      <li><strong>Courier inefficiencies:</strong> Last-mile issues, wrong addresses, bad pin codes.</li>
    </ul>
    <p>This creates a massive leak in cashflow, especially for D2C brands spending lakhs daily on ads.</p>
    
    <h2>3 Main Causes of High RTO</h2>
    <ol>
      <li>
        <h3>Fake or impulsive orders</h3>
        <p>Customers use fake names (e.g. "Rahul Dravid", "Free Product") or abandoned carts.</p>
      </li>
      <li>
        <h3>High-risk pin codes</h3>
        <p>Certain regions have historically low delivery success rates. Couriers fail or customers refuse delivery.</p>
      </li>
      <li>
        <h3>No smart filtering</h3>
        <p>Brands ship every COD order — without knowing which ones are likely to fail.</p>
      </li>
    </ol>
    
    <h2>Why Traditional Fraud Tools Fail on COD</h2>
    <p>Most fraud detection tools are built for prepaid ecommerce. COD fraud is different:</p>
    <ul>
      <li>It's behavioral, not transactional.</li>
      <li>There's no payment metadata.</li>
      <li>The risk is not in payment — it's in intent.</li>
    </ul>
    <p>COD fraud requires a new type of intelligence: Order intent prediction.</p>
    
    <h2>How Smart Order Selection Reduces RTO</h2>
    <ol>
      <li><strong>Score every order at checkout</strong> - Analyze buyer behavior, device signals, historical data, and pin code reliability.</li>
      <li><strong>Identify low-quality orders</strong> - Flag late-night, first-time customers in high-risk zones.</li>
      <li><strong>Auto-flag risky orders</strong> - Pause suspicious orders for verification.</li>
      <li><strong>Ship only quality orders</strong> - Focus on orders with clear intent and reliable delivery potential.</li>
      <li><strong>Feed data back into model</strong> - Improve prediction accuracy using delivery outcomes.</li>
    </ol>
    
    <h2>Case Study: 48% to 19% RTO Reduction</h2>
    <p>A Mumbai skincare brand was losing ₹6L+ monthly to RTO, primarily from Instagram-sourced customers.</p>
    
    <h3>Problems:</h3>
    <ul>
      <li>No check on COD orders</li>
      <li>Shipping to every pincode</li>
      <li>Fake names and prank orders</li>
    </ul>
    
    <h3>Solution:</h3>
    <ul>
      <li>Smart scoring at checkout</li>
      <li>Auto-blocking high-risk zones</li>
      <li>Fake name detection</li>
      <li>Weekly RTO mapping by courier</li>
    </ul>
    
    <h3>Results:</h3>
    <ul>
      <li>RTO dropped from 48% → 19%</li>
      <li>₹3.4L in monthly savings</li>
      <li>No conversion rate drop</li>
      <li>25% better ad ROI</li>
    </ul>
    
    <h2>Tools You Can Start Using Now</h2>
    <ul>
      <li><strong>Scalysis:</strong> AI-powered order scoring for COD businesses</li>
      <li><strong>WhatsApp reconfirmation:</strong> Pre-delivery order verification</li>
      <li><strong>RTO dashboards:</strong> Courier performance tracking</li>
      <li><strong>Pin code database:</strong> High-risk zone identification</li>
    </ul>
  `,
};

// Content for other blog posts with structured format
const placeholderContent = {
  "true-cost-of-rto": {
    title: "True Cost of RTO in Indian E-commerce",
    date: "May 15, 2025",
    readTime: "7 min read",
    content: `
      <h2>Beyond Lost Product Value</h2>
      <p>RTO costs extend far beyond the obvious returns. Each rejected delivery represents multiple hidden expenses that damage your business.</p>
      
      <h2>The Direct Costs</h2>
      <ul>
        <li>Double shipping costs (outbound + return)</li>
        <li>Repackaging and product inspection</li>
        <li>Warehouse handling and processing</li>
        <li>Inventory tied up in transit</li>
      </ul>
      
      <h2>The Hidden Expenses</h2>
      <ul>
        <li>Customer acquisition cost waste</li>
        <li>Cash flow disruption</li>
        <li>Operational inefficiency</li>
        <li>Team morale and focus impact</li>
      </ul>
      
      <h2>Calculating Your True RTO Cost</h2>
      <p>Monthly RTO Cost = (Average Order Value + 2x Shipping Cost + Handling Cost) × RTO Orders</p>
      
      <h2>Industry Benchmarks</h2>
      <ul>
        <li>Fashion: 25-35% RTO rate</li>
        <li>Electronics: 15-25% RTO rate</li>
        <li>Beauty: 20-30% RTO rate</li>
        <li>Home goods: 18-28% RTO rate</li>
      </ul>
      
      <h2>Building an RTO Reduction Strategy</h2>
      <ul>
        <li>Order quality filtering</li>
        <li>Pre-shipment verification</li>
        <li>Targeted COD restrictions</li>
        <li>Customer education</li>
      </ul>
    `
  },
  "cod-rejections-explained": {
    title: "Why Your COD Orders Get Rejected",
    date: "May 10, 2025",
    readTime: "8 min read",
    content: `
      <h2>The Psychology Behind COD Rejections</h2>
      <p>Understanding customer behavior patterns can help predict and prevent delivery failures.</p>
      
      <h2>Top 5 Reasons for COD Rejections</h2>
      <ol>
        <li>Impulse ordering without serious intent to purchase</li>
        <li>Changed mind during delivery wait time</li>
        <li>Ordered multiple similar items to compare</li>
        <li>Testing product availability without commitment</li>
        <li>Deliberately providing incorrect information</li>
      </ol>
      
      <h2>Detection Patterns</h2>
      <ul>
        <li>Orders placed between 11PM-3AM</li>
        <li>First-time customers with high-value orders</li>
        <li>Multiple items in varying sizes/colors</li>
        <li>Suspicious or incomplete contact information</li>
        <li>High-risk delivery locations</li>
      </ul>
      
      <h2>Customer Segments Analysis</h2>
      <h3>First-time Buyers</h3>
      <p>Highest RTO rate (30-40%) due to uncertainty and testing behavior</p>
      
      <h3>Repeat Customers</h3>
      <p>Moderate RTO rate (15-25%) with more predictable patterns</p>
      
      <h3>Loyal Customers</h3>
      <p>Lowest RTO rate (5-10%) with high order reliability</p>
      
      <h2>Prevention Strategies</h2>
      <ul>
        <li>SMS/WhatsApp order confirmation before shipping</li>
        <li>Customer scoring based on previous behavior</li>
        <li>Incentivized prepaid payment options</li>
        <li>Transparent delivery tracking and communication</li>
      </ul>
    `
  },
  "pin-code-analytics": {
    title: "Pin Code Analytics: Ship Smarter",
    date: "May 5, 2025",
    readTime: "6 min read",
    content: `
      <h2>Geographic Intelligence for E-commerce</h2>
      <p>Not all delivery locations are created equal. Understand where your deliveries succeed and fail.</p>
      
      <h2>The Pin Code Factor</h2>
      <p>Location data reveals critical delivery success patterns that can transform your shipping strategy.</p>
      
      <h2>Building Your Heat Map</h2>
      <p>Steps to create your delivery success geography:</p>
      <ol>
        <li>Collect 3-6 months of delivery data by pin code</li>
        <li>Calculate success rates for each location</li>
        <li>Group pin codes into high/medium/low risk zones</li>
        <li>Implement targeting strategies for each category</li>
      </ol>
      
      <h2>Risk Categories</h2>
      
      <div class="bg-green-100 p-4 rounded-lg my-4">
        <h3>Green Zones (80%+ delivery success)</h3>
        <p>Offer all payment options and standard shipping</p>
      </div>
      
      <div class="bg-yellow-100 p-4 rounded-lg my-4">
        <h3>Yellow Zones (50-80% delivery success)</h3>
        <p>Additional verification for COD, consider shipping restrictions</p>
      </div>
      
      <div class="bg-red-100 p-4 rounded-lg my-4">
        <h3>Red Zones (Below 50% delivery success)</h3>
        <p>Prepaid only, or consider not servicing these areas</p>
      </div>
      
      <h2>Implementation Strategy</h2>
      <p>How to apply pin code intelligence in your operations:</p>
      <ul>
        <li>Integrate pin code database with checkout process</li>
        <li>Create automated rules for different zones</li>
        <li>Update strategy based on new performance data</li>
        <li>Balance coverage with profitability goals</li>
      </ul>
    `
  },
  "rto-prediction-model": {
    title: "Building an RTO Prediction Model",
    date: "April 30, 2025",
    readTime: "10 min read",
    content: `
      <h2>Predictive Analytics for Delivery Success</h2>
      <p>Creating a custom algorithm to forecast which orders will likely be returned before shipping.</p>
      
      <h2>Data Points That Matter</h2>
      <p>Key variables to include in your prediction model:</p>
      <ul>
        <li>Customer history and behavior patterns</li>
        <li>Order characteristics (time, value, products)</li>
        <li>Delivery location performance</li>
        <li>Device and session data</li>
        <li>Seasonal and temporal factors</li>
      </ul>
      
      <h2>Building Your Model</h2>
      <p>Step-by-step approach to creating a prediction system:</p>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Step 1: Data Collection</h3>
        <p>Gather historical order and delivery outcome data (minimum 3 months)</p>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Step 2: Feature Engineering</h3>
        <p>Transform raw data into meaningful predictive variables</p>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Step 3: Model Training</h3>
        <p>Use machine learning algorithms to identify patterns in historical data</p>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Step 4: Validation and Testing</h3>
        <p>Evaluate model accuracy with previously unseen data</p>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Step 5: Implementation</h3>
        <p>Integrate prediction scores into order processing workflow</p>
      </div>
      
      <h2>Scoring System Implementation</h2>
      <p>How to apply model predictions in daily operations:</p>
      <ul>
        <li>Green orders (80%+ delivery probability): Ship immediately</li>
        <li>Yellow orders (50-80% probability): Verify before shipping</li>
        <li>Red orders (Below 50% probability): Route to special handling</li>
      </ul>
      
      <h2>Continuous Improvement</h2>
      <p>Methods to refine your prediction accuracy over time:</p>
      <ul>
        <li>Regular model retraining with new data</li>
        <li>A/B testing different prediction strategies</li>
        <li>Adding new data sources and features</li>
      </ul>
    `
  },
  "whatsapp-verification": {
    title: "WhatsApp Verification: Pre-Shipping Strategy",
    date: "April 25, 2025",
    readTime: "7 min read",
    content: `
      <h2>The Power of Pre-Confirmation</h2>
      <p>How simple messaging can dramatically improve delivery success rates for COD orders.</p>
      
      <h2>Why WhatsApp Works</h2>
      <p>Advantages that make WhatsApp ideal for order verification:</p>
      <ul>
        <li>Near-universal adoption in India (500M+ users)</li>
        <li>Higher open rates than SMS or email</li>
        <li>Rich media capabilities for product reminders</li>
        <li>Conversation tracking and automation options</li>
      </ul>
      
      <h2>Setting Up Your Verification Flow</h2>
      <p>Creating an effective confirmation system:</p>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Step 1: Initial Setup</h3>
        <p>Register for WhatsApp Business API or use third-party services</p>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Step 2: Message Design</h3>
        <p>Create clear, engaging confirmation templates with product images</p>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Step 3: Automation Rules</h3>
        <p>Configure when messages are sent and how responses are processed</p>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Step 4: Integration</h3>
        <p>Connect with your e-commerce and order management systems</p>
      </div>
      
      <h2>Message Templates That Convert</h2>
      <p>Effective confirmation message examples with high response rates:</p>
      <div class="bg-gray-50 p-4 rounded-lg my-4 border-l-4 border-blue-500">
        <p>"Hi [Name], your [Product] is packed and ready to ship! Reply YES to confirm your order (₹[Amount] COD) or NO to cancel. Thank you!"</p>
      </div>
      
      <h2>Handling Non-Responses</h2>
      <p>Strategies for when customers don't respond to verification:</p>
      <ul>
        <li>Follow-up message schedule (6 hours, 24 hours)</li>
        <li>Alternative contact attempts (call, SMS)</li>
        <li>Decision rules for shipping without confirmation</li>
      </ul>
      
      <h2>Results You Can Expect</h2>
      <p>Typical outcomes from implementing WhatsApp verification:</p>
      <ul>
        <li>15-25% reduction in RTO rates</li>
        <li>10-15% cancellations before shipping (cost savings)</li>
        <li>Improved customer experience and communication</li>
      </ul>
    `
  },
  "courier-performance-analysis": {
    title: "Courier Performance Analysis",
    date: "April 20, 2025",
    readTime: "8 min read",
    content: `
      <h2>Not All Carriers Are Equal</h2>
      <p>Understanding performance differences between logistics partners to optimize your delivery strategy.</p>
      
      <h2>Key Performance Indicators</h2>
      <p>Critical metrics to track for each courier service:</p>
      <ul>
        <li>Delivery success rate (overall and by region)</li>
        <li>Average delivery time</li>
        <li>COD remittance speed</li>
        <li>Damage rates and claims handling</li>
        <li>Customer satisfaction scores</li>
      </ul>
      
      <h2>Data Collection Framework</h2>
      <p>How to gather meaningful courier performance data:</p>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Shipment Tracking</h3>
        <p>Record milestone timestamps for each delivery attempt</p>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Return Reasons</h3>
        <p>Categorize and track all RTO causes by courier</p>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Geographic Performance</h3>
        <p>Analyze success rates by region, state, and pin code</p>
      </div>
      
      <h2>Optimizing Your Courier Mix</h2>
      <p>Strategies to improve overall delivery performance:</p>
      <ul>
        <li>Create courier allocation rules by geography</li>
        <li>Develop primary/backup carrier strategy</li>
        <li>Negotiate performance-based contracts</li>
        <li>Regular performance reviews with key partners</li>
      </ul>
      
      <h2>Technology Integration</h2>
      <p>Tools to facilitate courier optimization:</p>
      <ul>
        <li>Multi-carrier shipping platforms</li>
        <li>Performance analytics dashboards</li>
        <li>Automated allocation engines</li>
        <li>Customer feedback systems</li>
      </ul>
    `
  },
  "fake-names-detection": {
    title: "Detecting Fake Orders: Practical Methods",
    date: "April 15, 2025",
    readTime: "9 min read",
    content: `
      <h2>The Fake Order Problem</h2>
      <p>How to identify and filter suspicious orders before they become costly returns.</p>
      
      <h2>Common Red Flags</h2>
      <p>Warning signs that indicate potentially fraudulent orders:</p>
      <ul>
        <li>Celebrity or fictional character names</li>
        <li>Generic terms instead of names (e.g., "Cash on Delivery")</li>
        <li>Mismatched name and address information</li>
        <li>Multiple orders from same IP with different names</li>
        <li>Unusual ordering patterns or quantities</li>
      </ul>
      
      <h2>Building Your Detection System</h2>
      <p>Steps to implement effective fraud screening:</p>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Step 1: Database Creation</h3>
        <p>Compile known fake names and suspicious patterns from past orders</p>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Step 2: Rule Setting</h3>
        <p>Create detection rules based on historical patterns</p>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Step 3: Order Screening</h3>
        <p>Implement real-time checks during checkout process</p>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Step 4: Verification Process</h3>
        <p>Develop protocol for handling flagged orders</p>
      </div>
      
      <h2>Technical Implementation</h2>
      <p>Methods to detect suspicious orders:</p>
      <ul>
        <li>Name validation against fraud database</li>
        <li>Phone number verification services</li>
        <li>Address standardization and validation</li>
        <li>Device fingerprinting for repeated patterns</li>
        <li>Machine learning models for anomaly detection</li>
      </ul>
      
      <h2>Verification Without Friction</h2>
      <p>How to validate suspicious orders without losing legitimate sales:</p>
      <ul>
        <li>Two-factor authentication for high-risk orders</li>
        <li>Subtle verification questions during checkout</li>
        <li>Post-order confirmation calls for selected orders</li>
        <li>Incentives for verifiable information sharing</li>
      </ul>
    `
  },
  "seasonal-rto-patterns": {
    title: "Seasonal RTO Patterns",
    date: "April 10, 2025",
    readTime: "7 min read",
    content: `
      <h2>Predictable RTO Fluctuations</h2>
      <p>Understanding how return rates change throughout the year and strategies to prepare for seasonal spikes.</p>
      
      <h2>The Annual RTO Calendar</h2>
      <p>Key periods with distinctive RTO patterns:</p>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Festival Season (Oct-Nov)</h3>
        <p>High order volumes with increased RTO due to impulse buying and delivery pressure</p>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Sale Events (End of Season)</h3>
        <p>Elevated RTO from bargain hunters and comparison shoppers</p>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Summer Months (Apr-Jun)</h3>
        <p>Weather-related delivery challenges in many regions</p>
      </div>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Monsoon Season (Jun-Sep)</h3>
        <p>Logistical disruptions and accessibility issues in certain areas</p>
      </div>
      
      <h2>Seasonal Preparation Strategies</h2>
      <p>How to adapt your approach for different periods:</p>
      <ul>
        <li>Adjust order screening thresholds by season</li>
        <li>Modify courier allocation based on seasonal performance</li>
        <li>Implement temporary pin code restrictions during challenging periods</li>
        <li>Create season-specific customer communication</li>
      </ul>
      
      <h2>Building Seasonal Models</h2>
      <p>Developing prediction systems that account for seasonal factors:</p>
      <ul>
        <li>Incorporate historical seasonal data into RTO predictions</li>
        <li>Create season-specific verification rules</li>
        <li>Adjust risk thresholds based on time of year</li>
        <li>Develop contingency plans for high-risk periods</li>
      </ul>
      
      <h2>Planning Your Annual Calendar</h2>
      <p>Creating a proactive RTO management schedule:</p>
      <ul>
        <li>Quarterly review and strategy adjustment</li>
        <li>Pre-season preparation with courier partners</li>
        <li>Staff training for seasonal verification processes</li>
        <li>Post-season analysis and learning implementation</li>
      </ul>
    `
  },
  "d2c-rto-case-studies": {
    title: "5 D2C Brands That Conquered RTO",
    date: "April 5, 2025",
    readTime: "11 min read",
    content: `
      <h2>Success Stories in RTO Reduction</h2>
      <p>Real examples from Indian direct-to-consumer brands that significantly improved their delivery rates.</p>
      
      <h2>Case Study 1: Premium Beauty Brand</h2>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Initial Challenge</h3>
        <p>45% RTO rate affecting profitability and cash flow</p>
        
        <h3>Solution Implemented</h3>
        <p>WhatsApp verification + pin code restrictions + customer scoring system</p>
        
        <h3>Results</h3>
        <p>Reduced RTO to 18% within 45 days, improved ROAS by 30%</p>
      </div>
      
      <h2>Case Study 2: Fashion Startup</h2>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Initial Challenge</h3>
        <p>38% RTO rate with high losses on sponsored product ads</p>
        
        <h3>Solution Implemented</h3>
        <p>AI-powered order screening + courier optimization + prepaid incentives</p>
        
        <h3>Results</h3>
        <p>Reduced RTO to 22%, increased prepaid orders from 30% to 45%</p>
      </div>
      
      <h2>Case Study 3: Home Decor Brand</h2>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Initial Challenge</h3>
        <p>32% RTO rate with high shipping costs due to product size</p>
        
        <h3>Solution Implemented</h3>
        <p>Geographic targeting + minimum order value for COD + verification calls</p>
        
        <h3>Results</h3>
        <p>Reduced RTO to 15%, increased average order value by 22%</p>
      </div>
      
      <h2>Case Study 4: Nutrition Supplements Company</h2>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Initial Challenge</h3>
        <p>40% RTO rate affecting subscription model viability</p>
        
        <h3>Solution Implemented</h3>
        <p>First order verification + loyalty program for prepaid + smart courier allocation</p>
        
        <h3>Results</h3>
        <p>Reduced RTO to 17%, doubled subscription customer retention</p>
      </div>
      
      <h2>Case Study 5: Consumer Electronics Brand</h2>
      
      <div class="bg-blue-50 p-4 rounded-lg my-4">
        <h3>Initial Challenge</h3>
        <p>29% RTO rate with high product value increasing financial impact</p>
        
        <h3>Solution Implemented</h3>
        <p>Risk scoring algorithm + partial prepayment model + delivery slot selection</p>
        
        <h3>Results</h3>
        <p>Reduced RTO to 12%, improved cash flow cycle by 5 days</p>
      </div>
      
      <h2>Common Success Factors</h2>
      <p>Key strategies shared across all case studies:</p>
      <ul>
        <li>Data-driven approach to problem identification</li>
        <li>Multi-layered solution implementation</li>
        <li>Customer experience focus despite verification steps</li>
        <li>Continuous measurement and refinement</li>
      </ul>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Determine which content to display
  let blogContent;
  
  if (slug === "reduce-rto-40-percent") {
    blogContent = firstBlogContent;
  } else if (placeholderContent[slug]) {
    blogContent = placeholderContent[slug];
  } else {
    // Default fallback content
    blogContent = {
      title: "Blog Post Coming Soon",
      date: "Coming Soon",
      readTime: "Coming Soon",
      content: `
        <div>
          <h2>This blog post is coming soon!</h2>
          <p>Our team is working hard to create quality content about reducing RTO rates. Please check back later.</p>
        </div>
      `,
    };
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <Button 
            variant="outline" 
            className="mb-8"
            onClick={() => navigate("/reduce-rto")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blogContent.title}</h1>
          
          <div className="flex items-center text-gray-500 mb-8">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-4">{blogContent.date}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{blogContent.readTime}</span>
          </div>
        </div>

        <div className="prose max-w-none prose-lg"
             dangerouslySetInnerHTML={{ __html: blogContent.content }}>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Want to see which orders not to ship this week?</h2>
          <p className="mb-6">Get early access to Scalysis and start recovering lost margins.</p>
          <Button 
            className="bg-blue-500 hover:bg-blue-600" 
            onClick={() => {
              window.location.href = "/#get-started";
            }}
          >
            Try Scalysis Early
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
