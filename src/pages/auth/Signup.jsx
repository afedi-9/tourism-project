import React from "react";
import { Link, useNavigate } from "react-router";
import { apiSignup } from "../../services/auth";

const Signup = () => {
  const navigate = useNavigate() //For navigation
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    try {
      const response = await apiSignup(formData);
      const role = response.data.role; //grabing the role
      console.log(response)
      navigate('/login');
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
    <div>
      <h2 className="text-center text-3xl font-extrabold text-gray-900">
        Tourist Registration
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Register to explore amazing destinations
      </p>
    </div>
    
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm space-y-4">
        <div>
          <label htmlFor="fullName" className ="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="userName" className ="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="userName"
            name="userName"
            type="text"
            className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="johndoe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className ="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="password" className ="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="••••••••"
          />
        </div>
        
        <div>
          <label htmlFor="confirmPassword" className ="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="••••••••"
          />
        </div>
        
        <div>
          <label htmlFor="phoneNumber" className ="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="1234567890"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Register
        </button>
      </div>
      
      <div className="text-sm text-center">
        <p className="text-gray-600">
          Already have an account?

          <Link to={"/login"} className="text-blue-500 hover: text-blue-500 underline">
                Login
              </Link>
          
        </p>
      </div>
    </form>
  </div>
</div>

</div>
      
  );
};

export default Signup;
