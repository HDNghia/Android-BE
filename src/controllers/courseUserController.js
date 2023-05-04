const { Courses } = require("../models/courses/courses.js");
const { CourseUsers } = require("../models/courses/coursesUsers.js");
const { Users } = require("../models/users/users.js");

const CourseUsersController = {
    //ADD A CourseUsers
    addACourseUsers: async (req, res) => {
        try {
            let course = await Courses.findById(req.body.courseId);
            if (course.status != 2) {
                CourseUsers.findOne({})
                    .sort({ _id: 'desc' })
                    .then(lastCourseUsers => {
                        if (lastCourseUsers) {
                            req.body._id = lastCourseUsers._id + 1;
                            const newCourseUsers = new CourseUsers(req.body);
                            newCourseUsers.save()
                                .then(async () => {
                                    let courseUsers = await CourseUsers.find({ courseId: req.body.courseId }).count()
                                    if (courseUsers == course.capacity) {
                                        await course.updateOne({ status: 2 });
                                    }
                                    res.status(200).json(newCourseUsers)
                                })

                        } else {
                            req.body._id = 1
                            const newCourseUsers = new CourseUsers(req.body);
                            newCourseUsers
                                .save()
                                .then(() => res.status(200).json(newCourseUsers))
                        }

                    })
            } else {
                res.status(200).json("Khóa học đã hết slot")
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //GET ALL CourseUsers
    getAllCourseUsersByUserID: async (req, res) => {
        try {
            const getCourses = await CourseUsers.find({ userId: req.params.id });
            const userinfo = await findUser(req.params.id);
            let responeList = [];
            if (getCourses) getCourses.forEach((el) => {
                let courseinfo = findCourse(el.courseId);
                let item = {
                    ...el._doc,
                    courseinfo,
                    userinfo,
                }
                responeList.push(item);
            })
            res.status(200).json(responeList);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAllCourseUsersByCourseID: async (req, res) => {
        try {
            const getCourses = await CourseUsers.find({ courseId: req.params.id });
            const courseinfo = await findCourse(req.params.id);
            let responeList = [];
            if (getCourses) getCourses.forEach((el) => {
                let userinfo = findUser(el.userId);
                let item = {
                    ...el._doc,
                    courseinfo,
                    userinfo,
                }
                responeList.push(item);
            })
            res.status(200).json(responeList);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //GET A CourseUsers
    getACourseUsers: async (req, res) => {
        try {
            const courseUsers = await CourseUsers.findById(req.params.id);
            res.status(200).json(courseUsers);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //UPDATE CourseUsers
    UpdateACourseUsers: async (req, res) => {
        try {
            const courseUsers = await CourseUsers.findById(req.params.id);
            await courseUsers.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Delete A CourseUsers
    DeleteACourseUsers: async (req, res) => {
        try {
            let CourseId = req.query.courseId;
            let UserId = req.query.userId;
            let FindById = await CourseUsers.find({ $and: [{ courseId: CourseId }, { userId: UserId }] });
            console.log("check find by id: ", FindById.toString());
            if (FindById.toString() != "") {
                await CourseUsers.find().deleteMany({ $and: [{ courseId: CourseId }, { userId: UserId }] });
                res.status(200).json("Delete successfully!");
            }
            else {
                res.status(200).json("Nhập CourseID hoặc UserId không hợp lệ");
            }

        } catch (error) {
            res.status(500).error(err);

        }
    }
};

async function findCourse(courseID) {
    const courseinfo = await Courses.findById(courseID);
    return courseinfo;
}

async function findUser(userId) {
    const userinfo = await Users.findById(userId);
    return userinfo;
}
module.exports = CourseUsersController;
