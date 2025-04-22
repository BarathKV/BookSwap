import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

const useFetchSellerPost = (sellerId) => {
    const [posts, setPosts] = useState([]);

    const [postsLoading, setPostsLoading] = useState(true);
  
    useEffect(() => {
      const fetchSellerPost = async () => {
        try {
            setPostsLoading(true);
          const postresponse = await axiosInstance.get(`/post/get?user_id=${sellerId}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          console.log("Posts Response:", postresponse.data.content);
          setPosts(postresponse.data.content);
        } catch (error) {
          console.error("Failed to fetch profile:", error);
        } finally {
            setPostsLoading(false);
        }
      };
  
      if (sellerId) fetchSellerPost();
    }, [sellerId]);
  
    return { posts, postsLoading };
  };
  
  export default useFetchSellerPost;