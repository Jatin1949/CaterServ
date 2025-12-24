import express from 'express';
import userDataSchema from "../model/userSchema.js";
import { signUp, login, findUser, findByIdByBody, findByIdByParams, deleteFromIdByParams, userUpdate, forgotPassword, resetPassword } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.post("/Register", signUp);
userRouter.post("/login", login);
userRouter.get("/findUser", findUser);
userRouter.post("/findByIdByBody", findByIdByBody);
userRouter.get("/findByIdByParams/:id", findByIdByParams);
// userRouter.delete("/deleteFromIdByParams/:id", deleteFromIdByParams);
// ADMIN - DELETE USER
userRouter.delete("/:id", async (req, res) => {
  try {
    await userDataSchema.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete user" });
  }
});

userRouter.put("/userUpdate/:id", userUpdate);
userRouter.post("/forgot-password", forgotPassword);
/* ======================
   GET ALL USERS
====================== */
userRouter.get("/list", async (req, res) => {
  try {
    const users = await userDataSchema.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
});


userRouter.post("/reset-password", resetPassword);



export default userRouter;