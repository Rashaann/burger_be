const mongoose = require('mongoose');

const burgersSchema = mongoose.Schema({
    id: String,
    name: String,
    ingredients: String,
    description: String,
    price: String,
    image: String,   
    stripeId: String,
    availability: Boolean,
    date: Date,
});

const Burger = mongoose.model('burgers', burgersSchema);

module.exports = Burger;