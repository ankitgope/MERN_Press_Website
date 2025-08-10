What each part does (one-liners)
Model (models/User.js) — defines the data shape and talks to the database (Mongoose schema & model).

Controller (controllers/authController.js) — contains the request-handling logic (register, login, etc.), calls models and returns responses.

Router (router/auth.js) — maps HTTP endpoints to controller functions (e.g. POST /api/auth/register → authController.register).

(Also: middleware verifies tokens or roles between router and controller.)