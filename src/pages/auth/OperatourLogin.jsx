import React from 'react'
import { Link } from 'react-router'

const OperatourLogin = () => {
  return (
    <div>
        {/* <!-- Tour Operator Login Form --> */}
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
    <div>
      <h2 class="text-center text-3xl font-extrabold text-gray-900">
        Tour Operator Login
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Sign in to manage your tour business
      </p>
    </div>
    
    <form class="mt-8 space-y-6">
      <div class="rounded-md shadow-sm space-y-4">
        <div>
          <label for="operator-email" class="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="operator-email"
            name="email"
            type="email"
            class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label for="operator-password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="operator-password"
            name="password"
            type="password"
            class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="••••••••"
          />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="operator-remember-me"
            name="remember-me"
            type="checkbox"
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label for="operator-remember-me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign in
        </button>
      </div>
      
      <div class="text-sm text-center">
        <p class="text-gray-600">
          Not registered yet?
          <Link to={'/operatour-signup'} className='font-medium text-blue-600 hover:text-blue-500'>
          Register as Tour Operator
          </Link>

        </p>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default OperatourLogin