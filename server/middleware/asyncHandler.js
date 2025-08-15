// middlewares/asyncHandler.js

// 1️⃣ Create a function called asyncHandler
// This function accepts another function (your controller) as an argument
const asyncHandler = (fn) => (req, res, next) =>
  // We call the controller function (fn)
  // Promise.resolve() ensures it works even if the controller doesn't explicitly return a Promise
  // If the function throws an error, .catch(next) sends the error to the central error handler
  Promise.resolve(fn(req, res, next)).catch(next);

// 3️⃣ Export it so we can use it in controllers
module.exports = asyncHandler;
