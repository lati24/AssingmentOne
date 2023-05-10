const express = require('express');
const router = express.Router()

const authController = require('../controller/auth');

router.post('/register',authController.registerUser)
router.post('/login',authController.login)
router.post('/logout',authController.logout)

module.exports = router