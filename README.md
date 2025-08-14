What each part does (one-liners)
Model (models/User.js) — defines the data shape and talks to the database (Mongoose schema & model).

Controller (controllers/authController.js) — contains the request-handling logic (register, login, etc.), calls models and returns responses.

Router (router/auth.js) — maps HTTP endpoints to controller functions (e.g. POST /api/auth/register → authController.register).

(Also: middleware verifies tokens or roles between router and controller.)

// controllers/authController.js

// Middleware wrapper to handle async errors
const asyncHandler = require('../middlewares/asyncHandler');

// Mongoose User model
const User = require('../models/User');

// For hashing passwords
const bcrypt = require('bcryptjs');

// For creating and verifying tokens
const jwt = require('jsonwebtoken');

// Validation library
const Joi = require('joi');


// ========================
//  Joi Schemas for Validation
// ========================
const registerSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('user', 'admin').optional()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});


// ========================
//  REGISTER Controller
// ========================
const register = asyncHandler(async (req, res) => {
  // 1️⃣ Validate request body
  const { error, value } = registerSchema.validate(req.body);
  if (error) {
    const err = new Error(error.details[0].message);
    err.statusCode = 400;
    throw err;
  }
  const { name, email, password, role } = value;

  // 2️⃣ Check if user already exists
  const existing = await User.findOne({ email });
  if (existing) {
    const err = new Error('User already exists');
    err.statusCode = 400;
    throw err;
  }

  // 3️⃣ Hash password (bcrypt automatically uses salt internally)
  const hashedPassword = await bcrypt.hash(password, 10);

  // 4️⃣ Create the user in DB
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: role || 'user'
  });

  // 5️⃣ Generate JWT token
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  // 6️⃣ Send response
  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    }
  });
});


// ========================
//  LOGIN Controller
// ========================
const login = asyncHandler(async (req, res) => {
  // 1️⃣ Validate request body
  const { error, value } = loginSchema.validate(req.body);
  if (error) {
    const err = new Error(error.details[0].message);
    err.statusCode = 400;
    throw err;
  }
  const { email, password } = value;

  // 2️⃣ Find user and include password (since in model it's select: false)
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    const err = new Error('Invalid credentials');
    err.statusCode = 400;
    throw err;
  }

  // 3️⃣ Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const err = new Error('Invalid credentials');
    err.statusCode = 400;
    throw err;
  }

  // 4️⃣ Generate JWT token
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  // 5️⃣ Send response
  res.json({
    success: true,
    message: 'Login successful',
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    }
  });
});


module.exports = { register, login };
















// ====================
// Login Controller
// ====================
const login = asyncHandler(async (req, res) => {
  const { error, value } = loginSchema.validate(req.body);
  if (error) {
    const err = new Error(error.details[0].message);
    err.statusCode = 400;
    throw err;
  }

  const { email, password } = value;

  const user = await User.findOne({ email });
  if (!user) {
    const err = new Error("Invalid email or password");
    err.statusCode = 401;
    throw err;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    const err = new Error("Invalid email or password");
    err.statusCode = 401;
    throw err;
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.status(200).json({
    success: true,
    message: "Login successful",
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

