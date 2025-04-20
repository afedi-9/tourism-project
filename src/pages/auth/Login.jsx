import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div>
      <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login to Your Account</h2>

    <form className="space-y-4">
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

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="form-checkbox text-orange-500" />
          Remember me
        </label>
        <a href="#" className="text-orange-500 hover:underline">Forgot password?</a>
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
      >
        Login
      </button>

      <p className="text-center text-sm text-gray-600 mt-4">
        Don’t have an account? <Link to={'/signup'} className="text-orange-500 hover:underline">Sign up
        </Link> 
      </p>
    </form>
  </div>
</div>

    </div>
    </div>
  )
}

export default Login