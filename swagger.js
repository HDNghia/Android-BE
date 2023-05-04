const swaggerJSDoc = require('swagger-jsdoc');
const conver = require('./src/swaggerDefinitions/conversation')
const courses = require('./src/swaggerDefinitions/courses')
const foods = require('./src/swaggerDefinitions/foods')
const groups = require('./src/swaggerDefinitions/groups')
const message = require('./src/swaggerDefinitions/message')
const post = require('./src/swaggerDefinitions/post')
const service = require('./src/swaggerDefinitions/serviceType')

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: "Nodejs api project for mongoDB",
        version: '1.0.0'
    },
    servers: [
        {
            url: "https://andoroid-be.herokuapp.com/"
        }
    ],
    paths: {
        ...conver,
        ...courses,
        ...foods,
        ...groups,
        ...message,
        ...post,
        ...service
    },
    components: {
        schemas: {
            Conversation: {
                type: "object",
                properties: {
                    userId: {
                        type: "integer",
                        description: "",
                        format: "int64",
                        example: 1,
                    },
                    partnerId: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 2,
                    },
                    isGroupConver: {
                        type: "boolean",
                        description: "",
                        example: false,
                    },
                    isBlock: {
                        type: "boolean",
                        description: "",
                        example: false,
                    },
                    lastActive: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1683103370,
                    },
                    nickname: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                },
            },
            GroupMember: {
                type: "object",
                properties: {
                    userId: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                    nickname: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    joinDate: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1683103370,
                    },
                    role: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                },
            },
            Group: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "",
                        example: "Group 1",
                    },
                    avtId: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    description: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    createdDate: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1683103370,
                    },
                    createdBy: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                },
            },
            Message: {
                type: "object",
                properties: {
                    conversationId: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                    senderId: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                    attachmentId: {
                        type: "string",
                        description: "",
                        example: "",
                    },
                    messageContent: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    sentDate: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1683103370,
                    },
                    status: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                },
            },
            Course: {
                type: "object",
                properties: {
                    trainerId: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                    title: {
                        type: "string",
                        description: "",
                        example: "",
                    },
                    description: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    location: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    status: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                    startDate: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1683103370,
                    },
                    endDate: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1683103370,
                    },
                    capacity: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                    attachment: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    fee: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 20,
                    },
                    serviceTypeId: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                },
            },
            CourseSchedule: {
                type: "object",
                properties: {
                    courseId: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                    note: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    fromDateTime: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1683103370,
                    },
                    toDateTime: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1683103370,
                    },
                }
            },
            CourseUser: {
                type: "object",
                properties: {
                    courseId: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                    userId: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                    registerDateTime: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1683103370,
                    },
                    status: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                }
            },
            ServiceType: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    description: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                }
            },
            Food: {
                type: "object",
                properties: {
                    attachment: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    ingredients: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    name: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    nutrition: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    recipe: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    kcal: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                }
            },
            FoodUser: {
                type: "object",
                properties: {
                    foodId: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                    userId: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                    useDatetime: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1683103370,
                    },
                    session: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    }
                }
            },
            Post: {
                type: "object",
                properties: {
                    ownerId: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                    caption: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    attachmentId1: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    attachmentId2: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    createdDate: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1683103370,
                    },
                    lastModifyDate: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1988310,
                    },
                }
            },
            PostReaction: {
                type: "object",
                properties: {
                    postId: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                    userId: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                    typeReact: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1,
                    },
                    reactedDate: {
                        type: "integer",
                        format: "int64",
                        description: "",
                        example: 1683103370,
                    },
                    attachment: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    },
                    comment: {
                        type: "string",
                        description: "",
                        example: "Teo",
                    }
                }
            },
            id: {
                type: "integer",
                description: "",
                example: 1,
            }
        },
    },
};

const options = {
    swaggerDefinition,
    apis: ["./src/index.js"]
}

const swaggerSpec = swaggerJSDoc(options)
module.exports = swaggerSpec 