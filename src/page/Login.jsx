import React from 'react'
import { FaFacebook } from "react-icons/fa";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black" >
        <div className='w-80'>
        <div className=" border p-6 shadow-lg text-white text-center">
        <h1 className="text-4xl  text-center mb-10 logo ">Instagram</h1>
        
       

       

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
       
        </div>


        <button className="w-full bg-blue-600 text-white py-2 mt-3 rounded-md font-semibold hover:bg-blue-500">
          Log in 
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-700" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-700" />
        </div>
  <div className='flex flex-col text-center '>

 
        <a className=" text-white py-2  font-semibold hover:text-blue-500 text-center mb-3 flex items-center justify-center gap-2">
          <FaFacebook size={24} color='blue'/>
          Log in with Facebook
        </a>
       

        <a href="/forget" className=''>Forgot password?</a>
        </div>

       
      </div>
      <div className="mt-4 text-center text-sm border p-6   ">
          <span className="text-gray-400">  Don't have an account? </span> 
          <a href="/register" className="text-500 font-semibold ml-1 text-blue-500">Sign up</a>
        
        </div>
        </div>
    
    </div>
  )
}

export default Login