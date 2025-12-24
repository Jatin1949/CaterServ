// src/Pages/CheckoutPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Inline-styled CheckoutPage (no external CSS)
 * - Reads cart from localStorage ("cart_v1" or "cart")
 * - Shows address form and order summary
 * - On Proceed it saves demo_order to localStorage and navigates to /checkout/payment/:orderId
 */

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [customer, setCustomer] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart_v1") || localStorage.getItem("cart") || "[]";
      const parsed = JSON.parse(raw || "[]");
      setItems(Array.isArray(parsed) ? parsed : []);
    } catch (err) {
      console.error("CheckoutPage: invalid cart JSON", err);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const subtotal = useMemo(() => items.reduce((s, it) => s + (it.price || 0) * (it.qty || 0), 0), [items]);
  const shipping = items.length ? 49 : 0;
  const tax = Math.round(0.18 * subtotal);
  const total = Math.max(0, subtotal + tax + shipping);

  function formatINR(n) {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
  }

  function handleProceedToPayment() {
    if (items.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    if (!customer.fullName.trim() || !customer.phone.trim() || !customer.address.trim()) {
      alert("Please complete name, phone and address.");
      return;
    }
    const orderId = Math.floor(Math.random() * 900000) + 100000;
    const order = { id: orderId, items, subtotal, tax, shipping, total, customer, createdAt: Date.now() };
    localStorage.setItem("demo_order", JSON.stringify(order));
    navigate(`/checkout/payment/${orderId}`);
  }

  // Inline style objects
  const colors = {
    accent: "#c2852b",
    bg: "#fffaf7",
    cardBorder: "rgba(200,180,160,0.15)",
    muted: "#6c6c6c",
    text: "#111",
  };

  const container = {
    background: colors.bg,
    minHeight: "70vh",
    padding: "40px 20px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  };

  const pageTitle = {
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: 36,
    margin: "0 0 18px 0",
    color: colors.text,
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "1fr 360px",
    gap: 24,
    alignItems: "start",
  };

  const card = {
    background: "#fff",
    borderRadius: 12,
    border: `1px solid ${colors.cardBorder}`,
    boxShadow: "0 6px 18px rgba(30,30,30,0.04)",
    padding: 16,
  };

  const addressInput = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 8,
    border: "1px solid rgba(0,0,0,0.08)",
    marginBottom: 10,
    outline: "none",
    fontSize: 14,
  };

  const sectionTitle = {
    margin: 0,
    marginBottom: 12,
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: 20,
    color: colors.text,
  };

  const itemRow = {
    display: "flex",
    gap: 12,
    padding: "12px 0",
    borderBottom: "1px dashed rgba(0,0,0,0.05)",
    alignItems: "flex-start",
  };

  const productImg = {
    width: 74,
    height: 74,
    objectFit: "cover",
    borderRadius: 8,
    border: "1px solid rgba(0,0,0,0.05)",
  };

  const productName = {
    fontWeight: 700,
    color: colors.text,
    fontSize: 16,
    marginBottom: 4,
  };

  const productDesc = {
    color: colors.muted,
    fontSize: 13,
    marginBottom: 6,
  };

  const summaryRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  };

  const totalStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: 800,
    fontSize: 18,
    marginTop: 12,
  };

  const ctaBtn = {
    width: "100%",
    padding: "12px 14px",
    background: `linear-gradient(180deg, ${colors.accent}, #b46f1f)`,
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 6px 18px rgba(194,130,43,0.18)",
  };

  const secondaryBtn = {
    width: "100%",
    padding: "10px 12px",
    background: "#fff",
    color: colors.text,
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: 8,
    cursor: "pointer",
    marginTop: 10,
  };

  if (loading) return <div style={container}>Loading cart…</div>;

  return (
    <div style={container}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={pageTitle}>Checkout</h1>

        <div style={grid}>
          {/* Left: Address & Items */}
          <div>
            <div style={{ ...card, marginBottom: 16 }}>
              <h3 style={sectionTitle}>Delivery address</h3>
              <div>
                <input
                  style={addressInput}
                  placeholder="Full name"
                  value={customer.fullName}
                  onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                />
                <input
                  style={addressInput}
                  placeholder="Phone"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                />
                <input
                  style={addressInput}
                  placeholder="Address (house, street)"
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                />
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    style={{ ...addressInput, flex: 1 }}
                    placeholder="City"
                    value={customer.city}
                    onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                  />
                  <input
                    style={{ ...addressInput, width: 140 }}
                    placeholder="Pincode"
                    value={customer.pincode}
                    onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div style={card}>
              <h3 style={sectionTitle}>Items</h3>
              {items.length === 0 ? (
                <div style={{ padding: 16, color: colors.muted }}>Your cart is empty.</div>
              ) : (
                items.map((it) => (
                  <div key={it.id} style={itemRow}>
                    <img src={it.img || "/img/menu-01.jpg"} alt={it.name} style={productImg} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div style={{ maxWidth: "70%" }}>
                          <div style={productName}>{it.name}</div>
                          <div style={productDesc}>{it.desc || ""}</div>
                        </div>
                        <div style={{ textAlign: "right", color: colors.muted }}>{formatINR((it.price || 0) * (it.qty || 1))}</div>
                      </div>
                      <div style={{ marginTop: 8, fontSize: 13, color: colors.muted }}>
                        {formatINR(it.price || 0)} × {it.qty || 1}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right: Summary */}
          <aside>
            <div style={{ ...card, position: "sticky", top: 100 }}>
              <h3 style={sectionTitle}>Order Summary</h3>

              <div style={summaryRow}>
                <div style={{ color: colors.muted }}>Subtotal</div>
                <div style={{ fontWeight: 600 }}>{formatINR(subtotal)}</div>
              </div>

              <div style={summaryRow}>
                <div style={{ color: colors.muted }}>Tax (18%)</div>
                <div style={{ fontWeight: 600 }}>{formatINR(tax)}</div>
              </div>

              <div style={summaryRow}>
                <div style={{ color: colors.muted }}>Shipping</div>
                <div style={{ fontWeight: 600 }}>{formatINR(shipping)}</div>
              </div>

              <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", marginTop: 12, paddingTop: 12 }}>
                <div style={totalStyle}>
                  <div style={{ color: colors.text }}>Total</div>
                  <div style={{ color: colors.text }}>{formatINR(total)}</div>
                </div>

                <button style={{ ...ctaBtn, marginTop: 14 }} onClick={handleProceedToPayment}>
                  Proceed to Payment
                </button>

                <button style={secondaryBtn} onClick={() => alert("Save for later — demo action")}>
                  Save for later
                </button>

                <div style={{ marginTop: 10, textAlign: "center", color: colors.muted, fontSize: 12 }}>
                  Secure checkout • 128-bit SSL
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// helper outside component so lint won't complain about inline function
function formatINR(n) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
}
