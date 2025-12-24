import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderId: String,
    items: Array,
    customer: Object,
    subtotal: Number,
    tax: Number,
    shipping: Number,
    total: Number,
    paid: Boolean,
    paidAt: Date,

  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
