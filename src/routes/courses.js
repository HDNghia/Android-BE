const courseController = require("../controllers/coursesController");

const router = require("express").Router();

//ADD A Course
router.post("/", courseController.addACourses);

//GET All courses sort by startDate desc
// with condition isDelete == false random
router.get("/", courseController.getAllCourses);


//GET course by id
router.get("/dtl/:id", courseController.getACourses);


//UPDATE A course
router.put("/:id", courseController.UpdateACourses);


// Delete course/ change isDelete = true
router.delete("/:id", courseController.DeleteACourses);

// Get list of course by trainer id condition isDeleted == fasle
router.get("/:id", courseController.getCoursesbyTranerID);

module.exports = router;