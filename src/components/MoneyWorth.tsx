
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const MoneyWorth = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById("money-worth-section");
    
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="money-worth-section"
          className={cn(
            "max-w-6xl mx-auto",
            isVisible ? "animate-fadeIn" : "opacity-0"
          )}
        >
          <h2 className="text-5xl font-bold mb-4 text-center md:text-left">
            Get your <span className="text-purple-600">moneys</span> worth
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl text-center md:text-left">
            From financial metrics to sales and marketing data, our dashboard provides
            you with a holistic view of your business operations.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left column */}
            <div>
              <div className="mb-16">
                <h3 className="text-2xl font-semibold mb-4">Task Creation and Editing</h3>
                <p className="text-gray-700">
                  Users can easily add, edit, and delete tasks, allowing for flexible task
                  management.
                </p>
              </div>
              
              <div className="rounded-xl bg-white p-6 shadow-lg mb-16 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Hourly rate</h4>
                    <div className="flex space-x-4">
                      <div className="bg-blue-100 px-4 py-2 rounded-full text-blue-700 font-medium flex items-center gap-2">
                        <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                        $10-20
                      </div>
                      <div className="bg-gray-100 px-4 py-2 rounded-full text-gray-700 font-medium">$20-40</div>
                      <div className="bg-gray-100 px-4 py-2 rounded-full text-gray-700 font-medium">$40+</div>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Choose your skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-teal-100 px-3 py-1 rounded-full text-teal-700 text-sm">Engineering</div>
                      <div className="bg-orange-100 px-3 py-1 rounded-full text-orange-700 text-sm">Marketing</div>
                      <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-700 text-sm">UI/UX Design</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-20 -right-20">
                  <div className="w-48 h-48 bg-blue-600 rounded-full opacity-20"></div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Task Dependencies</h3>
                <p className="text-gray-700">
                  Users can establish relationships between tasks, where one task must be completed before another
                  can begin.
                </p>
              </div>
            </div>
            
            {/* Right column */}
            <div>
              <div className="mb-16">
                <h3 className="text-2xl font-semibold mb-4">Task Creation and Editing</h3>
                <p className="text-gray-700">
                  Tasks can be categorized or labeled based on projects, tags, or themes for better organization.
                </p>
                <div className="flex mt-6 -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-yellow-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-600">+2</div>
                </div>
              </div>
              
              <div className="mb-16">
                <h3 className="text-2xl font-semibold mb-4">Progress Tracking</h3>
                <p className="text-gray-700">
                  Users can track the progress of tasks, indicating whether they are incomplete, in progress, or
                  complete.
                </p>
                
                <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium">Brainstorming</h4>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
                        <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" fill="currentColor"/>
                        <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" fill="currentColor"/>
                      </svg>
                    </button>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6">
                    Initial brainstorming session with team members to derive new ideas.
                  </p>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
                    </div>
                    <div className="text-gray-500 text-sm flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 6V12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      12 comments
                    </div>
                    <div className="text-gray-500 text-sm flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      3 files
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Data Export/Integration</h3>
                <p className="text-gray-700">
                  Users may have the option to export task data or integrate the dashboard with other productivity tools or calendars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyWorth;
