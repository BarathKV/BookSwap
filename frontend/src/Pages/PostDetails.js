import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import BuyCard from "../Components/BuyCard";

import useFetchPost from "../hooks/useFetchPost";
import useAddFavorite from "../hooks/useAddFavorite";
import useBuyBook from "../hooks/useBuyBook";
import useRmFavorite from "../hooks/useRmFavorite";

import axiosInstance from "../axiosInstance";

const PostDetails = () => {
  const { post_id } = useParams();
  const [showBuyCard, setShowBuyCard] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    post,
    loading: postLoading,
    error: postError,
  } = useFetchPost(post_id);
  const {
    addToWishlist,
    loading: wishLoading,
    success: wishSuccess,
  } = useAddFavorite();
  const {
    removeFromWishlist,
    loading: rmfavLoading,
    error: rmfavError,
  } = useRmFavorite();

  const { buyBook, loading: buyLoading } = useBuyBook();

  const handleBuyClick = () => setShowBuyCard(true);
  const handleBuyConfirm = async () => {
    await buyBook(post_id);
    setShowBuyCard(false);
  };
  const handleAddToWishlist = async () => {
    await addToWishlist(post_id);
    setIsFavorite(true);
  };

  const handleRmFromWishlist = async () => {
    await removeFromWishlist(post_id);
    setIsFavorite(false);
  };

  useEffect(() => {
    const checkFavorite = async () => {
      try {
        console.log("token: ", localStorage.getItem('token'));
        const response = await axiosInstance.get(
          `/fav/iffav?postId=${post_id}`,
          {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }
        );
        setIsFavorite(response);
      } catch (error) {
        console.error("Error checking favorite status:", error);
      }
    };

    checkFavorite();
  }, [post_id]);

  if (postLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#eaecff]">
        <p className="text-lg text-gray-700">Loading post...</p>
      </div>
    );
  }

  if (postError || !post) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#eaecff]">
        <p className="text-red-600 text-lg">{postError || "Post not found."}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#eaecff] min-h-screen relative">
      <Navbar />
      <div className="py-4 sm:py-8 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="lg:w-1/2 flex justify-center">
              <img
                className="rounded-xl max-h-[500px] sm:max-h-[600px] w-full max-w-[300px] sm:max-w-[380px] lg:max-w-none object-cover shadow-lg"
                src={`http://localhost:3300/images/${post.imageFile}`}
                alt="Book cover"
              />
            </div>

            <div className="lg:w-1/2">
              <div className="flex flex-col gap-[100px] bg-white rounded-xl p-4 sm:p-8 h-full shadow-md">
                <div className="wrapper">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 sm:gap-4 items-center">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWi6fx13t3nmhNDxOwxj80l8QTzZrnf2_lA&s"
                        alt="Profile"
                        className="h-6 w-6 sm:h-8 sm:w-8 rounded-full"
                      />
                      <Link
                        to="/seller"
                        className="text-sm sm:text-[20px] text-grey-500 hover:underline">
                        {post.seller}
                      </Link>
                    </div>
                    <p className="text-xs sm:text-base text-gray-700">
                      {post.createdAt}
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-3 text-xl sm:text-2xl font-semibold">
                    {post.title}
                  </div>
                  <div className="text-sm sm:text-xl text-gray-500">
                    By {post.user.username}
                  </div>
                  <hr className="mt-2" />
                  <div className="pt-3 text-sm overflow-y-auto h-[300px] sm:max-h-[250px]">
                    {post.description}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-3 mt-12 sm:mt-8">
                  <button className="bg-[#000959] h-10 sm:h-12 w-full sm:w-32 rounded-lg text-white shadow-md">
                    Rs {post.price}/-
                  </button>
                  <button className="bg-[#000959] h-10 sm:h-12 w-full sm:w-32 rounded-lg text-white shadow-md">
                    {post.condition}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper py-4 my-4 flex justify-center">
            <div className="flex gap-4 sm:gap-8 w-full max-w-md px-4">
              <button
                onClick={handleBuyClick}
                className="bg-white h-10 w-full rounded-full text-[#000959] text-sm shadow-md hover:scale-105 transition">
                {buyLoading ? "Processing..." : "Buy"}
              </button>

              {!isFavorite && (
                <button
                  onClick={handleAddToWishlist}
                  className="bg-white h-10 w-full rounded-full text-[#000959] text-sm shadow-md hover:scale-105 transition">
                  {wishLoading
                    ? "Adding..."
                    : wishSuccess
                    ? "Added!"
                    : "Add to Wishlist"}
                </button>
              )}

              {isFavorite && (
                <button
                  onClick={handleRmFromWishlist}
                  className="bg-white h-10 w-full rounded-full text-[#000959] text-sm shadow-md hover:scale-105 transition">
                  Remove from Wishlist
                </button>
              )}
            </div>
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

export default PostDetails;
