import { useState } from "react";
import axiosInterface from "../axiosInstance";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const LoginUser = async (username, password) => {
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await axiosInterface.post("/cust/login", {
        username,
        password,
      });

      if (response.data.status === "success") {
        console.log("Login successful. User data:", response.data);
        setUserData(response.data);
        return { success: true, data: response.data };
      } else {
        setError(response.data.message);
        return { success: false, message: response.data.message };
      }
    } catch (err) {
      setError("An error occurred during login.");
      return { success: false, message: "An error occurred during login." };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    userData,
    LoginUser,
  };
};

export default useLogin;
