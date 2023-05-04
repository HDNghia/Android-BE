const postController = require("../controllers/postController");

const router = require("express").Router();

// ADD A Post
router.post("/", postController.addAPost);

// GET ALL Posts sort by createDate Desc
router.get("/", postController.getAllPosts);

// DELETE A Post
router.delete("/:id", postController.deletePost);

// UPDATE A Post change modifiedDate
router.put("/:id", postController.updatePost);

// Get Posts by ownerID
router.get("/:id", postController.getPostsByUserID);

module.exports = router;