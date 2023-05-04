const mongoose = require("mongoose");

const groupsSchema = new mongoose.Schema({
    _id: { type: Number, require: true },
    name: { type: String, require: true },
    avtId: { type: String, default: '' }, // base64 string
    description: { type: String, default: '' },
    createdDate: { type: Number, require: true }, // timestamp
    createdBy: { type: Number, require: true }
}, {
    _id: false,
    timestamp: true
});

let Groups = mongoose.model("Groups", groupsSchema);

module.exports = { Groups };