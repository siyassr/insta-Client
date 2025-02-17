
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoHomeFill } from "react-icons/go";
import { CiSearch, CiSquarePlus } from "react-icons/ci";
import { MdExplore, MdSlowMotionVideo } from "react-icons/md";
import { FaFacebookMessenger, FaRegHeart } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
import SearchBar from "./SearchBar";
import NotificationBar from "./NotificationBar";

function LeftSide() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activePanel, setActivePanel] = useState(null); 

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const togglePanel = (panel) => {
    setActivePanel((prev) => (prev === panel ? null : panel));
    if (activePanel !== panel) setIsCollapsed(true); 
  };

  return (
    <div className="flex">

      <motion.div
        animate={{ width: isCollapsed ? 250 : 250 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full text-white p-5 flex flex-col items-start"
      >

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="text-4xl mb-10"
        >
          GlobChat
        </motion.h2>


        <div className="flex flex-col gap-2">
          {[
            { icon: <GoHomeFill size={28} />, label: "Home" },
            { icon: <CiSearch size={28} />, label: "Search", action: () => togglePanel("search") },
            { icon: <MdExplore size={28} />, label: "Explore" },
            { icon: <MdSlowMotionVideo size={28} />, label: "Reels" },
            { icon: <FaFacebookMessenger size={28} />, label: "Messages" },
            { icon: <FaRegHeart size={28} />, label: "Notifications", action: () => togglePanel("notifications") },
            { icon: <CiSquarePlus size={28} />, label: "Create" },
            { icon: <BsFileBarGraph size={28} />, label: "Dashboard" },
            { icon: <BsFileBarGraph size={28} />, label: "Profile" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer"
              onClick={item.action}
            >
              {item.icon}
              {!isCollapsed && <h5>{item.label}</h5>}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {activePanel === "search" && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="ml-[80px] p-2 w-[400px] bg-black text-white rounded-lg absolute border-r-2 border-gray-500"
        >
          <SearchBar />
        </motion.div>
      )}

      {activePanel === "notifications" && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="ml-[80px] p-2 w-[400px] bg-black text-white rounded-lg absolute border-r-2 border-gray-500"
        >
          <NotificationBar />
        </motion.div>
      )}
    </div>
  );
}

export default LeftSide;

