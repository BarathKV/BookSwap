import { useEffect, useState } from "react";

const useSearchFilter = (sellerId, page = 1) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
        //TODO: change the endpoint to the correct one
      try {
        const res = await fetch(`/posts?seller=${sellerId}&page=${page}`);
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

export default useSearchFilter;
