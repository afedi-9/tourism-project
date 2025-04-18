import React from 'react'

const Signup = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>

    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
      >
        Sign Up
      </button>

      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account? <a href="/login" className="text-orange-500 hover:underline">Login</a>
      </p>
    </form>
  </div>
</div>

    </div>
  )
}

export default Signup