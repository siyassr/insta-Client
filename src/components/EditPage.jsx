import React from "react";
import LeftSide from "./LeftSide";

const EditPage = () => {
  return (
    <>
    <LeftSide/>
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="w-full max-w-lg p-6 rounded-lg shadow-lg">
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <img
            src="https://via.placeholder.com/50" // Replace with user's profile image
            alt="Profile"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">Ardra</h2>
            <p className="text-sm text-gray-400">anish</p>
          </div>
          <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
            Change photo
          </button>
        </div>

       
        <div className="mt-6">
          <label className="block text-gray-400">Website</label>
          <input
            type="text"
            placeholder="Website"
            disabled
            className="w-full bg-gray-800 text-gray-500 px-3 py-2 rounded mt-1 cursor-not-allowed"
          />
          <p className="text-xs text-gray-500 mt-1">
            Editing your links is only available on mobile.
          </p>
        </div>

       
        <div className="mt-4">
          <label className="block text-gray-400">Bio</label>
          <textarea
            placeholder="Bio"
            className="w-full bg-gray-800 text-white px-3 py-2 rounded mt-1 h-20 resize-none"
          />
          <p className="text-xs text-gray-500 text-right">0 / 150</p>
        </div>

      
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-400">Show Threads badge</span>
          <input type="checkbox" className="toggle-checkbox" />
        </div>

    
        <div className="mt-4">
          <label className="block text-gray-400">Gender</label>
          <select className="w-full bg-gray-800 text-white px-3 py-2 rounded mt-1">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <p className="text-xs text-gray-500 mt-1">This won’t be part of your public profile.</p>
        </div>

    
        <div className="mt-4 flex justify-between items-center">
          <div>
            <span className="text-gray-400">Show account suggestions on profiles</span>
            <p className="text-xs text-gray-500">
              Choose whether people can see similar account suggestions.
            </p>
          </div>
          <input type="checkbox" className="toggle-checkbox" />
        </div>

       
        <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
          Submit
        </button>
      </div>
    </div>
    </>
  );
};

export default EditPage;
