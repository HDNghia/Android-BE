const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const foodRoute = require("./routes/foods")
const foodsUsersRoute = require("./routes/foodsUsers")
const postUserRoute = require("./routes/post")
const postReactRoute = require("./routes/postReaction")
const conversationRoute = require("./routes/conversation")
const groupMemberRoute = require("./routes/groupMember")
const groupRoute = require("./routes/group")
const messageroute = require("./routes/messages")
const courseRoute = require("./routes/courses")
const courseUserRoute = require("./routes/coursesUser")
const serviceTypeRoute = require("./routes/servicetype")
const courseScheduleRoute = require("./routes/courseSchedule")

const swaggerUI = require('swagger-ui-express')
const swaggerOption = require('../swagger')


dotenv.config()
//CONNECT Database
mongoose.set("strictQuery", false);

myDbConnection()
async function myDbConnection() {
    try {
        await mongoose.connect(process.env.mongoDB_URL, { useNewUrlParser: true });
        console.log('Connected Successfully')
    } catch (error) {
        console.log('Error connecting to DB ::', error);
    }
}

app.get("/api", (req, res) => {
    res.status(200).json("Service OK!");
})

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));


app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerOption))

app.use("/v1/conversation", conversationRoute)

app.use("/v1/courses", courseRoute);
app.use("/v1/courseUser", courseUserRoute)
app.use("/v1/courseSchedule", courseScheduleRoute)

app.use("/v1/food", foodRoute);
app.use("/v1/foodsUser", foodsUsersRoute)

app.use("/v1/group", groupRoute)
app.use("/v1/groupMember", groupMemberRoute)

app.use("/v1/message", messageroute)

app.use("/v1/post", postUserRoute)
app.use("/v1/postReact", postReactRoute)

app.use("/v1/user", userRoute);
app.use("/v1/serviceType", serviceTypeRoute)

var port = process.env.PORT || 3001

app.listen(port, () => {
    console.log("Server is running...");
})
