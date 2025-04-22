import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router'
import { Menu } from 'lucide-react'

const TourOperatorDashboardLayouts = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex">
      {/* Hamburger for mobile */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        onClick={toggleSidebar}
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Content */}
      <div className={`flex flex-col gap-y-4 w-full p-4 transition-all duration-300 ${
        isSidebarOpen ? "ml-60" : "ml-0"
      }`}>
        <Outlet />
      </div>
    </div>
  )
}

export default TourOperatorDashboardLayouts