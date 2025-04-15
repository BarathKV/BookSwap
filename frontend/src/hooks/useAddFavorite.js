import { useState } from "react";

const useAddFavorite = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const addToWishlist = async (postId) => {
    try {
      setLoading(true);
      setSuccess(false);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      //TODO: Replace with actual API call to add to wishlist
      setSuccess(true);
    } catch (error) {
      console.error("Failed to add to wishlist:", error);
    } finally {
      setLoading(false);
    }
  };

  return { addToWishlist, loading, success };
};

export default useAddFavorite;
