const express = required('express');
const router = express.Router();

import{register} from '../controllers/authController'

// Define Router
router.post('/register',register)
router.post('/login',login)

module.exports = router;