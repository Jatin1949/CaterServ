// src/Pages/Cart.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPlus, FiMinus, FiTrash2, FiShoppingCart } from "react-icons/fi";
import { readCart, removeFromCart, updateQty } from "../utils/Cart";

export default function Cart() {
  const navigate = useNavigate();

  const [items, setItems] = useState(() => readCart());
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [shippingSelected, setShippingSelected] = useState("standard");

  useEffect(() => {
    const reloadCart = () => setItems(readCart());

    const onStorage = (e) => {
      if (e.key === "cart_v1" || e.key === null) reloadCart();
    };

    window.addEventListener("cartUpdated", reloadCart);
    window.addEventListener("storage", onStorage);

    reloadCart();

    return () => {
      window.removeEventListener("cartUpdated", reloadCart);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const subtotal = useMemo(
    () => items.reduce((acc, it) => acc + (it.price || 0) * (it.qty || 0), 0),
    [items]
  );

  const shipping = useMemo(
    () => (items.length === 0 ? 0 : shippingSelected === "fast" ? 149 : 49),
    [items, shippingSelected]
  );

  const couponDiscount = useMemo(() => {
    if (!appliedCoupon) return 0;
    if (appliedCoupon === "FLAT300") return Math.min(300, subtotal * 0.5);
    if (appliedCoupon === "SAVE10") return Math.round(subtotal * 0.1);
    return 0;
  }, [appliedCoupon, subtotal]);

  const tax = useMemo(
    () => Math.round((subtotal - couponDiscount) * 0.18),
    [subtotal, couponDiscount]
  );

  const total = subtotal - couponDiscount + tax + shipping;

  const applyCoupon = () => {
    const code = (coupon || "").trim().toUpperCase();
    if (!code) return;
    if (code === "FLAT300" || code === "SAVE10") {
      setAppliedCoupon(code);
      setCoupon("");
    } else {
      alert("Invalid coupon code. Try SAVE10 or FLAT300");
    }
  };

  const clearCart = () => {
    if (!window.confirm("Clear all items from cart?")) return;
    localStorage.setItem("cart_v1", JSON.stringify([]));
    window.dispatchEvent(new Event("cartUpdated"));
    setItems([]);
  };

  const format = (n) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);

  const handleCheckout = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      navigate("/checkout-page");
    } else {
      alert("Please login to continue to checkout.");
      navigate("/login", { state: { from: "/checkout-page" } });
    }
  };

  return (
    <div className="bg-light py-5">
      <div className="container">
        {/* HEADER */}
        <div className="d-flex flex-column flex-sm-row align-items-center gap-3 mb-4">
          <h2 className="me-sm-3 mb-0">🛒 My Cart</h2>

          <span className="badge bg-primary fs-6">
            <FiShoppingCart className="me-1" />
            {items.reduce((a, b) => a + (b.qty || 0), 0)} items
          </span>

          <div className="ms-sm-auto">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={clearCart}
              disabled={items.length === 0}
            >
              <FiTrash2 className="me-1" /> Clear Cart
            </button>
          </div>
        </div>

        <div className="row g-4">
          {/* CART ITEMS */}
          <div className="col-lg-8">
            {items.length === 0 ? (
              <div className="card p-5 text-center">
                <h4 className="mb-3">Your cart is empty</h4>
                <p className="text-muted">Add products to get started.</p>
                <Link to="/menu" className="btn btn-outline-primary">
                  Browse menu
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="card mb-3 shadow-sm">
                  <div className="row g-0 align-items-center">
                    <div className="col-12 col-md-3 p-3 text-center">
                      <img
                        src={item.img || "/img/menu-01.jpg"}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{
                          width: "100%",
                          maxHeight: 150,
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="col-12 col-md-6 p-3 text-center text-md-start">
                      <h5 className="mb-1">{item.name}</h5>
                      <p className="text-muted small mb-2">{item.desc}</p>
                      <div className="d-flex justify-content-center justify-content-md-start gap-2 align-items-center">
                        <span className="fw-bold">{format(item.price)}</span>
                        <span className="text-muted">each</span>
                      </div>
                    </div>

                    <div className="col-12 col-md-3 p-3 text-center text-md-end">
                      <div className="d-inline-flex align-items-center mb-2">
                        <button
                          className="btn btn-outline-secondary btn-sm me-2"
                          onClick={() => {
                            updateQty(item.id, Math.max(1, (item.qty || 1) - 1));
                            setItems(readCart());
                          }}
                        >
                          <FiMinus />
                        </button>

                        <div className="px-3 py-2 border rounded">
                          {item.qty}
                        </div>

                        <button
                          className="btn btn-outline-secondary btn-sm ms-2"
                          onClick={() => {
                            updateQty(item.id, (item.qty || 0) + 1);
                            setItems(readCart());
                          }}
                        >
                          <FiPlus />
                        </button>
                      </div>

                      <div>
                        <button
                          className="btn btn-link text-danger small"
                          onClick={() => {
                            removeFromCart(item.id);
                            setItems(readCart());
                          }}
                        >
                          <FiTrash2 className="me-1" /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* SUMMARY */}
          <div className="col-lg-4">
            <div className="card p-4 position-sticky" style={{ top: 20 }}>
              <h5 className="mb-3">Order Summary</h5>

              <div className="d-flex justify-content-between">
                <small className="text-muted">Subtotal</small>
                <strong>{format(subtotal)}</strong>
              </div>

              <div className="d-flex justify-content-between mt-2 align-items-center">
                <small className="text-muted">Shipping</small>
                <select
                  className="form-select form-select-sm w-auto"
                  value={shippingSelected}
                  onChange={(e) => setShippingSelected(e.target.value)}
                >
                  <option value="standard">Standard - ₹49</option>
                  <option value="fast">Fast - ₹149</option>
                </select>
              </div>

              <div className="input-group input-group-sm mt-3">
                <input
                  className="form-control"
                  placeholder="SAVE10 / FLAT300"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button
                  className="btn btn-outline-primary"
                  onClick={applyCoupon}
                  disabled={!coupon.trim()}
                >
                  Apply
                </button>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <small className="text-muted">Discount</small>
                <small className="text-success">
                  - {format(couponDiscount)}
                </small>
              </div>

              <div className="d-flex justify-content-between">
                <small className="text-muted">Tax (18%)</small>
                <small>{format(tax)}</small>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <small className="text-muted">Shipping</small>
                <small>{format(shipping)}</small>
              </div>

              <div className="d-flex justify-content-between border-top pt-3 mb-3">
                <h6>Total</h6>
                <h5>{format(total)}</h5>
              </div>

              <button
                className="btn btn-primary w-100 mb-2"
                disabled={items.length === 0}
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>

              <button
                className="btn btn-outline-secondary w-100"
                onClick={() => alert("Saved for later — demo action")}
              >
                Save for later
              </button>

              <div className="text-center small text-muted mt-3">
                Secure checkout • 128-bit SSL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
