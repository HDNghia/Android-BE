const mongoose = require("mongoose");

const groupMembersSchema = new mongoose.Schema({
    _id: { type: Number, require: true }, // Group ID
    userId: { type: Number, require: true },
    nickname: { type: String, default: '' },
    joinDate: { type: Number, require: true }, // timestamp
    role: { type: String, default: 1 } //1: member 0: creator
}, {
    _id: false,
    timestamp: true
});

let GroupMembers = mongoose.model("GroupMembers", groupMembersSchema);

module.exports = { GroupMembers };