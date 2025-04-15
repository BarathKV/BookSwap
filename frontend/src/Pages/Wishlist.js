import React, { useState } from "react";
import WishlistCard from "../Components/WishlistCard.js";
import Navbar from "../Components/Navbar";
import useRmFavorite from "../hooks/useRmFavorite";

const Wishlist = () => {
  const { removeFromWishlist, loading } = useRmFavorite();

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Mind Of A Leader",
      author: "Kevin Anderson",
      price: "899",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s",
      condition: "New",
      seller: "Jason Brodie",
      date: "19-5-25",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: "499",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s",
      condition: "Used",
      seller: "Anna Keller",
      date: "18-4-25",
    },
  ]);

  const handleRemove = async (postId) => {
    const success = await removeFromWishlist(postId);
    if (success) {
      setPosts((prev) => prev.filter((post) => post.id !== postId));
    }
  };

  return (
    <div className="bg-[#eaecff] min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center py-12">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

        <div className="w-full max-w-4xl px-4">
          {posts.length === 0 ? (
            <p className="text-center text-gray-600">Your wishlist is empty.</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
                  <WishlistCard post={post} onRemove={handleRemove} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
