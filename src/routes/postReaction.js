const postReactController = require("../controllers/postReactController");

const router = require("express").Router();

//ADD A postReaction
router.post("/", postReactController.addAPostReactions);

//GET ALL postReactionS
// router.get("/", postReactController.getAllPostReactions);

//UPDATE A postReaction
router.put("/:id", postReactController.updatePostReactions);

module.exports = router;