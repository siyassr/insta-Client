

import React from 'react';
import { FaFacebook } from "react-icons/fa";
function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black" >
        <div className="w-80">
        <div className=" border p-6 shadow-lg text-white">
        <h1 className="text-4xl  text-center mb-2 logo">Instagram</h1>
        <p className="text-bold text-gray-400 text-center mb-4">
          Sign up to see photos and videos <br/> from your friends.
        </p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-500 flex items-center justify-center gap-2">
          <FaFacebook/>
          Log in with Facebook
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-700" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        <div className="space-y-2">
          <input
            type="text"
            placeholder="Mobile number or email"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <p className="text-xs text-gray-500 mt-3 text-center">
          People who use our service may have uploaded your contact information to Instagram. <span className="text-blue-500 cursor-pointer">Learn More</span>
        </p>
        <p className="text-xs text-gray-500 mt-2 text-center">
          By signing up, you agree to our <span className="text-blue-500 cursor-pointer">Terms</span>, <span className="text-blue-500 cursor-pointer">Privacy Policy</span>, and <span className="text-blue-500 cursor-pointer">Cookies Policy</span>.
        </p>

        <button className="w-full bg-blue-600 text-white py-2 mt-3 rounded-md font-semibold hover:bg-blue-500">
          Sign up
        </button>

       
      </div>
      <div className="mt-4 text-center text-sm border p-6">
          <span className="text-gray-400">Have an account?</span> 
          <a href="/login" className="text-500 font-semibold ml-1 text-blue-500">Log in</a>
        </div>
        </div>
      
    </div>
  );
}

export default Register;
