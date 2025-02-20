

import React from "react";
import LeftSide from "./LeftSide";
import { FaPlay } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import img1 from "../assets/images/images (1).jpg";
import img2 from "../assets/images/images.jpg";
import img3 from "../assets/images/woman-beach-with-her-baby-enjoying-sunset_52683-144131.avif";
import img4 from "../assets/images/images (2).jpg";
import img5 from "../assets/images/images (3).jpg";
import img6 from "../assets/images/images (4).jpg";

const posts = [
  { id: 1, src: img1, type: "image", size: "small" },
  { id: 2, src: img2, type: "video", size: "large" },
  { id: 3, src: img3, type: "image", size: "small" },
  { id: 4, src: img4, type: "video", size: "small" },
  { id: 5, src: img5, type: "image", size: "large" },
  { id: 6, src: img6, type: "image", size: "small" },
];

const Explore = () => {
  return (
    <>
      <LeftSide />
      <div className="p-4 max-w-6xl ml-96 mr-48 mt-11">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`relative group ${
                post.size === "large" ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={post.src}
                alt="Post"
                className="w-full h-full object-cover aspect-[4/5] hover:opacity-80 transition-all duration-300"
              />
              {post.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <FaPlay className="text-white text-2xl" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Explore;
