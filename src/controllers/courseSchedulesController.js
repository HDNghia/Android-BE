const { CourseSchedule } = require("../models/courses/coursesShedule.js");

const CourseScheduleController = {
    //ADD A CourseSchedule
    addACourseSchedule: (req, res) => {
        try {
            CourseSchedule.findOne({})
                .sort({ _id: 'desc' })
                .then(lastCourseSchedule => {
                    if (lastCourseSchedule) {
                        req.body._id = lastCourseSchedule._id + 1;
                        const newCourseSchedule = new CourseSchedule(req.body);
                        newCourseSchedule
                            .save()
                            .then(() => res.status(200).json(newCourseSchedule))
                    } else {
                        req.body._id = 1
                        const newCourseSchedule = new CourseSchedule(req.body);
                        newCourseSchedule
                            .save()
                            .then(() => res.status(200).json(newCourseSchedule))
                    }

                })
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET ALL CourseSchedule
    GetACourseSchedule: async (req, res) => {
        try {
            let CourseID = req.query.courseId;
            console.log("check courseID", CourseID);
            if (CourseID != null) {
                const GetCourseSchedule = await CourseSchedule.find({ courseId: CourseID })
                res.status(200).json(GetCourseSchedule);
            }
            else {
                const allCourseSchedule = await CourseSchedule.find()
                res.status(200).json(allCourseSchedule);
            }
        } catch (err) {
            res.status(200).json(err);

        }
    },

    //UPDATE CourseSchedule
    UpdateACourseSchedule: async (req, res) => {
        try {
            const CourseSchedule = await CourseSchedule.findById(req.params.id);
            await CourseSchedule.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete CourseSchedule
    DeleteACourseSchedule: async (req, res) => {
        try {
            const CourseSchedule = await CourseSchedule.findById(req.params.id);
            await CourseSchedule.deleteOne({ $set: req.body });
            res.status(200).json("Deleted successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = CourseScheduleController;
