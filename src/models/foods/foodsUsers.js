const mongoose = require("mongoose");

const foodsSchema = new mongoose.Schema({
    _id: { type: Number, require: true },
    foodId: { type: Number, require: true },
    userId: { type: Number, require: true },
    useDatetime: { type: Number, require: true },
    session: { type: String, require: true } // sáng trưa chiều tối
}, {
    _id: false,
    timestamp: true
});

let FoodUsers = mongoose.model("FoodUsers", foodsSchema);

module.exports = { FoodUsers };