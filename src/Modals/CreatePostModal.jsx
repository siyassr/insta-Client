import React, { useRef } from "react";
import { motion } from "framer-motion";

const CreatePostModal = ({ isOpen, onClose, modalType }) => {
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-gray-900 p-6 rounded-lg w-[450px] text-white shadow-lg">
        {/* Post Modal */}
        {modalType === "post" && (
          <>
            <h2 className="text-center text-lg font-semibold">Create new post</h2>
            <div className="mt-5 flex flex-col items-center justify-center border border-gray-700 rounded-lg p-10">
              <img src="/upload-icon.png" alt="Upload" className="w-16 h-16 opacity-50" />
              <p className="mt-2">Drag photos and videos here</p>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={(e) => console.log(e.target.files[0])}
              />
              <button
                className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={handleButtonClick}
              >
                Select from computer
              </button>
            </div>
          </>
        )}

        {/* Live Video Modal */}
        {modalType === "live" && (
          <>
            <h2 className="text-center text-lg font-semibold">Live video</h2>
            <div className="mt-5 flex flex-col items-center justify-center border border-gray-700 rounded-lg p-8">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25V9m9 0h1.5A2.25 2.25 0 0120.25 11.25v5.25A2.25 2.25 0 0118 18.75h-1.5m-9 0H5.25A2.25 2.25 0 013 16.5v-5.25A2.25 2.25 0 015.25 9H6.75m9 9v3m-9-3v3"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">Add live video details</h3>
              <p className="mt-2 text-center text-gray-400 text-sm">
                Go live by connecting to your choice of streaming software. To get started, add a title and select the audience for your live video.
              </p>

              <input
                type="text"
                placeholder="Add a title..."
                className="mt-4 w-full p-2 bg-black border border-gray-600 rounded-md text-white text-sm focus:outline-none"
              />

              <div className="mt-3 w-full flex items-center justify-between p-2 bg-gray-800 border border-gray-600 rounded-md cursor-pointer">
                <span className="text-sm">Audience</span>
                <span className="text-xs text-gray-400">▼</span>
              </div>

              <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md opacity-50 cursor-not-allowed">
                Next
              </button>
            </div>
          </>
        )}

        {/* Close Button */}
        <button onClick={onClose} className="mt-5 w-full py-2 bg-gray-700 text-white rounded-md">
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default CreatePostModal;
