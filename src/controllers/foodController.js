const { Foods } = require("../models/foods/foods.js");

const foodController = {
    //ADD A food
    addAFood: (req, res) => {
        try {
            Foods.findOne({})
                .sort({ _id: 'desc' })
                .then(lastFood => {
                    if (lastFood) {
                        req.body._id = lastFood._id + 1;
                        const newFood = new Foods(req.body);
                        newFood
                            .save()
                            .then(() => res.status(200).json(newFood))
                    } else {
                        req.body._id = 1
                        const newFood = new Foods(req.body);
                        newFood
                            .save()
                            .then(() => res.status(200).json(newFood))
                    }

                })
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET ALL foods
    getAllFoods: async (req, res) => {
        try {
            const allFoods = await Foods.find();
            res.status(200).json(allFoods);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //GET A food
    // getAUser: async (req, res) => {
    //     try {
    //         const food = await Foods.findById(req.params.id).populate("Attach");
    //         res.status(200).json(food);
    //     } catch (err) {
    //         res.status(500).json(err);
    //     }
    // },

    // Get food By ID
    getFoodByID: async (req, res) => {
        try {
            const food = await Foods.findById(req.params.id);
            res.status(200).json(food);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    //UPDATE food
    updateFood: async (req, res) => {
        try {
            const food = await Foods.findById(req.params.id);
            await food.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

};

module.exports = foodController;
