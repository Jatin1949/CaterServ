import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) return toast.error("Enter your email");

        try {
            const res = await axios.post("https://caterserv-ih8s.onrender.com/user/forgot-password", { email });
            console.log("forgot res:", res.data);
            if (res.data?.status === 200) {
                toast.success(res.data.message || "Reset email sent, check your inbox");
            } else {
                toast.error(res.data.message || "Could not send reset email");
            }
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || err.message || "Something went wrong");
        }
    };

    return (
        <div className="bg-light">
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card shadow p-4" style={{ width: "100%", maxWidth: "420px" }}>
                    <h3 className="text-center mb-4">Reset Password</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your registered email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Send Reset Link</button>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
