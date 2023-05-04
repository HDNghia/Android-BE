const { Posts } = require("../models/posts/posts.js");
const { PostReactions } = require("../models/posts/postReaction.js");

const userController = {
    //ADD A Post
    addAPost: (req, res) => {
        try {
            Posts.findOne({})
                .sort({ _id: 'desc' })
                .then(lastPost => {
                    if (lastPost) {
                        req.body._id = lastPost._id + 1;
                        const newPost = new Posts(req.body);
                        newPost
                            .save()
                            .then(() => res.status(200).json(newPost))
                    } else {
                        req.body._id = 1
                        const newPost = new Posts(req.body);
                        newPost
                            .save()
                            .then(() => res.status(200).json(newPost))
                    }

                })
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET ALL Posts
    getAllPosts: async (req, res) => {
        try {
            const allPosts = await Posts.find().sort({ _id: 'desc' });
            let responList = [];
            if (allPosts) allPosts.forEach((el) => {
                let postReaction = findPostReaction(el.postId);
                let item = {
                    ...el._doc,
                    postReaction
                }
                responList.push({ ...item });
            })
            res.status(200).json(responList);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get Posts by ownerID
    getPostsByUserID: async (req, res) => {
        try {
            const allPosts = await Posts.find({ ownerId: req.params.id }).sort({ _id: 'desc' });
            let responList = [];
            if (allPosts) allPosts.forEach((el) => {
                let postReaction = findPostReaction(el.postId);
                let item = {
                    ...el._doc,
                    postReaction
                }
                responList.push({ ...item });
            })
            res.status(200).json(responList);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //DELETE POSt
    deletePost: async (req, res) => {
        try {
            const Post = await Posts.findById(req.params.id);
            console.log('delte')
            await Post.updateOne({ isDeleted: true });
            res.status(200).json("Deleted successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //UPDATE Post
    updatePost: async (req, res) => {
        try {
            const Post = await Posts.findById(req.params.id);
            await Post.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

};
async function findPostReaction(postid) {
    const postReaction = await PostReactions.find({ $and: [{ postId: postid }, { isDisReact: false }] }).sort({ reactedDate: 'desc' });
    return postReaction;
}
module.exports = userController;
