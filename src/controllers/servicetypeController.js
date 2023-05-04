const { ServiceType } = require("../models/courses/serviceType.js");

const ServiceTypeController = {
    //ADD A ServiceType
    addAServiceType: (req, res) => {
        try {
            ServiceType.findOne({})
                .sort({ _id: 'desc' })
                .then(lastServiceType => {
                    if (lastServiceType) {
                        req.body._id = lastServiceType._id + 1;
                        const newServiceType = new ServiceType(req.body);
                        newServiceType
                            .save()
                            .then(() => res.status(200).json(newServiceType))
                    } else {
                        req.body._id = 1
                        const newServiceType = new ServiceType(req.body);
                        newServiceType
                            .save()
                            .then(() => res.status(200).json(newServiceType))
                    }

                })
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET ALL ServiceType
    getAllServiceType: async (req, res) => {
        try {
            const allServiceType = await ServiceType.find();
            res.status(200).json(allServiceType);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = ServiceTypeController;
