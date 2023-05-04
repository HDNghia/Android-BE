const mongoose = require("mongoose");

const accountsSchema = new mongoose.Schema({
    _id: { type: Number, require: true },
    userId1: { type: Number, require: true },
    userId2: { type: Number, require: true },
    fromDate: { type: Number, require: true },
    isBan: { type: Boolean, default: false }
}, {
    _id: false,
    timestamp: true
});

let Accounts = mongoose.model("Accounts", accountsSchema);

module.exports = { Accounts };