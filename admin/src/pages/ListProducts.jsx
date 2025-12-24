import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FiTrash2, FiEdit, FiSearch } from "react-icons/fi";

const IMAGE_BASE_URL = "http://localhost:2076/uploads";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [search, setSearch] = useState("");

  /* =====================
     FETCH PRODUCTS
  ===================== */
  const fetchInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:2076/api/products/list"
      );
      setAllProducts(res.data);
    } catch (error) {
      toast.error("Error fetching products");
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  /* =====================
     DELETE PRODUCT
  ===================== */
  const removeProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await axios.delete(
        `http://localhost:2076/api/products/${id}`
      );
      toast.success("Product Deleted");
      fetchInfo();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  /* =====================
     EDIT HANDLERS
  ===================== */
  const handleEditChange = (e) => {
    if (e.target.name === "image") {
      setEditProduct({ ...editProduct, image: e.target.files[0] });
    } else {
      setEditProduct({
        ...editProduct,
        [e.target.name]: e.target.value,
      });
    }
  };

  const updateProduct = async () => {
    try {
      const data = new FormData();
      data.append("name", editProduct.name);
      data.append("price", editProduct.price);
      data.append("category", editProduct.category);
      data.append("description", editProduct.description);

      if (editProduct.image instanceof File) {
        data.append("image", editProduct.image);
      }

      await axios.put(
        `http://localhost:2076/api/products/${editProduct._id}`,
        data
      );

      toast.success("Product Updated");
      setEditProduct(null);
      fetchInfo();
    } catch (error) {
      toast.error("Update failed");
    }
  };

  /* =====================
     FILTER PRODUCTS
  ===================== */
  const filteredProducts = allProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  /* =====================
     CATEGORY BADGE COLOR
  ===================== */
  const badgeColor = (cat) => {
    switch (cat) {
      case "starter": return "primary";
      case "main": return "success";
      case "drinks": return "info";
      case "offers": return "warning";
      case "special": return "danger";
      default: return "secondary";
    }
  };

  return (
    <div className="container-fluid p-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold">
          All Products
          <span className="badge bg-dark ms-2">
            {allProducts.length}
          </span>
        </h3>

        {/* SEARCH */}
        <div className="input-group" style={{ maxWidth: 300 }}>
          <span className="input-group-text">
            <FiSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* PRODUCT TABLE */}
      <div
        className="card border-0 shadow-lg"
        style={{
          backdropFilter: "blur(10px)",
          borderRadius: 14,
        }}
      >
        <div className="card-body p-0">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th style={{ width: 160 }}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-muted">
                    No matching products found
                  </td>
                </tr>
              )}

              {filteredProducts.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img
                      src={`${IMAGE_BASE_URL}/${product.image}`}
                      alt={product.name}
                      style={{
                        width: 56,
                        height: 56,
                        objectFit: "cover",
                        borderRadius: 10,
                        transition: "0.3s",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </td>

                  <td className="fw-semibold">{product.name}</td>

                  <td>
                    <span className={`badge bg-${badgeColor(product.category)} text-capitalize`}>
                      {product.category}
                    </span>
                  </td>

                  <td className="fw-bold">₹{product.price}</td>

                  <td>
                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() => setEditProduct(product)}
                    >
                      <FiEdit /> Edit
                    </button>

                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeProduct(product._id)}
                    >
                      <FiTrash2 /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* =====================
         EDIT MODAL
      ===================== */}
      {editProduct && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg p-3">
              <h5 className="fw-bold mb-3">✏️ Edit Product</h5>

              <input
                className="form-control mb-2"
                name="name"
                value={editProduct.name}
                onChange={handleEditChange}
              />

              <input
                className="form-control mb-2"
                type="number"
                name="price"
                value={editProduct.price}
                onChange={handleEditChange}
              />

              <select
                className="form-control mb-2"
                name="category"
                value={editProduct.category}
                onChange={handleEditChange}
              >
                <option value="starter">Starter</option>
                <option value="main">Main</option>
                <option value="drinks">Drinks</option>
                <option value="offers">Offers</option>
                <option value="special">Special</option>
              </select>

              <input
                type="file"
                name="image"
                className="form-control mb-2"
                onChange={handleEditChange}
              />

              <textarea
                className="form-control mb-3"
                name="description"
                value={editProduct.description}
                onChange={handleEditChange}
              />

              <div className="d-flex justify-content-end gap-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditProduct(null)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={updateProduct}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListProduct;
    