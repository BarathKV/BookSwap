import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center"
      style={{
        backgroundImage: `url(${require('../Assets/BG_Login.png')})`, // Path to your image
        backgroundSize: 'cover', // Ensures the image covers the entire background
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat' // Prevents the image from repeating
      }}
      >
        <div className="w-full max-w-md">
          <div className="ml-6 w-[400px] bg-white rounded-[30px] shadow-[1px_10px_4px_0_rgba(0,0,0,0.76)] p-8">
            <h2 className="text-[40px] font-bold text-center text-gray-800 mb-6">Login</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>
              <div className='flex justify-center'>
              <button
                type="submit"
                className=" w-[200px] bg-[#000B6D] hover:bg-[#0d1238] text-white font-medium py-2 px-4 rounded-md transition duration-200 my-2  "
              >
                Login
              </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Don't have an account?{' '}
                <Link
                to="/signup" // Use the "to" prop to specify the route
                className="text-blue-600 hover:underline"
              >
                Signup
              </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;