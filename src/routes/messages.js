const messageController = require("../controllers/messageController");

const router = require("express").Router();

//ADD A message
router.post("/", messageController.addAmessage);

//GET A message
// router.get("/:id", messageController.getAUser);

//UPDATE A message
router.put("/:id", messageController.updatemessage);

// Get All message by conversationID sort by sentDate
router.get("/:id", messageController.getMessageByConversationId);

// Soft erase message / change status

module.exports = router;