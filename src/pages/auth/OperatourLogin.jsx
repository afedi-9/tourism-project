import React from 'react'
import { Link, useNavigate } from 'react-router'
import { apiOperatorLogin } from '../../services/auth';

const OperatourLogin = () => {

  const navigate= useNavigate(); // htmlFor nivagtion
  const handleSubmit = async (event) =>{
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const res = await apiOperatorLogin(formData)
      const role =res.data.role; //grabing the role from the backend
      localStorage.setItem('token', res.data.accessToken); //saving the role inside the localstorage
      localStorage.setItem('role',role); //saving the role inside the local storage

      // logic htmlFor nagivating roles
      if(role=== "operator"){
        navigate('/dashboard');
      }

      console.log(res);
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
        {/* <!-- Tour Operator Login Form --> */}
<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
    <div>
      <h2 className="text-center text-3xl font-extrabold text-gray-900">
        Tour Operator Login
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Sign in to manage your tour business
      </p>
    </div>
    
    <form onSubmit={handleSubmit}  className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm space-y-4">
        <div>
          <label htmlFor="operator-email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="operator-email"
            name="email"
            type="email"
            className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="operator-password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="operator-password"
            name="password"
            type="password"
            className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="••••••••"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="operator-remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="operator-remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign in
        </button>
      </div>
      
      <div className="text-sm text-center">
        <p className="text-gray-600">
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