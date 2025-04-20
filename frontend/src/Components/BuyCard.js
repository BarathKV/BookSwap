import React, { useState } from "react";
import useAddReview from "../hooks/useAddReview";

const starEnum = {
  1: "ONE",
  2: "TWO",
  3: "THREE",
  4: "FOUR",
  5: "FIVE",
};

const BuyCard = ({ onClose, postId }) => {
  const [star, setStar] = useState(1);
  const [review, setReview] = useState("");
  const { addReview, loading } = useAddReview();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const starText = starEnum[star] || "ONE";

    console.log("Star:", starText);
    console.log("Review:", review);
    console.log("Post ID:", postId);
    try {
      await addReview({
        post_id: postId,
        reviewText: review,
        stars: starText,
      });
      onClose(); // close modal after submission
    } catch (error) {
      console.error("Submission failed.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 transition-opacity duration-300">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md animate-scale-in">
        <h2 className="text-xl font-semibold mb-4 text-center text-[#000959]">
          Complete Purchase
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <label className="text-md font-medium text-gray-700">Rating:</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setStar(num)}
                  className={`text-2xl ${
                    num <= star ? "text-yellow-400" : "text-gray-300"
                  } focus:outline-none`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <input
            type="text"
            placeholder="Write a review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="flex-1 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#000959]"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#000959] text-white rounded-full py-2 hover:scale-105 transition-transform duration-200 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
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
