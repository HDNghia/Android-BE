const mongoose = require("mongoose");

const courseUsersSchema = new mongoose.Schema({
    _id: { type: Number, require: true },
    courseId: { type: Number, require: true },
    userId: { type: Number, require: true },
    registerDateTime: { type: Number, require: true },
    status: { type: Boolean, require: true } // ["Chưa thanh toán", "Đã đăng ký"]
}, {
    _id: false,
    timestamp: true
});

let CourseUsers = mongoose.model("CourseUsers", courseUsersSchema);

module.exports = { CourseUsers };