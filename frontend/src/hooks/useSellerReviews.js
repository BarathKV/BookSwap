import { useEffect, useState } from "react";

const useSellerReview = (sellerId, page = 1) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`/api/reviews?seller=${sellerId}&page=${page}`);
        const data = await res.json();
        setReviews(data.reviews);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    if (sellerId) fetchReviews();
  }, [sellerId, page]);

  return { reviews, loading };
};

export default useSellerReview;
