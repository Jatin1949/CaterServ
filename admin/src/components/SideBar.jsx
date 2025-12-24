import React from 'react';
import { NavLink} from 'react-router-dom';
import { FiHome, FiPlusSquare, FiList, FiShoppingBag, FiUsers, FiLogOut } from 'react-icons/fi';

const Sidebar = () => {

  const handleLogout = () => {
    // 1. Remove admin token (if you have one saved)
    localStorage.removeItem("adminToken");
    
    // 2. Redirect to main website or login
    // window.location.href = "http://localhost:5173"; // Redirect to User Frontend
    // OR just reload to clear state if login is inside admin
    window.location.reload(); 
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "260px", minHeight: "100vh" }}>
      
      {/* Header */}
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4 fw-bold">Admin Panel</span>
      </a>
      
      <hr />
      
      {/* Navigation Links */}
      <ul className="nav nav-pills flex-column mb-auto gap-2">
        
        <li className="nav-item">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link text-white d-flex align-items-center ${isActive ? "active bg-primary" : ""}`}
            end // 'end' ensures this only highlights on exact "/" path
          >
            <FiHome className="me-2" size={20} /> Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/add-product" 
            className={({ isActive }) => `nav-link text-white d-flex align-items-center ${isActive ? "active bg-primary" : ""}`}
          >
            <FiPlusSquare className="me-2" size={20} /> Add Product
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/list-products" 
            className={({ isActive }) => `nav-link text-white d-flex align-items-center ${isActive ? "active bg-primary" : ""}`}
          >
            <FiList className="me-2" size={20} /> Product List
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/orders" 
            className={({ isActive }) => `nav-link text-white d-flex align-items-center ${isActive ? "active bg-primary" : ""}`}
          >
            <FiShoppingBag className="me-2" size={20} /> Orders
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/users" 
            className={({ isActive }) => `nav-link text-white d-flex align-items-center ${isActive ? "active bg-primary" : ""}`}
          >
            <FiUsers className="me-2" size={20} /> Users
          </NavLink>
        </li>

      </ul>
      
      <hr />
      
      {/* Logout Button */}
      <div className="mt-auto">
        <button 
          onClick={handleLogout} 
          className="btn btn-danger w-100 d-flex align-items-center justify-content-center"
        >
          <FiLogOut className="me-2" size={20} /> Logout
        </button>
      </div>

    </div>
  );
};

export default Sidebar;