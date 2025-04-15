import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const WishlistCard = ({ post }) => {
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col sm:flex-row h-auto">
      {/* Book Cover Image - Left Side */}
      <div className="flex items-center justify-center w-full sm:w-[30%]">
        <Link to="/details">
          {/* Wrap the image with Link */}
          <img
            src={post.imageUrl}
            alt="Book Cover"
            className="w-full h-auto sm:h-[250px] sm:w-auto object-cover p-4 cursor-pointer"
          />
        </Link>
      </div>

      {/* Book Details - Right Side */}
      <div className="w-full sm:w-[70%] p-6 flex flex-col justify-between">
        {/* Top Section */}
        <div>
          <Link to="/details">
            {/* Title wrapped with Link */}
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 hover:underline">
              {post.title}
            </h1>
          </Link>
          <p className="text-base sm:text-lg text-gray-600 mb-2">
            By {post.author}
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-0">
            <div className="flex gap-2 items-center">
              <img
                src="https://media.tenor.com/_zWYqfZdneIAAAAM/shocked-face-shocked-meme.gif"
                alt="Profile"
                className="h-6 w-6 sm:h-8 sm:w-8 rounded-full"
              />

              <Link
                to="/seller"
                className="font-semibold text-sm sm:text-base hover:underline">
                {post.seller}
              </Link>
            </div>
            <span className="text-gray-500 text-xs sm:text-sm ml-2">
              Added on {post.date}
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-end gap-[220px] items-center mt-4">
          <p className="text-lg sm:text-xl font-bold text-gray-800">
            Rs. {post.price}/-
          </p>

          <div className="flex gap-2">
            {" "}
            {/* Remove Button */}
            <button className="bg-red-500 text-white font-medium py-2 px-6 rounded-md transition duration-300 hover:scale-105 mt-2 sm:mt-0">
              Remove
            </button>
            {/* Link Buy Book button to the post details page */}
            <Link to="/details">
              <button className="bg-[#000959] text-white font-medium py-2 px-6 rounded-md transition duration-300 hover:scale-105 mt-2 sm:mt-0">
                Buy Book
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
