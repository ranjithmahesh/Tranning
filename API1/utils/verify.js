import jwt from "jsonwebtoken";
import ErrorHandler from "./errorHandler.js";
import { catchAsyncError } from "./catchAsyncError.js";

export const verifyToken = catchAsyncError(async (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader)
    return next(new ErrorHandler("Access denied. No token provided.", 400));
  const token = authHeader.split(" ")[1];
  if (!token)
    return next(new ErrorHandler("Access denied. Invalid token format.", 401));

  const decode = jwt.verify(token, process.env.secretKey);
  if ((req.userId = decode.id)) next();
  else next(new ErrorHandler("somthing went worng in Token verifaction", 500));
});
