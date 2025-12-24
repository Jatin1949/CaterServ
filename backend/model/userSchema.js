import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{ type: String, default: ""},
    email:{ type: String, default: ""},
    password:{ type: String, default: ""},
    phone:{ type: Number, default: 0},
    resetToken: { type: String, default: "" },
    resetTokenExpiry: { type: Date, default: null },
},
{timestamps: true}
);

const userDataSchema = mongoose.model("user", userSchema)

export default userDataSchema;