const { Conversations } = require("../models/chats/conversations.js");
const { Users } = require("../models/users/users.js");
const conversationController = {
    //ADD A conversation
    addAconversation: (req, res) => {
        try {
            Conversations.findOne({})
                .sort({ _id: 'desc' })
                .then(lastconversation => {
                    if (lastconversation) {
                        req.body._id = lastconversation._id + 1;
                        const newconversation = new Conversations(req.body);
                        newconversation
                            .save()
                            .then(() => res.status(200).json(newconversation))
                    } else {
                        req.body._id = 1
                        const newconversation = new Conversations(req.body);
                        newconversation
                            .save()
                            .then(() => res.status(200).json(newconversation))
                    }

                })
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET ALL Conversations
    getAllConversations: async (req, res) => {
        try {
            const conversations = await Conversations.find({ $and: [{ userId: req.params.id }, { isBlock: false }] });
            let responList = [];
            if (conversations) conversations.forEach((el) => {
                let partnerinfo = findUser(el.partnerId);
                let item = {
                    ...el._doc,
                    partnerinfo
                };
                responList.push({ ...item });
            })
            res.status(200).json(responList);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //GET A conversation
    // getAconversation: async (req, res) => {
    //     try {
    //         const conversation = await Conversations.findById(req.params.id).populate("Attach");
    //         res.status(200).json(conversation);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },

    // get Partner of user
    getPartnerById: async (req, res) => {
        try {
            const conversation = await Conversations.find({ $and: [{ userId: req.params.id }, { isBlock: false }] });
            res.status(200).json(conversation);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //UPDATE conversation
    updateconversation: async (req, res) => {
        try {
            const conversation = await Conversations.findById(req.params.id);
            await conversation.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

};
async function findUser(id) {
    const userinfo = await Users.findById(id);
    return userinfo;
}
module.exports = conversationController;
