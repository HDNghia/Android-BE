const course = {
    "/v1/courses": {
        post: {
            tags: ["course"],
            description: "Add new course",
            operationId: "create course",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Course",
                        },
                    },
                },
            },
            parameters: [],
            responses: {
                200: {
                    description: "Post successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        },
        get: {
            tags: ["course"],
            description: "Get all courses.",
            parameters: [],
            responses: {
                200: {
                    description: "Get successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    },
    "/v1/courses/dtl/{id}": {
        get: {
            tags: ["course"],
            description: "Get course by id.",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "Course ID",
                },
            ],
            responses: {
                200: {
                    description: "Get successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        },
    },
    "/v1/courses/{id}": {
        get: {
            tags: ["course"],
            description: "Get course by trainer id.",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "Trainer ID",
                },
            ],
            responses: {
                200: {
                    description: "Get successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        },
        delete: {
            tags: ["course"],
            description: "Delete course by id.",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "Course ID",
                },
            ],
            responses: {
                200: {
                    description: "Deleted successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        },
        put: {
            tags: ["course"],
            description: "Update course",
            operationId: "create course",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Course",
                        },
                    },
                },
            },
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "Course ID",
                },
            ],
            responses: {
                200: {
                    description: "Updated successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    },
    "/v1/courseSchedule": {
        post: {
            tags: ["courseSchedule"],
            description: "Add new CourseSchedule",
            operationId: "create CourseSchedule",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/CourseSchedule",
                        },
                    },
                },
            },
            parameters: [],
            responses: {
                200: {
                    description: "Post successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        },
        get: {
            tags: ["courseSchedule"],
            description: "Get all courseSchedule.",
            parameters: [],
            responses: {
                200: {
                    description: "Get successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    },
    "/v1/courseSchedule/{id}": {
        delete: {
            tags: ["courseSchedule"],
            description: "Delete courseSchedule by id.",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "courseSchedule ID",
                },
            ],
            responses: {
                200: {
                    description: "Deleted successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        },
        put: {
            tags: ["courseSchedule"],
            description: "Update courseSchedule",
            operationId: "Update courseSchedule",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/CourseSchedule",
                        },
                    },
                },
            },
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "courseSchedule ID",
                },
            ],
            responses: {
                200: {
                    description: "Updated successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    },
    "/v1/courseUser": {
        post: {
            tags: ["CourseUser"],
            description: "Add new CourseUser",
            operationId: "create CourseUser",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/CourseUser",
                        },
                    },
                },
            },
            parameters: [],
            responses: {
                200: {
                    description: "Post successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        },
    },
    "/v1/courseUser?userId={UserId}": {
        get: {
            tags: ["CourseUser"],
            description: "get CourseUser by UserId",
            operationId: "get CourseUser by UserId",
            parameters: [
                {
                    name: "UserId",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "",
                },
            ],
            responses: {
                200: {
                    description: "get successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    },
    "/v1/courseUser?courseId={CourseId}&&userId={UserId}": {
        delete: {
            tags: ["CourseUser"],
            description: "Delete A CourseUser",
            operationId: "Delete A CourseUser",
            parameters: [
                {
                    name: "CourseId",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "",
                },
                {
                    name: "UserId",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "",
                }
            ],
            responses: {
                // response code
                200: {
                    description: "courseUser successfully", // response desc.
                },
                // response code
                404: {
                    description: "courseUser not found", // response desc.
                },
                // response code
                500: {
                    description: "Server error", // response desc.
                },
            },
        }
    },
    "/v1/courseUser/{id}": {
        put: {
            tags: ["CourseUser"],
            description: "Update CourseUser",
            operationId: "update CourseUser",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/CourseUser",
                        },
                    },
                },
            },
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "courseSchedule ID",
                },
            ],
            responses: {
                200: {
                    description: "Updated successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    },
    "/v1/courseUser/bycourse/{id}": {
        get: {
            tags: ["CourseUser"],
            description: "get CourseUser by CourseId",
            operationId: "get Course by CourseId",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "",
                },
            ],
            responses: {
                200: {
                    description: "get successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    },
    "/v1/courseUser/byuser/{id}": {
        get: {
            tags: ["CourseUser"],
            description: "get CourseUser by UserId",
            operationId: "get Course by UserId",
            parameters: [
                {
                    name: "id", 
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "",
                },
            ],
            responses: {
                200: {
                    description: "get successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    }
}

module.exports = course