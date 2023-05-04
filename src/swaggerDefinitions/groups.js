const group = {
    "/v1/group": {
        post: {
            tags: ["Group"],
            description: "Add new Group",
            operationId: "create Group",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Group",
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
            tags: ["Group"],
            description: "Get all Group",
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
    "/v1/group/{id}": {
        put: {
            tags: ["Group"],
            description: "Update Group",
            operationId: "Update Group",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Group",
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
                    description: "Group ID",
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
        },
        get: {
            tags: ["Group"],
            description: "Get Group by id",
            operationId: "Get Group",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "Group ID",
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
        }
    },
    "/v1/groupMember": {
        post: {
            tags: ["GroupMember"],
            description: "Add new GroupMember",
            operationId: "create GroupMember",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/GroupMember",
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
            tags: ["GroupMember"],
            description: "Get all GroupMember",
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
    "/v1/groupMember/{id}": {
        put: {
            tags: ["GroupMember"],
            description: "Update GroupMember",
            operationId: "Update GroupMember",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/GroupMember",
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
                    description: "GroupMember ID",
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
        },
    }
}

module.exports = group