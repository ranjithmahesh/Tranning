// Example of enhanced route handler

import { Employer, User } from "../models.js";
import { catchAsyncError } from "../utils/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";

export const createEmployer = catchAsyncError(async (req, res, next) => {
  const { name, contactEmail, website, address, logoURL } = req.body;
  const { id } = req.params;
  const existingUser = await User.findById(id);
  if (!existingUser) next(new ErrorHandler("can't find user", 400));

  const newEmployer = new Employer({
    name,
    contactEmail,
    website,
    address,
    logoURL,
    owner: id,
  });

  await newEmployer.save();
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { role: "Employer" },
    { new: true }
  );
  const { password, ...userDeatails } = updatedUser.toObject();

  const data = { ...userDeatails, ...newEmployer.toObject() };
  res.status(201).json({ message: "Success", data });
});

// update User
export const updateEmployer = catchAsyncError(async (req, res, next) => {
  // console.log(req.body);
  // const result = validationResult(req);

  // if (!result.isEmpty()) {
  //   // If there are validation errors, return them immediately
  //   return res.status(400).json({
  //     errors: result.errors.map((item) => item.msg),
  //   });
  // }

  const { name, contactEmail, website, address, logoURL } = req.body;
  const { id } = req.params;

  const existingUser = await User.findById(id);
  if (!existingUser) next(new ErrorHandler("can't find user", 400));

  const updateEmployer = await Employer.findByIdAndUpdate({
    name,
    contactEmail,
    website,
    address,
    logoURL,
  });

  res.status(200).json({ message: "Success", updateEmployer });
});

export const getAllEmployer = catchAsyncError(async (req, res, next) => {
  const Employer = await Employer.find();

  console.log(Employer);
  res.status(200).json({ message: "Success", Employer });
});
export const getEmployer = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json({ message: "Success", user });
});
