import { useEffect, useState } from "react";

import axiosInstance from "../axiosInstance";

const useSearchFilter = ({filters}) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchReviews = async () => {
        setLoading(true);
        try{
          const res = await axiosInstance.get(`/post/filters`,{
            params: {
              ...filters
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          });
          if(res.status === 200){
            console.log("Response data:", res.data.content);
            setResults(res.data.content);
          }
        }
        catch(err){
          console.error("Error fetching reviews:", err);
        }
        finally{
          setLoading(false);
        }
    };

    if ({filters}) fetchReviews();
  }, [filters]);

  return { results, loading };
};

export default useSearchFilter;
