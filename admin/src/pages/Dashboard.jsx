import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // 🌙 DARK MODE
  const [dark, setDark] = useState(
    localStorage.getItem("admin_dark") === "true"
  );

  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [latestUsers, setLatestUsers] = useState([]);

  const toggleDark = () => {
    localStorage.setItem("admin_dark", !dark);
    setDark(!dark);
  };

  const fetchStats = async () => {
    try {
      const productsRes = await axios.get(
        "http://localhost:2076/api/products/list"
      );
      setTotalProducts(productsRes.data.length);

      const ordersRes = await axios.get(
        "http://localhost:2076/api/orders"
      );
      const orders = ordersRes.data;
      setTotalOrders(orders.length);

      const totalRevenue = orders.reduce(
        (sum, order) => sum + (order.total || 0),
        0
      );
      setRevenue(totalRevenue);

      const usersRes = await axios.get(
        "http://localhost:2076/user/list"
      );
      setTotalUsers(usersRes.data.length);

      const sorted = usersRes.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setLatestUsers(sorted.slice(0, 3));
    } catch (err) {
      console.error("Dashboard load failed", err);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, []);

  const pageStyle = {
    minHeight: "100vh",
    background: dark
      ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
      : "#f8f9fa",
  };

  const glassCard = {
    background: dark
      ? "rgba(255,255,255,0.08)"
      : "#fff",
    backdropFilter: "blur(12px)",
    border: dark ? "1px solid rgba(255,255,255,0.15)" : "none",
    color: dark ? "#fff" : "#000",
  };

  return (
    <div className="container-fluid p-4" style={pageStyle}>
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1 text-white">
            Welcome Admin 👋
          </h2>
          <p className="text-light opacity-75 mb-0">
            Live overview of your CaterServ store
          </p>
        </div>

        <button
          onClick={toggleDark}
          className={`btn ${
            dark ? "btn-outline-light" : "btn-dark"
          }`}
        >
          {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* STATS */}
      <div className="row g-4 mb-5">
        <StatCard icon="🍔" title="Products" value={totalProducts} dark={dark} />
        <StatCard icon="📦" title="Orders" value={totalOrders} dark={dark} />
        <StatCard icon="👤" title="Users" value={totalUsers} dark={dark} />
        <StatCard icon="💰" title="Revenue" value={`₹${revenue}`} dark={dark} />
      </div>

      {/* LATEST USERS */}
      <div className="row">
        <div className="col-lg-6">
          <div className="card shadow-lg border-0" style={glassCard}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">✨ Latest Users</h5>
                <button
                  onClick={() => navigate("/users")}
                  className="btn btn-sm btn-outline-info"
                >
                  View All
                </button>

              </div>

              {latestUsers.map((user) => (
                <div
                  key={user._id}
                  className="d-flex align-items-center p-3 mb-3 rounded"
                  style={{
                    background: dark
                      ? "rgba(0,0,0,0.35)"
                      : "#f1f3f5",
                  }}
                >
                  {/* AVATAR */}
                  <div
                    className="me-3 rounded-circle d-flex align-items-center justify-content-center fw-bold"
                    style={{
                      width: 46,
                      height: 46,
                      background: "#0dcaf0",
                      color: "#000",
                      fontSize: 18,
                    }}
                  >
                    {user.name
                      ? user.name.charAt(0).toUpperCase()
                      : "U"}
                  </div>

                  {/* INFO */}
                  <div className="flex-grow-1">
                    <div className="fw-semibold">
                      {user.name || "Unnamed User"}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: dark ? "#cfd8dc" : "#555",
                      }}
                    >
                      {user.email}
                    </div>
                  </div>

                  {/* DATE */}
                  <div
                    style={{
                      fontSize: 12,
                      color: dark ? "#b0bec5" : "#666",
                    }}
                  >
                    {new Date(user.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =====================
   STAT CARD
===================== */
const StatCard = ({ icon, title, value, dark }) => (
  <div className="col-md-3">
    <div
      className="card shadow-lg border-0 h-100 text-center"
      style={{
        background: dark
          ? "rgba(255,255,255,0.12)"
          : "#fff",
        color: dark ? "#fff" : "#000",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="card-body">
        <div className="fs-1 mb-2">{icon}</div>
        <h6 className="opacity-75">{title}</h6>
        <h2 className="fw-bold">{value}</h2>
      </div>
    </div>
  </div>
);

export default Dashboard;
