const mongoose = require('mongoose');

// Define the schema
const OrdersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    imgURL: { type: String, required: true },
    Category: { type: mongoose.Schema.Types.ObjectId },
    sellerId: { type: mongoose.Schema.Types.ObjectId },
    Userid: { type: mongoose.Schema.Types.ObjectId },
});

// Create a model from the schema
const Orders = mongoose.model('Orders', OrdersSchema);

module.exports = Orders;