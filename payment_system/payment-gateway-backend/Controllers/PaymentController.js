const paymentModel = require("../model/paymentModel");
const SSLCommerzPayment = require("sslcommerz-lts");
require("dotenv").config();

exports.paymentController =(req, res)=>{
    const data = {
        total_amount: 33,
        currency: "BDT",
        tran_id: "REF123", // use unique tran_id for each api call
        success_url: "http://localhost:8000/success",
        fail_url: "http://localhost:8000/fail",
        cancel_url: "http://localhost:8000/cancel",
        ipn_url: "http://localhost:8000/ipn",
        shipping_method: "Courier",
        product_name: "req.body.product_name",
        product_category: "Electronic",
        product_profile: "req.body.product_profile",
        cus_name: "req.body.cus_name",
        cus_email: "req.body.cus_email",
        cus_add1: "Dhaka",
        cus_add2: "Dhaka",
        cus_city: "Dhaka",
        cus_state: "Dhaka",
        cus_postcode: "1000",
        cus_country: "Bangladesh",
        cus_phone: "01711111111",
        cus_fax: "01711111111",
        ship_name: "Customer Name",
        ship_add1: "Dhaka",
        ship_add2: "Dhaka",
        ship_city: "Dhaka",
        ship_state: "Dhaka",
        ship_postcode: 1000,
        ship_country: "Bangladesh",
    };
    const sslcz = new SSLCommerzPayment(
        process.env.store_id,
        process.env.store_password,
        false
    );
    sslcz.init(data).then((apiResponse) => {
        if (apiResponse?.GatewayPageURL) {
            res.redirect(apiResponse.GatewayPageURL);
        } else {
            res.status(500).json(apiResponse);
        }
    });
    paymentModel.create(data, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
}

exports.successPayment = (req, res) => {
    //for redirect to the frontend success page
    res.status(200).redirect("http://localhost:3000/successpage");
};
exports.failPayment=(req, res) => {
    res.status(200).redirect("http://localhost:3000/");
};
exports.calcelPayment=(req, res) => {
    res.status(200).redirect("http://localhost:3000/");
};
