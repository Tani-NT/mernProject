const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        const contactDB = await Contact.create(response);
        console.log("Contact saved:", contactDB);
        return res.status(200).json({ msg: "Message sent successfully!" });
    } catch (error) {
        console.error("Error saving contact:", error);
        return res.status(500).json({ msg: "Message not delivered!" });
    }
}

module.exports = contactForm;
