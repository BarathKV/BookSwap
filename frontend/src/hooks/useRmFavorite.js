import { useState } from "react";
import axiosInstance from "../axiosInstance.js";

const useRmFavorite = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const removeFromWishlist = async (postId) => {
    console.log("Removing from wishlist:", postId);
    setLoading(true);
    setError(null);
    try {
      console.log("auth head:",`Bearer ${localStorage.getItem('token')}`);
      const response = await axiosInstance.post(
        `/fav/remove?postId=${postId}`,null,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Removed from wishlist:", response.data);
      return true;
    } catch (err) {
      setError("Failed to remove from wishlist.");
      console.log("Error removing from wishlist:", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { removeFromWishlist, loading, error };
};

export default useRmFavorite;
