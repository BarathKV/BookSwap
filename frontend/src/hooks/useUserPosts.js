import { useEffect, useState } from "react";

const useUserPosts = (sellerId, page = 1) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/posts?seller=${sellerId}&page=${page}`);
        const data = await res.json();
        setPosts(data.posts);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    if (sellerId) fetchPosts();
  }, [sellerId, page]);

  return { posts, loading };
};

export default useUserPosts;
