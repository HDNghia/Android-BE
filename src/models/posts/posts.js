const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
    _id: { type: Number, require: true },
    ownerId: { type: Number, require: true },
    caption: { type: String, default: '' },
    attachmentId1: { type: String, default: '' },
    attachmentId2: { type: String, default: '' },
    createdDate: { type: Number, require: true },
    lastModifyDate: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false }
}, {
    _id: false,
    timestamp: true
});
let Posts = mongoose.model("Posts", postsSchema);

module.exports = { Posts };