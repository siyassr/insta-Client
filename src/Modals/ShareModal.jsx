import React, { useState } from "react";
import { FaFacebook, FaWhatsapp, FaEnvelope, FaLink, FaXTwitter, FaFacebookMessenger } from "react-icons/fa6";
import Img1 from "../assets/images/image.png";

const users = [
  { id: 1, name: "Ajaz", image: Img1 },
  { id: 2, name: "صابر خان",  image: Img1 },
  { id: 3, name: "Dhanush 🍿",  image: Img1 },
  { id: 4, name: "Rahul",  image: Img1},
  { id: 5, name: "REENA",  image: Img1 },
  { id: 6, name: "Nanda S Nair🦋∞",  image: Img1 },
  { id: 7, name: "Muhammad Shafi", image: Img1 },
  { id: 8, name: "Devu✨",  image: Img1 },
];

const ShareModal = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1c1c1c] text-white w-[450px] md:w-[550px] rounded-lg shadow-lg p-4">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-600 pb-2">
          <h2 className="text-lg font-semibold">Share</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[#2c2c2c] text-white p-2 mt-3 rounded-lg focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* User List */}
        <div className="max-h-[250px] overflow-y-auto mt-4">
          <div className="grid grid-cols-3 gap-3">
            {users
              .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
              .map((user) => (
                <div key={user.id} className="flex flex-col items-center cursor-pointer">
                  <img src={user.image} alt={user.name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-500" />
                  <p className="text-sm mt-2 text-center">{user.name}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Share Options */}
        <div className="flex justify-between items-center border-t border-gray-600 pt-3 mt-3">
            <div className="text-center">
          <button className="flex items-center space-x-2 text-gray-300 bg-gray-800 hover:text-white h-[60px] w-[60px] justify-center rounded-full">
            <FaLink size={24} /> 
          </button>
          <span className="text-sm">Copy link</span>
            </div>
            <div className="text-center">

          <button className="flex items-center space-x-2 text-gray-300 bg-gray-800 hover:text-white h-[60px] w-[60px] justify-center rounded-full">
            <FaFacebook size={24} /> 
          </button>
          <span className="text-sm">Facebook</span>
            </div>
            <div className="text-center">

          <button className="flex items-center space-x-2 text-gray-300 bg-gray-800 hover:text-white h-[60px] w-[60px] justify-center rounded-full">
            <FaFacebookMessenger size={24} /> 
          </button>
          <span className="text-sm">Messenger</span>
            </div>
            <div className="text-center">

          <button className="flex items-center space-x-2 text-gray-300 bg-gray-800 hover:text-white h-[60px] w-[60px] justify-center rounded-full">
            <FaWhatsapp size={24} /> 
          </button>
          <span className="text-sm">WhatsApp</span>
            </div>
            <div className="text-center">

          <button className="flex items-center space-x-2 text-gray-300 bg-gray-800 hover:text-white h-[60px] w-[60px] justify-center rounded-full">
            <FaEnvelope  size={24}/> 
          </button>
          <span className="text-sm">Email</span>
            </div>

            <div className="text-center">
          <button className="flex items-center space-x-2 text-gray-300 bg-gray-800 hover:text-white h-[60px] w-[60px] justify-center rounded-full">
            <FaXTwitter size={24} /> 
          </button>
          <span className="text-sm">X</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
