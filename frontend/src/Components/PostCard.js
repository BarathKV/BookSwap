import React from "react";
import { Link } from "react-router-dom";

const PostCard = () => {
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s";

  return (
    <Link to="/details">
      <div className="w-[260px] bg-[#000959] rounded-lg overflow-hidden shadow-[1px_10px_4px_0_rgba(0,0,0,0.36)] transform transition duration-300 hover:scale-105 ">
        {/* Image Section */}
        <img
          src={imageUrl}
          alt="Book Cover"
          className="w-full h-64 object-cover"
        />

        {/* Content Section */}
        <div className="p-4">
          {/* Title and Author */}
          <div className="flex justify-between items-center mb-2 gap-4">
            <div>
              <h2 className="text-xl text-white font-bold">Boys tiger heart</h2>
              <p className="text-[#acacac] text-sm">By Linda Coggin</p>
            </div>

            {/* "New" Label */}
           
           <div className="flex flex-col gap-1 mt-2">
           <div className="flex justify-center items-center bg-white text-[#000959] h-6 px-3 py-1 rounded-[10px] text-[15px] font-semibold">
              899/-
           </div>
            <div className="flex justify-center items-center bg-[#000959] text-white h-6 px-3 py-1 rounded-[12px] text-[15px] font-semibold">
              New
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
