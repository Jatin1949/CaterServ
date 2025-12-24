import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import { addToCart } from "../utils/Cart";

/* 🔥 IMPORTANT: backend image base URL */
const IMAGE_BASE_URL = "http://localhost:2076/uploads";

/* =====================
   MENU GRID
===================== */
function MenuGrid({ items }) {
  if (items.length === 0) {
    return (
      <div className="text-center text-muted py-5 fs-5">
        No items available
      </div>
    );
  }

  const handleAdd = (prod) => {
    addToCart(
      {
        id: prod._id,
        name: prod.name,
        price: prod.price,
        img: `${IMAGE_BASE_URL}/${prod.image}`,
        desc: prod.description,
      },
      1
    );

    swal.fire({
      icon: "success",
      title: "Added to Cart",
      text: prod.name,
      timer: 1200,
      showConfirmButton: false,
    });
  };

  const handleView = (prod) => {
    swal.fire({
      title: prod.name,
      text: prod.description,
      imageUrl: `${IMAGE_BASE_URL}/${prod.image}`,
      imageWidth: 220,
      confirmButtonText: `₹${prod.price}`,
      confirmButtonColor: "#d4a75a",
    });
  };

  return (
    <div className="row">
      {items.map((prod) => (
        <div
          key={prod._id}
          className="col-lg-6 col-md-12 mb-4"
        >
          <div
            className="d-flex flex-column flex-sm-row align-items-center p-3 rounded-4 shadow-sm bg-white"
            style={{ border: "1px solid #f0e6d2" }}
          >
            <img
              src={`${IMAGE_BASE_URL}/${prod.image}`}
              alt={prod.name}
              className="rounded-circle border mb-3 mb-sm-0"
              style={{
                width: 110,
                height: 110,
                objectFit: "cover",
              }}
            />

            <div className="flex-grow-1 ps-0 ps-sm-4 text-center text-sm-start">
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                <h5 className="fw-bold text-dark mb-0">
                  {prod.name}
                </h5>
                <span
                  className="fw-bold fs-5"
                  style={{ color: "#d4a75a" }}
                >
                  ₹{prod.price}
                </span>
              </div>

              <p className="text-muted small mb-3">
                {prod.description}
              </p>

              <div className="d-flex gap-2 flex-wrap justify-content-center justify-content-sm-start">
                <button
                  className="btn btn-sm px-4"
                  style={{
                    backgroundColor: "#d4a75a",
                    color: "#000",
                    borderRadius: "25px",
                  }}
                  onClick={() => handleAdd(prod)}
                >
                  Add to Cart
                </button>

                <button
                  className="btn btn-sm btn-outline-dark px-4"
                  style={{ borderRadius: "25px" }}
                  onClick={() => handleView(prod)}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* =====================
   SHOP PAGE
===================== */
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState("starter");

  useEffect(() => {
    const fetchProducts = () => {
      axios
        .get("http://localhost:2076/api/products/list")
        .then((res) => setProducts(res.data))
        .catch(() => {});
    };

    fetchProducts();
    const interval = setInterval(fetchProducts, 5000);

    return () => clearInterval(interval);
  }, []);

  const categories = [
    { key: "starter", label: "Starter" },
    { key: "main", label: "Main Course" },
    { key: "drinks", label: "Drinks" },
    { key: "offers", label: "Offers" },
    { key: "special", label: "Our Special" },
  ];

  const filtered = products.filter((p) => p.category === active);

  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#fffaf3" }}
    >
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <span
            className="px-4 py-2 rounded-pill fw-semibold"
            style={{
              border: "1px solid #d4a75a",
              color: "#d4a75a",
              letterSpacing: "1px",
            }}
          >
            OUR MENU
          </span>

          <h1 className="mt-4 fw-bold text-dark">
            Most Popular Food
          </h1>

          <p className="text-muted mt-2">
            Discover our carefully crafted dishes
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className="px-4 py-2 fw-semibold"
              style={{
                borderRadius: "30px",
                backgroundColor:
                  active === cat.key ? "#d4a75a" : "transparent",
                color:
                  active === cat.key ? "#000" : "#d4a75a",
                border: "1px solid #d4a75a",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <MenuGrid items={filtered} />

      </div>
    </div>
  );
};

export default Shop;
