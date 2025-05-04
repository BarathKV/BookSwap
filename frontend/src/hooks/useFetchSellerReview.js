import { useEffect, useState } from "react";

import axiosInstance from "../axiosInstance";

const useFetchSellerReview = (sellerId) => {
  const [reviews, setReviews] = useState([]);
  const [reviewloading, setLoading] = useState(true);

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
        console.log("review response:", response.data.content)
        setReviews(response.data.content);
      }
      catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    if (sellerId) fetchReviews();
  }, [sellerId]);

  return { reviews, reviewloading };
};

export default useFetchSellerReview;
