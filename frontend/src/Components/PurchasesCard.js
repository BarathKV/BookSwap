import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const PurchasesCard = ({purchase}) => {
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col sm:flex-row h-auto">
      {/* Book Cover Image - Left Side */}
      <div className="flex items-center justify-center w-full sm:w-[30%]">
          {" "}
          {/* Wrap the image with Link */}
          <img
            src={`http://localhost:3300/images/${purchase.post.imageFile}`}
            alt="Book Cover"
            className="w-full h-auto sm:h-[250px] sm:w-auto object-cover p-4 cursor-pointer" // Add cursor-pointer for hover effect
          />
      </div>

      {/* Book Details - Right Side */}
      <div className="w-full sm:w-[70%] p-6 flex flex-col justify-between">
        {/* Top Section */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            {purchase.post.book.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-2">
            By {purchase.post.book.author}
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-0">
            <div className="flex gap-2 items-center">
              <img
                src="https://media.tenor.com/_zWYqfZdneIAAAAM/shocked-face-shocked-meme.gif"
                alt="Profile"
                className="h-6 w-6 sm:h-8 sm:w-8 rounded-full"
              />
              <Link
                to='/seller'
                className="font-semibold text-sm sm:text-base hover:underline">
                {purchase.post.user.username}
              </Link>
            </div>
            <span className="text-gray-500 text-xs sm:text-sm ml-2">
              Bought on {new Date(purchase.purchasedAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
          <p className="text-lg sm:text-xl font-bold text-gray-800">
            Rs.{purchase.post.price}/-
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchasesCard;
