const express = require('express');
const router = express.Router();
const authController = require('../controller/auth-controller');
const validate = require("../middleware/auth-middleware");
const {signupSchema, loginSchema} = require("../validator/auth-validator");

router.route('/home').get(authController.home);
router
    .route("/register")
    .post(validate(signupSchema), authController.register);
router
    .route("/login")
    .post(validate(loginSchema), authController.login);


// router.get('/router',(req,res)=>{
//     res.status(200).send("router page..")
// })

// router.route('/register').get((req,res)=>{
//     res.status(200).send("register page through route method ..")
// })

module.exports = router;