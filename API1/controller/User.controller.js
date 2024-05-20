// Example of enhanced route handler
import bcryptjs from "bcryptjs";

import { User } from "../models.js";
import ErrorHandler from "../utils/errorHandler.js";
import { validationResult } from "express-validator";
import { catchAsyncError } from "../utils/catchAsyncError.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res, next) => {
  console.log(req.body);
  const result = validationResult(req);

  if (!result.isEmpty()) {
    // If there are validation errors, return them immediately
    return res.status(400).json({
      errors: result.errors.map((item) => item.msg),
    });
  }
  try {
    const { username, email, password, role, profilePicture, bio } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new ErrorHandler("User Already Exists", 400);

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
      profilePicture,
      bio,
    });

    const { password: pass, ...userCreated } = newUser.toObject();

    await newUser.save();

    res.status(201).json({ message: "Success", userCreated });
  } catch (err) {
    next(err);
  }
};

// update User
export const updateUser = catchAsyncError(async (req, res, next) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    // If there are validation errors, return them immediately
    return res.status(400).json({
      errors: result.errors.map((item) => item.msg),
    });
  }

  const { username, role, profilePicture, bio } = req.body;
  const { id } = req.params;

  // Check if user already exists
  const existingUser = await User.findById(id);
  if (!existingUser) next(new ErrorHandler("can't find user", 400));

  // Create updateUser user
  const updateUser = new User(
    {
      username,

      role,
      profilePicture,
      bio,
    },
    { new: true }
  );

  res.status(201).json({ message: "Success", updateUser });
});

// LoginUser
export const LoginUser = catchAsyncError(async (req, res, next) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    // If there are validation errors, return them immediately
    return res.status(400).json({
      errors: result.errors.map((item) => item.msg),
    });
  }

  const { email, password } = req.body;
  console.log(req.body);
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return next(new ErrorHandler("User does not exist", 400));
  }

  const isMatch = bcryptjs.compare(password, existingUser.password);
  if (!isMatch) return next(new ErrorHandler("Wrong password", 400));

  const toke = jwt.sign({ id: existingUser._id }, process.env.secretKey, {
    expiresIn: "1hr",
  });

  const { password: hi, ...user } = existingUser.toObject();
  res.status(200).json({ message: "Success", user, toke });
});

export const getAllUser = catchAsyncError(async (req, res, next) => {
  const user = await User.find();
  res.status(200).json({ message: "Success", user });
});
export const getUser = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json({ message: "Success", user });
});
