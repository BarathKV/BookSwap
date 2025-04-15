import { useState } from "react";

const useBuyBook = () => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const buyBook = async (postId) => {
    try {
      setLoading(true);
      setCompleted(false);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      //TODO: replace with actual API call to buy book
      setCompleted(true);
    } catch (error) {
      console.error("Failed to buy book:", error);
    } finally {
      setLoading(false);
    }
  };

  return { buyBook, loading, completed };
};

export default useBuyBook;
