import { useState } from "react";

const useRmFavorite = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const removeFromWishlist = async (postId) => {
    try {
      setLoading(true);
      setError(null);
      await new Promise((res) => setTimeout(res, 500));
      //TODO: Replace with actual API call to remove from wishlist
      return true;
    } catch (err) {
      setError("Failed to remove from wishlist.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { removeFromWishlist, loading, error };
};

export default useRmFavorite;
