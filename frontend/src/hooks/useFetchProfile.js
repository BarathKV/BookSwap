import { useEffect, useState } from "react";

const useFetchProfile = (sellerId) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        //TODO: replace with actual API call to fetch seller profile
        await new Promise((res) => setTimeout(res, 1000));
        profile = {
          username: "John Doe",
          location: "New York",
          phone: "+123456789",
        };
        setProfile(profile);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setLoading(false);
      }
    };

    if (sellerId) fetchProfile();
  }, [sellerId]);

  return { profile, loading };
};

export default useFetchProfile;
