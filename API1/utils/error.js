const errorMiddleware = (err, req, res, next) => {
  if (res.headersSent) {
    // Headers have already been sent, so we cannot send another response
    return;
  }

  let status = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  if (err.code === 11000) {
    status = 400;
    message = "Duplicate Key Error";
  }

  res.status(status).json({ success: false, message });
};

// Exporting error middleware
export default errorMiddleware;
