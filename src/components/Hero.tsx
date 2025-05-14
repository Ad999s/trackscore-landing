
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          {/* Purple pill button */}
          <Button 
            variant="outline" 
            size="sm" 
            className="mb-8 rounded-full bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200 px-4"
          >
            Try Scalysis Free
          </Button>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Real-time 
            <span className="text-purple-600 block md:inline"> performance </span>
            management
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            From financial metrics to sales and marketing data, our dashboard
            provides you with a holistic view of your business operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-gray-300 px-6 font-medium"
            >
              View Full Features
            </Button>
            <Button 
              size="lg" 
              className="rounded-full px-6 font-medium"
            >
              Get Access
            </Button>
          </div>
          
          {/* Brand logos */}
          <div className="w-full">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              <div className="flex justify-center">
                <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="#888888" strokeWidth="1.5"/>
                  <path d="M97 12H94M90 12H87M83 12H80M76 12H73M69 12H66M62 12H59M55 12H52M48 12H45M41 12H38M34 12H31M27 12H24" stroke="#888888" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex justify-center">
                <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="#888888" strokeWidth="1.5"/>
                  <path d="M97 12H94M90 12H87M83 12H80M76 12H73M69 12H66M62 12H59M55 12H52M48 12H45M41 12H38M34 12H31M27 12H24" stroke="#888888" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex justify-center">
                <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="#888888" strokeWidth="1.5"/>
                  <path d="M97 12H94M90 12H87M83 12H80M76 12H73M69 12H66M62 12H59M55 12H52M48 12H45M41 12H38M34 12H31M27 12H24" stroke="#888888" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex justify-center">
                <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="#888888" strokeWidth="1.5"/>
                  <path d="M97 12H94M90 12H87M83 12H80M76 12H73M69 12H66M62 12H59M55 12H52M48 12H45M41 12H38M34 12H31M27 12H24" stroke="#888888" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex justify-center">
                <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="#888888" strokeWidth="1.5"/>
                  <path d="M97 12H94M90 12H87M83 12H80M76 12H73M69 12H66M62 12H59M55 12H52M48 12H45M41 12H38M34 12H31M27 12H24" stroke="#888888" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex justify-center">
                <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="#888888" strokeWidth="1.5"/>
                  <path d="M97 12H94M90 12H87M83 12H80M76 12H73M69 12H66M62 12H59M55 12H52M48 12H45M41 12H38M34 12H31M27 12H24" stroke="#888888" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">Trusted by market-leading companies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
