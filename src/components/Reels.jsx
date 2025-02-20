import React, { useState } from 'react';
import LeftSide from './LeftSide';
import { BsThreeDots, BsBookmark, BsSend } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import Video1 from "../assets/images/AQNUi_nLrqXtXQoqAerzqvC21gMDYhfIfQEGUdwIDD3dqOGTVXKaxU-t0ipko4fRkOHAS6mLEj98eEe7b8Fu-v9T3damv66Sk9cgdZ8.mp4"
import ShareModal from '../Modals/ShareModal';
import Img1 from "../assets/images/image.png";
import CommentModal from '../Modals/CommentModal';

function Reels() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  return (
    <>
    <LeftSide/>
    <div className="flex justify-center items-center min-h-screen bg-black">
      {/* Reel Container */}
      <div className="relative w-[400px] h-[650px]  overflow-hidden  shadow-lg">
        
        {/* Image */}
        <video 
            src={Video1} 
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            controls
          ></video>

        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 ">
          {/* Profile Section */}
          <div className="flex items-center mb-2">
            <img 
              src="https://via.placeholder.com/40" // Replace with the profile image URL
              alt="Profile"
              className="w-8 h-8 rounded-full border border-white"
            />
            <p className="text-white font-semibold ml-2">@yours_playlist_</p>
            <button className="ml-6 text-blue-400 text-sm border p-1 rounded-lg">Follow</button>
          </div>

          {/* Caption */}
          <p className="text-gray-300 text-sm">Dear Comrade ❤️</p>

          {/* Music Info */}
          <div className="flex items-center mb-5">
            <div className="w-4 h-4 bg-white rounded-full animate-spin mr-2"></div>
            <p className="text-gray-400 text-xs">🎵 PURE - Adiga (Violin Instrumental)</p>
          </div>
        </div>

        {/* Side Icons */}
        <div className="absolute right-2 bottom-20 flex flex-col gap-4 text-white">
          <div className="flex flex-col items-center">
            <button className="text-lg"><FaRegHeart size={28}/></button>
            <span className="text-xs">134</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="text-lg" onClick={() => setIsCommentsOpen(true)}><FaRegComment size={28}/></button>
            <span className="text-xs">12</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="text-lg"  onClick={() => setIsModalOpen(true)}><BsSend size={28}/></button>
    
          </div>
          <div className="flex flex-col items-center">
            <button className="text-lg"><BsBookmark size={28}/></button>
          
          </div>
          <div className="flex flex-col items-center">
            <button className="text-lg"><BsThreeDots size={28}/></button>
          
          </div>
        </div>

      </div>
    </div>
    <ShareModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
   <CommentModal isOpen={isCommentsOpen} onClose={() => setIsCommentsOpen(false)}/>
    </>
  );
}

export default Reels;
