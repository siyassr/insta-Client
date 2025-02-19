import React from "react";
import LeftSide from "./LeftSide";

function Profile() {
  return (
    <>
    <LeftSide/>
    <div className="flex flex-col items-center bg-black text-white min-h-screen p-6">
     
      <div className="flex flex-col items-center w-full max-w-4xl">
       
        <div className="relative">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-700 object-cover"
          />
        </div>

        <h2 className="text-xl font-semibold mt-3">Ardra</h2>
        <p className="text-gray-400 text-sm">anish</p>
        <p className="text-gray-400 text-sm">@Ardra</p>
        <p className="text-sm text-gray-500">Personal blog</p>


        <div className="flex justify-between w-full max-w-md mt-5 text-center">
          <div>
            <h3 className="font-bold text-lg">0</h3>
            <p className="text-gray-400 text-sm">Posts</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">371</h3>
            <p className="text-gray-400 text-sm">Followers</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">168</h3>
            <p className="text-gray-400 text-sm">Following</p>
          </div>
        </div>

   
        <div className="flex gap-3 mt-5">
          <button className="bg-gray-800 px-4 py-2 rounded-lg text-white text-sm hover:bg-gray-700">
            Edit Profile
          </button>
          <button className="bg-gray-800 px-4 py-2 rounded-lg text-white text-sm hover:bg-gray-700">
            View Archive
          </button>
        </div>
      </div>

     
      <div className="mt-10 w-full max-w-4xl border-t border-gray-700 pt-5">
        <div className="flex justify-center gap-6 text-gray-400">
          <span className="text-white font-bold border-b-2 border-white pb-1">
            POSTS
          </span>
          <span>SAVED</span>
          <span>TAGGED</span>
        </div>

        <div className="flex flex-col items-center mt-10">
          <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full">
            <svg
              className="w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold mt-3">Share Photos</h3>
          <p className="text-sm text-gray-400 mt-1">
            When you share photos, they will appear on your profile.
          </p>
          <button className="mt-3 text-blue-500 font-semibold">
            Share your first photo
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
