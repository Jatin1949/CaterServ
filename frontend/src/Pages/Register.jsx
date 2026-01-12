import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    // simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validations
    if (!data.name.trim()) {
      toast.error("Full name is required");
      return;
    }
    if (!data.email.trim() || !validateEmail(data.email)) {
      toast.error("Valid email is required");
      return;
    }
    if (data.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // Build payload to match your schema: name, email, password, phone (optional)
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        ...(data.phone ? { phone: data.phone } : {}) // include phone only if provided
      };

      // NOTE: use the route your server exposes for sign up.
      // You used /user/login earlier — here we assume /user/register (adjust if your route is /user/signup)
      const response = await axios.post("https://caterserv-ih8s.onrender.com/user/register", payload);

      console.log("Register response:", response?.data);

      // Your backend returns { success, status, message, body }
      if (response.data?.status === 400 || response.data?.success === false) {
        toast.error(response.data?.message || "Registration failed");
        return;
      }

      // success
      toast.success(response.data?.message || "Registered successfully");
      // Optionally clear form
      setData({ name: "", email: "", password: "", confirmPassword: "", phone: "" });
      // Navigate to login or home
      navigate("/login");
    } catch (error) {
      console.error("Register Error:", error);
      console.error("Error response data:", error.response?.data);

      // show server message if present, otherwise generic message
      const serverMsg = error.response?.data?.message;
      toast.error(serverMsg || error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-light">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4" style={{ width: "100%", maxWidth: "420px" }}>
          <h3 className="text-center mb-4">Create Account</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter full name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter password"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                className="form-control"
                placeholder="Confirm password"
                required
              />
            </div>

            {/* Optional phone field - remove if not needed */}
            <div className="mb-3">
              <label className="form-label">Phone (optional)</label>
              <input
                type="tel"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter phone number"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Register
            </button>

            <div className="text-center">
              <Link to="/login" className="text-decoration-none">
                Already have an account? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
