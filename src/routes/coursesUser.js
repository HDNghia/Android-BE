const courseUserController = require("../controllers/courseUserController");

const router = require("express").Router();

// Add courseUser(status = "Chưa thanh toán") and
// Check : count(userid in coursesUsers) == capacity
// with the same courseID
// Set status in course = "Đã hết slot"
router.post("/", courseUserController.addACourseUsers);

// Get courseUser by courseid return userinfo and courseinfo
router.get("/bycourse/:id", courseUserController.getAllCourseUsersByCourseID);
router.get("/byuser/:id", courseUserController.getAllCourseUsersByUserID);

// Delete courseUser by courseid, userId
router.delete("/", courseUserController.DeleteACourseUsers);

// Update courseUser status
router.put("/:id", courseUserController.UpdateACourseUsers);

module.exports = router;