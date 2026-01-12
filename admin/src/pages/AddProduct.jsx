import React, { useState } from "react";
import axios from "axios";
import { FiUpload, FiImage } from "react-icons/fi";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.image) {
      alert("Please select an image");
      return;
    }

    const data = new FormData();
    data.append("name", form.name);
    data.append("price", form.price);
    data.append("description", form.description);
    data.append("category", form.category);
    data.append("image", form.image);

    try {
      setLoading(true);

      await axios.post(
        "https://caterserv-ih8s.onrender.com/api/products/add",
        data
      );

      alert("✅ Product Added Successfully");

      setForm({
        name: "",
        price: "",
        description: "",
        category: "",
        image: null,
      });
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid p-4">
      <div className="row justify-content-center">
        <div className="col-lg-7">

          <div className="card shadow-lg border-0">
            <div className="card-header bg-dark text-white">
              <h4 className="mb-0">
                <FiUpload className="me-2" />
                Add New Product
              </h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>

                {/* PRODUCT NAME */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="e.g. Cheese Pizza"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* PRICE */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Price (₹)
                  </label>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="e.g. 299"
                    value={form.price}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* CATEGORY */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Category
                  </label>
                  <select
                    name="category"
                    className="form-select"
                    value={form.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select category</option>
                    <option value="starter">Starter</option>
                    <option value="main">Main Course</option>
                    <option value="drinks">Drinks</option>
                    <option value="offers">Offers</option>
                    <option value="special">Our Special</option>
                  </select>
                </div>

                {/* IMAGE */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Product Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    className="form-control"
                    accept="image/*"
                    onChange={handleChange}
                    required
                  />

                  {preview && (
                    <div className="mt-3 text-center">
                      <img
                        src={preview}
                        alt="Preview"
                        style={{
                          width: 140,
                          height: 140,
                          objectFit: "cover",
                          borderRadius: 10,
                          border: "1px solid #ddd",
                        }}
                      />
                      <div className="text-muted small mt-1">
                        Image Preview
                      </div>
                    </div>
                  )}
                </div>

                {/* DESCRIPTION */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Description
                  </label>
                  <textarea
                    name="description"
                    className="form-control"
                    rows="3"
                    placeholder="Short product description"
                    value={form.description}
                    onChange={handleChange}
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="btn btn-dark w-100 fw-bold"
                  disabled={loading}
                >
                  {loading ? "Uploading..." : "➕ Add Product"}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddProduct;
