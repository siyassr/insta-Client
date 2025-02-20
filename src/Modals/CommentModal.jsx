import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const commentsData = [
  {
    id: 1,
    username: "archer__200",
    avatar: "https://via.placeholder.com/50",
    time: "2d",
    text: "🥺❤️",
    likes: 6,
    replies: ["Nice comment!"],
  },
  {
    id: 2,
    username: "s_a_j_u_____t",
    avatar: "https://via.placeholder.com/50",
    time: "2d",
    text: "My brothers 😘😘❤️❤️",
    likes: 5,
    replies: ["Love it!"],
  },
  {
    id: 3,
    username: "praveendas.zx",
    avatar: "https://via.placeholder.com/50",
    time: "3h",
    text: "💎❤️",
    likes: 3,
    replies: [],
  },
];

const CommentModal = ({ isOpen, onClose }) => {
  const [comments, setComments] = useState(commentsData);
  const [newComment, setNewComment] = useState("");
  const [likedComments, setLikedComments] = useState({});

  if (!isOpen) return null;

  const handleLike = (id) => {
    setLikedComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          username: "you",
          avatar: "https://via.placeholder.com/50",
          time: "Now",
          text: newComment,
          likes: 0,
          replies: [],
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="fixed inset-0 left-[530px] ml-64 bottom-52 flex items-center justify-center z-50">
      <div className="bg-[#1c1c1c] text-white w-[350px] md:w-[350px] rounded-lg shadow-lg p-4">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-600 pb-2">
          <h2 className="text-lg font-semibold">Comments</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">
            <IoClose />
          </button>
        </div>

        {/* Comments Section */}
        <div className="max-h-[400px] overflow-y-auto mt-3 space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex space-x-3">
              <img src={comment.avatar} alt={comment.username} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1">
                <p className="text-sm font-semibold">{comment.username} <span className="text-gray-400 text-xs">{comment.time}</span></p>
                <p className="text-sm">{comment.text}</p>
                <div className="flex items-center space-x-3 text-gray-400 text-xs mt-1">
                  <button onClick={() => handleLike(comment.id)} className="flex items-center">
                    {likedComments[comment.id] ? <FaHeart className="text-red-500" /> : <FaRegHeart />} {comment.likes}
                  </button>
                  <span>Reply</span>
                </div>
                {comment.replies.length > 0 && (
                  <button className="text-blue-500 text-xs mt-1">View all {comment.replies.length} replies</button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Comment Input */}
        <div className="border-t border-gray-600 mt-3 pt-3 flex items-center space-x-3">
          <img src="https://via.placeholder.com/50" alt="You" className="w-10 h-10 rounded-full object-cover" />
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 bg-transparent border-none focus:outline-none text-white"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddComment()}
          />
          <button>post</button>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
