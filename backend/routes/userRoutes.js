// import express from "express";
// import {
//   forgotPassword,
//   resetPassword,
//   signin,
//   signup,
//   verifyEmail,
// } from "../controllers/userController.js";

// const router = express.Router();

// // User Authentication Routes
// router.post("/signup", signup);
// router.post("/signin", signin);
// router.post("/forgot-password", forgotPassword);
// router.get("/verify-email", verifyEmail);
// router.post("/reset-password", resetPassword);

// export default router;

import express from "express";
import {
  forgotPassword,
  getUserProfile,
  resetPassword,
  signin,
  signup,
  updateUserProfile,
  verifyEmail,
  verifyPasswordResetCode, // import the new controller
} from "../controllers/userController.js";
// import { getUserProfile, updateUserProfile } from "../../frontend/src/api/authService.js";

const router = express.Router();

// User Authentication Routes
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/verify-email", verifyEmail);

// New Password Reset Flow
router.post("/forgot-password", forgotPassword);
router.post("/verify-reset-code", verifyPasswordResetCode); // New route for code verification
router.post("/reset-password", resetPassword);
// router.route('/profile').get(getUserProfile).put( updateUserProfile);
router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile);

export default router;