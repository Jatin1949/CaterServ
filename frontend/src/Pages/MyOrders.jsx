import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  FiPackage,
  FiEye,
  FiXCircle,
  FiArrowRight,
} from "react-icons/fi";

const IMAGE_FALLBACK = "/img/menu-01.jpg";

const MyOrders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewOrder, setViewOrder] = useState(null);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:2076/api/orders");

      // TEMP: inject PENDING status
      const withStatus = res.data.map((o) => ({
        ...o,
        status: o.status || "PENDING",
      }));

      setOrders(withStatus.reverse());
    } catch (err) {
      console.error("Failed to load orders", err);
    } finally {
      setLoading(false);
    }
  };

  /* =====================
     CANCEL ORDER (UI ONLY)
  ===================== */
  const cancelOrder = (orderId) => {
    Swal.fire({
      title: "Cancel this order?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#b91c1c",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, cancel it",
    }).then((result) => {
      if (result.isConfirmed) {
        setOrders((prev) =>
          prev.map((o) =>
            o._id === orderId ? { ...o, status: "CANCELLED" } : o
          )
        );

        Swal.fire(
          "Cancelled!",
          "Your order has been cancelled.",
          "success"
        );
      }
    });
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border" style={{ color: "#c2852b" }} />
      </div>
    );
  }

  return (
    <div
      className="py-5"
      style={{
        background: "#fffaf3",
        minHeight: "100vh",
      }}
    >
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <span
            className="px-4 py-2 rounded-pill fw-semibold"
            style={{
              border: "1px solid #c2852b",
              color: "#c2852b",
            }}
          >
            ORDER HISTORY
          </span>

          <h1
            className="fw-bold mt-3"
            style={{ fontFamily: "Georgia, serif" }}
          >
            My Orders
          </h1>

          <p className="text-muted mt-2">
            Every bite you ordered, right here 🍽
          </p>
        </div>

        {/* EMPTY */}
        {orders.length === 0 ? (
          <div className="card shadow-sm border-0 p-5 text-center">
            <div className="fs-1 mb-3">🍴</div>
            <h4 className="fw-bold">No orders yet</h4>
            <p className="text-muted mb-4">
              Once you place an order, it will appear here.
            </p>
            <button
              className="btn px-4"
              style={{
                background: "#c2852b",
                color: "#fff",
                borderRadius: "30px",
              }}
              onClick={() => navigate("/menu")}
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="row g-4">
            {orders.map((order) => (
              <div key={order._id} className="col-lg-6">
                <div
                  className="card border-0 shadow-sm h-100"
                  style={{ borderRadius: 16 }}
                >
                  <div className="card-body p-4">

                    {/* HEADER */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <h6 className="fw-bold mb-1">
                          Order #{order.orderId}
                        </h6>
                        <div className="text-muted small">
                          {new Date(order.createdAt).toLocaleString()}
                        </div>
                      </div>

                      <span
                        className="badge px-3 py-2"
                        style={{
                          borderRadius: 20,
                          background:
                            order.status === "CANCELLED"
                              ? "#fee2e2"
                              : "#fff7ed",
                          color:
                            order.status === "CANCELLED"
                              ? "#b91c1c"
                              : "#c2852b",
                        }}
                      >
                        {order.status}
                      </span>
                    </div>

                    {/* ITEMS PREVIEW */}
                    <div className="mb-3 text-muted small">
                      {order.items.length} item(s) ordered
                    </div>

                    {/* TOTAL */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <strong>Total</strong>
                      <span
                        className="fw-bold fs-5"
                        style={{ color: "#c2852b" }}
                      >
                        ₹{order.total}
                      </span>
                    </div>

                    {/* ACTIONS */}
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-outline-dark btn-sm flex-fill"
                        onClick={() => setViewOrder(order)}
                      >
                        <FiEye className="me-1" /> View Details
                      </button>

                      <button
                        className="btn btn-outline-danger btn-sm flex-fill"
                        disabled={order.status !== "PENDING"}
                        onClick={() => cancelOrder(order._id)}
                      >
                        <FiXCircle className="me-1" /> Cancel
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        {orders.length > 0 && (
          <div className="text-center mt-5">
            <button
              className="btn btn-outline-dark px-4 py-2 rounded-pill"
              onClick={() => navigate("/menu")}
            >
              Order Again <FiArrowRight className="ms-1" />
            </button>
          </div>
        )}

      </div>

      {/* =====================
         VIEW DETAILS MODAL
      ===================== */}
      {viewOrder && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold">
                  Order #{viewOrder.orderId}
                </h5>
                <button
                  className="btn-close"
                  onClick={() => setViewOrder(null)}
                />
              </div>

              {viewOrder.items.map((item, idx) => (
                <div
                  key={idx}
                  className="d-flex align-items-center mb-3"
                >
                  <img
                    src={item.img || IMAGE_FALLBACK}
                    alt={item.name}
                    onError={(e) => (e.target.src = IMAGE_FALLBACK)}
                    style={{
                      width: 70,
                      height: 70,
                      objectFit: "cover",
                      borderRadius: 10,
                      marginRight: 15,
                    }}
                  />

                  <div className="flex-grow-1">
                    <div className="fw-semibold">
                      {item.name}
                    </div>
                    <div className="small text-muted">
                      Qty: {item.qty} × ₹{item.price}
                    </div>
                  </div>

                  <div className="fw-bold">
                    ₹{item.qty * item.price}
                  </div>
                </div>
              ))}

              <div className="d-flex justify-content-between border-top pt-3 mt-3">
                <strong>Total Paid</strong>
                <strong style={{ color: "#c2852b" }}>
                  ₹{viewOrder.total}
                </strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
