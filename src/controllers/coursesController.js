const { Courses } = require("../models/courses/courses.js");

const CoursesController = {
    //ADD A Courses
    addACourses: (req, res) => {
        try {
            Courses.findOne({})
                .sort({ _id: 'desc' })
                .then(lastCourses => {
                    if (lastCourses) {
                        req.body._id = lastCourses._id + 1;
                        const newCourses = new Courses(req.body);
                        newCourses
                            .save()
                            .then(() => res.status(200).json(newCourses))
                    } else {
                        req.body._id = 1
                        const newCourses = new Courses(req.body);
                        newCourses
                            .save()
                            .then(() => res.status(200).json(newCourses))
                    }

                })
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET ALL Courses
    getAllCourses: async (req, res) => {
        try {
            // const allCourses = await Courses.find();
            const allCourses = await Courses.find({ isDeleted: false }).sort({ startDate: -1 });
            res.status(200).json(allCourses);
        } catch (err) {
            res.status(500).json(err);

        }
    },

    //GET A Courses
    getACourses: async (req, res) => {
        try {
            const courses = await Courses.findById(req.params.id);
            res.status(200).json(courses);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get by trainer id
    getCoursesbyTranerID: async (req, res) => {
        try {
            const allCourses = await Courses.find({ $and: [{ isDeleted: false }, { trainerId: req.params.id }] }).sort({ startDate: -1 })
            res.status(200).json(allCourses);
        } catch (err) {
            res.status(500).json(err);

        }
    },

    //UPDATE Courses
    UpdateACourses: async (req, res) => {
        try {
            const courses = await Courses.findById(req.params.id);
            await courses.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete A Courses
    DeleteACourses: async (req, res) => {
        try {
            const courses = await Courses.findById(req.params.id);
            await courses.updateOne({ isDeleted: true });
            res.status(200).json("Delete successfully!");
        } catch (error) {
            res.status(500).error(err);

        }
    }

};

module.exports = CoursesController;
