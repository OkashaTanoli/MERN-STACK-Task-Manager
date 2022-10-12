const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        
    },
})

module.exports = mongoose.model("myTasks",TaskSchema);