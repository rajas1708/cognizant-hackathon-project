

import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ApiError, ApiResponse } from "../utils/api.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

// --- SIGNUP ---
export const signup = async (req, res, next) => {
  const { firstName, lastName, email, password, organization } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(new ApiError(400, "User already exists"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      organization,
      isVerified: false,
    });

    const verificationToken = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );
    const verificationLink = `${
      process.env.BASE_URL
    }/verify-email?token=${encodeURIComponent(verificationToken)}`;
    
    const signupEmailBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Verify Your Email</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f7; }
          .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; }
          .header { background-color: #2563eb; color: #ffffff; padding: 20px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { padding: 30px; line-height: 1.6; color: #333; }
          .content p { margin: 0 0 20px; }
          .button-container { text-align: center; margin: 30px 0; }
          /* --- BUTTON TEXT COLOR CHANGED HERE --- */
          .cta-button { background-color: #2563eb; color: #000000; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block; }
          .footer { background-color: #f4f4f7; color: #888; text-align: center; padding: 20px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to MedPredict!</h1>
          </div>
          <div class="content">
            <h2>Hi ${firstName},</h2>
            <p>Thank you for signing up for the MedPredict Portal. To complete your registration and secure your account, please verify your email address by clicking the button below.</p>
            <div class="button-container">
              <a href="${verificationLink}" class="cta-button">Verify Email Address</a>
            </div>
            <p>If you did not sign up for this account, you can safely ignore this email.</p>
            <p>Best regards,<br/>The MedPredict Team</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} MedPredict. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>`;

    await sendEmail(email, "Verify Your Email for MedPredict", signupEmailBody);
    res.status(201).json(
      new ApiResponse(201, {
        message: "User created successfully. Please verify your email.",
      })
    );
  } catch (error) {
    next(new ApiError(500, "Error in signup controller", [error.message]));
  }
};

// --- FORGOT PASSWORD (CODE-BASED) ---
export const forgotPassword = async (req, res, next) => {
  const { email, organization } = req.body;

  try {
    const user = await User.findOne({ email, organization });
    if (!user) {
      return next(new ApiError(404, "If the email and organization match our records, a password reset code will be sent."));
    }

    const resetCode = crypto.randomInt(100000, 999999).toString();

    user.passwordResetCode = resetCode;
    user.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();
    
    const passwordResetEmailBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Your Password Reset Code</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f7; }
          .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; }
          .header { background-color: #1e293b; color: #ffffff; padding: 20px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { padding: 30px; line-height: 1.6; color: #333; text-align: center; }
          .content p { margin: 0 0 20px; }
          .code-container { background-color: #f1f5f9; border-radius: 8px; padding: 20px; margin: 20px auto; max-width: 200px; }
          .code { font-size: 36px; font-weight: bold; letter-spacing: 5px; color: #1e293b; }
          .footer { background-color: #f4f4f7; color: #888; text-align: center; padding: 20px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Password Reset Request</h1>
          </div>
          <div class="content">
            <p>Hi ${user.firstName},</p>
            <p>We received a request to reset your password. Please use the verification code below to proceed.</p>
            <div class="code-container">
              <p style="margin-bottom: 10px;">Your verification code is:</p>
              <div class="code">${resetCode}</div>
            </div>
            <p>This code will expire in 10 minutes. If you did not request a password reset, please ignore this email.</p>
            <p>Best regards,<br/>The MedPredict Team</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} MedPredict. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>`;
      
    await sendEmail(email, "Your Password Reset Code", passwordResetEmailBody);

    res.status(200).json(
      new ApiResponse(200, {
        message: "Password reset code sent to your email.",
      })
    );
  } catch (error) {
    next(new ApiError(500, "Error in forgot password controller", [error.message]));
  }
};

// --- VERIFY RESET CODE (NEW) ---
export const verifyPasswordResetCode = async (req, res, next) => {
    const { email, code } = req.body;

    try {
        const user = await User.findOne({
            email,
            passwordResetCode: code,
            passwordResetExpires: { $gt: Date.now() },
        });

        if (!user) {
            return next(new ApiError(400, "Invalid or expired verification code."));
        }

        user.passwordResetCode = undefined;
        user.passwordResetExpires = undefined;
        await user.save();

        const resetToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
            expiresIn: "10m",
        });

        res.status(200).json(new ApiResponse(200, { 
            message: "Code verified successfully.",
            resetToken 
        }));

    } catch (error) {
        next(new ApiError(500, "Error verifying reset code", [error.message]));
    }
};


