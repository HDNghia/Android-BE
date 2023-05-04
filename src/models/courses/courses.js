const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
    _id: { type: Number, require: true },
    trainerId: { type: Number, require: true },
    title: { type: String, require: true },
    description: { type: String, default: '' },
    location: { type: String, default: '' },
    status: { type: Number, require: true }, // [1. "Đang mở", 2. "Đã hết slot", 3. "Hết hạn", 4. "Chưa mở"]
    startDate: { type: Number, require: true }, // timestamp
    endDate: { type: Number, require: true }, // timestamp
    capacity: { type: Number, require: true },
    attachment: { type: String, require: true },
    fee: { type: Number, require: true },
    isDeleted: { type: Boolean, default: false },
    serviceTypeId: { type: Number, require: true },
    lastModifyDate: { type: Number, default: 0 }
}, {
    _id: false,
    timestamp: true
});

let Courses = mongoose.model("Courses", coursesSchema);

module.exports = { Courses };