const mongoose = require("mongoose");

const serviceTypeSchema = new mongoose.Schema({
    _id: { type: Number, require: true },
    name: { type: String, require: true },
    description: { type: String, require: true }
}, {
    _id: false,
    timestamp: true
});

let ServiceType = mongoose.model("ServiceType", serviceTypeSchema);

module.exports = { ServiceType };