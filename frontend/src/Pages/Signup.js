import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAddUser from "../hooks/useAddUser";

const Signup = () => {
  const navigate = useNavigate();
  const userType = new URLSearchParams(window.location.search).get("type");
  console.log("User Type:", userType);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    location: "",
  });

  const { AddUser, loading, error } = useAddUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userPayload = { ...formData, userType };
      const data = await AddUser(userPayload);

      if (data) {
        setFormData({
          username: "",
          password: "",
          location: "",
        });

        console.log("User created successfully:", data.token);
        // localStorage.setItem("token", JSON.stringify(data.token));
        navigate("/home");
      }
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center"
      style={{
        backgroundImage: `url(${require("../Assets/BG_Login.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-md">
        <div className="ml-6 w-[400px] bg-white rounded-[30px] shadow-[1px_10px_4px_0_rgba(0,0,0,0.76)] p-8">
          <h2 className="text-[40px] font-bold text-center text-gray-800 mb-6">
            Signup
          </h2>

          <form className="space-y-4" onSubmit={handleSignup}>
            {error && (
              <div className="text-red-500 text-sm mb-4 text-center">
                {error}
              </div>
            )}

            {["username", "password","location"].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 text-sm font-medium mb-1 capitalize">
                  {field}
                </label>
                <input
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Enter ${field}`}
                  required
                />
              </div>
            ))}

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[200px] bg-[#000B6D] hover:bg-[#0d1238] text-white font-medium py-2 px-4 rounded-md transition duration-200"
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
