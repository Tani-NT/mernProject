require("dotenv").config();

const express = require('express');
const cors = require("cors");
const app = express();
const router = require('./route/auth-route');
const connectDB = require('./utils/db');
const errorMiddleware = require("./middleware/error-middleware");
const contactRoute = require("./route/contact-route");
const serviceRoute = require("./route/service-route");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}
app.use(cors(corsOptions));
app.use(express.json());
app.use("/mernProject", router);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);
app.use(errorMiddleware);

connectDB().then(()=>{
    const PORT = 3000;
    app.listen(PORT,()=>{
        console.log(`The server is listening at http://localhost:${PORT}`);
    });
});