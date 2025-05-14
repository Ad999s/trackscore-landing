
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

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
          ? "py-2 bg-white/95 backdrop-blur-sm shadow-soft"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/2bc30ab8-075f-4c60-9467-76f1eea27775.png" 
                alt="Scalysis Logo" 
                className="h-8" 
                onError={(e) => {
                  console.error("Logo failed to load");
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="text-xl font-bold">Scalysis</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="#features"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              Product
            </Link>
            <Link
              to="#how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              Features
            </Link>
            <Link
              to="#stats"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              to="#pricing"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              to="#faq"
              className="text-sm font-medium text-gray-700 hover:text-primary"
            >
              Pages+
            </Link>
            <div className="flex items-center space-x-2">
              <Link
                to="#cart"
                className="p-2 rounded-full hover:bg-gray-100 flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Button asChild variant="outline" className="rounded-full px-5 font-medium">
                <Link to="#login">Buy</Link>
              </Button>
            </div>
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
              <Button asChild>
                <a 
                  href="#get-started"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
