import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import Product from "../model/Product.js"; // ✅ FIXED PATH
import fs from "fs";
const router = express.Router();

/* ---------------- PATH SETUP ---------------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* =========================
   ADD PRODUCT
========================= */
router.post("/add", async (req, res) => {
  try {
    const { name, price, category, description } = req.body;

    // basic validation
    if (!name || !price || !category) {
      return res.json({ success: false, message: "Missing fields" });
    }

    if (!req.files || !req.files.image) {
      return res.json({ success: false, message: "Image required" });
    }

    const image = req.files.image;

    // clean file name
    const fileName =
      Date.now() + "_" + image.name.replace(/\s+/g, "_");

    // absolute path (safe on Windows)
    const uploadPath = path.join(
      __dirname,
      "../uploads/products",
      fileName
    );

    // move image
    await image.mv(uploadPath);

    // save product
    const product = await Product.create({
      name,
      price,
      category,
      description,
      image: fileName,
    });

    res.json({ success: true, product });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

/* =========================
   LIST PRODUCTS
========================= */
router.get("/list", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// DELETE PRODUCT
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // delete image file
    const imagePath = `uploads/products/${product.image}`;
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await Product.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: "Product deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Delete failed" });
  }
});

// UPDATE PRODUCT
router.put("/:id", async (req, res) => {
  try {
    const { name, price, category, description } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = name;
    product.price = price;
    product.category = category;
    product.description = description;

    // if new image uploaded
    if (req.files && req.files.image) {
      const image = req.files.image;
      const fileName =
        Date.now() + "_" + image.name.replace(/\s+/g, "_");

      await image.mv(`uploads/products/${fileName}`);

      // delete old image
      const fs = await import("fs");
      const oldImage = `uploads/products/${product.image}`;
      if (fs.default.existsSync(oldImage)) {
        fs.default.unlinkSync(oldImage);
      }

      product.image = fileName;
    }

    await product.save();
    res.json({ success: true, message: "Product updated" });
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});


export default router;
