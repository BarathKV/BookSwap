// Components/BuyCard.js
import React, { useState } from "react";

const BuyCard = ({ onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quantity:", quantity);
    console.log("Review:", review);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 transition-opacity duration-300">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md animate-scale-in">
        <h2 className="text-xl font-semibold mb-4 text-center text-[#000959]">Complete Purchase</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Review:</label>
            {/* <input
              type="number"
              min="1"
              max="5"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 w-16 focus:outline-none focus:ring-2 focus:ring-[#000959]"
              required
            /> */}
            <input
              type="text"
              placeholder="Write a review..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#000959]"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#000959] text-white rounded-full py-2 hover:scale-105 transition-transform duration-200"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-gray-500 hover:underline text-center"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyCard;
