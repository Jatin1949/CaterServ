import userDataSchema from "../model/userSchema.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
export const signUp = async (req, res) => {
  try {
    const findEmail = await userDataSchema.findOne({ email: req.body.email });
    console.log(findEmail, "result");
    if (findEmail !== null) {
      return res.json({
        success: false,
        status: 400,
        message: "User already existed.",
        body: {},
      });
    } else {
      const saltRound = 10;
      const encPass = await bcrypt.hash(req.body.password, saltRound);
      console.log(req.body, "result");

      const data = await userDataSchema.create({
        ...req.body,
        password: encPass,
      });

      return res.json({
        success: true,
        status: 200,
        message: "User Created Successfully",
        body: data,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      status: 400,
      message: error,
      body: {},
    });
  }
};

export const login = async (req, res) => {
  try {
    const data = await userDataSchema.findOne({ email: req.body.email });
    if (!req.body.email) {
      return res.json({
        message: "Please enter the email",
        status: 400,
        success: false,
        body: {},
      });
    } else if (!req.body.password) {
      return res.json({
        message: "PLease enter the password",
        status: 400,
        success: false,
        body: {},
      });
    } else {
      if (data == null) {
        return res.json({
          message: "Email is not valid",
          status: 400,
          success: false,
          body: {},
        });
      } else {
        const decPass = await bcrypt.compare(req.body.password, data.password);
        if (decPass == false) {
          return res.json({
            message: "Password is not valid",
            status: 400,
            success: false,
            body: {},
          });
        } else {
          return res.json({
            message: "User login Successfully",
            status: 200,
            success: true,
            body: data,
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
    return res.json({
      message: error,
      status: 400,
      success: false,
      body: {},
    });
  }
};
//05-11-25
export const findUser = async (req, res) => {
  try {
    const data = await userDataSchema.find();
    const count=await userDataSchema.countDocuments();
    console.log(data, "All users data");
    return res.json({
      success: true,
      status: 200,
      message: "All the users data",
      body: data,count,
    });
  } catch (error) {
    console.log(error);
  }
};

export const findByIdByBody = async (req, res) => {
  try {
    const data = await userDataSchema.findById(req.body.id);
    console.log(data, "Single User Data by using id");
    return res.json({
      success: true,
      status: 200,
      message: "Single user data",
      body: data,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      message: error.message,
      status: 400,
      success: false,
      body: {},
    });
  }
};

export const findByIdByParams = async (req, res) => {
  try {
    const data = await userDataSchema.findById({ _id: req.params.id });
    console.log(data, "My data");
    return res.json({
      success: true,
      status: 200,
      message: "Single user data by params",
      body: data,
    });
  } catch (error) {
    return res.json({
      message: error,
      status: 400,
      success: false,
      body: {},
    });
  }
};
export const deleteFromIdByParams = async (req, res) => {
  try {
    const data = await userDataSchema.findByIdAndDelete({ _id: req.params.id });
    const count = await userDataSchema.countDocuments()
    console.log(data, "My data");
    return res.json({
      success: true,
      status: 200,
      message: "successfully deleted",
      body: data, count
    });
  } catch (error) {
    return res.json({
      message: error,
      status: 400,
      success: false,
      body: {},
    });
  }
};

export const userUpdate = async (req, res) => {
  try {
    const salt = 10;
    const encPass = await bcrypt.hash(req.body.password, salt);
    const data = await userDataSchema.findByIdAndUpdate({
      _id: req.body.id
    }, {
      ...req.body, password: encPass
    }, { new: true });
    return res.json({
      success: true,
      status: 200,
      message: "User data updated successfully",
      body: data,
    })
  } catch (error) {
    return res.json({
      success: false,
      status: 400,
      message: error.message,
      body: {},
    })
  }
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.json({ 
      success:false, 
      status:400, 
      message:"Email required", 
      body:{} 
    });

    const user = await userDataSchema.findOne({ email: email.toLowerCase().trim() });
    if (!user) return res.json({ 
      success:false, 
      status:400, 
      message:"Email not registered", 
       body:{} });

    // create token & save hashed
    const token = crypto.randomBytes(32).toString("hex");
    const hashed = crypto.createHash("sha256").update(token).digest("hex");
    user.resetToken = hashed;
    user.resetTokenExpiry = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetUrl = `${process.env.FRONTEND_URL || "http://localhost:3000"}/reset-password?token=${token}&id=${user._id}`;

    // email options
    const mailOptions = {
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: user.email,
      subject: "Password Reset Request",
      html: `
        <p>Hi ${user.name || ""},</p>
        <p>You requested a password reset. Click the link below to reset your password (valid 1 hour):</p>
        <p><a href="${resetUrl}">Reset password</a></p>
        <p>If you didn't request this, ignore this email.</p>
      `,
    };

    // send mail
    await transporter.sendMail(mailOptions);

    return res.json({ 
      success:true, 
      status:200, 
      message:"Reset link sent to email", 
      body:{} 
    });
  } catch (err) {
    console.error("forgotPassword error:", err);
    return res.json({ 
      success:false, 
      status:400, 
      message:err.message || "Error", 
      body:{} 
    });
  }
};


export const resetPassword = async (req, res) => {
  try {
    const { userId, token, password } = req.body;
    if (!userId || !token || !password) 
      return res.json({ 
    success: false, 
    status: 400, 
    message: "Invalid request", 
    body: {} 
  });

    const hashed = crypto.createHash("sha256").update(token).digest("hex");
    const user = await userDataSchema.findOne({ _id: userId,
       resetToken: hashed, 
       resetTokenExpiry: { $gt: Date.now() } });
    if (!user) 
      return res.json({ 
      success: false, 
      status: 400, 
      message: "Invalid or expired token", 
      body: {} 
    });

    user.password = await bcrypt.hash(password, 10);
    user.resetToken = "";
    user.resetTokenExpiry = null;
    await user.save();

    return res.json({ 
      success: true, 
      status: 200, 
      message: "Password reset successfully", 
      body: {} 
    });
  } catch (err) {
    console.error(err);
    return res.json({  
      success: false, 
      status: 400, 
      message: err.message, 
      body: {} 
    });
  }
};