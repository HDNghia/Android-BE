const mongoose = require("mongoose");

const postReactionsSchema = new mongoose.Schema({
    _id: { type: Number, require: true },
    postId: { type: Number, require: true },
    userId: { type: Number, require: true },
    attachment: { type: String, default: '' },
    comment: { type: String, default: '' },
    typeReact: { type: Number, require: true }, // 0: Like 1: Comment
    reactedDate: { type: Number, require: true },
    isDisReact: { type: Boolean, default: false }
}, {
    _id: false,
    timestamp: true
});

let PostReactions = mongoose.model("PostReactions", postReactionsSchema);

module.exports = { PostReactions };