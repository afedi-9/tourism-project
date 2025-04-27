import { useState } from "react";
import { Search, User, Menu, X } from "lucide-react";
import { Link } from "react-router";
import WanderNestLogoCard from "./WanderNestLogoCard";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [showSignupOptions, setShowSignupOptions] = useState(false);

  const handleMouseEnter = (type) => {
    setShowLoginOptions(type === "login");
    setShowSignupOptions(type === "signup");
  };

  const handleMouseLeave = () => {
    setShowLoginOptions(false);
    setShowSignupOptions(false);
  };

  // Helper function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
              <WanderNestLogoCard className="h-8 w-8" />
              <span className="text-xl font-bold text-slate-700">
                Wander<span className="text-teal-500">Nest</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Home
            </Link>
            <Link to="/destinations" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Destinations
            </Link>
            <Link to="/tours" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Tours
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-teal-500 transition-colors">
              About 
            </Link>
            
            <Link to="/contact" className="text-sm font-medium hover:text-teal-500 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4 relative group" onMouseLeave={handleMouseLeave}>
            <div
              className="text-sm font-medium px-3 py-2 rounded-md hover:bg-slate-100 cursor-pointer"
              onMouseEnter={() => handleMouseEnter("login")}
            >
              Sign In
              {showLoginOptions && (
                <div className="absolute top-10 right-0 w-48 bg-white text-black rounded shadow-lg z-50">
                  <div className="px-4 py-3 bg-gray-50">
                    <h4 className="text-xs font-semibold text-gray-500 mb-2">LOGIN AS</h4>
                    <Link to="/login" className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-blue-600">
                      Tourist
                    </Link>
                    <Link to="/operatour-login" className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-green-600">
                      Tour Operator
                    </Link>
                    <span className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-purple-600 opacity-50">
                      Admin
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div
              className="text-sm font-medium bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-md cursor-pointer"
              onMouseEnter={() => handleMouseEnter("signup")}
            >
              Sign Up
              {showSignupOptions && (
                <div className="absolute top-10 right-0 w-48 bg-white text-black rounded shadow-lg z-50">
                  <div className="px-4 py-3 bg-gray-50">
                    <h4 className="text-xs font-semibold text-gray-500 mb-2">SIGN UP AS</h4>
                    <Link to="/signup" className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-blue-600">
                      Tourist
                    </Link>
                    <Link to="/operatour-signup" className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-green-600">
                      Tour Operator
                    </Link>
                    <span className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-purple-600 opacity-50">
                      Admin
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium hover:text-teal-500 transition-colors" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/destinations" className="text-sm font-medium hover:text-teal-500 transition-colors" onClick={closeMenu}>
              Destinations
            </Link>
            <Link to="/tours" className="text-sm font-medium hover:text-teal-500 transition-colors" onClick={closeMenu}>
              Tours
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-teal-500 transition-colors" onClick={closeMenu}>
              About 
            </Link>
            <Link to="/travel-guide" className="text-sm font-medium hover:text-teal-500 transition-colors" onClick={closeMenu}>
              Travel Guide
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-teal-500 transition-colors" onClick={closeMenu}>
              Contact
            </Link>

            <div className="pt-4">
              <h4 className="text-xs font-semibold text-gray-500 mb-2">LOGIN AS</h4>
              <Link to="/login" className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-blue-600" onClick={closeMenu}>
                Tourist
              </Link>
              <Link to="/operatour-login" className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-green-600" onClick={closeMenu}>
                Tour Operator
              </Link>
              <span className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-purple-600 opacity-50">
                Admin
              </span>
            </div>

            <div className="pt-4">
              <h4 className="text-xs font-semibold text-gray-500 mb-2">SIGN UP AS</h4>
              <Link to="/signup" className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-blue-600" onClick={closeMenu}>
                Tourist
              </Link>
              <Link to="/operatour-signup" className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-green-600" onClick={closeMenu}>
                Tour Operator
              </Link>
              <span className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-purple-600 opacity-50">
                Admin
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
