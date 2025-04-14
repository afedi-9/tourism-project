import React from 'react'

const ManageBookings = () => {
  return (
    <div>

<div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Tour Booking Management</h1>
        <span className="bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm">Admin Dashboard</span>
      </header>

      {/* Navigation Tabs */}
      <nav className="flex space-x-6 border-b pb-4 text-gray-600 font-semibold">
        <div className="border-b-4 border-yellow-400 pb-1 text-gray-900">Bookings</div>
        <div className="hover:text-gray-900 cursor-pointer">New Booking</div>
        <div className="hover:text-gray-900 cursor-pointer">Tours</div>
        <div className="hover:text-gray-900 cursor-pointer">Customers</div>
        <div className="hover:text-gray-900 cursor-pointer">Reports</div>
      </nav>

      {/* Search and Filters */}
      <section className="mt-6 space-y-4">
        <div className="flex items-center gap-4">
          <input type="text" placeholder="Search bookings..." className="flex-grow border p-2 rounded-md" />
          <button className="bg-yellow-400 text-white px-4 py-2 rounded-md font-semibold">Search</button>
        </div>

        <div className="flex flex-wrap gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <select className="border p-2 rounded-md">
              <option>All Dates</option>
              <option>Today</option>
              <option>This Week</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select className="border p-2 rounded-md">
              <option>All</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tour</label>
            <select className="border p-2 rounded-md">
              <option>All Tours</option>
              <option>Cape Coast Tour</option>
              <option>Mountain Adventure</option>
            </select>
          </div>
        </div>
      </section>

      {/* Bookings Table */}
      <section className="mt-10">
        <table className="w-full border border-gray-200 text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Booking ID</th>
              <th className="p-3">Tour</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Date</th>
              <th className="p-3">Travelers</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-3">B001</td>
              <td className="p-3">Cape Coast Tour</td>
              <td className="p-3">John Smith</td>
              <td className="p-3">2025-04-17</td>
              <td className="p-3">2</td>
              <td className="p-3">$400</td>
              <td className="p-3">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">Confirmed</span>
              </td>
              <td className="p-3">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">View</button>
              </td>
            </tr>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-3">B002</td>
              <td className="p-3">Mountain Adventure</td>
              <td className="p-3">Ama Owusu</td>
              <td className="p-3">2025-04-20</td>
              <td className="p-3">1</td>
              <td className="p-3">$220</td>
              <td className="p-3">
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-bold">Pending</span>
              </td>
              <td className="p-3">
  <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400">
    <option>Confirmed</option>
    <option>Pending</option>
    <option>Rejected</option>
  </select>
</td>

            </tr>
          </tbody>
        </table>
      </section>
    </div>
    </div>
  )
}

export default ManageBookings