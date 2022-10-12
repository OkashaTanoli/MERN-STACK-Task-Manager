const express = require("express")
const app = express()
const router = require("./routes/task")
const ConnectMongoDB = require('./db/db')
const cors = require('cors')
const NotFound = require('./middleware/not_found')
const ErrorHandler = require("./middleware/error_handler")
require('dotenv').config()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use("/api/v1/tasks", router)
app.use(NotFound)
app.use(ErrorHandler)

ConnectMongoDB(process.env.MONGO_URI).then(() => {
    console.log('connected to db')
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}`)
    })

}).catch((err) => {
    console.log("err ha bhai ", err)
})