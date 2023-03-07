import React from "react";

const SearchBox = () => {
  return (
    <div style={{boxShadow: '0px -2px 4px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.2)'}} className="w-full shadow-sm shadow-[0px -4px 6px -2px rgba(0, 0, 0, 0.2), 0px 4px 6px -2px rgba(0, 0, 0, 0.2)] mb-5 h-20 flex items-center">
      <input
        className=" block w-[96%] mx-auto my-2 px-2 py-3 border-[#539165] border-1 rounded-lg bg-[#f5f5f5] placeholder-gray-400 text-gray-900 outline-none"
        type="text"
        placeholder="Search quiz"
      />
    </div>
  );
};

export default SearchBox;
