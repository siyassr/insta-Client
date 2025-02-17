import React from "react";

function SearchBar() {
  return (
    <div className="p-3  rounded-md h-[712px] border-r-0">
      <h2 className="font-semibold text-3xl mb-10">Search</h2>
      <input
        type="search"
        placeholder="Search..."
        className="bg-gray-900 text-white p-2 rounded-md w-full focus:outline-none"
      />

      <div className=" border border-t-1 mt-9"> </div>

     <div className="flex justify-between mt-4">
      <h3 className="font-semibold">Recent</h3>
 
      <button className="font-semibold text-blue-800">Clear all</button>
     </div>
    </div>
  );
}

export default SearchBar;
