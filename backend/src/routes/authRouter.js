import express from "express";
import trimRequest from "trim-request";
import {
  register,
  sendOtp,
  verifyOTP,
  refreshToken,
  login,
  join,
  logout,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";

const authRouter = express.Router();

// Join Route
authRouter.route("/join").post(trimRequest.all, join);

// Login Route
authRouter.route("/login").post(trimRequest.all, login);

// Logout Route
authRouter.route("/logout").post(trimRequest.all, logout);

// Register Route
authRouter.route("/register").post(trimRequest.all, register, sendOtp);

// Send OTP Route
authRouter.route("/send-otp").post(trimRequest.all, sendOtp);

// Verify OTP Route
authRouter.route("/verify-otp").post(trimRequest.all, verifyOTP);

// Forgot Password Route
authRouter.route("/forgot-password").post(trimRequest.all, forgotPassword);

// Reset Password Route
authRouter.route("/reset-password").post(trimRequest.all, resetPassword);

// Refresh Token Route
authRouter.route("/refresh-token").post(trimRequest.all, refreshToken);

export default authRouter;
