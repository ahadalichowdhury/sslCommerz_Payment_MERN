const express = require("express");
const app = express();
// const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

//import controller
const paymentController = require("./Controllers/PaymentController");

//database connection

mongoose.connect(process.env.MONGO_URI, ()=>{
    console.log("Database connected");
})
const port = 8000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//api route
app.post("/init", paymentController.paymentController)


app.post("/success", paymentController.successPayment)
app.post("/fail", paymentController.failPayment)
app.post("/cancel", paymentController.calcelPayment)


//cors problem solution
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get("/", (req, res) => res.send("Hello World!"));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
