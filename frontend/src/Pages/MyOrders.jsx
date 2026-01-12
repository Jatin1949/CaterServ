import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/orders/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setOrders(res.data.orders || []);
    } catch (err) {
      console.log("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      fetchOrders();
    }
  }, [isLoggedIn, navigate]); // <-- Dependencies solved

  return (
    <div className="container my-4">
      <h2 className="mb-4">My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="list-group">
          {orders.map((order) => (
            <li key={order._id} className="list-group-item">
              <strong>Order ID:</strong> {order._id} <br />
              <strong>Total:</strong> ₹{order.total} <br />
              <strong>Status:</strong> {order.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;
