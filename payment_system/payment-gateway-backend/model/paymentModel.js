const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    total_amount: {
        type: Number,
    },
    currency: {
        type: String,
    },
    tran_id: {
        type: String,
    },
    success_url: {
        type: String,
    },
    fail_url: {
        type: String,
    },
    cancel_url: {
        type: String,
    },
    ipn_url: {
        type: String,
    },
    shipping_method: {
        type: String,
    },
    product_name: {
        type: String,
    },
    product_category: {
        type: String,
    },
    product_profile: {
        type: String,
    },
    cus_name: {
        type: String,
    },
    cus_email: {
        type: String,
    },
    cus_add1: {
        type: String,
    },
    cus_add2: {
        type: String,
    },
    cus_city: {
        type: String,
    },
    cus_state: {
        type: String,
    },
    cus_postcode: {
        type: String,
    },
    cus_country: {
        type: String,
    },
    cus_phone: {
        type: String,
    },
    cus_fax: {
        type: String,
    },
    ship_name: {
        type: String,
    },
    ship_add1: {
        type: String,
    },
    ship_add2: {
        type: String,
    },
    ship_city: {
        type: String,
    },
    ship_state: {
        type: String,
    },
    ship_postcode: {
        type: String,
    },
    ship_country: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('orders', paymentSchema);
