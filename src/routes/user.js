const userController = require("../controllers/userController");

const router = require("express").Router();

//ADD A USER
router.post("/", userController.addAUser);

//GET ALL USERS
router.get("/", userController.getAllUsers);

//GET A USER
// router.get("/:id", userController.getAUser);

//UPDATE A USER
router.put("/:id", userController.updateUser);

// Get userinfo

module.exports = router;