// --- RESET PASSWORD ---
export const resetPassword = async (req, res, next) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
      return next(new ApiError(400, "Token and new password are required."));
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(decoded.id);
    if (!user) {
      return next(new ApiError(404, "User not found"));
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json(new ApiResponse(200, { message: "Password has been reset successfully." }));
  } catch (error) {
    return next(new ApiError(400, "Invalid or expired token.", [error.message]));
  }
};

// --- OTHER UNCHANGED FUNCTIONS ---

export const verifyEmail = async (req, res, next) => {
  const { token } = req.query;
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.id);
    if (!user) {
      return next(new ApiError(404, "User not found"));
    }
    if (user.isVerified) {
      return res.status(200).json(new ApiResponse(200, { message: "Email already verified" }));
    }
    user.isVerified = true;
    await user.save();
    res.status(200).json(new ApiResponse(200, { message: "Email verified successfully" }));
  } catch (error) {
    next(new ApiError(400, "Invalid or expired token"));
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return next(new ApiError(404, "User not found"));
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return next(new ApiError(400, "Invalid credentials"));
    }
    if (!existingUser.isVerified) {
      return next(new ApiError(403, "Email not verified"));
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );
 

    res.status(200).json(new ApiResponse(200, { user: existingUser, token }));
    

  } catch (error) {
    next(new ApiError(500, "Error in signin controller", [error.message]));
  }
};


// // ... existing code ...
// export const getUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// /**
//  * @desc    Update user profile
//  * @route   PUT /api/users/profile
//  * @access  Private
//  */
// export const updateUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);

//     if (user) {
//       user.firstName = req.body.firstName || user.firstName;
//       user.lastName = req.body.lastName || user.lastName;
//       user.location = req.body.location || user.location;
//       user.phone = req.body.phone || user.phone;
//       user.dob = req.body.dob || user.dob;
//       user.gender = req.body.gender || user.gender;

//       if (req.body.organization) {
//         user.organization.name = req.body.organization.name || user.organization.name;
//         user.organization.website = req.body.organization.website || user.organization.website;
//         user.organization.description = req.body.organization.description || user.organization.description;
//         user.organization.address = req.body.organization.address || user.organization.address;
//       }

//       const updatedUser = await user.save();

//       res.json({
//         _id: updatedUser._id,
//         firstName: updatedUser.firstName,
//         lastName: updatedUser.lastName,
//         email: updatedUser.email,
//         location: updatedUser.location,
//         phone: updatedUser.phone,
//         dob: updatedUser.dob,
//         gender: updatedUser.gender,
//         organization: updatedUser.organization,
//       });
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };


// export const getUserProfile = async (req, res) => {
//   try {
//     // get token from Authorization header
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ message: "Not authorized, no token" });
//     }

//     const token = authHeader.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);

//     const user = await User.findById(decoded.id).select("-password");
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // --- UPDATE USER PROFILE ---
// export const updateUserProfile = async (req, res) => {
//   try {
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ message: "Not authorized, no token" });
//     }

//     const token = authHeader.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);

//     const user = await User.findById(decoded.id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // update fields
//     user.firstName = req.body.firstName || user.firstName;
//     user.lastName = req.body.lastName || user.lastName;
//     user.location = req.body.location || user.location;
//     user.phone = req.body.phone || user.phone;
//     user.dob = req.body.dob || user.dob;
//     user.gender = req.body.gender || user.gender;

//     if (req.body.organization) {
//       user.organization.name = req.body.organization.name || user.organization.name;
//       user.organization.website = req.body.organization.website || user.organization.website;
//       user.organization.description = req.body.organization.description || user.organization.description;
//       user.organization.address = req.body.organization.address || user.organization.address;
//     }

//     const updatedUser = await user.save();

//     res.json({
//       _id: updatedUser._id,
//       firstName: updatedUser.firstName,
//       lastName: updatedUser.lastName,
//       email: updatedUser.email,
//       location: updatedUser.location,
//       phone: updatedUser.phone,
//       dob: updatedUser.dob,
//       gender: updatedUser.gender,
//       organization: updatedUser.organization,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };


export const getUserProfile = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update fields
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.location = req.body.location || user.location;
    user.phone = req.body.phone || user.phone;
    user.dob = req.body.dob || user.dob;
    user.gender = req.body.gender || user.gender;

    // Update organization if provided
    if (req.body.organization) {
      user.organization = {
        ...user.organization,
        ...req.body.organization
      };
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      location: updatedUser.location,
      phone: updatedUser.phone,
      dob: updatedUser.dob,
      gender: updatedUser.gender,
      organization: updatedUser.organization,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};