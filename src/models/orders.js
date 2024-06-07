const mongoose = require('mongoose');

// Define the schema
const OrdersSchema = new mongoose.Schema({
    name: { type: String},
    price: { type: Number},
    quantity: { type: Number},
    imgURL: { type: String},
    Category: { type: mongoose.Schema.Types.ObjectId },
    sellerId: { type: mongoose.Schema.Types.ObjectId },
    Userid: { type: mongoose.Schema.Types.ObjectId },
});

// Create a model from the schema
const Orders = mongoose.model('Orders', OrdersSchema);

module.exports = Orders;