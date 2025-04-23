import { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react'; // Or any icons you use
import { Link } from 'react-router';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showLoginOptions, setShowLoginOptions] = useState(false)
  const [showSignupOptions, setShowSignupOptions] = useState(false)

  const handleMouseEnter = (optionType) => {
    if (optionType === "login") {
      setShowLoginOptions(true)
      setShowSignupOptions(false)
    } else if (optionType === "signup") {
      setShowSignupOptions(true)
      setShowLoginOptions(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#ffffff] text-black px-6 py-4 z-50 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Tevily Logo" className="w-6 h-6" />
          <span className="text-xl font-bold">LOGO HERE</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-semibold text-sm">
          <li>
            <Link to="/" className="hover:text-orange-400 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/destinations" className="hover:text-orange-400 cursor-pointer">
              Destinations
            </Link>
          </li>
          <li>
            <Link to="/tours" className="hover:text-orange-400 cursor-pointer">
              Tours
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-400 cursor-pointer">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-400 cursor-pointer">
              About
            </Link>
          </li>
          <li className="hover:text-orange-400 cursor-pointer">News</li>
        </ul>

        {/* Icons & Hamburger */}
        <div className="flex items-center space-x-4">
          <Search className="hidden md:block cursor-pointer hover:text-orange-400" />

          <div className="relative group hidden md:block">
            <User className="cursor-pointer hover:text-orange-400" />

            {/* Updated Dropdown with Multi-step Selection */}
            <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              {/* Main Options */}
              <div className="px-4 py-3 border-b border-gray-100">
                <div
                  className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded"
                  onMouseEnter={() => handleMouseEnter("login")}
                >
                  <span>Login</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <div
                  className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded mt-1"
                  onMouseEnter={() => handleMouseEnter("signup")}
                >
                  <span>Sign Up</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Login Role Options (Sub-menu) */}
              {showLoginOptions && (
                <div className="px-4 py-3 bg-gray-50">
                  <h4 className="text-xs font-semibold text-gray-500 mb-2">SELECT ROLE TO LOGIN</h4>
                  <Link to="/login" className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-blue-600">
                    Tourist
                  </Link>
                  <Link
                    to="/operatour-login"
                    className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-green-600"
                  >
                    Tour Operator
                  </Link>
                  <span className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-purple-600 opacity-50">
                    Admin
                  </span>
                </div>
              )}

              {/* Sign Up Role Options (Sub-menu) */}
              {showSignupOptions && (
                <div className="px-4 py-3 bg-gray-50">
                  <h4 className="text-xs font-semibold text-gray-500 mb-2">SELECT ROLE TO SIGN UP</h4>
                  <Link to="/signup" className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-blue-600">
                    Tourist
                  </Link>
                  <Link
                    to="/operatour-signup"
                    className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-green-600"
                  >
                    Tour Operator
                  </Link>
                  <span className="block py-2 px-2 text-sm hover:bg-gray-100 rounded text-purple-600 opacity-50">
                    Admin
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Hamburger for mobile */}
          <button className="md:hidden focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Role-based Options */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 px-4 py-2">
          <ul className="flex flex-col space-y-4 font-semibold text-sm">
            <li>
              <Link to="/" className="hover:text-orange-400 block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/destinations" className="hover:text-orange-400 block py-2">
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/tours" className="hover:text-orange-400 block py-2">
                Tours
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-400 block py-2">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-400 block py-2">
                About
              </Link>
            </li>

            {/* Login Section */}
            <li className="py-2">
              <div className="font-bold">Login as:</div>
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link to="/login" className="hover:text-blue-600 block py-1">
                    Tourist
                  </Link>
                </li>
                <li>
                  <Link to="/operatour-login" className="hover:text-green-600 block py-1">
                    Tour Operator
                  </Link>
                </li>
                <li>
                  <span className="hover:text-purple-600 block py-1 opacity-50">Admin</span>
                </li>
              </ul>
            </li>

            {/* Sign Up Section */}
            <li className="py-2">
              <div className="font-bold">Sign Up as:</div>
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link to="/signup" className="hover:text-blue-600 block py-1">
                    Tourist
                  </Link>
                </li>
                <li>
                  <Link to="/operatour-signup" className="hover:text-green-600 block py-1">
                    Tour Operator
                  </Link>
                </li>
                <li>
                  <span className="hover:text-purple-600 block py-1 opacity-50">Admin</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}