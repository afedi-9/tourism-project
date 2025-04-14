import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

const RootLayouts = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default RootLayouts