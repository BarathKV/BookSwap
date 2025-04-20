import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

const useUserPosts = () => {
  const [myposts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/posts/user", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("posts response:", response.data);
        setMyPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { myposts, loading };
};

export default useUserPosts;
