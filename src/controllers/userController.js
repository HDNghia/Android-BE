const { Users } = require("../models/users/users");

const userController = {
    //ADD A USER
    addAUser: (req, res) => {
        try {
            Users.findOne({})
                .sort({ _id: 'desc' })
                .then(lastUser => {
                    if (lastUser) {
                        req.body._id = lastUser._id + 1;
                        const newUser = new Users(req.body);
                        newUser
                            .save()
                            .then(() => res.status(200).json(newUser))
                    }
                    else {
                        req.body._id = 1
                        const newUser = new Users(req.body);
                        newUser
                            .save()
                            .then(() => res.status(200).json(newUser))
                    }
                })
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET ALL USERS
    getAllUsers: async (req, res) => {
        try {
            const allUsers = await Users.find();
            res.status(200).json(allUsers);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //GET A USER
    // getAUser: async (req, res) => {
    //     try {
    //         const user = await Users.findById(req.params.id).populate("Attach");
    //         res.status(200).json(user);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },

    //UPDATE USER
    updateUser: async (req, res) => {
        try {
            const user = await Users.findById(req.params.id);
            await user.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

};

module.exports = userController;