// src/components/ProductCard.jsx
import React from "react";
import { addToCart } from "../utils/Cart";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.img} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="text-muted small">{product.desc}</p>
        <div className="d-flex justify-content-between align-items-center">
          <strong>₹{product.price}</strong>
          <button className="btn btn-sm btn-primary" onClick={() => {
            addToCart(product, 1);
            // optional: show a toast instead of alert
            alert("Added to cart");
          }}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
