// import { useEffect, useState } from "react";
// import axiosInstance from "../axiosInstance";

// const useUserPosts = () => {
//   const [myposts, setMyPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   //TODO: correct the backend for user posts

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       try {
//         const response = await axiosInstance.get("/posts/user", {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         setMyPosts(response.data); // assuming response.data is an array of posts
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return { myposts, loading };
// };

// export default useUserPosts;
