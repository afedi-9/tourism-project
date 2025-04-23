import React from 'react'
import { Link, useNavigate } from 'react-router'
import { apiOperatorSignup } from '../../services/auth'

const OperatorSignup = () => {

  const navigate = useNavigate() //for navigation
  const handleSubmit = async (event) => {
    // prevent default submit bahaviour
    event.preventDefault();
    // show loading indicator
    // collect form data
    const data = new FormData(event.target)
    // post to backend
    try {
      const response = await apiOperatorSignup(data);
      console.log(response)
      navigate('/operatour-login');

    } catch (error) {
      console.log(error);
    }finally{
      // Hide loading indicator
    }
  }
  return (
    <div>
        {/* <!-- Tour Operator Registration Form --> */}
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
    <div>
      <h2 class="text-center text-3xl font-extrabold text-gray-900">
        Tour Operator Registration
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Register your tour business
      </p>
    </div>
    
    <form onSubmit={handleSubmit} class="mt-8 space-y-6">
      <div class="rounded-md shadow-sm space-y-4">
        {/* <!-- Business Information Section --> */}
        <div class="mb-4">
          <h3 class="text-lg font-medium text-gray-900 border-b pb-2">Business Information</h3>
        </div>
        
        <div>
          <label for="businessName" class="block text-sm font-medium text-gray-700">
            Business Name
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Your Tour Company"
          />
        </div>
        
        <div>
          <label for="location" class="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="City, Country"
          />
        </div>
        
        <div>
          <label for="servicesDescription" class="block text-sm font-medium text-gray-700">
            Services Description
          </label>
          <textarea
            id="servicesDescription"
            name="servicesDescription"
            rows="3"
            class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Describe the tour services you offer..."
          ></textarea>
        </div>
        
        <div>
          <label for="rateCard" class="block text-sm font-medium text-gray-700">
            Rate Card
          </label>
          <input
            id="rateCard"
            name="rateCard"
            type="text"
            class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="$1000-$5000"
          />
        </div>
        
        {/* <!-- Account Information Section --> */}
        <div class="mt-8 mb-4">
          <h3 class="text-lg font-medium text-gray-900 border-b pb-2">Account Information</h3>
        </div>
        
        <div>
          <label for="userName" class="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="userName"
            name="userName"
            type="text"
            class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="yourusername"
          />
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="you@example.com"
          />
        </div>
        
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="••••••••"
          />
          <p class="mt-1 text-xs text-gray-500">Password must contain at least 8 characters, including uppercase, lowercase, numbers and special characters</p>
        </div>
        
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="••••••••"
          />
        </div>
      </div>

      {/* <!-- Terms and Conditions --> */}
      <div class="flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label for="terms" class="ml-2 block text-sm text-gray-900">
          I agree to the <a href="#" class="text-blue-600 hover:text-blue-500">Terms and Conditions</a>
        </label>
      </div>

      <div>
        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Register as Tour Operator
        </button>
      </div>
      
      <div class="text-sm text-center">
        <p class="text-gray-600">
          Already registered?
          <Link to={'/operatour-login'} className='font-medium text-blue-600 hover:text-blue-500'>
          Login
          </Link>
          
         
          
        </p>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default OperatorSignup