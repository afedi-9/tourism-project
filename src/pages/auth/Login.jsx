import React from "react";
import { Link, useNavigate } from "react-router";
import { apiLogin } from "../../services/auth";

const Login = () => {
  const navigate = useNavigate(); //htmlFor navigation
  // define
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const res = await apiLogin(formData);
      const role = res.data.user.userType; //grabing the role
      console.log(role);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", role);

      console.log(res);

      //htmlFor navigating roles
      if (role === "tourist") {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Tourist Login
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Sign in to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="login-password"
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
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
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
                Don't have an account?
                <Link
                  to={"/signup"}
                  className="text-blue-500 hover: text-blue-600 underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
