const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema({
    _id: { type: Number, require: true },
    conversationId: { type: Number, require: true },
    senderId: { type: Number, require: true },
    attachmentId: { type: String, default: '' }, // base64 string
    messageContent: { type: String, default: '' },
    sentDate: { type: Number, require: true }, //timestamp
    status: { type: Number, default: 0 } // 0: Da gui, 1: Da xem, 2: delete all side, 3: delete sender side
}, {
    _id: false,
    timestamp: true
});

let Messages = mongoose.model("Messages", messagesSchema);

module.exports = { Messages };