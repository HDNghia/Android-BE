const mongoose = require("mongoose");

const conversationsSchema = new mongoose.Schema({
    _id: { type: Number, require: true },
    userId: { type: Number, require: true },
    partnerId: { type: Number, require: true }, // another user or groupid
    isGroupConver: { type: Boolean, default: false },
    isBlock: { type: Boolean, default: false },
    lastActive: { type: Number, require: true }, // timestamp
    nickname: { type: String, default: '' } // partner_id is not group ? partner_id nickname : ""
}, {
    _id: false,
    timestamp: true
});

let Conversations = mongoose.model("Conversations", conversationsSchema);

module.exports = { Conversations };