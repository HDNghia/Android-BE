const foods = {
    "/v1/food": {
        post: {
            tags: ["Food"],
            description: "Add new Food",
            operationId: "create Food",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Food",
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
            tags: ["Food"],
            description: "Get all Food",
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
    "/v1/food/{id}": {
        put: {
            tags: ["Food"],
            description: "Update Food",
            operationId: "Update Food",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Food",
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
                    description: "Food ID",
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
            tags: ["Food"],
            description: "Get Food by id",
            operationId: "Get Food",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "Food ID",
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
    },
    "/v1/foodsUser": {
        post: {
            tags: ["FoodUser"],
            description: "create FoodUser",
            operationId: "create FoodUser",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/FoodUser",
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
        }
    },
    "/v1/foodsUser?foodId={FoodId}&&userId={UserId}": {
        delete: {
            tags: ["FoodUser"],
            description: "Delete A FoodUser",
            operationId: "Delete A FoodUser",
            parameters: [
                {
                    name: "FoodId",
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
                200: {
                    description: "delete FoodUser successfully", // response desc.
                },
                404: {
                    description: " FoodUser not found", // response desc.
                },
                500: {
                    description: "Server error", // response desc.
                },
            },
        }
    },
    "/v1/foodsUser/{id}": {
        put: {
            tags: ["FoodUser"],
            description: "Update FoodUser",
            operationId: "Update FoodUser",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/FoodUser",
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
                    description: "FoodUser ID",
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
            tags: ["FoodUser"],
            description: "Get FoodUser by user id",
            operationId: "Get FoodUser by user id",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    schema: {
                        $ref: "#/components/schemas/id",
                    },
                    required: true,
                    description: "user ID",
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

module.exports = foods