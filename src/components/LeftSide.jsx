import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { MdExplore } from "react-icons/md";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { BsFileBarGraph } from "react-icons/bs";

function LeftSide() {
  return (
    <div>
      <div className='mx-3'>
        <div className=' ml-3 mt-9 mb-12'>
          <h2 className='text-4xl'>GlobChat</h2>
        </div>

        <div className='navigateLinkPart  flex flex-col gap-2 '>
         <div className="navLink flex gap-3 p-3 hover:bg-gray-700 rounded-lg">
          <GoHomeFill color='white' size={28}/>
          <h5>home</h5>
          </div>
         <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
         <CiSearch color='white' size={28}/>
         <h5> search</h5>
          </div>
         <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
         <MdExplore color='white' size={28}/>
          <h5>Explore</h5>
         </div>
         <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
         <MdSlowMotionVideo color='white' size={28}/>
          <h5>Reels</h5>
         </div>
         <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
         <FaFacebookMessenger color='white' size={28}/>
          <h5>Messages</h5>
         </div>
         <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
         <FaRegHeart color='white' size={28}/>
          <h5>Notifications</h5>
         </div>
         <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
         <CiSquarePlus color='white' size={28}/>
          <h5>Create</h5>
         </div>
         <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
         <BsFileBarGraph color='white' size={28}/>
          <h5>Dashboard</h5>
         </div>
         <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
         <GoHomeFill color='white' size={28}/>
          <h5>Profile</h5>
         </div>
         {/* <div className="navLink"></div> */}
        </div>
      </div>
    </div>
  )
}

export default LeftSide