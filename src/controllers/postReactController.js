const { PostReactions } = require("../models/posts/postReaction.js");

const postReactController = {
    //ADD A PostReaction
    addAPostReactions: (req, res) => {
        try {
            PostReactions.findOne({})
                .sort({ _id: 'desc' })
                .then(lastPostReaction => {
                    if (lastPostReaction) {
                        req.body._id = lastPostReaction._id + 1;
                        const newPostReaction = new PostReactions(req.body);
                        newPostReaction
                            .save()
                            .then(() => res.status(200).json(newPostReaction))
                    } else {
                        req.body._id = 1
                        const newPostReaction = new PostReactions(req.body);
                        newPostReaction
                            .save()
                            .then(() => res.status(200).json(newPostReaction))
                    }

                })
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET ALL PostReactions
    // getAllPostReactions: async (req, res) => {
    //     try {
    //         const allPostReactions = await PostReactions.find();
    //         res.status(200).json(allPostReactions);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },

    //GET A PostReaction
    // getAUser: async (req, res) => {
    //     try {
    //         const PostReaction = await PostReactions.findById(req.params.id).populate("Attach");
    //         res.status(200).json(PostReaction);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },



    //UPDATE PostReaction
    updatePostReactions: async (req, res) => {
        try {
            const PostReaction = await PostReactions.findById(req.params.id);
            await PostReaction.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

};

module.exports = postReactController;
