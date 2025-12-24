// src/Pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to access the "state" passed from Cart

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Moved inside try block in your code, but standard is top level. Both work.
    try {
      const response = await axios.post("http://localhost:2076/user/login", data);
      
      // Check your specific backend response structure
      // Usually axios puts the body in response.data
      if (response.data.status === 400 || response.data.success === false) {
        toast.error(response.data.message || "Login failed");
      } else {
        toast.success("Login Successful!");

        // 1. Set the specific key matching your Cart logic
        localStorage.setItem("isLoggedIn", "true"); 
        
        // If your backend sends a user object, save that too (Optional)
        // localStorage.setItem("user", JSON.stringify(response.data.user));

        // 2. Dispatch event to update Navbar/Cart immediately
        window.dispatchEvent(new Event("storage")); 
        window.dispatchEvent(new Event("login"));

        // 3. SMART REDIRECT: 
        // If "from" exists (sent from Cart), go there. Otherwise go Home.
        const destination = location.state?.from || "/";
        navigate(destination);
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please check credentials.");
    }
  };

  return (
    <div className="bg-light">
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
          <h3 className="text-center mb-4">Login</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name='email'
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
                name='password'
                value={data.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Login
            </button>
          </form>

          <div className="d-flex justify-content-between mt-2">
            <Link to="/forgot-password" className="text-decoration-none">Forgot password?</Link>
            <Link to="/register" className="text-decoration-none">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;