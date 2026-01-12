import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPackage } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const check = () => setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    check();
    window.addEventListener("login", check);
    return () => window.removeEventListener("login", check);
  }, []);

  useEffect(() => {
    const readCount = () => {
      try {
        const raw = localStorage.getItem("cart_v1");
        if (!raw) return setCartCount(0);
        const items = JSON.parse(raw);
        const total = items.reduce((s, it) => s + (it.qty || 0), 0);
        setCartCount(total);
      } catch {
        setCartCount(0);
      }
    };

    readCount();

    const onCartUpdated = () => readCount();
    const onStorage = (e) => {
      if (e.key === "cart_v1" || e.key === null) readCount();
    };

    window.addEventListener("cartUpdated", onCartUpdated);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("cartUpdated", onCartUpdated);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
    window.dispatchEvent(new Event("login"));
  };

  return (
    <div className="container-fluid nav-bar" style={{ position: "sticky", top: 0, zIndex: 1020 }}>
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-lg py-4">
          <Link to="/" className="navbar-brand">
            <h1 className="text-primary fw-bold mb-0">
              Cater<span className="text-dark">Serv</span>
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
            <div className="navbar-nav mx-auto text-center">
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
                <Link className="nav-link d-flex align-items-center gap-1" to="/my-orders">
                  <FiPackage /> My Orders
                </Link>
              )}
            </div>

            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3 mt-3 mt-lg-0 mx-auto mx-lg-0">
              {!isLoggedIn ? (
                <>
                  <Link to="Register" className="btn btn-primary rounded-pill px-4">SignUp</Link>
                  <Link to="Login" className="btn btn-primary rounded-pill px-4 text-dark">Login</Link>
                </>
              ) : (
                <button onClick={handleLogout} className="btn btn-primary rounded-pill px-4 text-dark">Logout</button>
              )}

              <Link to="/Cart" className="btn btn-primary position-relative rounded-pill px-4 text-dark">
                Cart
                <span
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: -8, right: -10, borderRadius: 12, padding: "4px 7px", fontSize: 12 }}
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
