import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

const useFetchSellerProfile = (sellerId) => {
    const [profile, setProfile] = useState(null);

    const [profileLoading, setProfileLoading] = useState(true);
  
    useEffect(() => {
      const fetchSellerProfile = async () => {
        try {
          setProfileLoading(true);
          const profileresponse = await axiosInstance.get(`/cust/getprofile/${sellerId}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          setProfile(profileresponse.data);
        } catch (error) {
          console.error("Failed to fetch profile:", error);
        } finally {
          setProfileLoading(false);
        }
      };
  
      if (sellerId) fetchSellerProfile();
    }, [sellerId]);
  
    return { profile, profileLoading };
  };
  
  export default useFetchSellerProfile;