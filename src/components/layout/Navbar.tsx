
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Background is either transparent when at top (if not scrolled) or our brand purple when scrolled
  const navBackground = isScrolled ? "bg-[#9b87f5]" : "bg-transparent";
  // If we're on a page with a background image, the shadow should only appear when scrolled
  const navShadow = isScrolled ? "shadow-md" : "";

  return (
    <nav className={cn(
      navBackground,
      navShadow,
      "text-white sticky top-0 z-50 transition-all duration-300"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/7bb3a010-7684-44a5-9829-b69a484e6b17.png" 
                alt="The Evolution Meeting" 
                className="h-14 w-auto fade-in" 
              />
              <span className="ml-3 text-xl font-semibold hidden md:block">The Evolution Meeting</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-gray-200 transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-200 transition-colors font-medium">About</Link>
            <Link to="/programs" className="text-white hover:text-gray-200 transition-colors font-medium">Programs</Link>
            <Link to="/events" className="text-white hover:text-gray-200 transition-colors font-medium">Events</Link>
            <Link to="/impact-stories" className="text-white hover:text-gray-200 transition-colors font-medium">Impact Stories</Link>
            <Link to="/volunteer" className="text-white hover:text-gray-200 transition-colors font-medium">Volunteer</Link>
            <Link to="/contact" className="text-white hover:text-gray-200 transition-colors font-medium">Contact</Link>
            <Button asChild className="bg-em-red hover:bg-em-red-dark ml-2">
              <Link to="/donate">Donate</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Slide down animation */}
      <div 
        className={cn(
          "md:hidden absolute w-full bg-[#9b87f5] shadow-lg transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            className="block px-3 py-2 text-white hover:bg-[#7E69AB] rounded-md"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 text-white hover:bg-[#7E69AB] rounded-md"
          >
            About
          </Link>
          <Link 
            to="/programs" 
            className="block px-3 py-2 text-white hover:bg-[#7E69AB] rounded-md"
          >
            Programs
          </Link>
          <Link 
            to="/events" 
            className="block px-3 py-2 text-white hover:bg-[#7E69AB] rounded-md"
          >
            Events
          </Link>
          <Link 
            to="/impact-stories" 
            className="block px-3 py-2 text-white hover:bg-[#7E69AB] rounded-md"
          >
            Impact Stories
          </Link>
          <Link 
            to="/volunteer" 
            className="block px-3 py-2 text-white hover:bg-[#7E69AB] rounded-md"
          >
            Volunteer
          </Link>
          <Link 
            to="/contact" 
            className="block px-3 py-2 text-white hover:bg-[#7E69AB] rounded-md"
          >
            Contact
          </Link>
          <Link 
            to="/donate" 
            className="block px-3 py-2 bg-em-red text-white hover:bg-em-red-dark rounded-md"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
