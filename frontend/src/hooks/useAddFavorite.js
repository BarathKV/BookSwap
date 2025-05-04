import { useState } from "react";
import axiosInstance from "../axiosInstance.js";

const useAddFavorite = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const addToWishlist = async (postId) => {
    try {
      setLoading(true);
      setSuccess(false);
      const response = axiosInstance.post(`/fav/add?postId=${postId}`,null, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setSuccess(true);
      console.log("Added to wishlist:", response.data);
    } catch (error) {
      console.error("Failed to add to wishlist:", error);
    } finally {
      setLoading(false);
    }
  };

  return { addToWishlist, loading, success };
};

export default useAddFavorite;
