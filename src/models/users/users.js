const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    _id: { type: Number, require: true },
    firstname: { type: String, default: '' },
    lastname: { type: String, default: '' },
    birthday: { type: Number, default: 0 },
    gender: { type: String, default: '' },
    email: { type: String, require: true },
    phonenumber: { type: String, require: true },
    address: { type: String, default: '' },
    age: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
    weight: { type: Number, default: 0 },
    workingLevel: { type: Number, default: 0 },
    avtId: { type: String, default: '' },
    coverId: { type: String, default: '' },
    role: { type: Number, require: true }, // 0: admin 1: users 2: trainer
    wallet: { type: Number, default: 0 },
    isBan: { type: Boolean, default: false },
    status: { type: Number, default: 0 },
    lastActive: { type: Number, default: 0 },
    bankAccount: { type: String, default: ''}
}, {
    _id: false,
    timestamp: true
});

let Users = mongoose.model("Users", usersSchema);

module.exports = { Users };