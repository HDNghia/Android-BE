const { GroupMembers } = require("../models/chats/groupMembers.js");

const groupMemberController = {
    //ADD A groupMember
    addAgroupMember: (req, res) => {
        try {

            const newgroupMember = new GroupMembers(req.body);
            newgroupMember
                .save()
                .then(() => res.status(200).json(newgroupMember))
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET ALL GroupMembers
    getAllgroupMembers: async (req, res) => {
        try {
            const allgroupMembers = await GroupMembers.find();
            res.status(200).json(allgroupMembers);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //GET A groupMember
    // getAgroupMember: async (req, res) => {
    //     try {
    //         const groupMember = await GroupMembers.findById(req.params.id).populate("Attach");
    //         res.status(200).json(groupMember);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },

    //UPDATE groupMember
    updategroupMember: async (req, res) => {
        try {
            const groupMember = await GroupMembers.findById(req.params.id);
            await groupMember.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

};

module.exports = groupMemberController;
