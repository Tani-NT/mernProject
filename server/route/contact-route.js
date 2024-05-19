const express = require("express");
const router = express.Router();
const { contactSchema } = require("../validator/auth-validator");
const validate = require("../middleware/auth-middleware");
const contactForm = require("../controller/contact-controller");

router
    .route("/contact")
    .post(validate(contactSchema), contactForm);

module.exports = router;