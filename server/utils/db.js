const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDB = async () =>{
    try {
        await mongoose.connect(URI);
        console.log("connection successfull!");

    } catch (error) {
        console.error("failed to connect database..");
        process.exit(0);   
    }
}

module.exports = connectDB;