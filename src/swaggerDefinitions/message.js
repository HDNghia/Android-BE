const message = {
    "/v1/message": {
        post: {
            tags: ["Message"],
            description: "Add new Message",
            operationId: "create Message",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Message",
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
    "/v1/message/{id}": {
        put: {
            tags: ["Message"],
            description: "Update Message",
            operationId: "Update Message",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Message",
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
                    description: "Message ID",
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
            tags: ["Message"],
            description: "Get Message by conversation id",
            operationId: "Get Message by conversation id",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "Conversation ID",
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
}

module.exports = message