import { useState } from "react";
import axiosInstance from "../axiosInstance.js";

const useBuyBook = () => {
  const [loading, setLoading] = useState(false);

  const buyBook = async (postId) => {
    console.log("Buying book with postId:", postId);
    try {
      setLoading(true);
      const response = await axiosInstance.post(
        `/pur/buy?postId=${postId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Book purchased successfully:", response.data);
    } catch (error) {
      console.error("Failed to buy book:", error);
    } finally {
      setLoading(false);
    }
  };

  return { buyBook, loading };
};

export default useBuyBook;
