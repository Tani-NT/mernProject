const express = require('express');
const router = express.Router();
const authController = require('../controller/auth-controller');
const validate = require("../middleware/auth-middleware");
const {signupSchema, loginSchema} = require("../validator/auth-validator");
const authMiddleware = require('../middleware/user-middleware');

router.route('/home').get(authController.home);
router
    .route("/register")
    .post(validate(signupSchema), authController.register);
router
    .route("/login")
    .post(validate(loginSchema), authController.login);
router
    .route("/user")
    .get(authMiddleware, authController.user);


module.exports = router;