import { Search, User } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
     <nav className="bg-[#2f2e41] text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Tevily Logo" className="w-6 h-6" />
        <span className="text-xl font-bold">Tevily</span>
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

      {/* Icons */}
      <div className="flex space-x-6 text-lg">
        <Search className="cursor-pointer hover:text-orange-400" />
        <User className="cursor-pointer hover:text-orange-400" />
      </div>
    </nav>

    </div>
  )
}

export default Navbar