// src/component/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPackage } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // read isLoggedIn once and on custom 'login' event
  useEffect(() => {
    const check = () => setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    check();
    window.addEventListener("login", check);
    return () => window.removeEventListener("login", check);
  }, []);

  // cart count logic: read localStorage and listen for updates
  useEffect(() => {
    const readCount = () => {
      try {
        const raw = localStorage.getItem("cart_v1");
        if (!raw) {
          setCartCount(0);
          return;
        }
        const items = JSON.parse(raw);
        const total = items.reduce((s, it) => s + (it.qty || 0), 0);
        setCartCount(total);
      } catch {
        setCartCount(0);
      }
    };

    // same-tab updates dispatched from utils/writeCart -> window.dispatchEvent('cartUpdated')
    const onCartUpdated = () => readCount();

    // cross-tab storage event
    const onStorage = (e) => {
      if (e.key === "cart_v1" || e.key === null) readCount();
    };

    // init
    readCount();

    window.addEventListener("cartUpdated", onCartUpdated);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("cartUpdated", onCartUpdated);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token"); // if you saved token
    localStorage.removeItem("user"); // if you saved user info
    setIsLoggedIn(false);
    navigate("/login");
    // notify components if they listen to 'login'
    window.dispatchEvent(new Event("login"));
  };

  return (
    <div className="container-fluid nav-bar" style={{ position: "sticky", top: 0, zIndex: 1020 }}>
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-lg py-4">
          <Link to="/" className="navbar-brand">
            <h1 className="text-primary fw-bold mb-0">
              Cater<span className="text-dark">Serv</span>{" "}
            </h1>
          </Link>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="UsAbout" className="nav-item nav-link">About</Link>
              <Link to="event" className="nav-item nav-link">Events</Link>
              <Link to="Shop" className="nav-item nav-link">Shop</Link>

              <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                <div className="dropdown-menu bg-light">
                  <Link to="book" className="dropdown-item">Booking</Link>
                  <Link to="blog" className="dropdown-item">Our Blog</Link>
                  <Link to="team" className="dropdown-item">Our Team</Link>
                  <Link to="Testimonials" className="dropdown-item">Testimonial</Link>
                  <Link to="PageNotFound" className="dropdown-item">404 Page</Link>
                </div>
              </div>

              <Link to="Contact" className="nav-item nav-link">Contact</Link>

              {isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-1" to="/my-orders">
                  <FiPackage /> My Orders
                </Link>
              </li>
            )}
            </div>

            <div>
              {!isLoggedIn ? (
                <>
                  <Link to="Register" className="btn btn-primary py-2 px-4 me-4  rounded-pill">SignUp</Link>
                  <Link to="Login" className="btn btn-primary py-2 px-4  rounded-pill text-dark">Login</Link>
                  <Link to="Register" className="btn btn-primary py-2 px-4 me-4 rounded-pill">SignUp</Link>
                  <Link to="Login" className="btn btn-primary py-2 px-4 rounded-pill text-dark">Login</Link>

                </>
              ) : (
                <button onClick={handleLogout} className="btn btn-primary py-2 px-4 rounded-pill text-dark">Logout</button>
              )}

              {/* Cart button with badge */}
              <Link to="/Cart" className="btn btn-primary text-dark  position-relative ms-4 py-2 px-4 rounded-pill" style={{ borderRadius: 20 }}>
                Cart
                <span
                  className="badge bg-dark text-white position-absolute"
                  style={{
                    top: -8,
                    right: -10,
                    borderRadius: 12,
                    padding: "4px 7px",
                    fontSize: 12,
                    lineHeight: 1,
                  }}
                >
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
