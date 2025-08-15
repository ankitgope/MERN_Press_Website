const User = require("../models/User"); // model from db
const bcrypt = require("bcrypt"); // password  hasing
const jwt = require("jsonwebtoken"); //create verify token
const Joi = require("joi");
const asyncHandler = require("../middleware/asyncHandler"); // handle async errors

// ==============================
// Validation Library joi schema
// ==============================
// Register schema
// This schema defines the structure and validation rules for user registration
// It checks that name is a string between 3 and 30 characters, email is a valid email, 
//   password is at least 6 characters, and role is either "user" or "admin"
// It also allows role to be optional, defaulting to "user" if not provided
// Login schema
// This schema defines the structure and validation rules for user login
// It checks that email is a valid email and password is provided
// It does not require a role since login is independent of user roles
// The schemas use Joi's validation methods to enforce these rules
// This schema defines the structure and validation rules for user registration



const registerSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("user", "admin").optional(),
});
// This schema defines the structure and validation rules for user login
// It checks that email is a valid email and password is provided
// It does not require a role since login is independent of user roles
// The schemas use Joi's validation methods to enforce these rules
// This schema defines the structure and validation rules for user login
// It checks that email is a valid email and password is provided
// It does not require a role since login is independent of user roles

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// ====================
// Register controller
// ====================
const register = asyncHandler(async (req, res) => {
  // 1 validate request body
  // 1. Validate request body against Joi schema
  // 2. On fail → throw error with validation message
  // 3. On pass → extract validated data
  // 4. Check for existing user in DB
  // 5. Hash password securely
  // 6. Save new user to DB
  // 7. Return success response
  const { error, value } = registerSchema.validate(req.body);
  if (error) {
    const err = new Error(error.details[0].message);
    err.statusCode = 400;
    throw err;
  }
  const { name, email, password, role } = value;
  // 2 check if user already exixts
  const existing = await User.findOne({ email });
  if (existing) {
    const err = new Error("User already exists");
    err.statusCode = 400;
    throw err;
  }
  // 3 Hash password (bycrypt autometically use salt internally)
  const hashedPassword = await bcrypt.hash(password, 10);

  // 4 create the user in DB
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: role || "user",
  });
  // 5 Generate JWT token
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  //  6 send response
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    },
  });
});

// ======================
// Login controller
// ======================
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //  Joi validation
  const { error } = loginSchema.validate(req.body);
  if (error) {
    const err = new Error("Invalid email or password ");
    err.statusCode = 400;
    throw err;
  }

  // Fetch user from DB comparing email
  const user = await User.findOne({ email });
  if (!user) {
    const err = new Error("Invalid email and password");
    err.statusCode = 400;
    throw err;
  }

  //compare password using bcrypt
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    const err = new Error("Invalid email or password");
    err.statusCode = 400;
    throw err;
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  res.status(200).json({
    success: true,
    name: "Login Succesfully",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    },
  });
});

module.exports = { register, login };
