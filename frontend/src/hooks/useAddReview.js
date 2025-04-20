import { useState } from "react";
import axiosInstance from "../axiosInstance";

const useAddReview = () => {
  const [loading, setLoading] = useState(false);

  const addReview = async ({post_id,reviewText,stars}) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(`/review/add?post_id=${post_id}`, {reviewText,stars}, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log("Review added:", response.data);
      alert("Review submitted successfully!");
    } catch (error) {
      console.error("Error adding Review:", error);
      alert("Failed to submit Review.");
    } finally {
      setLoading(false);
    }
  };

  return { addReview, loading };
};

export default useAddReview;
