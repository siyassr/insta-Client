// import React from 'react'
// import { BsThreeDots } from "react-icons/bs";
// import Img1 from "../assets/images/image.png";
// import Img2 from "../assets/images/pexels-kevin-ku-92347-577585.jpg";
// import { BsBookmark } from "react-icons/bs";
// import { BsSend } from "react-icons/bs";
// import { FaRegComment } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import Modal from "../Modals/Modal"
// import { useState } from 'react';

// function PostSec() {
//   const [open,setOpen] = useState(false)

//   const handleOpen = () => setOpen(true); 
//   const handleClose = () => setOpen(false);
//   return (
//     <>
//     <div  className='mt-8 mr-28 ml-52'>
//         <div className='flex flex-col gap-3'>
//             <div className='flex justify-between'>
//                 <div className=' flex justify-center items-center'>
//                     <div className='w-10 h-10 p-1 border-2 border-blue-500 rounded-full overflow-hidden mr-3'>
//                                  <img src={Img1} alt='' className='w-full h-full object-cover' />
//                     </div>
                
//                 <h5 className='mr-2'>ardra</h5>
//                 <p >.36m</p>
//                 </div>

//                 <div>
//                     <BsThreeDots color='white' size={24} onClick={handleOpen}/>
//                 </div>
//             </div>
//             <div className='rounded-md overflow-hidden'>
//             <img src={Img2} alt="" />
//             </div>
//             <div className='flex justify-between'>
//                 <div className='flex gap-4'>
//                 <FaRegHeart color='white' size={26}/>
//                 <FaRegComment color='white' size={26}/>
//                 <BsSend color='white' size={26}/>
//                 </div>
//                 <div>
//                     <BsBookmark color='white' size={26}/>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <Modal open={open} handleClose={handleClose} />
//     </>
//   )
// }

// export default PostSec
import React, { useState } from "react";
import { BsThreeDots, BsBookmark, BsSend } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";

import Img1 from "../assets/images/image.png";
import Img2 from "../assets/images/pexels-kevin-ku-92347-577585.jpg";
import Modal from "../Modals/Modal"


function PostSec() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* <div className="mt-8 mr-28 ml-52">
        <div className="flex flex-col gap-3">
         
          <div className="flex justify-between">
            <div className="flex justify-center items-center">
              <div className="w-10 h-10 p-1 border-2 border-blue-500 rounded-full overflow-hidden mr-3">
                <img src={Img1} alt="profile" className="w-full h-full object-cover" />
              </div>
              <h5 className="mr-2">ardra</h5>
              <p>.36m</p>
            </div>
            <div>
              <BsThreeDots color="white" size={24} onClick={handleOpen} className="cursor-pointer" />
            </div>
          </div>

        
          <div className="rounded-md overflow-hidden">
            <img src={Img2} alt="post" />
          </div>

        
          <div className="flex justify-between">
            <div className="flex gap-4">
              <FaRegHeart color="white" size={26} />
              <FaRegComment color="white" size={26} />
              <BsSend color="white" size={26} />
            </div>
            <div>
              <BsBookmark color="white" size={26} />
            </div>
          </div>
        </div>
      </div> */}
          <div className="bg-black text-white p-4 rounded-md max-w-md mx-auto mt-8">
        {/* Post Header */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <div className="w-10 h-10 border-2 border-red-500 rounded-full overflow-hidden mr-3">
              <img src={Img1} alt="profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h5 className="text-sm font-semibold">dra_cul_</h5>
              <p className="text-xs text-gray-400">1h</p>
            </div>
          </div>
          <BsThreeDots color="white" size={24} onClick={handleOpen} className="cursor-pointer" />
        </div>

        {/* Post Image */}
        <div className="rounded-md overflow-hidden">
          <img src={Img2} alt="post" className="w-full" />
        </div>

        {/* Post Actions */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-4">
            <FaRegHeart color="white" size={26} className="cursor-pointer" />
            <FaRegComment color="white" size={26} className="cursor-pointer" />
            <BsSend color="white" size={26} className="cursor-pointer" />
          </div>
          <BsBookmark color="white" size={26} className="cursor-pointer" />
        </div>

        {/* Likes & Comments */}
        <div className="mt-2">
          <p className="text-sm">
            Liked by <span className="font-bold">ajay_das_c_j</span> and others
          </p>
          <p className="text-sm">
            <span className="font-bold">dra_cul_</span> ✨ ... more
          </p>
          <p className="text-gray-400 text-sm cursor-pointer">View all 4 comments</p>
        </div>

        {/* Comment Input */}
        <div className="mt-2 border-t border-gray-700 pt-2">
          <input
            type="text"
            placeholder="Add a comment..."
            className="bg-transparent text-white text-sm w-full outline-none"
          />
        </div>
      </div>
      <Modal open={open} handleClose={handleClose} />
  </>
  );
}

export default PostSec;



