
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleCTAClick = () => {
    if (window.location.pathname === "/") {
      // We're already on the home page, scroll to the form
      document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the home page and to the form
      window.location.href = "/#get-started";
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-1 sm:py-2 glass-morphism shadow-soft"
          : "py-2 sm:py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a onClick={handleLogoClick} className="flex items-center space-x-2 cursor-pointer">
              <img 
                src="https://framerusercontent.com/images/qOi3xuJUI1I1c13AATXI63xs.png?" 
                alt="Scalysis Logo" 
                className="h-14 sm:h-20" 
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
            <ShimmerButton 
              background="rgba(37, 99, 235, 1)" 
              shimmerColor="rgba(255, 255, 255, 0.4)"
              className="w-auto px-5 text-white"
              onClick={handleCTAClick}
            >
              <span className="text-sm font-medium">Try Scalysis Early</span>
            </ShimmerButton>
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

        {/* Mobile Navigation - With Frosted Glass Effect */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fadeIn">
            <nav className="flex flex-col space-y-4 backdrop-blur-md bg-white/70 rounded-lg p-4 border border-gray-200/50 shadow-md">
              <a
                href="#features"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors px-2 py-1.5 rounded-md hover:bg-gray-100/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors px-2 py-1.5 rounded-md hover:bg-gray-100/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#stats"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors px-2 py-1.5 rounded-md hover:bg-gray-100/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Results
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors px-2 py-1.5 rounded-md hover:bg-gray-100/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <ShimmerButton 
                background="rgba(37, 99, 235, 1)" 
                shimmerColor="rgba(255, 255, 255, 0.4)"
                className="w-full text-white"
                onClick={() => {
                  handleCTAClick();
                  setIsMobileMenuOpen(false);
                }}
              >
                <span className="text-sm font-medium">Try Scalysis Early</span>
              </ShimmerButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
