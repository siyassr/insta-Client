import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { BiInfoCircle } from "react-icons/bi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import { LuSticker } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";


const ChatPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
     
      <div className="flex items-center p-4 border-b border-gray-700">
        <img
          src="/mnt/data/image.png"
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
        <h2 className="ml-3 text-lg font-semibold">Ardra</h2>
        <div className="ml-auto flex space-x-4">
          <button className="text-gray-400 hover:text-white">
         <IoCallOutline size={28}/>
          </button>
          <button className="text-gray-400 hover:text-white">
            <CiVideoOn size={28}/>
          </button>
          <button className="text-gray-400 hover:text-white">
            <BiInfoCircle size={28}/>
          </button>
        </div>
      </div>

    
      <div className="flex flex-col items-center p-6">
        <img
          src="/mnt/data/image.png"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <h2 className="mt-2 text-xl font-semibold">Ardra🦋</h2>
        <p className="text-gray-400 text-sm">Anish • GlobChat</p>
        <button className="mt-2 px-4 py-1 bg-gray-700 rounded-lg">
          View Profile
        </button>
      </div>

     
      <div className="flex flex-col flex-grow p-4 space-y-4 overflow-y-auto">
        <div className="bg-gray-800 p-3 rounded-lg max-w-xs">
          <div className="text-sm font-semibold text-gray-300">
            mallu_coding
          </div>
          <img
            src="/mnt/data/image.png"
            alt="Shared Post"
            className="rounded-lg mt-2"
          />
        </div>
      </div>

    
      <div className="p-4 border-t border-gray-700 flex items-center">
      <button className="ml-2 text-gray-400 hover:text-white"><CiFaceSmile size={28}/></button>
        <input
          type="text"
          placeholder="Message..."
          className="flex-grow p-2 bg-gray-800 rounded-lg text-white outline-none"
        />
        <button className="ml-2 text-gray-400 hover:text-white"><MdOutlineKeyboardVoice size={28}/></button>
        <button className="ml-2 text-gray-400 hover:text-white"><HiOutlinePhotograph size={28}/></button>
        <button className="ml-2 text-gray-400 hover:text-white"><LuSticker size={28}/></button>
        <button className="ml-2 text-gray-400 hover:text-white"><FaRegHeart size={28}/></button>
       
      </div>
    </div>
  );
};

export default ChatPage;
