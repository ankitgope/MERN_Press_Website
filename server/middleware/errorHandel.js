// middlewares/errorHandler.js

// 1️⃣ This is our global error handling middleware.
//    Express will automatically call this whenever `next(error)` is used.

const errorHandler = (err, req, res, next) => {
  // 2️⃣ Set default status code if not provided
 // Default to 500 if no status code is set
  const statusCode = res.statusCode && res.statusCode !==200 ? res.statusCode: 500;

  // 3️⃣ Send JSON response with error details
  res.status(statusCode).json({
    success: false, // Always false in case of errors
    message: err.message || "Internal Server Error", // Human-readable error message
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined, // Show stack only in dev
  });
};
module.exports = errorHandler; // 4️⃣ Export the error handler for use in the app

