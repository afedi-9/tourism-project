import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router'

const TourOperatorDashboardLayouts = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-60 flex flex-col gap-y-4 w-full p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default TourOperatorDashboardLayouts