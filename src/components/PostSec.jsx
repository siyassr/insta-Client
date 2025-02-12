import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import Img1 from "../assets/images/image.png";
import Img2 from "../assets/images/pexels-kevin-ku-92347-577585.jpg";
import { BsBookmark } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function PostSec() {
  return (
    <div  className='mt-8 mr-28 ml-52'>
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between'>
                <div className=' flex justify-center items-center'>
                    <div className='w-10 h-10 p-1 border-2 border-blue-500 rounded-full overflow-hidden mr-3'>
                                 <img src={Img1} alt='' className='w-full h-full object-cover' />
                    </div>
                
                <h5 className='mr-2'>ardra</h5>
                <p >.36m</p>
                </div>

                <div>
                    <BsThreeDots color='white' size={24}/>
                </div>
            </div>
            <div className='rounded-md overflow-hidden'>
            <img src={Img2} alt="" />
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                <FaRegHeart color='white' size={26}/>
                <FaRegComment color='white' size={26}/>
                <BsSend color='white' size={26}/>
                </div>
                <div>
                    <BsBookmark color='white' size={26}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostSec