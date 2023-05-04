const { Groups } = require("../models/chats/groups.js");
const { GroupMembers } = require("../models/chats/groupMembers.js");

const groupController = {
    //ADD A group
    addAgroup: (req, res) => {
        try {
            Groups.findOne({})
                .sort({ _id: 'desc' })
                .then(lastgroup => {
                    if (lastgroup) {
                        req.body._id = lastgroup._id + 1;
                        const newgroup = new Groups(req.body);
                        newgroup
                            .save()
                            .then(() => res.status(200).json(newgroup))
                    } else {
                        req.body._id = 1
                        const newgroup = new Groups(req.body);
                        newgroup
                            .save()
                            .then(() => res.status(200).json(newgroup))
                    }

                })
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET ALL Groups
    getAllGroups: async (req, res) => {
        try {
            const allGroups = await Groups.find();
            res.status(200).json(allGroups);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //GET A group
    // getAgroup: async (req, res) => {
    //     try {
    //         const group = await Groups.findById(req.params.id).populate("Attach");
    //         res.status(200).json(group);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },
    // Get group and memeber
    getGroupsAndMembers: async (req, res) => {
        try {
            let groupId = req.params.id;
            console.log(groupId);
            const group = await Groups.findById(groupId);
            const groupMember = await GroupMembers.findById(groupId);
            res.status(200).json({ ...group._doc, groupMember });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //UPDATE group
    updategroup: async (req, res) => {
        try {
            const group = await Groups.findById(req.params.id);
            await group.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

};

module.exports = groupController;
