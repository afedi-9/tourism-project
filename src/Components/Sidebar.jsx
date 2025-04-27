import React, { useEffect, useState } from 'react'
import K from "../constants";
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Check if screen is mobile on initial load and when resized
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth < 1024) {
        setIsOpen(false)
      } else {
        setIsOpen(true)
      }
    }

    // Check on initial load
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Clean up event listener
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      {/* Hamburger Menu Button - Always visible on mobile */}
      <button
        onClick={toggleSidebar}
        className={`lg:hidden fixed top-4 ${isOpen ? "left-64" : "left-4"} z-50 bg-teal-500 text-white p-2 rounded-md transition-all duration-300 ease-in-out`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-teal-600 z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"
        } lg:translate-x-0 lg:w-64`}
      >
        <div className="flex flex-col h-full py-6 px-4">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8 px-2">
            <span className="text-white text-xl font-bold">WanderNest</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-y-2 flex-1">
            {K.NAVLINKS.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `text-white hover:bg-teal-700 px-4 py-3 rounded-md flex items-center gap-x-3 transition-colors ${
                    isActive ? "bg-teal-700 font-medium" : ""
                  }`
                }
                onClick={isMobile ? toggleSidebar : undefined}
              >
                <link.icon size={18} />
                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Logout Button */}
          <button className="mt-auto bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md transition-colors flex items-center justify-center">
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar