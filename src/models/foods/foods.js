const mongoose = require("mongoose");

const foodsSchema = new mongoose.Schema({
    _id: { type: Number, require: true },
    attachment: { type: String, default: '' },
    ingredients: { type: String, default: '' },
    kcal: { type: Number, require: true },
    name: { type: String, require: true },
    nutrition: { type: String, default: '' },
    recipe: { type: String, default: '' }
}, {
    _id: false,
    timestamp: true
});

let Foods = mongoose.model("Foods", foodsSchema);

module.exports = { Foods };