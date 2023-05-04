const groupMemberController = require("../controllers/groupMemberController");

const router = require("express").Router();

//ADD A groupMember
router.post("/", groupMemberController.addAgroupMember);

//GET ALL groupMemberS
router.get("/", groupMemberController.getAllgroupMembers);

//GET A groupMember
// router.get("/:id", groupMemberController.getAUser);

//UPDATE A groupMember
router.put("/:id", groupMemberController.updategroupMember);

//Delete a groupMember or leave

module.exports = router;