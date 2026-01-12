import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";

import dbconnect from "./connect/dbConnect.js";
import userRouter from "./routes/userRouter.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";


dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5174",
    "https://caterserv-ih8s.onrender.com",
    "https://cater-serv-git-main-jatin-kumars-projects-52532dce.vercel.app/",
    "https://cater-serv-sngb.vercel.app/",
    // add frontend/admin deployed URLs later
  ],
  credentials: true
}));


// routes
app.use("/uploads", express.static("uploads/products"));
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/user", userRouter);

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running");
});

const port = 2076;

// DB
dbconnect();

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
