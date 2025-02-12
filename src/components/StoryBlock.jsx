
import React from 'react';
    import Img1 from "../assets/images/image.png";

function StoryBlock() {
  return (
    <div className='mt-5 ml-32'>
      <div className='flex gap-4 w-[730px] story overflow-x-scroll whitespace-nowrap scrollbar-hidden p-2'>
        {[...Array(16)].map((_, index) => (
          <div key={index} className="flex flex-col justify-center items-center min-w-[66px]">
            <div className='w-16 h-16 p-1 border-2 border-blue-500 rounded-full overflow-hidden'>
              <img src={Img1} alt={`story-${index}`} className='w-full h-full object-cover' />
            </div>
            <h5 className='mt-2 text-sm'>Ardra</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryBlock;
