const mongoose = require('mongoose');

// Define the schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    imgURL: { type: String, required: true },
    Category: { type: mongoose.Schema.Types.ObjectId },
    sellerId: { type: mongoose.Schema.Types.ObjectId },
});

// Create a model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;