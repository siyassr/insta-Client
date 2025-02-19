import React from "react";
import { FaRegEdit } from "react-icons/fa";


const users = [
  {
    name: "Dhanush",
    avatar: "/mnt/data/image.png",
    message: "sent an attachment.",
    time: "11h",
    unread: true,
  },
  {
    name: "Rahul",
    avatar: "/mnt/data/image.png",
    message: "You sent an attachment.",
    time: "14h",
  },
  {
    name: "Reena",
    avatar: "/mnt/data/image.png",
    message: "Mmh",
    time: "15h",
  },
  {
    name: "Nanda S Nair",
    avatar: "/mnt/data/image.png",
    message: "sent an attachment.",
    time: "17h",
  },
];

function UserPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 border-r border-gray-700">
        <div className="flex justify-between items-center">
      <h1 className="text-2xl font-normal  pb-2">Ardra</h1>
    <FaRegEdit size={28}/>
        </div>
      <div className="mt-4 space-y-4">
        {users.map((user, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-3 rounded-lg ${
              user.unread ? "bg-gray-800" : "hover:bg-gray-800"
            }`}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-gray-400 text-sm">{user.message}</p>
            </div>
            <span className="text-gray-400 text-xs">{user.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPage;
