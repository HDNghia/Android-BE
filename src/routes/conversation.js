const conversationController = require("../controllers/conversationController");

const router = require("express").Router();

//ADD A conversation
router.post("/", conversationController.addAconversation);

//GET ALL conversationS by userid and filter isBlock == false and return conversation
router.get("/:id", conversationController.getAllConversations);

//UPDATE A conversation
router.put("/:id", conversationController.updateconversation);

//Get conversation by userid and partnerid
// router.get("/partner", conversationController.getPartnerById);

module.exports = router;