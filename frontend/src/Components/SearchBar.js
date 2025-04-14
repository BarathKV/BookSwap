import React from "react";
const SearchBar = () => {
  return (
    <div
      className="flex items-center justify-center h-[250px] w-full"
      style={{
        backgroundImage: `url(${require("../Assets/BG_Search.png")})`, // Path to your image
        backgroundSize: "cover", // Ensures the image covers the entire background
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}>
      {/* Content container */}
      <div className=" z-10 w-[450px] px-6 justify-between items-center">
        <div className="flex gap-2 w-full ">
          {/* Search input */}
          <input
            type="text"
            placeholder="Enter Book Name"
            className="flex-1 px-2 py-2 rounded-[20px] bg-[#ecefff] border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Filter button */}
          <button className="px-2 py-2 rounded-[20px] bg-[#ecefff] border border-gray-300  shadow-sm hover:bg-gray-50 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
