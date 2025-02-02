import React from 'react'
import { CiLock } from "react-icons/ci";
import { Link } from 'react-router-dom';
function Forget() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black" >
    <div className='w-80'>

    <div className=" border   items-center shadow-lg text-white text-centerm pt-6">
     
     <div className='flex justify-center items-center border w-[100px] h-[100px] ml-28 rounded-full  '>
       <CiLock size={40}/>
     </div>
     
    <h1 className="text-xl font-bold  text-center mb-6 px-6 pt-3">Trouble with logging in ?</h1>

    <p className='px-6 mb-6 text-center'>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
    
   

   

    <div className="space-y-2 px-6">
      <input
        type="text"
        placeholder="Mobile number or email"
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500 mb-3"
      />
     
     <button className=" px-6 w-full bg-blue-600 text-white py-2 mt-6 rounded-md font-semibold hover:bg-blue-500 ">
      send Login link
    </button>
    </div>




    <div className="flex items-center my-4 px-6">
      <hr className="flex-grow border-gray-700" />
      <span className="px-2 text-gray-500">OR</span>
      <hr className="flex-grow border-gray-700" />
    </div>
<div className='flex flex-col text-center '>


    <a href='/register' className=" text-white py-2  font-semibold hover:text-gray-500 text-center mb-3">
      Create new account
    </a>
 
    </div>
<Link to={'/login'}>
    <button  className='w-full bg-gray-900 text-white py-2 mt-3  font-semibold hover:text-gray-500'>
        
    Back to Login
    </button>
</Link>
  </div>


    </div>

</div>
  )
}

export default Forget