
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#482683] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/389bbe33-4636-49d1-a3f0-27cc7fe663a6.png" alt="The Evolution Meeting" className="h-14 w-auto" />
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
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#482683] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-white hover:bg-purple-800 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-white hover:bg-purple-800 rounded-md"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/programs" 
              className="block px-3 py-2 text-white hover:bg-purple-800 rounded-md"
              onClick={toggleMenu}
            >
              Programs
            </Link>
            <Link 
              to="/events" 
              className="block px-3 py-2 text-white hover:bg-purple-800 rounded-md"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link 
              to="/impact-stories" 
              className="block px-3 py-2 text-white hover:bg-purple-800 rounded-md"
              onClick={toggleMenu}
            >
              Impact Stories
            </Link>
            <Link 
              to="/volunteer" 
              className="block px-3 py-2 text-white hover:bg-purple-800 rounded-md"
              onClick={toggleMenu}
            >
              Volunteer
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-white hover:bg-purple-800 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link 
              to="/donate" 
              className="block px-3 py-2 bg-em-red text-white hover:bg-em-red-dark rounded-md"
              onClick={toggleMenu}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
