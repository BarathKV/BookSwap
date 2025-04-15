import { useState, useEffect } from "react";

const useFetchPost = (postId) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        await new Promise((res) => setTimeout(res, 1000));
        //TODO: Replace with actual API call to fetch post details
        setPost({
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfxrcUtlaLqSTTpA7N9cWKIopvRNtXngM2A&s",
          title: "The Art of React",
          author: "Jane Doe",
          description:
            "This is a comprehensive guide to building modern web apps with React. Learn JSX, Hooks, Context API, and advanced patterns in a hands-on way.",
          seller: "John Smith",
          price: 499,
          condition: "Like New",
        });
      } catch (err) {
        setError("Failed to load post.");
      } finally {
        setLoading(false);
      }
    };

    if (postId) fetchPost();
  }, [postId]);

  return { post, loading, error };
};

export default useFetchPost;

