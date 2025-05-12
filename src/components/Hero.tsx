
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Auto-play video when component mounts with retry mechanism
    const attemptPlay = () => {
      if (videoRef.current) {
        videoRef.current.play()
          .catch(err => {
            console.log("Video autoplay prevented:", err);
            // On mobile, often needs user interaction first
            // We'll try again after a short delay
            setTimeout(attemptPlay, 1000);
          });
      }
    };
    
    attemptPlay();
    
    // Add event listener for when video can play
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('canplaythrough', attemptPlay);
      
      return () => {
        videoElement.removeEventListener('canplaythrough', attemptPlay);
      };
    }
  }, []);

  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Text Content - Now Centered */}
        <div className={`space-y-8 max-w-3xl mx-auto ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
          <div className="space-y-2">
            <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
              AI-Powered Order Selection
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The AI Powered <span className="text-gradient">RTO Solution.</span>
            </h1>
            <p className="text-xl text-gray-600 mt-4 max-w-xl mx-auto">
              Trained on your data, Scalysis picks orders that convert to real cash, not returns.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <a href="#get-started">
                Get a Precision Report 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#how-it-works">Watch Demo</a>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 justify-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                  {i}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">300+</span> businesses using Scalysis
            </p>
          </div>
        </div>

        {/* Video - Now Below Text Content */}
        <div className={`mt-12 max-w-4xl mx-auto ${isLoaded ? 'animate-slideUp animation-delay-200' : 'opacity-0'}`}>
          <div className="relative">
            <video 
              ref={videoRef}
              className="w-full rounded-xl shadow-medium"
              playsInline
              muted
              loop
              autoPlay
              preload="auto"
              controls
            >
              <source src="/fixed.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-2 right-2 px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></span>
              Live Demo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
