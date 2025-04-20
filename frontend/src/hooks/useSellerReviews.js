import { useEffect, useState } from "react";

import axiosInstance from "../axiosInstance";

const useSellerReview = (sellerId) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try{
        const response  = await axiosInstance.get(`/review/cust?customerId=${sellerId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        console.log("review response:", response.data)
        setReviews(response.data);
      }
      catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    if (sellerId) fetchReviews();
  }, [sellerId]);

  return { reviews, loading };
};

export default useSellerReview;
