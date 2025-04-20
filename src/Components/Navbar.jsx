import { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react'; // Or any icons you use
import { Link } from 'react-router';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#2f2e41] text-white px-6 py-4 z-50 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Tevily Logo" className="w-6 h-6" />
          <span className="text-xl font-bold">LOGO HERE</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-semibold text-sm">
          <Link to={'/'}className="hover:text-orange-400 cursor-pointer">Home</Link>
          
          <li className="hover:text-orange-400 cursor-pointer">Destinations</li>
          <li className="hover:text-orange-400 cursor-pointer">Tours</li>
          <li className="hover:text-orange-400 cursor-pointer">Pages</li>
          <li className="hover:text-orange-400 cursor-pointer">News</li>
          <li className="hover:text-orange-400 cursor-pointer">Contact</li>
        </ul>

        {/* Icons & Hamburger */}
        <div className="flex items-center space-x-4">
          <Search className="hidden md:block cursor-pointer hover:text-orange-400" />

          <div className="relative group hidden md:block">
            <User className="cursor-pointer hover:text-orange-400" />
            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <Link to="/login" className="block px-4 py-2 text-sm hover:bg-gray-100">Login</Link>
              <Link to="/signup" className="block px-4 py-2 text-sm hover:bg-gray-100">Sign Up</Link>
            </div>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden mt-4 space-y-4 font-semibold text-sm">
          <li className="hover:text-orange-400 cursor-pointer">Home</li>
          <li className="hover:text-orange-400 cursor-pointer">Destinations</li>
          <li className="hover:text-orange-400 cursor-pointer">Tours</li>
          <li className="hover:text-orange-400 cursor-pointer">Pages</li>
          <li className="hover:text-orange-400 cursor-pointer">News</li>
          <li className="hover:text-orange-400 cursor-pointer">Contact</li>
          <Link to="/login" className="hover:text-orange-400 block">Login</Link>
          <Link to="/signup" className="hover:text-orange-400 block">Sign Up</Link>
        </ul>
      )}
    </nav>
  );
}
