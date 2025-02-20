import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoHomeFill } from "react-icons/go";
import { CiSearch, CiSquarePlus } from "react-icons/ci";
import { MdExplore, MdSlowMotionVideo } from "react-icons/md";
import { FaFacebookMessenger, FaRegHeart } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { AiOutlineLineChart } from "react-icons/ai";
import { IoSparklesOutline } from "react-icons/io5";
import SearchBar from "./SearchBar";
import NotificationBar from "./NotificationBar";
import { useNavigate, useLocation } from "react-router-dom";
import CreatePostModal from "../Modals/CreatePostModal"

function LeftSide() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCreateDropdown, setShowCreateDropdown] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setShowNotifications(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowSearch(false);
  };

  const toggleCreateDropdown = () => setShowCreateDropdown((prev) => !prev);

  return (
    <div className="flex">
      <motion.div className="fixed top-0 left-0 h-full text-white p-5 flex flex-col items-start">
        <motion.h2 className="text-4xl mb-10">GlobChat</motion.h2>

        <div className="flex flex-col gap-2">
          {[
            { icon: <GoHomeFill size={28} />, label: "Home", action: () => navigate("/") },
            { icon: <CiSearch size={28} />, label: "Search", action: toggleSearch },
            { icon: <MdExplore size={28} />, label: "Explore"},
            { icon: <MdSlowMotionVideo size={28} />, label: "Reels" ,action: () => navigate("/reels")},
            { icon: <FaFacebookMessenger size={28} />, label: "Messages", action: () => navigate("/chat") },
            { icon: <FaRegHeart size={28} />, label: "Notifications", action: toggleNotifications },
            { icon: <CiSquarePlus size={28} />, label: "Create", action: toggleCreateDropdown },
            { icon: <BsFileBarGraph size={28} />, label: "Profile", action: () => navigate("/profile") },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer relative"
              onClick={item.action}
            >
              {item.icon}
              {!isCollapsed && location.pathname !== "/chat" && <h5>{item.label}</h5>}

              {item.label === "Create" && showCreateDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-0 mt-14 w-40 bg-gray-900 text-white rounded-lg shadow-lg p-2 z-50"
                >
                  <div className="flex flex-col">
                    {[ 
                      { icon: <CiSquarePlus size={20} />, label: "Post" , action: () => setModalType("post"),},
                      { icon: <HiOutlineVideoCamera size={20} />, label: "Live video" ,action: () => setModalType("live")},
                      // { icon: <AiOutlineLineChart size={20} />, label: "Ad" },
                   
                    ].map((option, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md cursor-pointer"
                        onClick={option.action}
                      >
                        {option.icon}
                        <span>{option.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {showSearch && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="ml-[70px] p-2 w-[400px] bg-black text-white rounded-lg absolute border-r-2 border-gray-500"
        >
          <SearchBar />
        </motion.div>
      )}

      {showNotifications && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="ml-[70px] p-2 w-[400px] bg-black text-white rounded-lg absolute border-r-2 border-gray-500"
        >
          <NotificationBar />
        </motion.div>
      )}

{modalType && <CreatePostModal isOpen={!!modalType} onClose={() => setModalType(null)} modalType={modalType} />}
    </div>
  );
}

export default LeftSide;