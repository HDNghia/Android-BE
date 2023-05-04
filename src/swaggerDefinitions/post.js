const post = {
    "/v1/post": {
        post: {
            tags: ["Post"],
            description: "Add new Post",
            operationId: "create Post",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Post",
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
            tags: ["Post"],
            description: "Get all Post",
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
    "/v1/post/{id}": {
        put: {
            tags: ["Post"],
            description: "Update Post",
            operationId: "Update Post",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Post",
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
                    description: "Post ID",
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
            tags: ["Post"],
            description: "Get Post by id",
            operationId: "Get Post",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "Post ID",
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
            tags: ["Post"],
            description: "Delete Post by id",
            operationId: "Delete Post",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "Post ID",
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
    "/v1/postReact": {
        post: {
            tags: ["PostReaction"],
            description: "Add new PostReaction",
            operationId: "create PostReaction",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/PostReaction",
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
    "/v1/postReact/{id}": {
        put: {
            tags: ["PostReaction"],
            description: "Update PostReaction",
            operationId: "Update PostReaction",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/PostReaction",
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
                    description: "PostReaction ID",
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

module.exports = post