const mongoose = require("mongoose");

const accountsSchema = new mongoose.Schema({
    _id: { type: Number, require: true },
    email: { type: String, require: true },
    phonenumber: { type: String, require: true },
    password: { type: String, require: true },
    role: { type: Number, require: true }, // 0: admin 1: users 2: trainer
    isBan: { type: Boolean, default: false }
}, {
    _id: false,
    timestamp: true
});

let Accounts = mongoose.model("Accounts", accountsSchema);

module.exports = { Accounts };