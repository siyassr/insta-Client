import React from 'react'
import Img1 from "../assets/images/image.png";
function RightSide() {
  return (
    <div className='ml-28 mt-9 mr-28'>
      <div>
        <div className='flex  justify-between items-center mb-8'>
          <div className='flex gap-3 items-center'>

          <img src={Img1} alt="" className='h-12 w-12 rounded'/>
          <div>
            <h5 className='text-sm'>Ardra</h5>
            <p className='text-[14px] text-gray-500'>anish</p>
          </div>
          </div>
          <a href="" className='text-blue-700'>Switch</a>
        </div>



        <div className='flex justify-between my-4'>
          <h4 className='text-gray-500  font-bold'>Suggested for you</h4>
          <a href="" className='text-white'> See All</a>
        </div>


        <div className='flex flex-col gap-3'>
           {[...Array(5)].map((_, index) => (
             <div className='flex  justify-between items-center'>
             <div className='flex gap-3 items-center'>
   
             <img src={Img1} alt={`story-${index}`}  className='h-12 w-12 rounded'/>
             <div>
               <h5 className='text-sm'>Ardra</h5>
               <p className='text-[14px] text-gray-500'>followed by</p>
             </div>
             </div>
             <a href="" className='text-blue-700'>Follow</a>
           </div>

            ))}
        </div>
      </div>
    </div>
  )
}

export default RightSide