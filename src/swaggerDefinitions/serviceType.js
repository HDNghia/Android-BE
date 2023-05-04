const service = {
    "/v1/serviceType": {
        post: {
            tags: ["ServiceType"],
            description: "Add new ServiceType",
            operationId: "create ServiceType",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/ServiceType",
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
            tags: ["ServiceType"],
            description: "Get all ServiceType",
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
    }
}

module.exports = service