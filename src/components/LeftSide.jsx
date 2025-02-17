// import React from 'react'
// import { GoHomeFill } from "react-icons/go";
// import { CiSearch } from "react-icons/ci";
// import { MdExplore } from "react-icons/md";
// import { MdSlowMotionVideo } from "react-icons/md";
// import { FaFacebookMessenger } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import { CiSquarePlus } from "react-icons/ci";
// import { BsFileBarGraph } from "react-icons/bs";
// import SearchBar from './SearchBar';

// function LeftSide() {
//   return (
//     <div>
//       <div className='mx-3'>
//         <div className=' ml-3 mt-9 mb-12'>
//           <h2 className='text-4xl'>GlobChat</h2>
//         </div>

//         <div className='navigateLinkPart  flex flex-col gap-2 '>


//          <div className="navLink flex gap-3 p-3 hover:bg-gray-700 rounded-lg">
//           <GoHomeFill color='white' size={28}/>
//           <h5>home</h5>
//           </div>


//          <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
//          <CiSearch color='white' size={28}/>
//          <h5> search</h5>
//           </div>

//           <SearchBar/>

//          <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
//          <MdExplore color='white' size={28}/>
//           <h5>Explore</h5>
//          </div>


//          <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
//          <MdSlowMotionVideo color='white' size={28}/>
//           <h5>Reels</h5>
//          </div>


//          <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
//          <FaFacebookMessenger color='white' size={28}/>
//           <h5>Messages</h5>
//          </div>


//          <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
//          <FaRegHeart color='white' size={28}/>
//           <h5>Notifications</h5>
//          </div>


//          <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
//          <CiSquarePlus color='white' size={28}/>
//           <h5>Create</h5>
//          </div>


//          <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
//          <BsFileBarGraph color='white' size={28}/>
//           <h5>Dashboard</h5>
//          </div>


//          <div className="navLink flex gap-3 p-3  hover:bg-gray-700 rounded-lg">
//          <GoHomeFill color='white' size={28}/>
//           <h5>Profile</h5>
//          </div>


//          {/* <div className="navLink"></div> */}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LeftSide


import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { GoHomeFill } from "react-icons/go";
import { CiSearch, CiSquarePlus } from "react-icons/ci";
import { MdExplore, MdSlowMotionVideo } from "react-icons/md";
import { FaFacebookMessenger, FaRegHeart } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
import SearchBar from './SearchBar';

function LeftSide() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div 
           className={`fixed top-0 left-0 h-full  text-white  p-5 transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
     
        <div className=' ml-3 mt-9 mb-12'>   
                  <h2 className='text-4xl'>GlobChat</h2>
        </div>

     

      <div className='flex flex-col gap-2'>
        {[
          { icon: <GoHomeFill size={28} />, label: 'Home' },
          { icon: <CiSearch size={28} />, label: 'Search' },
          { icon: <MdExplore size={28} />, label: 'Explore' },
          { icon: <MdSlowMotionVideo size={28} />, label: 'Reels' },
          { icon: <FaFacebookMessenger size={28} />, label: 'Messages' },
          { icon: <FaRegHeart size={28} />, label: 'Notifications' },
          { icon: <CiSquarePlus size={28} />, label: 'Create' },
          { icon: <BsFileBarGraph size={28} />, label: 'Dashboard' },
          { icon: <BsFileBarGraph size={28} />, label: 'Profile' },
        ].map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer"
          >
            {item.icon}
            <h5>{item.label}</h5>
          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default LeftSide;


