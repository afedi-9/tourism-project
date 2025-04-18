import { Search, User } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav className="bg-[#2f2e41] text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Tevily Logo" className="w-6 h-6" />
        <span className="text-xl font-bold">LOGO HERE</span>
      </div>
  
      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 font-semibold text-sm">
        <li className="hover:text-orange-400 cursor-pointer">Home</li>
        <li className="hover:text-orange-400 cursor-pointer">Destinations</li>
        <li className="hover:text-orange-400 cursor-pointer">Tours</li>
        <li className="hover:text-orange-400 cursor-pointer">Pages</li>
        <li className="hover:text-orange-400 cursor-pointer">News</li>
        <li className="hover:text-orange-400 cursor-pointer">Contact</li>
      </ul>
  
      {/* Icons with Dropdown */}
      <div className="flex space-x-6 text-lg items-center">
        <Search className="cursor-pointer hover:text-orange-400" />
        
        {/* User Icon with dropdown */}
        <div className="relative group">
          <User className="cursor-pointer hover:text-orange-400" />
          
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
            <a href="/login" className="block px-4 py-2 text-sm hover:bg-gray-100">Login</a>
            <a href="/signup" className="block px-4 py-2 text-sm hover:bg-gray-100">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  
  )
}

export default Navbar