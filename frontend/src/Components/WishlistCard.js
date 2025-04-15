import React, { useState } from "react";
import { Link } from "react-router-dom";
import BuyCard from "../Components/BuyCard";

import useBuyBook from "../hooks/useBuyBook";

const WishlistCard = ({ post, onRemove }) => {
  const [showBuyCard, setShowBuyCard] = useState(false);

  const { buyBook, loading: buyLoading, completed: buyCompleted } = useBuyBook();

  const handleBuyClick = () => setShowBuyCard(true);
  const handleBuyConfirm = async () => {
    await buyBook(post.post_id);
    setShowBuyCard(false);
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col sm:flex-row h-auto">
      {/* Book Cover Image */}
      <div className="flex items-center justify-center w-full sm:w-[30%]">
        <Link to={`/details/${post.post_id}`}>
          <img
            src={post.imageUrl}
            alt="Book Cover"
            className="w-full h-auto sm:h-[250px] sm:w-auto object-cover p-4 cursor-pointer"
          />
        </Link>
      </div>

      {/* Book Details */}
      <div className="w-full sm:w-[70%] p-6 flex flex-col justify-between">
        {/* Top Info */}
        <div>
          <Link to={`/details/${post.post_id}`}>
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
                to={`/seller/${post.seller}`}
                className="font-semibold text-sm sm:text-base hover:underline">
                {post.seller}
              </Link>
            </div>
            <span className="text-gray-500 text-xs sm:text-sm ml-2">
              Added on {post.date}
            </span>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="flex flex-col sm:flex-row justify-end gap-[220px] items-center mt-4">
          <p className="text-lg sm:text-xl font-bold text-gray-800">
            Rs. {post.price}/-
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => onRemove(post.id)}
              className="bg-red-500 text-white font-medium py-2 px-6 rounded-md transition duration-300 hover:scale-105 mt-2 sm:mt-0">
              Remove
            </button>

            <button
              onClick={handleBuyClick}
              className="bg-[#000959] text-white font-medium py-2 px-6 rounded-md transition duration-300 hover:scale-105 mt-2 sm:mt-0">
              {buyLoading ? "Processing..." : "Buy"}
            </button>
          </div>
          {showBuyCard && (
            <BuyCard
              onClose={() => setShowBuyCard(false)}
              onConfirm={handleBuyConfirm}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
