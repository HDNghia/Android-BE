const groupController = require("../controllers/groupController");

const router = require("express").Router();

//ADD A group
router.post("/", groupController.addAgroup);

//GET ALL groupS
router.get("/", groupController.getAllGroups);

//GET group and member
router.get("/:id", groupController.getGroupsAndMembers);

//UPDATE A group
router.put("/:id", groupController.updategroup);

module.exports = router;