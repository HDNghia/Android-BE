const courseScheduleController = require("../controllers/courseSchedulesController");

const router = require("express").Router();

//////////////////////////////

// Add new schedule in course
router.post("/", courseScheduleController.addACourseSchedule);

// Update courseSchedule
router.put("/:id", courseScheduleController.UpdateACourseSchedule);

// Get courseSchedule with courseId
router.get("/", courseScheduleController.GetACourseSchedule);

// Delete schedule in course
router.delete("/:id", courseScheduleController.DeleteACourseSchedule);

module.exports = router;