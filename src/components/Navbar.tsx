
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-2 glass-morphism shadow-soft"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-10 sm:px-10 lg:px-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <img 
                src="https://framerusercontent.com/images/qOi3xuJUI1I1c13AATXI63xs.png?" 
                alt="Scalysis Logo" 
                className="h-20" 
                onError={(e) => {
                  console.error("Logo failed to load");
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="text-xl font-semibold text-gray-800"></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#stats"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Results
            </a>
            <Button asChild variant="ghost">
              <a
                href="#contact"
                className="text-sm font-medium"
              >
                Contact
              </a>
            </Button>
            <InteractiveHoverButton 
              text="Get Started" 
              className="w-32 bg-blue-600 text-white hover:bg-blue-600 border-blue-600"
              onClick={() => window.location.href = "#get-started"}
            />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 hover:text-primary"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#stats"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Results
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <InteractiveHoverButton 
                text="Get Started" 
                className="w-32 bg-blue-600 text-white hover:bg-blue-600 border-blue-600"
                onClick={() => {
                  window.location.href = "#get-started";
                  setIsMobileMenuOpen(false);
                }}
              />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
