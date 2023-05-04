const mongoose = require("mongoose");

const courseSheduleSchema = new mongoose.Schema({
    _id: { type: Number, require: true },
    courseId: { type: Number, require: true },
    note: { type: String, default: '' },
    fromDateTime: { type: Number, require: true },
    toDateTime: { type: Number, require: true }
}, {
    _id: false,
    timestamp: true
});

let CourseSchedule = mongoose.model("CourseSchedule", courseSheduleSchema);

module.exports = { CourseSchedule };