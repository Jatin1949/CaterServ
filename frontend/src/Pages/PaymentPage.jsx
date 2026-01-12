// src/pages/PaymentPage.jsx
import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function PaymentPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  /* ======================
     READ ORDER FROM STORAGE
  ====================== */
  let order = null;
  try {
    order = JSON.parse(localStorage.getItem("demo_order"));
  } catch {
    order = null;
  }

  const [processing, setProcessing] = useState(false);

  /* ======================
     PRICE CALCULATIONS
  ====================== */
  const subtotal = useMemo(() => {
    if (!order?.items) return 0;
    return order.items.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
  }, [order]);

  const tax = Math.round(subtotal * 0.18);
  const shipping = 49;
  const total = subtotal + tax + shipping;

  const formatINR = (n) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);

  /* ======================
     PLACE ORDER
  ====================== */
  const handlePayNow = async () => {
    if (!order) return;

    setProcessing(true);

    const payload = {
      orderId: order.id,
      items: order.items,
      customer: order.customer,
      subtotal,
      tax,
      shipping,
      total,
      paid: true,
      paidAt: new Date(),
    };

    try {
      await axios.post(
        "https://caterserv-ih8s.onrender.com/api/orders/create",
        payload
      );

      // Clear cart
      localStorage.removeItem("cart_v1");

      Swal.fire({
        icon: "success",
        title: "Order Placed Successfully 🎉",
        confirmButtonColor: "#c2852b",
      }).then(() => navigate("/shop"));
    } catch (error) {
      Swal.fire("Error", "Order not saved", "error");
    }

    setProcessing(false);
  };

  /* ======================
     UI
  ====================== */
  if (!order) {
    return (
      <div className="container py-5 text-center">
        <h4>Order not found</h4>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/shop")}
        >
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#fffaf3" }}
    >
      <div className="container">
        <h2 className="mb-4">Payment / Order #{orderId}</h2>

        <div className="row">
          {/* ORDER ITEMS */}
          <div className="col-md-8">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="mb-3">Order Items</h5>

                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between border-bottom py-2"
                  >
                    <div>
                      <strong>{item.name}</strong>
                      <div className="text-muted small">
                        {item.qty} × {formatINR(item.price)}
                      </div>
                    </div>
                    <strong>
                      {formatINR(item.price * item.qty)}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            {/* DELIVERY */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>Delivery Address</h5>
                <p className="mb-0">
                  {order.customer?.fullName}
                </p>
                <small className="text-muted">
                  {order.customer?.address},{" "}
                  {order.customer?.city}
                </small>
              </div>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="mb-3">Order Summary</h5>

                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>{formatINR(subtotal)}</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span>Tax (18%)</span>
                  <span>{formatINR(tax)}</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span>Shipping</span>
                  <span>{formatINR(shipping)}</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>{formatINR(total)}</span>
                </div>

                <button
                  className="btn w-100 mt-4"
                  style={{
                    backgroundColor: "#c2852b",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                  onClick={handlePayNow}
                  disabled={processing}
                >
                  {processing ? "Processing..." : "Place Order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
